#!/usr/bin/env node
// Regenerates the top-level `frequency` array in catalan-reference.json from
// text/el-petit-princep.txt (copyrighted: only word counts are stored, never text).
// Usage (from repo root): node references/catalan/build-frequency.mjs [N=300]

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const jsonPath = join(here, "catalan-reference.json");
const N = Number(process.argv[2] ?? 300);

// Same normalisation as compare.mjs.
const norm = (s) =>
  " " +
  s.toLowerCase().normalize("NFC").replace(/[’`´]/g, "'").replace(/[•∙⋅]/g, "·").replace(/\\n/g, " ")
    .replace(/[^\p{L}\p{N}·']+/gu, " ").replace(/'/g, "' ").replace(/\s+/g, " ").trim() + " ";

let text = readFileSync(join(here, "text", "el-petit-princep.txt"), "utf8")
  .normalize("NFC")
  .replace(/\f/g, "\n")
  .replace(/[’`´]/g, "'")
  .replace(/[•∙⋅]/g, "·") // pdftotext artefact for the l·l middle dot
  .replace(/l\.l/g, "l·l")
  .replace(/(\p{Ll})-\n\s*(\p{Ll})/gu, "$1$2") // words hyphenated across lines
  .toLowerCase();

// Tokens: letters (and ·), optionally ending in an apostrophe (elided l', d', m'...).
// Hyphenated clitics (dona-li) are split into separate words. Pure numbers never match.
const counts = new Map();
for (const m of text.matchAll(/\p{L}[\p{L}·]*'?/gu)) {
  const w = m[0].replace(/·$/, "");
  if (w.length === 1 && !/^[aieoyu]$/.test(w)) continue; // stray letters
  counts.set(w, (counts.get(w) ?? 0) + 1);
}

const lessonDir = join(here, "..", "..", "src", "content", "polish", "catalan");
const corpus = norm(readdirSync(lessonDir).filter((f) => f.endsWith(".ts"))
  .map((f) => readFileSync(join(lessonDir, f), "utf8")).join("\n"));

const frequency = [...counts]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ca"))
  .slice(0, N)
  .map(([word, count]) => ({ word, count, in_lessons: corpus.includes(norm(word)) }));

const data = JSON.parse(readFileSync(jsonPath, "utf8"));
data.frequency = frequency;
writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n");
console.log(`frequency: ${frequency.length} words (${frequency.filter((f) => !f.in_lessons).length} not in lessons), from ${[...counts.values()].reduce((a, b) => a + b, 0)} tokens`);
