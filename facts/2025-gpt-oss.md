---
title: "OpenAI releases gpt-oss-120b and gpt-oss-20b"
date: 2025-08-05
date_precision: day
lab: OpenAI
kind: model
open_weights: true
about_me: false
short: "OpenAI releases two open-weight reasoning models under Apache 2.0, returning to open-weight language models after GPT-2."
sources:
  - url: https://openai.com/index/introducing-gpt-oss/
    title: "Introducing gpt-oss"
    primary: true
---

## What happened
OpenAI jointly released gpt-oss-120b and gpt-oss-20b, its first open-weight language models since GPT-2. Their Apache 2.0 license lets developers run and customize them. Both use a mixture of experts: only part of the model works on each text token. OpenAI reported reasoning results near o4-mini for 120b and similar to o3-mini for 20b on common benchmarks.

## Why it matters
The release offered a choice between greater capability and lighter deployment. OpenAI said 120b runs on a single 80 GB GPU, while 20b can run with 16 GB of memory, making local and edge use more accessible. Both expose low, medium and high reasoning effort, trading response time for performance. Downloadable weights also let organizations adapt the models and host them on their own infrastructure, including where data security makes remote services unsuitable.
