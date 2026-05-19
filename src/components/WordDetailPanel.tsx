import type { Token, LyricLine, Song } from "../types/song";
import {
  getWordLevelBadgeClass,
  getWordLevelDescription,
  getWordLevelLabel,
} from "../utils/wordLevels";
import {
  getWordOriginBadgeClass,
  getWordOriginLabel,
} from "../utils/wordOrigins";

interface WordDetailPanelProps {
  token: Token | null;
  song: Song;
  line: LyricLine | null;
  onBackToSentence?: () => void;
}

export function WordDetailPanel({
  token,
  song,
  line,
  onBackToSentence,
}: WordDetailPanelProps) {
  if (!token) {
    return (
      <div
        className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6"
        id="word-detail-panel"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🔍</span>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            単語詳細
          </h3>
        </div>
        <p className="text-sm text-slate-400 text-center py-8">
          行を選んで、右側の単語・表現をクリックすると
          <br />
          詳しい解説を表示します
        </p>
      </div>
    );
  }

  const languageLabel =
    token.language === "ko"
      ? "韓国語"
      : token.language === "en"
      ? "英語"
      : "スペイン語";

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6"
      id="word-detail-panel"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔍</span>
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
            単語詳細
          </h3>
        </div>
        {line && onBackToSentence && (
          <button
            type="button"
            onClick={onBackToSentence}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            ← 一文解説に戻る
          </button>
        )}
      </div>

      {/* 出現形 / 原形 */}
      <div className="mb-4">
        <div className="text-2xl font-bold text-slate-800 mb-1">
          {token.surface}
        </div>
        {token.base !== token.surface && (
          <div className="text-sm text-slate-500">
            原形：
            <span className="font-medium text-slate-700">{token.base}</span>
          </div>
        )}
      </div>

      {/* メタ情報 */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {token.pos && (
          <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
            {token.pos}
          </span>
        )}
        <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
          {languageLabel}
        </span>
        {token.originType && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full border ${getWordOriginBadgeClass(
              token.originType,
            )}`}
          >
            {getWordOriginLabel(token.originType)}
          </span>
        )}
        {token.wordLevel && (
          <span
            className={`text-xs px-2.5 py-1 rounded-full border ${getWordLevelBadgeClass(
              token.wordLevel,
            )}`}
          >
            {getWordLevelLabel(token.wordLevel)}
          </span>
        )}
      </div>

      {token.wordLevel && (
        <DetailRow label="単語レベル">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-xs px-2.5 py-1 rounded-full border ${getWordLevelBadgeClass(
                token.wordLevel,
              )}`}
            >
              {getWordLevelLabel(token.wordLevel)}
            </span>
            <span className="text-sm text-slate-600">
              {getWordLevelDescription(token.wordLevel)}
            </span>
          </div>
        </DetailRow>
      )}

      {/* 意味 */}
      <DetailRow label="意味" value={token.meaning} />

      {token.origin && token.originType && (
        <DetailRow label="成り立ち・語源">
          <div className="space-y-2">
            <span
              className={`inline-flex text-xs px-2.5 py-1 rounded-full border ${getWordOriginBadgeClass(
                token.originType,
              )}`}
            >
              {getWordOriginLabel(token.originType)}
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {token.origin}
            </p>
          </div>
        </DetailRow>
      )}

      {/* 短い意味 */}
      {token.shortMeaning !== token.meaning && (
        <DetailRow label="短い意味" value={token.shortMeaning} />
      )}

      {/* 単語分解 */}
      {token.breakdown && (
        <DetailRow label="分解">
          <span className="font-mono text-indigo-700 bg-indigo-50/50 px-2 py-0.5 rounded text-xs">
            {token.breakdown}
          </span>
        </DetailRow>
      )}

      {/* 詳しい解説 */}
      {token.explanation && (
        <DetailRow label="解説" value={token.explanation} />
      )}

      {/* この歌詞での意味 */}
      {token.meaningInThisLine && (
        <DetailRow label="この歌詞での意味">
          <span className="text-sm text-amber-700 bg-amber-50/50 px-3 py-2 rounded-lg block leading-relaxed">
            {token.meaningInThisLine}
          </span>
        </DetailRow>
      )}

      {/* 関連語 */}
      {token.relatedWords && token.relatedWords.length > 0 && (
        <DetailRow label="関連語">
          <div className="flex flex-wrap gap-1.5">
            {token.relatedWords.map((word) => (
              <span
                key={word}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg"
              >
                {word}
              </span>
            ))}
          </div>
        </DetailRow>
      )}

      {/* 例文 */}
      {token.example && (
        <DetailRow label="例文">
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="text-sm font-medium text-slate-700">
              {token.example}
            </div>
            {token.exampleJapanese && (
              <div className="text-xs text-slate-400 mt-1">
                {token.exampleJapanese}
              </div>
            )}
          </div>
        </DetailRow>
      )}

      {/* 出現情報 */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="text-xs text-slate-400 space-y-1">
          <div>
            出現曲：
            <span className="text-slate-600">
              {song.title} / {song.artist}
            </span>
          </div>
          {line && (
            <div>
              出現行：
              <span className="text-slate-600">{line.korean}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-3">
      <h4 className="text-xs font-bold text-slate-500 mb-1">{label}</h4>
      {value ? (
        <p className="text-sm text-slate-700 leading-relaxed">{value}</p>
      ) : (
        children
      )}
    </div>
  );
}
