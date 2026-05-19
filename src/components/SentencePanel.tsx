import type { Song, LyricLine } from "../types/song";
import { WordTooltip } from "./WordTooltip";
import { dedupeTokens } from "../utils/tokenIdentity";

interface SentencePanelProps {
  song: Song;
  selectedLine: LyricLine | null;
  onSelectToken: (tokenId: string) => void;
}

export function SentencePanel({
  song,
  selectedLine,
  onSelectToken,
}: SentencePanelProps) {
  const uniqueLineTokens = selectedLine ? dedupeTokens(selectedLine.tokens) : [];

  // 行が選択されていない場合：曲概要を表示
  if (!selectedLine) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6" id="sentence-panel">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🎵</span>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            曲の概要
          </h3>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-1">{song.title}</h2>
        <p className="text-sm text-slate-500 mb-4">{song.artist}</p>

        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          {song.overview}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {song.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-slate-100">
          💡 歌詞の行をクリックすると一文解説、単語をクリックすると単語詳細を表示します
        </p>
      </div>
    );
  }

  // 行が選択されている場合：一文解説を表示
  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6" id="sentence-panel">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">📖</span>
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
          一文解説
        </h3>
      </div>

      {/* 韓国語原文 */}
      <div className="text-lg font-bold text-slate-800 mb-1 leading-relaxed">
        {selectedLine.korean}
      </div>

      {/* 日本語訳 */}
      <div className="text-sm text-slate-600 mb-1">{selectedLine.japanese}</div>

      {/* 直訳 */}
      {selectedLine.literalJapanese && (
        <div className="text-xs text-slate-400 mb-4">
          直訳：{selectedLine.literalJapanese}
        </div>
      )}

      {/* 一文の意味 */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-slate-500 mb-1.5">意味</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          {selectedLine.sentenceExplanation}
        </p>
      </div>

      {/* ニュアンス */}
      {selectedLine.nuance && (
        <div className="mb-4">
          <h4 className="text-xs font-bold text-slate-500 mb-1.5">
            ニュアンス
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
            {selectedLine.nuance}
          </p>
        </div>
      )}

      {/* 歌詞全体での役割 */}
      {selectedLine.roleInSong && (
        <div className="mb-4">
          <h4 className="text-xs font-bold text-slate-500 mb-1.5">
            歌詞での役割
          </h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            {selectedLine.roleInSong}
          </p>
        </div>
      )}

      {/* 文法ポイント */}
      {selectedLine.grammarPoints && selectedLine.grammarPoints.length > 0 && (
        <div>
          <h4 className="text-xs font-bold text-slate-500 mb-2">
            文法ポイント
          </h4>
          <div className="space-y-3">
            {selectedLine.grammarPoints.map((gp) => (
              <div
                key={gp.id}
                className="bg-indigo-50/50 border border-indigo-100/50 rounded-xl p-4"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-sm font-bold text-indigo-700">
                    {gp.title}
                  </span>
                  <span className="text-xs text-indigo-500">{gp.meaning}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  {gp.explanation}
                </p>
                {gp.example && (
                  <div className="text-xs text-slate-500 bg-white/60 rounded-lg p-2.5">
                    <div className="font-medium text-slate-700">
                      {gp.example}
                    </div>
                    {gp.exampleJapanese && (
                      <div className="text-slate-400 mt-0.5">
                        {gp.exampleJapanese}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {uniqueLineTokens.length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h4 className="text-xs font-bold text-slate-500">
              この行の単語・表現
            </h4>
            <span className="text-[11px] text-slate-400">
              カーソルで意味 / クリックで単語詳細へ
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {uniqueLineTokens.map((token) => (
              <WordTooltip
                key={token.id}
                token={token}
                isSelected={false}
                onSelect={onSelectToken}
                variant="pill"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
