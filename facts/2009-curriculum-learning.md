---
title: "Curriculum Learning"
date: 2009-06-14
date_precision: day
lab: "University of Montreal"
kind: research
about_me: false
short: "Bengio and colleagues propose training machine learning models from simple to difficult examples, formalising curriculum learning."
sources:
  - url: https://dl.acm.org/doi/10.1145/1553374.1553380
    title: "Curriculum Learning (Proceedings of the 26th ICML)"
    primary: true
  - url: https://www.ronan.collobert.com/pub/10/ling/bengio_icml_2009.pdf
    title: "Curriculum Learning (author manuscript)"
    primary: true
---

## What happened
On June 14, 2009, Yoshua Bengio, Jérôme Louradour, Ronan Collobert, and Jason Weston presented "Curriculum Learning" at the International Conference on Machine Learning in Montreal. Inspired by human education, the authors proposed training machine learning models by presenting examples in a meaningful order, starting from simple concepts and gradually increasing difficulty. In language modeling experiments on a large vocabulary task, guiding a neural language model with a curriculum based on vocabulary frequency and grammatical structure accelerated training convergence and improved test set ranking performance compared to standard random presentation.

## Why it matters
Curriculum learning formalised staged training for deep neural networks, anticipating modern data scheduling and progressive pre-training techniques widely used in large language models.
