---
title: "Learning Phrase Representations using RNN Encoder-Decoder"
date: 2014-06-03
date_precision: day
lab: "University of Montreal"
kind: research
about_me: false
short: "Cho and colleagues describe a pair of neural networks that turns a phrase into a list of numbers and back into a phrase in another language."
note: "The date is the first arXiv version (3 June 2014); arXiv lists revisions on 24 July and 3 September 2014 and the paper was presented at EMNLP 2014."
sources:
  - url: https://arxiv.org/abs/1406.1078
    title: "Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/1406.1078
    title: "Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation (full text)"
    primary: true
---

## What happened
On June 3, 2014, Kyunghyun Cho, Yoshua Bengio and five co-authors, most of them at the University of Montreal, posted a paper describing the "RNN Encoder-Decoder": two neural networks trained together. The first, the encoder, reads a phrase word by word and compresses it into a fixed-length list of numbers; the second, the decoder, writes a phrase in another language from that list. The paper also proposes a new building block with two "gates" that decide what the network remembers and what it forgets, which the authors call much simpler than the LSTM unit that inspired it. The model did not translate alone: it scored phrase pairs inside an existing English-to-French system, lifting its test score from 33.30 to 33.87 BLEU, a standard measure of translation quality.

## Why it matters
Reading a sentence into numbers and writing another from them became the basic shape of neural translation, three months before Google's sequence-to-sequence paper.
