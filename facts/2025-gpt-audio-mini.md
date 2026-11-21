---
title: "GPT-Audio mini"
date: 2025-10-06
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-Audio mini as a lower-cost speech-to-speech model for Chat Completions."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-audio-mini
    title: "GPT-Audio mini model"
    primary: true
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog, October 6, 2025"
    primary: false
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-audio-preview
    title: "GPT-4o Mini Audio preview model"
    primary: false
  - url: https://developers.openai.com/blog/updates-audio-models
    title: "Updates for developers building with voice"
    primary: false
---

## What happened
OpenAI released `gpt-audio-mini` at DevDay on October 6 as a more economical version of GPT-Audio. It accepted and returned audio in Chat Completions, continuing the interface already used by the GPT-4o mini Audio preview.

## Why it matters
The smaller model gave developers a lower-cost option for apps that could handle spoken requests and replies one turn at a time. GPT-Realtime mini, released at the same event, served live exchanges through the Realtime API, with audio flowing both ways and support for interruptions.
