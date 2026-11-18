---
title: "Sentence-BERT"
date: 2019-08-27
date_precision: day
lab: "TU Darmstadt"
kind: research
about_me: false
short: "Nils Reimers and Iryna Gurevych introduce Sentence-BERT, fine-tuning BERT in a Siamese network to produce fixed-size sentence vectors for fast comparison."
sources:
  - url: https://arxiv.org/abs/1908.10084
    title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (arXiv)"
    primary: true
  - url: https://aclanthology.org/D19-1410/
    title: "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (ACL Anthology)"
    primary: true
note: "Submitted to arXiv on August 27, 2019 (v1) and presented at EMNLP-IJCNLP 2019 in November 2019."
---

## What happened
On August 27, 2019, Nils Reimers and Iryna Gurevych of the Ubiquitous Knowledge Processing Lab at Technische Universität Darmstadt submitted "Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks" (`arXiv:1908.10084`). Standard BERT compares two sentences by feeding them into the network together, which requires nearly 50 million inference passes—about 65 hours on a modern GPU—to find the most similar pair among 10,000 sentences. Sentence-BERT (SBERT) fine-tunes BERT and RoBERTa on the SNLI and MultiNLI natural language inference datasets using Siamese and triplet network structures (twin networks sharing weights that encode each sentence independently into a single pooled vector). Comparing 10,000 sentences with cosine similarity then takes about 5 seconds.

## Why it matters
Independent sentence vectors made transformer embeddings practical for large-scale semantic search, clustering, and retrieval.
