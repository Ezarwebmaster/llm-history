---
title: "SQuAD reading-comprehension dataset"
date: 2016-06-16
date_precision: day
lab: "Stanford University"
kind: research
about_me: false
short: "Stanford researchers post the SQuAD paper, introducing over 100,000 human-written questions whose answers are passages from Wikipedia."
sources:
  - url: https://arxiv.org/abs/1606.05250v1
    title: "SQuAD: 100,000+ Questions for Machine Comprehension of Text, first version"
    primary: true
  - url: https://arxiv.org/pdf/1606.05250v1
    title: "SQuAD original paper, methods and evaluation"
    primary: true
---

## What happened
On June 16, 2016, Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev and Percy Liang posted the first SQuAD paper to arXiv. The dataset contains more than 100,000 questions written by crowdworkers about Wikipedia articles. Each answer is a segment of the supplied passage: a system must locate the relevant words, rather than choose from a list of proposed answers.

## Why it matters
SQuAD provided a common test of whether a language system could connect a question to evidence in a document. The authors reported 51.0% F1 for their statistical model against 86.8% for humans; this measure compares the words in a predicted answer with those in reference answers. That gap left substantial room for improving machine reading.
