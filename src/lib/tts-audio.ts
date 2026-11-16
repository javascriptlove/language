/**
 * Pre-generated speech audio (see scripts/tts/).
 *
 * Shared by the generator (run with `node --experimental-strip-types`) and the
 * browser, so keep it dependency-free and use relative imports only.
 */
import type { Block, Gender, Lesson } from "../content/types";

/** Which voice reads a phrase: a dialogue speaker's gender, or neutral narration. */
export type VoiceSlot = Gender | "n";

/** `public/audio/<ttsLang>/manifest.json` */
export type AudioManifest = {
  /** Voice id used for each slot, e.g. { n: "de_DE-thorsten-high", … }. */
  voices: Record<VoiceSlot, string>;
  /** Hashes of the phrases that have an `<hash>.mp3` file. */
  files: string[];
};

export const normalizeText = (text: string) => text.replace(/\s+/g, " ").trim();

/** cyrb53 – small, fast, deterministic 53-bit string hash. */
function cyrb53(str: string, seed = 0) {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

/** File name (without `.mp3`) for `text` read by `voice`. */
export const audioHash = (voice: string, text: string) =>
  cyrb53(`${voice}|${normalizeText(text)}`).toString(16).padStart(14, "0");

export type SpokenPhrase = { slot: VoiceSlot; text: string };

/**
 * Every phrase a lesson can read aloud – mirrors the speak calls in
 * src/components (SpeakButton, Dialogue, Vocab, Reading, exercises).
 * Free text typed by the learner is not covered and uses browser speech.
 */
export function collectSpokenPhrases(lesson: Lesson): SpokenPhrase[] {
  const out: SpokenPhrase[] = [];
  const add = (text: string | undefined, slot: VoiceSlot = "n") => {
    if (text && normalizeText(text)) out.push({ slot, text: normalizeText(text) });
  };

  const block = (b: Block) => {
    switch (b.type) {
      case "dialogue":
        add(b.title);
        for (const l of b.lines) add(l.text, b.cast[l.speaker] ?? "n");
        break;
      case "vocab":
        for (const g of b.groups) for (const i of g.items) add(i.text.replace("…", ""));
        break;
      case "grammar":
        for (const r of b.table?.rows ?? []) add(r.speak);
        for (const e of b.examples ?? []) add(e.text);
        break;
      case "pronunciation":
        for (const i of b.items) for (const e of i.examples) add(e);
        break;
      case "culture":
        for (const e of b.examples ?? []) add(e.text);
        break;
      case "reading":
        add(b.title);
        for (const s of b.sentences) add(s.text);
        break;
      case "exercise": {
        const ex = b.exercise;
        if (ex.kind === "choice") {
          for (const it of ex.items) {
            add(it.speak);
            if (it.speakOptions) for (const o of it.options) add(o);
          }
        } else if (ex.kind === "listen") {
          for (const it of ex.items) add(it.audio);
        } else if (ex.kind === "fill") {
          for (const it of ex.items)
            add(`${it.before} ${it.answers[0]} ${it.after}`.replace(/\s+([?!.,])/g, "$1"));
        } else if (ex.kind === "order") {
          for (const it of ex.items) add(it.answer);
        } else if (ex.kind === "write") {
          add(ex.model);
        }
        break;
      }
    }
  };

  lesson.blocks.forEach(block);
  return out;
}
