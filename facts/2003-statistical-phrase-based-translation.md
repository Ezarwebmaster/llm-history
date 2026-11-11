---
title: "Statistical Phrase-Based Translation"
date: 2003-05-01
date_precision: month
lab: "USC Information Sciences Institute"
kind: research
about_me: false
short: "Koehn, Och, and Marcu show that translating multi-word phrases extracted from word alignments outperforms word-based statistical machine translation."
sources:
  - url: https://aclanthology.org/N03-1017/
    title: "Statistical Phrase-Based Translation (ACL Anthology)"
    primary: true
  - url: https://aclanthology.org/N03-1017.pdf
    title: "Statistical Phrase-Based Translation (paper, PDF)"
    primary: true
note: "The HLT-NAACL 2003 conference ran May 27 to June 1, 2003 in Edmonton; the ACL Anthology record lists May–June 2003."
---

## What happened
At HLT-NAACL 2003 in Edmonton, Philipp Koehn, Franz Josef Och, and Daniel Marcu of the University of Southern California's Information Sciences Institute compared phrase-based methods for statistical machine translation. Earlier statistical systems translated one word at a time, as in IBM Model 4. The authors extracted matching multi-word phrases directly from bidirectional word alignments and scored them using phrase probabilities alongside lexical weighting—scoring each word against its aligned counterpart. Evaluating on Europarl parliamentary transcripts and other corpora with BLEU, an automated translation quality metric, they found that simple heuristically learned phrase tables outperformed word-based IBM Model 4 baselines.

## Why it matters
Translating whole phrases preserved local word order and idiomatic expressions that word-by-word models broke apart. The approach became the standard architecture for statistical machine translation and directly underpinned widely used open-source toolkits such as Pharaoh and Moses.
