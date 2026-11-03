---
title: "Mistral 7B"
date: 2023-09-27
date_precision: day
lab: "Mistral AI"
kind: model
open_weights: true
short: "Mistral AI releases Mistral 7B, a 7.3B-parameter model under Apache 2.0."
specs:
  parameters: "7.3B"
sources:
  - url: https://mistral.ai/news/announcing-mistral-7b/
    title: "Mistral 7B"
    primary: true
---

## What happened
On 27 September 2023, Mistral AI released Mistral 7B, a 7.3 billion parameter model under Apache 2.0, with downloadable weights and a fine-tuned chat version. Mistral says it outperforms Llama 2 13B on all benchmarks it ran, using grouped-query attention for faster inference and sliding window attention, which limits each layer's direct attention to the preceding 4,096 hidden states, to handle longer sequences at smaller cost.

## Why it matters
A small model users could run and adapt themselves matched a model roughly twice its size in Mistral's tests, widening access beyond large labs.
