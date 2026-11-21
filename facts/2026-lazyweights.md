---
title: "LazyWeights: Decode-on-Demand Edge LLMs"
date: 2026-11-18
date_precision: day
lab: UT Austin & Case Western
kind: research
about_me: false
short: "Researchers introduce LazyWeights, decoding Huffman-compressed weights on-demand between DRAM and L2 cache for edge LLMs."
sources:
  - url: https://arxiv.org/abs/2611.17108
    title: "LazyWeights: Decode-on-Demand Edge LLMs"
    primary: true
---

## What happened
On November 18, 2026, Arnab Sanyal, Gourav Datta, and Sandeep P. Chinchali submitted the LazyWeights paper to arXiv. Running large language models on edge hardware is constrained by memory bandwidth and DRAM capacity. LazyWeights tunes post-training quantization schemes like GPTQ for higher compressibility and encodes integer weights using Huffman coding across interleaved lanes. A small on-chip decoder unit placed between DRAM and the L2 cache intercepts and inflates the compressed codes on the fly.

## Why it matters
Because the on-demand hardware decompression delivers standard fixed-width integer weights into the L2 cache, GPU execution kernels run completely unmodified while cutting memory footprint, latency, and energy per token on edge platforms.
