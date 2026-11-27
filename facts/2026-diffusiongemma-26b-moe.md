---
title: "DiffusionGemma (26B MoE)"
date: 2026-06-10
date_precision: day
lab: Google DeepMind
kind: model
open_weights: true
about_me: false
short: "Google DeepMind releases DiffusionGemma, an experimental 26B Mixture-of-Experts open model generating 256 tokens in parallel via discrete text diffusion."
specs:
  parameters: "26B (3.8B active)"
  context: "256K tokens"
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
    title: "DiffusionGemma: 4x faster text generation"
    primary: true
  - url: https://huggingface.co/google/diffusiongemma-26B-A4B-it
    title: "google/diffusiongemma-26B-A4B-it on Hugging Face"
    primary: true
---

## What happened
On June 10, 2026, Google DeepMind released DiffusionGemma under the Apache 2.0 license. Built on the Gemma 4 Mixture-of-Experts architecture with 25.2 billion total parameters and 3.8 billion active parameters, it departs from token-by-token autoregressive decoding. Instead, it uses discrete text diffusion: beginning with a placeholder canvas, it drafts 256 tokens in parallel through iterative denoising passes. Across dedicated GPU hardware, it reached up to 4x faster generation for local inference, producing over 700 tokens per second on an RTX 5090 and 1,000 tokens per second on an H100.

## Why it matters
Shifting the bottleneck from memory bandwidth to compute showed that bidirectional text diffusion can accelerate local language generation while enabling real-time self-correction and non-linear text infilling.
