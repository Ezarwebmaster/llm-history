---
title: "XLNet"
date: 2019-06-19
date_precision: day
lab: "Carnegie Mellon & Google"
kind: research
short: "Yang, Dai and colleagues post XLNet, a pretraining method that predicts words in many orders and outperforms BERT on 20 tasks."
sources:
  - url: https://arxiv.org/abs/1906.08237
    title: "XLNet: Generalized Autoregressive Pretraining for Language Understanding"
    primary: true
note: "Dated from the arXiv v1 submission of 19 June 2019. Authors are from Carnegie Mellon University and Google AI Brain Team."
---

## What happened
Zhilin Yang, Zihang Dai and co-authors from Carnegie Mellon University and Google's AI Brain team posted XLNet on arXiv on 19 June 2019. BERT hides some input words and predicts them, which ignores how the hidden words depend on each other. XLNet instead maximises the likelihood over all orders of the factorisation, so it learns context from both sides while keeping an autoregressive formulation that predicts one word at a time. The paper reports that XLNet outperforms BERT on 20 tasks, often by a large margin, including question answering, natural language inference and sentiment analysis.

## Why it matters
XLNet showed that the way a model is pretrained can change results as much as its architecture does. Its critique of BERT's masking made the trade-off between bidirectional context and pretraining mismatch a central question for later work.
