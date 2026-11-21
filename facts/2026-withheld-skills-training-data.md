---
title: "Study tests how language models learn skills with fewer examples"
date: 2026-11-18
date_precision: day
lab: "Marosi and Antal"
kind: research
about_me: false
short: "A preprint finds that progress on general training data can reduce the examples needed to teach a specific skill."
sources:
  - url: https://arxiv.org/abs/2611.24844
    title: "General progress substitutes for specific training data in language models"
    primary: true
---

## What happened
Mark Marosi and Peter Antal posted a preprint on what happens when a language model receives less direct training on a specific skill. In one chess experiment, a model that received no direct training on which moves escape check ranked legal responses almost as well as a model that did. Across their experiments, more advanced models needed fewer examples when the withheld training signal was restored.

## Why it matters
The results suggest that what a model learns from the rest of its training can help it pick up a skill from relatively few direct examples. Counting how often a skill is taught therefore gives only a partial picture of what a model may learn.
