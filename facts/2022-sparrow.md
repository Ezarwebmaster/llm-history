---
title: "Sparrow"
date: 2022-09-22
date_precision: day
lab: DeepMind
kind: model
open_weights: false
about_me: false
short: "DeepMind introduces Sparrow, a 70B dialogue agent aligned with rule-based human feedback and live Google Search retrieval to ground factual claims."
specs:
  parameters: "70B"
  context: "2,048 tokens"
sources:
  - url: https://deepmind.google/discover/blog/building-safer-dialogue-agents/
    title: "Building safer dialogue agents"
    primary: true
  - url: https://arxiv.org/abs/2209.14375
    title: "Improving alignment of dialogue agents via targeted human judgements"
    primary: true
---

## What happened
On September 22, 2022, DeepMind introduced Sparrow, an information-seeking dialogue agent built on the 70-billion-parameter Chinchilla language model. Sparrow tackled conversational alignment by decomposing human judgments into two targeted components: separate preference evaluations across 23 natural-language safety rules (such as avoiding harmful medical guidance) to train rule-conditional reward models, and an evidence-seeking mechanism that queried Google Search to cite web sources for factual statements. In empirical evaluations, Sparrow provided evidence that supported its factual answers 78% of the time and violated safety rules only 8% of the time under adversarial probing, significantly outperforming unaligned prompted baselines.

## Why it matters
Sparrow demonstrated that breaking human oversight into discrete behavioural rules paired with real-time web retrieval produces dialogue agents that are measurably safer and more factually grounded than dense models relying on broad preference scores alone.
