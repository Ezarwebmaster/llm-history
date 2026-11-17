---
title: "Neural Machine Translation by Jointly Learning to Align and Translate"
date: 2014-09-01
date_precision: day
lab: "Jacobs University Bremen & Montreal"
kind: research
about_me: false
replaces: 2014-bahdanau-attention
short: "Bahdanau, Cho, and Bengio introduce an alignment-based attention mechanism, preventing neural translation quality from dropping on longer sentences."
sources:
  - url: https://arxiv.org/abs/1409.0473
    title: "Neural Machine Translation by Jointly Learning to Align and Translate (arXiv)"
    primary: true
note: "Submitted to arXiv on 1 September 2014 (v1) and subsequently presented at ICLR 2015."
---

## What happened
On September 1, 2014, Dzmitry Bahdanau of Jacobs University Bremen with Kyunghyun Cho and Yoshua Bengio of the University of Montreal submitted "Neural Machine Translation by Jointly Learning to Align and Translate" to arXiv. Prior neural encoder-decoders compressed an entire source sentence into one fixed-length vector, degrading translation quality on longer sentences. Bahdanau and colleagues added a soft-alignment attention mechanism: a bidirectional recurrent encoder annotates every input word, and the decoder weights those annotations dynamically at each output step. On WMT '14 English-to-French translation, `RNNsearch-50*` (trained on sentences up to 50 words) scored 28.45 BLEU overall and 36.15 BLEU without unknown words—compared to 33.30 and 35.63 for the Moses baseline—without degrading on longer inputs.

## Why it matters
Replacing fixed-length compression with learned soft alignment kept translation quality steady on longer sentences and made neural models competitive with phrase-based systems.
