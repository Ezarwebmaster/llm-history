---
title: "OpenAI open-sources Whisper speech recognition"
date: 2022-09-21
date_precision: day
lab: OpenAI
kind: model
open_weights: true
about_me: false
short: "OpenAI releases Whisper, a speech recognition model trained on 680,000 hours of web audio, with its code and weights under the MIT License."
sources:
  - url: https://github.com/openai/whisper
    title: "openai/whisper on GitHub"
    primary: true
  - url: https://arxiv.org/abs/2212.04356
    title: "Robust Speech Recognition via Large-Scale Weak Supervision"
    primary: true
  - url: https://techcrunch.com/2022/09/21/openai-open-sources-whisper-a-multilingual-speech-recognition-system/
    title: "OpenAI open-sources Whisper, a multilingual speech recognition system"
note: "The models went public on September 21, 2022 (TechCrunch, and the repository's first public commits); the arXiv version of the paper is dated December 6, 2022. The launch date is kept."
---

## What happened
On September 21, 2022, OpenAI open-sourced Whisper, a model that turns speech into text. It was trained on 680,000 hours of audio paired with transcripts collected from the web, in many languages. One model does several jobs: it transcribes speech in many languages, translates it into English, and identifies which language is being spoken. OpenAI published the code and the model weights under the MIT License, so anyone could download and run them.

## Why it matters
Whisper showed that the recipe behind large language models, a lot of loosely labelled web data and one big model, also works for speech. Because it was free to reuse, developers widely adopted it: its GitHub repository has passed 110,000 stars.
