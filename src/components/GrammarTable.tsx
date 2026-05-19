import type { CollectedGrammar } from "../utils/collectGrammar";

interface GrammarTableProps {
  grammar: CollectedGrammar[];
}

export function GrammarTable({ grammar }: GrammarTableProps) {
  if (grammar.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-4xl block mb-3">📝</span>
        <p className="text-slate-400 text-sm">該当する文法が見つかりません</p>
      </div>
    );
  }

  return (
    <div className="space-y-3" id="grammar-table">
      {grammar.map((gp) => (
        <div
          key={gp.id}
          className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5
                     hover:shadow-md hover:border-slate-300/60 transition-all duration-200"
          id={`grammar-card-${gp.id}`}
        >
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-lg font-bold text-slate-800">{gp.title}</span>
            <span className="text-sm text-indigo-600 font-medium">
              {gp.meaning}
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {gp.explanation}
          </p>

          {gp.example && (
            <div className="bg-slate-50 rounded-xl p-3 mb-3">
              <div className="text-sm font-medium text-slate-700">
                {gp.example}
              </div>
              {gp.exampleJapanese && (
                <div className="text-xs text-slate-400 mt-1">
                  {gp.exampleJapanese}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <span>🎵</span>
              {gp.songTitle}
            </span>
            <span className="flex items-center gap-1">
              <span>📄</span>
              <span className="truncate max-w-[250px]">{gp.lineKorean}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
