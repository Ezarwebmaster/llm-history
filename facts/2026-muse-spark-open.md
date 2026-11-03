---
title: "Muse Spark Open"
date: 2026-10-15
date_precision: day
lab: Meta
kind: model
open_weights: true
short: "Meta releases the weights of Muse Spark Open, an 816B-parameter multimodal model for coding and agentic work."
specs:
  parameters: "816B total, 42B active"
  context: "1M tokens"
sources:
  - url: https://research.meta.ai/blog/muse-spark-open
    title: "Introducing Muse Spark Open, The Most Capable US Open-Weight Model to Date"
    primary: true
---

## What happened
On October 15, 2026, Meta released the weights of Muse Spark Open, the open-weight version of its Muse Spark agentic and coding model. Meta calls it the most capable US open-weight model to date; it is a natively multimodal model (text, image, video and audio input) with 816 billion total parameters, 42 billion of them active per token, and a 1-million-token context window. Weights are published on Hugging Face, Amazon SageMaker AI, Google Cloud Model Garden and Microsoft Foundry Models under the Muse Model License, and hosted versions run at Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter and Together AI. Meta says the model can run on a desktop with two Apple M5 Ultra Mac Studios.

## Why it matters
Meta's assistant model became downloadable: the weights of a model built for coding and multi-step agent work could be run on your own hardware, not only inside Meta's apps and API.
