import type { ArtistProfile } from "../data/artists";

interface ArtistSpotlightProps {
  profile: ArtistProfile;
  songCount: number;
  onClear: () => void;
}

export function ArtistSpotlight({
  profile,
  songCount,
  onClear,
}: ArtistSpotlightProps) {
  const spotlightId = `artist-spotlight-${profile.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <section
      className="mb-8 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 p-6 shadow-sm"
      id={spotlightId}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Artist Focus
          </div>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {profile.name}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            このアーティストの {songCount} 曲を表示中
          </p>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-800"
        >
          すべて表示
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-2xl border border-white/70 bg-white/80 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Overview
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {profile.lead}
          </p>
        </div>

        <div className="rounded-2xl border border-white/70 bg-white/80 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Worldview
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {profile.worldview}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            {profile.lyricFocus}
          </p>
        </div>
      </div>

      {profile.keywords.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
