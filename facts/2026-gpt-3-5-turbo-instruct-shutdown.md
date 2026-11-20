---
title: "GPT-3.5 Turbo Instruct leaves the Completions API"
date: 2026-09-28
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI shuts down GPT-3.5 Turbo Instruct alongside two legacy completion models."
sources:
  - url: https://developers.openai.com/api/docs/guides/completions
    title: "Completions API"
    primary: true
---

## What happened
OpenAI's documentation says gpt-3.5-turbo-instruct, babbage-002 and davinci-002 were shut down on September 28, 2026. OpenAI had announced Instruct as an InstructGPT-style replacement for older completion models, trained similarly to text-davinci-003 and intended for the Completions API.

## Why it matters
Instruct accepted a freeform text prompt in the legacy Completions API. GPT-3.5 Turbo chat used the separate Chat Completions interface with a list of messages; the related names did not make the models interchangeable. The shutdown ended access to the Instruct model, rather than marking its original release.
