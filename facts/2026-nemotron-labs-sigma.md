---
title: "NVIDIA Nemotron-Labs-Sigma"
date: 2026-11-12
date_precision: day
lab: "NVIDIA"
kind: model
open_weights: true
about_me: false
short: "NVIDIA releases Nemotron-Labs-Sigma, a family of open-weight 3B and 8B continuous diffusion language models that generate text in parallel blocks."
specs:
  parameters: "3B and 8B"
  context: "4,096 tokens (base)"
sources:
  - url: https://huggingface.co/nvidia/Nemotron-Labs-Sigma-8B
    title: "nvidia/Nemotron-Labs-Sigma-8B — Hugging Face"
    primary: true
  - url: https://research.nvidia.com/labs/genair/sigma/
    title: "Nemotron-Labs-Sigma — NVIDIA Research"
    primary: true
  - url: https://arxiv.org/abs/2610.02665
    title: "Large Language Continuous Diffusion Models (arXiv)"
    primary: true
note: "The companion paper (arXiv:2610.02665) was posted on 2026-10-02 and the 3B base card lists 2026-10-31; the 8B and main Hugging Face checkpoints list 2026-11-12, with wider collection release coverage around 2026-11-20."
---

## What happened
NVIDIA released 14 open-weight checkpoints for Nemotron-Labs-Sigma in 3-billion and 8-billion parameter sizes under the NVIDIA Nemotron Open Model License, spanning base, instruction-tuned, few-step distilled, and self-speculative variants. Rather than predicting one token at a time or filling discrete masked slots, Sigma uses continuous diffusion—iteratively removing noise from token vectors inside a 16-dimensional continuous embedding space. It generates text in parallel blocks (64 tokens by default) on a decoder-only Transformer backbone while reusing a key-value cache (saved attention states from earlier blocks). NVIDIA reports that warm-starting from left-to-right weights yields math and coding performance competitive with standard left-to-right and discrete diffusion baselines.

## Why it matters
Nemotron-Labs-Sigma brings continuous diffusion to multi-billion-parameter open language models, showing that smooth latent denoising can support parallel block decoding and faster few-step generation.
