---
title: "Beyond K/V Caches: Cross-Model State Handoff in Hybrid LLMs"
date: 2026-11-05
date_precision: day
lab: "South China University of Technology"
kind: research
about_me: false
short: "Researchers introduce Hybrid State Transfer to hand off attention caches, recurrent states, and convolution histories across hybrid linear-attention LLMs."
sources:
  - url: https://arxiv.org/abs/2611.08133
    title: "Beyond K/V Caches: Cross-Model State Handoff in Hybrid Linear-Attention LLMs"
    primary: true
---

## What happened
On November 5, 2026, researchers at South China University of Technology (Jiacheng Cai et al.) published Hybrid State Transfer (HST) to enable cross-model state handoff in hybrid linear-attention language models. While previous methods transfer only full-attention key-value caches across models during cascading or model routing, hybrid architectures also maintain recurrent states and convolution histories. HST aligns all three state types simultaneously, achieving 21.66x to 21.91x speedups over repeated prefill on 16K contexts while retaining over 89% to 94% task accuracy across Qwen3.5 model transitions.

## Why it matters
Multi-model cascades and dynamic model routing frequently switch between small and large language models during long conversations. Enabling instant state transfer across heterogeneous hybrid architectures eliminates redundant prefill compute and makes production routing substantially faster.
