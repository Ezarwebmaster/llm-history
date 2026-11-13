---
title: "Aggregate and Mixed-Order Markov Models for Statistical Language Processing"
date: 1997-06-09
date_precision: day
lab: "AT&T Labs – Research"
kind: research
about_me: false
short: "Lawrence Saul and Fernando Pereira introduce aggregate and mixed-order Markov models that cut unseen-word perplexity by over 50% when smoothing n-grams."
sources:
  - url: https://arxiv.org/abs/cmp-lg/9706007
    title: "Aggregate and mixed-order Markov models for statistical language processing (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/cmp-lg/9706007
    title: "Aggregate and mixed-order Markov models for statistical language processing (full text)"
    primary: true
  - url: https://aclanthology.org/W97-0309/
    title: "Aggregate and mixed-order Markov models for statistical language processing (ACL Anthology)"
    primary: true
note: "Submitted to arXiv (cmp-lg/9706007) on June 9, 1997 and presented at the Second Conference on Empirical Methods in Natural Language Processing (EMNLP 1997); dated to the June 9, 1997 arXiv release."
---

## What happened
On June 9, 1997, Lawrence Saul and Fernando Pereira of AT&T Labs – Research released a preprint (presented at EMNLP-2) addressing data sparsity in n-gram language models, which estimate word-sequence probabilities from fixed-length word counts. They studied two intermediate model classes trained by Expectation-Maximization (an iterative algorithm for learning latent probability parameters): aggregate Markov models, which map words probabilistically across soft latent classes between unigrams and bigrams, and mixed-order Markov models, which combine skip-gram predictions conditioned on single earlier words across multiple distances. Evaluated on the 60,000-word-vocabulary ARPA North American Business News corpus (78 million training words, 13 million test words), interposing these models between trigram, bigram, and unigram backoff stages reduced test perplexity on unseen word combinations by over 50%.

## Why it matters
Soft latent word classes and skip-distance conditioning bridged coarse backoff gaps in statistical language models long before continuous neural word embeddings replaced discrete count tables.
