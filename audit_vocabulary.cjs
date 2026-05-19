const createJiti = require("jiti");

const jiti = createJiti(__filename, {
  interopDefault: true,
});

const { songs } = jiti("./src/data/songs.ts");
const { collectWords } = jiti("./src/utils/collectWords.ts");

function normalizeText(value) {
  return value
    .normalize("NFKC")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[^0-9A-Za-z가-힣]+/g, "")
    .toLowerCase();
}

function normalizeKorean(value) {
  return value.replace(/[^가-힣]+/g, "");
}

function isGrammarLike(token) {
  return (
    token.originType === "grammar" ||
    token.surface.startsWith("-") ||
    token.base.startsWith("-") ||
    token.pos?.includes("助詞") ||
    token.pos?.includes("語尾") ||
    token.pos?.includes("文法")
  );
}

function hasContextMarker(text) {
  if (!text) {
    return false;
  }

  return /ここでは|この曲|この行|文脈|韓国語では/.test(text);
}

function looksTooVerbose(text) {
  if (!text) {
    return false;
  }

  return text.length >= 28 || text.includes(" / ") || text.includes("。");
}

function isContractionExplanation(text) {
  return Boolean(text && /縮約|略|会話形|くだけた形/.test(text));
}

function getStemVariants(text) {
  const normalized = normalizeKorean(text.replace(/[?!.,]+$/g, ""));
  const stems = new Set([normalized]);

  if (normalized.endsWith("다") && normalized.length >= 2) {
    stems.add(normalized.slice(0, -1));
  }

  if (normalized.endsWith("하다") && normalized.length >= 3) {
    stems.add(normalized.slice(0, -2));
    stems.add(normalized.slice(0, -2) + "해");
  }

  if (normalized.endsWith("이다") && normalized.length >= 3) {
    stems.add(normalized.slice(0, -2));
    stems.add(normalized.slice(0, -2) + "이");
  }

  return Array.from(stems).filter((stem) => stem.length >= 2);
}

function isAnchoredToken(line, token, tokens) {
  if (isGrammarLike(token)) {
    return true;
  }

  const lineText = normalizeText(line.korean);
  const lineKorean = normalizeKorean(line.korean);
  const candidates = [
    normalizeText(token.surface),
    normalizeText(token.base),
    normalizeKorean(token.surface),
    normalizeKorean(token.base),
  ].filter(Boolean);

  if (candidates.some((candidate) => lineText.includes(candidate))) {
    return true;
  }

  const stems = Array.from(
    new Set([...getStemVariants(token.surface), ...getStemVariants(token.base)]),
  );

  if (stems.some((stem) => lineKorean.includes(stem))) {
    return true;
  }

  return stems.some((stem) =>
    tokens.some((sibling) => {
      if (sibling === token) {
        return false;
      }

      const siblingSurface = normalizeKorean(sibling.surface);
      return siblingSurface.length >= 2 && siblingSurface.startsWith(stem);
    }),
  );
}

function findSuspiciousLines() {
  const results = [];

  for (const song of songs) {
    for (const line of song.lines) {
      const anchoredFlags = line.tokens.map((token) =>
        isAnchoredToken(line, token, line.tokens),
      );

      let leadingUnanchored = 0;
      for (const anchored of anchoredFlags) {
        if (anchored) {
          break;
        }
        leadingUnanchored += 1;
      }

      let trailingUnanchored = 0;
      for (let index = anchoredFlags.length - 1; index >= 0; index -= 1) {
        if (anchoredFlags[index]) {
          break;
        }
        trailingUnanchored += 1;
      }

      const totalUnanchored = anchoredFlags.filter((anchored) => !anchored).length;
      const suspicious =
        (leadingUnanchored >= 3 && anchoredFlags.some(Boolean)) ||
        (trailingUnanchored >= 3 && anchoredFlags.some(Boolean)) ||
        (totalUnanchored >= 4 && totalUnanchored >= Math.ceil(line.tokens.length / 2));

      if (!suspicious) {
        continue;
      }

      results.push({
        song: song.title,
        korean: line.korean,
        leadingUnanchored,
        trailingUnanchored,
        totalUnanchored,
        tokens: line.tokens.map((token, index) => ({
          surface: token.surface,
          base: token.base,
          anchored: anchoredFlags[index],
        })),
      });
    }
  }

  return results;
}

function findSuspiciousWords() {
  return collectWords(songs)
    .map((word) => {
      const reasons = [];

      if (!isGrammarLike(word) && hasContextMarker(word.shortMeaning)) {
        reasons.push("shortMeaning has context marker");
      }
      if (!isGrammarLike(word) && hasContextMarker(word.meaning)) {
        reasons.push("meaning has context marker");
      }
      if (!isGrammarLike(word) && hasContextMarker(word.explanation)) {
        reasons.push("explanation has context marker");
      }
      if (!isGrammarLike(word) && looksTooVerbose(word.shortMeaning)) {
        reasons.push("shortMeaning looks verbose");
      }
      if (!isGrammarLike(word) && looksTooVerbose(word.meaning)) {
        reasons.push("meaning looks verbose");
      }
      if (
        !isGrammarLike(word) &&
        word.wordLevel <= 3 &&
        word.occurrences.length >= 5 &&
        word.explanation &&
        !isContractionExplanation(word.explanation)
      ) {
        reasons.push("very common word still has explanation");
      }

      return {
        surface: word.surface,
        base: word.base,
        songCount: word.songTitles.length,
        occurrenceCount: word.occurrences.length,
        shortMeaning: word.shortMeaning,
        meaning: word.meaning,
        explanation: word.explanation,
        reasons,
      };
    })
    .filter((word) => word.reasons.length > 0)
    .sort((a, b) => b.occurrenceCount - a.occurrenceCount);
}

const suspiciousLines = findSuspiciousLines();
const suspiciousWords = findSuspiciousWords();

console.log("=== Suspicious Words ===");
console.log(JSON.stringify(suspiciousWords.slice(0, 80), null, 2));
console.log("=== Suspicious Lines ===");
console.log(JSON.stringify(suspiciousLines.slice(0, 80), null, 2));
