---
title: "TTS-1 and TTS-1 HD"
date: 2023-11-06
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI announces two text-to-speech API models, prioritizing low latency in TTS-1 and speech quality in TTS-1 HD."
sources:
  - url: https://openai.com/index/new-models-and-developer-products-announced-at-devday/
    title: "New models and developer products announced at DevDay"
    primary: false
  - url: https://developers.openai.com/api/docs/guides/text-to-speech
    title: "Text to speech"
    primary: false
  - url: https://developers.openai.com/api/docs/models/tts-1
    title: "TTS-1 model"
    primary: true
  - url: https://developers.openai.com/api/docs/models/tts-1-hd
    title: "TTS-1 HD model"
    primary: true
---

## What happened
At DevDay, OpenAI announced API speech generation from text with six preset voices and two variants: `tts-1` and `tts-1-hd`. Its announcement said developers could use them that day, with features beginning to roll out at 1 p.m. Pacific. TTS-1 prioritized real-time use; TTS-1 HD prioritized quality. The API guide describes the trade-off as lower latency but lower quality for TTS-1.

## Why it matters
These models turned written words into spoken audio. Whisper worked in the opposite direction, recognizing speech as text. This let developers combine transcription, a text assistant and speech synthesis into a voice application. The later GPT-4o mini TTS added plain-language instructions for delivery, such as tone and intonation, beyond selecting a voice.
