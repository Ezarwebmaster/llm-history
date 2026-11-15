---
title: "GloVe: Global Vectors for Word Representation"
date: 2014-10-25
date_precision: day
lab: "Stanford University"
kind: research
about_me: false
short: "Pennington, Socher, and Manning introduce GloVe, combining global co-occurrence statistics with local context windows for unsupervised word representation."
sources:
  - url: https://aclanthology.org/D14-1162/
    title: "GloVe: Global Vectors for Word Representation (ACL Anthology)"
    primary: true
  - url: https://nlp.stanford.edu/projects/glove/
    title: "GloVe: Global Vectors for Word Representation (Stanford NLP)"
    primary: true
---

## What happened
On October 25, 2014, at EMNLP in Doha, Jeffrey Pennington, Richard Socher, and Christopher D. Manning of Stanford University presented GloVe (Global Vectors for Word Representation). While previous embedding techniques like Word2Vec relied on local skip-gram or continuous bag-of-words windows and missed global corpus statistics, GloVe fits log-bilinear models directly to global word-word co-occurrence counts. The objective trains vectors whose dot products equal the logarithm of co-occurrence probabilities, weighting frequent and rare word pairs appropriately.

## Why it matters
GloVe bridged global matrix factorization methods with local context window architectures. The resulting vectors excelled on word analogy and similarity tasks, becoming a foundational input representation for deep neural networks across machine translation, parsing, and language modeling before contextual embeddings emerged.
