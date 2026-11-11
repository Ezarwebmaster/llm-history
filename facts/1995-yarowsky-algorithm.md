---
title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods"
date: 1995-06-26
date_precision: day
lab: "University of Pennsylvania"
kind: research
about_me: false
short: "David Yarowsky presents an unsupervised bootstrapping algorithm for word sense disambiguation using collocation and discourse constraints."
note: "Presented at the 33rd Annual Meeting of the ACL held June 26–30, 1995; the ACL Anthology records the proceedings in June 1995."
sources:
  - url: https://aclanthology.org/P95-1026/
    title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods (ACL Anthology)"
    primary: true
  - url: https://aclanthology.org/P95-1026.pdf
    title: "Unsupervised Word Sense Disambiguation Rivaling Supervised Methods (paper)"
    primary: true
---

## What happened
On June 26, 1995, at the 33rd Annual Meeting of the ACL in Cambridge, Massachusetts, David Yarowsky of the University of Pennsylvania presented an unsupervised bootstrapping algorithm for word sense disambiguation. The method begins with a few seed collocations and iteratively trains decision lists on unlabelled text, exploiting two linguistic regularities: words consistently carry one sense per collocation and one sense per discourse. On a 460-million-word corpus, it matched supervised models trained on manual tags with over 96% accuracy.

## Why it matters
The Yarowsky algorithm demonstrated that unlabelled data and simple linguistic constraints could match expensive hand-annotated corpora, establishing bootstrapping and self-training as viable paths in statistical natural language processing.
