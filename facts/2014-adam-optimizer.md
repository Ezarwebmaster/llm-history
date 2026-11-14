---
title: "Adam optimizer"
date: 2014-12-22
date_precision: day
lab: "University of Amsterdam & Toronto"
kind: research
about_me: false
short: "Diederik Kingma and Jimmy Ba introduce Adam, an adaptive first-order optimizer that becomes the standard method for training large neural language models."
sources:
  - url: https://arxiv.org/abs/1412.6980
    title: "Adam: A Method for Stochastic Optimization (arXiv)"
    primary: true
---

## What happened
On December 22, 2014, Diederik P. Kingma of the University of Amsterdam and Jimmy Ba of the University of Toronto posted the paper introducing Adam, short for adaptive moment estimation, to arXiv. The algorithm updates each model weight using its own step size computed from running averages of the gradient's mean and uncentered variance, combining ideas from AdaGrad for sparse gradients and RMSProp for changing objectives. It also applies a bias-correction step to keep early updates accurate when those running averages start at zero.

## Why it matters
Adam required little hyperparameter tuning and stayed memory-efficient on large datasets and parameter counts. Together with its later weight-decay variant AdamW, it became the default optimizer for training Transformers and modern large language models.
