---
title: "xAI opens the weights of Grok-1"
date: 2024-03-17
date_precision: day
lab: xAI
kind: model
open_weights: true
about_me: false
short: "xAI publishes the weights of Grok-1, a 314-billion-parameter mixture-of-experts base model, under the Apache 2.0 license."
specs:
  parameters: "314B"
  context: "8,192 tokens"
sources:
  - url: https://x.ai/news/grok-os
    title: "Open Release of Grok-1"
    primary: true
  - url: https://github.com/xai-org/grok-1
    title: "Grok-1 code and model specification (GitHub)"
    primary: true
---

## What happened
On March 17, 2024, xAI released the weights and architecture of Grok-1, a 314-billion-parameter mixture-of-experts model: each token passes through 2 of its 8 expert sub-networks, so about a quarter of the weights work at a time. It is the raw checkpoint from pre-training that ended in October 2023, not tuned for dialogue or any other task. xAI says it trained the model from scratch with its own software built on JAX and Rust. Code and weights came under the Apache 2.0 license.

## Why it matters
Anyone with enough hardware could download the whole model, by torrent or from Hugging Face, and study it or build on it. Because it is a base model, it continues text rather than following instructions: chat behaviour has to be trained on top.
