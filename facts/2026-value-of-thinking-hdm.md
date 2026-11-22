---
title: "Hybrid Decision Models (Zero-or-T Thinking)"
date: 2026-11-12
date_precision: day
lab: "Huawei Noah's Ark Lab, Liverpool & UCL"
kind: research
about_me: false
short: "Researchers propose Hybrid Decision Models that decide in one forward pass whether to answer directly or run full chain-of-thought reasoning."
sources:
  - url: https://arxiv.org/abs/2611.16961
    title: "The Value of Thinking: Learning When to Reason in Hybrid Decision Models (arXiv)"
    primary: true
---

## What happened
On November 12, 2026, Zhengxu Yu, Ke Xu, Meng Fang, Haitham Ammar, Weilin Luo, and Jun Wang published *The Value of Thinking: Learning When to Reason in Hybrid Decision Models* (`arXiv:2611.16961`). Instead of shortening explicit chains of thought, their "zero-or-T thinking" Hybrid Decision Model (HDM) pairs a frozen backbone with a lightweight self-routing block that either answers immediately from a single forward pass ("implicit thinking") or runs full T-token autoregressive reasoning when expected utility exceeds a per-request cost threshold. They also introduce Calibrated Decision Policy Optimisation (CDPO) to train the router from episode returns. On JevBench, HDM-4B scored 0.857 versus 0.851 while cutting median latency by 72.5% (0.179s vs. 0.652s); on MiniWoB, HDM-27B cut token cost by 80.1%.

## Why it matters
Skipping explicit reasoning tokens altogether on routine inputs lowers agent latency and compute cost while reserving full deliberation for harder steps.
