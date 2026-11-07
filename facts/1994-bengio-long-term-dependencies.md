---
title: "Learning Long-Term Dependencies with Gradient Descent"
date: 1994-03-01
date_precision: month
lab: "University of Montreal"
kind: research
short: "Yoshua Bengio and colleagues mathematically show that gradient descent struggles to train recurrent neural networks on long-term temporal dependencies."
sources:
  - url: https://doi.org/10.1109/72.279181
    title: "Learning long-term dependencies with gradient descent is difficult"
    primary: true
---

## What happened
In the March 1994 issue of IEEE Transactions on Neural Networks, Yoshua Bengio, Patrice Simard, and Paolo Frasconi analyzed gradient-based training of recurrent neural networks. They proved mathematically that backpropagation gradients vanish or explode exponentially when error signals are propagated back across extended time steps, making gradient descent unable to discover long-term temporal dependencies.

## Why it matters
The formal identification of the vanishing gradient problem in recurrent networks explained why sequential neural language models failed on long context, directly driving the development of gated memory mechanisms like LSTM and GRU, and eventually the Transformer.
