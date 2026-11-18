---
title: "Domain-Specific Inductive Biases for Language Models"
date: 2026-11-02
date_precision: day
lab: "Idiap, EPFL & University of Adelaide"
kind: research
about_me: false
short: "Damien Teney and colleagues show that tuning learned spline activation functions to specific data domains improves small language model pretraining."
sources:
  - url: https://arxiv.org/abs/2611.03756
    title: "Language Models Can Benefit from Domain-Specific Inductive Biases (arXiv)"
    primary: true
---

## What happened
On November 2, 2026, Damien Teney, Liangze Jiang, Zachary Shinnick, Hemanth Saratchandran, and Simon Lucey from Idiap Research Institute, EPFL, and the University of Adelaide submitted "Language Models Can Benefit from Domain-Specific Inductive Biases" (`arXiv:2611.03756`), accepted to the NeurIPS 2026 Position Paper Track. To test whether a single transformer architecture suits every pretraining domain equally, the authors replaced fixed activation functions (the mathematical gates inside attention and feed-forward layers) with parameterized linear splines (piecewise linear curves learned from data) and trained small language models from scratch across seven datasets covering web text, source code, and mathematics. Models tuned for one domain improved data efficiency there and transferred across related text corpora such as FineWeb and TinyStories, whereas activations tuned on mathematics transferred poorly to natural language.

## Why it matters
The findings challenge the assumption that one uniform transformer architecture is optimal for all pretraining data, showing that domain-tailored biases can improve sample efficiency.
