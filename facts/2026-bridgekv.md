---
title: "BridgeKV: Large-Model Prefill and Small-Model Decoding"
date: 2026-11-09
date_precision: day
lab: "Georgia Institute of Technology"
kind: research
about_me: false
short: "Researchers at Georgia Tech introduce BridgeKV, translating KV caches from a larger prefill model to a smaller decoding model to speed up inference."
sources:
  - url: https://arxiv.org/abs/2611.11761
    title: "BridgeKV: Large-Model Prefill and Small-Model Decoding for LLM Inference via KV Cache Translation (arXiv)"
    primary: true
---

## What happened
On November 9, 2026, Payman Behnam, Alexey Tumanov, and collaborators at the Georgia Institute of Technology posted "BridgeKV: Large-Model Prefill and Small-Model Decoding for LLM Inference via KV Cache Translation" (arXiv:2611.11761). Decoupling compute-heavy prefill from memory-bandwidth-bound token generation, BridgeKV executes prompt prefill on a large language model and translates its key-value cache into the layout of a smaller model using a lightweight KV-stitching module with learned layer mixing and nonlinear mappings. On a single NVIDIA A40 GPU transitioning from Llama-3.1-Instruct-8B to Llama-3.2-Instruct-1B, BridgeKV achieved 3.0× faster request throughput while closing up to 80% of the quality gap compared to running the large model alone.

## Why it matters
Decoupling prefill and decoding across model tiers allows inference systems to retain the context comprehension of large models while generating tokens at the speed and lower energy cost of compact models.
