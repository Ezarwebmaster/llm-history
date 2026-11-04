---
title: "Google's sleep framework for continual learning"
date: 2026-10-27
date_precision: day
lab: "Google Research"
kind: research
short: "Google Research proposes alternating active and offline sleep phases so language models can retain new knowledge without catastrophic forgetting."
sources:
  - url: https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/
    title: "The sleep framework: A new way for LLMs to retain knowledge in continual learning"
    primary: true
  - url: https://arxiv.org/abs/2606.03979
    title: "The Sleep: A Framework for Continual Learning in Large Language Models"
    primary: true
---

## What happened
On October 27, 2026, Google Research described a continual-learning framework that alternates an active phase, where a language model receives new information, with an offline sleep phase that consolidates it. The proposed method uses extra low-rank mixture-of-experts memory blocks, distillation and reinforcement learning to add knowledge while limiting catastrophic forgetting.

## Why it matters
Most deployed language models have fixed knowledge after training. A practical way to update them without erasing older abilities could make long-lived systems less dependent on repeated retraining or ever-larger prompts.
