---
title: "MemOnce: Scalable Memory Architecture for Large Language Models"
date: 2026-11-20
date_precision: day
lab: "Nanjing University & USTC"
kind: research
about_me: false
short: "Researchers at Nanjing University and USTC introduce MemOnce, compressing long-context KV caches via a memory encoder-decoder and sparse attention."
sources:
  - url: https://arxiv.org/abs/2611.27973
    title: "MemOnce: A Scalable Memory Architecture for Large Language Models (arXiv)"
    primary: true
---

## What happened
On November 20, 2026, Chang Nie, Chaoyou Fu, Songlin Liu, Yiqing Hu, and Caifeng Shan of Nanjing University and the University of Science and Technology of China (USTC) posted "MemOnce: A Scalable Memory Architecture for Large Language Models". Rather than storing layer-by-layer key-value (KV) caches—the saved intermediate attention states for every past token—MemOnce combines a Memory Encoder-Decoder that caches only a compact subset of final-layer hidden states and decodes them into layer KV caches on demand, with Memory Sparse Attention that computes sparse retrieval indices once across layers. Adapting Qwen3.5-4B with MemOnce cut the memory state cache footprint by 1,313 times and sped up prefill latency by 6.9 times at a 1-million-token context length.

## Why it matters
Decoupling long-horizon memory storage from per-layer attention states keeps GPU memory overhead nearly constant across million-token contexts while preserving fine-grained token recall.
