---
title: "LatentRec"
date: 2026-11-05
date_precision: day
lab: "Su and collaborators"
kind: research
about_me: false
short: "LatentRec trains a language model to recommend items without generating a written reasoning trace for each recommendation."
sources:
  - url: https://arxiv.org/abs/2611.07866
    title: "Do Recommenders Need to Think in Words? Latent Reasoning for Efficient LLM-Based Recommendation"
    primary: true
---

## What happened
Hongyang Su and colleagues posted a preprint on training a language model to recommend items. An extra module practices intermediate reasoning in the model’s internal representations. During training, the researchers teach each step to predict the start of a code that identifies the target item. They discard the extra module when serving the trained model.

## Why it matters
On three Amazon recommendation datasets, the authors report that the correct item appeared in the top ten more often than with their comparison model, which distilled written reasoning. The experiment tests whether extra work during training can reduce the work needed for each recommendation.
