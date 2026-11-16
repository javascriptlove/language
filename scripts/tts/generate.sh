#!/usr/bin/env bash
# Pre-generate speech audio for one course (see scripts/tts/README.md).
#
#   scripts/tts/generate.sh <ttsLang>        e.g. scripts/tts/generate.sh de-DE
#
# Languages and voices: scripts/tts/voices.json. Only phrases without a recording are
# synthesised (in Docker); recordings no longer used by any lesson are deleted, and
# public/audio/<ttsLang>/manifest.json is rewritten.
set -euo pipefail
lang="${1:?usage: generate.sh <ttsLang>}"
root="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$root"

node --experimental-strip-types --no-warnings scripts/tts/plan.mts plan "$lang"
engine="$(node -e "console.log(require('./scripts/tts/voices.json')['$lang'].engine)")"
if [ "$(node -e "console.log(require('./.tts-cache/jobs-$lang.json').length)")" != "0" ]; then
  if [ "$engine" = "nos" ]; then  # Galician: Proxecto Nós voices (Coqui / ONNX)
    image=language-tts-coqui; dockerfile=scripts/tts/Dockerfile.coqui; script=scripts/tts/synth_nos.py
  else
    image=language-tts; dockerfile=scripts/tts/Dockerfile; script=scripts/tts/synth.py
  fi
  docker build -q -t "$image" -f "$dockerfile" scripts/tts >/dev/null
  docker run --rm -v "$root":/w -w /w "$image" \
    python -I "$script" ".tts-cache/jobs-$lang.json" "public/audio/$lang" .tts-cache/voices
fi
node --experimental-strip-types --no-warnings scripts/tts/plan.mts manifest "$lang"
