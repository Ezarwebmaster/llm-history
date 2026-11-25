---
title: "Attention Process Reward Model for LLM Reinforcement Learning"
date: 2026-11-23
date_precision: day
lab: "Zhejiang University & Huawei"
kind: research
about_me: false
short: "Researchers introduce the Attention Process Reward Model, scoring internal hidden states and attention maps rather than surface text during LLM RL."
sources:
  - url: https://arxiv.org/abs/2611.30627
    title: "From Rewarding What Models Say to How They Think: Attention Process Reward Model for LLM Reinforcement Learning (arXiv)"
    primary: true
---

## What happened
On November 23, 2026, Kairong Han, Nuanqiao Shan, Kun Kuang, and collaborators at Zhejiang University and Huawei Noah's Ark Lab posted "From Rewarding What Models Say to How They Think: Attention Process Reward Model for LLM Reinforcement Learning" (arXiv:2611.30627). They identified textual reward aliasing, where distinct internal reasoning pathways produce identical text and receive the same reward under conventional text-only reward models. Their 46-million-parameter Attention Process Reward Model (APRM) combines an attention-fused concept pooler with an edge-biased graph attention network—a neural layer that passes messages across connected nodes—to score internal hidden states and attention maps during reinforcement learning, yielding an average pass@8 accuracy gain of 2.88% across reasoning benchmarks.

## Why it matters
Evaluating internal attention states directly rather than grading only generated tokens gives reinforcement learning pipelines a denser signal for distinguishing sound multi-step reasoning from lucky surface outputs.
