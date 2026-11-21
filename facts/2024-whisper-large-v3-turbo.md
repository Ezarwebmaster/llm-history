---
title: "Whisper large-v3-turbo"
date: 2024-09-30
date_precision: day
lab: OpenAI
kind: model
open_weights: true
about_me: false
short: "OpenAI makes Whisper large-v3-turbo available as a faster downloadable speech recognition model."
sources:
  - url: https://github.com/openai/whisper
    title: "Whisper repository and speed comparison"
    primary: false
  - url: https://github.com/openai/whisper/releases/tag/v20240930
    title: "Whisper package release v20240930"
    primary: true
  - url: https://github.com/openai/whisper/discussions/2363
    title: "turbo model release"
    primary: true
  - url: https://huggingface.co/openai/whisper-large-v3-turbo
    title: "Whisper large-v3-turbo model card"
    primary: true
note: "The package release is dated September 30, 2024; the repository announcement followed on October 1. This entry dates availability, rather than the announcement."
---

## What happened
The September 30 Whisper package made turbo available; OpenAI announced it the following day. It reduces large-v3's decoder, the part that produces text, from 32 layers to four and fine-tunes it on multilingual transcription data. OpenAI reports much faster transcription with some accuracy loss, particularly in languages such as Thai and Cantonese. Translation data was excluded from this additional training.

## Why it matters
Users gained a faster checkpoint for local transcription, with an accuracy trade-off rather than a universal upgrade over large-v3. The repository reports roughly eight times the large model’s speed on English speech with an A100 GPU; hardware and language affect results. Turbo is not trained for translation. This downloadable model is separate from the hosted Whisper API and the later GPT-Realtime-Whisper streaming service.
