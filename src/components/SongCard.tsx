import { useNavigate } from "react-router-dom";
import type { Song } from "../types/song";

interface SongCardProps {
  song: Song;
  onArtistClick?: (artist: string) => void;
  isArtistActive?: boolean;
}

export function SongCard({
  song,
  onArtistClick,
  isArtistActive = false,
}: SongCardProps) {
  const navigate = useNavigate();

  const openSong = () => {
    navigate(`/songs/${song.id}`);
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openSong}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openSong();
        }
      }}
      className="group block cursor-pointer"
      id={`song-card-${song.id}`}
    >
      <div
        className="bg-white rounded-2xl border border-slate-200/60 shadow-sm
                      p-6 md:p-7 transition-all duration-300
                      hover:shadow-md hover:border-slate-300/60 hover:-translate-y-0.5"
      >
        <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-8">
          <div className="min-w-0 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
              {song.title}
            </h3>
            <div className="mt-2">
              {onArtistClick ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onArtistClick(song.artist);
                  }}
                  onKeyDown={(event) => {
                    event.stopPropagation();
                  }}
                  className={`text-sm transition-colors ${
                    isArtistActive
                      ? "font-semibold text-indigo-600"
                      : "text-slate-500 hover:text-indigo-600"
                  }`}
                >
                  {song.artist}
                </button>
              ) : (
                <p className="text-sm text-slate-500">{song.artist}</p>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {song.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <div className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
              Overview
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[15px]">
              {song.overview}
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200/70">
              <span className="inline-flex items-center text-sm font-medium text-slate-500 group-hover:text-indigo-500 transition-colors">
                曲の詳細を見る →
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
