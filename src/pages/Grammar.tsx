import { useState, useMemo } from "react";
import { songs } from "../data/songs";
import { collectGrammar } from "../utils/collectGrammar";
import { GrammarTable } from "../components/GrammarTable";
import { SearchBox } from "../components/SearchBox";

export function Grammar() {
  const [query, setQuery] = useState("");
  const [songFilter, setSongFilter] = useState("");

  const allGrammar = useMemo(() => collectGrammar(songs), []);

  const songOptions = useMemo(() => {
    const map = new Map<string, string>();
    allGrammar.forEach((g) => map.set(g.songId, g.songTitle));
    return Array.from(map.entries());
  }, [allGrammar]);

  const filteredGrammar = useMemo(() => {
    return allGrammar.filter((gp) => {
      if (query.trim()) {
        const q = query.toLowerCase();
        const match =
          gp.title.toLowerCase().includes(q) ||
          gp.meaning.toLowerCase().includes(q) ||
          gp.explanation.toLowerCase().includes(q);
        if (!match) return false;
      }

      if (songFilter && gp.songId !== songFilter) return false;

      return true;
    });
  }, [allGrammar, query, songFilter]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10" id="grammar-page">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">📝 文法一覧</h1>
        <p className="text-sm text-slate-500">
          全{allGrammar.length}文法から検索
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-6">
        <SearchBox
          value={query}
          onChange={setQuery}
          placeholder="文法名・意味で検索..."
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
        <select
          value={songFilter}
          onChange={(e) => setSongFilter(e.target.value)}
          className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2 text-slate-600
                     focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          id="grammar-filter-song"
        >
          <option value="">曲名</option>
          {songOptions.map(([id, title]) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>

        {songFilter && (
          <button
            onClick={() => setSongFilter("")}
            className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            id="grammar-clear-filter"
          >
            クリア
          </button>
        )}
      </div>

      {/* Results count */}
      <div className="text-xs text-slate-400 mb-4 text-center">
        {filteredGrammar.length} / {allGrammar.length} 文法
      </div>

      {/* Table */}
      <GrammarTable grammar={filteredGrammar} />
    </div>
  );
}
