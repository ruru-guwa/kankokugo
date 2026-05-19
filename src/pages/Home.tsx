import { useState, useMemo } from "react";
import { songs } from "../data/songs";
import { ArtistSpotlight } from "../components/ArtistSpotlight";
import { SongCard } from "../components/SongCard";
import { getArtistProfile } from "../data/artists";
import { SearchBox } from "../components/SearchBox";
import { searchSongs } from "../utils/searchSongs";

export function Home() {
  const [query, setQuery] = useState("");
  const [activeArtist, setActiveArtist] = useState<string | null>(null);

  const artistOptions = useMemo(() => {
    const artistMap = new Map<string, typeof songs>();

    songs.forEach((song) => {
      const currentSongs = artistMap.get(song.artist) ?? [];
      artistMap.set(song.artist, [...currentSongs, song]);
    });

    return Array.from(artistMap.entries()).map(([artist, artistSongs]) => ({
      artist,
      songs: artistSongs,
      songCount: artistSongs.length,
      profile: getArtistProfile(artist, artistSongs),
    }));
  }, []);

  const activeArtistOption = useMemo(
    () =>
      artistOptions.find((option) => option.artist === activeArtist) ?? null,
    [activeArtist, artistOptions],
  );

  const filteredSongs = useMemo(() => {
    const searchedSongs = searchSongs(songs, query);

    if (!activeArtist) {
      return searchedSongs;
    }

    return searchedSongs.filter((song) => song.artist === activeArtist);
  }, [activeArtist, query]);

  const resultLabel = activeArtist
    ? `${activeArtist} の曲`
    : "すべての曲";

  return (
    <div className="max-w-5xl mx-auto px-6 py-10" id="home-page">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            K-POP
          </span>
          で韓国語を学ぼう
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
          好きな曲の歌詞から、単語・文法・表現を丁寧に学べる学習サイト
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-8">
        <SearchBox value={query} onChange={setQuery} />
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Artists
            </div>
            <p className="mt-1 text-sm text-slate-500">
              アーティスト名を押すと、その人の曲だけに絞り込めます
            </p>
          </div>

          {activeArtist && (
            <button
              type="button"
              onClick={() => setActiveArtist(null)}
              className="text-sm font-medium text-slate-500 transition hover:text-slate-800"
            >
              絞り込みを解除
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {artistOptions.map((option) => {
            const isActive = option.artist === activeArtist;

            return (
              <button
                key={option.artist}
                type="button"
                onClick={() =>
                  setActiveArtist((currentArtist) =>
                    currentArtist === option.artist ? null : option.artist,
                  )
                }
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-indigo-500 bg-indigo-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-800"
                }`}
              >
                <span>{option.artist}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {option.songCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeArtistOption && (
        <ArtistSpotlight
          profile={activeArtistOption.profile}
          songCount={activeArtistOption.songCount}
          onClear={() => setActiveArtist(null)}
        />
      )}

      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-slate-700">
            {filteredSongs.length} 曲
          </div>
          <p className="mt-1 text-sm text-slate-500">
            {resultLabel}
            {query.trim() ? ` から「${query}」に一致する結果` : "を表示中"}
          </p>
        </div>
      </div>

      {/* Song List */}
      {filteredSongs.length > 0 ? (
        <div className="space-y-4">
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onArtistClick={(artist) =>
                setActiveArtist((currentArtist) =>
                  currentArtist === artist ? null : artist,
                )
              }
              isArtistActive={activeArtist === song.artist}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="text-4xl block mb-3">🔍</span>
          <p className="text-slate-400 text-sm">
            {activeArtist
              ? `${activeArtist} の曲から「${query}」に一致する曲が見つかりません`
              : `「${query}」に一致する曲が見つかりません`}
          </p>
        </div>
      )}
    </div>
  );
}
