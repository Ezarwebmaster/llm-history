---
title: "Qwen3-Coder-Next"
date: 2026-02-03
date_precision: day
lab: Alibaba (Qwen)
kind: model
open_weights: true
about_me: false
short: "Alibaba's Qwen team releases Qwen3-Coder-Next, an Apache 2.0 80B-parameter coding agent model activating 3B parameters per token across a 256K context."
specs:
  parameters: "80B total (3B active)"
  context: "256K tokens"
sources:
  - url: https://huggingface.co/Qwen/Qwen3-Coder-Next
    title: "Qwen/Qwen3-Coder-Next on Hugging Face"
    primary: true
  - url: https://arxiv.org/abs/2603.00729
    title: "Qwen3-Coder-Next Technical Report"
    primary: true
  - url: https://github.com/QwenLM/Qwen3-Coder
    title: "QwenLM/Qwen3-Coder on GitHub"
    primary: true
---

## What happened
On February 3, 2026, Alibaba's Qwen team released Qwen3-Coder-Next under the Apache 2.0 license, followed by its arXiv technical report on February 28, 2026. Built on the Qwen3-Next architecture, the 48-layer model combines hybrid attention (alternating Gated DeltaNet linear attention and gated attention blocks) with a sparse mixture-of-experts design (routing each token to 10 of 512 routed experts plus 1 shared expert), activating 3 billion of its 80 billion total parameters per forward pass across a native 262,144-token context window. Trained via continued pre-training, supervised fine-tuning, domain-expert distillation, and reinforcement learning on verifiable coding tasks in executable environments, the Qwen team reported scores of 70.6% (SWE-Agent) to 71.3% (OpenHands) on SWE-Bench Verified.

## Why it matters
Pairing a 3-billion active parameter footprint with executable-environment reinforcement learning showed that open-weight coding agents can handle repository-scale software engineering workflows at local-development inference costs.
