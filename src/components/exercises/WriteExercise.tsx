"use client";

import { useState } from "react";
import type { Exercise } from "@/content/types";
import { useSpeech } from "@/lib/speech";
import { useLesson } from "../LessonContext";
import { PillButton } from "../Section";
import { SpeakButton, SpeakerIcon, StopIcon } from "../SpeakButton";
import { ExerciseFrame, useExerciseRun } from "./ExerciseFrame";

/** Open writing / speaking task. Self-assessed against a checklist and a model answer. */
export function WriteExercise({ ex, number }: { ex: Extract<Exercise, { kind: "write" }>; number: number }) {
  const [text, setText] = useState("");
  const [ticks, setTicks] = useState<boolean[]>(() => ex.checklist.map(() => false));
  const [showModel, setShowModel] = useState(false);
  const { speak, stop, activeKey, supported } = useSpeech();
  const { ttsLang } = useLesson();
  const run = useExerciseRun(ex.id);
  const key = `${ex.id}:mine`;

  return (
    <ExerciseFrame
      ex={ex}
      number={number}
      total={ex.checklist.length}
      run={run}
      canCheck={text.trim().length > 10}
      onCheck={() => {
        run.check(ticks.filter(Boolean).length, ex.checklist.length);
        setShowModel(true);
      }}
      onRetry={() => setShowModel(false)}
    >
      <div className="grid gap-5 md:grid-cols-[1fr_16rem]">
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            lang={ttsLang}
            placeholder={ex.placeholder}
            className="font-target w-full rounded-xl border-2 border-zinc-300 bg-white p-3 text-lg outline-none focus:border-(--accent)"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <PillButton
              disabled={!supported || !text.trim()}
              onClick={() => (activeKey === key ? stop() : speak(text, ttsLang, key))}
            >
              {activeKey === key ? <StopIcon /> : <SpeakerIcon />} Posłuchaj mojego tekstu
            </PillButton>
            <PillButton variant="ghost" onClick={() => setShowModel((v) => !v)}>
              {showModel ? "Ukryj przykład" : "Pokaż przykład"}
            </PillButton>
          </div>
        </div>
        <div className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
          <div className="mb-2 text-sm font-bold text-zinc-700">Czy w tekście…</div>
          <ul className="space-y-2 text-sm">
            {ex.checklist.map((c, i) => (
              <li key={c}>
                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={ticks[i]}
                    disabled={run.checked}
                    onChange={() => setTicks((t) => t.map((v, k) => (k === i ? !v : v)))}
                    className="mt-0.5 h-4 w-4 accent-(--accent)"
                  />
                  {c}?
                </label>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-zinc-500">Zaznacz punkty, które wykonałeś/-aś, i kliknij „Sprawdź”.</p>
        </div>
      </div>
      {showModel && (
        <div className="mt-5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-4">
          <div className="mb-1 flex items-center gap-2 text-sm font-bold text-emerald-900">
            Przykładowa odpowiedź <SpeakButton text={ex.model} speakKey={`${ex.id}:model`} />
          </div>
          <p className="font-target text-lg">{ex.model}</p>
          <p className="mt-1 text-sm text-zinc-600">{ex.modelPl}</p>
          <p className="mt-3 text-sm text-emerald-900">
            🗣️ Na koniec przeczytaj swój tekst na głos 2–3 razy – najpierw razem z lektorem, potem sam/sama.
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
