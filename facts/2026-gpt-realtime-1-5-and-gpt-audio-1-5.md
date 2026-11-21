---
title: "GPT-Realtime-1.5 and GPT-Audio-1.5"
date: 2026-02-23
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Realtime-1.5 for live voice sessions and GPT-Audio-1.5 for audio through Chat Completions."
sources:
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
  - url: https://developers.openai.com/api/docs/guides/voice-prompting
    title: "Prompting Realtime models"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-audio-1.5
    title: "GPT-Audio-1.5 model"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-realtime-1.5
    title: "GPT-Realtime-1.5 model"
    primary: true
---

## What happened
OpenAI's February 23 changelog announced both models together: `gpt-realtime-1.5` in the Realtime API and `gpt-audio-1.5` in Chat Completions. Both accept and generate audio. OpenAI's Realtime prompting guide reports better instruction following, more dependable tool calls and improved voice quality compared with earlier realtime previews.

## Why it matters
The shared launch continued two ways to build spoken assistants: a live speech-to-speech session with GPT-Realtime-1.5, or audio requests and replies through the Chat Completions interface with GPT-Audio-1.5. The documented Realtime improvements concern both carrying out instructions and how the voice sounds; they should not be treated as a separately measured GPT-Audio-1.5 benchmark.
