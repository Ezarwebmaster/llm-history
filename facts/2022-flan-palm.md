---
title: "Flan-PaLM"
date: 2022-10-20
date_precision: day
lab: Google Research
kind: model
open_weights: false
about_me: false
short: "Google Research introduces Flan-PaLM, instruction-tuning PaLM up to 540B parameters on 1,836 tasks and chain-of-thought data for +9.4% average gains."
specs:
  parameters: "8B, 62B, 540B"
note: "arXiv:2210.11416 introduced Flan-PaLM on 2022-10-20 (kept for date), Google Research posted its blog overview on 2022-11-29, and JMLR published the journal version in 2024. The blog rounds the four-suite average to 58.4% versus 58.5% in Table 3 of the paper."
sources:
  - url: https://research.google/blog/better-language-models-without-massive-compute/
    title: "Better Language Models Without Massive Compute"
    primary: true
  - url: https://jmlr.org/papers/v25/23-0870.html
    title: "Scaling Instruction-Finetuned Language Models (JMLR)"
    primary: true
  - url: https://arxiv.org/abs/2210.11416
    title: "Scaling Instruction-Finetuned Language Models (arXiv)"
    primary: false
---

## What happened
On October 20, 2022, Google Research introduced Flan-PaLM in "Scaling Instruction-Finetuned Language Models" by Hyung Won Chung and colleagues, scaling instruction finetuning (training on tasks phrased as natural-language prompts) across 8B, 62B, and 540B PaLM checkpoints. The team expanded the mixture to 1,836 tasks from 473 datasets, mixing zero-shot, few-shot, and nine chain-of-thought datasets (examples showing step-by-step reasoning) while using just 0.2% of PaLM 540B's pre-training compute. Flan-PaLM 540B beat untuned PaLM 540B by 9.4 percentage points on average across four held-out suites (MMLU, BBH, TyDiQA, and MGSM), reaching 72.2% on five-shot MMLU with direct prompting and a state-of-the-art 75.2% with chain-of-thought and self-consistency.

## Why it matters
Flan-PaLM proved that adding small amounts of diverse instruction and chain-of-thought data unlocked major reasoning and zero-shot gains even at 540B scale, establishing instruction tuning as standard post-training practice.
