"use client";

import type { Block, Exercise } from "@/content/types";
import { isPassed } from "@/lib/progress";
import { useAudioManifest, useSpeech } from "@/lib/speech";
import { Dialogue } from "./blocks/Dialogue";
import { Reading } from "./blocks/Reading";
import { Culture, Goals, Grammar, Pronunciation, SelfCheck } from "./blocks/StaticBlocks";
import { Vocab } from "./blocks/Vocab";
import { ChoiceExercise } from "./exercises/ChoiceExercise";
import { FillExercise } from "./exercises/FillExercise";
import { OrderExercise } from "./exercises/OrderExercise";
import { WriteExercise } from "./exercises/WriteExercise";
import { useLesson } from "./LessonContext";

export function LessonBody({ blocks, languageName }: { blocks: Block[]; languageName: string }) {
  let dialogueNo = 0;
  let exerciseNo = 0;
  const exercises = blocks.flatMap((b) => (b.type === "exercise" ? [b.exercise] : []));

  return (
    <div className="space-y-10">
      <VoiceWarning languageName={languageName} />
      <LessonProgressBar exercises={exercises} />
      {blocks.map((b, i) => {
        switch (b.type) {
          case "goals":
            return <Goals key={i} items={b.items} />;
          case "dialogue":
            return <Dialogue key={i} index={++dialogueNo} {...b} />;
          case "vocab":
            return <Vocab key={i} title={b.title} groups={b.groups} languageName={languageName} />;
          case "grammar":
            return <Grammar key={i} {...b} />;
          case "pronunciation":
            return <Pronunciation key={i} {...b} />;
          case "reading":
            return <Reading key={i} {...b} />;
          case "culture":
            return <Culture key={i} {...b} />;
          case "selfcheck":
            return <SelfCheck key={i} items={b.items} />;
          case "exercise":
            return <ExerciseView key={i} ex={b.exercise} number={++exerciseNo} />;
        }
      })}
      <VoiceCredit />
    </div>
  );
}

/** Attribution required by some voice licences (see scripts/tts/voices.json). */
function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
      {children}
    </a>
  );
}

/** One entry per voice used in scripts/tts/voices.json; keep in sync when a voice changes. */
type VoiceSource = { voices: string; source: React.ReactNode; license: string };
const piper = <Ext href="https://github.com/OHF-Voice/piper1-gpl">Piper</Ext>;
const OHF = "https://github.com/OHF-Voice/voice-datasets";

const VOICE_SOURCES: Record<string, VoiceSource[]> = {
  "de-DE": [
    { voices: "Thorsten", source: <Ext href="https://github.com/thorstenMueller/Thorsten-Voice">Thorsten-Voice</Ext>, license: "CC0" },
    { voices: "Kerstin", source: <Ext href={OHF}>OHF-Voice</Ext>, license: "CC0" },
  ],
  "it-IT": [
    { voices: "Serena", source: <Ext href="https://huggingface.co/datasets/committa/serena-synthetic-it-27h">serena-synthetic-it</Ext>, license: "CC BY 4.0" },
    { voices: "Riccardo", source: <>M-AILABS Speech Dataset (© 2017–2019 M-AILABS)</>, license: "licencja M-AILABS (BSD)" },
  ],
  "fr-FR": [
    { voices: "Siwis", source: <Ext href="https://datashare.is.ed.ac.uk/handle/10283/2353">SIWIS French Speech Synthesis Database</Ext>, license: "CC BY 4.0" },
    { voices: "Tom", source: <Ext href="https://git.bksp.space/Tjiho/French-tts-model-piper">Tjiho/French-tts-model-piper</Ext>, license: "AGPLv3" },
  ],
  "es-ES": [
    { voices: "Davefx", source: <Ext href={OHF}>OHF-Voice</Ext>, license: "CC0" },
    { voices: "Sharvard", source: <Ext href="https://datashare.ed.ac.uk/handle/10283/574">Sharvard Corpus</Ext>, license: "CC BY 3.0" },
  ],
  "pt-PT": [{ voices: "Tugão", source: <Ext href={OHF}>OHF-Voice</Ext>, license: "CC0" }],
  "ca-ES": [
    { voices: "Ona i Pau", source: <Ext href="https://collectivat.cat/asr#upc-festcat-tts-corpora">UPC Festcat</Ext>, license: "CC BY-SA 3.0 ES" },
  ],
  "gl-ES": [
    { voices: "Celtia i Brais", source: <><Ext href="https://nos.gal">Proxecto Nós</Ext> (Universidade de Santiago de Compostela)</>, license: "Apache 2.0" },
  ],
};

