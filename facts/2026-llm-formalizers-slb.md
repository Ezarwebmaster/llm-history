---
title: "Solver-Like Behavior in Large Language Models as Formalizers"
date: 2026-11-02
date_precision: day
lab: "Allen Institute for AI"
kind: research
about_me: false
short: "Researchers find reasoning models waste 24% of thinking tokens solving problems in prose before generating external solver programs that recompute the answer."
sources:
  - url: https://arxiv.org/abs/2611.02395
    title: "Solver-Like Behavior in Large Language Models as Formalizers (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/2611.02395
    title: "Solver-Like Behavior in Large Language Models as Formalizers (full text)"
    primary: true
---

## What happened
On November 2, 2026, researchers from Drexel University and the Allen Institute for AI published a study revealing "Solver-Like Behavior" in reasoning models tasked with program synthesis. When language models translate natural language problems into executable solver code such as Python, Z3, or PDDL, their intermediate chain-of-thought traces perform extensive trial-and-error search in prose. Across evaluated reasoning models, this redundant search appeared in approximately 85% of traces and consumed 24% of reasoning tokens. The authors demonstrated that masking problem values behind runtime placeholders eliminates nearly all text-trace search without harming accuracy.

## Why it matters
As frontier models spend significant test-time compute formalising reasoning tasks, diagnosing and suppressing redundant internal search prevents wasted inference latency and inherited reasoning errors.
