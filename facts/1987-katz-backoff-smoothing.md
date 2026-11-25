---
title: "Katz Back-off Language Model Smoothing"
date: 1987-03-01
date_precision: month
lab: "IBM Research"
kind: research
about_me: false
short: "Slava M. Katz introduces back-off smoothing to estimate word-sequence probabilities from sparse text data in speech recognition language models."
sources:
  - url: https://doi.org/10.1109/TASSP.1987.1165125
    title: "Estimation of probabilities from sparse data for the language model component of a speech recognizer (IEEE TASSP)"
    primary: true
---

## What happened
In the March 1987 issue of *IEEE Transactions on Acoustics, Speech, and Signal Processing* (Vol. ASSP-35, No. 3, pp. 400–401), Slava M. Katz of IBM's Thomas J. Watson Research Center published "Estimation of probabilities from sparse data for the language model component of a speech recognizer." Addressing the problem that finite training corpora leave many valid word sequences with zero count, Katz combined Good-Turing discounting—which reserves probability mass from infrequent n-grams—with a recursive back-off step. When an n-gram (a sequence of n words) appears too rarely or not at all, the model falls back to the probability of the shorter (n−1)-gram context scaled by a normalization weight.

## Why it matters
Developed for IBM's real-time speech recognizer, Katz back-off allowed compact storage and fast estimation of unseen word combinations, serving for decades as a standard baseline for statistical language modeling in speech recognition and machine translation.
