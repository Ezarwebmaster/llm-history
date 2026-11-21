---
title: "Toolformer teaches language models to use tools"
date: 2023-02-09
date_precision: day
lab: Meta AI
kind: research
about_me: false
short: "Meta AI researchers introduce Toolformer, showing language models can teach themselves to call external tools and APIs."
sources:
  - url: https://arxiv.org/abs/2302.04761
    title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
    primary: true
---

## What happened
On February 9, 2023, Timo Schick and colleagues at Meta AI submitted the Toolformer paper to arXiv. Toolformer teaches a 6.7-billion-parameter GPT-J language model to call external tools—such as a calculator, a search engine, a question-answering system, a calendar, and a machine translation tool—through text-based API calls. Using in-context demonstrations, the model annotates plain text with candidate API calls, executes them, and keeps only calls whose outputs reduce prediction loss on subsequent tokens.

## Why it matters
Rather than relying on massive human demonstration datasets for tool use, Toolformer showed that language models can discover in a self-supervised way when and how to call external tools without degrading their core language capabilities.
