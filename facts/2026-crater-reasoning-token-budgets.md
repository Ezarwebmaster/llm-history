---
title: "CRATER: Competing Risks for Reasoning Under Token Budgets"
date: 2026-11-04
date_precision: day
lab: "Fudan University"
kind: research
about_me: false
short: "Fudan University researchers introduce CRATER, modeling correct, wrong, and unfinished reasoning traces under token limits via competing-risks statistics."
sources:
  - url: https://arxiv.org/abs/2611.05860
    title: "Right, Wrong, or Unfinished: A Competing Risks Framework for Language-Model Reasoning under Token Budgets (arXiv)"
    primary: true
---

## What happened
On November 4, 2026, Boen Jiang, Guanhua Fang, and Wen Yu at Fudan University submitted "Right, Wrong, or Unfinished: A Competing Risks Framework for Language-Model Reasoning under Token Budgets" (`arXiv:2611.05860`), introducing CRATER (Competing Risks Analysis of Token Expenditure in Reasoning). Under a strict generation cap, a reasoning model's trace can finish right, finish wrong, or get cut off mid-thought. Standard evaluations score cut-off outputs simply as wrong. CRATER instead uses competing-risks analysis—a statistical method tracking mutually exclusive outcomes over an expenditure axis—to treat correct and wrong completions as distinct events and truncated answers as unfinished observations whose true length exceeded the cap. The resulting distribution predicts the probabilities of right, wrong, and unfinished outcomes alongside expected token usage across arbitrary budgets.

## Why it matters
Separating reasoning mistakes from budget truncation lets systems choose model configurations and token caps before generation and estimate multi-attempt pass rates without re-benchmarking every budget.
