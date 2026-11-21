---
title: "FrontierOR challenges agents to design optimization algorithms"
date: 2026-11-19
date_precision: day
lab: Wang and collaborators
kind: research
about_me: false
short: "A preprint introduces a challenge for language model agents that design algorithms for optimization problems."
sources:
  - url: https://arxiv.org/abs/2611.26171
    title: "The FrontierOR Challenge: Agentic Algorithm Design for Operations Research"
    primary: true
---

## What happened
Hai Wang and colleagues posted a preprint describing FrontierOR, a challenge for workflows that design, test and improve algorithms across routing, scheduling and other optimization problems. The benchmark contains 180 audited problems; its first stage releases 60, and its second introduces new problems and unseen instances. The authors report that the strongest model in their one-shot evaluation matched the Gurobi solver on 39% of large instances, using their combined quality and speed criterion.

## Why it matters
The challenge asks whether language-model agents can produce algorithms that work at realistic scales, measuring feasible solutions against hidden instances rather than merely judging their code's appearance.
