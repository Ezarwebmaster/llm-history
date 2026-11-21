---
title: "GPT-4o Audio"
date: 2024-10-17
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI makes GPT-4o audio inputs and outputs available through the Chat Completions API."
sources:
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog: October 17, 2024"
    primary: false
  - url: https://developers.openai.com/api/docs/models/gpt-4o-audio-preview
    title: "GPT-4o Audio model"
    primary: true
  - url: https://openai.com/index/introducing-the-realtime-api/
    title: "Introducing the Realtime API, October 17 update"
    primary: false
---

## What happened
OpenAI's October 17, 2024 update states that audio input and output are now available in Chat Completions. The model is named `gpt-4o-audio-preview`; its earliest documented snapshot is `gpt-4o-audio-preview-2024-10-01`. That snapshot's date is distinct from the documented public availability date. Developers could submit text or audio and request text, audio, or both in response.

## Why it matters
This put voice processing into a single API request for applications that could tolerate more delay. The Realtime preview, publicly available from October 1, instead maintained a connection for speech streaming in both directions and automatic interruption handling. The Audio preview served the request-and-response interface rather than that live conversation interface.
