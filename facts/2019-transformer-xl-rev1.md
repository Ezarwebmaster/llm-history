---
title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context"
date: 2019-01-09
date_precision: day
lab: "Carnegie Mellon & Google Brain"
kind: research
replaces: 2019-transformer-xl
about_me: false
short: "Zihang Dai and collaborators introduce Transformer-XL, combining segment recurrence with relative positional encodings for longer context."
sources:
  - url: https://arxiv.org/abs/1901.02860
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/1901.02860
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (full text)"
    primary: true
  - url: https://aclanthology.org/P19-1285/
    title: "Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (ACL 2019)"
    primary: false
---

## What happened
On January 9, 2019, Zihang Dai and collaborators at Carnegie Mellon University and Google Brain submitted the Transformer-XL paper to arXiv. Standard language-modeling Transformers split text into isolated, fixed-length segments of a few hundred characters or symbols without passing information across boundaries, causing context fragmentation and preventing models from capturing longer-term dependencies. Transformer-XL addressed this by introducing segment-level recurrence—caching and reusing hidden states from previous segments as memory—combined with relative positional encodings that keep distance information consistent across segment shifts.

## Why it matters
The authors reported that Transformer-XL learned dependencies about 80% longer than recurrent networks and 450% longer than vanilla Transformers, while evaluating up to 1,800+ times faster than vanilla Transformers by reusing cached segment representations, improving results on WikiText-103 and enwik8 and laying the foundation for XLNet.
