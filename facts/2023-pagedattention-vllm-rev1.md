---
title: "PagedAttention: Efficient Memory Management for LLM Serving"
date: 2023-09-12
date_precision: day
lab: "University of California, Berkeley"
kind: research
about_me: false
replaces: 2023-pagedattention-vllm
short: "Researchers introduce PagedAttention and the vLLM engine, cutting KV cache waste to under 4% and raising LLM serving throughput 2x to 4x."
sources:
  - url: https://arxiv.org/abs/2309.06180
    title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv)"
    primary: true
---

## What happened
On September 12, 2023, researchers from UC Berkeley, Stanford University, UC San Diego, and independently submitted "Efficient Memory Management for Large Language Model Serving with PagedAttention" to arXiv. Prior serving systems reserved contiguous GPU memory for each request's key-value cache, wasting 60% to 80% through fragmentation and over-reservation. Inspired by operating-system virtual memory, PagedAttention divides each key-value cache into fixed-size blocks stored in non-contiguous physical memory and enables sharing blocks across requests. Built on PagedAttention, the authors' vLLM engine reduced key-value cache waste to under 4% and achieved 2x to 4x higher throughput than FasterTransformer and Orca at equal latency.

## Why it matters
PagedAttention and vLLM eliminated memory fragmentation bottlenecks in key-value caching, enabling higher serving concurrency and throughput without compressing model weights.
