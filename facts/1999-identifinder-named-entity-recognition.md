---
title: "IdentiFinder statistical named entity recognition"
date: 1999-02-01
date_precision: month
lab: "BBN Technologies"
kind: research
about_me: false
short: "Daniel M. Bikel, Richard Schwartz, and Ralph M. Weischedel publish IdentiFinder, a hidden Markov model that learns to extract named entities."
sources:
  - url: https://doi.org/10.1023/A:1007558221122
    title: "An Algorithm that Learns What's in a Name (Machine Learning)"
    primary: true
---

## What happened
In February 1999, Daniel M. Bikel, Richard Schwartz, and Ralph M. Weischedel at BBN Technologies published "An Algorithm that Learns What's in a Name" in the journal *Machine Learning*. The paper presented IdentiFinder, a statistical hidden Markov model—a sequence model that assigns probabilities to transitions between hidden category states and observed words—designed to recognize and classify names, dates, times, and numerical quantities. Using word-level orthographic features such as capitalization and digits alongside class-conditioned bigram language models, IdentiFinder achieved an F-measure of 94.9% on mixed-case English MUC-6 newswire and 90% on Spanish MET-1 text without handcrafted rules.

## Why it matters
IdentiFinder showed that trainable statistical sequence models could match or outperform labor-intensive rule-based systems across languages and speech transcripts, establishing sequence labeling as the standard approach for named entity recognition.
