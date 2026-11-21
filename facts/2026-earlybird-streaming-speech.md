---
title: "Earlybird predicts words during streaming speech"
date: 2026-11-10
date_precision: day
lab: Sahil Mahendrakar
kind: research
about_me: false
short: "Earlybird explores predicting words before a speaker has finished saying them."
sources:
  - url: https://arxiv.org/abs/2611.14421
    title: "Earlybird: Predictive Streaming Speech Recognition in 29M Parameters"
    primary: true
---

## What happened
Sahil Mahendrakar presented Earlybird, a speech recognizer trained on audio cut off at random points, including mid-word, to predict the current word and guess the next two. On a clean audiobook test, the paper reports that the median word was correctly predicted before the speaker finished it.

## Why it matters
A voice assistant can begin preparing a response sooner if it can make useful predictions during speech. Predictions can also be wrong, so the paper studies confidence in words that are still being spoken.
