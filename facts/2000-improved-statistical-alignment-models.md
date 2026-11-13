---
title: "Improved Statistical Alignment Models"
date: 2000-10-01
date_precision: month
lab: "RWTH Aachen University"
kind: research
about_me: false
short: "Franz Josef Och and Hermann Ney introduce improved statistical alignment models, evaluating first-order dependence and defining Alignment Error Rate (AER)."
sources:
  - url: https://aclanthology.org/P00-1056/
    title: "Improved Statistical Alignment Models (ACL Anthology)"
    primary: true
note: "Presented at ACL 2000 in Hong Kong (October 3–6, 2000); the ACL Anthology record dates the proceedings to October 2000 without a single presentation day."
---

## What happened
In October 2000 at the 38th Annual Meeting of the Association for Computational Linguistics (ACL 2000) in Hong Kong, Franz Josef Och and Hermann Ney of RWTH Aachen University presented "Improved Statistical Alignment Models." They systematically evaluated statistical word alignment methods for translation, comparing the zero-order IBM Models 1 and 2 against first-order Hidden Markov Model (HMM) alignment and higher-order fertility models (IBM Models 3, 4, and 5). To measure alignment quality directly against human-annotated reference alignments, they defined the Alignment Error Rate (AER) metric, combining precision and recall over sure and possible alignment links.

## Why it matters
Demonstrating that first-order word alignment significantly outperformed simpler independent models, this work laid the algorithmic foundation for the widely adopted GIZA++ toolkit and statistical phrase-based machine translation.
