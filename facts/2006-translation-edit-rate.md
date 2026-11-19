---
title: "Translation Edit Rate (TER) and Targeted Human Annotation"
date: 2006-08-01
date_precision: month
lab: "University of Maryland & BBN"
kind: research
about_me: false
short: "Matthew Snover and colleagues introduce Translation Edit Rate (TER) and Human-Targeted TER (HTER) to evaluate machine translation by minimum edit distance."
sources:
  - url: https://aclanthology.org/2006.amta-papers.25/
    title: "A Study of Translation Edit Rate with Targeted Human Annotation (ACL Anthology)"
    primary: true
---

## What happened
In August 2006, at the 7th Conference of the Association for Machine Translation in the Americas (AMTA) in Cambridge, Massachusetts, Matthew Snover and Bonnie Dorr of the University of Maryland and Richard Schwartz, Linnea Micciulla, and John Makhoul of BBN Technologies presented Translation Edit Rate (TER). Unlike n-gram match metrics such as BLEU, TER measures the minimum number of word insertions, deletions, substitutions, and phrasal shifts needed to turn a machine translation output into a reference translation, normalized by average reference length. Treating contiguous phrase shifts as a single edit avoids over-penalizing valid reorderings. The authors also introduced Human-Targeted TER (HTER), where human annotators create a minimum-edit fluent reference tailored to each system output.

## Why it matters
TER and HTER gave machine translation researchers an interpretable metric based on post-editing effort, correlating more closely with human judgments than BLEU.
