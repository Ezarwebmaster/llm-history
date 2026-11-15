---
title: "Self-Organized Memory (SoMem)"
date: 2026-11-09
date_precision: day
lab: "City University of Hong Kong & Tencent"
kind: research
about_me: false
short: "Researchers introduce SoMem, an agent framework where models organize their own memory as linked documents with automated temporal and relational views."
sources:
  - url: https://arxiv.org/abs/2611.11929
    title: "Can LLM Agents Organize Their Own Memory? (arXiv)"
    primary: true
  - url: https://github.com/Qi202/SoMem
    title: "Qi202/SoMem (GitHub)"
    primary: true
---

## What happened
On November 9, 2026, researchers from City University of Hong Kong and Tencent Jarvis Lab published "Can LLM Agents Organize Their Own Memory?" (`arXiv:2611.11929`) and introduced SoMem. Instead of storing interactions in fixed schemas or raw text buffers, SoMem enables agents to autonomously structure external memory as linked documents. Agents decide how to summarize, group, and revise entries, maintaining explicit links to dialogue logs as evidence. The runtime verifies updates and derives temporal, relational, and recency views. On LoCoMo, BEAM-100K, and LongMemEval-S, SoMem improved task accuracy by up to 3.1 percentage points over prior baselines.

## Why it matters
Fixed schemas break down across diverse, long-horizon tasks. Letting models organize and cross-reference their own documentation makes memory verifiable, modular, and reusable across different architectures without manual schema design.
