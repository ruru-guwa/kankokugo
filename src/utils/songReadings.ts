import type { LyricLine, Song } from "../types/song";

type HangulSyllable = {
  initial: string;
  vowel: string;
  final: string;
};

const HANGUL_CHAR_REGEX = /[가-힣]/;
const HANGUL_RUN_REGEX = /[가-힣]+|[^가-힣]+/g;

const CHOSEONG = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

const JUNGSEONG = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
] as const;

const JONGSEONG = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
] as const;

const VOWEL_TO_KATAKANA: Record<string, string> = {
  "ㅏ": "ア",
  "ㅐ": "エ",
  "ㅑ": "ヤ",
  "ㅒ": "イェ",
  "ㅓ": "オ",
  "ㅔ": "エ",
  "ㅕ": "ヨ",
  "ㅖ": "イェ",
  "ㅗ": "オ",
  "ㅘ": "ワ",
  "ㅙ": "ウェ",
  "ㅚ": "ウェ",
  "ㅛ": "ヨ",
  "ㅜ": "ウ",
  "ㅝ": "ウォ",
  "ㅞ": "ウェ",
  "ㅟ": "ウィ",
  "ㅠ": "ユ",
  "ㅡ": "ウ",
  "ㅢ": "ウィ",
  "ㅣ": "イ",
};

