import { useState, useRef, useEffect } from "react";
import type { Token } from "../types/song";

interface WordTooltipProps {
  token: Token;
  isSelected: boolean;
  onSelect: (tokenId: string) => void;
  variant?: "inline" | "pill";
}

export function WordTooltip({
  token,
  isSelected,
  onSelect,
  variant = "inline",
}: WordTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const wordRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isHovered && wordRef.current) {
      const rect = wordRef.current.getBoundingClientRect();
      const tooltipWidth = 160;
      let left = rect.left + rect.width / 2;

      // 画面端の場合の調整
      if (left - tooltipWidth / 2 < 8) {
        left = tooltipWidth / 2 + 8;
      }
      if (left + tooltipWidth / 2 > window.innerWidth - 8) {
        left = window.innerWidth - tooltipWidth / 2 - 8;
      }

      setTooltipStyle({
        position: "fixed",
        top: rect.top - 8,
        left: left,
        transform: "translateX(-50%) translateY(-100%)",
      });
    }
  }, [isHovered]);

  const isNonKorean = token.language !== "ko";
  const isPill = variant === "pill";

  const sharedHoverHandlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false),
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onSelect(token.id);
  };

  return (
    <span className="relative inline">
      {isPill ? (
        <button
          ref={wordRef as React.RefObject<HTMLButtonElement>}
          type="button"
          onClick={handleClick}
          {...sharedHoverHandlers}
          className={`rounded-full border px-3 py-1.5 text-left text-sm font-medium transition-colors ${
            isSelected
              ? "border-indigo-300 bg-indigo-50 text-indigo-700"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
          } ${isNonKorean ? "italic" : ""}`}
        >
          {token.surface}
        </button>
      ) : (
        <>
          <span
            ref={wordRef as React.RefObject<HTMLSpanElement>}
            onClick={handleClick}
            {...sharedHoverHandlers}
            className={`
              cursor-pointer transition-all duration-150 rounded-sm px-0.5 -mx-0.5
              ${isNonKorean ? "italic" : ""}
              ${
                isSelected
                  ? "bg-indigo-100 text-indigo-800 underline decoration-indigo-400 decoration-2 underline-offset-4"
                  : isHovered
                  ? "bg-slate-100 underline decoration-slate-300 decoration-1 underline-offset-4"
                  : ""
              }
            `}
          >
            {token.surface}
          </span>
          {token.trailingText && (
            <span className="text-slate-400">{token.trailingText}</span>
          )}
          {token.trailingSpace && <span> </span>}
        </>
      )}

      {/* Tooltip */}
      {isHovered && (
        <span
          className="tooltip-enter fixed z-[100] pointer-events-none"
          style={tooltipStyle}
        >
          <span
            className="block bg-slate-800 text-white text-xs font-medium
                        px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap
                        max-w-[200px] text-center"
          >
            {token.shortMeaning}
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-1
                          w-2 h-2 bg-slate-800 rotate-45"
            />
          </span>
        </span>
      )}
    </span>
  );
}
