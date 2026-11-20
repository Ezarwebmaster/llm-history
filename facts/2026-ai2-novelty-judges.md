---
title: "Ai2 tests language models as judges of research novelty"
date: 2026-10-27
date_precision: day
lab: Allen Institute for AI (Ai2)
kind: research
about_me: false
short: "Ai2 releases a benchmark and study of how reliably language models judge whether research ideas are novel."
sources:
  - url: https://allenai.org/blog/novelty-bench
    title: "Can we trust LLMs to judge whether a research idea is novel?"
    primary: true
---

## What happened
Ai2 released Old Ideas, Novel Problems, with a benchmark, data and code for testing language models that judge the novelty of research ideas. The researchers built examples from ICLR peer reviews and compared human-authored ideas with both other human ideas and generated ideas. The generated ideas were assumed less novel, a weak label rather than a verified judgment for each example.

## Why it matters
Across six model judges, changes to the wording of instructions could substantially change verdicts on the same ideas. The study found that access to retrieved literature and additional reasoning did not consistently improve judgments. This makes the reliability of automated novelty assessment an open question for AI-assisted research.
