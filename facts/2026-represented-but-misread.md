---
title: "A study separates represented information from language-model answers"
date: 2026-11-19
date_precision: day
lab: Jochen Laubrock
kind: research
about_me: false
short: "A preprint studies how post-training changes the answers models derive from information in their internal states."
sources:
  - url: https://arxiv.org/abs/2611.26584
    title: "Represented but misread"
    primary: true
---

## What happened
Jochen Laubrock posted a study comparing six open-weight base models with their post-trained versions. Simple classifiers reading internal states could distinguish human-written from AI-written German texts even when the models' own answers performed poorly. In a separate test of negated statements, post-training instead improved how models used internally represented truth information.

## Why it matters
The results suggest that detecting information inside a model does not establish that its answers use that information correctly. The author reports task-dependent effects rather than a universal deterioration after post-training, and notes that the German authorship corpora cannot be shared.
