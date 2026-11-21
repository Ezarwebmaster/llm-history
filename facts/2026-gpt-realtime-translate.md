---
title: "GPT-Realtime-Translate"
date: 2026-05-07
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Realtime-Translate, a model that streams translated speech while the speaker is still talking."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-realtime-translate
    title: "GPT-Realtime-Translate model"
    primary: true
  - url: https://developers.openai.com/cookbook/examples/voice_solutions/realtime_translation_guide
    title: "Build Live Translation Apps with gpt-realtime-translate"
    primary: true
  - url: https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/
    title: "Advancing voice intelligence with new models in the API"
    primary: false
---

## What happened
OpenAI released GPT-Realtime-Translate alongside GPT-Realtime-2 and GPT-Realtime-Whisper. Through a dedicated Realtime API endpoint, it detects the source language and streams translated audio and transcript updates while receiving speech. At launch, OpenAI listed more than 70 input languages and 13 output languages.

## Why it matters
A broadcast or call can deliver translated speech before the speaker finishes. The model is designed to interpret what people say, including questions and instructions. GPT-Realtime-2.1 is designed to participate in a conversation, where it can answer questions and call tools.
