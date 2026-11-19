---
title: "MMLU benchmark for multitask language understanding"
date: 2020-09-07
date_precision: day
lab: "UC Berkeley, Columbia, UChicago & UIUC"
kind: research
about_me: false
replaces: 2020-mmlu
short: "Hendrycks and colleagues introduce MMLU, a multiple-choice test of 57 subjects for measuring what language models know and how well they solve problems."
note: "The paper gives 15,908 questions in total, but its splits (5 per subject, 1,540 validation, 14,079 test) add up to 15,904. Both figures are the paper's own; the gap is unexplained."
sources:
  - url: https://arxiv.org/abs/2009.03300
    title: "Measuring Massive Multitask Language Understanding (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/2009.03300
    title: "Measuring Massive Multitask Language Understanding (full text)"
    primary: true
  - url: https://en.wikipedia.org/wiki/MMLU
    title: "MMLU (Wikipedia)"
---

## What happened
On September 7, 2020, Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song and Jacob Steinhardt posted the MMLU (Massive Multitask Language Understanding) paper, later presented at ICLR 2021. Students collected its questions from free online sources such as practice exams, across 57 subjects in the humanities, social sciences, STEM and other fields. The paper reports 15,908 questions. Given a few worked examples, the 175-billion-parameter GPT-3 averaged 43.9% against 25% for random guessing; UnifiedQA reached 48.9%. The authors estimated expert-level accuracy at about 89.8%.

## Why it matters
Models were uneven: near chance on subjects such as morality and law, and often unaware when they were wrong. MMLU became one of the most commonly used benchmarks for comparing large language models; by mid-2024 leading models scored about 88%, and harder tests began to replace it.
