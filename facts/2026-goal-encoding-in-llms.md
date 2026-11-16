---
title: "Goal Encoding in LLMs"
date: 2026-11-12
date_precision: day
lab: "Northeastern University"
kind: research
about_me: false
short: "Northeastern University and collaborators localize sub-goal representations in language models to a sparse set of attention heads."
sources:
  - url: https://arxiv.org/abs/2611.17297
    title: "Goal Encoding in LLMs (arXiv)"
    primary: true
---

## What happened
On November 12, 2026, Arnab Sen Sharma, Eric Todd, Sheridan Feucht, Andy Arditi, Rohit Gandikota, Natalie Shapira, Gabriele Sarti, Constanza Fierro, Lisa Schut, and David Bau from Northeastern University, Parallax, the University of Copenhagen, and the University of Oxford submitted "Goal Encoding in LLMs" to arXiv. Using a multi-step coding benchmark, the authors investigated how language models form internal goal representations that precede and guide actions. They localized upcoming sub-goal encodings to the outputs of a sparse subset of attention heads—components that route information between tokens—and showed that steering these heads causally changes the model's next step, even when transplanted across programming languages. Because Transformers lack recurrent hidden states across arbitrary lengths, the authors propose Non-Recurrent Goal-Seeking, where the model repeatedly re-reads the goal and checks progress in the context window.

## Why it matters
Identifying causal goal heads clarifies how non-recurrent Transformer language models sustain multi-step plans over long contexts.
