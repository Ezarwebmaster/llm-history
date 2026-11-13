---
title: "StateBench"
date: 2026-11-03
date_precision: day
lab: "Allen Institute for AI (Ai2)"
kind: research
about_me: false
short: "Ai2 releases StateBench, an open benchmark measuring how well language models track changing variable states across long documents."
sources:
  - url: https://allenai.org/blog/statebench
    title: "StateBench: Testing how language models track state changes over long documents (Ai2)"
    primary: true
  - url: https://huggingface.co/datasets/allenai/state-bench
    title: "allenai/state-bench (Hugging Face)"
    primary: true
  - url: https://github.com/allenai/state-bench
    title: "allenai/state-bench (GitHub)"
    primary: true
---

## What happened
On November 3, 2026, the Allen Institute for AI (Ai2) released StateBench, an open benchmark and dataset on Hugging Face and GitHub that evaluates how language models track evolving states across long documents. Moving beyond static needle-in-a-haystack recall, StateBench tests four progressive complexity tiers: immutable values, reassignment by value, self-referential updates, and assignment-by-reference chains. Ai2 reported that while frontier models handled short or simple cases well, accuracy dropped to 13% or lower on the longest dependency-heavy state-tracking tracks, and also evaluated recurrent and hybrid architectures alongside transformers.

## Why it matters
StateBench demonstrates that supporting a long context window does not guarantee reliable working memory, giving researchers a structured diagnostic for comparing transformer, recurrent, and hybrid architectures on stateful reasoning.
