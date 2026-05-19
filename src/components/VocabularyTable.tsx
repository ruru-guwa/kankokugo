import type { CollectedWord } from "../utils/collectWords";
import {
  getWordOriginBadgeClass,
  getWordOriginLabel,
} from "../utils/wordOrigins";
import {
  getWordLevelBadgeClass,
  getWordLevelDescription,
  getWordLevelLabel,
} from "../utils/wordLevels";

interface VocabularyTableProps {
  words: CollectedWord[];
  songFilter?: string;
}

export function VocabularyTable({ words, songFilter }: VocabularyTableProps) {
  const getLanguageLabel = (language: CollectedWord["language"]) =>
    language === "ko" ? "韓国語" : language === "en" ? "英語" : "スペイン語";

  if (words.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-4xl block mb-3">📖</span>
        <p className="text-slate-400 text-sm">該当する単語が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="space-y-3" id="vocabulary-table">
      {words.map((word) => {
        const visibleOccurrences = songFilter
          ? word.occurrences.filter((occurrence) => occurrence.songId === songFilter)
          : word.occurrences;
        const visibleSongTitles = Array.from(
          new Set(visibleOccurrences.map((occurrence) => occurrence.songTitle)),
        );
        const previewOccurrences = visibleOccurrences.slice(0, 3);
        const hiddenOccurrencesCount =
          visibleOccurrences.length - previewOccurrences.length;

        return (
          <div
            key={word.id}
            className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5
                       hover:shadow-md hover:border-slate-300/60 transition-all duration-200"
            id={`vocab-card-${word.id}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-lg font-bold text-slate-800">
                  {word.surface}
                </span>
                {word.base !== word.surface && (
                  <span className="text-sm text-slate-500 ml-2">
                    （原形：{word.base}）
                  </span>
                )}
              </div>
              <div className="flex gap-1.5">
                {word.pos && (
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                    {word.pos}
                  </span>
                )}
                {word.originType && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${getWordOriginBadgeClass(
                      word.originType,
                    )}`}
                  >
                    {getWordOriginLabel(word.originType)}
                  </span>
                )}
                {word.wordLevel && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${getWordLevelBadgeClass(
                      word.wordLevel,
                    )}`}
                    title={getWordLevelDescription(word.wordLevel)}
                  >
                    {getWordLevelLabel(word.wordLevel)}
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-700 mb-2">{word.meaning}</p>

            {word.origin && (
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                <span className="font-medium text-slate-700">成り立ち：</span>
                {word.origin}
              </p>
            )}

            {word.breakdown && (
              <p className="text-xs text-indigo-600 mb-2">
                分解：
                <span className="font-mono bg-indigo-50 px-1.5 py-0.5 rounded">
                  {word.breakdown}
                </span>
              </p>
            )}

            {word.explanation && (
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                {word.explanation}
              </p>
            )}

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <span>📚</span>
                  {visibleSongTitles.length}曲 / {visibleOccurrences.length}行で出現
                </span>
                <span className="flex items-center gap-1">
                  <span>🌐</span>
                  {getLanguageLabel(word.language)}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {visibleSongTitles.map((title) => (
                  <span
                    key={`${word.id}-${title}`}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                  >
                    {title}
                  </span>
                ))}
              </div>

              <div className="space-y-1.5">
                {previewOccurrences.map((occurrence) => (
                  <div
                    key={`${word.id}-${occurrence.songId}-${occurrence.lineId}`}
                    className="text-xs text-slate-500 flex gap-2"
                  >
                    <span className="shrink-0 text-slate-400">
                      {occurrence.songTitle}
                    </span>
                    <span className="truncate">{occurrence.lineKorean}</span>
                  </div>
                ))}
                {hiddenOccurrencesCount > 0 && (
                  <div className="text-xs text-slate-400">
                    ほか {hiddenOccurrencesCount} 行
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
