---
title: "Tiny Aya"
date: 2026-02-17
date_precision: day
lab: Cohere
kind: model
open_weights: true
about_me: false
short: "Cohere Labs releases Tiny Aya, a 3.35-billion-parameter open-weight multilingual model family covering over 70 languages for local and edge devices."
specs:
  parameters: "3.35B"
  context: "8K tokens"
sources:
  - url: https://huggingface.co/CohereLabs/tiny-aya-global
    title: "CohereLabs/tiny-aya-global"
    primary: true
  - url: https://huggingface.co/collections/CohereLabs/tiny-aya
    title: "Tiny Aya - Cohere Labs Collection"
    primary: true
  - url: https://arxiv.org/abs/2603.11510
    title: "Tiny Aya: Bridging Scale and Multilingual Depth"
    primary: true
---

## What happened
On February 17, 2026, Cohere Labs released Tiny Aya, a 3.35-billion-parameter dense decoder-only transformer model family with an 8,192-token context window. It uses Grouped Query Attention (sharing key-value heads across query heads to reduce memory bandwidth) and a 262k-vocabulary tokenizer built for balanced script coverage. Released under a non-commercial CC-BY-NC-4.0 license, the lineup includes the pretrained Tiny Aya Base, the globally balanced instruction-tuned Tiny Aya Global, and three region-focused variants: Earth (Africa and West Asia), Fire (South Asia), and Water (Europe and Asia-Pacific). In March 2026, Cohere Labs researchers published the accompanying technical report on arXiv.

## Why it matters
Tiny Aya prioritizes equitable support for lower-resourced languages across more than 70 languages while remaining compact enough to run locally on laptops and smartphones.
