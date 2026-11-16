# Image `language-tts` for synth.py (Piper voices). Built automatically by generate.sh / say.sh.
FROM python:3.12-slim
RUN apt-get update -qq && apt-get install -y -qq --no-install-recommends ffmpeg && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir -q piper-tts==1.8.0 onnxruntime numpy scipy
