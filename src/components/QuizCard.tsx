import { useState } from "react";
import type { CollectedQuiz } from "../utils/collectQuizzes";

interface QuizCardProps {
  quiz: CollectedQuiz;
  index: number;
  total: number;
  mode: "instant" | "batch";
  selectedAnswer: string | null;
  onAnswer: (quizId: string, answer: string) => void;
}

export function QuizCard({
  quiz,
  index,
  total,
  mode,
  selectedAnswer,
  onAnswer,
}: QuizCardProps) {
  const [localAnswer, setLocalAnswer] = useState<string | null>(null);

  const answered = mode === "instant" ? localAnswer !== null : selectedAnswer !== null;
  const currentAnswer = mode === "instant" ? localAnswer : selectedAnswer;
  const isCorrect = currentAnswer === quiz.answer;
  const showResult = mode === "instant" && answered;

  const handleSelect = (choice: string) => {
    if (mode === "instant" && localAnswer !== null) return;
    if (mode === "instant") {
      setLocalAnswer(choice);
    }
    onAnswer(quiz.id, choice);
  };

  const typeLabel: Record<string, string> = {
    "word-meaning": "単語の意味",
    "word-base": "原形",
    grammar: "文法",
    "fill-blank": "穴埋め",
    "which-song": "どの曲？",
  };

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-6 transition-all duration-300 ${
        showResult
          ? isCorrect
            ? "border-emerald-200 bg-emerald-50/30"
            : "border-rose-200 bg-rose-50/30"
          : "border-slate-200/60"
      }`}
      id={`quiz-card-${quiz.id}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-slate-400">
          Q{index + 1} / {total}
        </span>
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full font-medium">
          {typeLabel[quiz.type] || quiz.type}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-base font-bold text-slate-800 mb-2 leading-relaxed">
        {quiz.question}
      </h3>

      {/* Optional text (e.g. for which-song type) */}
      {quiz.text && (
        <div className="bg-slate-50 rounded-xl p-3 mb-4">
          <p className="text-lg font-semibold text-slate-700 text-center">
            {quiz.text}
          </p>
        </div>
      )}

      {/* Choices */}
      <div className="space-y-2 mb-4">
        {quiz.choices.map((choice, i) => {
          const isSelected = currentAnswer === choice;
          const isAnswerCorrect = choice === quiz.answer;
          let choiceStyle =
            "border-slate-200 hover:border-slate-300 hover:bg-slate-50";

          if (showResult) {
            if (isAnswerCorrect) {
              choiceStyle =
                "border-emerald-300 bg-emerald-50 text-emerald-800";
            } else if (isSelected && !isAnswerCorrect) {
              choiceStyle = "border-rose-300 bg-rose-50 text-rose-800";
            } else {
              choiceStyle = "border-slate-200 opacity-50";
            }
          } else if (isSelected) {
            choiceStyle = "border-indigo-300 bg-indigo-50 text-indigo-800";
          }

          const label = String.fromCharCode(65 + i); // A, B, C, D

          return (
            <button
              key={choice}
              onClick={() => handleSelect(choice)}
              disabled={mode === "instant" && answered}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium
                         transition-all duration-200 flex items-center gap-3
                         ${choiceStyle}
                         ${
                           mode === "instant" && answered
                             ? "cursor-default"
                             : "cursor-pointer"
                         }`}
              id={`quiz-choice-${quiz.id}-${i}`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                ${
                  showResult && isAnswerCorrect
                    ? "bg-emerald-200 text-emerald-800"
                    : showResult && isSelected && !isAnswerCorrect
                    ? "bg-rose-200 text-rose-800"
                    : isSelected
                    ? "bg-indigo-200 text-indigo-800"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {label}
              </span>
              <span>{choice}</span>
              {showResult && isAnswerCorrect && (
                <span className="ml-auto text-emerald-600">✓</span>
              )}
              {showResult && isSelected && !isAnswerCorrect && (
                <span className="ml-auto text-rose-600">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Result / Explanation (instant mode) */}
      {showResult && (
        <div
          className={`rounded-xl p-4 text-sm transition-all duration-300 ${
            isCorrect
              ? "bg-emerald-50 border border-emerald-200"
              : "bg-rose-50 border border-rose-200"
          }`}
        >
          <div className="font-bold mb-1">
            {isCorrect ? "🎉 正解！" : "😢 不正解…"}
          </div>
          <p className="text-slate-600 leading-relaxed">{quiz.explanation}</p>
        </div>
      )}

      {/* Song info */}
      {quiz.songTitle && (
        <div className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
          出典：{quiz.songTitle}
          {quiz.songArtist && ` / ${quiz.songArtist}`}
        </div>
      )}
    </div>
  );
}
