---
title: "A Scalable Hierarchical Distributed Language Model"
date: 2008-12-01
date_precision: month
lab: "University of Toronto"
kind: research
about_me: false
short: "Andriy Mnih and Geoffrey Hinton introduce a hierarchical distributed language model that automatically builds word trees to speed up neural language modeling."
note: "Advances in Neural Information Processing Systems 21 proceedings are from the NIPS 2008 conference held December 8–11, 2008 in Vancouver; the date is recorded with month precision."
sources:
  - url: https://proceedings.neurips.cc/paper/2008/hash/c2626d850c80ea07e7511babe4c64f16-Abstract.html
    title: "A Scalable Hierarchical Distributed Language Model (NeurIPS Proceedings)"
    primary: true
  - url: https://www.cs.toronto.edu/~hinton/absps/hlblNIPS.pdf
    title: "A Scalable Hierarchical Distributed Language Model (PDF)"
    primary: false
---

## What happened
In December 2008, at the Advances in Neural Information Processing Systems (NIPS) conference in Vancouver, Andriy Mnih and Geoffrey Hinton presented a hierarchical distributed language model. While early neural probabilistic language models demonstrated superior generalization compared to n-grams, calculating the softmax normalization across large vocabularies was computationally prohibitive. Prior hierarchical attempts relied on manual lexical trees like WordNet, which degraded prediction accuracy. Mnih and Hinton introduced a greedy, feature-based algorithm that automatically constructed binary trees of words directly from training data, mapping vocabulary words to tree leaves and learning distributed representations at internal nodes to reduce computation from linear to logarithmic time.

## Why it matters
By showing that automatic word trees could scale neural language models to large vocabularies without losing predictive quality, Mnih and Hinton established the foundation for hierarchical softmax, directly influencing later efficient embedding architectures such as word2vec.
