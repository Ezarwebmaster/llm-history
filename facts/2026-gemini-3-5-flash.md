---
title: "Gemini 3.5 Flash"
date: 2026-05-19
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google launches Gemini 3.5 Flash, a multimodal reasoning model built for long-horizon coding and agentic workflows with a 1M-token context window."
specs:
  context: "1M tokens"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
    title: "Gemini 3.5: frontier intelligence with action"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-3-5-flash/
    title: "Gemini 3.5 Flash - Model Card"
    primary: true
  - url: https://aistudio.google.com/docs/models/gemini-3.5-flash
    title: "Gemini 3.5 Flash | Gemini API Docs"
    primary: true
---

## What happened
On May 19, 2026, at Google I/O, Google DeepMind launched Gemini 3.5 Flash as the first release in the Gemini 3.5 family, making it generally available across the Gemini API in Google AI Studio, Android Studio, Google Antigravity, Gemini Enterprise, AI Mode in Search, and as the default Gemini app model. Built on Gemini 3 Flash, it accepts text, images, audio, video, and PDFs across a 1-million-token context window with 64K output tokens and adjustable thinking levels to balance quality and latency. Google reported 76.2% on Terminal-Bench 2.1, 83.6% on MCP Atlas, 84.2% on CharXiv Reasoning, and 1656 Elo on GDPval-AA, stating it outputs tokens four times faster than comparable large models. Google later added computer-use support before deprecating it in favor of Gemini 3.6 Flash.

## Why it matters
Gemini 3.5 Flash surpassed Google's earlier Gemini 3.1 Pro on key coding and tool-use benchmarks while keeping Flash-tier speed for multi-step agents.
