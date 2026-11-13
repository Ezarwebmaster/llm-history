---
title: "Dropout"
date: 2012-07-03
date_precision: day
lab: "University of Toronto"
kind: research
about_me: false
short: "Geoffrey Hinton's Toronto group posts dropout, which switches off random hidden units during training so large neural networks overfit less."
sources:
  - url: https://arxiv.org/abs/1207.0580
    title: "Improving neural networks by preventing co-adaptation of feature detectors (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/1207.0580
    title: "Improving neural networks by preventing co-adaptation of feature detectors (full text)"
---

## What happened
On July 3, 2012, Geoffrey Hinton, Nitish Srivastava, Alex Krizhevsky, Ilya Sutskever and Ruslan Salakhutdinov of the University of Toronto posted a paper on arXiv describing "dropout". During training, each hidden unit of a neural network is left out at random with probability 0.5, so no unit can lean on a few specific partners. At test time the whole network runs, with its outgoing weights halved. The authors describe this as a very efficient way to average many networks. It cut errors on handwritten digits, images and Reuters news articles, and on the TIMIT speech test it set a record for methods that use no information about who is speaking.

## Why it matters
A large network trained on a small dataset tends to memorise it and fail on new examples, which is called overfitting. Dropout offered a cheap remedy that needs no extra data.
