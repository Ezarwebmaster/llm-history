---
title: "EvoDisco discovers strategies for evolving agent memory"
date: 2026-11-17
date_precision: day
lab: "City University of Hong Kong & Huawei"
kind: research
about_me: false
short: "Researchers from City University of Hong Kong and Huawei propose EvoDisco, learning how LLM agents should reorganize and evolve their memory over time."
sources:
  - url: https://arxiv.org/abs/2611.22102
    title: "EvoDisco: Strategy Discovery for Evolving Agent Memory"
    primary: true
---

## What happened
On November 17, 2026, researchers from City University of Hong Kong and Huawei Technologies posted EvoDisco to arXiv. Rather than updating an agent's memory using fixed human-written rules, EvoDisco learns a policy that decides when and how to apply four semantic memory operations: Abstract (compressing related entries), Refine (splitting overloaded memories), Bridge (linking weakly connected experiences), and Reframe (reorganizing retrieved reasoning chains). The policy trains using a two-level fitness signal that balances retrieval-quality gains against memory complexity and long-horizon decision utility. On ALFWorld, WebShop, and LifelongAgentBench, the authors report gains over online memory baselines such as MemP and MemRL.

## Why it matters
Long-running language-model agents often suffer when flat memory stores grow noisy and dilute context. Treating memory maintenance as a learned strategy rather than a static rule helps agents adapt how they curate experience across tasks.
