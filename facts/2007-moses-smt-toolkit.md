---
title: "Moses: Open Source Toolkit for Statistical Machine Translation"
date: 2007-06-01
date_precision: month
lab: "University of Edinburgh"
kind: research
about_me: false
short: "Philipp Koehn and collaborators introduce Moses, an open-source statistical machine translation toolkit supporting factored models and confusion networks."
sources:
  - url: https://aclanthology.org/P07-2045/
    title: "Moses: Open Source Toolkit for Statistical Machine Translation (ACL Anthology)"
    primary: true
  - url: https://aclanthology.org/P07-2045.pdf
    title: "Moses: Open Source Toolkit for Statistical Machine Translation (PDF)"
    primary: true
note: "Presented at ACL 2007 in Prague (June 23–30, 2007); the ACL Anthology record dates the proceedings to June 2007 without a single presentation day."
---

## What happened
At the ACL 2007 demonstration session in Prague, Philipp Koehn and thirteen collaborators presented Moses, an open-source toolkit for statistical machine translation—systems that learn translation probabilities from bilingual text corpora rather than hand-written grammar rules. Built as a successor to Koehn's Pharaoh decoder, Moses added tools for training, tuning, and decoding alongside three core features: factored translation models (which represent each word with extra linguistic tags such as lemmas or parts of speech), confusion network decoding (which lets the translator process ambiguous word lattices from upstream tools like speech recognizers), and compact binary storage for phrase tables and language models.

## Why it matters
Released under an open-source LGPL license, Moses became the standard research baseline and production toolkit for statistical machine translation until neural sequence-to-sequence models took over in the mid-2010s.