const ONSET_TO_KATAKANA: Record<string, Record<string, string>> = {
  "ㅇ": {
    "ㅏ": "ア",
    "ㅐ": "エ",
    "ㅑ": "ヤ",
    "ㅒ": "イェ",
    "ㅓ": "オ",
    "ㅔ": "エ",
    "ㅕ": "ヨ",
    "ㅖ": "イェ",
    "ㅗ": "オ",
    "ㅘ": "ワ",
    "ㅙ": "ウェ",
    "ㅚ": "ウェ",
    "ㅛ": "ヨ",
    "ㅜ": "ウ",
    "ㅝ": "ウォ",
    "ㅞ": "ウェ",
    "ㅟ": "ウィ",
    "ㅠ": "ユ",
    "ㅡ": "ウ",
    "ㅢ": "ウィ",
    "ㅣ": "イ",
  },
  "ㄱ": {
    "ㅏ": "カ",
    "ㅐ": "ケ",
    "ㅑ": "キャ",
    "ㅒ": "キェ",
    "ㅓ": "コ",
    "ㅔ": "ケ",
    "ㅕ": "キョ",
    "ㅖ": "キェ",
    "ㅗ": "コ",
    "ㅘ": "クァ",
    "ㅙ": "クェ",
    "ㅚ": "クェ",
    "ㅛ": "キョ",
    "ㅜ": "ク",
    "ㅝ": "クォ",
    "ㅞ": "クェ",
    "ㅟ": "クィ",
    "ㅠ": "キュ",
    "ㅡ": "ク",
    "ㅢ": "キ",
    "ㅣ": "キ",
  },
  "ㄴ": {
    "ㅏ": "ナ",
    "ㅐ": "ネ",
    "ㅑ": "ニャ",
    "ㅒ": "ニェ",
    "ㅓ": "ノ",
    "ㅔ": "ネ",
    "ㅕ": "ニョ",
    "ㅖ": "ニェ",
    "ㅗ": "ノ",
    "ㅘ": "ヌァ",
    "ㅙ": "ヌェ",
    "ㅚ": "ヌェ",
    "ㅛ": "ニョ",
    "ㅜ": "ヌ",
    "ㅝ": "ヌォ",
    "ㅞ": "ヌェ",
    "ㅟ": "ヌィ",
    "ㅠ": "ニュ",
    "ㅡ": "ヌ",
    "ㅢ": "ニ",
    "ㅣ": "ニ",
  },
  "ㄷ": {
    "ㅏ": "タ",
    "ㅐ": "テ",
    "ㅑ": "ティャ",
    "ㅒ": "ティェ",
    "ㅓ": "ト",
    "ㅔ": "テ",
    "ㅕ": "ティョ",
    "ㅖ": "ティェ",
    "ㅗ": "ト",
    "ㅘ": "トァ",
    "ㅙ": "トェ",
    "ㅚ": "トェ",
    "ㅛ": "ティョ",
    "ㅜ": "トゥ",
    "ㅝ": "トウォ",
    "ㅞ": "トウェ",
    "ㅟ": "トゥィ",
    "ㅠ": "テュ",
    "ㅡ": "トゥ",
    "ㅢ": "ティ",
    "ㅣ": "ティ",
  },
  "ㄹ": {
    "ㅏ": "ラ",
    "ㅐ": "レ",
    "ㅑ": "リャ",
    "ㅒ": "リェ",
    "ㅓ": "ロ",
    "ㅔ": "レ",
    "ㅕ": "リョ",
    "ㅖ": "リェ",
    "ㅗ": "ロ",
    "ㅘ": "ルァ",
    "ㅙ": "ルェ",
    "ㅚ": "ルェ",
    "ㅛ": "リョ",
    "ㅜ": "ル",
    "ㅝ": "ルォ",
    "ㅞ": "ルェ",
    "ㅟ": "ルィ",
    "ㅠ": "リュ",
    "ㅡ": "ル",
    "ㅢ": "リ",
    "ㅣ": "リ",
  },
  "ㅁ": {
    "ㅏ": "マ",
    "ㅐ": "メ",
    "ㅑ": "ミャ",
    "ㅒ": "ミェ",
    "ㅓ": "モ",
    "ㅔ": "メ",
    "ㅕ": "ミョ",
    "ㅖ": "ミェ",
    "ㅗ": "モ",
    "ㅘ": "ムァ",
    "ㅙ": "ムェ",
    "ㅚ": "ムェ",
    "ㅛ": "ミョ",
    "ㅜ": "ム",
    "ㅝ": "ムォ",
    "ㅞ": "ムェ",
    "ㅟ": "ムィ",
    "ㅠ": "ミュ",
    "ㅡ": "ム",
    "ㅢ": "ミ",
    "ㅣ": "ミ",
  },
  "ㅂ": {
    "ㅏ": "パ",
    "ㅐ": "ペ",
    "ㅑ": "ピャ",
    "ㅒ": "ピェ",
    "ㅓ": "ポ",
    "ㅔ": "ペ",
    "ㅕ": "ピョ",
    "ㅖ": "ピェ",
    "ㅗ": "ポ",
    "ㅘ": "プァ",
    "ㅙ": "プェ",
    "ㅚ": "プェ",
    "ㅛ": "ピョ",
    "ㅜ": "プ",
    "ㅝ": "プォ",
    "ㅞ": "プェ",
    "ㅟ": "プィ",
    "ㅠ": "ピュ",
    "ㅡ": "プ",
    "ㅢ": "ピ",
    "ㅣ": "ピ",
  },
  "ㅅ": {
    "ㅏ": "サ",
    "ㅐ": "セ",
    "ㅑ": "シャ",
    "ㅒ": "シェ",
    "ㅓ": "ソ",
    "ㅔ": "セ",
    "ㅕ": "ショ",
    "ㅖ": "シェ",
    "ㅗ": "ソ",
    "ㅘ": "スァ",
    "ㅙ": "スェ",
    "ㅚ": "スェ",
    "ㅛ": "ショ",
    "ㅜ": "ス",
    "ㅝ": "スォ",
    "ㅞ": "スェ",
    "ㅟ": "スィ",
    "ㅠ": "シュ",
    "ㅡ": "ス",
    "ㅢ": "シ",
    "ㅣ": "シ",
  },
  "ㅈ": {
    "ㅏ": "チャ",
    "ㅐ": "チェ",
    "ㅑ": "チャ",
    "ㅒ": "チェ",
    "ㅓ": "チョ",
    "ㅔ": "チェ",
    "ㅕ": "チョ",
    "ㅖ": "チェ",
    "ㅗ": "チョ",
    "ㅘ": "チュァ",
    "ㅙ": "チュェ",
    "ㅚ": "チュェ",
    "ㅛ": "チョ",
    "ㅜ": "チュ",
    "ㅝ": "チュォ",
    "ㅞ": "チュェ",
    "ㅟ": "チュィ",
    "ㅠ": "チュ",
    "ㅡ": "チュ",
    "ㅢ": "チ",
    "ㅣ": "チ",
  },
  "ㅊ": {
    "ㅏ": "チャ",
    "ㅐ": "チェ",
    "ㅑ": "チャ",
    "ㅒ": "チェ",
    "ㅓ": "チョ",
    "ㅔ": "チェ",
    "ㅕ": "チョ",
    "ㅖ": "チェ",
    "ㅗ": "チョ",
    "ㅘ": "チュァ",
    "ㅙ": "チュェ",
    "ㅚ": "チュェ",
    "ㅛ": "チョ",
    "ㅜ": "チュ",
    "ㅝ": "チュォ",
    "ㅞ": "チュェ",
    "ㅟ": "チュィ",
    "ㅠ": "チュ",
    "ㅡ": "チュ",
    "ㅢ": "チ",
    "ㅣ": "チ",
  },
  "ㅎ": {
    "ㅏ": "ハ",
    "ㅐ": "ヘ",
    "ㅑ": "ヒャ",
    "ㅒ": "ヒェ",
    "ㅓ": "ホ",
    "ㅔ": "ヘ",
    "ㅕ": "ヒョ",
    "ㅖ": "ヒェ",
    "ㅗ": "ホ",
    "ㅘ": "ファ",
    "ㅙ": "フェ",
    "ㅚ": "フェ",
    "ㅛ": "ヒョ",
    "ㅜ": "フ",
    "ㅝ": "フォ",
    "ㅞ": "フェ",
    "ㅟ": "フィ",
    "ㅠ": "ヒュ",
    "ㅡ": "フ",
    "ㅢ": "ヒ",
    "ㅣ": "ヒ",
  },
};

