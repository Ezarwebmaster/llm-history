---
title: "SpecCTMC: Exact Speculative Simulation for Diffusion LMs"
date: 2026-11-05
date_precision: day
lab: "Australian National University"
kind: research
short: "Researchers introduce SpecCTMC, accelerating masked diffusion language model sampling without altering the continuous-time Markov chain distribution."
sources:
  - url: https://arxiv.org/abs/2611.08362
    title: "SpecCTMC: Exact Speculative Simulation of Diffusion Language Model Continuous-Time Markov Chains"
    primary: true
---

## What happened
On November 5, 2026, researchers at the Australian National University and the National University of Singapore published SpecCTMC, a training-free speculative sampling algorithm for masked diffusion language models. The method proposes token updates using previously computed model predictions and evaluates intermediate states in parallel with an exact acceptance procedure, avoiding both time-discretization error and parallel factorization artifacts.

## Why it matters
Masked diffusion language models offer non-autoregressive parallel generation, but standard fast decoding often degrades generation quality. SpecCTMC achieves a 1.73x to 4.38x reduction in sequential evaluations while mathematically preserving the exact sampling distribution.
