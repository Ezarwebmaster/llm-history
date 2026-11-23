---
title: "Connectionist Temporal Classification"
date: 2006-06-01
date_precision: month
lab: "IDSIA"
kind: research
about_me: false
short: "Alex Graves and collaborators introduce Connectionist Temporal Classification, enabling end-to-end training of RNNs on unsegmented sequence data."
sources:
  - url: https://doi.org/10.1145/1143844.1143891
    title: "Connectionist Temporal Classification (ACM Digital Library)"
    primary: true
  - url: https://www.cs.toronto.edu/~graves/icml_2006.pdf
    title: "Connectionist Temporal Classification (PDF)"
    primary: true
note: "Presented at ICML 2006 in Pittsburgh (June 25–29, 2006); proceedings dated June 2006."
---

## What happened
At ICML 2006 in Pittsburgh, Alex Graves, Santiago Fernández, Faustino Gomez, and Jürgen Schmidhuber of IDSIA introduced Connectionist Temporal Classification (CTC). Sequence-labeling tasks like speech recognition previously required pre-segmented data aligning each audio slice to a phoneme, or hybrid models coupled with Hidden Markov Models. CTC introduced an output layer with a blank token and a dynamic programming algorithm that sums probabilities over all valid alignments mapping network outputs to target labels, allowing recurrent neural networks to be trained end-to-end with gradient descent.

## Why it matters
CTC eliminated the need for manual alignments and external segmentation pipelines, becoming the standard training objective for end-to-end speech recognition and OCR systems before attention mechanisms emerged.
