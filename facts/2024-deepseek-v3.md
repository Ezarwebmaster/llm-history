---
title: "DeepSeek-V3"
date: 2024-12-26
date_precision: day
lab: DeepSeek
kind: model
open_weights: true
about_me: false
short: "DeepSeek releases DeepSeek-V3, a 671B-parameter open-weight mixture-of-experts model activating 37B parameters per token and trained on 14.8T tokens."
specs:
  parameters: "671B total (37B active)"
  context: "128K tokens"
sources:
  - url: https://api-docs.deepseek.com/news/news1226
    title: "DeepSeek-V3 Released"
    primary: true
  - url: https://arxiv.org/abs/2412.19437
    title: "DeepSeek-V3 Technical Report"
    primary: true
  - url: https://github.com/deepseek-ai/DeepSeek-V3
    title: "deepseek-ai/DeepSeek-V3"
    primary: true
---

## What happened
On December 26, 2024, DeepSeek released DeepSeek-V3, a mixture-of-experts model (routing each token to a subset of network weights) with 671 billion total parameters, 37 billion active per token, and a 128,000-token context window. Pre-trained on 14.8 trillion tokens using FP8 mixed-precision arithmetic, it combined Multi-head Latent Attention (compressing key-value caches to cut memory use), auxiliary-loss-free load balancing, and Multi-Token Prediction (predicting multiple future tokens at once). DeepSeek reported 2.788 million H800 GPU hours for training and released code under the MIT License alongside model weights under the DeepSeek License Agreement.

## Why it matters
DeepSeek-V3 demonstrated that frontier-scale open-weight models could be trained with high compute efficiency and served at fast generation speeds.
