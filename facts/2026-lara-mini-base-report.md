---
title: "Lara Mini Base report studies multilingual capacity"
date: 2026-11-12
date_precision: day
lab: Translated
kind: research
about_me: false
short: "Translated publishes its Lara Mini Base report on a small active-parameter model trained in English and 44 other languages."
sources:
  - url: https://arxiv.org/abs/2611.16956
    title: "Lara Mini Base: Language Diversity as a Resource, Not a Trade-off"
    primary: true
---

## What happened
Translated posted a technical report describing Lara Mini Base, trained from scratch on six trillion tokens in English and 44 other languages, covering all 24 official European Union languages. It uses a mixture of experts: each token activates only part of the model, with 0.6 billion active parameters out of 7.2 billion total. The authors report that this architecture reduces competition for capacity between languages. They also state that the weights are released under CC BY-NC-SA 4.0.

## Why it matters
The report investigates whether a model with relatively few active parameters can support many languages without sacrificing performance in other tasks. Its comparisons treat language coverage and the amount of computation used per token as separate design choices.
