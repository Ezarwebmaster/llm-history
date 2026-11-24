---
title: "Maximum Entropy Approach to Natural Language Processing"
date: 1996-03-01
date_precision: month
lab: "IBM"
kind: research
about_me: false
short: "Adam Berger, Stephen Della Pietra, and Vincent Della Pietra formalize maximum entropy log-linear models for natural language processing."
sources:
  - url: https://aclanthology.org/J96-1002/
    title: "A Maximum Entropy Approach to Natural Language Processing (Computational Linguistics)"
    primary: true
---

## What happened
In the March 1996 issue of *Computational Linguistics* (Vol. 22, No. 1, pp. 39–71), Adam L. Berger, Stephen A. Della Pietra, and Vincent J. Della Pietra introduced a unified statistical framework for natural language processing based on the maximum entropy principle—selecting the most uniform probability distribution that satisfies empirical feature constraints from training data. They proved that this constrained maximum entropy distribution equals the maximum likelihood distribution within the exponential (log-linear) model family, presented Iterative Scaling algorithms and greedily grown feature selection, and demonstrated the method on word reordering, context-sensitive word translation, and sentence segmentation in IBM's Candide French-to-English machine translation system.

## Why it matters
Maximum entropy modeling allowed statistical language and translation systems to combine overlapping, arbitrary contextual features without assuming independence, laying the foundation for conditional random fields and feature-based NLP.
