"""Galician voices from Proxecto Nós (https://nos.gal, Apache-2.0).
Runs inside the Docker image from ./Dockerfile.coqui; normally called by generate.sh / say.sh
(see scripts/tts/README.md). Same jobs format and output as synth.py.

  nos:brais   – Coqui VITS checkpoint (proxectonos/Nos_TTS-brais-vits-graphemes)
  nos:celtia  – ONNX export (OpenVoiceOS/proxectonos-celtia-vits-graphemes-onnx)

usage: python synth_nos.py <jobs.json> <out_dir> <voices_cache_dir>
"""
import json, os, re, subprocess, sys, tempfile, time, urllib.request
from concurrent.futures import ThreadPoolExecutor

import numpy as np
import scipy.io.wavfile

jobs_path, out_dir, cache = sys.argv[1:4]
jobs = json.load(open(jobs_path))

MODELS = {
    "brais": ("https://huggingface.co/proxectonos/Nos_TTS-brais-vits-graphemes/resolve/main",
              ["brais.pth", "config.json"]),
    "celtia": ("https://huggingface.co/OpenVoiceOS/proxectonos-celtia-vits-graphemes-onnx/resolve/main",
               ["model.onnx", "config.json"]),
}


def model_dir(name):
    base, files = MODELS[name]
    d = os.path.join(cache, f"gl-{name}")
    os.makedirs(d, exist_ok=True)
    for f in files:
        if not os.path.exists(os.path.join(d, f)):
            print(f"downloading {name}/{f}", flush=True)
            urllib.request.urlretrieve(f"{base}/{f}", os.path.join(d, f))
    return d


# ---------- text: the voices only know Galician letters and basic punctuation ----------

UNITS = ["cero", "un", "dous", "tres", "catro", "cinco", "seis", "sete", "oito", "nove", "dez",
         "once", "doce", "trece", "catorce", "quince", "dezaseis", "dezasete", "dezaoito", "dezanove"]


def number(n):
    if n < 20:
        return UNITS[n]
    tens = {2: "vinte", 3: "trinta", 4: "corenta", 5: "cincuenta", 6: "sesenta",
            7: "setenta", 8: "oitenta", 9: "noventa"}[n // 10]
    return tens if n % 10 == 0 else f"{tens} e {UNITS[n % 10]}"


def spoken(text):
    text = re.sub(r"\(\d{1,2}:\d{2}\)\s*", "", text)  # "(3:30) Son as tres e media." – clock shown, not read
    text = re.sub(r"\b\d{1,2}\b", lambda m: number(int(m.group())), text)
    text = text.replace("–", ",").replace("—", ",").replace("ł", "u").replace("Ł", "U").replace("…", "...")
    text = re.sub(r"\s+,", ",", text)
    text = re.sub(r"([.!?]),", r"\1", text).strip()
    # Without final punctuation, voices tend to cut the last sound short.
    return text if text[-1:] in ".!?…:;" else text + "."


# ---------- engines ----------

class Brais:
    def __init__(self):
        from TTS.utils.synthesizer import Synthesizer
        d = model_dir("brais")
        self.s = Synthesizer(tts_checkpoint=f"{d}/brais.pth", tts_config_path=f"{d}/config.json", use_cuda=False)

    def wav(self, text, path):
        self.s.save_wav(self.s.tts(text), path)


class Celtia:
    """Minimal VITS ONNX inference (tokenizer as in coqui-tts, graphemes + blanks)."""

    def __init__(self):
        import onnxruntime as ort
        d = model_dir("celtia")
        cfg = json.load(open(f"{d}/config.json"))
        ch = cfg["characters"]
        vocab = [ch["pad"], *ch["punctuations"], *ch["characters"], "<BLNK>"]
        self.ids = {c: i for i, c in enumerate(vocab)}
        self.blank = self.ids["<BLNK>"]
        self.rate = cfg["audio"]["sample_rate"]
        self.sess = ort.InferenceSession(f"{d}/model.onnx", providers=["CPUExecutionProvider"])

    def wav(self, text, path):
        t = text.lower().replace(";", ",").replace("-", " ").replace(":", ",")
        t = re.sub(r"[<>()\[\]\"]+", "", t)
        t = re.sub(r"\s+", " ", t).strip()
        tokens = [self.ids[c] for c in t if c in self.ids]
        x = [self.blank] * (len(tokens) * 2 + 1)
        x[1::2] = tokens
        x = np.asarray(x, dtype=np.int64)[None, :]
        audio = self.sess.run(["output"], {
            "input": x,
            "input_lengths": np.array([x.shape[1]], dtype=np.int64),
            "scales": np.array([0.667, 1.0, 1.0], dtype=np.float32),
        })[0][0][0]
        audio = audio * (32767 / max(0.01, np.max(np.abs(audio))))
        scipy.io.wavfile.write(path, self.rate, audio.astype(np.int16))


ENGINES = {"nos:brais": Brais, "nos:celtia": Celtia}


def to_mp3(wav_path, mp3_path):
    tmp = mp3_path + ".part.mp3"
    subprocess.run(
        ["ffmpeg", "-loglevel", "error", "-y", "-i", wav_path,
         "-af", "adelay=80:all=1,apad=pad_dur=0.35", "-ac", "1", "-b:a", "64k", tmp],
        check=True,
    )
    os.replace(tmp, mp3_path)


by_voice = {}
for j in jobs:
    by_voice.setdefault(j["voice"], []).append(j)

encoder = ThreadPoolExecutor(max_workers=4)
pending = []
start = time.time()
with tempfile.TemporaryDirectory() as tmp:
    for voice_id, items in by_voice.items():
        engine = ENGINES[voice_id]()
        for n, j in enumerate(items, 1):
            wav_path = os.path.join(tmp, j["hash"] + ".wav")
            engine.wav(spoken(j["text"]), wav_path)
            pending.append(encoder.submit(to_mp3, wav_path, os.path.join(out_dir, j["hash"] + ".mp3")))
            if n % 100 == 0:
                print(f"{voice_id}: {n}/{len(items)} ({time.time() - start:.0f}s)", flush=True)
        print(f"{voice_id}: {len(items)} done", flush=True)
    for p in pending:
        p.result()
print(f"generated {len(jobs)} files in {time.time() - start:.0f}s")
