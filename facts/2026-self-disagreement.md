---
title: "Learning Through Self-Disagreement"
date: 2026-11-12
date_precision: day
lab: Microsoft Research
kind: research
about_me: false
short: "Microsoft Research trains language models via Self-Disagreement, using internal counter-arguments to teach when to hold or revise answers."
sources:
  - url: https://arxiv.org/abs/2611.17563
    title: "Benchmarks Don't Talk Back: Learning Through Self-Disagreement (arXiv)"
    primary: true
---

## What happened
On November 12, 2026, Microsoft Research authors Soheil Abbasloo and Peng Cheng posted *Benchmarks Don't Talk Back: Learning Through Self-Disagreement*. They identify "dialectical competence"—knowing when to defend a correct answer against flawed counter-reasoning and when to yield to a better argument—as a capability distinct from first-answer accuracy that inference-time self-reflection does not reliably supply. Their training method, Self-Disagreement, uses a single model that states a position, generates the strongest counter-argument against it, and rules on whether the objection stands. It trains both the initial answer and that ruling using reinforcement learning from verifiable rewards (checking outputs against known reference answers without human annotations or a separate reward model).

## Why it matters
Models trained with Self-Disagreement held valid positions against stronger challengers they never trained against without sacrificing first-answer accuracy, pointing toward post-training methods built for contested multi-turn conversations rather than static benchmarks.
