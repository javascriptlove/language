/**
 * Lesson phrases ↔ audio files. Normally run via generate.sh (see scripts/tts/README.md).
 *
 * Usage:
 *   node --experimental-strip-types scripts/tts/plan.mts plan <ttsLang>      → .tts-cache/jobs-<lang>.json
 *   node --experimental-strip-types scripts/tts/plan.mts manifest <ttsLang>  → public/audio/<lang>/manifest.json
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import type { Lesson } from "../../src/content/types.ts";
import { audioHash, collectSpokenPhrases, type AudioManifest } from "../../src/lib/tts-audio.ts";

const root = resolve(import.meta.dirname, "../..");
const [mode, lang] = process.argv.slice(2);
const config = JSON.parse(readFileSync(join(import.meta.dirname, "voices.json"), "utf8"))[lang];
if (!config || !["plan", "manifest"].includes(mode)) {
  console.error("usage: plan.mts plan|manifest <ttsLang>  (langs in scripts/tts/voices.json)");
  process.exit(1);
}

const outDir = join(root, "public/audio", lang);
const cacheDir = join(root, ".tts-cache");
mkdirSync(outDir, { recursive: true });
mkdirSync(cacheDir, { recursive: true });

const contentDir = join(root, config.contentDir);
const jobs = new Map<string, { hash: string; voice: string; text: string }>();
for (const f of readdirSync(contentDir).filter((f) => f.endsWith(".ts")).sort()) {
  const { lesson } = (await import(pathToFileURL(join(contentDir, f)).href)) as { lesson: Lesson };
  for (const p of collectSpokenPhrases(lesson)) {
    const voice = config.voices[p.slot];
    const hash = audioHash(voice, p.text);
    jobs.set(hash, { hash, voice, text: p.text });
  }
}

if (mode === "plan") {
  const todo = [...jobs.values()].filter((j) => !existsSync(join(outDir, `${j.hash}.mp3`)));
  writeFileSync(join(cacheDir, `jobs-${lang}.json`), JSON.stringify(todo, null, 1));
  console.log(`${lang}: ${jobs.size} phrases, ${todo.length} to generate`);
} else {
  // Drop files no lesson uses any more, then list what's there.
  let removed = 0;
  for (const f of readdirSync(outDir).filter((f) => f.endsWith(".mp3"))) {
    if (!jobs.has(f.slice(0, -4))) {
      unlinkSync(join(outDir, f));
      removed++;
    }
  }
  const files = [...jobs.keys()].filter((h) => existsSync(join(outDir, `${h}.mp3`))).sort();
  const manifest: AudioManifest = { voices: config.voices, files };
  writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest));
  const missing = jobs.size - files.length;
  console.log(`${lang}: manifest lists ${files.length} files${missing ? `, ${missing} MISSING` : ""}${removed ? `, removed ${removed} unused` : ""}`);
}
