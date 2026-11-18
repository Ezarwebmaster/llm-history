---
title: "SEA-LION v4.5"
date: 2026-05-19
date_precision: day
lab: "AI Singapore"
kind: model
open_weights: true
about_me: false
replaces: 2026-sea-lion-v4-5
short: "AI Singapore releases Qwen-SEA-LION-v4.5-27B-IT, an MIT-licensed multimodal reasoning model adapted for Southeast Asian languages with a 262k-token context."
specs:
  parameters: "27B"
  context: "262k tokens"
sources:
  - url: https://huggingface.co/aisingapore/Qwen-SEA-LION-v4.5-27B-IT
    title: "Qwen-SEA-LION-v4.5-27B-IT Model Card"
    primary: true
---

## What happened
On May 19, 2026, AI Singapore updated and published Qwen-SEA-LION-v4.5-27B-IT under an MIT license. Built on the 27-billion-parameter Qwen3.6-27B dense architecture combining linear and full attention, it was post-trained through distillation (training a smaller model to match a larger one's outputs) from Qwen3.5-397B-A17B and model merging on the SEA-Instruct-2602 dataset. It supports a 262k-token context window, unified vision-language input, configurable thinking modes, and English alongside Burmese, Indonesian, Filipino, Malay, Tamil, Thai, and Vietnamese.

## Why it matters
Supported by Singapore's National Research Foundation and IMDA under the National Large Language Model Funding Initiative, SEA-LION (Southeast Asian Languages In One Network) provides open-weight multimodal models tailored to Southeast Asian languages and cultures. The model card notes it has not been safety-aligned, leaving safety fine-tuning to downstream adopters.
