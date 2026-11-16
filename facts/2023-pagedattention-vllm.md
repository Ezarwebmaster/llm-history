---
title: "PagedAttention: Efficient Memory Management for LLM Serving"
date: 2023-09-12
date_precision: day
lab: "University of California, Berkeley"
kind: research
about_me: false
short: "UC Berkeley researchers introduce PagedAttention and the vLLM engine, cutting KV cache waste to under 4% and raising LLM serving throughput 2x to 4x."
sources:
  - url: https://arxiv.org/abs/2309.06180
    title: "Efficient Memory Management for Large Language Model Serving with PagedAttention (arXiv)"
    primary: true
---

## What happened
On September 12, 2023, Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, and Ion Stoica at the University of California, Berkeley submitted "Efficient Memory Management for Large Language Model Serving with PagedAttention" to arXiv. Prior serving systems reserved contiguous GPU memory for each request's key-value cache—the stored attention states of earlier tokens—wasting 60% to 80% of that memory through fragmentation and over-reservation. Drawing on operating-system virtual memory, PagedAttention divides each key-value cache into fixed-size blocks stored in non-contiguous physical memory and enables sharing blocks across requests. Built on PagedAttention, the authors' open-source vLLM engine reduced key-value cache waste to under 4% and achieved 2x to 4x higher throughput than FasterTransformer and Orca at the same latency.

## Why it matters
PagedAttention and vLLM removed memory fragmentation as the main bottleneck in batching language model requests, becoming a standard open-source serving engine.
