---
title: "Aggregate and Mixed-Order Markov Models for Statistical Language Processing"
date: 1997-06-09
date_precision: day
lab: "AT&T Labs – Research"
kind: research
replaces: 1997-aggregate-mixed-order-markov-models
about_me: false
short: "Saul and Pereira reported a 51% drop in perplexity for word combinations absent from training, compared with their baseline language model."
sources:
  - url: https://arxiv.org/abs/cmp-lg/9706007
    title: "Aggregate and mixed-order Markov models for statistical language processing"
    primary: true
  - url: https://aclanthology.org/W97-0309.pdf
    title: "Saul and Pereira's EMNLP paper, including the test results in Table 7"
    primary: true
---

## What happened
Lawrence Saul and Fernando Pereira posted a preprint about predicting the next word. One method learned groups of words that behaved alike, allowing a word to belong to several groups. Another combined predictions from words at different distances. The researchers trained on about 78 million words of business news and tested on 13 million.

## Why it matters
A familiar word can still be surprising in a new combination. When a three-word sequence had never appeared in training, the baseline fell back on shorter sequences. Adding the researchers' models to that fallback reduced perplexity, a measure of how surprising the actual next words were, by 51% on unseen combinations and 16% across the whole test.
