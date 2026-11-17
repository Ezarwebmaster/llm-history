---
title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
date: 2022-05-27
date_precision: day
lab: "Stanford University & Buffalo"
kind: research
about_me: false
short: "Researchers introduce FlashAttention, an IO-aware exact attention algorithm using tiling and recomputation to speed up Transformer training and inference."
sources:
  - url: https://arxiv.org/abs/2205.14135
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (arXiv)"
    primary: true
note: "Submitted to arXiv on May 27, 2022 (v1) and subsequently accepted to NeurIPS 2022."
---

## What happened
On May 27, 2022, Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, and Christopher Ré from Stanford University and the University at Buffalo submitted "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness" to arXiv. Standard self-attention requires quadratic time and memory relative to sequence length, bottlenecked by reads and writes of intermediate attention matrices to high-bandwidth GPU memory (HBM). FlashAttention reorganizes computation to be IO-aware: it loads matrix blocks into fast on-chip SRAM, uses an incremental online softmax reduction to avoid storing large intermediate matrices in HBM, and recomputes attention on-chip during the backward pass. FlashAttention yielded exact attention without approximation, accelerating GPT-2 training up to 3x and BERT-large by 15%.

## Why it matters
By overcoming the memory-bandwidth bottleneck in attention mechanisms, FlashAttention enabled Transformers to scale to much longer context windows while reducing wall-clock training time.
