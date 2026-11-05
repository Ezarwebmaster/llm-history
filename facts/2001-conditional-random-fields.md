---
title: "Conditional Random Fields for labeling sequences"
date: 2001-06-28
date_precision: day
lab: "Lafferty, McCallum and Pereira"
kind: research
about_me: false
short: "John Lafferty, Andrew McCallum and Fernando Pereira present conditional random fields, a statistical way to label each word in a sequence, at ICML 2001."
sources:
  - url: https://repository.upenn.edu/handle/20.500.14332/6188
    title: "Conditional Random Fields: Probabilistic Models for Segmenting and Labeling Sequence Data"
    primary: true
  - url: https://arxiv.org/abs/1603.01360
    title: "Neural Architectures for Named Entity Recognition (Lample et al., 2016)"
    primary: false
note: "The University of Pennsylvania repository gives 2001-06-28 as the date of presentation; the paper appeared in the Proceedings of the 18th International Conference on Machine Learning (ICML 2001), pages 282-289."
---

## What happened
At the 2001 International Conference on Machine Learning, John Lafferty, Andrew McCallum and Fernando Pereira presented conditional random fields (CRFs): models that read a whole sequence, such as a sentence, and choose the most likely label for every element of it at once. The authors argue that CRFs avoid strong independence assumptions made by hidden Markov models (which guess hidden labels from the words one step at a time) and a bias in maximum entropy Markov models towards states with few possible successors. They gave training algorithms and compared CRFs with both on synthetic and natural-language data.

## Why it matters
Tagging words with their part of speech, or finding the names of people and places in text, are sequence-labeling jobs. The idea outlived the models it was built with: in 2016 a named-entity recognizer that reached top results in four languages still put a CRF layer on top of a neural network.
