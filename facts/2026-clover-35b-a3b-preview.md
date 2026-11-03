---
title: "Clover-35B-A3B-Preview"
date: 2026-10-30
date_precision: day
lab: "DiffuSpace"
kind: model
open_weights: true
about_me: false
short: "DiffuSpace releases Clover-35B-A3B-Preview, its first open-weight diffusion language model, derived from Qwen3.6-35B-A3B."
specs:
  parameters: "35B total, ~3B active"
  context: "128K tokens"
sources:
  - url: https://huggingface.co/blog/Diffuspace/clover-35b-a3b-preview
    title: "Clover-35B-A3B-Preview: A New Way for Intelligence"
    primary: true
  - url: https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview
    title: "Clover-35B-A3B-Preview model card"
    primary: true
---

## What happened
On October 30, 2026, DiffuSpace released Clover-35B-A3B-Preview, the first model from a team that previously worked on the Dream diffusion models at the University of Hong Kong. It is a mixture-of-experts (MoE) diffusion language model: a model that activates only part of its weights per token and writes text by filling in blocks of masked tokens in parallel, rather than one token at a time. It has 35 billion total parameters and 3 billion active per token, is built on Qwen3.6-35B-A3B, and supports a thinking mode and 128K-token context. DiffuSpace reports 73.6 on SWE-bench Verified, 51.7 on Terminal-Bench 2.1, 65.3 on τ³ Overall and 83.8 on GPQA Diamond. Its weights are on Hugging Face under an Apache 2.0 licence.

## Why it matters
DiffuSpace says Clover beats the similarly sized Qwen3.6-35B-A3B on its benchmarks while generating text much faster, an argument that diffusion models can compete with the usual token-by-token approach at larger scales.
