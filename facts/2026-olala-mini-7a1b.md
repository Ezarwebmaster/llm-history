---
title: "Olala mini 7A1B"
date: 2026-11-17
date_precision: day
lab: "OVHcloud"
kind: model
open_weights: true
about_me: false
short: "OVHcloud releases Olala mini 7A1B, an open-weight hybrid model combining Differential-TPA attention with Mamba-3 state spaces."
specs:
  parameters: "7 billion"
  context: "32,000 tokens"
sources:
  - url: https://corporate.ovhcloud.com/en/news/press-releases/
    title: "OVH announces Olala mini 7A1B"
    primary: true
  - url: https://huggingface.co/OVHaiLLM/Olala-v1.0-mini-7A1B
    title: "OVHaiLLM/Olala-v1.0-mini-7A1B on Hugging Face"
    primary: true
---

## What happened
On November 17, 2026, French cloud provider OVHcloud announced Olala mini 7A1B, its first open-weight foundation model, developed by its AI lab OVHai LLM and released under an Apache 2.0 license. The model uses a mixture-of-experts architecture with 7 billion total parameters and 1 billion active parameters across 256 experts per layer, trained from scratch across European supercomputers including Jupiter, MeluXina, and Jean Zay.

## Why it matters
The hybrid design combines differential attention with Mamba-3 state spaces to lower memory demands, allowing the model to run on consumer hardware with 8 gigabytes of memory or on standard processors without dedicated accelerators.
