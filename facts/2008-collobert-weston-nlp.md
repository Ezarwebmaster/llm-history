---
title: "One neural network for several language tasks"
date: 2008-07-01
date_precision: month
lab: "NEC Labs America"
kind: research
short: "Collobert and Weston present one convolutional network that learns part-of-speech tags, named entities and semantic roles together, sharing weights."
note: "The ICML 2008 programme gives the conference as July 5-8, 2008 in Helsinki; the day the paper was presented is not on the pages I read, so the date is kept to the month."
sources:
  - url: https://ronan.collobert.com/pub/matos/2008_nlp_icml.pdf
    title: "A Unified Architecture for Natural Language Processing: Deep Neural Networks with Multitask Learning (paper)"
    primary: true
  - url: https://icml.cc/Conferences/2008/accepted_papers.shtml.html
    title: "ICML 2008 accepted papers"
    primary: true
---

## What happened
At ICML 2008 in Helsinki, Ronan Collobert and Jason Weston of NEC Labs America described a single convolutional neural network, a type that scans text with small sliding windows. Given a sentence, it outputs part-of-speech tags, chunks, named entities, semantic roles, similar words, and a score for whether the sentence makes sense. The network is trained on all these tasks together, sharing its weights, and its language-model part learns from unlabeled text.

## Why it matters
One network learning several language tasks at once, and gaining from text with no labels, pointed toward the shared models that later language systems rely on.
