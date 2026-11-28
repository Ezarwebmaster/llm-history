---
title: "Gemini Diffusion"
date: 2025-05-20
date_precision: day
lab: Google DeepMind
kind: model
open_weights: false
about_me: false
short: "Google DeepMind unveils Gemini Diffusion, an experimental text and code diffusion model generating entire token blocks in parallel from random noise."
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-diffusion/
    title: "Gemini Diffusion: Google DeepMind’s experimental research model"
    primary: true
  - url: https://deepmind.google/models/gemini-diffusion/
    title: "Gemini Diffusion — Google DeepMind"
    primary: true
---

## What happened
On May 20, 2025 at Google I/O, Google DeepMind unveiled Gemini Diffusion, an experimental text and code generation model based on diffusion rather than sequential next-token prediction. Instead of generating tokens autoregressively one by one, Gemini Diffusion begins from random noise and refines text or code into coherent blocks over iterative denoising steps. Reaching an average sampling speed of 1,479 tokens per second (excluding an 0.84-second overhead), it achieved generation speeds substantially faster than standard models while matching Gemini 2.0 Flash-Lite on code benchmarks, including 30.9% on LiveCodeBench v6 (pass@1), 45.4% on BigCodeBench, 56.8% on LBPP v2, and 89.6% on HumanEval. DeepMind made it available as an experimental waitlist-gated preview.

## Why it matters
Demonstrating high-speed non-autoregressive text and code generation showed diffusion models could match autoregressive quality while enabling parallel block generation and iterative mid-generation refinement.
