---
title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods"
date: 1995-06-01
date_precision: month
lab: "University of Pennsylvania"
kind: research
about_me: false
short: "David Yarowsky shows a program can learn which meaning of a word is intended from unlabelled text, starting from a few seed examples."
note: "The ACL Anthology gives only June 1995 for the 33rd Annual Meeting of the ACL in Cambridge, Massachusetts, so the date is recorded by month."
sources:
  - url: https://aclanthology.org/P95-1026/
    title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods (ACL Anthology)"
    primary: true
  - url: https://aclanthology.org/P95-1026.pdf
    title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods (paper, PDF)"
    primary: true
---

## What happened
In June 1995, at the Annual Meeting of the Association for Computational Linguistics in Cambridge, Massachusetts, David Yarowsky of the University of Pennsylvania presented a way to teach a program which meaning of a word is intended ("plant" as a living thing or as a factory) without text labelled by hand. It relies on two observations: a word tends to keep one meaning within a document, and one meaning beside the same neighbouring words. Starting from a few seed examples of each meaning, the program labels the cases it is most sure of, learns new clues from them, and repeats. The paper reports accuracy above 96%, rivalling methods trained on hand-labelled examples.

## Why it matters
Labelling text by hand was slow and costly. The paper showed that a little human guidance and a lot of raw text could do nearly as well, an idea that later language models pushed much further.
