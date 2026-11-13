---
title: "Kyutai Pocket TTS v4.0 (1.9M–18.2M)"
date: 2026-10-20
date_precision: day
lab: "Kyutai"
kind: model
open_weights: true
about_me: false
short: "Kyutai releases miniaturized Pocket TTS models from 18.2M down to 1.9M parameters that perform zero-shot voice cloning on a single CPU thread."
specs:
  parameters: "1.9M, 6.9M and 18.2M"
sources:
  - url: https://kyutai.org/blog/2026-10-20-pocket-tts-small/
    title: "The tiny TTS was actually 10x too big (Kyutai)"
    primary: true
  - url: https://huggingface.co/kyutai/pocket-tts
    title: "kyutai/pocket-tts (Hugging Face)"
    primary: true
---

## What happened
On October 20, 2026, French open-science lab Kyutai released Pocket TTS v4.0.0, scaling down its ~100-million-parameter text-to-speech model into three compact English sizes: 18.2M, 6.9M, and an experimental 1.9M-parameter model, each paired with a reward-tuned ("REFL") variant. Each pairs a flow language model (a generative model that maps random noise into speech representations) with a lightweight audio decoder outputting 24 kHz mono audio. Kyutai reports the 1.9M model runs up to 25 times faster than real time on a single CPU thread while retaining zero-shot voice cloning from short reference clips. Weights are released on Hugging Face under CC-BY-4.0 with prohibited-use terms, and runtime code is MIT-licensed.

## Why it matters
Shrinking neural speech synthesis and voice cloning below 2 million parameters lets natural spoken interfaces run privately on ordinary CPUs without dedicated AI hardware.
