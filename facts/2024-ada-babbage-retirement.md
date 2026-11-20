---
title: "Original Ada and Babbage API models retire"
date: 2024-01-04
date_precision: day
lab: OpenAI
kind: product
about_me: false
short: "OpenAI retires the original ada and babbage completion models, directing both to babbage-002."
sources:
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI API deprecations"
    primary: false
  - url: https://openai.com/index/gpt-4-api-general-availability/
    title: "GPT-4 API general availability and deprecation of older models"
    primary: true
---

## What happened
The original `ada` and `babbage` GPT-3 models reached their documented shutdown date. OpenAI mapped both to `babbage-002`; its announcement said applications using their stable base-model names would be upgraded automatically. Developers using custom fine-tuned models needed to train replacements.

## Why it matters
This migration distinguishes the original models from their successors. `text-ada-001` and `text-babbage-001` were separate completion models with a different recommended replacement, `gpt-3.5-turbo-instruct`. Embedding models with Ada or Babbage in their names also had separate migration paths. Neither a shared name nor a shared retirement date makes those models interchangeable.
