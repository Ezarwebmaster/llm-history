---
title: "CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies"
date: 2026-11-24
date_precision: day
lab: "UT Nuremberg & NVIDIA"
kind: research
about_me: false
short: "Researchers introduce CoT-Proxy, distilling long-horizon agent policies from closed teacher models using action traces and concise reasoning summaries."
sources:
  - url: https://arxiv.org/abs/2611.33148
    title: "CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies (arXiv)"
    primary: true
---

## What happened
On November 24, 2026, Dawid J. Kopiczko, Tijmen Blankevoort, and Yuki M. Asano posted "CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies" (arXiv:2611.33148). Addressing closed-source reasoning models whose chain-of-thought tokens are hidden, they demonstrated that student models can learn multi-step agent policies from teacher actions alone by keeping their reasoning block empty during imitation training, then freely reasoning in their own format at test time. Adding a "CoT-proxy"—a concise summary of the teacher's rationale—provided an intermediate supervisory signal. Distilling a frontier model into Qwen3-4B increased task success on AppWorld from 7% to 48% and on SWE-bench Verified from 3% to 28%.

## Why it matters
The method enables open models to acquire complex tool-use and coding policies from proprietary reasoning models without requiring access to private chain-of-thought traces.
