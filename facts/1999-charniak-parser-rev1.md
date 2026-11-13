---
title: "Charniak's Maximum-Entropy-Inspired Parser"
date: 1999-08-03
date_precision: day
lab: "Brown University"
kind: research
replaces: 2000-charniak-parser
about_me: false
short: "Eugene Charniak described a program that used words and their grammatical context to predict how an English sentence fits together."
sources:
  - url: https://cs.brown.edu/research/pubs/techreports/reports/99/cs99-12.pdf
    title: "A Maximum-Entropy-Inspired Parser (Brown University technical report)"
    primary: true
  - url: https://aclanthology.org/A00-2018.pdf
    title: "A Maximum-Entropy-Inspired Parser (NAACL 2000 conference paper)"
    primary: true
---

## What happened
In a report dated August 3, 1999, Eugene Charniak described a parser that ranked possible grammatical structures for an English sentence. It used clues such as the main word of a phrase and the kind of phrase containing it. The work later appeared at NAACL 2000.

## Why it matters
Researchers could compare the program's predictions with sentences that people had marked up by hand. On Wall Street Journal sentences up to 100 words long, 89.5% of the labeled phrases it proposed matched the reference analysis, and it recovered 89.6% of the reference phrases.
