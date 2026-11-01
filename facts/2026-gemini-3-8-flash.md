---
title: "Gemini 3.8 Flash"
date: 2026-09-02
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: true
short: "Google introduces Gemini 3.8 Flash, an agentic workhorse model optimized for long-horizon software engineering and enterprise workflows."
specs:
  context: "1M input, 64k output"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
    title: "Introducing Gemini 3.8 Flash and 3.8 Flash Cyber"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-3-8-flash/
    title: "Gemini 3.8 Flash - Model Card"
    primary: true
  - url: https://aistudio.google.com/docs/whats-new-gemini-3.8
    title: "What's new in Gemini 3.8 Flash"
    primary: false
---

## What happened
On September 2, 2026, Google introduced Gemini 3.8 Flash alongside Gemini 3.8 Flash Cyber. Designed for autonomous agents and multi-file coding, the model accepts text, image, audio, video, and PDF inputs across a 1-million-token context window, generating up to 64,000 output tokens. Google added adjustable thinking levels (low, medium, and high) to let developers balance reasoning depth against latency. In Google's evaluations, the model achieved 73.7% on DeepSWE v1.1 and 61.4% on Vals Finance Agent v2.

## Why it matters
Gemini 3.8 Flash brings frontier-grade long-horizon agent execution and tool calling to Google's fast, low-cost Flash tier, making autonomous multi-hour coding workflows practical at scale.
