---
title: "Large Language Models in Machine Translation"
date: 2007-06-01
date_precision: month
lab: Google
kind: research
about_me: false
short: "Google researchers train word-sequence language models on up to 2 trillion tokens and find that a very simple method nearly matches a careful one at that scale."
note: "The ACL Anthology gives only June 2007 for the EMNLP-CoNLL 2007 proceedings, so the fact is dated by month."
sources:
  - url: https://aclanthology.org/D07-1090/
    title: "Large Language Models in Machine Translation (ACL Anthology)"
    primary: true
  - url: https://apice.unibo.it/xwiki/bin/view/Publication/LlmEmnlpconll2007
    title: "Large Language Models in Machine Translation (APICe, University of Bologna)"
    primary: false
---

## What happened
In June 2007, at the EMNLP-CoNLL conference in Prague, Thorsten Brants, Ashok Popat, Peng Xu, Franz Och and Jeffrey Dean of Google presented a paper on very large language models for machine translation. These models count how often short word sequences (n-grams) appear in text. Their system, spread over many computers, trained on up to 2 trillion tokens and built models with up to 300 billion n-grams. They also introduced "Stupid Backoff", a cheap smoothing method (a way to score word sequences that never appeared in training), and reported that it comes close to Kneser-Ney smoothing, a more elaborate method, as the training data grows.

## Why it matters
The paper put the words "large language models" in its title years before chatbots, and it showed early that, with enough data, a crude method could nearly match a refined one.
