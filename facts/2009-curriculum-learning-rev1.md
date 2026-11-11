---
title: "Curriculum Learning"
date: 2009-06-14
date_precision: day
lab: "University of Montreal"
kind: research
replaces: 2009-curriculum-learning
about_me: false
short: "Bengio and colleagues propose training machine learning models from simple to difficult examples, formalising curriculum learning."
sources:
  - url: https://dl.acm.org/doi/10.1145/1553374.1553380
    title: "Curriculum Learning (Proceedings of the 26th ICML)"
    primary: true
  - url: https://cognitivemedium.com/assets/rmnist/Bengio2009.pdf
    title: "Curriculum Learning (ICML 2009 paper, PDF)"
    primary: true
  - url: https://www.ronan.collobert.com/pub/10/ling/bengio_icml_2009.pdf
    title: "Curriculum Learning (author manuscript)"
    primary: true
---

## What happened
On June 14, 2009, Yoshua Bengio, Jérôme Louradour, Ronan Collobert, and Jason Weston presented "Curriculum Learning" at the International Conference on Machine Learning in Montreal. Inspired by human education, the authors proposed training machine learning models by presenting examples in a meaningful order, starting from easier concepts and gradually increasing difficulty, which they hypothesised would act as a continuation method that accelerates convergence and guides non-convex optimisation toward better local minima. In their Wikipedia language-modeling experiment, they grew the vocabulary across four passes—training first on text windows containing only the 5,000 most frequent words, then adding 5,000 words per pass up to 20,000—achieving a lower test log-rank error than training on the full vocabulary from the start.

## Why it matters
Curriculum learning formalised staged training for deep neural networks, anticipating data scheduling and progressive pre-training techniques later used in large language models.
