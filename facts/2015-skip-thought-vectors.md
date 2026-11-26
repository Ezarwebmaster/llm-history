---
title: "Skip-Thought Vectors"
date: 2015-06-22
date_precision: day
lab: "University of Toronto"
kind: research
about_me: false
short: "Researchers introduce Skip-Thought Vectors, training an unsupervised encoder-decoder to produce generic sentence embeddings by predicting adjacent sentences."
sources:
  - url: https://arxiv.org/abs/1506.06726
    title: "Skip-Thought Vectors (arXiv)"
    primary: true
  - url: https://proceedings.neurips.cc/paper/2015/hash/f44ee26352e49e321852bd0323f306d2-Abstract.html
    title: "Skip-Thought Vectors — Advances in Neural Information Processing Systems 28 (NIPS 2015)"
---

## What happened
On June 22, 2015, Ryan Kiros, Yukun Zhu, Ruslan Salakhutdinov, Richard S. Zemel, Antonio Torralba, Raquel Urtasun, and Sanja Fidler posted "Skip-Thought Vectors" (arXiv:1506.06726), later presented at NIPS 2015. Extending the skip-gram idea from word embeddings to sentences, their neural model used a recurrent encoder to map a sentence into a continuous vector, and two recurrent decoders to predict the preceding and succeeding sentences. Trained on the BookCorpus collection of unpublished novels, the resulting fixed-length sentence embeddings transferred directly to semantic relatedness, paraphrase detection, and classification tasks without task-specific tuning.

## Why it matters
Skip-Thought Vectors showed that neural networks could learn generic sentence semantics from unannotated text by modeling sentence order, laying key groundwork for universal sentence embeddings and pre-trained contextual representations.
