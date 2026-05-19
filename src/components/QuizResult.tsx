import type { CollectedQuiz } from "../utils/collectQuizzes";

interface QuizResultProps {
  quizzes: CollectedQuiz[];
  answers: Record<string, string>;
  onReset: () => void;
}

export function QuizResult({ quizzes, answers, onReset }: QuizResultProps) {
  const total = quizzes.length;
  const correct = quizzes.filter((q) => answers[q.id] === q.answer).length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const getMessage = () => {
    if (percentage === 100) return { emoji: "🎉", text: "パーフェクト！" };
    if (percentage >= 80) return { emoji: "✨", text: "すごい！" };
    if (percentage >= 60) return { emoji: "👍", text: "よくできました！" };
    if (percentage >= 40) return { emoji: "📚", text: "もう少し復習しよう！" };
    return { emoji: "💪", text: "がんばろう！" };
  };

  const message = getMessage();

  return (
    <div
      className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 text-center"
      id="quiz-result"
    >
      <span className="text-5xl block mb-4">{message.emoji}</span>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        {message.text}
      </h2>

      <div className="text-4xl font-bold mb-2">
        <span className="text-indigo-600">{correct}</span>
        <span className="text-slate-400 text-2xl"> / {total}</span>
      </div>

      <div className="text-sm text-slate-500 mb-6">正答率 {percentage}%</div>

      {/* Progress bar */}
      <div className="w-full max-w-xs mx-auto bg-slate-100 rounded-full h-3 mb-6 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            percentage >= 80
              ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
              : percentage >= 60
              ? "bg-gradient-to-r from-amber-400 to-amber-500"
              : "bg-gradient-to-r from-rose-400 to-rose-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Per-question results */}
      <div className="space-y-2 mb-6 max-w-md mx-auto">
        {quizzes.map((quiz, i) => {
          const userAnswer = answers[quiz.id];
          const isCorrect = userAnswer === quiz.answer;
          return (
            <div
              key={quiz.id}
              className={`flex items-center justify-between text-sm px-4 py-2.5 rounded-xl ${
                isCorrect
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-rose-50 text-rose-700"
              }`}
            >
              <span className="font-medium">Q{i + 1}</span>
              <span className="text-xs truncate mx-3 flex-1 text-left">
                {quiz.question}
              </span>
              <span>{isCorrect ? "✓" : "✗"}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={onReset}
        className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium
                   hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
        id="quiz-reset"
      >
        もう一度挑戦する
      </button>
    </div>
  );
}
