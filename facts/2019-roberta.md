---
title: "RoBERTa"
date: 2019-07-26
date_precision: day
lab: "Facebook AI & University of Washington"
kind: model
open_weights: true
about_me: false
short: "Facebook AI and UW release RoBERTa, showing BERT was undertrained and setting new state-of-the-art results by training longer on 160 GB of text."
specs:
  parameters: "125M and 355M"
sources:
  - url: https://arxiv.org/abs/1907.11692
    title: "RoBERTa: A Robustly Optimized BERT Pretraining Approach"
    primary: true
  - url: https://ai.meta.com/blog/roberta-an-optimized-method-for-pretraining-self-supervised-nlp-systems/
    title: "RoBERTa: An optimized method for pretraining self-supervised NLP systems"
    primary: true
---

## What happened
On July 26, 2019, researchers from Facebook AI and the University of Washington published RoBERTa (Robustly Optimized BERT Pretraining Approach), led by Yinhan Liu and Myle Ott. Presenting a careful replication study of BERT pre-training, the authors demonstrated that the original BERT model was significantly undertrained. By training on 160 GB of uncompressed text (expanding BookCorpus and Wikipedia with CC-News, OpenWebText, and Stories), increasing batch sizes up to 8,000 sequences, extending training to 500,000 steps, and removing BERT's next-sentence prediction objective, RoBERTa achieved state-of-the-art results across GLUE (88.5 score on RoBERTa-large), SQuAD, and RACE. The team published model weights in base (125M) and large (355M) configurations alongside open-source code.

## Why it matters
RoBERTa revealed that apparent algorithmic breakthroughs in self-supervised learning often stemmed from undertrained baselines and differing datasets. It established rigorous pre-training scaling practices and provided one of the most widely adopted foundational encoders in natural language processing.
