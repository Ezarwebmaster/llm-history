---
title: "Minerva"
replaces: 2022-minerva
date: 2022-06-30
date_precision: day
lab: Google Research
kind: model
open_weights: false
about_me: false
short: "Google introduces Minerva, PaLM models fine-tuned on 118 GB of technical papers and LaTeX for multi-step mathematical and scientific reasoning."
specs:
  parameters: "8B, 62B, 540B"
note: "The arXiv preprint (2206.14858) was submitted on 2022-06-29; Google Research published the official announcement blog post on 2022-06-30 (kept for date)."
sources:
  - url: https://research.google/blog/minerva-solving-quantitative-reasoning-problems-with-language-models/
    title: "Minerva: Solving Quantitative Reasoning Problems with Language Models"
    primary: true
  - url: https://arxiv.org/abs/2206.14858
    title: "Solving Quantitative Reasoning Problems with Language Models"
    primary: true
---

## What happened
On June 30, 2022, Google Research introduced Minerva, a family of language models (8B, 62B, and 540B parameters) specialized for quantitative and technical reasoning. Starting from pretrained PaLM checkpoints, Minerva underwent additional training on a 118 GB dataset of scientific papers from arXiv and web pages containing mathematical expressions with LaTeX and MathJax formatting intact. Paired with chain-of-thought prompting and majority voting over sampled reasoning paths (`maj1@k`), Minerva 540B set new benchmarks on high school and college STEM evaluations without external calculators, reaching 50.3% on MATH, 75.0% on MMLU-STEM, and 78.5% on GSM8K (58.8% single-sample `pass@1`).

## Why it matters
Minerva showed that continuing pretraining on technical literature with mathematical notation intact, combined with sampling and majority voting at inference time, substantially improved multi-step quantitative reasoning in general language models.
