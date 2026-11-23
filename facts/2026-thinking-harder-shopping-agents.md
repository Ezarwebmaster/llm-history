---
title: "Thinking Harder Doesn't Lead to Better Choices"
date: 2026-11-17
date_precision: day
lab: "University of Chicago"
kind: research
about_me: false
short: "University of Chicago researchers find that scaling reasoning effort in LLM shopping agents inflates stated confidence without improving choice accuracy."
sources:
  - url: https://arxiv.org/abs/2611.22033
    title: "Thinking Harder Doesn't Lead to Better Choices: Reasoning Effort Increases the Confidence but Not the Correctness of LLM Shopping Agents (arXiv)"
    primary: true
---

## What happened
On November 17, 2026, Adi Krishnamoorthy and X. Y. Han of the University of Chicago posted *Thinking Harder Doesn't Lead to Better Choices: Reasoning Effort Increases the Confidence but Not the Correctness of LLM Shopping Agents* (`arXiv:2611.22033`). The authors evaluated ten frontier language models acting as multimodal shopping agents—systems that inspect text descriptions and product images to pick an item—across three product-selection benchmarks built from WebShop, Amazon's SQID, and Wayfair's WANDS. Varying each model's reasoning effort (the amount of intermediate chain-of-thought compute spent before answering), they found that higher reasoning settings produced no statistically meaningful gain in product-choice correctness, while significantly increasing stated confidence and leading models to converge on the same wrong items.

## Why it matters
The study shows that allocating more test-time reasoning tokens in consumer agent tasks can worsen calibration—the alignment between stated confidence and actual accuracy—by making agents overconfident in wrong decisions.
