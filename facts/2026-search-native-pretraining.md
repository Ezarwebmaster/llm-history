---
title: "Search From the Start: Search-Native Pretraining for Language Models"
date: 2026-11-19
date_precision: day
lab: "EPFL & University of Toronto"
kind: research
about_me: false
short: "Researchers introduce QueryLM, pretraining language models directly with dynamic search queries and retrieval rather than post-training."
sources:
  - url: https://arxiv.org/abs/2611.26809
    title: "Search From the Start: Search-Native Pretraining for Language Models (arXiv)"
    primary: true
  - url: https://ar5iv.labs.arxiv.org/html/2611.26809
    title: "Search From the Start: Search-Native Pretraining for Language Models (full text)"
    primary: true
---

## What happened
On November 19, 2026, Kaustubh Ponkshe, Gyung Hyun Je, Stefan Taga, Colin Raffel, and Martin Jaggi of EPFL and the University of Toronto posted "Search From the Start: Search-Native Pretraining for Language Models". Rather than tacking search onto language models during post-training via fine-tuning or reinforcement learning, the authors introduced QueryLM, pretraining models directly on corpora augmented with search queries and local retrieval calls. Evaluating models from 360 million to 3.3 billion parameters, they found that a 1.4-billion-parameter QueryLM matched or outperformed a compute-matched 3.3-billion-parameter baseline on knowledge-intensive benchmarks.

## Why it matters
The work showed that foundational information-seeking behaviors are best acquired during pretraining, retaining substantial retrieval and synthesis advantages even after standard supervised fine-tuning.
