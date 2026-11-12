---
title: "Olmo-core 3"
date: 2026-10-01
date_precision: day
lab: "Allen Institute for AI (Ai2)"
kind: research
about_me: false
short: "Ai2 releases Olmo-core 3, an open distributed training framework engineered to scale Mixture-of-Experts language models to the trillion-parameter range."
sources:
  - url: https://allenai.org/blog/olmocore3
    title: "Olmo-core 3: Open infrastructure for trillion-parameter MoEs (Ai2 blog)"
    primary: true
  - url: https://github.com/allenai/olmo-core
    title: "allenai/olmo-core GitHub repository"
    primary: true
---

## What happened
On October 1, 2026, the Allen Institute for AI (Ai2) released Olmo-core 3, a redesigned open-source PyTorch training stack for Mixture-of-Experts (MoE) language models—architectures that route each token through only a subset of specialized sub-networks rather than the entire network. Instead of repeatedly gathering and resharding model weights across GPUs for each small training batch as Olmo-core 2 did, Olmo-core 3 keeps expert parameters resident on dedicated GPUs and routes data payloads directly to them. Ai2 reports that this design reaches about 2.7 times the training throughput of Olmo-core 2 for the same model configuration on the same number of GPUs.

## Why it matters
Reducing cross-GPU communication overhead makes pretraining trillion-parameter sparse language models practical for open-science research groups without hyperscaler-scale clusters.
