---
title: "Efficient System One Models via Adaptive Computation"
date: 2026-11-12
date_precision: day
lab: "Nanyang Technological University"
kind: research
about_me: false
short: "Minh-Anh Nguyen introduces NestOne, training language models with shared prefix submodels and exit gates for fast decision tasks."
sources:
  - url: https://arxiv.org/abs/2611.16321
    title: "From Large Language Models to Efficient System One Models via Adaptive Computation (arXiv)"
    primary: true
---

## What happened
On November 12, 2026, Minh-Anh Nguyen at Nanyang Technological University published "From Large Language Models to Efficient System One Models via Adaptive Computation" on arXiv. Converting a language model into a fast classifier for tasks like routing or safety checks usually replaces only the output layer while running every input through the full stack of neural layers. Analyzing where decision information forms, Nguyen reported that intermediate layers hold most of the signal and that removing the final six layers caused no accuracy loss in tested models. The paper proposed NestOne, which jointly trains a full model alongside shallower submodels that share its final layers and decision head via self-distillation (teaching shallower exits from the full model's predictions), paired with a lightweight gate that stops computation early when fewer layers suffice.

## Why it matters
Adaptive layer exits let language-model routers and classifiers match compute cost to decision difficulty without maintaining separate smaller models.
