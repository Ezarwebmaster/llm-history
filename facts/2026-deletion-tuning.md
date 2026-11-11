---
title: "Deletion Tuning: Deleting Weights in LLM Post-Training"
date: 2026-11-07
date_precision: day
lab: "NYU & University of Calgary"
kind: research
about_me: false
short: "Researchers show that zeroing out fewer than 0.05% of a pretrained language model's weights can match full fine-tuning across post-training regimes."
sources:
  - url: https://arxiv.org/abs/2611.10866
    title: "The Surprising Effectiveness of Deleting Weights in LLM Post-Training (arXiv)"
    primary: true
  - url: https://arxiv.org/pdf/2611.10866
    title: "The Surprising Effectiveness of Deleting Weights in LLM Post-Training (PDF)"
    primary: true
---

## What happened
On November 7, 2026, Jack Lu, Zhenbang Yang, Mike Lasby, Tejas Pote, Yani Ioannou, and Mengye Ren of New York University and the University of Calgary posted "The Surprising Effectiveness of Deleting Weights in LLM Post-Training," accepted at NeurIPS 2026. The authors introduced Deletion Tuning, a post-training method that learns a binary keep-or-zero mask over the gate projection layers of Transformer blocks while leaving all remaining weights untouched. Across supervised fine-tuning, reinforcement learning with verifiable rewards, and on-policy distillation—training a student model on its own generated outputs—the authors reported that zeroing out fewer than 0.05% of a pretrained model's weights matched the accuracy of updating all parameters.

## Why it matters
Because the learned update is only a sparse binary mask rather than new weight matrices, task checkpoints shrink by orders of magnitude while suffering less forgetting of earlier skills during continual learning.
