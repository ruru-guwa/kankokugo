import type { Token } from "../types/song";
import { WordTooltip } from "./WordTooltip";

interface TokenTextProps {
  tokens: Token[];
  selectedTokenId: string | null;
  onSelectToken: (tokenId: string) => void;
}

export function TokenText({
  tokens,
  selectedTokenId,
  onSelectToken,
}: TokenTextProps) {
  return (
    <span className="inline">
      {tokens.map((token) => (
        <WordTooltip
          key={token.id}
          token={token}
          isSelected={selectedTokenId === token.id}
          onSelect={onSelectToken}
        />
      ))}
    </span>
  );
}
