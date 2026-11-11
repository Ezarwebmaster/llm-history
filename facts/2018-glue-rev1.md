---
title: "GLUE Benchmark"
date: 2018-04-20
date_precision: day
lab: "New York University"
kind: research
about_me: false
replaces: 2018-glue
short: "Researchers introduce the GLUE benchmark, providing a unified evaluation suite and platform across nine natural language understanding tasks."
sources:
  - url: https://arxiv.org/abs/1804.07461
    title: "GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/1804.07461
    title: "GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding (full text)"
    primary: true
note: "The date is the first arXiv version (20 April 2018); arXiv lists revisions on 18 September 2018 and 22 February 2019, and the paper appeared at ICLR 2019."
---

## What happened
On April 20, 2018, Alex Wang and five co-authors from New York University, the University of Washington and DeepMind posted the General Language Understanding Evaluation (GLUE) benchmark. It gathers nine English tasks: judging single sentences (grammar in CoLA, sentiment in SST-2), spotting paraphrases (MRPC, STS-B, and QQP, which asks whether two questions mean the same thing), and inference, such as MNLI and RTE, or QNLI, which asks whether a sentence contains the answer to a question. Four tasks keep their test answers private, so systems are scored through the gluebenchmark.com website and its public leaderboard. A small hand-built diagnostic set helps find where systems fail.

## Why it matters
Earlier suites existed: SentEval tested only sentence encoders, and decaNLP recast its tasks as questions. GLUE accepted any model and gave the field one shared score, with a leaderboard and error-analysis tools.
