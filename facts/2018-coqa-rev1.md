---
title: "CoQA: A Conversational Question Answering Challenge"
date: 2018-08-21
date_precision: day
lab: "Stanford University"
kind: research
replaces: 2018-coqa
about_me: false
short: "Stanford researchers introduce CoQA, a dataset of 127,000 question-answer pairs across 8,000 conversations for conversational reading comprehension."
sources:
  - url: https://arxiv.org/abs/1808.07042
    title: "CoQA: A Conversational Question Answering Challenge"
    primary: true
  - url: https://stanfordnlp.github.io/coqa/
    title: "CoQA: A Conversational Question Answering Challenge"
    primary: true
---

## What happened
On August 21, 2018, Stanford NLP researchers Siva Reddy, Danqi Chen, and Christopher D. Manning introduced CoQA, a benchmark for conversational question answering. The dataset gathers 127,000 questions and free-form answers from 8,000 two-person conversations about text passages across seven domains, pairing each answer with passage evidence. The authors highlight that conversational questions introduce phenomena absent from single-turn reading comprehension datasets, such as coreference resolution and pragmatic reasoning. Across the overall benchmark, the strongest evaluated system scored 65.4% F1, trailing human performance of 88.8% by 23.4 points.

## Why it matters
Traditional question answering evaluated isolated queries against single passages. CoQA pushed natural language models toward multi-turn dialog understanding, requiring systems to track conversation history and resolve references across consecutive questions.
