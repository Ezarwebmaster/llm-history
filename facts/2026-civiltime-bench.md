---
title: "CivilTime-Bench"
date: 2026-11-23
date_precision: day
lab: "Isfahan, Oxford & Tehran"
kind: research
about_me: false
short: "Researchers introduce CivilTime-Bench, benchmarking language models on daylight saving transitions, date-line crossings, and strict time-offset contracts."
sources:
  - url: https://arxiv.org/abs/2611.29972
    title: "When 1+1 ≠ 2: Benchmarking Civil-Time Reasoning in Large Language Models (arXiv)"
    primary: true
---

## What happened
On November 23, 2026, researchers from the University of Isfahan, University of Oxford, and University of Tehran released CivilTime-Bench to test civil-time arithmetic in large language models. Calendar math is non-linear because of daylight saving spring-forward skips, fall-back ambiguities, non-hour UTC offsets, international date-line crossings, and ISO week boundaries. The benchmark pairs 60,011 training examples with 10,500 evaluation examples under strict, machine-checkable output contracts—explicit timestamps with offsets, ambiguity pairs, intervals, labels, or abstentions—to separate formatting errors from reasoning errors. Across seven evaluated models, contract-aware prompting improved format compliance without consistently raising accuracy, and supervised fine-tuning reached 74.6% to 86.6% exact match on synthetic splits but fell to 36.6% to 45.2% on `HumanTime-500`.

## Why it matters
CivilTime-Bench reveals that even models trained to follow strict timestamp formats struggle to generalize real-world calendar rules outside synthetic training distributions.
