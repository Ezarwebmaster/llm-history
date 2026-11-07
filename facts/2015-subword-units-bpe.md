---
title: "Subword Units for Neural Machine Translation"
date: 2015-08-31
date_precision: day
lab: "University of Edinburgh"
kind: research
about_me: false
short: "Sennrich, Haddow and Birch adapt byte pair encoding to tokenize text into subword units, solving the open-vocabulary problem in neural language processing."
sources:
  - url: https://arxiv.org/abs/1508.07909
    title: "Neural Machine Translation of Rare Words with Subword Units"
    primary: true
---

## What happened
On August 31, 2015, Rico Sennrich, Barry Haddow and Alexandra Birch of the University of Edinburgh posted research showing how to handle rare and out-of-vocabulary words in neural translation using byte pair encoding (BPE). Instead of relying on fixed word vocabularies and back-off dictionaries, their method iteratively merges frequent pairs of characters into subword units, allowing neural models to represent unseen words through smaller meaningful pieces like roots and affixes.

## Why it matters
Subword tokenization via BPE became the universal foundation for tokenizing text in modern language models, from GPT and RoBERTa to contemporary frontier models, enabling open-vocabulary generation with compact token dictionaries.
