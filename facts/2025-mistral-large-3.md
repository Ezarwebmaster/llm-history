---
title: "Mistral Large 3"
date: 2025-12-02
date_precision: day
lab: Mistral AI
kind: model
open_weights: true
short: "Mistral AI releases Mistral Large 3, a 675-billion-parameter mixture-of-experts model with open weights under the Apache 2.0 licence."
specs:
  parameters: "675B total, 41B active (MoE)"
  context: "256K tokens"
sources:
  - url: https://mistral.ai/news/mistral-3/
    title: "Introducing Mistral 3"
    primary: true
  - url: https://docs.mistral.ai/models/mistral-large-3-25-12.md
    title: "Mistral Large 3 Documentation"
    primary: true
---

## What happened
Trained from scratch on 3,000 NVIDIA H200 GPUs, Mistral Large 3 uses a sparse mixture-of-experts architecture (a design that activates only 41 billion of its 675 billion parameters for each token) and understands both text and images. Mistral releases both the base and instruction-tuned checkpoints alongside three smaller dense Ministral 3 models (3B, 8B, and 14B) under the permissive Apache 2.0 licence.

## Why it matters
Mistral returned to open-weight frontier models with a permissive licence, giving enterprises and researchers a multilingual multimodal model they could inspect and host themselves.
