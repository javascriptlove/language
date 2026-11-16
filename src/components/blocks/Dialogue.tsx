"use client";

import { useState } from "react";
import type { DialogueLine, Gender } from "@/content/types";
import { useSpeech } from "@/lib/speech";
import { useLesson } from "../LessonContext";
import { PillButton, Section } from "../Section";
import { SpeakButton, SpeakerIcon, StopIcon, TargetTitle } from "../SpeakButton";

const SPEAKER_COLORS = [
  "bg-(--accent) text-white",
  "bg-sky-600 text-white",
  "bg-emerald-600 text-white",
];

export function Dialogue({
  index,
  title,
  titlePl,
  context,
  cast,
  lines,
}: {
  index: number;
  title: string;
  titlePl: string;
  context: string;
  cast: Record<string, Gender>;
  lines: DialogueLine[];
}) {
  const { speakSequence, stop, activeKey, supported } = useSpeech();
  const { ttsLang } = useLesson();
  const [showPl, setShowPl] = useState(false);
  const [current, setCurrent] = useState(-1);
  const speakers = [...new Set(lines.map((l) => l.speaker))];
  const key = `dialogue:${title}`;
  const playing = activeKey === key;

  // n-th speaker of the same gender gets a slightly different pitch.
  const voiceFor = (speaker: string, text: string) => {
    const gender = cast[speaker];
    const sameGender = speakers.filter((s) => cast[s] === gender);
    return { text, gender, variant: sameGender.indexOf(speaker) };
  };

  const playAll = () => {
    if (playing) {
      stop();
      setCurrent(-1);
      return;
    }
    speakSequence(
      lines.map((l) => voiceFor(l.speaker, l.text)),
      ttsLang,
      key,
      setCurrent,
    );
  };

  return (
    <Section
      label={`Dialog ${index}`}
      title={<TargetTitle text={title} pl={titlePl} />}
      actions={
        <>
          <PillButton variant="solid" onClick={playAll} disabled={!supported}>
            {playing ? <StopIcon /> : <SpeakerIcon />}
            {playing ? "Zatrzymaj" : "Odtwórz cały dialog"}
          </PillButton>
          <PillButton onClick={() => setShowPl((v) => !v)} active={showPl}>
            {showPl ? "Ukryj tłumaczenie" : "Pokaż tłumaczenie"}
          </PillButton>
        </>
      }
    >
      <p className="mb-5 text-sm italic text-zinc-600">{context}</p>
      <ol className="space-y-3">
        {lines.map((line, i) => {
          const s = speakers.indexOf(line.speaker);
          const isCurrent = playing && current === i;
          return (
            <li
              key={i}
              className={`flex items-start gap-3 rounded-xl p-2 transition ${isCurrent ? "bg-(--accent-soft) ring-2 ring-(--accent)/40" : ""}`}
            >
              <span
                className={`mt-0.5 inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-bold ${SPEAKER_COLORS[s % SPEAKER_COLORS.length]}`}
                title={line.speaker}
              >
                {initials(line.speaker)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{line.speaker}</div>
                <div className="font-target text-lg leading-snug sm:text-xl">{line.text}</div>
                {showPl && <div className="mt-0.5 text-sm text-zinc-500">{line.pl}</div>}
              </div>
              <SpeakButton speakKey={`line:${title}:${i}`} {...voiceFor(line.speaker, line.text)} />
            </li>
          );
        })}
      </ol>
      <p className="mt-5 rounded-lg bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
        💡 <strong>Jak ćwiczyć?</strong> 1) Posłuchaj całego dialogu bez tłumaczenia. 2) Włącz tłumaczenie i
        sprawdź, ile zrozumiałeś/-aś. 3) Odtwarzaj zdanie po zdaniu i powtarzaj na głos. 4) Odegraj dialog –
        czytaj kwestie jednej osoby, a drugą odtwarzaj z głośnika.
      </p>
    </Section>
  );
}

function initials(name: string) {
  const parts = name.split(" ");
  return parts.length > 1 ? parts.map((p) => p[0]).join("") : name.slice(0, 2);
}
