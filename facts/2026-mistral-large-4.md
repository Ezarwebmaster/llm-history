---
title: "Mistral Large 4"
date: 2026-10-06
date_precision: day
lab: "Mistral AI"
kind: model
open_weights: true
about_me: true
short: "Mistral AI launches Mistral Large 4 as a public preview: a 1-trillion-parameter multimodal mixture-of-experts model trained in Europe."
specs:
  parameters: "1.05T total, 52B active"
  context: "1M tokens"
sources:
  - url: https://mistral.ai/news/mistral-large-4/
    title: "Introducing Mistral Large 4"
    primary: true
  - url: https://docs.mistral.ai/models/mistral-large-4-0
    title: "Mistral Large 4 - Mistral AI Docs"
    primary: false
  - url: https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
    title: "mistralai/Mistral-Large-4-1T-A52B - Hugging Face"
    primary: false
---

## What happened
On October 6, 2026, Mistral AI launched a public preview of Mistral Large 4, nicknamed "Le Chonk": a natively multimodal mixture-of-experts model (an architecture that activates only part of its weights for each token) with 1.05 trillion total and 52 billion active parameters, trained from scratch on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own European datacenters. It reads text and images, is fluent in more than 160 languages, and was served through the Mistral API with a 1M-token context window. Mistral said the downloadable weights would follow by the end of the month; they were released on October 29, 2026.

## Why it matters
It is Mistral's largest model to date and its first frontier-class model trained entirely on European infrastructure, aimed at sovereign AI: organizations that want to inspect, customize and run the model under their own control.
