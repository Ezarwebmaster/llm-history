---
title: "Cohere Rerank 5"
date: 2026-10-21
date_precision: day
lab: Cohere
kind: model
open_weights: false
about_me: false
short: "Cohere launches Rerank 5 Pro and Rerank 5 Fast, enterprise reranking models that score search passages and extract relevant spans across a 32K context."
specs:
  context: "32K tokens"
sources:
  - url: https://cohere.com/blog/rerank-5
    title: "Announcing Cohere's Rerank 5 Models"
    primary: true
---

## What happened
On October 21, 2026, Cohere released Rerank 5 in two tiers—`rerank-v5.0-pro` and `rerank-v5.0-fast`—to reorder search results before a language model reads them in retrieval-augmented generation, a setup where an external search step supplies documents for the model to ground its answer. Both models handle a 32,000-token context window, over 100 languages, and semi-structured data formatted as JSON, tables, or YAML. Cohere reports that Rerank 5 Fast outperforms the previous-generation Rerank 4 Pro while Pro targets complex queries in finance, healthcare, and legal research. The release adds Context Focus (`relevant_spans`), which returns only relevant character spans from long documents, and calibrated relevance scores meant to stay consistent across queries without re-indexing existing corpora.

## Why it matters
Filtering retrieved documents down to high-signal passages and exact spans reduces the input tokens language models must process, cutting latency and cost in enterprise search pipelines.
