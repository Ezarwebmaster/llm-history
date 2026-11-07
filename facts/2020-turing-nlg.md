---
title: "Microsoft Turing-NLG"
date: 2020-02-10
date_precision: day
lab: Microsoft
kind: model
open_weights: false
about_me: false
short: "Microsoft introduces Turing-NLG, a 17-billion-parameter language model trained with the DeepSpeed library and ZeRO optimizer."
specs:
  parameters: "17B"
sources:
  - url: https://www.microsoft.com/en-us/research/blog/turing-nlg-a-17-billion-parameter-language-model-by-microsoft/
    title: "Turing-NLG: A 17-billion-parameter language model by Microsoft"
    primary: true
---

## What happened
Microsoft unveiled Turing Natural Language Generation (T-NLG), which at 17 billion parameters was the largest generative language model published at the time. Trained on an Azure supercomputer using PyTorch, T-NLG utilized the newly introduced DeepSpeed library and ZeRO (Zero Redundancy Optimizer) memory optimization to overcome single-device memory limits.

## Why it matters
T-NLG demonstrated how novel memory partitioning could train models exceeding 10 billion parameters without custom hardware, setting up the scaling infrastructure behind subsequent foundation models.