const CODA_TO_KATAKANA: Record<string, string> = {
  "": "",
  "ㄱ": "ク",
  "ㄲ": "ク",
  "ㄴ": "ン",
  "ㄷ": "ッ",
  "ㄹ": "ル",
  "ㅁ": "ム",
  "ㅂ": "プ",
  "ㅇ": "ン",
  "ㅅ": "ッ",
  "ㅆ": "ッ",
  "ㅈ": "ッ",
  "ㅊ": "ッ",
  "ㅋ": "ク",
  "ㅌ": "ッ",
  "ㅍ": "プ",
  "ㅎ": "ッ",
};

const PALATAL_VOWELS = new Set(["ㅣ"]);

const NASALIZE_TO_NG = new Set(["ㄱ", "ㄲ", "ㅋ", "ㄳ"]);
const NASALIZE_TO_N = new Set(["ㄷ", "ㅅ", "ㅆ", "ㅈ", "ㅊ", "ㅌ", "ㅎ"]);
const NASALIZE_TO_M = new Set(["ㅂ", "ㅍ", "ㅄ"]);

export function withGeneratedReadings(song: Song): Song {
  return {
    ...song,
    lines: song.lines.map(withGeneratedLineReading),
  };
}

function withGeneratedLineReading(line: LyricLine): LyricLine {
  const existingReading = line.reading?.trim();

  if (existingReading) {
    return line;
  }

  const generatedReading = generateReading(line.korean);

  if (!generatedReading) {
    return line;
  }

  return {
    ...line,
    reading: generatedReading,
  };
}

function generateReading(text: string): string | undefined {
  if (!HANGUL_CHAR_REGEX.test(text)) {
    return undefined;
  }

  const reading = (text.match(HANGUL_RUN_REGEX) ?? [])
    .map((part) => (HANGUL_CHAR_REGEX.test(part) ? transliterateHangulRun(part) : part))
    .join("")
    .trim();

  return reading || undefined;
}

function transliterateHangulRun(run: string): string {
  const syllables = Array.from(run).map(decomposeHangulSyllable);

  for (let index = 0; index < syllables.length - 1; index += 1) {
    const current = syllables[index];
    const next = syllables[index + 1];

    applyAspiratedSoundChange(current, next);
    applyNasalization(current, next);
    applyLToNChange(current, next);
    applyLiaison(current, next);
  }

  return syllables.map(toKatakana).join("");
}

function applyAspiratedSoundChange(
  current: HangulSyllable,
  next: HangulSyllable,
) {
  if (!["ㅎ", "ㄶ", "ㅀ"].includes(current.final)) {
    return;
  }

  const aspiratedOnset = getAspiratedOnset(next.initial);

  if (!aspiratedOnset) {
    return;
  }

  current.final = current.final === "ㄶ" ? "ㄴ" : current.final === "ㅀ" ? "ㄹ" : "";
  next.initial = aspiratedOnset;
}

function applyNasalization(current: HangulSyllable, next: HangulSyllable) {
  if (!["ㄴ", "ㅁ"].includes(next.initial)) {
    return;
  }

  if (current.final === "ㄺ") {
    current.final = "ㅇ";
    return;
  }

  if (NASALIZE_TO_NG.has(current.final)) {
    current.final = "ㅇ";
    return;
  }

  if (NASALIZE_TO_N.has(current.final)) {
    current.final = "ㄴ";
    return;
  }

  if (current.final === "ㄼ") {
    current.final = "ㅁ";
    return;
  }

  if (NASALIZE_TO_M.has(current.final)) {
    current.final = "ㅁ";
  }
}

function applyLToNChange(current: HangulSyllable, next: HangulSyllable) {
  if (current.final === "ㄹ" && next.initial === "ㄴ") {
    next.initial = "ㄹ";
    return;
  }

  if (current.final === "ㄴ" && next.initial === "ㄹ") {
    current.final = "ㄹ";
    next.initial = "ㄹ";
  }
}

