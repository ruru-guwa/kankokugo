import type { Song, Token } from "../types/song";
import {
  getTokenIdentityId,
  getTokenIdentityKey,
  stripDecorativeTokenPunctuation,
} from "./tokenIdentity";

export type WordOccurrence = {
  songId: string;
  songTitle: string;
  songArtist: string;
  lineId: string;
  lineKorean: string;
};

export type CollectedWord = Token & {
  occurrences: WordOccurrence[];
  songIds: string[];
  songTitles: string[];
  songArtists: string[];
};

type WordAggregate = {
  primaryToken: Token;
  occurrences: Map<string, WordOccurrence>;
  tokens: Token[];
};

function isGrammarLikeToken(token: Token): boolean {
  return (
    token.originType === "grammar" ||
    token.surface.startsWith("-") ||
    token.base.startsWith("-") ||
    token.pos?.includes("助詞") === true ||
    token.pos?.includes("語尾") === true ||
    token.pos?.includes("文法") === true
  );
}

function looksLikeGenericGrammarGloss(text: string | undefined): boolean {
  if (!text?.trim()) {
    return false;
  }

  return (
    /[〜～]/.test(text) ||
    /^[\-−]/.test(text) ||
    /助詞|語尾|文法|接辞|縮約|変化|接続|比喩|表す|〜/.test(text)
  );
}

function looksLikeContextSpecificNote(text: string | undefined): boolean {
  if (!text?.trim()) {
    return false;
  }

  return /ここでは|この曲|この行|歌詞では|文脈|韓国語では/.test(text);
}

function normalizeCandidateText(text: string): string {
  return text.replace(/\s+/g, " ").replace(/\s*。+\s*$/g, "").trim();
}

function containsJapanese(text: string): boolean {
  return /[ぁ-んァ-ヶ一-龯々]/.test(text);
}

function looksLikeMeaningNoteSegment(text: string): boolean {
  return (
    looksLikeContextSpecificNote(text) ||
    /の縮約|直訳|会話では|文法的には|伝聞|比喩|という感じ/.test(text) ||
    /[가-힣A-Za-z].*[=+]/.test(text)
  );
}

function getBestMeaningSegment(text: string): string {
  const normalized = normalizeCandidateText(text);
  if (!normalized.includes(" / ")) {
    return normalized;
  }

  const segments = normalized
    .split(" / ")
    .map((segment) => segment.trim())
    .filter(Boolean);

  const scoredSegments = segments
    .map((segment) => {
      let score = 0;

      if (containsJapanese(segment)) {
        score += 8;
      }

      if (!looksLikeMeaningNoteSegment(segment)) {
        score += 10;
      }

      if (!/[=+]/.test(segment)) {
        score += 2;
      }

      if (segment.length <= 24) {
        score += 4;
      }

      if (/[가-힣]/.test(segment) && !containsJapanese(segment)) {
        score -= 6;
      }

      return { segment, score };
    })
    .sort((a, b) => b.score - a.score || a.segment.length - b.segment.length);

  return scoredSegments[0]?.segment ?? normalized;
}

function getMeaningCandidate(token: Token): string {
  const fromMeaning = getBestMeaningSegment(token.meaning || token.shortMeaning);
  const fromShortMeaning = normalizeCandidateText(token.shortMeaning);

  if (
    fromShortMeaning &&
    containsJapanese(fromShortMeaning) &&
    fromShortMeaning.length <= Math.max(18, fromMeaning.length - 8)
  ) {
    return fromShortMeaning;
  }

  return fromMeaning;
}

function getShortMeaningCandidate(token: Token): string {
  const shortMeaning = normalizeCandidateText(token.shortMeaning);
  if (!shortMeaning || looksLikeMeaningNoteSegment(shortMeaning)) {
    return getMeaningCandidate(token);
  }

  return shortMeaning;
}

function sanitizeExplanationText(text: string | undefined): string | undefined {
  if (!text?.trim()) {
    return undefined;
  }

  const sentences = text
    .split(/(?<=。)/)
    .map((sentence) => normalizeCandidateText(sentence))
    .filter(Boolean)
    .filter((sentence) => !looksLikeContextSpecificNote(sentence));

  const normalized = sentences.join("。 ").trim();
  return normalized || undefined;
}

