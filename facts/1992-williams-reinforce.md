---
title: "REINFORCE Policy Gradient Algorithm"
date: 1992-05-01
date_precision: month
lab: "Northeastern University"
kind: research
about_me: false
short: "Ronald J. Williams introduces REINFORCE, proving how neural networks with stochastic units can follow expected-reward gradients without a model."
sources:
  - url: https://doi.org/10.1007/BF00992696
    title: "Simple Statistical Gradient-Following Algorithms for Connectionist Reinforcement Learning (Machine Learning)"
    primary: true
---

## What happened
In the May 1992 issue of *Machine Learning* (Vol. 8, Nos. 3–4, pp. 229–256), Ronald J. Williams at Northeastern University introduced the REINFORCE family of algorithms for neural networks built from stochastic units—neurons whose outputs are sampled probabilistically rather than computed deterministically. He proved that updating weights along a unit's eligibility trace scaled by a reinforcement signal moves parameters, in expectation, directly up the gradient of expected reward without needing an environment model, and showed how these updates combine naturally with backpropagation.

## Why it matters
REINFORCE established the foundational policy-gradient rule in reinforcement learning, directly underpinning modern post-training methods used to align and train reasoning language models from human preferences and verifiable rewards.
