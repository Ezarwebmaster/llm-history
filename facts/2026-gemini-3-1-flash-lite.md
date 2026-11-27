---
title: "Gemini 3.1 Flash-Lite"
date: 2026-03-03
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 3.1 Flash-Lite for high-volume multimodal tasks with configurable thinking levels, reaching general availability in May 2026."
specs:
  context: "1M input, 64K output"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/
    title: "Gemini 3.1 Flash-Lite: Built for intelligence at scale"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/
    title: "Gemini 3.1 Flash-Lite - Model Card"
    primary: true
  - url: https://aistudio.google.com/docs/models/gemini-3.1-flash-lite
    title: "Gemini 3.1 Flash-Lite | Gemini API Docs"
    primary: true
  - url: https://ai.google.dev/gemini-api/docs/changelog
    title: "Gemini API Changelog"
    primary: false
---

## What happened
On March 3, 2026, Google introduced Gemini 3.1 Flash-Lite in preview via the Gemini API in Google AI Studio and Vertex AI as the lightweight model of the Gemini 3 series, built on Gemini 3 Pro. Accepting text, image, audio, video, and PDF inputs across a 1-million-token context window with up to 64,000 output tokens, it includes configurable thinking levels that let developers adjust reasoning effort on high-frequency workloads such as translation, classification, content moderation, and data extraction. Google reported scores of 86.9% on GPQA Diamond, 76.8% on MMMU-Pro, and 1432 Elo on Arena.ai, plus 2.5-times faster time to first answer token and 45% higher output speed than Gemini 2.5 Flash on Artificial Analysis tests. Google made `gemini-3.1-flash-lite` generally available on May 7, 2026.

## Why it matters
Bringing tunable reasoning depth to Google's smallest API tier made multi-step reasoning practical for latency-sensitive, high-volume tasks.
