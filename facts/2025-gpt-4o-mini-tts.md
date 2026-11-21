---
title: "GPT-4o mini TTS"
date: 2025-03-20
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases a text-to-speech model that accepts instructions for how to deliver the spoken audio."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-tts
    title: "GPT-4o mini TTS model"
    primary: true
  - url: https://developers.openai.com/api/docs/guides/text-to-speech
    title: "OpenAI API text-to-speech guide"
    primary: true
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
---

## What happened
OpenAI added GPT-4o mini TTS to the Audio API on March 20, alongside its two GPT-4o Transcribe models. The `gpt-4o-mini-tts` model took written text and generated speech through `/v1/audio/speech`. Developers could pick a preset voice and supply plain-language instructions for the delivery, including its speed, tone, or intonation.

## Why it matters
An app could keep the words and voice fixed while changing how a line was read. The same script could be delivered slowly and calmly for a lesson or with more energy for a story.
