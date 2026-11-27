---
title: "Switch Transformer"
date: 2021-01-11
date_precision: day
lab: Google
kind: model
open_weights: true
about_me: false
short: "Google introduces Switch Transformer, a top-1 Mixture-of-Experts architecture scaling models to 1.6 trillion parameters with up to 7x faster training."
specs:
  parameters: "7B to 1.6T (1,571B)"
note: "The paper reports 1.6 trillion parameters in the text and 1,571B in Table 9 for Switch-C (and 7B in Table 9 vs. 7,410M in Table 8 for Switch-Base); both come from the same official paper."
sources:
  - url: https://arxiv.org/abs/2101.03961
    title: "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity"
    primary: true
  - url: https://www.jmlr.org/papers/v23/21-0998.html
    title: "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (JMLR)"
    primary: true
  - url: https://github.com/google-research/t5x
    title: "google-research/t5x on GitHub"
    primary: false
---

## What happened
On January 11, 2021, Google researchers William Fedus, Barret Zoph, and Noam Shazeer published Switch Transformer, a sparse Mixture-of-Experts (MoE) architecture where a learned router activates a subset of parameters per token. While prior MoE designs routed each token to at least two expert feed-forward networks, Switch Transformer routes each token to one expert (top-1 routing), cutting routing compute and cross-chip communication. Using selective precision—casting local router operations to `float32` while training the rest in `bfloat16`—plus smaller weight initialization and higher expert dropout, they pre-trained models on the Colossal Clean Crawled Corpus (C4) up to the 395B Switch-XXL (64 experts) and 1,571B (1.6T) Switch-C (2,048 experts), reaching up to 7x pre-training speedups over T5-Base/Large, 4x over T5-XXL, and gains across all 101 mT5 languages.

## Why it matters
Switch Transformer showed that top-1 sparse routing and `bfloat16` training could scale language models past one trillion parameters at constant per-token compute.
