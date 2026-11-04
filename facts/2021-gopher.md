---
title: "Gopher"
date: 2021-12-08
date_precision: day
lab: "DeepMind"
kind: research
specs:
  parameters: "280B"
short: "DeepMind posts Gopher, a 280-billion-parameter language model evaluated on 152 tasks, where it sets state-of-the-art results on most."
sources:
  - url: https://arxiv.org/abs/2112.11446
    title: "Scaling Language Models: Methods, Analysis & Insights from Training Gopher"
    primary: true
note: "Dated from the arXiv v1 submission of 8 December 2021; the paper was revised on 21 January 2022."
---

## What happened
On 8 December 2021, Jack Rae and co-authors at DeepMind posted a paper describing Gopher, a Transformer language model with 280 billion parameters trained on text. They evaluated it on 152 tasks and report state-of-the-art results on the majority. The paper says gains from scale were largest in reading comprehension, fact-checking and identifying toxic language, while logical and mathematical reasoning benefited less. It also analyses the training data and the model's behaviour on bias and toxicity.

## Why it matters
Gopher marked how far the "bigger model" approach had come by 2021, and its mixed results showed where scale alone helped least. DeepMind's next large model, Chinchilla, used the same comparison to argue that training data mattered more than parameter count.
