---
title: "A Hierarchical Phrase-Based Model for Statistical Machine Translation"
date: 2005-06-01
date_precision: month
lab: "University of Maryland"
kind: research
about_me: false
short: "David Chiang introduces Hiero, a statistical machine translation system using hierarchical phrases learned from parallel text without treebanks."
sources:
  - url: https://aclanthology.org/P05-1033/
    title: "A Hierarchical Phrase-Based Model for Statistical Machine Translation (ACL Anthology)"
    primary: true
note: "Presented at ACL 2005 in Ann Arbor (June 25–30, 2005); the ACL Anthology record dates the proceedings to June 2005 without a single presentation day."
---

## What happened
In June 2005 at ACL 2005, David Chiang of the University of Maryland presented Hiero, a statistical machine translation model built on hierarchical phrases—phrase pairs that contain nested gaps for sub-phrases. Chiang formalized the rules as a synchronous context-free grammar (a paired grammar that generates source and target sentences together) and extracted them automatically from unannotated parallel text, without needing human-annotated syntax trees. Evaluated using BLEU on Chinese-to-English translation, Hiero achieved a statistically significant improvement over Philipp Koehn's flat phrase-based Pharaoh decoder.

## Why it matters
Hiero bridged flat phrase-based translation and syntax-based translation without relying on external parsers, capturing long-range word reorderings and becoming a standard paradigm in statistical machine translation before neural sequence-to-sequence models.
