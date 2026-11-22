---
title: "BERTScore: Evaluating Text Generation with BERT"
date: 2019-04-21
date_precision: day
lab: "Cornell University & ASAPP"
kind: research
about_me: false
replaces: 2019-bertscore
short: "Tianyi Zhang and colleagues introduce BERTScore, measuring text generation quality by matching contextual BERT token embeddings instead of exact words."
sources:
  - url: https://arxiv.org/abs/1904.09675
    title: "BERTScore: Evaluating Text Generation with BERT (arXiv)"
    primary: true
---

## What happened
On April 21, 2019, Tianyi Zhang, Varsha Kishore, Felix Wu, Kilian Q. Weinberger, and Yoav Artzi from Cornell University and ASAPP Inc. submitted "BERTScore: Evaluating Text Generation with BERT" on arXiv (`1904.09675`). Traditional text evaluation metrics such as BLEU and ROUGE count exact word-sequence (n-gram) matches and penalize valid paraphrases. BERTScore instead encodes candidate and reference sentences with pre-trained BERT contextual embeddings (vector representations that depend on surrounding words), greedily pairs each token with its closest match by cosine similarity (angle between vectors), and combines matches into precision, recall, and F1 scores, optionally weighting rarer words more heavily via inverse document frequency (IDF).

## Why it matters
Evaluated across 363 machine translation and image captioning systems, BERTScore correlated better with human judgments than surface-level metrics, establishing embedding-based similarity as a standard tool for evaluating generated text.
