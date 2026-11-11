---
title: "SWE-2 Flash"
date: 2026-11-04
date_precision: day
lab: "Cognition"
kind: model
open_weights: false
about_me: false
short: "Cognition releases SWE-2 Flash, a fast coding model built by further training Thinking Machines' Inkling-Small, and keeps its weights private for now."
specs:
  parameters: "276B total, 12B active"
sources:
  - url: https://cognition.com/blog/swe-2-flash
    title: "SWE-2 Flash (Cognition blog)"
    primary: true
---

## What happened
On November 4, 2026, Cognition, the company behind the coding agent Devin, released SWE-2 Flash, a model for everyday engineering work such as code review, feature development and documentation. Cognition did not train it from scratch: it started from Inkling-Small, a model made by Thinking Machines, and trained it further for coding. Cognition reports that this raised the score on Terminal-Bench 4.0, a test of work in a command line, from 0.9% to 20.0%, and says the model writes about 200 tokens per second against 60 for its larger sibling, SWE-2. It is available in Devin Desktop and the Devin command-line tool. Cognition says it is not sharing the weights publicly yet because of cybersecurity risks, and plans a programme to share them with trusted partners and research labs.

## Why it matters
It shows a product company turning another lab's general model into a specialist, rather than building its own from nothing.
