---
title: "GPT-Live-Transcribe"
date: 2026-07-28
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Live-Transcribe to produce text updates as speech arrives in the Realtime API."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-live-transcribe
    title: "GPT-Live-Transcribe model"
    primary: true
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
  - url: https://developers.openai.com/cookbook/examples/migrating_from_whisper_to_gpt_transcribe
    title: "Migrate from Whisper to GPT-Transcribe and GPT-Live-Transcribe"
    primary: false
---

## What happened
OpenAI released GPT-Live-Transcribe in the Realtime API on July 28, 2026, alongside GPT-Transcribe. GPT-Live-Transcribe turns a continuous audio stream into text. Apps can adjust how quickly text appears and supply background context, expected terms, or likely languages.

## Why it matters
Live captions can appear while someone speaks. OpenAI recommends GPT-Live-Transcribe for apps moving from GPT-Realtime-Whisper and GPT-Transcribe for uploaded recordings or finished turns in a live session. Whisper large-v2 was a separate downloadable model and later powered the hosted Whisper file API.
