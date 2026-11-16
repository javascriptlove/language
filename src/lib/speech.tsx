"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

/* ---------- voices store (module level, so snapshots stay stable) ---------- */

let voicesCache: SpeechSynthesisVoice[] = [];
const voiceListeners = new Set<() => void>();
let voicesInitialised = false;

function refreshVoices() {
  const next = window.speechSynthesis.getVoices();
  if (next.length !== voicesCache.length) {
    voicesCache = next;
    voiceListeners.forEach((l) => l());
  }
}

function subscribeVoices(cb: () => void) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return () => {};
  voiceListeners.add(cb);
  if (!voicesInitialised) {
    voicesInitialised = true;
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
    // Safari sometimes never fires `voiceschanged`; poll briefly as a fallback.
    let tries = 0;
    const poll = setInterval(() => {
      refreshVoices();
      if (voicesCache.length > 0 || ++tries > 20) clearInterval(poll);
    }, 250);
  }
  refreshVoices();
  return () => voiceListeners.delete(cb);
}

const getVoices = () => voicesCache;
const NO_VOICES: SpeechSynthesisVoice[] = [];
const getServerVoices = () => NO_VOICES;

/* ---------- rate setting (persisted) ---------- */

export const RATES = { normal: 0.9, slow: 0.6 } as const;
export type RateName = keyof typeof RATES;
const RATE_KEY = "tts-rate";
const rateListeners = new Set<() => void>();

function readRate(): RateName {
  try {
    return localStorage.getItem(RATE_KEY) === "slow" ? "slow" : "normal";
  } catch {
    return "normal";
  }
}

function subscribeRate(cb: () => void) {
  rateListeners.add(cb);
  return () => rateListeners.delete(cb);
}

function writeRate(rate: RateName) {
  try {
    localStorage.setItem(RATE_KEY, rate);
  } catch {
    /* storage unavailable – setting just won't persist */
  }
  rateListeners.forEach((l) => l());
}

/* ---------- voice choice ---------- */

import type { Gender } from "@/content/types";
import { audioHash, type AudioManifest } from "./tts-audio";

export type { Gender };

/**
 * The Web Speech API doesn't expose a voice's gender, so we keep a list of
 * well-known voices. Unknown voices are assumed female (the usual default).
 */
const MALE_VOICES =
  /\b(markus|yannick|viktor|martin|conrad|killian|stefan|jorge|juan|diego|carlos|alvaro|álvaro|pablo|enrique|thomas|daniel|luca|giuseppe|henri|paul|jean|nicolas|jacques|benigno|gianni|cosimo|lorenzo|rinaldo|reed|eddy|rocko|joaquim|duarte|antonio|jordi|enric|roi|google uk english male)\b/i;

function voiceGender(v: SpeechSynthesisVoice | undefined): Gender {
  return v && MALE_VOICES.test(v.name) ? "m" : "f";
}

/**
 * Pitch for a speaker of `want` gender read by a `base`-gender voice.
 * A shifted female voice makes a convincing male (and vice versa).
 * `variant` separates two speakers of the same gender (e.g. teacher vs. pupil).
 */
function pitchFor(base: Gender, want: Gender | undefined, variant = 0) {
  if (!want) return 1;
  let p = want === base ? 1 : want === "m" ? 0.65 : 1.4;
  if (variant > 0) p *= want === "f" ? 1.15 : 0.9; // younger girl a bit higher, second man a bit deeper
  return Math.min(2, Math.max(0.1, p));
}

const QUALITY_HINTS = ["natural", "premium", "enhanced", "neural", "google", "siri"];
// macOS novelty / low-quality voices – keep them as a last resort.
const NOVELTY = /^(eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|kathy|ralph)\b/i;

function rankVoices(voices: SpeechSynthesisVoice[], lang: string) {
  const want = lang.toLowerCase();
  const prefix = want.split("-")[0];
  const norm = (v: SpeechSynthesisVoice) => v.lang.replace("_", "-").toLowerCase();
  const score = (v: SpeechSynthesisVoice) => {
    let s = 0;
    if (norm(v) === want) s += 10;
    const name = v.name.toLowerCase();
    if (QUALITY_HINTS.some((h) => name.includes(h))) s += 5;
    if (v.localService) s += 1;
    if (NOVELTY.test(v.name)) s -= 20;
    return s;
  };
  return voices
    .filter((v) => norm(v).startsWith(prefix))
    .sort((a, b) => score(b) - score(a));
}

/* ---------- pre-generated audio (public/audio/<lang>/, see scripts/tts) ---------- */

type LoadedManifest = { voices: AudioManifest["voices"]; files: Set<string> };
/** undefined = not fetched yet, null = this language has no generated audio. */
const manifests = new Map<string, LoadedManifest | null>();
const manifestRequests = new Map<string, Promise<LoadedManifest | null>>();
const manifestListeners = new Set<() => void>();

function loadManifest(lang: string): Promise<LoadedManifest | null> {
  let req = manifestRequests.get(lang);
  if (!req) {
    req = fetch(`/audio/${lang}/manifest.json`)
      .then((r) => (r.ok ? (r.json() as Promise<AudioManifest>) : null))
      .then((m) => (m ? { voices: m.voices, files: new Set(m.files) } : null))
      .catch(() => null)
      .then((m) => {
        manifests.set(lang, m);
        manifestListeners.forEach((l) => l());
        return m;
      });
    manifestRequests.set(lang, req);
  }
  return req;
}

