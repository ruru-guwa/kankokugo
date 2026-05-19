import type { LyricLine } from "../types/song";
import { LyricsLineComponent } from "./LyricsLine";

interface LyricsViewerProps {
  lines: LyricLine[];
  selectedLineId: string | null;
  selectedTokenId: string | null;
  showReading: boolean;
  showJapanese: boolean;
  onSelectLine: (lineId: string) => void;
  onSelectToken: (tokenId: string, lineId?: string) => void;
}

export function LyricsViewer({
  lines,
  selectedLineId,
  selectedTokenId,
  showReading,
  showJapanese,
  onSelectLine,
  onSelectToken,
}: LyricsViewerProps) {
  return (
    <div
      className="relative z-20 rounded-2xl border border-slate-200/60 bg-white px-4 py-5 shadow-sm"
      id="lyrics-viewer"
    >
      {lines.map((line) => (
        <LyricsLineComponent
          key={line.id}
          line={line}
          isSelected={selectedLineId === line.id}
          selectedTokenId={selectedTokenId}
          showReading={showReading}
          showJapanese={showJapanese}
          onSelectLine={onSelectLine}
          onSelectToken={onSelectToken}
        />
      ))}
    </div>
  );
}
