---
title: "Gemini 4 Hydrogen"
date: 2026-11-12
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: true
short: "Google DeepMind releases Gemini 4 Hydrogen, a fast multimodal reasoning model with four thinking levels replacing the Flash tier."
specs:
  context: "1M tokens"
sources:
  - url: https://deepmind.google/models/model-cards/gemini-4-hydrogen/
    title: "Gemini 4 Hydrogen - Model Card"
    primary: true
  - url: https://blog.google/technology/developers/gemini-4-hydrogen-everyday-coding-and-agentic-workflows-for-developers/
    title: "Gemini 4 Hydrogen: everyday coding and agentic workflows for developers"
    primary: true
  - url: https://blog.google/technology/ai/introducing-gemini-4-hydrogen-for-agentic-workflows/
    title: "Introducing Gemini 4 Hydrogen for Agentic Workflows"
    primary: true
---

## What happened
On November 12, 2026, Google DeepMind released Gemini 4 Hydrogen as the speed-and-efficiency successor to its Flash tier, adapted from Gemini 4 Carbon. It processes text, images, audio, and video across a 1,048,576-token context window, with up to 65,536 synchronous output tokens and background long decoding up to 1 million tokens. Developers can select among four reasoning levels (`low`, `medium`, `high` by default, and `xhigh`) to trade latency for deeper deliberation. Google reports 57.0% on Terminal-Bench 4.1 (cheating-adjusted), 77.6% on OSWorld-2.1 (offline subset), 71.6% on Agents' Last Exam v1.1, and 58.8% on HLE-Diamond, and says Hydrogen runs roughly 2.5 times faster than Gemini 3.8 Flash.

## Why it matters
Hydrogen brings configurable reasoning depth and multi-step tool reliability to high-throughput everyday coding and agentic workflows rather than reserving them for heavier frontier tiers.
