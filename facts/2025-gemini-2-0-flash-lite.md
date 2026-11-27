---
title: "Gemini 2.0 Flash-Lite"
date: 2025-02-05
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 2.0 Flash-Lite in public preview, a low-latency multimodal model with a 1M-token context window built for high-volume text output."
specs:
  context: "1M input, 8K output"
sources:
  - url: https://aistudio.google.com/docs/models/gemini-2.0-flash-lite
    title: "Gemini 2.0 Flash-Lite | Gemini API Docs"
    primary: true
  - url: https://developers.googleblog.com/en/gemini-2-family-expands/
    title: "Gemini 2.0: Flash, Flash-Lite and Pro - Google Developers Blog"
    primary: false
  - url: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-updates-february-2025/
    title: "Gemini 2.0 is now available to everyone"
    primary: false
  - url: https://aistudio.google.com/docs/changelog#02-05-2025
    title: "Release notes — Gemini API (February 5 and 25, 2025)"
    primary: false
---

## What happened
On February 5, 2025, Google introduced Gemini 2.0 Flash-Lite (`gemini-2.0-flash-lite-preview-02-05`) in public preview in Google AI Studio and Vertex AI alongside the general availability of Gemini 2.0 Flash and the experimental release of Gemini 2.0 Pro, before making `gemini-2.0-flash-lite` generally available on February 25, 2025. Built as a smaller, lower-cost companion to Gemini 2.0 Flash, it accepted text, images, video, and audio across a 1,048,576-token input context window with an 8,192-token text output limit and an August 2024 knowledge cutoff. It supported function calling, structured outputs, context caching, and the Batch API, and used a single rate per input modality rather than splitting short and long context windows. Google reported that it outperformed Gemini 1.5 Flash on most benchmarks while matching its speed.

## Why it matters
Gemini 2.0 Flash-Lite established Google's dedicated Flash-Lite tier for high-throughput, latency-sensitive multimodal classification, captioning, and extraction workloads at scale.
