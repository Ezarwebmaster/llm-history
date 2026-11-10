---
title: "An Empirical Study of Smoothing Techniques for Language Modeling"
date: 1996-06-11
date_precision: day
lab: "Harvard University"
kind: research
about_me: false
short: "Chen and Goodman compare smoothing methods for n-gram language models on equal terms and introduce two new ones they report outperform the rest."
sources:
  - url: https://aclanthology.org/P96-1041/
    title: "An Empirical Study of Smoothing Techniques for Language Modeling (ACL Anthology)"
    primary: true
  - url: https://arxiv.org/abs/cmp-lg/9606011
    title: "An Empirical Study of Smoothing Techniques for Language Modeling (arXiv cmp-lg/9606011)"
    primary: true
note: "The arXiv preprint gives the exact posting date, 11 June 1996; the ACL Anthology record of the conference paper (34th Annual Meeting of the ACL, Santa Cruz) gives only June 1996."
---

## What happened
On 11 June 1996, Stanley Chen and Joshua Goodman of Harvard University posted a paper, presented that month at the Association for Computational Linguistics meeting in Santa Cruz, comparing smoothing techniques for n-gram language models. An n-gram model predicts the next word from the few words before it; smoothing is how it gives a probability to word sequences it never saw in training. They tested the methods of Jelinek and Mercer, Katz, and Church and Gale on the same data, scored by the cross-entropy of held-out text, and studied how training-set size, corpus and n-gram order change the results. They also introduced two new techniques, a variation of Jelinek-Mercer smoothing and a simple linear interpolation, which they report outperform existing methods.

## Why it matters
Statistical language models lived or died by how they handled unseen word sequences. Testing the main techniques side by side gave builders of n-gram systems evidence to choose by.
