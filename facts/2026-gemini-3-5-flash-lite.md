---
title: "Gemini 3.5 Flash-Lite"
date: 2026-07-21
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google releases Gemini 3.5 Flash-Lite, a fast, low-latency multimodal model with configurable thinking levels and Computer Use support."
specs:
  context: "1M input, 64K output"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
    title: "Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/
    title: "Gemini 3.5 Flash-Lite - Model Card"
    primary: true
  - url: https://aistudio.google.com/docs/models/gemini-3.5-flash-lite
    title: "Gemini 3.5 Flash-Lite | Gemini API Docs"
    primary: true
---

## What happened
On July 21, 2026, Google made Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`) generally available alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber across Google AI Studio, Android Studio, the Gemini API, the Gemini Enterprise Agent Platform, the Gemini app, and Google Search. Based on Gemini 3.1 Flash-Lite, it accepts text, images, audio, video, and PDFs across a 1-million-token context window with 64K output tokens. Developers can adjust configurable thinking levels—defaulting to `minimal` for high-throughput extraction and search or raising reasoning effort for multi-step subagent tasks—and use built-in Computer Use tools. Google reported 350 output tokens per second on the Artificial Analysis Index, 54.2% on SWE-Bench Pro, 54.0% on Terminal-Bench 2.1, 74.0% on OSWorld-Verified, and 1140 Elo on GDPval-AA v2.

## Why it matters
Bringing built-in Computer Use and stronger subagent reasoning to Google's fastest Flash-Lite tier allowed high-volume agentic workflows to run at lower latency.
