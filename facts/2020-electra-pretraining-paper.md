---
title: "ELECTRA's replaced-token pre-training paper"
date: 2020-03-23
date_precision: day
lab: "Google Brain & Stanford University"
kind: research
about_me: false
short: "The ELECTRA paper proposes training text encoders to detect replaced words instead of reconstructing hidden ones."
sources:
  - url: https://arxiv.org/abs/2003.10555
    title: "ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators"
    primary: true
---

## What happened
Kevin Clark, Minh-Thang Luong, Quoc V. Le and Christopher D. Manning submitted the ELECTRA paper to arXiv. A small generator supplies plausible replacement words, and a second network learns to identify which words were replaced. Unlike learning only from hidden positions, this training task supplies a signal at every input position.

## Why it matters
The authors reported better language-understanding results than BERT with the same model size, data and computation, with particularly strong gains for small models. The paper showed that changing what a language model learns to predict could improve training efficiency, rather than relying only on larger networks or more computing power.