function applyLiaison(current: HangulSyllable, next: HangulSyllable) {
  if (next.initial !== "ㅇ" || !current.final) {
    return;
  }

  if (current.final === "ㅎ") {
    current.final = "";
    return;
  }

  if (current.final === "ㄶ") {
    current.final = "ㄴ";
    return;
  }

  if (current.final === "ㅀ") {
    current.final = "ㄹ";
    return;
  }

  if (current.final === "ㅄ") {
    current.final = "ㅂ";
    next.initial = "ㅅ";
    return;
  }

  if (current.final === "ㄳ") {
    current.final = "ㄱ";
    next.initial = "ㅅ";
    return;
  }

  if (current.final === "ㄵ") {
    current.final = "ㄴ";
    next.initial = "ㅈ";
    return;
  }

  if (current.final === "ㄺ") {
    current.final = "ㄹ";
    next.initial = "ㄱ";
    return;
  }

  if (current.final === "ㄻ") {
    current.final = "ㄹ";
    next.initial = "ㅁ";
    return;
  }

  if (current.final === "ㄼ") {
    current.final = "ㄹ";
    next.initial = "ㅂ";
    return;
  }

  if (current.final === "ㄽ") {
    current.final = "ㄹ";
    next.initial = "ㅅ";
    return;
  }

  if (current.final === "ㄾ") {
    current.final = "ㄹ";
    next.initial = "ㅌ";
    return;
  }

  if (current.final === "ㄿ") {
    current.final = "ㄹ";
    next.initial = "ㅍ";
    return;
  }

  next.initial = moveFinalToOnset(current.final, next.vowel);
  current.final = "";
}

function moveFinalToOnset(finalConsonant: string, nextVowel: string): string {
  if (PALATAL_VOWELS.has(nextVowel)) {
    if (finalConsonant === "ㄷ") {
      return "ㅈ";
    }

    if (finalConsonant === "ㅌ") {
      return "ㅊ";
    }
  }

  switch (finalConsonant) {
    case "ㄱ":
    case "ㄲ":
    case "ㅋ":
      return "ㄱ";
    case "ㄴ":
      return "ㄴ";
    case "ㄷ":
      return "ㄷ";
    case "ㄹ":
      return "ㄹ";
    case "ㅁ":
      return "ㅁ";
    case "ㅂ":
    case "ㅍ":
      return "ㅂ";
    case "ㅅ":
    case "ㅆ":
      return "ㅅ";
    case "ㅇ":
      return "ㅇ";
    case "ㅈ":
      return "ㅈ";
    case "ㅊ":
      return "ㅊ";
    case "ㅌ":
      return "ㅌ";
    case "ㅎ":
      return "ㅎ";
    default:
      return "ㅇ";
  }
}

function getAspiratedOnset(initial: string): string | undefined {
  switch (initial) {
    case "ㄱ":
      return "ㅋ";
    case "ㄷ":
      return "ㅌ";
    case "ㅈ":
      return "ㅊ";
    default:
      return undefined;
  }
}

function toKatakana(syllable: HangulSyllable): string {
  const onset =
    ONSET_TO_KATAKANA[normalizeInitialForKana(syllable.initial)]?.[syllable.vowel] ??
    `${VOWEL_TO_KATAKANA[syllable.vowel] ?? ""}`;
  const coda = CODA_TO_KATAKANA[normalizeFinalForKana(syllable.final)] ?? "";

  return `${onset}${coda}`;
}

function normalizeInitialForKana(initial: string): string {
  switch (initial) {
    case "ㄲ":
    case "ㅋ":
      return "ㄱ";
    case "ㄸ":
    case "ㅌ":
      return "ㄷ";
    case "ㅃ":
    case "ㅍ":
      return "ㅂ";
    case "ㅆ":
      return "ㅅ";
    case "ㅉ":
      return "ㅈ";
    default:
      return initial;
  }
}

function normalizeFinalForKana(finalConsonant: string): string {
  switch (finalConsonant) {
    case "ㄳ":
    case "ㄱ":
    case "ㄲ":
    case "ㅋ":
      return "ㄱ";
    case "ㄵ":
    case "ㄶ":
    case "ㄴ":
      return "ㄴ";
    case "ㄺ":
    case "ㄻ":
    case "ㄼ":
    case "ㄽ":
    case "ㄾ":
    case "ㄿ":
    case "ㅀ":
    case "ㄹ":
      return "ㄹ";
    case "ㅄ":
    case "ㅂ":
    case "ㅍ":
      return "ㅂ";
    case "ㄷ":
    case "ㅅ":
    case "ㅆ":
    case "ㅈ":
    case "ㅊ":
    case "ㅌ":
    case "ㅎ":
      return "ㄷ";
    default:
      return finalConsonant;
  }
}

function decomposeHangulSyllable(character: string): HangulSyllable {
  const codePoint = character.charCodeAt(0) - 0xac00;
  const initialIndex = Math.floor(codePoint / 588);
  const vowelIndex = Math.floor((codePoint % 588) / 28);
  const finalIndex = codePoint % 28;

  return {
    initial: CHOSEONG[initialIndex],
    vowel: JUNGSEONG[vowelIndex],
    final: JONGSEONG[finalIndex],
  };
}
