import type { Song, GrammarPoint } from "../types/song";

export type CollectedGrammar = GrammarPoint & {
  songId: string;
  songTitle: string;
  songArtist: string;
  lineId: string;
  lineKorean: string;
};

export function collectGrammar(songs: Song[]): CollectedGrammar[] {
  const grammarMap = new Map<string, CollectedGrammar>();

  for (const song of songs) {
    for (const line of song.lines) {
      if (!line.grammarPoints) continue;
      for (const gp of line.grammarPoints) {
        // 同じ文法IDが複数行に出る場合は最初のものを採用
        if (!grammarMap.has(gp.id)) {
          grammarMap.set(gp.id, {
            ...gp,
            songId: song.id,
            songTitle: song.title,
            songArtist: song.artist,
            lineId: line.id,
            lineKorean: line.korean,
          });
        }
      }
    }
  }

  return Array.from(grammarMap.values());
}
