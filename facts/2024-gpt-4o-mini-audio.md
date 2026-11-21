---
title: "GPT-4o mini Audio"
date: 2024-12-17
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI adds GPT-4o mini audio input and output to Chat Completions alongside its separate Realtime preview."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-audio-preview
    title: "GPT-4o Mini Audio model"
    primary: true
  - url: https://openai.com/index/o1-and-new-tools-for-developers/
    title: "OpenAI o1 and new tools for developers"
    primary: false
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
---

## What happened
OpenAI released `gpt-4o-mini-audio-preview-2024-12-17` through Chat Completions, with `gpt-4o-mini-audio-preview` as its model alias. The documentation describes a smaller model that accepts and produces audio through the REST API, as well as handling text. The developer announcement names this snapshot separately from `gpt-4o-mini-realtime-preview-2024-12-17`.

## Why it matters
Developers gained a smaller audio model within the familiar Chat Completions interface. Its request-and-response design differed from Realtime's ongoing low-latency session. The same announcement introduced WebRTC for Realtime connections in browsers and mobile apps; that live media connection belonged to the Realtime interface, not the Audio model's Chat Completions endpoint.
