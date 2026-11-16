"""Generate MP3s for a jobs file with Piper voices. Runs inside the Docker image from
./Dockerfile; normally called by generate.sh / say.sh (see scripts/tts/README.md).

jobs.json: [{"hash": ..., "voice": "<voice id>", "text": ...}], written by plan.mts.
Writes <out_dir>/<hash>.mp3; models are downloaded into <voices_cache_dir>.

usage: python synth.py <jobs.json> <out_dir> <voices_cache_dir>
"""
import json, os, subprocess, sys, tempfile, time, urllib.parse, urllib.request, wave
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

from piper import PiperVoice, SynthesisConfig

jobs_path, out_dir, cache = sys.argv[1:4]
jobs = json.load(open(jobs_path))
os.makedirs(cache, exist_ok=True)
HF = "https://huggingface.co/rhasspy/piper-voices/resolve/main"


def piper_model(voice_id):
    """de_DE-thorsten-high -> local .onnx path (downloaded once)."""
    path = os.path.join(cache, voice_id + ".onnx")
    if not os.path.exists(path):
        code, name, quality = voice_id.split("-", 2)
        base = f"{HF}/{code.split('_')[0]}/{code}/{urllib.parse.quote(name)}/{quality}/{urllib.parse.quote(voice_id)}.onnx"
        for suffix in ("", ".json"):
            print(f"downloading {voice_id}{suffix}", flush=True)
            urllib.request.urlretrieve(base + suffix, path + suffix)
    return path


def spoken(text):
    """Without final punctuation, voices tend to cut the last sound short."""
    return text if text.rstrip()[-1:] in ".!?…:;" else text + "."


def to_mp3(wav_path, mp3_path):
    tmp = mp3_path + ".part.mp3"
    subprocess.run(
        # Pad with silence: voices stop right at the last sound and browsers clip
        # the first/last few ms of playback, which swallows word endings.
        ["ffmpeg", "-loglevel", "error", "-y", "-i", wav_path,
         "-af", "adelay=80:all=1,apad=pad_dur=0.35", "-ac", "1", "-b:a", "64k", tmp],
        check=True,
    )
    os.replace(tmp, mp3_path)


by_voice = defaultdict(list)
for j in jobs:
    by_voice[j["voice"]].append(j)

encoder = ThreadPoolExecutor(max_workers=4)
pending = []
start = time.time()
with tempfile.TemporaryDirectory() as tmp:
    for voice_id, items in by_voice.items():
        # "model#2?noise=0.333&noise_w=0.4": speaker 2 of a multi-speaker model,
        # with less sampling randomness (cleaner, more consistent takes for weak voices).
        voice_spec, _, query = voice_id.partition("?")
        model_id, _, speaker = voice_spec.partition("#")
        opts = {k: float(v[0]) for k, v in urllib.parse.parse_qs(query).items()}
        voice = PiperVoice.load(piper_model(model_id))
        config = SynthesisConfig(
            speaker_id=int(speaker) if speaker else None,
            noise_scale=opts.get("noise"),
            noise_w_scale=opts.get("noise_w"),
        )
        for n, j in enumerate(items, 1):
            wav_path = os.path.join(tmp, j["hash"] + ".wav")
            with wave.open(wav_path, "wb") as w:
                voice.synthesize_wav(spoken(j["text"]), w, syn_config=config)
            pending.append(encoder.submit(to_mp3, wav_path, os.path.join(out_dir, j["hash"] + ".mp3")))
            if n % 200 == 0:
                print(f"{voice_id}: {n}/{len(items)}", flush=True)
        print(f"{voice_id}: {len(items)} done", flush=True)
    for p in pending:
        p.result()
print(f"generated {len(jobs)} files in {time.time() - start:.0f}s")
