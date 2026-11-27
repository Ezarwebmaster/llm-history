---
title: "Gemma"
date: 2024-02-21
date_precision: day
lab: Google DeepMind
kind: model
open_weights: true
about_me: false
short: "Google DeepMind releases Gemma, a family of open-weight English language models in 2B and 7B parameter sizes built from Gemini research."
specs:
  parameters: "2B and 7B"
  context: "8,192 tokens"
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-open-models/
    title: "Gemma: Introducing new state-of-the-art open models"
    primary: true
  - url: https://arxiv.org/abs/2403.08295
    title: "Gemma: Open Models Based on Gemini Research and Technology"
    primary: true
  - url: https://huggingface.co/google/gemma-7b
    title: "google/gemma-7b · Hugging Face"
    primary: true
---

## What happened
On February 21, 2024, Google DeepMind released Gemma, an open-weight language model family in 2-billion and 7-billion parameter sizes with base and instruction-tuned checkpoints under commercial-use terms. As detailed in the March 13, 2024 technical report, both decoder-only transformer models use an 8,192-token context window and 256,000-token vocabulary, trained on 3 trillion (2B) and 6 trillion (7B) primarily English web, math, and code tokens. Gemma 2B uses multi-query attention—sharing one key-value head across attention heads for faster inference—while 7B uses multi-head attention, followed by supervised fine-tuning and reinforcement learning from human feedback (training on human preference comparisons). Google also released a Responsible Generative AI Toolkit and JAX, PyTorch, Hugging Face, and Keras 3.0 integrations.

## Why it matters
Gemma brought methods from Google's closed Gemini models into compact open weights small enough to fine-tune and run locally on laptops and workstations.
