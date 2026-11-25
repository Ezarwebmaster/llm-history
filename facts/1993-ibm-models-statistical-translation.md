---
title: "The Mathematics of Statistical Machine Translation: Parameter Estimation"
date: 1993-06-01
date_precision: month
lab: "IBM"
kind: research
about_me: false
short: "Brown and colleagues introduce IBM Models 1–5, formalizing statistical machine translation and word alignment with Expectation-Maximization."
sources:
  - url: https://aclanthology.org/J93-2003/
    title: "The Mathematics of Statistical Machine Translation: Parameter Estimation (ACL Anthology)"
    primary: true
---

## What happened
In the June 1993 issue of *Computational Linguistics* (Vol. 19, No. 2, pp. 263–311), Peter F. Brown, Stephen A. Della Pietra, Vincent J. Della Pietra, and Robert L. Mercer of IBM Research published "The Mathematics of Statistical Machine Translation: Parameter Estimation." Framing translation as a noisy-channel problem, they decomposed generation into a translation model and a language model. To model translation probabilistically without hand-coded rules, they introduced five foundational word-alignment formulations (IBM Models 1–5), progressively incorporating lexical translation probabilities, position alignment, word fertility, and distortion. Because parallel corpora lack alignment annotations, they applied Expectation-Maximization to estimate hidden parameters from unaligned sentence pairs.

## Why it matters
The IBM Models established the probabilistic foundation for statistical machine translation, shifting natural language processing from hand-crafted grammars toward automated statistical learning from parallel data.
