---
title: "Mercury 3"
date: 2026-10-19
date_precision: day
lab: Inception Labs
kind: model
specs:
  context: "1M tokens"
short: "Inception Labs releases Mercury 3, a diffusion-based language model it calls the most capable of its kind, running at over 1,000 tokens per second."
sources:
  - url: https://www.inceptionlabs.ai/blog/introducing-mercury-3
    title: "Diffusion at Scale: Introducing Mercury 3"
    primary: true
---

## What happened
On October 19, 2026, Inception Labs introduced Mercury 3. It is a diffusion language model: instead of writing one token at a time, it starts with a rough block of text and refines the whole block over several passes. Inception says the model is more than 40 times larger than Mercury 1, runs at 1,068 tokens per second on NVIDIA GPUs, and takes a 1-million-token context window. It is available through Inception's API and through OpenRouter, Baseten and Vercel. Inception calls it the most capable diffusion-based language model released so far and says it outperforms GPT-6 Luna and Claude Haiku 5.5, which are its own comparisons.

## Why it matters
Diffusion models were long seen as fast but weaker than the token-by-token models behind most chatbots. Mercury 3 is a test of whether that approach can scale to competitive quality at high speed.
