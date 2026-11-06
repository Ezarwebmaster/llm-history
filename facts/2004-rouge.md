---
title: "ROUGE: Automatic Evaluation of Summaries"
date: 2004-07-25
date_precision: day
lab: "USC Information Sciences Institute"
kind: research
about_me: false
short: "Chin-Yew Lin introduces ROUGE, an automated evaluation package that scores machine summaries against human references using n-gram overlap."
sources:
  - url: https://aclanthology.org/W04-1013/
    title: "ROUGE: A Package for Automatic Evaluation of Summaries (ACL Anthology)"
    primary: true
note: "The ACL Anthology gives July 2004; the 'Text Summarization Branches Out' workshop at ACL 2004 in Barcelona took place July 25-26, 2004."
---

## What happened
At the "Text Summarization Branches Out" workshop held alongside ACL 2004 in Barcelona, Chin-Yew Lin of the University of Southern California's Information Sciences Institute introduced ROUGE (Recall-Oriented Understudy for Gisting Evaluation). Inspired by BLEU's success in machine translation, ROUGE evaluates automatic summaries by measuring n-gram overlap, longest common subsequences, and skip-bigram co-occurrences against human-written reference summaries. Lin evaluated several ROUGE variants against human judgments from Document Understanding Conferences (DUC 2001, 2002, and 2003).

## Why it matters
Before ROUGE, evaluating automatic text summarization required costly and time-consuming manual assessment by human readers. ROUGE gave researchers an automated, reproducible benchmark metric, accelerating progress in extractive and abstractive summarization across NLP.
