---
title: "GloVe: Global Vectors for Word Representation"
date: 2014-10-01
date_precision: month
lab: "Stanford University"
kind: research
about_me: false
replaces: 2014-glove
short: "Pennington, Socher, and Manning introduce GloVe, combining global co-occurrence statistics with local context windows for unsupervised word representation."
sources:
  - url: https://aclanthology.org/D14-1162/
    title: "GloVe: Global Vectors for Word Representation (ACL Anthology)"
    primary: true
  - url: https://nlp.stanford.edu/projects/glove/
    title: "GloVe: Global Vectors for Word Representation (Stanford NLP)"
    primary: true
  - url: https://aclanthology.org/D14-1000/
    title: "Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP)"
    primary: false
note: "ACL Anthology records the publication month as October 2014; EMNLP 2014 ran October 25–29 in Doha, with main conference sessions on October 26–28."
---

## What happened
In October 2014, at EMNLP in Doha (held October 25–29, with main sessions October 26–28), Jeffrey Pennington, Richard Socher, and Christopher D. Manning of Stanford University presented GloVe (Global Vectors for Word Representation). While previous embedding methods like Word2Vec relied on local skip-gram or continuous bag-of-words windows without directly using corpus-wide statistics, GloVe trains a weighted least-squares log-bilinear model directly on global word-word co-occurrence counts. Motivated by co-occurrence probability ratios, its objective fits vector dot products plus bias terms to the logarithm of co-occurrence counts while down-weighting rare pairs and capping frequent ones.

## Why it matters
GloVe bridged global matrix factorization methods and local context window models. Its embeddings performed strongly on word analogy and similarity benchmarks, becoming a standard input representation for neural networks in machine translation, parsing, and language modeling before contextual embeddings arrived.
