---
title: "A Simple Rule-Based Part of Speech Tagger"
date: 1992-02-01
date_precision: month
lab: "University of Pennsylvania"
kind: research
short: "Eric Brill presents a part-of-speech tagger that learns a small set of correction rules to match statistical taggers."
sources:
  - url: https://aclanthology.org/H92-1022/
    title: "A Simple Rule-Based Part of Speech Tagger"
    primary: true
---

## What happened
In February 1992, Eric Brill presented a part-of-speech tagger that builds itself from rules. It starts by labelling every word with its most common tag, then repeatedly learns small "transformation" rules that fix the errors such a naive labelling makes, until its accuracy approaches that of statistical taggers of the time.

## Why it matters
The transformation-based, error-driven approach showed that a compact set of learned rules could rival probabilistic methods while remaining readable, and the technique influenced later systems for tagging and parsing.