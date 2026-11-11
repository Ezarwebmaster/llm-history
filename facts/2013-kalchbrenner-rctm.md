---
title: "Recurrent Continuous Translation Models"
date: 2013-10-01
date_precision: month
lab: "University of Oxford"
kind: research
about_me: false
short: "Kalchbrenner and Blunsom introduce an end-to-end neural translation model that maps source sentences to continuous vectors for recurrent decoding."
sources:
  - url: https://aclanthology.org/D13-1176/
    title: "Recurrent Continuous Translation Models (ACL Anthology)"
    primary: true
  - url: https://aclanthology.org/D13-1176.pdf
    title: "Recurrent Continuous Translation Models (paper, PDF)"
    primary: true
note: "The ACL Anthology record for the EMNLP 2013 proceedings in Seattle lists October 2013."
---

## What happened
At EMNLP 2013 in Seattle, Nal Kalchbrenner and Phil Blunsom of the University of Oxford presented Recurrent Continuous Translation Models (RCTMs), a class of probabilistic machine translation models built entirely on continuous vector representations (lists of numbers representing words, phrases, and sentences). Their architecture paired a Convolutional Sentence Model, which hierarchically combined source word vectors into a representation of the source sentence without relying on discrete phrase tables, with a target recurrent neural network—a sequential network that generated the translated sentence word by word conditioned on the source representation.

## Why it matters
Earlier neural approaches in machine translation mainly re-scored candidate lists produced by traditional statistical phrase-based systems. By encoding a source sentence into continuous vectors and decoding the target sentence directly with a recurrent network, Kalchbrenner and Blunsom established the end-to-end neural encoder-decoder paradigm that soon replaced phrase-based statistical translation.
