"use client";

import { useState } from "react";
import type { Exercise } from "@/content/types";
import { normalize } from "@/lib/answers";
import { SpeakButton } from "../SpeakButton";
import { ExerciseFrame, useExerciseRun, verdictClasses } from "./ExerciseFrame";

export function OrderExercise({ ex, number }: { ex: Extract<Exercise, { kind: "order" }>; number: number }) {
  // For each item: indices of words picked so far, in order.
  const [picked, setPicked] = useState<number[][]>(() => ex.items.map(() => []));
  const run = useExerciseRun(ex.id);

  const sentence = (i: number) => picked[i].map((w) => ex.items[i].words[w]).join(" ");
  const isRight = (i: number) => normalize(sentence(i)) === normalize(ex.items[i].answer);

  const toggle = (i: number, w: number) =>
    setPicked((p) =>
      p.map((arr, k) => (k !== i ? arr : arr.includes(w) ? arr.filter((x) => x !== w) : [...arr, w])),
    );

  return (
    <ExerciseFrame
      ex={ex}
      number={number}
      total={ex.items.length}
      run={run}
      canCheck={ex.items.every((it, i) => picked[i].length === it.words.length)}
      onCheck={() => run.check(ex.items.filter((_, i) => isRight(i)).length, ex.items.length)}
      onRetry={() => setPicked(ex.items.map(() => []))}
    >
      <ol className="space-y-4">
        {ex.items.map((it, i) => {
          const verdict = run.checked ? (isRight(i) ? "correct" : "wrong") : null;
          return (
            <li key={i} className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
              <div className="mb-2 text-sm text-zinc-500">
                {i + 1}. <span className="italic">{it.pl}</span>
              </div>
              <div
                className={`mb-3 flex min-h-12 flex-wrap items-center gap-2 rounded-lg border-2 border-dashed border-zinc-300 bg-white px-3 py-2 ${verdictClasses(verdict)}`}
              >
                {picked[i].length === 0 && <span className="text-sm text-zinc-400">Tu pojawi się zdanie…</span>}
                {picked[i].map((w) => (
                  <button
                    key={w}
                    type="button"
                    disabled={run.checked}
                    onClick={() => toggle(i, w)}
                    className="font-target rounded-md bg-(--accent) px-2.5 py-1 font-semibold text-white disabled:cursor-default"
                  >
                    {it.words[w]}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {it.words.map((word, w) =>
                  picked[i].includes(w) ? (
                    <span key={w} className="font-target rounded-md border border-dashed border-zinc-300 px-2.5 py-1 text-transparent select-none">
                      {word}
                    </span>
                  ) : (
                    <button
                      key={w}
                      type="button"
                      disabled={run.checked}
                      onClick={() => toggle(i, w)}
                      className="font-target rounded-md border border-zinc-300 bg-white px-2.5 py-1 font-semibold shadow-sm hover:border-(--accent)"
                    >
                      {word}
                    </button>
                  ),
                )}
              </div>
              {run.checked && (verdict === "correct" || run.revealed) && (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className={verdict === "correct" ? "text-emerald-700" : "text-rose-700"}>
                    {verdict === "correct" ? "✓" : "Poprawnie:"}
                  </span>
                  <span className="font-target font-semibold">{it.answer}</span>
                  <SpeakButton text={it.answer} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </ExerciseFrame>
  );
}
