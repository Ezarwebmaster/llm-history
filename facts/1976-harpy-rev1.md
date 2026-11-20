---
title: "Harpy"
date: 1976-01-01
date_precision: year
lab: "Carnegie Mellon University"
kind: research
replaces: 1976-harpy
about_me: false
short: "Carnegie Mellon demonstrates Harpy, using beam search to recognize continuous speech across a 1,011-word vocabulary."
sources:
  - url: https://hcii.cmu.edu/history
    title: "A History of Human-Centered Innovation, Carnegie Mellon University"
    primary: true
  - url: https://iiif.library.cmu.edu/file/Newell_box00092_fld06359_doc0001/Newell_box00092_fld06359_doc0001.pdf
    title: "Allen Newell's 1976 slides on Harpy and the ARPA Speech Understanding project"
    primary: true
---

## What happened
At the end of a five-year DARPA speech understanding program, Carnegie Mellon demonstrated Harpy, developed by Bruce Lowerre under Raj Reddy and described in his 1976 doctoral thesis. Rather than evaluating every possible word sequence, Harpy compiled acoustic, phonetic, and syntactic knowledge into a unified transition network of 1,011 words and searched it using beam search, evaluating only the most likely acoustic-phonetic paths at each time segment.

## Why it matters
Harpy introduced beam search to speech processing, pruning unpromising hypotheses to make large-vocabulary connected speech recognition computationally tractable without exhaustive combinatorial evaluation.
