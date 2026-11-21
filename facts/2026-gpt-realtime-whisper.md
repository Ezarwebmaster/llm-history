---
title: "GPT-Realtime-Whisper"
date: 2026-05-07
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Realtime-Whisper for low-latency transcription of live speech in the Realtime API."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-realtime-whisper
    title: "GPT-Realtime-Whisper model"
    primary: true
  - url: https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api/
    title: "Advancing voice intelligence with new models in the API"
    primary: false
  - url: https://developers.openai.com/api/reference/resources/realtime/client-events
    title: "Realtime client events"
    primary: true
  - url: https://developers.openai.com/cookbook/examples/migrating_from_whisper_to_gpt_transcribe
    title: "Migrate from Whisper to GPT-Transcribe and GPT-Live-Transcribe"
    primary: false
---

## What happened
OpenAI made GPT-Realtime-Whisper available in the Realtime API on May 7, 2026. It produces text updates while someone is still speaking, supporting live captions and notes. Developers can trade some speed for transcription accuracy by adjusting the delay before text appears.

## Why it matters
A live transcript can serve an application before the speaker finishes. This is a new streaming transcription model, distinct from the original Whisper and the earlier GPT-4o Transcribe models; the shared Whisper name does not make their interfaces interchangeable. OpenAI later documented GPT-Live-Transcribe as the migration path for continuous live captions.
