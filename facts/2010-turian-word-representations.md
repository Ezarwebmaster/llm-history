---
title: "Word representations for semi-supervised learning"
date: 2010-07-11
date_precision: day
lab: "University of Montreal"
kind: research
about_me: false
short: "Turian, Ratinov and Bengio show that combining unsupervised word representations with supervised models improves named entity recognition and chunking."
sources:
  - url: https://aclanthology.org/P10-1040/
    title: "Word Representations: A Simple and General Method for Semi-Supervised Learning"
    primary: true
  - url: https://aclanthology.org/P10-1040.pdf
    title: "Word Representations: A Simple and General Method for Semi-Supervised Learning (PDF)"
    primary: false
---

## What happened
At ACL 2010 in Uppsala, Sweden, Joseph Turian, Lev-Arie Ratinov and Yoshua Bengio evaluated unsupervised word representations—Brown clusters, Collobert and Weston embeddings, and Mnih and Hinton's hierarchical log-bilinear embeddings—as input features for supervised natural language processing systems. They demonstrated that adding unsupervised word features to near-state-of-the-art baselines consistently improved accuracy on both named entity recognition and syntactic chunking, with the largest gains achieved by combining multiple representations.

## Why it matters
The paper established that off-the-shelf distributed representations induced from unlabeled text could systematically empower supervised language systems without task-specific engineering. This simple semi-supervised transfer approach anticipated the widespread adoption of pre-trained word embeddings and language model representations.
