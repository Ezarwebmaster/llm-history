---
title: "Chinchilla"
date: 2022-03-29
date_precision: day
lab: DeepMind
kind: research
short: "For a fixed compute budget, a smaller model trained on more data beats a bigger one."
specs:
  parameters: "70B"
sources:
  - url: https://arxiv.org/abs/2203.15556
    title: "Training Compute-Optimal Large Language Models"
    primary: true
---

## What happened
DeepMind trains Chinchilla, 70 billion parameters on 1.4 trillion tokens, and it outperforms the 280-billion-parameter Gopher.

## Why it matters
Labs shifted their budgets from parameters to training data.
