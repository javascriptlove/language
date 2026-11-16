"use client";

import { useState } from "react";
import type { Exercise } from "@/content/types";
import { isPassed } from "@/lib/progress";
import { useLesson } from "../LessonContext";
import { PillButton, Section } from "../Section";

const SKILL_ICON: Record<Exercise["skill"], string> = {
  Słuchanie: "🎧",
  Czytanie: "📖",
  Pisanie: "✏️",
  Mówienie: "🗣️",
  Gramatyka: "🧩",
  Słownictwo: "🔤",
};

/** Shared check / retry / show-answers state for an exercise. */
export function useExerciseRun(id: string) {
  const { saveExercise } = useLesson();
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  return {
    checked,
    revealed,
    score,
    check(score: number, total: number) {
      setScore(score);
      setChecked(true);
      saveExercise(id, { score, total });
    },
    reveal: () => setRevealed(true),
    retry() {
      setChecked(false);
      setRevealed(false);
      setScore(0);
    },
  };
}

export function ExerciseFrame({
  ex,
  number,
  total,
  run,
  canCheck,
  onCheck,
  onRetry,
  hideControls,
  children,
}: {
  ex: Exercise;
  number: number;
  total: number;
  run: ReturnType<typeof useExerciseRun>;
  canCheck: boolean;
  onCheck: () => void;
  onRetry: () => void;
  hideControls?: boolean;
  children: React.ReactNode;
}) {
  const { progress } = useLesson();
  const best = progress.exercises[ex.id];
  const passed = isPassed(best);

  return (
    <Section
      id={ex.id}
      label={`Zadanie ${number}`}
      tone="exercise"
      badge={
        <span className="flex items-center gap-2 pb-1 text-xs font-semibold text-zinc-500">
          <span>
            {SKILL_ICON[ex.skill]} {ex.skill}
          </span>
          {best && (
            <span className={`rounded-full px-2 py-0.5 ${passed ? "bg-emerald-100 text-emerald-800" : "bg-zinc-200 text-zinc-700"}`}>
              {passed ? "✓ zaliczone" : "najlepszy wynik"} {best.score}/{best.total}
            </span>
          )}
        </span>
      }
      title={ex.title}
    >
      <p className="mb-5 font-medium text-zinc-700">{ex.instruction}</p>
      {children}
      {!hideControls && (
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-zinc-100 pt-4">
          {!run.checked ? (
            <PillButton variant="solid" onClick={onCheck} disabled={!canCheck}>
              Sprawdź
            </PillButton>
          ) : (
            <>
              <ScoreBadge score={run.score} total={total} />
              {!run.revealed && run.score < total && (
                <PillButton onClick={run.reveal}>Pokaż odpowiedzi</PillButton>
              )}
              <PillButton
                onClick={() => {
                  run.retry();
                  onRetry();
                }}
              >
                ↻ Spróbuj jeszcze raz
              </PillButton>
            </>
          )}
          {!canCheck && !run.checked && <span className="text-sm text-zinc-500">Odpowiedz na wszystkie pytania.</span>}
        </div>
      )}
    </Section>
  );
}

function ScoreBadge({ score, total }: { score: number; total: number }) {
  const ratio = score / total;
  const msg = ratio === 1 ? "Świetnie! 🎉" : ratio >= 0.8 ? "Bardzo dobrze!" : ratio >= 0.5 ? "Nieźle, popraw błędy." : "Wróć do lekcji i spróbuj jeszcze raz.";
  const color = ratio === 1 ? "bg-emerald-600" : ratio >= 0.8 ? "bg-emerald-500" : ratio >= 0.5 ? "bg-amber-500" : "bg-rose-500";
  return (
    <span className="flex items-center gap-2 text-sm font-semibold">
      <span className={`rounded-full px-3 py-1 text-white ${color}`}>
        {score}/{total}
      </span>
      {msg}
    </span>
  );
}

/** Coloured ring for an answered item. */
export function verdictClasses(state: "correct" | "almost" | "wrong" | null) {
  if (state === "correct") return "ring-2 ring-emerald-500 bg-emerald-50";
  if (state === "almost") return "ring-2 ring-amber-400 bg-amber-50";
  if (state === "wrong") return "ring-2 ring-rose-400 bg-rose-50";
  return "";
}
