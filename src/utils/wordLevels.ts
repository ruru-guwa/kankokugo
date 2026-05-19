import type { Difficulty, Song, Token, WordLevel } from "../types/song";

export const WORD_LEVELS: WordLevel[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LEGACY_LEVEL_MAP: Record<Difficulty, WordLevel> = {
  初級: 3,
  中級: 6,
  上級: 9,
};

const LEVEL_DESCRIPTION_MAP: Record<WordLevel, string> = {
  1: "超基本・毎日かなり使う",
  2: "かなり基本",
  3: "基本",
  4: "日常会話でよく出る",
  5: "会話でよく出る",
  6: "少し発展",
  7: "中級",
  8: "やや難しい",
  9: "上級",
  10: "かなり難しい・歌詞的",
};

const PARTICLE_SURFACES = new Set([
  "-이",
  "-가",
  "-은",
  "-는",
  "-을",
  "-를",
  "-에",
  "-의",
  "-와",
  "-과",
  "-도",
  "-만",
  "-로",
  "-으로",
  "-ㄴ",
  "-ㄹ",
  "-기",
  "-길",
]);

const VERY_COMMON_KOREAN_SURFACES = new Set([
  "나",
  "내",
  "난",
  "너",
  "네",
  "넌",
  "우리",
  "이",
  "그",
  "저",
  "뭐",
  "뭘",
  "누구",
  "더",
  "또",
  "잘",
  "안",
  "못",
  "좀",
  "많이",
  "정말",
  "그냥",
  "오늘",
  "내일",
  "매일",
  "밤",
  "때",
  "수",
  "것",
  "거",
  "길",
  "꿈",
  "사랑",
  "맘",
  "마음",
  "눈",
  "손",
  "말",
  "얼굴",
  "미소",
  "힘",
  "느낌",
  "생각",
  "사람",
]);

const VERY_COMMON_KOREAN_BASES = new Set([
  "하다",
  "되다",
  "있다",
  "없다",
  "보다",
  "가다",
  "오다",
  "주다",
  "받다",
  "알다",
  "모르다",
  "좋다",
  "싫다",
  "사랑하다",
  "듣다",
  "먹다",
  "자다",
  "걷다",
  "안다",
  "변하다",
  "원하다",
  "잊다",
]);

const COMMON_KOREAN_BASES = new Set([
  "다가오다",
  "풀리다",
  "흔들다",
  "꼬집다",
  "생각하다",
  "감기다",
  "이루다",
  "사랑스럽다",
  "부드럽다",
  "화끈거리다",
  "바라보다",
  "영원하다",
  "짜릿하다",
  "꿈꾸다",
]);

const COMMON_ENGLISH_WORDS = new Set([
  "you",
  "me",
  "love",
  "baby",
  "hey",
  "with",
  "everyday",
  "dream",
  "dreaming",
  "fall",
  "falling",
  "party",
  "photo",
  "play",
  "look",
  "cool",
  "pretty",
  "hot",
  "film",
  "space",
  "blue",
  "red",
  "black",
]);

const PROPER_NOUN_HINTS = ["kim", "ariana", "kardashian", "mr. chu", "mr chu"];

export function withResolvedWordLevels(song: Song): Song {
  return {
    ...song,
    lines: song.lines.map((line) => ({
      ...line,
      tokens: line.tokens.map((token) => ({
        ...token,
        wordLevel: resolveTokenWordLevel(token),
      })),
    })),
  };
}

export function getWordLevelLabel(level: WordLevel): string {
  return `Lv.${level}`;
}

export function getWordLevelDescription(level: WordLevel): string {
  return LEVEL_DESCRIPTION_MAP[level];
}

export function getWordLevelBadgeClass(level: WordLevel): string {
  if (level <= 2) {
    return "bg-emerald-50 text-emerald-700 border-emerald-200";
  }

  if (level <= 4) {
    return "bg-lime-50 text-lime-700 border-lime-200";
  }

  if (level <= 6) {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }

  if (level <= 8) {
    return "bg-orange-50 text-orange-700 border-orange-200";
  }

  return "bg-rose-50 text-rose-700 border-rose-200";
}

function resolveTokenWordLevel(token: Token): WordLevel {
  if (token.wordLevel) {
    return clampWordLevel(token.wordLevel);
  }

  if (token.level) {
    return LEGACY_LEVEL_MAP[token.level];
  }

  if (token.language === "ko") {
    return inferKoreanWordLevel(token);
  }

  return inferNonKoreanWordLevel(token);
}

function inferKoreanWordLevel(token: Token): WordLevel {
  const surface = normalizeKoreanToken(token.surface);
  const base = normalizeKoreanToken(token.base);
  const detailText = `${token.meaning} ${token.explanation ?? ""}`;

  let level = 5;

  if (isParticleLikeToken(token, surface, base)) {
    level = 1;
  } else if (
    VERY_COMMON_KOREAN_SURFACES.has(surface) ||
    VERY_COMMON_KOREAN_BASES.has(base)
  ) {
    level = 2;
  } else if (
    COMMON_KOREAN_BASES.has(base) ||
    token.pos?.includes("代名詞") ||
    token.pos?.includes("冠形詞")
  ) {
    level = 3;
  } else if (surface.length <= 2 && !surface.includes(" ")) {
    level = 4;
  }

  if (
    token.pos?.includes("助詞") ||
    token.pos?.includes("語尾") ||
    token.pos?.includes("文法")
  ) {
    level = Math.min(level, 2);
  }

  if (
    detailText.includes("会話でよく使") ||
    detailText.includes("よく使う") ||
    detailText.includes("縮約")
  ) {
    level = Math.min(level, 3);
  }

  if (surface.includes(" ") || base.includes(" ")) {
    level += 1;
  }

  if (token.breakdown?.includes("+")) {
    level += 1;
  }

  if (surface.length >= 6 || base.length >= 6) {
    level += 1;
  }

  if (
    detailText.includes("慣用") ||
    detailText.includes("詩的") ||
    detailText.includes("歌詞的") ||
    detailText.includes("比喩")
  ) {
    level += 2;
  }

  if (detailText.length >= 80) {
    level += 1;
  }

  return clampWordLevel(level);
}

function inferNonKoreanWordLevel(token: Token): WordLevel {
  const normalized = normalizeLatinToken(token.base || token.surface);
  const words = normalized.split(" ").filter(Boolean);
  const detailText = `${token.meaning} ${token.explanation ?? ""}`.toLowerCase();

  let level = 5;

  if (
    words.length === 1 &&
    (COMMON_ENGLISH_WORDS.has(normalized) ||
      (/^[a-z]+$/.test(normalized) && normalized.length <= 4))
  ) {
    level = 3;
  } else if (words.every((word) => COMMON_ENGLISH_WORDS.has(word))) {
    level = 4;
  }

  if (words.length >= 3) {
    level += 1;
  }

  if (PROPER_NOUN_HINTS.some((hint) => normalized.includes(hint))) {
    level += 2;
  }

  if (detailText.includes("比喩") || detailText.includes("象徴")) {
    level += 1;
  }

  return clampWordLevel(level);
}

function isParticleLikeToken(token: Token, surface: string, base: string): boolean {
  return (
    surface.startsWith("-") ||
    base.startsWith("-") ||
    PARTICLE_SURFACES.has(surface) ||
    PARTICLE_SURFACES.has(base) ||
    token.pos?.includes("助詞") === true
  );
}

function normalizeKoreanToken(value: string): string {
  return value.replace(/[“”"'’‘,!?().]/g, "").trim();
}

function normalizeLatinToken(value: string): string {
  return value
    .toLowerCase()
    .replace(/[“”"'’‘,!?().]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clampWordLevel(level: number): WordLevel {
  const clamped = Math.max(1, Math.min(10, Math.round(level)));
  return clamped as WordLevel;
}
