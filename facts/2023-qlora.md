---
title: "QLoRA: Efficient Finetuning of Quantized LLMs"
date: 2023-05-23
date_precision: day
lab: University of Washington
kind: research
about_me: false
short: "University of Washington researchers introduce QLoRA, cutting memory enough to fine-tune 65B-parameter language models on a single 48GB GPU."
sources:
  - url: https://arxiv.org/abs/2305.14314
    title: "QLoRA: Efficient Finetuning of Quantized LLMs (arXiv)"
    primary: true
---

## What happened
On May 23, 2023, Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, and Luke Zettlemoyer at the University of Washington submitted "QLoRA: Efficient Finetuning of Quantized LLMs" to arXiv. QLoRA compresses a frozen pretrained model into 4-bit NormalFloat (NF4)—a data type designed for normally distributed weights—and backpropagates gradients only through small low-rank adapter matrices. It adds Double Quantization, which compresses the quantization scaling constants themselves, and Paged Optimizers, which offload optimizer states to CPU memory during memory spikes. Together, these techniques enabled fine-tuning a 65-billion-parameter LLaMA model on a single 48GB GPU without degrading accuracy relative to 16-bit fine-tuning, producing the Guanaco model (99.3% of ChatGPT's score on the Vicuna benchmark).

## Why it matters
QLoRA made adapting tens-of-billions-of-parameters open-weight language models practical on single GPUs rather than multi-GPU clusters.
