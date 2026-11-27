---
title: "Mixtral 8x7B"
date: 2023-12-11
date_precision: day
lab: Mistral AI
kind: model
open_weights: true
about_me: false
short: "Mistral AI releases Mixtral 8x7B, an Apache 2.0 sparse mixture-of-experts model with 46.7B total and 12.9B active parameters per token."
specs:
  parameters: "46.7B total (12.9B active)"
  context: "32K tokens"
sources:
  - url: https://mistral.ai/news/mixtral-of-experts/
    title: "Mixtral of experts"
    primary: true
  - url: https://arxiv.org/abs/2401.04088
    title: "Mixtral of Experts"
    primary: true
note: "Mistral AI's December 2023 blog lists 46.7B total and 12.9B active parameters, whereas the January 2024 arXiv paper rounds these to 47B and 13B; this entry keeps the blog's exact figures."
---

## What happened
On December 11, 2023, Mistral AI released Mixtral 8x7B and Mixtral 8x7B-Instruct under the Apache 2.0 license with a 32,000-token context window. It uses a sparse mixture-of-experts architecture, where each layer contains eight feedforward expert blocks and a router selects two per token, activating 12.9 billion of its 46.7 billion total parameters during inference (described in Mistral AI's January 8, 2024 arXiv paper). Mistral AI reported that Mixtral matched or outperformed GPT-3.5 and Llama 2 70B on standard benchmarks while supporting English, French, German, Spanish, and Italian.

## Why it matters
Mixtral 8x7B showed that open-weight sparse mixture-of-experts models could match larger dense models at a fraction of the inference compute.
