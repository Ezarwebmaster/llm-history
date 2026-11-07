---
title: "Recurrent neural network based language model"
date: 2010-09-26
date_precision: day
lab: "Brno University of Technology"
kind: research
about_me: false
short: "Mikolov and colleagues introduce recurrent neural network language models, cutting perplexity by 50% compared to backoff n-gram models."
sources:
  - url: https://www.isca-archive.org/interspeech_2010/mikolov10_interspeech.html
    title: "Recurrent neural network based language model (paper)"
    primary: true
  - url: https://www.isca-speech.org/archive/interspeech_2010
    title: "Interspeech 2010 Conference Proceedings"
    primary: false
---

## What happened
At Interspeech 2010 in Makuhari, Japan, Tomáš Mikolov and colleagues from Brno University of Technology and Johns Hopkins University presented a recurrent neural network language model (RNN LM) for speech recognition. By maintaining a recurrent hidden state that represents arbitrary context history, an ensemble of RNN language models reduced perplexity by around 50% compared to a state-of-the-art backoff n-gram language model. In speech recognition experiments, the architecture reduced word error rate by roughly 18% on the Wall Street Journal benchmark.

## Why it matters
The paper provided early empirical proof that connectionist language models could decisively outperform traditional n-gram models with backoff, laying the groundwork for neural sequence modeling in natural language processing.
