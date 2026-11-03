---
title: "Gemini 3.8 Flash"
replaces: 2026-gemini-3-8-flash
date: 2026-09-02
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 3.8 Flash, an agentic workhorse model optimized for long-horizon software engineering and enterprise workflows."
specs:
  context: "1M input, 64k output"
sources:
  - url: https://deepmind.google/models/model-cards/gemini-3-8-flash/
    title: "Gemini 3.8 Flash - Model Card"
    primary: true
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
    title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber"
    primary: true
note: "The model card says 3.8 Flash continues to support the adjustable effort levels of 3.7 Flash, so Google did not add them with this model; the original wording was corrected."
---

## What happened
On September 2, 2026, Google introduced Gemini 3.8 Flash, an update to Gemini 3.7 Flash with gains in software engineering and agentic knowledge workflows, alongside Gemini 3.8 Flash Cyber, a cybersecurity variant for trusted defenders in Google's Fairwind Program. Google's model card lists text, images, audio and video as inputs, with a context window of up to 1 million tokens and up to 64,000 output tokens. The card says the model continues to support adjustable effort levels that trade quality against cost and latency; Google's launch post says developers can use lower effort levels to cut token use. Google's evaluation table lists 73.7% on DeepSWE v1.1 and 61.4% on Vals Finance Agent v2.

## Why it matters
Google says 3.8 Flash works harder on hard tasks, taking extra reasoning steps and calling tools repeatedly, and that 3.7 Flash stays supported for workloads where speed matters most.
