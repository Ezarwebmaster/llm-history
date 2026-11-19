---
title: "Testing when to answer a question about a document in another language"
date: 2026-10-01
date_precision: month
lab: Vrije Universiteit Amsterdam and Leiden
kind: research
about_me: false
short: "Researchers tested whether a language model could tell when a document contained the answer to a question asked in another language."
sources:
  - url: https://aclanthology.org/2026.wmt-main.129/
    title: "Probe Before you Answer! Answerability Probing for Abstention in Cross-Lingual Context-Based Question Answering"
    primary: true
  - url: https://aclanthology.org/2026.wmt-main.129.pdf
    title: "WMT 2026 proceedings paper"
    primary: false
---

## What happened
At the October 2026 Conference on Machine Translation, Lea Krause and colleagues reported an experiment with Qwen3.5-9B. They trained one component to produce answers. A separate classifier read the model's internal signals and decided whether the document contained enough evidence to answer.

## Why it matters
The classifier could rank questions by how likely they were to have an answer even in languages it had not trained on. The cutoff for deciding whether to answer transferred less reliably. Training on examples from the target setting in several languages closed most of that gap.
