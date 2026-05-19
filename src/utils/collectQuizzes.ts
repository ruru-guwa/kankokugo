import type { Song, Quiz } from "../types/song";

export type CollectedQuiz = Quiz & {
  songTitle?: string;
  songArtist?: string;
};

export function collectQuizzes(songs: Song[]): CollectedQuiz[] {
  const quizzes: CollectedQuiz[] = [];

  for (const song of songs) {
    for (const quiz of song.quizzes) {
      quizzes.push({
        ...quiz,
        songTitle: song.title,
        songArtist: song.artist,
      });
    }
  }

  return quizzes;
}