function isContractionExplanation(text: string | undefined): boolean {
  return Boolean(text && /縮約|略|会話形|くだけた形/.test(text));
}

function isUsefulExplanation(
  explanation: string | undefined,
  meaning: string,
  shortMeaning: string,
  token: Token,
  occurrenceCount: number,
): explanation is string {
  if (!explanation) {
    return false;
  }

  if (explanation === meaning || explanation === shortMeaning) {
    return false;
  }

  if (
    token.wordLevel &&
    token.wordLevel <= 3 &&
    occurrenceCount >= 5 &&
    !/縮約|略|くだけた|会話形|対比|強調/.test(explanation)
  ) {
    return false;
  }

  return true;
}

function scoreMeaningCandidate(text: string, frequency: number): number {
  let score = frequency * 8;

  if (containsJapanese(text)) {
    score += 12;
  }

  if (!looksLikeMeaningNoteSegment(text)) {
    score += 16;
  }

  if (text.length <= 18) {
    score += 8;
  } else if (text.length <= 28) {
    score += 4;
  } else {
    score -= 12;
  }

  if (/^[A-Za-z ]+$/.test(text)) {
    score -= 3;
  }

  return score;
}

function pickBestMeaning(
  tokens: Token[],
  picker: (token: Token) => string,
): string | undefined {
  const counts = new Map<string, number>();

  tokens.forEach((token) => {
    const candidate = picker(token);
    if (!candidate) {
      return;
    }

    counts.set(candidate, (counts.get(candidate) ?? 0) + 1);
  });

  return Array.from(counts.entries())
    .sort(
      ([aText, aCount], [bText, bCount]) =>
        scoreMeaningCandidate(bText, bCount) -
          scoreMeaningCandidate(aText, aCount) ||
        aText.length - bText.length,
    )[0]?.[0];
}

function pickBestExplanation(
  tokens: Token[],
  meaning: string,
  shortMeaning: string,
  occurrenceCount: number,
): string | undefined {
  const counts = new Map<string, { count: number; token: Token }>();

  tokens.forEach((token) => {
    const candidate = sanitizeExplanationText(token.explanation);
    if (!isUsefulExplanation(candidate, meaning, shortMeaning, token, occurrenceCount)) {
      return;
    }

    const existing = counts.get(candidate);
    if (existing) {
      existing.count += 1;
      return;
    }

    counts.set(candidate, { count: 1, token });
  });

  return Array.from(counts.entries())
    .sort(([, a], [, b]) => {
      const aScore =
        a.count * 8 +
        (/縮約|略|くだけた|会話形/.test(a.token.explanation ?? "") ? 8 : 0) +
        (a.token.wordLevel && a.token.wordLevel <= 3 ? 3 : 0) -
        Math.max(0, (a.token.explanation?.length ?? 0) - 36);
      const bScore =
        b.count * 8 +
        (/縮約|略|くだけた|会話形/.test(b.token.explanation ?? "") ? 8 : 0) +
        (b.token.wordLevel && b.token.wordLevel <= 3 ? 3 : 0) -
        Math.max(0, (b.token.explanation?.length ?? 0) - 36);
      return bScore - aScore;
    })[0]?.[0];
}

function buildCollectedWord(
  primaryToken: Token,
  tokens: Token[],
  occurrenceCount: number,
): Token {
  const meaning =
    pickBestMeaning(tokens, getMeaningCandidate) ??
    getMeaningCandidate(primaryToken) ??
    primaryToken.meaning;
  const shortMeaning =
    pickBestMeaning(tokens, getShortMeaningCandidate) ??
    getShortMeaningCandidate(primaryToken) ??
    meaning;
  const explanation = pickBestExplanation(
    tokens,
    meaning,
    shortMeaning,
    occurrenceCount,
  );
  const trimmedExplanation =
    explanation &&
    !(primaryToken.wordLevel && primaryToken.wordLevel <= 2 && occurrenceCount >= 5) &&
    !(
      primaryToken.wordLevel &&
      primaryToken.wordLevel <= 3 &&
      occurrenceCount >= 5 &&
      !isContractionExplanation(explanation)
    )
      ? explanation
      : primaryToken.wordLevel &&
          primaryToken.wordLevel <= 3 &&
          occurrenceCount >= 5 &&
          isContractionExplanation(explanation)
        ? explanation
        : undefined;

  return {
    ...primaryToken,
    surface: stripDecorativeTokenPunctuation(primaryToken.surface) || primaryToken.surface,
    base: stripDecorativeTokenPunctuation(primaryToken.base) || primaryToken.base,
    shortMeaning,
    meaning,
    explanation: trimmedExplanation,
  };
}

