---
title: "GPT-Transcribe"
date: 2026-07-28
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Transcribe for recorded audio and final transcripts of committed Realtime turns."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-transcribe
    title: "GPT-Transcribe model"
    primary: true
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
  - url: https://developers.openai.com/cookbook/examples/migrating_from_whisper_to_gpt_transcribe
    title: "Migrate from Whisper to GPT-Transcribe and GPT-Live-Transcribe"
    primary: true
---

## What happened
OpenAI released GPT-Transcribe on July 28, 2026 for file transcription and final transcripts of committed turns in Realtime sessions. It supports contextual prompts, keyword hints and multiple expected input languages. File requests use the existing audio transcription endpoint. The launch also introduced the separate GPT-Live-Transcribe model for low-latency streaming speech.

## Why it matters
Streaming text from an uploaded recording is different from transcribing audio that is still arriving. GPT-Transcribe covers recordings and completed turns; continuous live updates have a separate model. It is a new model identifier, distinct from both Whisper and GPT-4o Transcribe, and migration requires checking supported outputs rather than simply changing the name.
