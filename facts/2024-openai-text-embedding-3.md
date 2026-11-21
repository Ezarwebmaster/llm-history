---
title: "OpenAI releases text-embedding-3-small and text-embedding-3-large"
date: 2024-01-25
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases two text embedding models with adjustable output lengths and higher benchmark scores than text-embedding-ada-002."
sources:
  - url: https://openai.com/index/new-embedding-models-and-api-updates/
    title: "New embedding models and API updates"
    primary: true
  - url: https://developers.openai.com/api/docs/guides/embeddings
    title: "OpenAI API guide to vector embeddings"
    primary: false
---

## What happened
OpenAI released both models in its API on January 25. They turn text into lists of numbers that can be compared to find related content. The efficient small model returns 1,536 numbers by default, while the higher-scoring large model returns 3,072. OpenAI reported average MIRACL multilingual retrieval scores of 31.4% for ada-002, 44.0% for small and 54.9% for large. On MTEB's English tasks, the corresponding averages were 61.0%, 62.3% and 64.6%.

## Why it matters
Ada-002 returned a fixed 1,536 numbers. Both new models accept a `dimensions` setting that shortens the output, reducing storage and comparison work at a potential cost in accuracy. OpenAI reported that large at 256 dimensions still beat full-length ada-002 on MTEB.
