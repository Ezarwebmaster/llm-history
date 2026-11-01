---
title: "Cohere Command A+"
date: 2026-05-20
date_precision: day
lab: Cohere
kind: model
open_weights: true
short: "Cohere releases Command A+, an open Apache 2.0 mixture-of-experts model with 25 billion active parameters for enterprise agentic tasks."
specs:
  parameters: "218B total (25B active)"
  context: "128K input, 64K output"
sources:
  - url: https://docs.cohere.com/changelog/command-a-plus-05-2026
    title: "Announcing Cohere's Command A+"
    primary: true
  - url: https://cohere.com/command
    title: "Cohere Command Models: AI-Powered Solutions for Enterprise"
    primary: false
---

## What happened
On May 20, 2026, Cohere released Command A+, a mixture-of-experts model (an architecture that activates only a subset of its weights for each token) under the Apache 2.0 licence. The model contains 218 billion total parameters, with 25 billion active per token, and supports 128,000 input tokens and 64,000 output tokens. Cohere reports support for 48 languages, including all official European Union languages, and targets tool use, translation, visual inputs, and multi-step agentic tasks.

## Why it matters
Cohere made its largest enterprise agent model open-weights, allowing businesses to run sovereign multilingual agent workflows on private hardware without cloud lock-in.
