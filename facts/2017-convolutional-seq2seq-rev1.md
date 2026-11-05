---
title: "Convolutional Sequence to Sequence Learning"
date: 2017-05-08
date_precision: day
lab: "Facebook AI Research"
kind: research
replaces: 2017-convolutional-seq2seq
about_me: false
short: "FAIR introduces ConvS2S, a convolutional sequence model for machine translation that generates translations 9.3 times faster on GPUs than recurrent networks."
sources:
  - url: https://arxiv.org/abs/1705.03122
    title: "Convolutional Sequence to Sequence Learning"
    primary: true
  - url: https://engineering.fb.com/2017/05/09/ai-research/a-novel-approach-to-neural-machine-translation/
    title: "A novel approach to neural machine translation"
---

## What happened
On May 8, 2017, Jonas Gehring and colleagues at Facebook AI Research published Convolutional Sequence to Sequence Learning, introducing a neural network architecture entirely composed of convolutional layers with gated linear units and attention for translating text. Unlike recurrent neural networks that process words strictly one by one, the convolutional approach allows computations over all elements to run in parallel during training. On the WMT 2014 English-German benchmark, the model reached 25.16 BLEU, outperforming existing recurrent models while generating translations 9.3 times faster on a K40 graphics processor. Facebook AI Research released the implementation and pre-trained models as open-source software in the fairseq toolkit.

## Why it matters
It demonstrated that sequence-to-sequence language modeling did not require recurrent networks, paving the way for parallelizable sequence architectures and highlighting the importance of multi-step attention over non-recurrent representations.
