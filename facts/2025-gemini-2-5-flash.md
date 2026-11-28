---
title: "Gemini 2.5 Flash"
date: 2025-04-17
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 2.5 Flash, its first hybrid reasoning model with a configurable thinking token budget from 0 to 24,576 tokens."
specs:
  context: "1M tokens"
sources:
  - url: https://developers.googleblog.com/en/start-building-with-gemini-25-flash/
    title: "Start building with Gemini 2.5 Flash"
    primary: true
  - url: https://blog.google/products-and-platforms/products/gemini/gemini-2-5-flash-preview/
    title: "Gemini 2.5 Flash is now in preview"
    primary: true
  - url: https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/
    title: "We’re expanding our Gemini 2.5 family of models"
    primary: false
---

## What happened
On April 17, 2025, Google introduced Gemini 2.5 Flash in preview (`gemini-2.5-flash-preview-04-17`) through the Gemini API in Google AI Studio and Vertex AI, as well as in the Gemini app alongside Canvas. Built on Gemini 2.0 Flash, it launched as Google's first fully hybrid reasoning model, ranking second only to Gemini 2.5 Pro on LMArena Hard Prompts. Developers could disable thinking (`thinking_budget` set to 0) to retain 2.0 Flash-class latency with higher accuracy, or configure a maximum thinking budget up to 24,576 tokens while letting the model adapt reasoning depth to prompt complexity. On June 17, 2025, Google made Gemini 2.5 Flash generally available with a 1-million-token context window.

## Why it matters
Turning test-time reasoning into a tunable token budget let developers trade accuracy against latency and compute overhead within a single high-throughput model.
