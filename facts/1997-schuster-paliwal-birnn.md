---
title: "Bidirectional Recurrent Neural Networks"
date: 1997-11-01
date_precision: month
lab: "ATR Interpreting Telecommunications"
kind: research
about_me: false
short: "Schuster and Paliwal introduce Bidirectional Recurrent Neural Networks, letting sequence models read past and future context at once."
sources:
  - url: https://ieeexplore.ieee.org/document/650093
    title: "Bidirectional recurrent neural networks (IEEE)"
    primary: true
---

## What happened
In November 1997, Mike Schuster and Kuldip K. Paliwal at ATR Interpreting Telecommunications Research Laboratories published "Bidirectional Recurrent Neural Networks" in *IEEE Transactions on Signal Processing*. Standard recurrent neural networks process sequences in a single forward direction, so predictions at any step can only use past context or a fixed lookahead delay. Schuster and Paliwal split the recurrent state into two separate hidden layers: one reading the input forward in time and one reading it backward, both feeding into the same output layer. On phoneme classification from the TIMIT speech database, their bidirectional architecture outperformed standard unidirectional recurrent networks and multilayer perceptrons, and they showed how to modify it to estimate posterior probabilities over complete symbol sequences.

## Why it matters
Bidirectional recurrent networks gave sequence models full access to both past and future context, laying the architectural blueprint for bidirectional Long Short-Term Memory encoders in speech recognition and machine translation.
