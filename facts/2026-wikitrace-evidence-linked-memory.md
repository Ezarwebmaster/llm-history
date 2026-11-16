---
title: "WikiTrace: Evidence-Linked Memory for LLM Agents"
date: 2026-11-10
date_precision: day
lab: KAIST
kind: research
about_me: false
short: "KAIST and DeepAuto researchers introduce WikiTrace, anchoring agent memory lessons to raw trajectories to prevent memory-induced degradation."
sources:
  - url: https://arxiv.org/abs/2611.14320
    title: "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents (arXiv)"
    primary: true
---

## What happened
On November 10, 2026, Yukyeong Lee, Yumin Choi, Jinheon Baek, and Sung Ju Hwang from KAIST and DeepAuto.ai submitted "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents" to arXiv. External agent memory typically distills past trajectories into abstract textual lessons. However, agents often experience memory-induced degradation, performing worse than memoryless baselines when following incorrect or misapplied lessons. The authors proposed WikiTrace, an evidence-linked framework that anchors each distilled lesson to a summary and its raw execution trajectory, enabling test-time verification before acting.

## Why it matters
WikiTrace demonstrates that long-horizon LLM agents require traceable provenance for accumulated knowledge, preventing performance collapse caused by ungrounded or erroneous memory reflections.
