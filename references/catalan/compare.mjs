#!/usr/bin/env node
// Compare the Catalan reference data with the lesson files.
// Usage (from repo root):
//   node references/catalan/compare.mjs [--topic X] [--source ID] [--all] [--frequency]
// Prints, per topic, the reference vocab and phrases that appear in no lesson,
// then the reference grammar points whose markers appear in no lesson.
// Phrases: at most 6 fully missing per topic unless --topic is given; exchanges where
// only some sentences occur are counted as "partly covered".
// --all also prints the A2-only source (catala-basic-2) and low-relevance items,
// which are hidden by default.

import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repo = join(here, "..", "..");
const lessonDir = join(repo, "src", "content", "polish", "catalan");

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const topicFilter = opt("--topic");
const sourceFilter = opt("--source");
const showAll = args.includes("--all");

const data = JSON.parse(readFileSync(join(here, "catalan-reference.json"), "utf8"));

// Normalise: lowercase, unify apostrophes and the middle dot, turn punctuation
// (including hyphens) into spaces, collapse whitespace, and pad with spaces so
// that " word " works as a whole-word contains-check.
const norm = (s) =>
  " " +
  s
    .toLowerCase()
    .normalize("NFC")
    .replace(/[’`´]/g, "'")
    .replace(/[•∙⋅]/g, "·")
    .replace(/\\n/g, " ")
    .replace(/[^\p{L}\p{N}·']+/gu, " ")
    .replace(/'/g, "' ")
    .replace(/\s+/g, " ")
    .trim() +
  " ";

const files = readdirSync(lessonDir).filter((f) => f.endsWith(".ts")).sort();
const corpus = norm(files.map((f) => readFileSync(join(lessonDir, f), "utf8")).join("\n"));
const has = (s) => {
  const n = norm(s);
  return n.trim() !== "" && corpus.includes(n);
};

// Vocab "ca" may hold variants ("suec / sueca", "primer (1r)"): the item counts
// as covered if any variant is found.
const variants = (ca) =>
  ca
    .replace(/\([^)]*\)/g, " ")
    .split("/")
    .map((s) => s.replace(/\b[mf]\b\s*/g, "").trim())
    .filter(Boolean);
const vocabCovered = (v) => variants(v.ca).some(has);

// Phrases: covered if the whole phrase occurs, or every "/"-separated variant's
// first sentence occurs. Templates with "..." are reduced to their fixed part.
// Returns "full", "partial" (some sentence of a multi-sentence exchange occurs)
// or "none".
const phraseCoverage = (p) => {
  const core = p.ca.replace(/\.\.\.|…/g, " ");
  if (has(core)) return "full";
  const sentences = core.split(/(?<=[.!?])\s+/).filter((s) => norm(s).trim());
  const hits = sentences.filter((s) => s.split(" / ").some(has)).length;
  if (sentences.length > 1 && hits === sentences.length) return "full";
  return hits ? "partial" : "none";
};
const MAX_PHRASES = topicFilter ? Infinity : 6;

const hidden = (x) =>
  !showAll &&
  (x.source === "lexic-arquitectura" || x.source === "catala-basic-2" || x.kind === "proper-name");
const keep = (x) =>
  (!topicFilter || x.topic === topicFilter) && (!sourceFilter || x.source === sourceFilter) && !hidden(x);

if (args.includes("--frequency")) {
  // Word list only: the source text is copyrighted, so nothing beyond single words is shown.
  const freq = data.frequency ?? [];
  const missing = freq.filter((f) => !has(f.word)).slice(0, 50);
  console.log(`Top ${missing.length} most frequent words from El Petit Príncep (petit-princep) not found in any lesson:`);
  console.log(missing.map((f) => `${f.word} (${f.count})`).join(", "));
  process.exit(0);
}

const short = { "just-arrived": "JA", "primeres-paraules": "PP", conversem: "CV", "catala-basic-2": "CB", "lexic-arquitectura": "AR" };
const tag = (x) => `${short[x.source] ?? x.source}${x.page ? ":" + x.page : ""}`;

console.log(`Lessons: ${files.length} files in src/content/polish/catalan`);
console.log(`Legend: JA=Just Arrived, PP=Primeres paraules, CV=Conversem, CB=Català Bàsic 2, AR=Lèxic arquitectura (page after colon)`);
if (!showAll) console.log("(CB, AR and proper names hidden; use --all to include them)");

let totV = 0, missV = 0, totP = 0, missP = 0;
for (const t of data.topics) {
  if (topicFilter && t.id !== topicFilter) continue;
  const vs = data.vocab.filter((v) => v.topic === t.id && keep(v));
  const ps = data.phrases.filter((p) => p.topic === t.id && keep(p));
  if (!vs.length && !ps.length) continue;
  // de-duplicate vocab by headword
  const seen = new Set();
  const mv = vs.filter((v) => !vocabCovered(v) && !seen.has(v.ca) && seen.add(v.ca));
  const cov = ps.map(phraseCoverage);
  const mp = ps.filter((_, i) => cov[i] === "none");
  const partial = cov.filter((c) => c === "partial").length;
  const uniqV = new Set(vs.map((v) => v.ca)).size;
  totV += uniqV; missV += mv.length; totP += ps.length; missP += mp.length;
  if (!mv.length && !mp.length) continue;
  console.log(`\n## ${t.id} (${t.title_pl}) — vocab missing ${mv.length}/${uniqV}, phrases missing ${mp.length}/${ps.length}` + (partial ? ` (+${partial} partly covered)` : ""));
  if (mv.length) console.log("  vocab: " + mv.map((v) => v.ca).join(", "));
  for (const p of mp.slice(0, MAX_PHRASES)) console.log(`  - ${p.ca}  [${tag(p)}]`);
  if (mp.length > MAX_PHRASES) console.log(`  … ${mp.length - MAX_PHRASES} more (use --topic ${t.id})`);
}

const gs = data.grammar.filter(keep);
const mg = gs.filter((g) => !(g.detect ?? []).some(has));
console.log(`\n## grammar not mentioned in lessons — ${mg.length}/${gs.length}`);
for (const g of mg) console.log(`  - [${g.topic}] ${g.title}  [${tag(g)}]`);

console.log(`\nTotals: vocab missing ${missV}/${totV}, phrases missing ${missP}/${totP}, grammar missing ${mg.length}/${gs.length}`);
