---
title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"
date: 2019-01-09
date_precision: day
lab: "Carnegie Mellon & Google Brain"
kind: research
about_me: false
short: "Zihang Dai and collaborators introduce Transformer-XL, combining segment recurrence with relative positional encodings for longer context."
sources:
  - url: https://arxiv.org/abs/1901.02860
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"
    primary: true
  - url: https://aclanthology.org/P19-1285/
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (ACL 2019)"
    primary: false
---

## What happened
On January 9, 2019, researchers from Carnegie Mellon University and Google Brain submitted the Transformer-XL paper to arXiv. Standard Transformers processed text in isolated, fixed-length segments (typically 512 tokens), causing context fragmentation and preventing models from learning longer-term dependencies. Transformer-XL solved this by introducing segment-level recurrence, reusing hidden representations from previous segments as memory, and relative positional encodings to keep position information consistent across segment shifts.

## Why it matters
Transformer-XL enabled self-attention networks to evaluate sequences up to 80 percent longer than recurrent networks and significantly faster than vanilla Transformers, setting state-of-the-art results on WikiText-103 and enwik8 and laying the foundation for XLNet.
