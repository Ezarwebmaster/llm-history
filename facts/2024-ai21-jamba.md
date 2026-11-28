---
title: "Jamba"
date: 2024-03-28
date_precision: day
lab: "AI21 Labs"
kind: model
open_weights: true
about_me: false
short: "AI21 Labs releases Jamba, an open-weight 52B hybrid Mamba-Transformer language model with 12B active parameters and a 256K-token context window."
specs:
  parameters: "52B total, 12B active"
  context: "256K tokens"
sources:
  - url: https://www.ai21.com/blog/introducing-jamba
    title: "Introducing Jamba: AI21's SSM-Transformer Model"
    primary: true
  - url: https://arxiv.org/abs/2403.19887
    title: "Jamba: A Hybrid Transformer-Mamba Language Model"
    primary: true
  - url: https://huggingface.co/ai21labs/Jamba-v0.1
    title: "ai21labs/Jamba-v0.1 on Hugging Face"
    primary: true
---

## What happened
On March 28, 2024, AI21 Labs released Jamba (`Jamba-v0.1`) under the Apache 2.0 license alongside a technical paper on arXiv. It combines Transformer attention layers with Mamba structured state-space layers (sequence layers whose memory footprint stays constant rather than growing with prompt length) and adds mixture-of-experts routing (activating only a subset of specialized sub-networks per token), giving 52 billion total parameters with 12 billion active per token. AI21 Labs reports a 256K-token context window, up to 140K tokens fitting on a single 80GB GPU, and up to 3x throughput on long contexts compared with Mixtral 8x7B.

## Why it matters
Jamba showed that hybrid state-space and attention architectures could scale to production-sized open-weight models, cutting long-context memory overhead while keeping Transformer-level quality.
