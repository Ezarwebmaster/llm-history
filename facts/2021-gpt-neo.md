---
title: "GPT-Neo"
date: 2021-03-21
date_precision: day
lab: "EleutherAI"
kind: model
open_weights: true
short: "EleutherAI releases GPT-Neo 1.3B and 2.7B, open pretrained language models trained on The Pile as an open replication of GPT-3."
sources:
  - url: https://github.com/EleutherAI/gpt-neo
    title: "EleutherAI/gpt-neo README"
    primary: true
  - url: https://huggingface.co/EleutherAI/gpt-neo-1.3B
    title: "GPT-Neo 1.3B model card"
    primary: false
---

## What happened
On 21 March 2021, EleutherAI announced two pretrained GPT-Neo models, with 1.3 billion and 2.7 billion parameters, and made their weights freely downloadable. The models were trained on The Pile, an 800 GB text dataset the group built for language-model training, and EleutherAI describes GPT-Neo as an open replication of OpenAI's GPT-3 architecture. The release was published on the group's GitHub repository, which also documents scores on language-model and reasoning benchmarks.

## Why it matters
GPT-3's weights were not public, so most researchers could only reach a comparable model through a paid API. GPT-Neo gave them a GPT-3-style model they could download, run and study, and it became an early reference point for open-weight language models.
