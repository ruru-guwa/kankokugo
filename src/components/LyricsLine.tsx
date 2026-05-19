import { useMemo } from "react";
import type { LyricLine, Token } from "../types/song";
import { WordTooltip } from "./WordTooltip";

interface LyricsLineProps {
  line: LyricLine;
  isSelected: boolean;
  selectedTokenId: string | null;
  showReading: boolean;
  showJapanese: boolean;
  onSelectLine: (lineId: string) => void;
  onSelectToken: (tokenId: string, lineId?: string) => void;
}

export function LyricsLineComponent({
  line,
  isSelected,
  selectedTokenId,
  showReading,
  showJapanese,
  onSelectLine,
  onSelectToken,
}: LyricsLineProps) {
  const interactiveSegments = useMemo(
    () => buildInteractiveSegments(line.korean, line.tokens),
    [line.korean, line.tokens],
  );

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onClick={() => onSelectLine(line.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectLine(line.id);
        }
      }}
      className={`
        group/line w-full cursor-pointer rounded-xl px-4 py-2.5 text-left
        touch-manipulation select-none transition-all duration-200
        ${
          isSelected
            ? "bg-indigo-50/70 border border-indigo-200/50 shadow-sm"
            : "hover:bg-slate-50/80 border border-transparent"
        }
        ${line.sectionBreakAfter ? "mb-6" : "mb-1"}
      `}
      id={`lyrics-line-${line.id}`}
    >
      {/* 読み方 */}
      {showReading && line.reading && (
        <div
          className="text-sm text-slate-500 transition-all duration-200"
          style={{ letterSpacing: "0.02em" }}
        >
          {line.reading}
        </div>
      )}

      {/* 韓国語原文（元の歌詞をそのまま表示） */}
      <div className="mt-1 text-2xl font-semibold text-slate-800 leading-relaxed tracking-wide whitespace-pre-wrap">
        {interactiveSegments.length > 0 ? (
          interactiveSegments.map((segment, index) =>
            segment.token ? (
              <WordTooltip
                key={`${line.id}-${segment.token.id}-${index}`}
                token={segment.token}
                isSelected={selectedTokenId === segment.token.id}
                onSelect={(tokenId) => onSelectToken(tokenId, line.id)}
              />
            ) : (
              <span key={`${line.id}-plain-${index}`}>{segment.text}</span>
            ),
          )
        ) : (
          line.korean
        )}
      </div>

      {/* 日本語訳 */}
      {showJapanese && (
        <div className="mt-1 text-base text-slate-600 leading-relaxed">
          {line.japanese}
        </div>
      )}
    </div>
  );
}

type InteractiveSegment = {
  text: string;
  token?: Token;
};

function buildInteractiveSegments(
  lyric: string,
  tokens: Token[],
): InteractiveSegment[] {
  const candidates = dedupeTokensForLyric(lyric, tokens);

  if (candidates.length === 0) {
    return [];
  }

  const segments: InteractiveSegment[] = [];
  let cursor = 0;

  while (cursor < lyric.length) {
    const matchedToken = candidates.find((token) =>
      lyric.startsWith(token.surface, cursor),
    );

    if (matchedToken) {
      segments.push({ text: matchedToken.surface, token: matchedToken });
      cursor += matchedToken.surface.length;
      continue;
    }

    let nextCursor = cursor + 1;
    while (
      nextCursor < lyric.length &&
      !candidates.some((token) => lyric.startsWith(token.surface, nextCursor))
    ) {
      nextCursor += 1;
    }

    segments.push({ text: lyric.slice(cursor, nextCursor) });
    cursor = nextCursor;
  }

  return segments;
}

function dedupeTokensForLyric(lyric: string, tokens: Token[]): Token[] {
  const usableTokens = tokens.filter(
    (token) =>
      token.surface.trim().length > 0 &&
      !token.surface.startsWith("-") &&
      lyric.includes(token.surface),
  );

  const seen = new Set<string>();
  return usableTokens
    .sort((a, b) => b.surface.length - a.surface.length)
    .filter((token) => {
      if (seen.has(token.surface)) {
        return false;
      }
      seen.add(token.surface);
      return true;
    });
}
