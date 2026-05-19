import { useState, useMemo } from "react";
import { songs } from "../data/songs";
import { collectWords } from "../utils/collectWords";
import { VocabularyTable } from "../components/VocabularyTable";
import { SearchBox } from "../components/SearchBox";
import {
  WORD_ORIGIN_TYPES,
  getWordOriginLabel,
} from "../utils/wordOrigins";
import {
  WORD_LEVELS,
  getWordLevelDescription,
  getWordLevelLabel,
} from "../utils/wordLevels";
import {
  WORD_POS_FILTERS,
  buildVocabularySearchEntry,
  getVocabularyBrowseScore,
  getVocabularySearchScore,
  getWordPosFilterKey,
  getWordPosFilterLabel,
  matchesVocabularySearch,
  normalizeVocabularySearchText,
  splitVocabularySearchTerms,
} from "../utils/vocabularyFilters";

export function Vocabulary() {
  const [query, setQuery] = useState("");
  const [posFilter, setPosFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [originFilter, setOriginFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [songFilter, setSongFilter] = useState("");

  const allWords = useMemo(() => collectWords(songs), []);
  const totalOccurrences = useMemo(
    () => allWords.reduce((sum, word) => sum + word.occurrences.length, 0),
    [allWords],
  );

  const indexedWords = useMemo(
    () =>
      allWords.map((word) => ({
        word,
        posKey: getWordPosFilterKey(word.pos),
        searchEntry: buildVocabularySearchEntry(word),
      })),
    [allWords],
  );

  const posOptions = useMemo(() => {
    const set = new Set<string>();
    indexedWords.forEach(({ posKey }) => posKey && set.add(posKey));
    return WORD_POS_FILTERS.filter((posKey) => set.has(posKey));
  }, [indexedWords]);

  const songOptions = useMemo(() => {
    const map = new Map<string, string>();
    allWords.forEach((word) =>
      word.occurrences.forEach((occurrence) =>
        map.set(occurrence.songId, occurrence.songTitle),
      ),
    );
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1], "ko"));
  }, [allWords]);

  const filteredWords = useMemo(() => {
    const normalizedQuery = normalizeVocabularySearchText(query);
    const queryTerms = splitVocabularySearchTerms(query);
    const hasRawQuery = query.trim().length > 0;

    if (hasRawQuery && queryTerms.length === 0) {
      return [];
    }

    const results = indexedWords
      .filter(({ word, posKey, searchEntry }) => {
        if (queryTerms.length && !matchesVocabularySearch(searchEntry, queryTerms)) {
          return false;
        }

        if (posFilter && posKey !== posFilter) return false;
        if (levelFilter && String(word.wordLevel ?? "") !== levelFilter) {
          return false;
        }
        if (originFilter && word.originType !== originFilter) {
          return false;
        }
        if (languageFilter && word.language !== languageFilter) return false;
        if (
          songFilter &&
          !word.occurrences.some((occurrence) => occurrence.songId === songFilter)
        ) {
          return false;
        }

        return true;
      })
      .map(({ word, searchEntry }) => ({
        word,
        searchScore: getVocabularySearchScore(
          word,
          searchEntry,
          normalizedQuery,
          queryTerms,
        ),
        visibleOccurrenceCount: songFilter
          ? word.occurrences.filter((occurrence) => occurrence.songId === songFilter)
              .length
          : word.occurrences.length,
      }));

    return results
      .sort((a, b) => {
        if (!queryTerms.length) {
          const browseScoreDiff =
            getVocabularyBrowseScore(b.word) - getVocabularyBrowseScore(a.word);
          if (browseScoreDiff !== 0) {
            return browseScoreDiff;
          }
        }

        const scoreDiff = b.searchScore - a.searchScore;
        if (scoreDiff !== 0) {
          return scoreDiff;
        }

        const levelDiff = (a.word.wordLevel ?? 99) - (b.word.wordLevel ?? 99);
        if (levelDiff !== 0) {
          return levelDiff;
        }

        const visibleOccurrenceDiff =
          b.visibleOccurrenceCount - a.visibleOccurrenceCount;
        if (visibleOccurrenceDiff !== 0) {
          return visibleOccurrenceDiff;
        }

        const totalOccurrenceDiff =
          b.word.occurrences.length - a.word.occurrences.length;
        if (totalOccurrenceDiff !== 0) {
          return totalOccurrenceDiff;
        }

        return a.word.surface.localeCompare(b.word.surface, "ko");
      })
      .map(({ word }) => word);
  }, [
    indexedWords,
    query,
    posFilter,
    levelFilter,
    originFilter,
    languageFilter,
    songFilter,
  ]);

  const hasActiveFilter =
    posFilter || levelFilter || originFilter || languageFilter || songFilter;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10" id="vocabulary-page">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">📖 単語帳</h1>
        <p className="text-sm text-slate-500">
          全{allWords.length}語を重複まとめ済みで表示
        </p>
        <p className="text-xs text-slate-400 mt-1">
          元の出現数は {totalOccurrences} 件
        </p>
        <p className="text-xs text-slate-400 mt-1">
          単語レベルは `Lv.1` が最頻出の基本語、`Lv.10` がかなり難しい語です
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-6">
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="単語・原形・意味で検索..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
        <select
          value={posFilter}
          onChange={(e) => setPosFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="filter-pos"
        >
          <option value="">品詞系</option>
          {posOptions.map((posKey) => (
            <option key={posKey} value={posKey}>
              {getWordPosFilterLabel(posKey)}
            </option>
          ))}
        </select>

        <select
          value={levelFilter}
          onChange={(e) => setLevelFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="filter-level"
        >
          <option value="">単語レベル</option>
          {WORD_LEVELS.map((level) => (
            <option key={level} value={String(level)}>
              {getWordLevelLabel(level)} {getWordLevelDescription(level)}
            </option>
          ))}
        </select>

        <select
          value={originFilter}
          onChange={(e) => setOriginFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="filter-origin"
        >
          <option value="">成り立ち</option>
          {WORD_ORIGIN_TYPES.map((type) => (
            <option key={type} value={type}>
              {getWordOriginLabel(type)}
            </option>
          ))}
        </select>

        <select
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="filter-language"
        >
          <option value="">言語</option>
          <option value="ko">韓国語</option>
          <option value="en">英語</option>
          <option value="es">スペイン語</option>
        </select>

        <select
          value={songFilter}
          onChange={(e) => setSongFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="filter-song"
        >
          <option value="">曲名</option>
          {songOptions.map(([id, title]) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>

        {hasActiveFilter && (
          <button
            onClick={() => {
              setPosFilter("");
              setLevelFilter("");
              setOriginFilter("");
              setLanguageFilter("");
              setSongFilter("");
            }}
            className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            id="clear-filters"
          >
            クリア
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="text-xs text-slate-400 mb-4 text-center">
        {filteredWords.length} / {allWords.length} 語
      </div>

      {/* Table */}
      <VocabularyTable words={filteredWords} songFilter={songFilter} />
    </div>
  );
}
