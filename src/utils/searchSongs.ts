import type { Song } from "../types/song";

export function searchSongs(songs: Song[], query: string): Song[] {
  if (!query.trim()) return songs;

  const q = query.toLowerCase().trim();

  return songs.filter((song) => {
    // 曲名
    if (song.title.toLowerCase().includes(q)) return true;

    // アーティスト名
    if (song.artist.toLowerCase().includes(q)) return true;

    // タグ
    if (song.tags.some((tag) => tag.toLowerCase().includes(q))) return true;

    // 歌詞本文
    if (song.lines.some((line) => line.korean.toLowerCase().includes(q)))
      return true;

    // 日本語訳
    if (song.lines.some((line) => line.japanese.includes(q))) return true;

    return false;
  });
}
