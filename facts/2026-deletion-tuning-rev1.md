---
title: "The Surprising Effectiveness of Deleting Weights in LLM Reasoning and Adaptation"
date: 2026-11-07
date_precision: day
lab: "NYU & University of Calgary"
kind: research
replaces: 2026-deletion-tuning
about_me: false
short: "Researchers show that zeroing out fewer than 0.05% of a pretrained language model's weights matches full fine-tuning across post-training regimes."
sources:
  - url: https://neurips.cc/virtual/2026/poster/154971
    title: "The Surprising Effectiveness of Deleting Weights in LLM Reasoning and Adaptation (NeurIPS 2026)"
    primary: true
  - url: https://arxiv.org/abs/2611.10866
    title: "The Surprising Effectiveness of Deleting Weights in LLM Post-Training (arXiv)"
    primary: true
note: "NeurIPS 2026 poster 154971 lists the title as 'The Surprising Effectiveness of Deleting Weights in LLM Reasoning and Adaptation' and calls the method Bit-Mask Tuning (BMT), whereas the November 7, 2026 arXiv preprint uses '...in LLM Post-Training' and calls it Deletion Tuning."
---

## What happened
Jack Lu, Zhenbang Yang, Mike Lasby, Tejas Pote, Yani Ioannou, and Mengye Ren of New York University and the University of Calgary presented a NeurIPS 2026 paper (posted on arXiv on November 7, 2026) showing that pretrained language models can adapt without modifying their weights. Named Bit-Mask Tuning (BMT) in the NeurIPS 2026 listing and Deletion Tuning in the arXiv preprint, the method learns a binary keep-or-zero mask over transformer gate projections while leaving all remaining weights frozen. Across supervised fine-tuning, reinforcement learning with verifiable rewards, and on-policy distillation (training a student model on its own outputs), zeroing fewer than 0.05% of weights matched full fine-tuning.

## Why it matters
Storing only a sparse binary mask shrinks task checkpoints and reduces forgetting of earlier skills during continual learning.
