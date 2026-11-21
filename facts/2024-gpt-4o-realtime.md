---
title: "GPT-4o Realtime"
date: 2024-10-01
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI makes GPT-4o Realtime available to paid developers through the public beta of its Realtime API."
sources:
  - url: https://openai.com/index/introducing-the-realtime-api/
    title: "Introducing the Realtime API"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-4o-realtime-preview
    title: "GPT-4o Realtime API model"
    primary: true
  - url: https://openai.com/index/hello-gpt-4o/
    title: "Hello GPT-4o (context for the original release)"
    primary: false
  - url: https://openai.com/index/introducing-gpt-realtime/
    title: "Introducing gpt-realtime and Realtime API updates for production voice agents"
    primary: true
---

## What happened
On October 1, 2024, OpenAI launched its Realtime API in public beta for paid developers with `gpt-4o-realtime-preview-2024-10-01`. The original GPT-4o had demonstrated native audio in May, when its public API exposed text and image inputs and text output. The October preview gave developers a persistent connection that streamed speech in both directions and could handle interruptions automatically.

## Why it matters
By processing audio directly, the preview reduced delays and preserved cues such as emphasis that a separate transcription step could lose. Developers could build spoken tutoring or support apps and let the model trigger actions during a call. On August 28, 2025, OpenAI made the API generally available alongside the separate `gpt-realtime` model, which OpenAI reported was better at following instructions, calling tools and producing natural speech.
