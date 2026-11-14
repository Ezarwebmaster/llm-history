---
title: "Layer Normalization"
date: 2016-07-21
date_precision: day
lab: "University of Toronto"
kind: research
about_me: false
short: "Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E. Hinton propose Layer Normalization, stabilizing neural network training independently of mini-batch size."
sources:
  - url: https://arxiv.org/abs/1607.06450
    title: "Layer Normalization (arXiv)"
    primary: true
---

## What happened
On July 21, 2016, Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E. Hinton at the University of Toronto submitted "Layer Normalization" (`arXiv:1607.06450`). Unlike batch normalization, which normalizes neuron activities across a mini-batch and struggles with variable-length sequences, layer normalization computes the mean and variance from all summed inputs to neurons within a single layer on a single training example, with per-neuron learnable gain and bias parameters. Because each training case is normalized independently, it behaves identically during training and inference and applies directly to each time step of recurrent neural networks. The authors reported faster convergence and stabilized hidden-state dynamics across recurrent sequence tasks, handwriting generation, and sentence-representation models.

## Why it matters
By removing mini-batch dependence and stabilizing sequence training, layer normalization became a core building block of the Transformer architecture and modern large language models.
