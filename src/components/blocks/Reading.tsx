"use client";

import { useState } from "react";
import type { Phrase } from "@/content/types";
import { useSpeech } from "@/lib/speech";
import { useLesson } from "../LessonContext";
import { PillButton, Section } from "../Section";
import { SpeakerIcon, StopIcon, TargetTitle } from "../SpeakButton";

/** A short reading text. Click a sentence to hear it; translation on demand. */
export function Reading({
  title,
  titlePl,
  intro,
  sentences,
}: {
  title: string;
  titlePl: string;
  intro: string;
  sentences: Phrase[];
}) {
  const { speakSequence, stop, activeKey, supported } = useSpeech();
  const { ttsLang } = useLesson();
  const [showPl, setShowPl] = useState(false);
  const [current, setCurrent] = useState(-1);
  const key = `reading:${title}`;
  const playing = activeKey === key;

  return (
    <Section
      label="Czytanie"
      tone="culture"
      title={<TargetTitle text={title} pl={titlePl} />}
      actions={
        <>
          <PillButton
            variant="solid"
            disabled={!supported}
            onClick={() =>
              playing ? stop() : speakSequence(sentences.map((s) => ({ text: s.text })), ttsLang, key, setCurrent)
            }
          >
            {playing ? <StopIcon /> : <SpeakerIcon />}
            {playing ? "Zatrzymaj" : "Przeczytaj na głos"}
          </PillButton>
          <PillButton onClick={() => setShowPl((v) => !v)} active={showPl}>
            {showPl ? "Ukryj tłumaczenie" : "Pokaż tłumaczenie"}
          </PillButton>
        </>
      }
    >
      <p className="mb-4 text-sm text-zinc-600">{intro}</p>
      <div className="rounded-xl bg-[#fffdf7] p-5 ring-1 ring-amber-200/70 sm:p-6">
        <p className="font-target text-lg leading-loose sm:text-xl">
          {sentences.map((s, i) => (
            <span key={i}>
              <button
                type="button"
                disabled={!supported}
                onClick={() => speakSequence([{ text: s.text }], ttsLang, `${key}:${i}`)}
                title="Kliknij, aby posłuchać tego zdania"
                className={`rounded px-0.5 text-left transition hover:bg-(--accent-soft) ${
                  (playing && current === i) || activeKey === `${key}:${i}` ? "bg-(--accent-soft) ring-1 ring-(--accent)/40" : ""
                }`}
              >
                {s.text}
              </button>{" "}
              {showPl && <span className="mr-1 block pb-2 text-sm leading-snug text-zinc-500">{s.pl}</span>}
            </span>
          ))}
        </p>
      </div>
      <p className="mt-3 text-xs text-zinc-500">💡 Kliknij dowolne zdanie, żeby usłyszeć tylko je.</p>
    </Section>
  );
}
