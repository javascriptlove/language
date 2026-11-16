"use client";

import { useSpeech, type Gender } from "@/lib/speech";
import { useLesson } from "./LessonContext";

export function SpeakerIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

export function StopIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}

/** Small round button that reads `text` aloud in the lesson's language. */
export function SpeakButton({
  text,
  label,
  size = "sm",
  speakKey,
  gender,
  variant,
}: {
  text: string;
  label?: string;
  size?: "sm" | "md";
  speakKey?: string;
  /** Speaker gender in dialogues; omitted for neutral narration. */
  gender?: Gender;
  variant?: number;
}) {
  const { speakSequence, stop, activeKey, supported } = useSpeech();
  const { ttsLang } = useLesson();
  const key = speakKey ?? `one:${text}`;
  const active = activeKey === key;
  const dims = size === "md" ? "h-10 w-10" : "h-8 w-8";

  return (
    <button
      type="button"
      onClick={() => (active ? stop() : speakSequence([{ text, gender, variant }], ttsLang, key))}
      disabled={!supported}
      title={label ?? `Posłuchaj: ${text}`}
      aria-label={label ?? `Posłuchaj: ${text}`}
      className={`${dims} inline-flex shrink-0 items-center justify-center rounded-full border border-(--accent)/30 bg-white text-(--accent) shadow-sm transition hover:bg-(--accent) hover:text-white disabled:opacity-40 ${
        active ? "speaking bg-(--accent) text-white" : ""
      }`}
    >
      {active ? <StopIcon className="h-3.5 w-3.5" /> : <SpeakerIcon className={size === "md" ? "h-5 w-5" : "h-4 w-4"} />}
    </button>
  );
}

/** A target-language heading with a listen button and its Polish translation underneath. */
export function TargetTitle({ text, pl }: { text: string; pl: string }) {
  return (
    <span className="flex items-start gap-2">
      <span className="flex flex-col">
        <span className="font-target">{text}</span>
        <span className="mt-0.5 font-sans text-sm font-normal text-zinc-500">{pl}</span>
      </span>
      <SpeakButton text={text} />
    </span>
  );
}
