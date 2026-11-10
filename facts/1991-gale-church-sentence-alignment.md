---
title: "A Program for Aligning Sentences in Bilingual Corpora"
date: 1991-06-01
date_precision: month
lab: "AT&T Bell Laboratories"
kind: research
about_me: false
short: "William Gale and Kenneth Church introduce a statistical method that pairs translated sentences in bilingual texts by comparing their character lengths."
note: "The ACL Anthology gives only June 1991 for the 29th Annual Meeting of the ACL in Berkeley, where the paper was first presented before its 1993 journal version, so the date is recorded by month."
sources:
  - url: https://aclanthology.org/P91-1023/
    title: "A Program for Aligning Sentences in Bilingual Corpora (ACL Anthology)"
    primary: true
  - url: https://en.wikipedia.org/wiki/Gale%E2%80%93Church_alignment_algorithm
    title: "Gale–Church alignment algorithm (Wikipedia)"
    primary: false
---

## What happened
In June 1991, at the Annual Meeting of the Association for Computational Linguistics in Berkeley, California, William A. Gale and Kenneth W. Church of AT&T Bell Laboratories presented a statistical method and program for aligning sentences with their translations in bilingual corpora (paired texts in two languages). Without relying on dictionaries or word translation rules, the Gale–Church algorithm uses the observation that longer sentences in one language tend to translate into longer sentences in the other. Measuring sentence length in characters and using dynamic programming (an optimization method that finds the best path step by step), it pairs one-to-one, two-to-one and merged sentences across parallel texts such as the English-French Canadian Hansards parliamentary records.

## Why it matters
Statistical machine translation needed large collections of sentence-aligned bilingual text, and character-length alignment made it practical to build those training sets automatically.
