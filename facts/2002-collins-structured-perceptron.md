---
title: "Discriminative Training of HMMs with Perceptron Algorithms"
date: 2002-07-01
date_precision: month
lab: "AT&T Labs – Research"
kind: research
about_me: false
short: "Michael Collins introduces the structured perceptron for sequence tagging, using Viterbi decoding and additive weight updates on whole sentences."
sources:
  - url: https://aclanthology.org/W02-1001/
    title: "Discriminative Training Methods for Hidden Markov Models: Theory and Experiments with Perceptron Algorithms (ACL Anthology)"
    primary: true
---

## What happened
In July 2002, Michael Collins of AT&T Labs – Research presented "Discriminative Training Methods for Hidden Markov Models: Theory and Experiments with Perceptron Algorithms" at the Conference on Empirical Methods in Natural Language Processing (EMNLP 2002) in Philadelphia. Extending Frank Rosenblatt's perceptron classifier and Yoav Freund and Robert Schapire's voted and averaged perceptron to sequential language tasks, Collins proposed finding the highest-scoring tag sequence for each training sentence with the Viterbi search algorithm and adding to the feature weights of the true sequence while subtracting from the predicted sequence whenever they differed. On Wall Street Journal part-of-speech tagging and CoNLL-2000 base noun-phrase chunking, the averaged perceptron reduced relative tagging error by 11.9% and chunking error by 5.1% compared with a maximum-entropy tagger.

## Why it matters
The structured perceptron gave natural language processing a fast, simple discriminative training rule for sequences and parse trees without computing the costly global normalization required by conditional random fields.
