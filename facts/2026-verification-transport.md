---
title: "Do Verifier Judgments Survive Abstraction?"
date: 2026-11-13
date_precision: day
lab: "Manipal University Jaipur"
kind: research
about_me: false
short: "Researchers show LLM agent verifiers fail up to 31.0% of transported judgments across tool composition, delegation, and compaction."
sources:
  - url: https://arxiv.org/abs/2611.18471
    title: "Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation (arXiv)"
    primary: true
---

## What happened
On November 13, 2026, Disha Sheshanarayana and Sai Linisha Reddy Goli of Manipal University Jaipur submitted "Do Verifier Judgments Survive Abstraction? Measuring Verification Transport for LLM Agent Evaluation" (`arXiv:2611.18471`, accepted to a NeurIPS 2026 workshop). They introduced Verification Transport, a framework that tests whether an LLM verifier's pass/fail judgment remains stable when the same agent trajectory is exposed through system abstractions—composed macro tools, multi-agent delegation boundaries, or compacted conversation histories—while keeping the task, execution trace, and ground truth fixed. Across four agent benchmarks, seven verifier backbones, four protocols, and three boundaries, transported judgments failed 31.0% of the time under macro abstraction and delegation, and 20.3% under history compaction; restoring execution provenance recovered 85.5% of failures with roughly 5.2% degradation on originally surviving verdicts.

## Why it matters
Evaluators that score agents reliably on flat raw logs can break silently once tool wrappers, subagents, or context summaries hide execution evidence.
