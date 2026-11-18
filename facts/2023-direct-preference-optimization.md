---
title: "Direct Preference Optimization"
date: 2023-05-29
date_precision: day
lab: "Stanford University"
kind: research
about_me: false
short: "Rafael Rafailov et al. introduce Direct Preference Optimization, aligning language models directly on preference data without training a separate reward model."
sources:
  - url: https://arxiv.org/abs/2305.18290
    title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model (arXiv)"
    primary: true
---

## What happened
On May 29, 2023, Rafael Rafailov, Archit Sharma, Eric Mitchell, Stefano Ermon, Christopher D. Manning, and Chelsea Finn at Stanford University submitted the Direct Preference Optimization (DPO) paper to arXiv (`arXiv:2305.18290`). Standard alignment pipelines used Reinforcement Learning from Human Feedback (RLHF), requiring a separate reward model trained on human comparisons followed by unstable reinforcement learning algorithms such as PPO to tune the policy. Rafailov and colleagues showed mathematically that the reward function can be expressed in closed form through the optimal policy itself. By substituting this relationship directly into the objective, DPO optimizes language models on pairs of preferred and dispreferred responses using a simple binary cross-entropy loss, bypassing reinforcement learning entirely while matching or outperforming RLHF on sentiment control and summarization.

## Why it matters
DPO simplified preference tuning into a stable supervised classification loss, making preference alignment far easier to train and broadly adopted across open-weight models.
