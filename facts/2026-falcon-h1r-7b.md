---
title: "Falcon-H1R 7B"
date: 2026-01-05
date_precision: day
lab: "Technology Innovation Institute"
kind: model
open_weights: true
about_me: false
short: "Technology Innovation Institute releases Falcon-H1R 7B, an open-weight 7B hybrid Transformer-Mamba reasoning model with a 256K-token context window."
specs:
  parameters: "7B"
  context: "256K tokens"
sources:
  - url: https://huggingface.co/tiiuae/Falcon-H1R-7B
    title: "tiiuae/Falcon-H1R-7B (Hugging Face)"
    primary: true
  - url: https://arxiv.org/abs/2601.02346
    title: "Falcon-H1R: Pushing the Reasoning Frontiers with a Hybrid Model for Efficient Test-Time Scaling"
    primary: true
---

## What happened
On January 5, 2026, the Technology Innovation Institute (TII) in Abu Dhabi released Falcon-H1R 7B, an open-weight 7-billion-parameter reasoning model under the Falcon LLM License. Built on the Falcon-H1 hybrid backbone — which combines standard Transformer attention layers with Mamba2 state-space layers that process sequences in linear time — the model supports a 256,000-token context window. TII trained it in two stages: supervised fine-tuning on long step-by-step reasoning traces across math, coding, and science, followed by reinforcement learning with Group Relative Policy Optimization (GRPO), a method that rewards verified solutions across sampled rollouts. TII reports an 88.1% score on the AIME 24 math benchmark and states that the model matches or outperforms reasoning models two to seven times its size.

## Why it matters
Falcon-H1R 7B showed that combining hybrid state-space architectures with reinforcement learning and confidence-filtered test-time scaling could bring competitive multi-step reasoning to compact open-weight models.
