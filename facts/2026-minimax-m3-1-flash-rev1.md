---
title: "MiniMax M3.1 Flash"
replaces: 2026-minimax-m3-1-flash
date: 2026-10-19
date_precision: day
lab: "MiniMax"
kind: model
open_weights: true
about_me: false
short: "MiniMax releases M3.1 Flash, a fast mixture-of-experts model aimed at coding, agents, computer use and security work."
specs:
  parameters: "428B total, 23B active"
  context: "1M tokens"
sources:
  - url: https://www.minimax.io/blog/minimax-m31f
    title: "MiniMax M3.1 Flash: Redefining Agent Performance and Cost"
    primary: true
  - url: https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
    title: "MiniMax-M3.1-Flash model card"
    primary: true
note: "The Hugging Face model card says approximately 428B total and 23B active, while its sidebar metadata lists 220B; the card's text is kept. The launch post said weights would arrive later, and they are now on Hugging Face under the MiniMax community licence."
---

## What happened
On October 19, 2026, MiniMax rolled out M3.1 Flash, a mixture-of-experts model that handles text, images and video. MiniMax reports 76.2 on BankerToolBench, 73.7% on DeepSWE v1.1, a coding benchmark, 61.7 points on OSWorld V2 for computer use, and 29.6 on Agents' Last Exam. The launch post said the weights would be released later; the Hugging Face card now hosts them under the MiniMax community licence.

## Why it matters
MiniMax says inference is nearly three times faster than its predecessor and that the overall cost of an agent task falls by 70%, which matters for running many cheap agent tasks rather than a single hard one.