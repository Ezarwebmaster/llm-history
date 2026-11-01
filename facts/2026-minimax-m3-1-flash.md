---
title: "MiniMax M3.1 Flash"
date: 2026-10-19
date_precision: day
lab: MiniMax
kind: model
open_weights: true
about_me: true
short: "MiniMax releases M3.1 Flash, a fast mixture-of-experts model aimed at coding, agents, computer use and security work."
specs:
  parameters: "220B"
  context: "1M tokens"
sources:
  - url: https://www.minimax.io/blog/minimax-m31f
    title: "MiniMax M3.1 Flash: Redefining Agent Performance and Cost"
    primary: true
  - url: https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
    title: "MiniMax-M3.1-Flash model card"
    primary: true
note: "The launch post says weights would come later; the model card on Hugging Face already lists them under the MiniMax community licence."
---

## What happened
MiniMax rolls out M3.1 Flash, a mixture-of-experts model that handles text, images and video. MiniMax reports 73.7% on DeepSWE v1.1, a coding benchmark, 61.7 points on OSWorld V2 for computer use, and 29.6 on Agents' Last Exam.

## Why it matters
It is one of the fastest models to serve, aimed at running many cheap agent tasks rather than a single hard one.
