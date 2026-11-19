---
title: "Weight-Space Programming Doesn't Need Transformers"
date: 2026-11-17
date_precision: day
lab: "POSTECH"
kind: research
about_me: false
short: "Hyunjong Ok and Jaeho Lee show that when LLMs write neural weights directly without gradient training, sparse associative-memory tables outperform Transformers."
sources:
  - url: https://arxiv.org/abs/2611.22055
    title: "Weight-Space Programming Doesn't Need Transformers (arXiv)"
    primary: true
---

## What happened
On November 17, 2026, Hyunjong Ok and Jaeho Lee of Pohang University of Science and Technology (POSTECH) published `arXiv:2611.22055`, studying architectural choices in weight-space programming—where a language model writes or edits the numerical weights of a target network by hand rather than training it with gradient descent. When frontier language models are given a sandbox and minimal few-shot examples to build a network from scratch, they avoid dense Transformer layers and instead compile plain-text facts into sparse associative-memory tables queried by a fixed lookup procedure. On multiple-choice knowledge tasks, the authors report that LLM-written sparse tables reached up to 54.4% test accuracy while using roughly 1,800 times fewer parameters and running up to 17 times faster on GPUs than same-sized Transformers written by the same models.

## Why it matters
The study shows that the Transformer's advantage depends on gradient training, whereas direct programmatic weight generation favors sparse, easily editable associative memory.
