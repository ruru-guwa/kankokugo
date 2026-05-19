import type { Token } from "../types/song";
import type { CollectedWord } from "./collectWords";
import { getWordOriginLabel } from "./wordOrigins";

export type WordPosFilterKey =
  | "pronoun"
  | "noun"
  | "adnominal"
  | "adverb"
  | "verb"
  | "adjective"
  | "interjection"
  | "grammar"
  | "hybrid"
  | "other";

export const WORD_POS_FILTERS: WordPosFilterKey[] = [
  "pronoun",
  "noun",
  "adnominal",
  "adverb",
  "verb",
  "adjective",
  "interjection",
  "grammar",
  "hybrid",
  "other",
];

const SEARCH_SEPARATOR_REGEX =
  /[~`!@#$%^&*()\-_=+\[\]{}\\|;:'",.<>/?·•・…]+/g;

export type VocabularySearchEntry = {
  normalizedSearchText: string;
  normalizedSurface: string;
  normalizedBase: string;
  compactSurface: string;
  compactBase: string;
  normalizedMeaning: string;
  normalizedShortMeaning: string;
  normalizedOrigin: string;
  normalizedExplanation: string;
  normalizedPos: string;
  normalizedPosFilterLabel: string;
  normalizedOriginLabel: string;
  normalizedLanguage: string;
  normalizedSongTitles: string[];
  normalizedSongArtists: string[];
  normalizedOccurrenceLines: string[];
};

export function getWordLanguageLabel(language: Token["language"]): string {
  return language === "ko" ? "韓国語" : language === "en" ? "英語" : "スペイン語";
}

export function getWordPosFilterKey(pos?: string): WordPosFilterKey | null {
  if (!pos) {
    return null;
  }

  if (pos.includes("/")) {
    return "hybrid";
  }

  if (pos.startsWith("代名詞")) {
    return "pronoun";
  }

  if (pos.startsWith("名詞")) {
    return "noun";
  }

  if (pos.startsWith("冠形詞")) {
    return "adnominal";
  }

  if (pos.startsWith("副詞")) {
    return "adverb";
  }

  if (pos.startsWith("動詞")) {
    return "verb";
  }

  if (pos.startsWith("形容詞")) {
    return "adjective";
  }

  if (pos.startsWith("感嘆詞")) {
    return "interjection";
  }

  if (pos.includes("助詞") || pos.includes("語尾") || pos.includes("文法")) {
    return "grammar";
  }

  return "other";
}

export function getWordPosFilterLabel(key: WordPosFilterKey): string {
  switch (key) {
    case "pronoun":
      return "代名詞系";
    case "noun":
      return "名詞系";
    case "adnominal":
      return "冠形詞";
    case "adverb":
      return "副詞系";
    case "verb":
      return "動詞系";
    case "adjective":
      return "形容詞";
    case "interjection":
      return "感嘆詞";
    case "grammar":
      return "文法要素";
    case "hybrid":
      return "複合品詞";
    case "other":
      return "その他";
  }
}

export function normalizeVocabularySearchText(value: string): string {
  const normalized = value
    .normalize("NFKC")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(SEARCH_SEPARATOR_REGEX, " ")
    .replace(/\s+/g, " ")
    .trim();

  return /[A-Za-z]/.test(normalized) ? normalized.toLowerCase() : normalized;
}

export function splitVocabularySearchTerms(value: string): string[] {
  return Array.from(
    new Set(
      normalizeVocabularySearchText(value)
        .split(" ")
        .map((term) => term.trim())
        .filter(Boolean),
    ),
  );
}

function compactVocabularySearchText(value: string): string {
  return normalizeVocabularySearchText(value).replace(/\s+/g, "");
}

function normalizeList(values: Array<string | undefined>): string[] {
  return values
    .filter((value): value is string => Boolean(value?.trim()))
    .map((value) => normalizeVocabularySearchText(value))
    .filter(Boolean);
}

export function buildVocabularySearchEntry(
  word: CollectedWord,
): VocabularySearchEntry {
  const posKey = getWordPosFilterKey(word.pos);
  const posFilterLabel = posKey ? getWordPosFilterLabel(posKey) : "";
  const originLabel = word.originType ? getWordOriginLabel(word.originType) : "";
  const languageLabel = getWordLanguageLabel(word.language);
  const searchParts = [
    word.surface,
    word.base,
    word.meaning,
    word.shortMeaning,
  ];

  return {
    normalizedSearchText: normalizeList(searchParts).join(" "),
    normalizedSurface: normalizeVocabularySearchText(word.surface),
    normalizedBase: normalizeVocabularySearchText(word.base),
    compactSurface: compactVocabularySearchText(word.surface),
    compactBase: compactVocabularySearchText(word.base),
    normalizedMeaning: normalizeVocabularySearchText(word.meaning),
    normalizedShortMeaning: normalizeVocabularySearchText(word.shortMeaning),
    normalizedOrigin: normalizeVocabularySearchText(word.origin ?? ""),
    normalizedExplanation: normalizeVocabularySearchText(
      [word.explanation, word.breakdown, word.meaningInThisLine]
        .filter(Boolean)
        .join(" "),
    ),
    normalizedPos: normalizeVocabularySearchText(word.pos ?? ""),
    normalizedPosFilterLabel: normalizeVocabularySearchText(posFilterLabel),
    normalizedOriginLabel: normalizeVocabularySearchText(originLabel),
    normalizedLanguage: normalizeVocabularySearchText(languageLabel),
    normalizedSongTitles: normalizeList(word.songTitles),
    normalizedSongArtists: normalizeList(word.songArtists),
    normalizedOccurrenceLines: normalizeList(
      word.occurrences.map((occurrence) => occurrence.lineKorean),
    ),
  };
}

export function matchesVocabularySearch(
  entry: VocabularySearchEntry,
  queryTerms: string[],
): boolean {
  return queryTerms.every(
    (term) =>
      entry.normalizedSearchText.includes(term) ||
      entry.compactSurface === term ||
      entry.compactBase === term,
  );
}

function scoreField(
  field: string,
  queryText: string,
  exactScore: number,
  prefixScore: number,
  includesScore: number,
): number {
  if (!field || !queryText) {
    return 0;
  }

  if (field === queryText) {
    return exactScore;
  }

  if (field.startsWith(queryText)) {
    return prefixScore;
  }

  if (field.includes(queryText)) {
    return includesScore;
  }

  return 0;
}

function scoreFieldList(
  fields: string[],
  queryText: string,
  exactScore: number,
  prefixScore: number,
  includesScore: number,
): number {
  return fields.reduce(
    (best, field) =>
      Math.max(best, scoreField(field, queryText, exactScore, prefixScore, includesScore)),
    0,
  );
}

export function getVocabularySearchScore(
  word: CollectedWord,
  entry: VocabularySearchEntry,
  queryText: string,
  queryTerms: string[],
): number {
  if (!queryTerms.length) {
    return 0;
  }

  let score = 0;

  score += scoreField(entry.normalizedSurface, queryText, 240, 140, 80);
  score += scoreField(entry.normalizedBase, queryText, 220, 130, 70);
  score += scoreField(entry.compactSurface, queryText, 210, 125, 55);
  score += scoreField(entry.compactBase, queryText, 190, 115, 50);
  score += scoreField(entry.normalizedMeaning, queryText, 180, 110, 60);
  score += scoreField(entry.normalizedShortMeaning, queryText, 150, 90, 45);
  score += scoreField(entry.normalizedOriginLabel, queryText, 140, 80, 30);
  score += scoreField(entry.normalizedPosFilterLabel, queryText, 130, 70, 30);
  score += scoreField(entry.normalizedPos, queryText, 120, 65, 25);
  score += scoreField(entry.normalizedLanguage, queryText, 110, 60, 25);
  score += scoreField(entry.normalizedOrigin, queryText, 85, 50, 25);
  score += scoreField(entry.normalizedExplanation, queryText, 70, 40, 18);
  score += scoreFieldList(entry.normalizedSongTitles, queryText, 95, 55, 20);
  score += scoreFieldList(entry.normalizedSongArtists, queryText, 85, 50, 18);
  score += scoreFieldList(entry.normalizedOccurrenceLines, queryText, 50, 30, 12);

  for (const term of queryTerms) {
    score += scoreField(entry.normalizedSurface, term, 40, 20, 8);
    score += scoreField(entry.normalizedBase, term, 36, 18, 7);
    score += scoreField(entry.normalizedMeaning, term, 28, 16, 6);
    score += scoreField(entry.normalizedShortMeaning, term, 24, 14, 5);
    score += scoreField(entry.normalizedOrigin, term, 16, 10, 4);
    score += scoreField(entry.normalizedExplanation, term, 14, 8, 3);
  }

  score += Math.min(word.occurrences.length, 8);

  return score;
}

export function getVocabularyBrowseScore(word: CollectedWord): number {
  const posKey = getWordPosFilterKey(word.pos);
  const wordLevel = word.wordLevel ?? 6;
  let score = 0;

  const occurrenceWeight = wordLevel <= 3 ? 1 : 3;
  score += Math.min(word.occurrences.length, 12) * occurrenceWeight;
  score += word.origin ? 28 : 0;
  score += word.explanation ? 32 : 0;
  score += word.breakdown ? 20 : 0;
  score += word.relatedWords?.length ? Math.min(word.relatedWords.length, 4) * 5 : 0;
  score += word.example ? 10 : 0;
  score += word.meaningInThisLine ? 10 : 0;
  score += word.language === "ko" ? 6 : 0;
  score += Math.max(0, 18 - wordLevel * 2);

  if (word.originType === "grammar" || posKey === "grammar") {
    score -= 140;
  }

  if (wordLevel <= 2 && word.occurrences.length >= 5) {
    score -= 48;
  }

  if (wordLevel <= 3 && word.occurrences.length >= 8) {
    score -= 24;
  }

  if (
    (posKey === "adverb" || posKey === "pronoun" || posKey === "adnominal") &&
    wordLevel <= 3 &&
    word.surface.length <= 2
  ) {
    score -= 45;
  }

  if (wordLevel <= 2 && word.surface.length <= 2 && !word.explanation) {
    score -= 20;
  }

  return score;
}
