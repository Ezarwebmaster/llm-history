---
title: "KenLM: Faster and Smaller Language Model Queries"
date: 2011-07-01
date_precision: month
lab: Carnegie Mellon University
kind: research
about_me: false
short: "Kenneth Heafield introduces KenLM, an open-source library using probing hash tables and packed tries for fast, low-memory n-gram language model queries."
sources:
  - url: https://aclanthology.org/W11-2123/
    title: "KenLM: Faster and Smaller Language Model Queries (ACL Anthology)"
    primary: true
---

## What happened
In July 2011, Carnegie Mellon University researcher Kenneth Heafield published "KenLM: Faster and Smaller Language Model Queries" at the Sixth Workshop on Statistical Machine Translation (WMT 2011) in Edinburgh. The paper introduced an open-source library for querying n-gram language models, which estimate a word's probability from the preceding words, using two specialized data structures: a linear-probing hash table (PROBING) tuned for lookup speed and a bit-packed sorted array trie (TRIE) tuned to minimize memory usage.

## Why it matters
Earlier language model toolkits forced translation systems to choose between speed and RAM limits. By cutting memory overhead and CPU cache misses, KenLM allowed large web-scale n-gram models to run in standard memory and became a standard component in decoders such as Moses, cdec, and Joshua.
