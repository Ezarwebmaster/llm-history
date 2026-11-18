---
title: "A Closer Look at Language Model Introspection"
date: 2026-11-11
date_precision: day
lab: "Georgia Institute of Technology"
kind: research
about_me: false
short: "Georgia Tech researchers show that linear probes decode injected activation perturbations far earlier in pretraining than models report them zero-shot."
sources:
  - url: https://arxiv.org/abs/2611.15267
    title: "A Closer Look at Language Model Introspection: Probing Information and Reporting (arXiv)"
    primary: true
---

## What happened
On November 11, 2026, Dustin Rubin, Vincenzo Timmel, Xufeng He, Aritra Saha, JooMan Kim, and Vijay Madisetti of the Georgia Institute of Technology posted "A Closer Look at Language Model Introspection: Probing Information and Reporting" (`arXiv:2611.15267`). Introspection tests often ask models to locate where activations were perturbed. Injecting a signal four times the typical activation norm at layer 0 in OLMo 3 32B, a linear probe (a simple linear classifier on layer 24 activations) reached 98.3% localization accuracy after 8.4 billion training tokens, while zero-shot model answers stayed at chance (11.1%). At the released base checkpoint, accuracies reached 99.1% and 89.6%. Across 7B and 32B models, perturbation location was even decodable in randomly initialized networks.

## Why it matters
Because surface architectural traces let simple classifiers decode perturbations without pretraining, localization accuracy alone does not prove genuine self-monitoring.
