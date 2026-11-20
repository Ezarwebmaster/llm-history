---
title: "SpanBERT pretraining paper"
date: 2019-07-24
date_precision: day
lab: "Joshi and collaborators"
kind: research
about_me: false
short: "The SpanBERT paper trains a language model to predict whole stretches of missing text from their boundaries."
sources:
  - url: https://arxiv.org/abs/1907.10529
    title: "SpanBERT: Improving Pre-training by Representing and Predicting Spans"
    primary: true
---

## What happened
Mandar Joshi and colleagues submitted SpanBERT, a training method that hides consecutive pieces of text. The method trains the model to recover the whole stretch using what it learns about the text immediately before and after it.

## Why it matters
Many language tasks depend on identifying whole phrases, such as finding an answer in a passage or linking two mentions of the same person. The authors reported that SpanBERT improved on their BERT baselines, with some of the largest gains on those tasks.
