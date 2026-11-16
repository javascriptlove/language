"use client";

import { useState } from "react";
import type { ChoiceItem, Exercise } from "@/content/types";
import { RichText } from "../RichText";
import { SpeakButton } from "../SpeakButton";
import { ExerciseFrame, useExerciseRun } from "./ExerciseFrame";

type Item = ChoiceItem & { audio?: string };

/** Handles both "choice" and "listen" exercises (listen = audio-only prompt). */
export function ChoiceExercise({
  ex,
  number,
}: {
  ex: Extract<Exercise, { kind: "choice" | "listen" }>;
  number: number;
}) {
  const items: Item[] =
    ex.kind === "listen"
      ? ex.items.map((i) => ({ prompt: "", audio: i.audio, options: i.options, answer: i.answer }))
      : ex.items;
  const [picked, setPicked] = useState<(number | null)[]>(() => items.map(() => null));
  const run = useExerciseRun(ex.id);

  const score = items.filter((it, i) => picked[i] === it.answer).length;

  return (
    <ExerciseFrame
      ex={ex}
      number={number}
      total={items.length}
      run={run}
      canCheck={picked.every((p) => p !== null)}
      onCheck={() => run.check(score, items.length)}
      onRetry={() => setPicked(items.map(() => null))}
    >
      <ol className="space-y-4">
        {items.map((it, i) => (
          <li key={i} className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-white">
                {String.fromCharCode(97 + i)}
              </span>
              {it.audio ? (
                <span className="flex items-center gap-3">
                  <SpeakButton text={it.audio} size="md" label="Odtwórz nagranie" speakKey={`${ex.id}:${i}`} />
                  {run.checked ? (
                    <span className="font-target text-lg font-semibold">{it.audio}</span>
                  ) : (
                    <span className="text-sm text-zinc-500">Posłuchaj (możesz kilka razy)</span>
                  )}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <span>
                    <RichText text={it.prompt} />
                  </span>
                  {it.speak && <SpeakButton text={it.speak} />}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 pl-10">
              {it.options.map((opt, o) => {
                const chosen = picked[i] === o;
                const isAnswer = o === it.answer;
                let cls = "border-zinc-300 bg-white hover:border-(--accent)";
                if (chosen && !run.checked) cls = "border-(--accent) bg-(--accent-soft) text-(--accent-ink)";
                if (run.checked && chosen && isAnswer) cls = "border-emerald-500 bg-emerald-50 text-emerald-900";
                if (run.checked && chosen && !isAnswer) cls = "border-rose-400 bg-rose-50 text-rose-900 line-through";
                if (run.checked && run.revealed && isAnswer && !chosen) cls = "border-emerald-500 border-dashed bg-white text-emerald-800";
                return (
                  <span key={o} className="inline-flex items-center gap-1">
                    <button
                      type="button"
                      disabled={run.checked}
                      onClick={() => setPicked((p) => p.map((v, k) => (k === i ? o : v)))}
                      className={`rounded-lg border-2 px-3 py-1.5 text-left font-medium transition disabled:cursor-default ${
                        it.speakOptions ? "font-target" : ""
                      } ${cls}`}
                    >
                      {opt}
                    </button>
                    {it.speakOptions && run.checked && (isAnswer || chosen) && <SpeakButton text={opt} />}
                  </span>
                );
              })}
            </div>
            {run.checked && it.explanation && (picked[i] !== it.answer || run.revealed) && (
              <p className="mt-3 pl-10 text-sm text-zinc-600">💡 {it.explanation}</p>
            )}
          </li>
        ))}
      </ol>
    </ExerciseFrame>
  );
}