function VoiceCredits({ ttsLang }: { ttsLang: string }) {
  const sources = VOICE_SOURCES[ttsLang];
  if (!sources) return null;
  const usesPiper = ttsLang !== "gl-ES";
  return (
    <>
      Nagrania{usesPiper && <> ({piper})</>}:{" "}
      {sources.map((s, i) => (
        <span key={s.voices}>
          {i > 0 && "; "}
          {s.voices.includes(" i ") ? "głosy" : "głos"} {s.voices} – {s.source}, {s.license}
        </span>
      ))}
      .
    </>
  );
}

function VoiceCredit() {
  const { ttsLang } = useLesson();
  const audio = useAudioManifest(ttsLang);
  if (!audio || !VOICE_SOURCES[ttsLang]) return null;
  return (
    <p className="text-xs text-slate-400">
      <VoiceCredits ttsLang={ttsLang} />
    </p>
  );
}

function ExerciseView({ ex, number }: { ex: Exercise; number: number }) {
  switch (ex.kind) {
    case "choice":
    case "listen":
      return <ChoiceExercise ex={ex} number={number} />;
    case "fill":
      return <FillExercise ex={ex} number={number} />;
    case "order":
      return <OrderExercise ex={ex} number={number} />;
    case "write":
      return <WriteExercise ex={ex} number={number} />;
  }
}

function LessonProgressBar({ exercises }: { exercises: Exercise[] }) {
  const { progress, reset } = useLesson();
  const passed = exercises.filter((e) => isPassed(progress.exercises[e.id])).length;
  const pct = Math.round((passed / exercises.length) * 100);
  return (
    <div className="sticky top-16 z-10 -mx-2 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <span className="font-semibold">
          Zaliczone zadania: {passed}/{exercises.length}
        </span>
        <div className="h-2.5 min-w-32 flex-1 overflow-hidden rounded-full bg-zinc-100">
          <div className="h-full rounded-full bg-(--accent) transition-all" style={{ width: `${pct}%` }} />
        </div>
        <nav className="flex flex-wrap gap-1">
          {exercises.map((e, i) => (
            <a
              key={e.id}
              href={`#${e.id}`}
              title={e.title}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                isPassed(progress.exercises[e.id]) ? "bg-emerald-500 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {i + 1}
            </a>
          ))}
        </nav>
        {passed > 0 && (
          <button type="button" onClick={reset} className="text-xs text-zinc-400 underline hover:text-zinc-700">
            wyzeruj
          </button>
        )}
      </div>
    </div>
  );
}

function VoiceWarning({ languageName }: { languageName: string }) {
  const { supported, hasVoice, voicesLoaded } = useSpeech();
  const { ttsLang } = useLesson();
  const audio = useAudioManifest(ttsLang);
  // Pre-generated recordings cover the lesson, so the browser's voices don't matter.
  if (audio !== null) return null;
  if (supported === false) {
    return (
      <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200">
        ⚠️ Twoja przeglądarka nie obsługuje czytania na głos. Otwórz stronę w Chrome, Edge lub Safari.
      </p>
    );
  }
  // Voices load asynchronously; only warn once some voices exist but none match.
  if (voicesLoaded && !hasVoice(ttsLang)) {
    return (
      <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900 ring-1 ring-amber-200">
        ⚠️ Na tym urządzeniu nie ma głosu dla języka: {languageName.toLowerCase()}. Wymowa może brzmieć
        nienaturalnie. Dodaj głos w ustawieniach systemu (Ustawienia → Dostępność → Treść mówiona / Mowa) lub
        otwórz stronę w przeglądarce Microsoft Edge – ma najwięcej głosów, także dla rzadszych języków.
      </p>
    );
  }
  return null;
}
