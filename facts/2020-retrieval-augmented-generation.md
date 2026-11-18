---
title: "Retrieval-Augmented Generation (RAG)"
date: 2020-05-22
date_precision: day
lab: "FAIR, UCL & New York University"
kind: research
about_me: false
short: "Patrick Lewis and colleagues introduce Retrieval-Augmented Generation, pairing a sequence-to-sequence language model with a dense Wikipedia index."
sources:
  - url: https://arxiv.org/abs/2005.11401
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (arXiv)"
    primary: true
---

## What happened
On May 22, 2020, Patrick Lewis, Ethan Perez, Aleksandra Piktus, and colleagues at Facebook AI Research (FAIR), University College London (UCL), and New York University submitted "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (`arXiv:2005.11401`). Their Retrieval-Augmented Generation (RAG) architecture combines parametric memory (knowledge stored inside a pretrained BART sequence-to-sequence transformer's weights) with non-parametric memory (a dense vector index of Wikipedia articles queried via a Dense Passage Retriever) and fine-tunes both components end-to-end. The authors evaluated two variants—RAG-Sequence, which conditions an entire generated answer on the same retrieved passage, and RAG-Token, which can draw on a different passage for each output token—across Natural Questions, WebQuestions, CuratedTrec, TriviaQA, Jeopardy question generation, and FEVER fact verification.

## Why it matters
Grounding text generation in an external document index that can be updated without retraining established the standard pattern for connecting language models to live knowledge bases and reducing fabricated claims.
