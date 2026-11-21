---
title: "GPT-4o Transcribe and GPT-4o mini Transcribe"
date: 2025-03-20
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI introduces two GPT-4o speech-to-text models in its Audio API."
sources:
  - url: https://openai.com/index/introducing-our-next-generation-audio-models/
    title: "Introducing next-generation audio models in the API"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-4o-transcribe
    title: "GPT-4o Transcribe model"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-transcribe
    title: "GPT-4o mini Transcribe model"
    primary: true
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI API deprecations"
    primary: false
---

## What happened
OpenAI introduced `gpt-4o-transcribe` and `gpt-4o-mini-transcribe` together for turning speech into written text, available through its Audio API. OpenAI reported that the models improved recognition over its original Whisper models, including in noisy conditions and with accents. Mini offered a smaller, faster option; the full model prioritized accuracy.

## Why it matters
Developers gained API transcription choices with different speed and accuracy trade-offs. Whisper's published code and weights can be run independently, while these GPT-4o models are offered through OpenAI's API. Whisper also supports speech translation into English; the new models focus on transcription. OpenAI deprecated both API models on August 26, 2026, and scheduled their shutdown for February 26, 2027.
