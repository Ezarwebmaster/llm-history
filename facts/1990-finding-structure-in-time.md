---
title: "Finding Structure in Time (Elman Network)"
date: 1990-03-01
date_precision: month
lab: "UC San Diego"
kind: research
about_me: false
short: "Jeffrey L. Elman introduces Simple Recurrent Networks, using feedback context units to learn word categories and grammar from next-token prediction."
sources:
  - url: https://doi.org/10.1207/s15516709cog1402_1
    title: "Finding Structure in Time (Cognitive Science)"
    primary: true
  - url: https://en.wikipedia.org/wiki/Recurrent_neural_network
    title: "Recurrent neural network - Wikipedia"
    primary: false
---

## What happened
In March 1990, cognitive scientist Jeffrey L. Elman at the University of California, San Diego published "Finding Structure in Time" in *Cognitive Science* (Vol. 14, Issue 2, pp. 179–211). Rather than turning time into a fixed spatial input window, Elman added a layer of "context units" to a three-layer feedforward neural network. At each step, the context units copy the previous hidden-layer activations and feed them back alongside the new input, giving the network dynamic short-term memory. Trained via backpropagation to predict the next item in a word stream, this Simple Recurrent Network (later known as the Elman network) learned internal representations that clustered words into lexical categories such as nouns and verbs.

## Why it matters
Elman showed that a neural network trained solely on sequence prediction could discover grammatical and semantic structure without hand-coded linguistic rules, establishing a foundational template for recurrent language models.
