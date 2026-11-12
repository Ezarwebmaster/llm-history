---
title: "Collins's Lexicalized Statistical Parsers"
date: 1997-07-01
date_precision: month
lab: "University of Pennsylvania"
kind: research
about_me: false
short: "Michael Collins presents three generative lexicalized parsing models at ACL-EACL 1997, reaching 88.1% precision and 87.5% recall on Penn Treebank text."
sources:
  - url: https://aclanthology.org/P97-1003/
    title: "Three Generative, Lexicalised Models for Statistical Parsing (ACL Anthology)"
    primary: true
note: "Presented at ACL-EACL 1997 in Madrid, Spain in July 1997; the ACL Anthology record gives month precision (July 1997) without a single presentation day."
---

## What happened
In July 1997, at the joint ACL-EACL conference in Madrid, Michael Collins of the University of Pennsylvania presented three generative statistical parsing models for English. A lexicalized context-free grammar pairs each grammatical phrase category with a specific head word, letting probability estimates track how words tend to combine syntactically. Model 1 formulated a top-down, head-driven generative version of Collins's earlier parser; Model 2 added probabilistic subcategorization frames (tracking which arguments a verb or other head word requires versus optional modifiers); and Model 3 extended the formalism to model long-distance wh-movement in questions and relative clauses. Trained and tested on Wall Street Journal sentences from the Penn Treebank, the models reached 88.1% constituent precision and 87.5% recall.

## Why it matters
Collins's generative lexicalized models demonstrated that conditioning grammar rules on head words and subcategorization structure made statistical parsing accurate enough to anchor NLP pipelines for a decade.
