---
title: "Gemini 2.5 Flash-Lite"
date: 2025-06-17
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 2.5 Flash-Lite in preview, its fastest 2.5-series hybrid reasoning model with a 1M-token context window."
specs:
  context: "1M input, 64K output"
sources:
  - url: https://blog.google/products-and-platforms/products/gemini/gemini-2-5-model-family-expands/
    title: "We’re expanding our Gemini 2.5 family of models"
    primary: true
  - url: https://developers.googleblog.com/en/gemini-25-flash-lite-is-now-stable-and-generally-available/
    title: "Gemini 2.5 Flash-Lite is now stable and generally available"
    primary: true
  - url: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/2-5-flash-lite
    title: "Gemini 2.5 Flash-Lite — Google Cloud Documentation"
    primary: true
---

## What happened
On June 17, 2025, Google launched Gemini 2.5 Flash-Lite in preview through Google AI Studio and Vertex AI alongside the general availability of Gemini 2.5 Pro and Flash, before releasing the stable `gemini-2.5-flash-lite` model on July 22, 2025. Google positioned it as its fastest, most cost-efficient Gemini 2.5 model for high-volume tasks such as translation and classification, reporting lower latency than 2.0 Flash-Lite and 2.0 Flash. It accepts text, images, audio, and video across a 1,048,576-token context window with up to 65,536 output tokens, and supports hybrid reasoning (toggling multi-step thinking at configurable token budgets) plus Google Search grounding, code execution, function calling, and URL context. Google later scheduled its Cloud Agent Platform retirement for October 20, 2026.

## Why it matters
Bringing optional test-time reasoning and a 1-million-token multimodal window to Google's smallest 2.5 tier made reasoning practical for latency-sensitive, high-throughput workloads.
