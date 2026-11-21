---
title: "text-similarity-ada-001"
date: 2022-01-25
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI includes text-similarity-ada-001 in its first text and code embeddings release."
sources:
  - url: https://openai.com/index/introducing-text-and-code-embeddings/
    title: "Introducing text and code embeddings"
    primary: true
---

## What happened
OpenAI introduced an embeddings endpoint and three families of models: text similarity, text search, and code search. The text-similarity-ada-001 model was one of four sizes in the similarity family. It turned text into sequences of numbers that could be compared to estimate how related pieces of text were.

## Why it matters
These numerical representations could support tasks such as grouping similar documents and classification. The initial release used separate model families for similarity, text search and code search.
