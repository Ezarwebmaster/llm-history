---
title: "RSI-Prime: Training Models to Train Models"
date: 2026-11-17
date_precision: day
lab: "Sun Yat-sen University"
kind: research
about_me: false
short: "Researchers introduce RSI-Prime, a dataset of 350 training trajectories with decision-level loss masking to train language models to post-train models."
sources:
  - url: https://arxiv.org/abs/2611.23138
    title: "RSI-Prime: Training Models to Train Models (arXiv)"
    primary: true
---

## What happened
On November 17, 2026, Dewu Zheng, Yang Ye, Hongyu Zhang, Jun Yu, and Yanlin Wang from Sun Yat-sen University, Mind Lab, Chongqing University, and Harbin Institute of Technology, Shenzhen submitted "RSI-Prime: Training Models to Train Models" (`arXiv:2611.23138`). To study whether language models can autonomously run post-training experiments on target models, the authors built RSI-Prime, a dataset of 350 complete experimental trajectories across seven task categories. Each trajectory annotates the quality of individual experimental choices and applies decision-level loss masking, which excludes poor experimental decisions from the training loss so the model learns only from effective steps. Fine-tuning on RSI-Prime improved a GLM-5.3 baseline by 31.95% relatively on PostTrainBench, a benchmark for autonomous post-training.

## Why it matters
Filtering out flawed experimental choices lets models learn from real training runs without imitating failed hyperparameter or data decisions.
