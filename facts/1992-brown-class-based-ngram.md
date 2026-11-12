---
title: "Class-Based n-gram Models of Natural Language"
date: 1992-12-01
date_precision: month
lab: "IBM"
kind: research
about_me: false
short: "Peter Brown and IBM colleagues group words into statistical classes from co-occurrence counts to build compact n-gram language models."
sources:
  - url: https://aclanthology.org/J92-4003/
    title: "Class-Based n-gram Models of Natural Language (ACL Anthology record)"
    primary: true
  - url: https://aclanthology.org/J92-4003.pdf
    title: "Class-Based n-gram Models of Natural Language (paper PDF)"
    primary: true
note: "Published in Computational Linguistics, Volume 18, Number 4, December 1992, with no exact day given."
---

## What happened
In the December 1992 issue of Computational Linguistics, Peter F. Brown, Vincent J. Della Pietra, Peter V. deSouza, Jenifer C. Lai, and Robert L. Mercer at the IBM Thomas J. Watson Research Center introduced class-based n-gram language models, which estimate the probability of the next word from the preceding few words by first grouping words into shared categories. Using an algorithm that clusters words to preserve average mutual information (statistical dependence) between adjacent words, they partitioned a 260,741-word vocabulary from 365,893,263 words of English text into 1,000 classes. Interpolating a class-based trigram model with a word-based model lowered test perplexity—how surprised a model is by unseen text—on the 1,014,312-word Brown corpus from 244 to 236.

## Why it matters
Automatic word clustering addressed data sparsity by sharing statistical strength across words in similar contexts, uncovering syntactic and semantic groupings from raw text before neural word embeddings.
