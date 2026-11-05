---
title: "MiMo-V2.6-Pro"
date: 2026-09-22
date_precision: day
lab: Xiaomi
kind: model
open_weights: true
about_me: false
short: "Xiaomi releases and open-sources MiMo-V2.6-Pro, a 1.02-trillion-parameter omnimodal mixture-of-experts reasoning model under the MIT License."
specs:
  parameters: "1.02T total, 42B active"
  context: "1M tokens"
sources:
  - url: https://mimo.xiaomi.com/mimo-v2-6
    title: "Introducing MiMo-V2.6 series"
    primary: true
  - url: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL
    title: "XiaomiMiMo/MiMo-V2.6-Pro-RL on Hugging Face"
    primary: true
---

## What happened
On September 22, 2026, Xiaomi released MiMo-V2.6-Pro as the flagship of its MiMo-V2.6 series and published its weights under the MIT License. It is a sparse mixture-of-experts model with 1.02 trillion total parameters and 42 billion active per token, taking text, image, audio, and video inputs across a 1-million-token context window. Xiaomi trained the model with a large-scale reinforcement-learning pipeline across software engineering, visual reasoning, and cybersecurity tasks, reporting a score of 71.9% on the DeepSWE v1.1 coding benchmark in its comparison table.

## Why it matters
Releasing a trillion-parameter omnimodal reasoning model under an open MIT license gave researchers and enterprises a self-hostable flagship alternative alongside Xiaomi's smaller Flash variant.
