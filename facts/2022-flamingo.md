---
title: "Flamingo"
date: 2022-04-28
date_precision: day
lab: DeepMind
kind: model
about_me: false
short: "DeepMind introduces Flamingo, an 80B visual language model that connects frozen vision and language models via gated cross-attention for few-shot learning."
specs:
  parameters: "3.2B, 9.3B, 80B"
note: "DeepMind published the Flamingo blog post on 2022-04-28 (kept for date), followed by the arXiv:2204.14198 preprint on 2022-04-29 and NeurIPS 2022 publication."
sources:
  - url: https://deepmind.google/blog/tackling-multiple-tasks-with-a-single-visual-language-model/
    title: "Tackling multiple tasks with a single visual language model"
    primary: true
  - url: https://arxiv.org/abs/2204.14198
    title: "Flamingo: a Visual Language Model for Few-Shot Learning"
    primary: true
---

## What happened
On April 28, 2022, DeepMind introduced Flamingo (3.2B, 9.3B, and 80B parameters), a visual language model family built for few-shot multimodal learning from interleaved images, videos, and text. To preserve pretrained capabilities, Flamingo bridges a frozen NFNet-F6 vision encoder and a frozen Chinchilla language model (1.4B, 7.1B, or 70B) using two trainable modules: a Perceiver Resampler (an attention block compressing variable-length visual features into fixed visual tokens) and gated cross-attention layers (layers regulated by learned gates initialized at zero). Trained on web-scraped corpora—43 million interleaved webpages (M3W), 1.8 billion ALIGN pairs, 312 million LTIP pairs, and 27 million VTP videos—Flamingo-80B set new few-shot marks on 16 benchmarks with four examples, beating fine-tuned models on six tasks with 32 examples.

## Why it matters
Flamingo established the frozen-backbone cross-attention recipe, showing one model can generalize across image and video tasks from a few examples without fine-tuning.
