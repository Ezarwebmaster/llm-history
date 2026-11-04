---
title: "Sarvam Prism"
date: 2026-11-03
date_precision: day
lab: "Sarvam AI"
kind: model
open_weights: true
specs:
  parameters: "105B base"
short: "Sarvam AI releases Prism, an open-weight decision model built on Sarvam 105B that scores options quickly instead of generating text."
sources:
  - url: https://www.sarvam.ai/blogs/sarvam-prism
    title: "Introducing Sarvam Prism"
    primary: true
---

## What happened
On 3 November 2026 Sarvam AI released Prism, which it calls a System One decision model, built as a fine-tune (extra training on a specific task) of its Sarvam 105B base model. Instead of writing an answer word by word, Prism takes a situation, a question and a set of options and returns a probability for each option in one pass. Sarvam says it averaged 71.8 across three decision indices with a median response time of 44 milliseconds on one NVIDIA B200 chip, and that its weights are on Hugging Face under the Apache 2.0 licence.

## Why it matters
Many workplace tasks are choices between given options, such as routing a support request. A fast model that reports how confident it is, and whose stated confidence Sarvam says matches its real error rate, can be trusted to act alone only when it is sure.
