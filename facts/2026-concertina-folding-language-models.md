---
title: "Concertina folds language models into shared layers"
date: 2026-11-13
date_precision: day
lab: Zhang and collaborators
kind: research
about_me: false
short: "Researchers propose Concertina, a way to build a smaller language model from an existing model's weights."
sources:
  - url: https://arxiv.org/abs/2611.18113
    title: "Folding Language Models into Themselves"
    primary: true
---

## What happened
Ziyang Zhang and colleagues proposed Concertina, which folds groups of adjacent layers from a larger model into a shared block run repeatedly. Corrections and a per-token gate help the shared block recover the behavior of the original layers.

## Why it matters
The research explores making a compact model directly from a larger model's learned weights, rather than training a smaller student from scratch using a teacher's outputs.
