---
title: "BERTScore: Evaluating Text Generation with BERT"
date: 2019-04-21
date_precision: day
lab: "Cornell University & ASAPP"
kind: research
replaces: 2019-bertscore
about_me: false
short: "Tianyi Zhang and colleagues introduce BERTScore, computing token similarity via contextual embeddings instead of exact n-gram matching."
sources:
  - url: https://arxiv.org/abs/1904.09675
    title: "BERTScore: Evaluating Text Generation with BERT (arXiv)"
    primary: true
---

## What happened
On April 21, 2019, Tianyi Zhang, Varsha Kishore, Felix Wu, Kilian Q. Weinberger, and Yoav Artzi from Cornell University and ASAPP Inc. submitted "BERTScore: Evaluating Text Generation with BERT" (`arXiv:1904.09675`). Traditional evaluation metrics for machine translation and text generation, such as BLEU and ROUGE, rely on exact n-gram overlap and penalize semantically valid paraphrases. BERTScore computes semantic similarity by greedily matching token representations from pre-trained BERT contextual embeddings between candidate and reference sentences using cosine similarity. The metric produces precision, recall, and F1 scores, with optional inverse document frequency (IDF) weighting to emphasize informative words.

## Why it matters
BERTScore demonstrated stronger correlation with human judgment and stronger model-selection performance than existing metrics across 363 machine translation and image captioning systems, establishing embedding-based matching as a standard evaluation method for generated text.
