---
title: "METEOR: Metric for Evaluation of Translation with Explicit ORdering"
date: 2005-06-29
date_precision: day
lab: "Carnegie Mellon University"
kind: research
about_me: false
replaces: 2005-meteor
short: "Satanjeev Banerjee and Alon Lavie introduce METEOR, combining unigram precision, recall, stemming, and ordering penalties for MT evaluation."
sources:
  - url: https://aclanthology.org/W05-0909/
    title: "METEOR: An Automatic Metric for MT Evaluation with Improved Correlation with Human Judgments"
    primary: true
---

## What happened
On June 29, 2005, at the ACL Workshop on Intrinsic and Extrinsic Evaluation Measures for Machine Translation and/or Summarization in Ann Arbor, Michigan, Satanjeev Banerjee and Alon Lavie of Carnegie Mellon University presented METEOR (Metric for Evaluation of Translation with Explicit ORdering). Built to address weaknesses in BLEU—especially its lack of direct recall and weak segment-level correlation with human judgment—METEOR aligns machine translations against human references in stages using exact word matches, Porter stemming, and WordNet synonyms. It scores translations using a harmonic mean of unigram precision and recall weighted heavily toward recall, reduced by a fragmentation penalty for disordered word chunks.

## Why it matters
By combining unigram recall, morphological and lexical variation, and explicit word-order penalties, METEOR achieved substantially higher segment-level correlation with human quality judgments than BLEU and became a standard machine translation evaluation metric.
