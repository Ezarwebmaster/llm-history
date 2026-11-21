---
title: "GPT-Audio"
date: 2025-08-28
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "GPT-Audio brings generally available audio input and output to OpenAI’s Chat Completions API."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-audio
    title: "GPT-Audio model"
    primary: true
  - url: https://github.com/spullara/models
    title: "OpenAI API model appearance log"
    primary: false
  - url: https://developers.openai.com/api/docs/models/gpt-4o-audio-preview
    title: "GPT-4o Audio preview model"
    primary: false
  - url: https://openai.com/index/introducing-gpt-realtime/
    title: "GPT-Realtime launch announcement"
    primary: false
---

## What happened
OpenAI documents `gpt-audio` as its first generally available audio model for Chat Completions, with the snapshot `gpt-audio-2025-08-28`. The API model log records both identifiers appearing on August 28. The earlier GPT-4o Audio model already supported audio in and out through the same API as a preview.

## Why it matters
An app using Chat Completions could send a recording in a request and ask for a spoken reply. OpenAI also introduced GPT-Realtime that day for live, low-delay voice interactions through a dedicated Realtime API session.
