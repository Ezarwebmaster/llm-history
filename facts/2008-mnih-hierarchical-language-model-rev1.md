---
replaces: 2008-mnih-hierarchical-language-model
title: "A Scalable Hierarchical Distributed Language Model"
date: 2008-12-01
date_precision: month
lab: "University of Toronto"
kind: research
about_me: false
short: "Andriy Mnih and Geoffrey Hinton build a fast hierarchical neural language model that learns its binary word tree directly from training data."
note: "Advances in Neural Information Processing Systems 21 proceedings come from the NIPS 2008 conference held in December 2008, so the date is recorded with month precision."
sources:
  - url: https://papers.nips.cc/paper/2008/hash/1e056d2b0ebd5c878c550da6ac5d3724-Abstract.html
    title: "A Scalable Hierarchical Distributed Language Model (NeurIPS Proceedings)"
    primary: true
---

## What happened
In December 2008, at the Neural Information Processing Systems (NIPS) conference, Andriy Mnih and Geoffrey Hinton of the University of Toronto presented a fast hierarchical neural language model. Earlier neural language models generalized well by representing words as continuous vectors of numbers, but predicting the next word required scoring the entire vocabulary at once, making training and testing slow. Frederic Morin and Yoshua Bengio had earlier proposed organizing words into a binary tree so each prediction became a short series of two-way choices, but their tree required hand-built expert knowledge and trailed flat neural models. Mnih and Hinton introduced a faster hierarchical model and a feature-based algorithm that builds the binary word tree automatically from training data.

## Why it matters
The authors reported that learning the word tree from data let their hierarchical model beat both non-hierarchical neural models and leading n-gram models (which count short word sequences).
