---
title: "Baseten bison-1 and groundhog-1"
date: 2026-11-20
date_precision: day
lab: "Baseten"
kind: model
open_weights: true
about_me: false
short: "Baseten releases bison-1 and groundhog-1, open-weight multimodal decision models built on Gemma 4 that score fixed choices over 128K-token inputs."
specs:
  parameters: "31B dense; 26B total, 4B active"
  context: "128K tokens"
sources:
  - url: https://www.baseten.co/blog/meet-bison-1-and-groundhog-1
    title: "Meet bison-1 and groundhog-1"
    primary: true
  - url: https://huggingface.co/baselabs/bison-1
    title: "baselabs/bison-1 on Hugging Face"
    primary: true
  - url: https://huggingface.co/baselabs/groundhog-1
    title: "baselabs/groundhog-1 on Hugging Face"
    primary: true
---

## What happened
On November 20, 2026, Baseten released bison-1 and groundhog-1, two open-weight multimodal decision models hosted on Hugging Face under MIT and Apache 2.0 terms alongside Baseten's Model APIs. Instead of generating free-form text, decision models inspect text and image inputs up to 131,072 tokens and output calibrated probabilities over fixed choices. Bison-1 is a 31B dense model post-trained from Google's Gemma 4 31B, while groundhog-1 adapts Gemma 4 26B-A4B, a mixture-of-experts network (activating a subset of parameters per token) with roughly 4B active parameters. Baseten reports that bison-1 scored 76 on the Artificial Analysis Decision Index v2.1 with a 0.14 Brier calibration score.

## Why it matters
Dedicated open-weight decision models bring calibrated scoring to routing, triage, and guardrail pipelines without the overhead of generative chat models.
