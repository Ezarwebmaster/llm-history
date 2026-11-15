---
title: "Neural Machine Translation by Jointly Learning to Align and Translate"
date: 2014-09-01
date_precision: day
lab: "Jacobs University Bremen & Montreal"
kind: research
about_me: false
short: "Bahdanau, Cho and Bengio introduce the attention mechanism, allowing neural networks to dynamically focus on relevant input words during translation."
sources:
  - url: https://arxiv.org/abs/1409.0473
    title: "Neural Machine Translation by Jointly Learning to Align and Translate (arXiv)"
    primary: true
note: "The paper was first submitted to arXiv on 1 September 2014 (v1) and subsequently presented at ICLR 2015."
---

## What happened
On September 1, 2014, Dzmitry Bahdanau of Jacobs University Bremen together with Kyunghyun Cho and Yoshua Bengio of the University of Montreal published "Neural Machine Translation by Jointly Learning to Align and Translate" on arXiv. Prior neural translation systems compressed an entire input sentence into a single fixed-length vector before decoding, causing severe quality drops on longer sentences. Bahdanau and colleagues introduced an attention mechanism where the decoder searches across all hidden states of the bidirectional input encoder, computing a dynamic weighted sum for each generated word. On English-to-French WMT '14 translation, their attention model achieved 28.45 BLEU on sentences up to 50 words without degrading on long inputs.

## Why it matters
Replacing fixed-length vector compression with soft alignment allowed neural networks to translate sentences of arbitrary length and became the foundation for self-attention and the Transformer architecture.
