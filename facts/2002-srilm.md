---
title: "SRILM Language Modeling Toolkit"
date: 2002-09-01
date_precision: month
lab: "SRI International"
kind: research
about_me: false
short: "Andreas Stolcke introduces SRILM, an extensible toolkit of C++ libraries and utilities for statistical n-gram language modeling."
sources:
  - url: https://www.isca-archive.org/icslp_2002/stolcke02_icslp.html
    title: "SRILM - an extensible language modeling toolkit (ISCA Archive)"
    primary: true
  - url: https://doi.org/10.21437/ICSLP.2002-303
    title: "SRILM - an extensible language modeling toolkit (DOI)"
    primary: true
  - url: https://www.speech.sri.com/projects/srilm/
    title: "SRILM - The SRI Language Modeling Toolkit (SRI International)"
    primary: true
note: "Presented at ICSLP 2002 in Denver, Colorado (September 16–20, 2002); the ISCA Archive record dates the proceedings to September 2002 without a single presentation day."
---

## What happened
In September 2002 at the 7th International Conference on Spoken Language Processing (ICSLP 2002) in Denver, Andreas Stolcke of SRI International presented SRILM, an extensible toolkit for building and evaluating statistical language models (models that assign probabilities to word sequences). Begun at SRI International in 1995, SRILM pairs C++ class libraries with command-line executables and helper scripts to train and smooth n-gram models (which predict a word from the preceding few words), process word lattices, and manipulate n-best candidate lists for speech recognition, statistical tagging, and machine translation.

## Why it matters
Freely available for research use, SRILM standardized n-gram smoothing and evaluation across speech recognition and statistical machine translation for more than a decade before neural models replaced count-based tables.
