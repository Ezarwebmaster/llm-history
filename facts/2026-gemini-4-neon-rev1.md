---
title: "Gemini 4 Neon"
date: 2026-11-18
date_precision: day
lab: Google
kind: model
about_me: false
replaces: 2026-gemini-4-neon
short: "Google releases Gemini 4 Neon, a multimodal reasoning model adapted from Gemini 4 Carbon with four thinking levels and a 1-million-token context window."
specs:
  context: "1M tokens"
sources:
  - url: https://deepmind.google/models/model-cards/gemini-4-neon/
    title: "Gemini 4 Neon - Model Card"
    primary: true
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
    title: "Introducing Gemini 4 Neon"
    primary: true
---

## What happened
On November 18, 2026, Google DeepMind released Gemini 4 Neon, a multimodal model adapted from Gemini 4 Carbon that accepts text, images, audio, and video across a 1-million-token context window, with up to 64K synchronous output tokens and up to 1 million tokens via background long decoding. It offers four reasoning levels (`low`, `medium`, `high` by default, and `xhigh`) across the Gemini API, Google AI Studio, Android Studio, Google Antigravity, Gemini for business, and the Gemini app for Pro and Ultra subscribers. Google reports 70.9% on Vals Index v2.2, 71.3% on HLE-Diamond, 65.2% on Terminal-bench 4.1, and 56.3% on AutomationBench.

## Why it matters
Google positions Gemini 4 Neon between Gemini 4 Carbon (built for long-horizon projects) and Gemini 4 Hydrogen (built for fast everyday execution) as a mid-tier model that balances reasoning depth and efficiency.
