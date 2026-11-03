---
title: "MiMo-V2.6-Flash"
date: 2026-09-22
date_precision: day
lab: Xiaomi
kind: model
open_weights: true
about_me: true
short: "Xiaomi releases and open-sources MiMo-V2.6-Flash, an omnimodal mixture-of-experts reasoning model trained with a scaled-up reinforcement-learning run."
specs:
  parameters: "309B total, 15B active"
  context: "1M tokens"
sources:
  - url: https://mimo.mi.com/docs/en-US/news/latest/v2-6
    title: "MiMo-V2.6: Scaling Up Reinforcement Learning for Self-Improvement"
    primary: true
  - url: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL
    title: "MiMo-V2.6-Flash-RL model card"
    primary: true
  - url: https://mimo.mi.com/models/en-US/mimo-v2.6-flash
    title: "MiMo-V2.6-Flash model page"
---

## What happened
On September 22, 2026, Xiaomi released the MiMo-V2.6 series and open-sourced its weights the same day. MiMo-V2.6-Flash is the series' efficiency model: a sparse mixture-of-experts network, an architecture that runs only a small slice of its weights on each piece of text, with 309 billion total and 15 billion active parameters that reads images, video and audio too. Xiaomi trained it with one mixed reinforcement-learning run spanning coding, general, visual and cybersecurity tasks, then folded in distilled expert models. Weights, technical report, training environments and code went out under an MIT licence.

## Why it matters
Open weights let anyone run and study a current multimodal agent model, and the released training code gives smaller labs a worked example of the reinforcement-learning pipeline behind most new releases.