/** URL of the generated recording of `item`, if there is one. */
function audioUrl(manifest: LoadedManifest | null | undefined, item: SpeakItem, lang: string) {
  if (!manifest) return null;
  const voice = manifest.voices[item.gender ?? "n"];
  const hash = audioHash(voice, item.text);
  return manifest.files.has(hash) ? `/audio/${lang}/${hash}.mp3` : null;
}

/**
 * Generated-audio state for `lang`: undefined while loading, null if none.
 * Starts the manifest download on mount.
 */
export function useAudioManifest(lang: string) {
  const m = useSyncExternalStore(
    (cb) => {
      manifestListeners.add(cb);
      return () => manifestListeners.delete(cb);
    },
    () => manifests.get(lang),
    () => undefined,
  );
  useEffect(() => {
    void loadManifest(lang);
  }, [lang]);
  return m;
}

/* ---------- context ---------- */

/** `gender` picks a matching pitch; `variant` (0, 1…) separates same-gender speakers. */
export type SpeakItem = { text: string; gender?: Gender; variant?: number };

type SpeechCtx = {
  /** null until hydrated on the client. */
  supported: boolean | null;
  voicesLoaded: boolean;
  rate: RateName;
  setRate: (r: RateName) => void;
  hasVoice: (lang: string) => boolean;
  /** Key of whatever is currently being read (so buttons can show state). */
  activeKey: string | null;
  speak: (text: string, lang: string, key?: string) => void;
  speakSequence: (items: SpeakItem[], lang: string, key: string, onLine?: (i: number) => void) => void;
  stop: () => void;
};

const Ctx = createContext<SpeechCtx | null>(null);

const subscribeNoop = () => () => {};

export function SpeechProvider({ children }: { children: React.ReactNode }) {
  const supported = useSyncExternalStore(
    subscribeNoop,
    (): boolean | null => "speechSynthesis" in window,
    () => null,
  );
  const voices = useSyncExternalStore(subscribeVoices, getVoices, getServerVoices);
  const rate = useSyncExternalStore(subscribeRate, readRate, () => "normal" as RateName);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const runId = useRef(0);
  const audioEl = useRef<HTMLAudioElement | null>(null);

  /** Plays a generated recording; resolves false if it can't be played. */
  const playFile = useCallback(
    (url: string) =>
      new Promise<boolean>((resolve) => {
        const audio = audioEl.current ?? (audioEl.current = new Audio());
        audio.onended = () => resolve(true);
        audio.onerror = () => resolve(false);
        audio.onpause = () => resolve(true); // stop() pauses
        audio.src = url;
        // Generated audio is at natural speed; browser speech "normal" is a bit slower.
        audio.playbackRate = RATES[rate] / RATES.normal;
        audio.play().catch(() => resolve(false));
      }),
    [rate],
  );

  const utter = useCallback(
    /** Resolves true if a recording was played (recordings carry their own pauses). */
    async (item: SpeakItem, lang: string): Promise<boolean> => {
      const url = audioUrl(manifests.get(lang), item, lang);
      if (url && (await playFile(url))) return true;
      if (!("speechSynthesis" in window)) return false;
      await new Promise<void>((resolve) => {
        const u = new SpeechSynthesisUtterance(item.text);
        u.lang = lang;
        const ranked = rankVoices(voices, lang);
        // Always use the single best voice: Chrome lists OS voices that may not be
        // installed, and silently falls back to the system (e.g. Polish) voice for them.
        // Speaker gender is matched by shifting pitch instead.
        const voice = ranked[0];
        if (voice) u.voice = voice;
        u.pitch = pitchFor(voiceGender(voice), item.gender, item.variant);
        u.rate = RATES[rate];
        u.onend = () => resolve();
        u.onerror = () => resolve();
        window.speechSynthesis.speak(u);
      });
      return false;
    },
    [voices, rate, playFile],
  );

  const silence = useCallback(() => {
    audioEl.current?.pause();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const stop = useCallback(() => {
    runId.current++;
    silence();
    setActiveKey(null);
  }, [silence]);

  const speakSequence = useCallback(
    async (items: SpeakItem[], lang: string, key: string, onLine?: (i: number) => void) => {
      if (!supported) return;
      const id = ++runId.current;
      silence();
      setActiveKey(key);
      await loadManifest(lang);
      for (let i = 0; i < items.length; i++) {
        if (runId.current !== id) return;
        onLine?.(i);
        const recorded = await utter(items[i], lang);
        // a short pause between dialogue lines sounds more natural
        if (!recorded && i < items.length - 1) await new Promise((r) => setTimeout(r, 350));
      }
      if (runId.current === id) {
        setActiveKey(null);
        onLine?.(-1);
      }
    },
    [supported, utter, silence],
  );

  const speak = useCallback(
    (text: string, lang: string, key = text) => {
      void speakSequence([{ text }], lang, key);
    },
    [speakSequence],
  );

  const hasVoice = useCallback(
    (lang: string) => rankVoices(voices, lang).length > 0,
    [voices],
  );

  const value = useMemo<SpeechCtx>(
    () => ({
      supported,
      voicesLoaded: voices.length > 0,
      rate,
      setRate: writeRate,
      hasVoice,
      activeKey,
      speak,
      speakSequence,
      stop,
    }),
    [supported, voices, rate, hasVoice, activeKey, speak, speakSequence, stop],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSpeech() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSpeech must be used inside <SpeechProvider>");
  return ctx;
}
