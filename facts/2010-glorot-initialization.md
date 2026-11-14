---
title: "Glorot and Bengio introduce Xavier initialization for deep neural networks"
date: 2010-05-13
date_precision: day
lab: "University of Montreal"
kind: research
about_me: false
short: "Xavier Glorot and Yoshua Bengio analyze vanishing gradients and propose normalized initialization to stabilize training in deep feedforward networks."
sources:
  - url: https://proceedings.mlr.press/v9/glorot10a.html
    title: "Understanding the difficulty of training deep feedforward neural networks"
    primary: true
  - url: https://proceedings.mlr.press/v9/glorot10a/glorot10a.pdf
    title: "AISTATS 2010 Conference Proceedings (PDF)"
    primary: true
note: "Presented at AISTATS 2010 on May 13–15, 2010 in Chia Laguna, Sardinia, Italy (JMLR W&CP volume 9)."
---

## What happened
At AISTATS 2010 in Sardinia, Xavier Glorot and Yoshua Bengio analyzed why standard gradient descent from random initialization struggled to train deep neural networks. They showed that logistic sigmoid activations cause top hidden layers to saturate, and studied how activation variances and backpropagated gradients degrade across successive layers. They derived a normalized weight initialization scheme—later widely known as Glorot or Xavier initialization—designed to maintain constant variance in activations and gradients throughout the network.

## Why it matters
Prior to this work, training deep architectures typically required greedy layer-wise unsupervised pretraining. Xavier initialization provided a mathematically grounded way to train deep feedforward and recurrent networks directly with standard backpropagation, becoming a standard default across deep learning and modern neural language modeling.
