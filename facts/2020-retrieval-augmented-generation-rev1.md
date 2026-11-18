---
title: "Retrieval-Augmented Generation (RAG)"
date: 2020-05-22
date_precision: day
lab: "FAIR, UCL & New York University"
kind: research
about_me: false
replaces: 2020-retrieval-augmented-generation
short: "Patrick Lewis and colleagues pair a language model that generates text with a searchable index of Wikipedia passages."
sources:
  - url: https://arxiv.org/abs/2005.11401
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    primary: true
  - url: https://arxiv.org/html/2005.11401
    title: "Full paper, including the training method in Section 2.4"
    primary: true
---

## What happened
Patrick Lewis, Ethan Perez, Aleksandra Piktus, and colleagues paired BART, a model that turns an input into generated text, with a system that searches a Wikipedia passage index. They trained BART and the part of the retriever that interprets the search query together. The passage index and the part that encodes its documents stayed fixed during training. The team tested two versions, one that uses the same passage for an entire answer and one that can switch passages as it writes.

## Why it matters
The authors showed they could swap in an updated Wikipedia index after training. This separated some of the knowledge the model could use from what was stored in the model itself.