function getTokenRichnessScore(token: Token): number {
  let score =
    Math.min(token.meaning.length, 18) +
    Math.min(token.shortMeaning.length, 12) +
    (token.pos ? 20 : 0) +
    (token.wordLevel ? 20 : token.level ? 10 : 0) +
    (token.origin ? 18 : 0) +
    (token.breakdown ? 15 : 0) +
    (token.explanation ? 16 : 0) +
    (token.relatedWords?.length ? token.relatedWords.length * 3 : 0) +
    (token.example ? 10 : 0);

  if (isGrammarLikeToken(token)) {
    score += looksLikeGenericGrammarGloss(token.shortMeaning) ? 80 : -120;
    score += looksLikeGenericGrammarGloss(token.meaning) ? 70 : -100;

    if (token.explanation) {
      score += looksLikeGenericGrammarGloss(token.explanation) ? 24 : -36;
      if (/[가-힣]{2,}/.test(token.explanation)) {
        score -= 18;
      }
    }

    if (token.meaning.includes(" / ")) {
      score -= 16;
    }
  }

  if (!isGrammarLikeToken(token)) {
    if (looksLikeContextSpecificNote(token.shortMeaning)) {
      score -= 24;
    }

    if (looksLikeContextSpecificNote(token.meaning)) {
      score -= 24;
    }

    if (looksLikeContextSpecificNote(token.explanation)) {
      score -= 40;
    }
  }

  return score;
}

function choosePrimaryToken(current: Token, candidate: Token): Token {
  return getTokenRichnessScore(candidate) > getTokenRichnessScore(current)
    ? candidate
    : current;
}

export function collectWords(songs: Song[]): CollectedWord[] {
  const aggregates = new Map<string, WordAggregate>();

  for (const song of songs) {
    for (const line of song.lines) {
      for (const token of line.tokens) {
        const key = getTokenIdentityKey(token);
        const occurrenceKey = `${song.id}::${line.korean}`;
        const occurrence: WordOccurrence = {
          songId: song.id,
          songTitle: song.title,
          songArtist: song.artist,
          lineId: line.id,
          lineKorean: line.korean,
        };

        const existing = aggregates.get(key);
        if (!existing) {
          aggregates.set(key, {
            primaryToken: token,
            occurrences: new Map([[occurrenceKey, occurrence]]),
            tokens: [token],
          });
          continue;
        }

        existing.primaryToken = choosePrimaryToken(existing.primaryToken, token);
        existing.occurrences.set(occurrenceKey, occurrence);
        existing.tokens.push(token);
      }
    }
  }

  return Array.from(aggregates.values()).map(
    ({ primaryToken, occurrences, tokens }) => {
      const occurrenceList = Array.from(occurrences.values());
      const songMap = new Map<string, string>();
      const artistMap = new Map<string, string>();
      const collectedWord = buildCollectedWord(
        primaryToken,
        tokens,
        occurrenceList.length,
      );

      occurrenceList.forEach((occurrence) => {
        songMap.set(occurrence.songId, occurrence.songTitle);
        artistMap.set(occurrence.songArtist, occurrence.songArtist);
      });

      return {
        ...collectedWord,
        id: getTokenIdentityId(collectedWord),
        occurrences: occurrenceList,
        songIds: Array.from(songMap.keys()),
        songTitles: Array.from(songMap.values()),
        songArtists: Array.from(artistMap.values()),
      };
    },
  );
}
