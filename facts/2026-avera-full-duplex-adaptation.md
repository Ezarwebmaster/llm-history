---
title: "Adapting a frozen language model to full-duplex dialogue"
date: 2026-11-10
date_precision: day
lab: "AveraLabs"
kind: research
about_me: false
short: "AveraLabs describes adapting a frozen multimodal language model to listen and speak at the same time with lightweight training."
sources:
  - url: https://arxiv.org/abs/2611.14774
    title: "An LLM Is All You Need: Data-Efficient Adaptation to Full-Duplex, Word-Level Spoken Dialogue"
    primary: true
---

## What happened
Tairan Chen and colleagues posted a system that can listen while speaking, acknowledge a speaker briefly, and yield to interruptions. Its language model stays frozen while small adapter components and new token embeddings learn conversational timing. A separate speech generator turns the resulting tokens into sound. The authors report training 97 million parameters and completing the conversion in about 30 GPU-hours.

## Why it matters
Natural conversation requires decisions about when to speak as well as what to say. The paper explores adding that timing behavior without retraining the whole language model. Its reported comparisons on Full-Duplex-Bench and InteractionBench suggest a lower-training-cost research route to interactive spoken assistants, rather than a new general-purpose model release.
