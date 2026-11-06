---
title: "Charniak's Maximum-Entropy-Inspired Parser"
date: 2000-04-29
date_precision: day
lab: "Brown University"
kind: research
about_me: false
short: "Eugene Charniak publishes a statistical parser using maximum-entropy-inspired smoothing, achieving 89.5% labeled precision and recall on the Penn Treebank."
sources:
  - url: https://aclanthology.org/A00-2018/
    title: "A Maximum-Entropy-Inspired Parser"
    primary: true
---

## What happened
On April 29, 2000, at NAACL 2000 in Seattle, Eugene Charniak from Brown University presented a statistical syntactic parser for English. The system introduced maximum-entropy-inspired conditioning and smoothing to combine lexical head words, constituent categories, and structural context. Evaluated on the standard Wall Street Journal section of the Penn Treebank, it achieved 89.5% labeled precision and 89.6% labeled recall on sentences of 100 words or fewer (90.1% average precision and recall on sentences up to 40 words), significantly reducing parsing error rates.

## Why it matters
Before neural language models, statistical parsers drove advances in syntactic modeling and probability estimation for natural language, demonstrating how rich contextual conditioning and smoothed probability models could extract linguistic structure from large text corpora.
