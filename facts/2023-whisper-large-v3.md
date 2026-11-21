---
title: "Whisper large-v3"
date: 2023-11-06
date_precision: day
lab: OpenAI
kind: model
open_weights: true
about_me: false
short: "OpenAI releases Whisper large-v3 weights with improved multilingual speech recognition."
sources:
  - url: https://github.com/openai/whisper/discussions/1762
    title: "large-v3 release"
    primary: true
  - url: https://huggingface.co/openai/whisper-large-v3
    title: "Whisper large-v3 model card"
    primary: true
---

## What happened
OpenAI released the large-v3 checkpoint for download. It trained on one million hours of weakly labeled audio and four million hours labeled automatically by large-v2. OpenAI reported 10–20% fewer recognition errors than large-v2 across a wide variety of languages. The model also added a Cantonese language token.

## Why it matters
The release improved multilingual recognition in a model people could run themselves. The reported accuracy gains compare downloadable checkpoints; this event was not a new launch of the hosted Whisper API.
