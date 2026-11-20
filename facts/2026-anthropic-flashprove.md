---
title: "FlashProve tests cryptographic proofs of model responses"
date: 2026-11-02
date_precision: day
lab: Anthropic
kind: research
short: "Anthropic releases an open prototype for checking whether a specified language model produced an output."
sources:
  - url: https://www.anthropic.com/research/provable-inference
    title: "Progress on provable inference for large language models"
    primary: true
---

## What happened
Anthropic and its collaborators released FlashProve, a prototype for attaching a cryptographic proof to a model's output. The proof lets a verifier check that the specified model performed the computation while keeping its learned numerical settings private. The team demonstrated the approach with a compressed version of Meta's Llama 4 Maverick.

## Why it matters
A user receiving text through an API usually has to trust the provider's claim about which model produced it. Proofs offer a way to check that claim. The prototype still took much more computing time than running the model alone and covered sequences of up to 1,024 tokens.
