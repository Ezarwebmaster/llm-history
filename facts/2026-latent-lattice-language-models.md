---
title: "Latent Lattice Language Models add persistent state within layers"
date: 2026-11-16
date_precision: day
lab: Duggal and collaborators
kind: research
about_me: false
short: "A paper explores persistent computational states within language-model layers as another way to increase their capacity."
sources:
  - url: https://arxiv.org/abs/2611.21608
    title: "Latent Lattice Language Models"
    primary: true
---

## What happened
Shivam Duggal and collaborators submitted Latent Lattice Language Models on November 16, 2026. Their method adds states to each layer that persist as successive tokens arrive and influence how the layer processes information. In experiments training on 20 billion FineWeb-Edu tokens, a 406-million-parameter model reduced validation perplexity from 15.41 to 14.40 compared with a model with the same parameter count. Lower perplexity means better prediction of the evaluation text.

## Why it matters
The paper investigates increasing the amount of active state a model maintains, alongside familiar ways of adding more layers or computation. Its reported improvements across several architectures suggest a research direction for language-model design. These were controlled training experiments, rather than evidence of a broadly deployed assistant.
