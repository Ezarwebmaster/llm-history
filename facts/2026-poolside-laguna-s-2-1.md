---
title: "Laguna S 2.1"
date: 2026-07-21
date_precision: day
lab: "Poolside"
kind: model
open_weights: true
about_me: false
specs:
  parameters: "118B total, 8B active"
  context: "1,048,576 tokens"
short: "Poolside releases Laguna S 2.1, an open-weight 118B-parameter Mixture-of-Experts coding model with 8B active parameters and a 1M-token context window."
sources:
  - url: https://huggingface.co/poolside/Laguna-S-2.1
    title: "poolside/Laguna-S-2.1 (Hugging Face)"
    primary: true
---

## What happened
On July 21, 2026, Poolside released Laguna S 2.1 under the OpenMDW-1.1 license with weights on Hugging Face. The model uses a Mixture-of-Experts architecture—routing each token to a small subset of specialized subnetworks—with 118 billion total parameters and roughly 8 billion active per token across 48 layers. It interleaves sliding-window and global attention to support a 1,048,576-token context window and includes a native thinking mode for multi-step reasoning between tool calls.

## Why it matters
Trained with reinforcement learning inside agent harnesses rather than only for single-line autocomplete, Laguna S 2.1 brings long-horizon repository editing and terminal workflows to an open-weight model compact enough for single-node deployment.
