---
title: "Collins's Lexicalized Statistical Parsers"
date: 1997-07-01
date_precision: month
lab: "University of Pennsylvania"
kind: research
about_me: false
replaces: 1997-collins-lexicalized-parsing
short: "Michael Collins presents three generative lexicalised parsing models at ACL-EACL 1997, reaching 88.1% precision and 87.5% recall on Wall Street Journal text."
sources:
  - url: https://aclanthology.org/P97-1003/
    title: "Three Generative, Lexicalised Models for Statistical Parsing (ACL Anthology)"
    primary: true
  - url: https://arxiv.org/abs/cmp-lg/9706022
    title: "Three Generative, Lexicalised Models for Statistical Parsing (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/cmp-lg/9706022
    title: "Three Generative, Lexicalised Models for Statistical Parsing (full text)"
note: "The arXiv copy was posted on 17 June 1997 as 'to appear in Proceedings of ACL/EACL 97'; the date kept is the July 1997 conference in Madrid given by the ACL Anthology."
---

## What happened
In July 1997, at the joint ACL-EACL conference in Madrid, Michael Collins of the University of Pennsylvania presented three statistical parsers, programs that build the grammatical tree of an English sentence. Each phrase carries its head word, so probabilities follow how particular words combine. Model 1 is a generative version of Collins's 1996 parser. Model 2 tells the objects a verb requires from optional modifiers. Model 3 handles relative clauses, where a word such as "which" stands for a noun moved from its usual place. Trained on Wall Street Journal sentences from the Penn Treebank and tested on 2,416 others, the parser found phrases with 88.1% precision and 87.5% recall.

## Why it matters
Collins wrote that most language applications need this information to work out who did what to whom. The parser improved on his 1996 one by 2.3% on average.
