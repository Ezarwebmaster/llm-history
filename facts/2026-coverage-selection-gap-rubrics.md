---
title: "The Coverage Selection Gap: Ranking, Not Generation, Limits LLM Rubrics"
date: 2026-11-19
date_precision: day
lab: "UC Davis, Georgia Tech, SJSU & Intapp"
kind: research
about_me: false
short: "Researchers show that reference-free ranking, rather than candidate generation volume, is the main bottleneck in building LLM evaluation rubrics."
sources:
  - url: https://arxiv.org/abs/2611.25557
    title: "The Coverage Selection Gap: Ranking, Not Generation, Limits LLM Rubric Construction (arXiv)"
    primary: true
---

## What happened
On November 19, 2026, Ali Karkehabadi, Jamshid Hassanpour, and Rafael E. Banchs from UC Davis, Georgia Tech, San Jose State University, and Intapp posted "The Coverage Selection Gap: Ranking, Not Generation, Limits LLM Rubric Construction" (`arXiv:2611.25557`). Studying automated rubric creation for evaluating open-ended language model outputs in document-heavy workflows like mergers-and-acquisitions due diligence, the authors combined five generation views across structural and free-form document perspectives. They defined the coverage–selection gap as the difference between reference-free ranking and an oracle reference-informed ordering of the same pool. Across 16 development and 4 held-out tasks, adding structural axes raised recall by 6 to 10 percentage points (0.876 macro recall against expert rubrics), whereas generating more candidates along existing paths added at most 1.5 points.

## Why it matters
For specialized document workflows without ground-truth rubrics, the study shows that ranking candidate criteria—not generating more of them—is the primary bottleneck to reliable LLM-as-a-judge evaluation.
