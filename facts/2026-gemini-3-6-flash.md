---
title: "Gemini 3.6 Flash"
date: 2026-07-21
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google releases Gemini 3.6 Flash, a multimodal reasoning model that cuts output token usage by 17% over Gemini 3.5 Flash while improving coding and tool use."
specs:
  context: "1M input, 64K output"
sources:
  - url: https://deepmind.google/models/model-cards/gemini-3-6-flash/
    title: "Gemini 3.6 Flash - Model Card"
    primary: true
  - url: https://aistudio.google.com/docs/models/gemini-3.6-flash
    title: "Gemini 3.6 Flash | Gemini API Docs"
    primary: true
  - url: https://aistudio.google.com/docs/whats-new-gemini-3.6
    title: "What's new in Gemini 3.6 Flash and 3.5 Flash-Lite | Gemini API Docs"
    primary: true
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
    title: "Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber"
    primary: false
---

## What happened
On July 21, 2026, Google DeepMind released Gemini 3.6 Flash (`gemini-3.6-flash`) across the Gemini app, Google AI Studio, the Gemini API, Google Antigravity, and Gemini Enterprise, alongside Gemini 3.5 Flash-Lite and Gemini 3.5 Flash Cyber. Built on Gemini 3.5 Flash, it accepts text, images, audio, video, and PDFs across a 1M-token input window with 64K output tokens, built-in client-side Computer Use, and configurable thinking levels (`medium` and `high`), while deprecating sampling parameters (`temperature`, `top_p`, `top_k`) and prefilled model turns. Google reported 17% fewer output tokens on the Artificial Analysis Index (up to 65% fewer on DeepSWE) while outperforming 3.5 Flash on SWE-Bench Pro (58.7% vs. 55.1%), Terminal-Bench 2.1 (78.0% vs. 76.2%), MLE-Bench (63.9% vs. 49.7%), OSWorld-Verified (83.0% vs. 78.4%), and GDPval-AA v2 (1421 vs. 1349 Elo).

## Why it matters
Cutting reasoning verbosity and tool loops while raising coding and computer-use accuracy made multi-step agent runs faster and more token-efficient.
