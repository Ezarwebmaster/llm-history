---
title: "Pythia"
date: 2023-04-03
date_precision: day
lab: EleutherAI
kind: model
open_weights: true
about_me: false
short: "EleutherAI releases Pythia, a suite of 16 open-weight language models from 70M to 12B parameters with 154 checkpoints each for interpretability research."
specs:
  parameters: "70M to 12B"
sources:
  - url: https://arxiv.org/abs/2304.01373
    title: "Pythia: A Suite for Analyzing Large Language Models Across Training and Scaling"
    primary: true
  - url: https://github.com/EleutherAI/pythia
    title: "EleutherAI/pythia on GitHub"
    primary: true
---

## What happened
On April 3, 2023, EleutherAI published the Pythia paper (`arXiv:2304.01373`) alongside an open-source suite of 16 autoregressive transformer language models spanning eight sizes from 70 million to 12 billion parameters (70M, 160M, 410M, 1B, 1.4B, 2.8B, 6.9B, and 12B) under the Apache 2.0 license. At each size, EleutherAI trained one model on The Pile and a second on a globally deduplicated version of The Pile, processing 299,892,736,000 tokens in the exact same data order. The group released 154 intermediate training checkpoints per model along with tools to reconstruct the training data loaders.

## Why it matters
Most open releases shared only final weights, hiding how capabilities and biases emerge. Pythia gave interpretability researchers a controlled, reproducible testbed across scale and training time for studying memorization, term-frequency effects, and gender bias.
