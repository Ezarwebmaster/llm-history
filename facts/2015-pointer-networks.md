---
title: "Pointer Networks"
date: 2015-06-09
date_precision: day
lab: "Google Brain & UC Berkeley"
kind: research
about_me: false
short: "Researchers propose Pointer Networks, which select positions in an input sequence as output tokens."
sources:
  - url: https://arxiv.org/abs/1506.03134
    title: "Pointer Networks"
    primary: true
---

## What happened
Oriol Vinyals, Meire Fortunato and Navdeep Jaitly submitted a paper describing Pointer Networks. Instead of choosing each answer from a fixed vocabulary, the model uses attention to point to an item in its input. This lets the number of possible outputs vary with the input length. The paper tested the approach on geometric tasks, including convex hulls and the traveling salesperson problem.

## Why it matters
The architecture showed a way for sequence models to copy or select from variable-length inputs, a useful pattern for tasks where the possible answers are supplied with each example.
