---
title: "Decision-Focused Reinforcement Learning for LLM Post-Training"
date: 2026-11-19
date_precision: day
lab: "University of Texas at Austin"
kind: research
about_me: false
short: "Researchers at the University of Texas at Austin introduce Decision-Focused Reinforcement Learning, post-training LLMs on downstream decision regret."
sources:
  - url: https://arxiv.org/abs/2611.25597
    title: "Decision-Focused Reinforcement Learning for LLM Post-Training (arXiv)"
    primary: true
---

## What happened
On November 19, 2026, Haotian Zhai and Liu Leqi at the University of Texas at Austin published "Decision-Focused Reinforcement Learning for LLM Post-Training." When language models predict parameters from unstructured text for downstream optimization problems, lower prediction error does not guarantee lower decision costs. Their Decision-Focused Reinforcement Learning (DFRL) framework uses negative downstream decision regret—the extra cost of a decision made from predicted parameters compared to the true optimal decision—as the reinforcement learning reward without requiring differentiable solvers. To avoid solving expensive optimization problems at every step, DFRL combines an approximate-reward warm-start with randomized exact solves. On an inventory planning task using H&M transactions and product descriptions, the authors report that DFRL reduced decision regret by 31.4% relative to supervised fine-tuning and 12.4% relative to the strongest conventional forecasting baseline.

## Why it matters
Training language models directly on downstream decision cost connects unstructured text reasoning with operations research.
