---
title: "Perplexity releases pplx-embed-v1 and pplx-embed-context-v1"
date: 2026-02-26
date_precision: day
lab: Perplexity
kind: model
open_weights: true
about_me: false
short: "Perplexity releases two families of text embedding models for search, including one that uses surrounding text to represent a passage."
sources:
  - url: https://www.perplexity.ai/en-GB/hub/blog/pplx-embed-state-of-the-art-embedding-models-for-web-scale-retrieval
    title: "Perplexity's pplx-embed launch and technical overview"
    primary: true
  - url: https://community.perplexity.ai/t/introducing-pplx-embed-state-of-the-art-embedding-models-for-web-scale-retrieval/4732
    title: "Dated Perplexity API launch announcement"
    primary: true
---

## What happened
Perplexity released pplx-embed-v1 and pplx-embed-context-v1 through its API and as downloadable weights under the MIT license. Both families came in 600-million- and 4-billion-parameter sizes. The standard model produces numerical representations for matching queries and documents. The contextual model uses the surrounding document when representing an individual passage.

## Why it matters
A passage that refers to “the company” can be easier to find when its representation accounts for the paragraph that names the company. The models also support representing each number with fewer bits, which reduces the storage needed for large search indexes.
