"use client";

import { useState } from "react";
import type { Phrase } from "@/content/types";
import { useSpeech } from "@/lib/speech";
import { useLesson } from "../LessonContext";
import { PillButton, Section } from "../Section";
import { SpeakButton, SpeakerIcon, StopIcon } from "../SpeakButton";

type Mode = "all" | "hidePl" | "hideTarget";

export function Vocab({
  title,
  groups,
  languageName,
}: {
  title: string;
  groups: { title: string; items: Phrase[] }[];
  languageName: string;
}) {
  const [mode, setMode] = useState<Mode>("all");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const { speakSequence, stop, activeKey, supported } = useSpeech();
  const { ttsLang } = useLesson();
  const allKey = "vocab:all";
  const playing = activeKey === allKey;

  const changeMode = (m: Mode) => {
    setMode(m);
    setRevealed(new Set());
  };

  const reveal = (id: string) => setRevealed((r) => new Set(r).add(id));

  return (
    <Section
      label="Słownictwo"
      title={title}
      actions={
        <PillButton
          variant="solid"
          disabled={!supported}
          onClick={() =>
            playing
              ? stop()
              : speakSequence(
                  groups.flatMap((g) => g.items.map((i) => ({ text: i.text.replace("…", "") }))),
                  ttsLang,
                  allKey,
                )
          }
        >
          {playing ? <StopIcon /> : <SpeakerIcon />}
          {playing ? "Zatrzymaj" : "Posłuchaj wszystkich"}
        </PillButton>
      }
    >
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-zinc-600">Tryb nauki:</span>
        <PillButton active={mode === "all"} onClick={() => changeMode("all")}>
          Pokaż wszystko
        </PillButton>
        <PillButton active={mode === "hidePl"} onClick={() => changeMode("hidePl")}>
          Zakryj polski
        </PillButton>
        <PillButton active={mode === "hideTarget"} onClick={() => changeMode("hideTarget")}>
          Zakryj {languageName.toLowerCase()}
        </PillButton>
      </div>
      {mode !== "all" && (
        <p className="mb-4 text-sm text-zinc-600">
          Spróbuj przypomnieć sobie zakryte słowo, a potem kliknij pole, żeby sprawdzić.
        </p>
      )}
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-(--accent-ink)">{g.title}</h3>
            <ul className="divide-y divide-dashed divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
              {g.items.map((item) => {
                const id = `${g.title}:${item.text}`;
                const hideTarget = mode === "hideTarget" && !revealed.has(id);
                const hidePl = mode === "hidePl" && !revealed.has(id);
                return (
                  <li key={item.text} className="flex items-center gap-3 px-3 py-2">
                    <SpeakButton text={item.text.replace("…", "")} speakKey={`vocab:${id}`} />
                    <Cell hidden={hideTarget} onReveal={() => reveal(id)} className="font-target flex-1 font-semibold">
                      {item.text}
                    </Cell>
                    <Cell hidden={hidePl} onReveal={() => reveal(id)} className="flex-1 text-right text-sm text-zinc-600">
                      {item.pl}
                    </Cell>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Cell({
  hidden,
  onReveal,
  className,
  children,
}: {
  hidden: boolean;
  onReveal: () => void;
  className: string;
  children: React.ReactNode;
}) {
  if (!hidden) return <span className={className}>{children}</span>;
  return (
    <button
      type="button"
      onClick={onReveal}
      className={`${className} rounded-md bg-zinc-100 px-2 py-1 text-zinc-400 hover:bg-(--accent-soft)`}
    >
      ? ? ?
    </button>
  );
}
