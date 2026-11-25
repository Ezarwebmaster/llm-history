---
title: "Frustratingly Easy Domain Adaptation"
date: 2007-06-01
date_precision: month
lab: "University of Utah"
kind: research
about_me: false
short: "Hal Daumé III proposes a way to share what a text classifier learns across domains while keeping room for differences between them."
sources:
  - url: https://aclanthology.org/P07-1033/
    title: "Frustratingly Easy Domain Adaptation"
    primary: true
---

## What happened
In June 2007, University of Utah researcher Hal Daumé III published a method for adapting a text classifier to a new kind of text when some labeled examples from the new setting are available. He gave each input signal a shared version and a version specific to its setting. A classifier could then learn that “the” plays the same role in news and hardware reviews, while “monitor” is likelier to be a noun in reviews. The paper tested the method on tasks including named entity recognition and part-of-speech tagging.

## Why it matters
A change in how the inputs were represented let researchers reuse ordinary training algorithms when moving between kinds of text. The paper also showed where the method fell short, including tests on individual sections of the Brown corpus.
