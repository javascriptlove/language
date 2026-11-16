#!/usr/bin/env bash
# Generate one phrase with the same voices/settings as generate.sh.
#
#   scripts/tts/say.sh <ttsLang> <voice> "<text>" [out.mp3]
#   scripts/tts/say.sh <ttsLang> <voice> "<text>" --replace
#
# <voice>: a slot from voices.json (n = narration, m = male, f = female)
#          or any voice id, e.g. "it_IT-riccardo-x_low?noise=0.333&noise_w=0.4", "nos:brais".
# out.mp3 defaults to .tts-cache/say/say.mp3.
# --replace overwrites the course's own recording of that phrase (public/audio/<lang>/<hash>.mp3),
#   e.g. to re-roll a bad take; only for slot voices, so the hash matches what the site plays.
#
# Examples:
#   scripts/tts/say.sh it-IT m "Ciao! Mi chiamo Marco." && afplay .tts-cache/say/say.mp3
#   scripts/tts/say.sh gl-ES f "Ata mañá, Antía!" --replace
set -euo pipefail
lang="${1:?usage: say.sh <ttsLang> <n|m|f|voiceId> \"text\" [out.mp3 | --replace]}"
voice="${2:?missing voice}"
text="${3:?missing text}"
out="${4:-.tts-cache/say/say.mp3}"
root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$root"
mkdir -p .tts-cache/say

# Resolve the slot, hash the phrase and write a one-job jobs file.
read -r engine hash < <(LANG_="$lang" VOICE="$voice" TEXT="$text" node --experimental-strip-types --no-warnings --input-type=module -e '
  import { readFileSync, writeFileSync } from "node:fs";
  const { audioHash, normalizeText } = await import(process.cwd() + "/src/lib/tts-audio.ts");
  const cfg = JSON.parse(readFileSync("scripts/tts/voices.json", "utf8"))[process.env.LANG_];
  if (!cfg) { console.error("unknown language: " + process.env.LANG_); process.exit(1); }
  const voice = cfg.voices[process.env.VOICE] ?? process.env.VOICE;
  const text = normalizeText(process.env.TEXT);
  const hash = audioHash(voice, text);
  writeFileSync(".tts-cache/say/job.json", JSON.stringify([{ hash, voice, text }]));
  console.error("voice: " + voice);
  console.log(cfg.engine, hash);
')

if [ "$engine" = "nos" ]; then
  image=language-tts-coqui; dockerfile=scripts/tts/Dockerfile.coqui; script=scripts/tts/synth_nos.py
else
  image=language-tts; dockerfile=scripts/tts/Dockerfile; script=scripts/tts/synth.py
fi
docker build -q -t "$image" -f "$dockerfile" scripts/tts >/dev/null
docker run --rm -v "$root":/w -w /w "$image" \
  python -I "$script" .tts-cache/say/job.json .tts-cache/say .tts-cache/voices \
  2>&1 | grep -v "not found in the vocabulary\|Discarding\|^ > " || true

if [ "$out" = "--replace" ]; then
  case "$voice" in n|m|f) ;; *) echo "--replace needs a slot voice (n, m or f)" >&2; exit 1 ;; esac
  dest="public/audio/$lang/$hash.mp3"
  [ -f "$dest" ] || echo "note: $dest wasn't in the course audio; run generate.sh $lang to update the manifest" >&2
else
  dest="$out"
  mkdir -p "$(dirname "$dest")"
fi
mv ".tts-cache/say/$hash.mp3" "$dest"
echo "$dest"
