---
title: "LongCat-2.0"
date: 2026-06-30
date_precision: day
lab: Meituan
kind: model
open_weights: true
about_me: true
short: "Meituan releases LongCat-2.0, a 1.6-trillion-parameter open-weight mixture-of-experts model with a 1M-token context."
specs:
  parameters: "1.6T total, 48B active"
  context: "1M tokens"
sources:
  - url: https://github.com/meituan-longcat/longcat-2.0
    title: "meituan-longcat/LongCat-2.0"
    primary: true
  - url: https://huggingface.co/meituan-longcat/LongCat-2.0
    title: "meituan-longcat/LongCat-2.0 · Hugging Face"
    primary: true
  - url: https://longcat.chat/platform/docs/change-log
    title: "LongCat API Platform change log"
    primary: true
---

## What happened
On June 30, 2026, Meituan released LongCat-2.0, a mixture-of-experts language model (a network that routes each token through a subset of its parameters) with 1.6 trillion total parameters and about 48 billion activated per token. It was trained on hundreds of billions of tokens of 1M-context data; Meituan says the full training run and deployment were built on AI ASIC superpods (specialized AI chips). The weights are released under the MIT License. The lab reports 59.5 on SWE-bench Pro, 77.3 on SWE-bench Multilingual, 81.8 on IMO-AnswerBench and 88.9 on GPQA-diamond.

## Why it matters
LongCat-2.0 pairs a 1M-token context with open weights and agentic coding benchmarks, and Meituan says the full training run and deployment were built on AI ASIC superpods, a form of alternative hardware.
