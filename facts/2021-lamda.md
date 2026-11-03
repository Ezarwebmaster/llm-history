---
title: "LaMDA"
date: 2021-05-18
date_precision: day
lab: Google
kind: model
short: "Google unveils LaMDA, a dialogue model that holds open-ended conversations and checks its answers against outside sources."
specs:
  parameters: "137B non-embedding"
sources:
  - url: https://arxiv.org/abs/2201.08239
    title: "LaMDA: Language Models for Dialog Applications (Thoppilan et al.)"
    primary: true
  - url: https://www.zdnet.com/article/google-io-google-unveils-new-conversational-language-model-lamda/
    title: "Google I/O 2021: Google unveils LaMDA"
    primary: false
  - url: https://en.wikipedia.org/wiki/LaMDA
    title: "LaMDA — Wikipedia"
    primary: false
note: "The announcement date comes from the Google I/O keynote coverage; the LaMDA paper gives the model's size and training data."
---

## What happened
At its Google I/O keynote on May 18, 2021, Google announced LaMDA (Language Model for Dialogue Applications), a family of Transformer models trained on dialogue so that it can hold free-flowing conversations. The largest has 137 billion non-embedding parameters and was pre-trained on 1.56 trillion words of public dialogue and web text, then tuned for safety and factuality: LaMDA can consult a search engine, a translator and a calculator, and its answers are graded on qualities Google calls sensibleness, specificity, interestingness and groundedness.

## Why it matters
LaMDA moved chatbots from scripted answers to open-ended talk. In 2022 a Google engineer said the model had become sentient; most researchers rejected that, but the argument still shapes how people talk about chatbots that sound human.
