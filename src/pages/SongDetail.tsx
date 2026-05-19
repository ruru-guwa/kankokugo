import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { songs } from "../data/songs";
import { LyricsViewer } from "../components/LyricsViewer";
import { SentencePanel } from "../components/SentencePanel";
import { WordDetailPanel } from "../components/WordDetailPanel";
import { QuizCard } from "../components/QuizCard";
import type { Token, LyricLine } from "../types/song";

type TabType = "lyrics" | "quiz";

export function SongDetail() {
  const { songId } = useParams<{ songId: string }>();
  const song = songs.find((s) => s.id === songId);

  const [selectedLineId, setSelectedLineId] = useState<string | null>(null);
  const [selectedTokenId, setSelectedTokenId] = useState<string | null>(null);
  const [showReading, setShowReading] = useState(true);
  const [showJapanese, setShowJapanese] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("lyrics");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const detailPanelWrapperRef = useRef<HTMLDivElement | null>(null);

  const selectedLine: LyricLine | null = useMemo(() => {
    if (!song || !selectedLineId) return null;
    return song.lines.find((l) => l.id === selectedLineId) || null;
  }, [song, selectedLineId]);

  const selectedToken: Token | null = useMemo(() => {
    if (!song || !selectedTokenId) return null;
    for (const line of song.lines) {
      const token = line.tokens.find((t) => t.id === selectedTokenId);
      if (token) return token;
    }
    return null;
  }, [song, selectedTokenId]);

  const tokenLine: LyricLine | null = useMemo(() => {
    if (!song || !selectedTokenId) return null;
    for (const line of song.lines) {
      if (line.tokens.find((t) => t.id === selectedTokenId)) return line;
    }
    return null;
  }, [song, selectedTokenId]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [songId]);

  useEffect(() => {
    if (!selectedTokenId) return;
    detailPanelWrapperRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [selectedTokenId]);

  if (!song) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-5xl block mb-4">😢</span>
        <h2 className="text-xl font-bold text-slate-700 mb-2">
          曲が見つかりません
        </h2>
        <Link
          to="/"
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
        >
          ← ホームに戻る
        </Link>
      </div>
    );
  }

  const handleSelectLine = (lineId: string) => {
    setSelectedLineId((prev) => {
      const next = selectedTokenId
        ? lineId
        : prev === lineId
        ? null
        : lineId;
      setSelectedTokenId(null);
      return next;
    });
  };

  const handleSelectToken = (tokenId: string, lineId?: string) => {
    if (lineId) {
      setSelectedLineId(lineId);
    }
    setSelectedTokenId(tokenId);
  };

  const handleQuizAnswer = (quizId: string, answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [quizId]: answer }));
  };

  const handleBackToSentence = () => {
    setSelectedTokenId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8" id="song-detail-page">
      {/* Header */}
      <div className="mb-6">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-3 inline-block"
          id="back-to-home"
        >
          ← ホームに戻る
        </Link>

        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{song.title}</h1>
            <p className="text-sm text-slate-500 mt-0.5">{song.artist}</p>
          </div>

          <div className="flex items-center gap-2">
            {/* Tabs */}
            <div className="flex bg-slate-100 rounded-xl p-1 mr-2">
              <button
                onClick={() => setActiveTab("lyrics")}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeTab === "lyrics"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                id="tab-lyrics"
              >
                歌詞
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeTab === "quiz"
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
                id="tab-quiz"
              >
                クイズ ({song.quizzes.length})
              </button>
            </div>

            {/* Toggle buttons */}
            {activeTab === "lyrics" && (
              <>
                <button
                  onClick={() => setShowReading((p) => !p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    showReading
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                  id="toggle-reading"
                >
                  読み方 {showReading ? "ON" : "OFF"}
                </button>
                <button
                  onClick={() => setShowJapanese((p) => !p)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200 ${
                    showJapanese
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                      : "bg-slate-50 text-slate-400 border-slate-200"
                  }`}
                  id="toggle-japanese"
                >
                  日本語訳 {showJapanese ? "ON" : "OFF"}
                </button>
              </>
            )}

            {/* External links */}
            {song.links?.youtube && (
              <a
                href={song.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200
                           text-slate-500 hover:text-red-500 hover:border-red-200 transition-all duration-200"
                id="link-youtube"
              >
                ▶ YouTube
              </a>
            )}
            {song.links?.spotify && (
              <a
                href={song.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200
                           text-slate-500 hover:text-green-500 hover:border-green-200 transition-all duration-200"
                id="link-spotify"
              >
                ♫ Spotify
              </a>
            )}
          </div>
        </div>
      </div>

      {activeTab === "lyrics" ? (
        /* 2-Column Layout */
        <div
          className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]"
          id="lyrics-layout"
        >
          {/* Left: Lyrics (60-65%) */}
          <div className="min-w-0">
            <LyricsViewer
              lines={song.lines}
              selectedLineId={selectedLineId}
              selectedTokenId={selectedTokenId}
              showReading={showReading}
              showJapanese={showJapanese}
              onSelectLine={handleSelectLine}
              onSelectToken={handleSelectToken}
            />
          </div>

          {/* Right: Panels (35-40%) */}
          <div className="relative z-10 min-w-0">
            <div className="lg:sticky lg:top-20">
              <div
                ref={detailPanelWrapperRef}
                className="overflow-y-auto pr-1 lg:max-h-[calc(100vh-6rem)]"
              >
                {selectedToken ? (
                  <WordDetailPanel
                    token={selectedToken}
                    song={song}
                    line={tokenLine}
                    onBackToSentence={tokenLine ? handleBackToSentence : undefined}
                  />
                ) : (
                  <SentencePanel
                    song={song}
                    selectedLine={selectedLine}
                    onSelectToken={handleSelectToken}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Tab */
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="text-center mb-4">
            <p className="text-sm text-slate-500">
              この曲に関するクイズ（{song.quizzes.length}問）
            </p>
          </div>
          {song.quizzes.map((quiz, i) => (
            <QuizCard
              key={quiz.id}
              quiz={{ ...quiz, songTitle: song.title, songArtist: song.artist }}
              index={i}
              total={song.quizzes.length}
              mode="instant"
              selectedAnswer={quizAnswers[quiz.id] || null}
              onAnswer={handleQuizAnswer}
            />
          ))}
        </div>
      )}
    </div>
  );
}
