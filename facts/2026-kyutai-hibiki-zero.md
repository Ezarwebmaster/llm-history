---
title: "Kyutai Hibiki-Zero"
date: 2026-02-12
date_precision: day
lab: "Kyutai"
kind: model
open_weights: true
about_me: false
short: "Kyutai releases Hibiki-Zero, an open simultaneous speech-to-speech translation model trained with reinforcement learning without word-aligned data."
sources:
  - url: https://kyutai.org/blog/2026-02-12-hibiki-zero
    title: "Hibiki-Zero: Simultaneous Speech-to-Speech Translation Without Aligned Data"
    primary: true
  - url: https://arxiv.org/abs/2602.11072
    title: "Simultaneous Speech-to-Speech Translation Without Aligned Data"
    primary: true
---

## What happened
On February 12, 2026, French open-science lab Kyutai announced Hibiki-Zero, an open simultaneous speech-to-speech translation model. Previous speech-to-speech translators required complex supervision on synthetic word-level alignments between spoken languages. Hibiki-Zero eliminates word alignments: it first pre-trains on sentence-aligned pairs at high latency, then uses Group Relative Policy Optimization (a reinforcement learning algorithm that scores candidate outputs against group averages) to dynamically optimize translation latency and speech naturalness. The model translates speech from French, Spanish, German, and Portuguese into English in real time with voice preservation, and Kyutai released its model weights and code.

## Why it matters
Eliminating word-alignment engineering allows real-time spoken translation systems to scale directly to diverse language families using reinforcement learning rather than hand-tuned heuristics.
