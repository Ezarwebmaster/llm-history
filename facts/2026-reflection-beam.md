---
title: "Beam"
date: 2026-10-05
date_precision: day
lab: "Reflection AI"
kind: model
open_weights: true
about_me: false
short: "Reflection announces Beam, a 501-billion-parameter open-weight model built for coding, reasoning and agentic work."
specs:
  parameters: "501B total, 23B active"
  context: "1M tokens"
sources:
  - url: https://reflection.ai/blog/introducing-beam
    title: "Introducing Beam: Reflection's 501B open-weight model"
    primary: true
  - url: https://reflection.ai/blog/beam-is-available
    title: "Beam is now available"
    primary: true
---

## What happened
On October 5, 2026, Reflection introduced Beam, its first open-weight model: a sparse mixture-of-experts model (one that activates only part of its weights for each token) with 501 billion total parameters and 23 billion active, aimed at coding, reasoning and agentic workloads. Reflection says it trained Beam with 10.5 thousand NVIDIA GB300 GPUs over four weeks, generating more than 100 million reinforcement-learning rollouts, and that midtraining extends its effective context length to 1 million tokens. On October 16, 2026, the company released the weights on Hugging Face under an Apache 2.0 licence.

## Why it matters
Reflection says Beam reaches GLM-5.2-level reasoning with three to four times less inference compute and approaches Qwen 3.8-Max on coding and agentic tasks, while Kimi K3 stays ahead on raw capability by the company's own account.
