---
title: "CurvDelta restricts parameter updates to preserve general LLM capabilities"
date: 2026-11-18
date_precision: day
lab: "SUFE, Alibaba & SUSTech"
kind: research
about_me: false
short: "Zeguan Xiao and collaborators introduce CurvDelta and CurvLoRA, projecting weight updates into a low-curvature subspace for surgical learning and unlearning."
sources:
  - url: https://arxiv.org/abs/2611.24654
    title: "CurvDelta: Low-Curvature Delta Modeling For Surgical Learning and Unlearning (arXiv)"
    primary: true
---

## What happened
On November 18, 2026, Zeguan Xiao, Zhuocheng Liang, Yun Chen, Yong Wang, Guanhua Chen, and Pinyan Lu from Shanghai University of Finance and Economics (SUFE), Alibaba Group, and Southern University of Science and Technology (SUSTech) published "CurvDelta: Low-Curvature Delta Modeling For Surgical Learning and Unlearning" on arXiv. Instead of relying on post-hoc regularization penalties to keep a language model from losing general skills during fine-tuning or unlearning, CurvDelta builds capability preservation directly into the weight update parameterization. Using Kronecker-factored approximate curvature (K-FAC) to estimate the local geometry of the preservation loss around the base model, the method restricts full updates (CurvDelta) or low-rank adapters (CurvLoRA) to a low-curvature subspace where general performance stays nearly invariant.

## Why it matters
Fine-tuning on new reasoning or coding tasks—or removing sensitive data on unlearning benchmarks like TOFU and MUSE—often damages unrelated knowledge. Constraining updates to low-curvature directions protects baseline capabilities structurally without full retraining.
