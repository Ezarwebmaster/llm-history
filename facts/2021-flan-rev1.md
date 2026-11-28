---
title: "FLAN"
replaces: 2021-flan
date: 2021-09-03
date_precision: day
lab: Google Research
kind: model
open_weights: false
about_me: false
short: "Google Research introduces FLAN, instruction-tuning a 137B language model across 62 datasets to substantially improve zero-shot performance on unseen tasks."
specs:
  parameters: "137B"
note: "Google researchers submitted the FLAN paper to arXiv on 2021-09-03 and published the accompanying Google Research blog post on 2021-10-06; the paper's initial submission date is kept for date."
sources:
  - url: https://arxiv.org/abs/2109.01652
    title: "Finetuned Language Models Are Zero-Shot Learners"
    primary: true
  - url: https://research.google/blog/introducing-flan-more-generalizable-language-models-with-instruction-fine-tuning/
    title: "Introducing FLAN: More generalizable Language Models with Instruction Fine-Tuning"
    primary: true
---

## What happened
On September 3, 2021, Google Research published "Finetuned Language Models Are Zero-Shot Learners" by Jason Wei and colleagues, introducing FLAN (Finetuned Language Net). While large pretrained models like GPT-3 relied primarily on few-shot prompting, FLAN demonstrated instruction tuning: finetuning a 137-billion-parameter pretrained LaMDA-PT decoder-only language model on 62 natural language processing datasets grouped into 12 task clusters using natural language prompt templates. Evaluated zero-shot on held-out task clusters, FLAN improved over its untuned 137B baseline on 21 of 25 tasks—trailing on completion-formatted benchmarks such as HellaSwag, ReCoRD, and WSC273—while surpassing zero-shot 175B GPT-3 on 20 of 25 datasets and beating few-shot GPT-3 on ANLI, RTE, BoolQ, AI2-ARC, OpenbookQA, and StoryCloze.

## Why it matters
FLAN established instruction tuning as a foundational technique for aligning language models with user intent, showing that multi-task instruction finetuning generalizes zero-shot to unseen task types.
