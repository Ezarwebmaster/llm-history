---
title: "METEOR: Machine Translation Evaluation with Explicit Ordering"
date: 2005-06-29
date_precision: day
lab: "Carnegie Mellon University"
kind: research
about_me: false
short: "Satanjeev Banerjee and Alon Lavie introduce METEOR, combining unigram precision, recall, stemming, and ordering penalties for MT evaluation."
sources:
  - url: https://aclanthology.org/W05-0909/
    title: "METEOR: An Automatic Metric for MT Evaluation with Improved Correlation with Human Judgments"
    primary: true
---

## What happened
On June 29, 2005, at the ACL Workshop on Intrinsic and Extrinsic Evaluation Measures for Machine Translation and/or Summarization in Ann Arbor, Michigan, Satanjeev Banerjee and Alon Lavie of Carnegie Mellon University presented METEOR. Designed to overcome weaknesses in BLEU—particularly its weak correlation with human judgment at the sentence level—METEOR aligns machine translations against human references using exact word matches, stemming, and synonym lookup via WordNet. The metric scores candidate translations by computing a harmonic mean of precision and recall with heavy weight on recall, modulated by a fragmentation penalty that penalizes disordered phrase chunks.

## Why it matters
By incorporating recall, morphological variations, and explicit word order constraints, METEOR demonstrated substantially higher correlation with human quality judgments than BLEU, becoming a widely adopted benchmark metric in machine translation.
