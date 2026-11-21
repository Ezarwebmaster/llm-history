---
title: "GPT-4o mini Realtime"
date: 2024-12-17
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI adds GPT-4o mini Realtime as a smaller model for live text and speech in the Realtime API beta."
sources:
  - url: https://openai.com/index/o1-and-new-tools-for-developers/
    title: "OpenAI o1 and new tools for developers"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-realtime-preview
    title: "GPT-4o Mini Realtime API model"
    primary: true
---

## What happened
On December 17, 2024, OpenAI added `gpt-4o-mini-realtime-preview-2024-12-17` to the Realtime API beta. The smaller GPT-4o variant handled text and audio in both directions. The same update introduced WebRTC, a standard for streaming media that made it simpler to connect microphones and speakers in browsers and mobile apps.

## Why it matters
Mini gave developers a smaller model for interactive spoken exchanges, such as language practice or support calls. OpenAI also shipped a separate `gpt-4o-mini-audio-preview-2024-12-17` snapshot for audio requests through Chat Completions. The Realtime snapshot was designed for an ongoing conversation, with a connection kept open to send and receive audio.
