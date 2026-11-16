"use client";

import { useState } from "react";
import type { Exercise } from "@/content/types";
import { checkAnswer, type Verdict } from "@/lib/answers";
import { SpeakButton } from "../SpeakButton";
import { ExerciseFrame, useExerciseRun, verdictClasses } from "./ExerciseFrame";

export function FillExercise({ ex, number }: { ex: Extract<Exercise, { kind: "fill" }>; number: number }) {
  const [values, setValues] = useState<string[]>(() => ex.items.map(() => ""));
  const [verdicts, setVerdicts] = useState<(Verdict | null)[]>(() => ex.items.map(() => null));
  const run = useExerciseRun(ex.id);

  const check = () => {
    const v = ex.items.map((it, i) => checkAnswer(values[i], it.answers));
    setVerdicts(v);
    // "almost" (missing accent / ß) still counts – but we point it out.
    run.check(v.filter((x) => x !== "wrong").length, ex.items.length);
  };

  return (
    <ExerciseFrame
      ex={ex}
      number={number}
      total={ex.items.length}
      run={run}
      canCheck={values.every((v) => v.trim() !== "")}
      onCheck={check}
      onRetry={() => {
        setValues(ex.items.map(() => ""));
        setVerdicts(ex.items.map(() => null));
      }}
    >
      <ol className="space-y-3">
        {ex.items.map((it, i) => {
          const verdict = run.checked ? verdicts[i] : null;
          const full = `${it.before} ${it.answers[0]} ${it.after}`.replace(/\s+([?!.,])/g, "$1").trim();
          return (
            <li key={i} className="flex flex-wrap items-center gap-x-2 gap-y-2 rounded-xl bg-zinc-50 p-3 ring-1 ring-zinc-200">
              <span className="w-6 text-sm font-bold text-zinc-400">{i + 1}.</span>
              <span className="font-target text-lg">{it.before}</span>
              <input
                value={values[i]}
                disabled={run.checked}
                onChange={(e) => setValues((vs) => vs.map((v, k) => (k === i ? e.target.value : v)))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && values.every((v) => v.trim()) && !run.checked) check();
                }}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                aria-label={`Luka ${i + 1}`}
                placeholder={it.hint}
                className={`font-target w-40 rounded-lg border-2 border-zinc-300 bg-white px-3 py-1 text-lg outline-none placeholder:text-sm placeholder:text-zinc-400 focus:border-(--accent) disabled:text-zinc-900 ${verdictClasses(verdict)}`}
              />
              <span className="font-target text-lg">{it.after}</span>
              {run.checked && (
                <span className="flex items-center gap-2 text-sm">
                  {verdict === "correct" && <span className="font-semibold text-emerald-700">✓</span>}
                  {verdict === "almost" && (
                    <span className="text-amber-700">
                      Prawie! Poprawnie: <strong className="font-target">{it.answers[0]}</strong>
                    </span>
                  )}
                  {verdict === "wrong" &&
                    (run.revealed ? (
                      <span className="text-rose-700">
                        Poprawnie: <strong className="font-target">{it.answers[0]}</strong>
                      </span>
                    ) : (
                      <span className="font-semibold text-rose-700">✗</span>
                    ))}
                  {(verdict !== "wrong" || run.revealed) && <SpeakButton text={full} />}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </ExerciseFrame>
  );
}
