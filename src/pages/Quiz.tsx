import { useState, useMemo } from "react";
import { songs } from "../data/songs";
import { collectQuizzes } from "../utils/collectQuizzes";
import { shuffle } from "../utils/shuffle";
import { QuizCard } from "../components/QuizCard";
import { QuizResult } from "../components/QuizResult";

type GradingMode = "instant" | "batch";
type OrderMode = "sequential" | "random";

export function Quiz() {
  const [gradingMode, setGradingMode] = useState<GradingMode>("instant");
  const [orderMode, setOrderMode] = useState<OrderMode>("sequential");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [randomSeed, setRandomSeed] = useState(0);

  const allQuizzes = useMemo(() => collectQuizzes(songs), []);

  const orderedQuizzes = useMemo(() => {
    if (orderMode === "random") {
      return shuffle(allQuizzes);
    }
    return allQuizzes;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuizzes, orderMode, randomSeed]);

  const handleAnswer = (quizId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [quizId]: answer }));
  };

  const handleSubmitBatch = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
    if (orderMode === "random") {
      setRandomSeed((prev) => prev + 1);
    }
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === orderedQuizzes.length;

  if (orderedQuizzes.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-5xl block mb-4">🧩</span>
        <h2 className="text-xl font-bold text-slate-700 mb-2">
          クイズがまだありません
        </h2>
        <p className="text-sm text-slate-500">曲データにクイズを追加してください</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10" id="quiz-page">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">🧩 クイズ</h1>
        <p className="text-sm text-slate-500">
          全{allQuizzes.length}問
        </p>
      </div>

      {/* Settings */}
      {!showResult && (
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Grading mode */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                採点方式：
              </span>
              <div className="flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => {
                    setGradingMode("instant");
                    setAnswers({});
                    setShowResult(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    gradingMode === "instant"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  id="mode-instant"
                >
                  1問ごと
                </button>
                <button
                  onClick={() => {
                    setGradingMode("batch");
                    setAnswers({});
                    setShowResult(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    gradingMode === "batch"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  id="mode-batch"
                >
                  まとめ採点
                </button>
              </div>
            </div>

            {/* Order mode */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                出題順：
              </span>
              <div className="flex bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => {
                    setOrderMode("sequential");
                    setAnswers({});
                    setShowResult(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    orderMode === "sequential"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  id="order-sequential"
                >
                  登録順
                </button>
                <button
                  onClick={() => {
                    setOrderMode("random");
                    setAnswers({});
                    setShowResult(false);
                    setRandomSeed((prev) => prev + 1);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                    orderMode === "random"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                  id="order-random"
                >
                  ランダム
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz content */}
      {showResult ? (
        <QuizResult
          quizzes={orderedQuizzes}
          answers={answers}
          onReset={handleReset}
        />
      ) : (
        <>
          <div className="space-y-4">
            {orderedQuizzes.map((quiz, i) => (
              <QuizCard
                key={quiz.id}
                quiz={quiz}
                index={i}
                total={orderedQuizzes.length}
                mode={gradingMode}
                selectedAnswer={answers[quiz.id] || null}
                onAnswer={handleAnswer}
              />
            ))}
          </div>

          {/* Batch submit */}
          {gradingMode === "batch" && (
            <div className="text-center mt-8">
              <div className="text-sm text-slate-500 mb-3">
                {answeredCount} / {orderedQuizzes.length} 問回答済み
              </div>
              <button
                onClick={handleSubmitBatch}
                disabled={!allAnswered}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm ${
                  allAnswered
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
                id="submit-batch"
              >
                採点する
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
