---
title: "ULMFiT"
date: 2018-01-18
date_precision: day
lab: "fast.ai"
kind: research
replaces: 2018-ulmfit
about_me: false
short: "Howard and Ruder post ULMFiT, a recipe for fine-tuning a pretrained language model that beats the state of the art on six text-classification tasks."
sources:
  - url: https://arxiv.org/abs/1801.06146
    title: "Universal Language Model Fine-tuning for Text Classification"
    primary: true
  - url: https://aclanthology.org/P18-1031/
    title: "ACL Anthology: Universal Language Model Fine-tuning for Text Classification"
note: "Dated from the arXiv v1 submission of 18 January 2018; published at ACL 2018 and revised afterwards. This revision fixes the claim that ULMFiT beats training from scratch on the six tasks; the abstract says it matches training from scratch on 100x more data with only 100 labelled examples."
---

## What happened
Jeremy Howard of fast.ai and the University of San Francisco, and Sebastian Ruder of NUI Galway's Insight Centre and Aylien, posted ULMFiT — Universal Language Model Fine-tuning — on arXiv on 18 January 2018. The method pretrains a language model on a large general text corpus, then adapts it to one task with discriminative fine-tuning, a learning rate per layer, slanted triangular learning rates, and gradual unfreezing that releases the top layers first. The paper reports error reductions of 18-24% on the majority of six text-classification datasets, and that with only 100 labelled examples it matched training from scratch on 100 times more data.

## Why it matters
Transfer learning had already transformed computer vision, but in NLP each task still needed its own architecture and training from scratch. ULMFiT showed that one general pretrained language model could be fine-tuned for many tasks, the recipe the BERT and GPT era soon made standard.
