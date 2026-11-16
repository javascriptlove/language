# Pre-generated speech (TTS)

Lessons read phrases aloud. For every course listed in `voices.json` the phrases are
pre-generated as MP3 files in `public/audio/<ttsLang>/`. The browser plays a recording when
one exists and falls back to the browser's own speech (Web Speech API) when it doesn't, e.g.
for text the learner types.

Requirements: Node 22+ and Docker. All speech synthesis runs in Docker, so nothing else needs
to be installed. Models are downloaded on first use into `.tts-cache/voices/` (gitignored).

## Common tasks

```bash
# (Re)generate a course after editing lessons: only new or changed phrases are synthesised,
# and recordings no longer used are deleted.
scripts/tts/generate.sh it-IT

# Try out one phrase (writes .tts-cache/say/say.mp3)
scripts/tts/say.sh it-IT m "Ciao! Mi chiamo Marco." && afplay .tts-cache/say/say.mp3

# Same, saved to a file you name
scripts/tts/say.sh gl-ES f "Ata mañá, Antía!" antia.mp3

# Try any voice, not only the course's (Piper id, or nos:brais / nos:celtia)
scripts/tts/say.sh it-IT "it_IT-paola-medium" "Buongiorno!"

# Re-roll one bad take on the site (voices give a slightly different take every run)
scripts/tts/say.sh it-IT m "Ciao! Mi chiamo Marco." --replace
```

`say.sh` voice argument: `n` = narration (vocabulary, examples, exercises), `m` = male
dialogue speaker, `f` = female dialogue speaker, as mapped in `voices.json`, or a full voice id.

## Changing a voice

Edit `voices.json`, then run `generate.sh <ttsLang>`. The voice id is part of every file name
(hash), so only the lines of the changed slot are regenerated. Also update the voice's credit
(dataset and licence, from the voice's MODEL_CARD) in `VOICE_SOURCES` in
`src/components/LessonBody.tsx`; it is shown at the bottom of every lesson.

Piper voice id syntax (list: https://github.com/OHF-Voice/piper1-gpl/blob/main/docs/VOICES.md):

| Example | Meaning |
| --- | --- |
| `de_DE-thorsten-high` | model `de_DE-thorsten`, quality `high` |
| `es_ES-sharvard-medium#1` | speaker 1 of a multi-speaker model |
| `it_IT-riccardo-x_low?noise=0.333&noise_w=0.4` | calmer sampling: cleaner, more consistent takes for weak voices |

Galician (`"engine": "nos"`) uses the Proxecto Nós voices instead of Piper: `nos:celtia`
(female) and `nos:brais` (male). They are licensed Apache 2.0 and must be credited; the
credit is shown at the bottom of each Galician lesson (`VOICE_SOURCES` in
`src/components/LessonBody.tsx`). Their alphabet has no digits, so `synth_nos.py` spells
numbers out and drops clock labels like "(3:30)" before synthesis. The lesson text itself
is unchanged.

## Files

| File | What it does |
| --- | --- |
| `generate.sh <ttsLang>` | Full pipeline for one course: plan → synthesise in Docker → manifest. |
| `say.sh <ttsLang> <voice> "<text>" [out.mp3 \| --replace]` | Synthesises a single phrase. |
| `voices.json` | Per course: lesson folder, engine (`piper` / `nos`), and the voice for each slot. |
| `plan.mts plan <ttsLang>` | Collects every spoken phrase from the lessons and writes the missing ones to `.tts-cache/jobs-<lang>.json`. |
| `plan.mts manifest <ttsLang>` | Deletes unused MP3s and writes `public/audio/<lang>/manifest.json`, which the browser reads. |
| `synth.py <jobs> <out_dir> <cache>` | Piper synthesiser (runs inside the `Dockerfile` image). |
| `synth_nos.py <jobs> <out_dir> <cache>` | Proxecto Nós synthesiser for Galician (runs inside the `Dockerfile.coqui` image). |
| `Dockerfile` | Image `language-tts`: Python, ffmpeg, Piper. |
| `Dockerfile.coqui` | Image `language-tts-coqui`: Python, ffmpeg, CPU PyTorch, Coqui TTS, ONNX Runtime. |

`plan.mts` is run with `node --experimental-strip-types`; `generate.sh` and `say.sh` call it
and build the Docker images for you.

## How the site finds a recording

The file name is `cyrb53("<voiceId>|<normalised text>")`, 14 hex characters. The helpers are in
`src/lib/tts-audio.ts`, shared by the generator and the browser. Which phrases a lesson speaks
(`collectSpokenPhrases`) mirrors the components' speak calls, so if a component starts
reading something new, add it there too.

Output format: MP3, 64 kbps mono, with 80 ms of silence before and 350 ms after each phrase
(otherwise browsers clip word endings). The player skips its own pause between lines after a
recording.
