---
title: "TranslateGemma"
date: 2026-01-15
date_precision: day
lab: Google
kind: model
open_weights: true
about_me: false
short: "Google releases TranslateGemma, open-weight 4B, 12B, and 27B translation models built on Gemma 3 via two-stage fine-tuning across 55 languages."
specs:
  parameters: "4B, 12B, 27B"
  context: "2K tokens"
note: "Google submitted the TranslateGemma technical report (arXiv:2601.09012 v1) on 2026-01-13 and officially launched the models and blog post on 2026-01-15 (kept for date)."
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/translategemma/
    title: "TranslateGemma: A new suite of open translation models"
    primary: true
  - url: https://arxiv.org/abs/2601.09012
    title: "TranslateGemma Technical Report"
    primary: true
  - url: https://huggingface.co/google/translategemma-27b-it
    title: "google/translategemma-27b-it on Hugging Face"
    primary: true
---

## What happened
On January 15, 2026, Google released TranslateGemma (4B, 12B, and 27B parameters), an open-weight machine translation family adapted from Gemma 3 and distributed on Hugging Face, Kaggle, and Vertex AI. The models use two-stage post-training: supervised fine-tuning on human translations (SMOL and GATITOS) and Gemini 2.5 Flash synthetic parallel data filtered from 128 candidates via MetricX-24-QE (a learned translation quality estimator), followed by reinforcement learning combining sequence- and token-level rewards from MetricX-24-XXL-QE, Gemma-AutoMQM-QE, ChrF, a naturalness autorater, and a generalist reward model. Across 55 WMT24++ language pairs (plus nearly 500 trained pairs), TranslateGemma cut MetricX error rates by 23.5%–25.9% over Gemma 3—with 12B (3.60 MetricX, 83.5 COMET22) beating Gemma 3 27B (4.04 MetricX, 83.1 COMET22)—and improved Vistra image translation without multimodal fine-tuning.

## Why it matters
TranslateGemma showed that synthetic quality-filtered data and token-level multi-reward RL let compact open models beat baselines over twice their size across 55 languages.
