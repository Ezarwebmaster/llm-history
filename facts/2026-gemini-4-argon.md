---
title: "Gemini 4 Argon"
date: 2026-09-30
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: true
short: "Google announces Gemini 4 Argon, a multimodal reasoning model with a 1-million-token context and output limit."
specs:
  context: "1M tokens"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
    title: "Gemini 4 Argon: our next era of frontier intelligence"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-4-argon/
    title: "Gemini 4 Argon - Model Card"
    primary: true
  - url: https://blog.google/intl/en-in/products/introducing-gemini-4-argon/
    title: "Gemini 4 Argon: Built to solve your hardest problems"
    primary: false
note: "Announced on 2026-09-30 for initial cybersecurity testers in the Fairwind Program; became globally available to developers, enterprises, and subscribers on 2026-10-13, when the model card was published."
---

## What happened
Gemini 4 Argon is a sparse mixture-of-experts model (a network that routes each token through a subset of parameters) that processes text, image, audio, and video inputs and expands output generation up to 1 million tokens. Google first opens access on September 30, 2026 to cybersecurity defenders in its Fairwind Program, followed by global availability on October 13, 2026 via the Gemini API, Google AI Studio, and the Gemini app. Google reports top scores on DeepSWE v1.1 (77.9%) and the Vals Index (68.9%).

## Why it matters
Expanding output length to 1 million tokens lets a reasoning model sustain long multi-step coding, scientific, and security workflows in a single run.
