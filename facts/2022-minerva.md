---
title: "Minerva"
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
On June 30, 2022, Google Research introduced Minerva, a family of language models (8B, 62B, and 540B parameters) specialized for quantitative and technical reasoning. Starting from pre-trained PaLM checkpoints, Minerva underwent further training on a 118 GB dataset of scientific papers from arXiv and web pages containing mathematical expressions with LaTeX and MathJax notation preserved. Combined with chain-of-thought prompting and majority voting over sampled reasoning paths, Minerva 540B achieved state-of-the-art results on high school and undergraduate STEM benchmarks, scoring 50.3% on the MATH competition benchmark and 75% on GSM8K without external calculator tools.

## Why it matters
Minerva demonstrated that training on technical literature while preserving mathematical formatting enabled general language models to solve complex, multi-step scientific and mathematical problems.
