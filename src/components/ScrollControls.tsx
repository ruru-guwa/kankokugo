import { useEffect, useState } from "react";

function getScrollMetrics() {
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop;
  const scrollableHeight = Math.max(doc.scrollHeight - window.innerHeight, 0);
  const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

  return {
    progress: Math.min(Math.max(progress, 0), 1),
    showBackToTop: scrollTop > 320,
    scrollableHeight,
  };
}

export function ScrollControls() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateMetrics = () => {
      const next = getScrollMetrics();
      setShowBackToTop(next.showBackToTop);
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateMetrics();
      });
    };

    updateMetrics();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleBackToTop}
        className={`fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full
                    border border-slate-200/80 bg-white/90 px-4 py-3 text-sm font-medium
                    text-slate-700 shadow-lg shadow-slate-200/70 backdrop-blur transition-all duration-200
                    hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 hover:shadow-xl
                    ${
                      showBackToTop
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0"
                    }`}
        aria-label="ページ上部へ戻る"
        id="back-to-top-floating"
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full
                     bg-indigo-50 text-indigo-600"
        >
          ↑
        </span>
        <span>上に戻る</span>
      </button>
    </>
  );
}
