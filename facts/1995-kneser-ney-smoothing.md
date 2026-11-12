---
title: "Improved Backing-Off for M-Gram Language Modeling (Kneser-Ney Smoothing)"
date: 1995-05-01
date_precision: month
lab: "Philips Research & RWTH Aachen"
kind: research
about_me: false
short: "Reinhard Kneser and Hermann Ney introduce Kneser-Ney smoothing, optimizing n-gram back-off probabilities by how many contexts a word completes."
sources:
  - url: https://doi.org/10.1109/ICASSP.1995.479394
    title: "Improved backing-off for M-gram language modeling (ICASSP 1995)"
    primary: true
note: "Presented at IEEE ICASSP 1995 in Detroit, Michigan (May 9–12, 1995); the IEEE proceedings record dates the publication to May 1995 without a single presentation day."
---

## What happened
In May 1995 at ICASSP 1995, Reinhard Kneser of Philips GmbH Research Laboratories and Hermann Ney of RWTH Aachen University presented "Improved backing-off for M-gram language modeling." When an n-gram language model (a model predicting the next word from the preceding words) encounters an unseen word sequence, it backs off to a lower-order probability distribution. Kneser and Ney showed that using raw word frequencies for back-off overweights words that appear often inside a single fixed phrase, and derived a lower-order distribution proportional to the number of distinct preceding contexts a word completes. In their experiments, the method reduced perplexity by about 10% and speech recognition word error rate by about 5%.

## Why it matters
Known as Kneser-Ney smoothing, continuation-based back-off became the standard probability estimation method for statistical n-gram language models in speech recognition and machine translation for the next two decades.
