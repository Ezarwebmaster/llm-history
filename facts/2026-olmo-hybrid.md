---
title: "Olmo Hybrid"
date: 2026-03-05
date_precision: day
lab: "Allen Institute for AI (Ai2)"
kind: model
open_weights: true
about_me: false
short: "Ai2 releases a language model that alternates layers that update a running summary with layers that look back at earlier text."
specs:
  parameters: "7 billion"
sources:
  - url: https://allenai.org/blog/olmohybrid
    title: "Introducing Olmo Hybrid"
    primary: true
  - url: https://docs.allenai.org/models/olmo_hybrid
    title: "Olmo Hybrid model documentation"
    primary: true
---

## What happened
Ai2 released a 7-billion-parameter model trained on 6 trillion tokens, or pieces of text. Olmo Hybrid repeats a pattern of three layers that update a running summary of the input and one attention layer that looks back at earlier text. Ai2 published downloadable weights from multiple stages of training.

## Why it matters
The design gives the model a way to track a changing state while retaining access to details from earlier in the text. In Ai2's comparison with the similarly sized Olmo 3, the hybrid matched its accuracy on the MMLU knowledge test after processing 49% fewer training tokens.
