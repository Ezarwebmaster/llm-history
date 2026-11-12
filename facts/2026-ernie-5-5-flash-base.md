---
title: "ERNIE-5.5-Flash-Base"
date: 2026-11-05
date_precision: day
lab: Baidu
kind: model
open_weights: true
about_me: false
short: "Baidu releases ERNIE-5.5-Flash-Base, an open-weight 280B-parameter sparse Mixture-of-Experts pretraining checkpoint activating 14B parameters per token."
specs:
  parameters: "280B total (14B active)"
  context: "1M tokens"
sources:
  - url: https://huggingface.co/baidu/ERNIE-5.5-Flash-Base
    title: "baidu/ERNIE-5.5-Flash-Base on Hugging Face"
    primary: true
---

## What happened
On November 5, 2026, Baidu released the open weights of ERNIE-5.5-Flash-Base on Hugging Face in BF16 and FP8 formats. Built as a sparse Mixture-of-Experts model—where a router activates only a subset of specialized sub-networks for each token—it contains 280 billion total parameters across 43 layers and activates 14 billion parameters per token. Baidu states the model was pretrained from scratch on 33.5 trillion tokens with a 128,000-token pretraining context that scales to 1 million tokens for fine-tuning and inference, and published as a raw pretraining checkpoint before instruction tuning or reinforcement learning. On November 11, 2026, Baidu followed it with ERNIE 5.5 Flash Preview, a post-trained variant on its Qianfan API.

## Why it matters
Releasing an unaligned, end-of-pretraining Mixture-of-Experts checkpoint gives researchers a clean starting point for custom post-training and domain adaptation without having to undo a provider's built-in alignment.
