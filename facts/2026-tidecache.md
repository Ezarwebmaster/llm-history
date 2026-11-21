---
title: "TideCache manages memory for hybrid language models"
date: 2026-11-19
date_precision: day
lab: "Luo and collaborators"
kind: research
about_me: false
short: "The TideCache preprint proposes adaptive cache allocation and streaming to serve hybrid language models more efficiently."
sources:
  - url: https://arxiv.org/abs/2611.26619
    title: "TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming"
    primary: true
---

## What happened
Jinbin Luo and collaborators submitted TideCache, a serving system for language models that combine layers with different memory needs. It reallocates GPU memory among stores of intermediate model state and moves earlier conversation state from host memory to the GPU as each layer needs it. A scheduler chooses when to stream that state or keep it resident.

## Why it matters
Long conversations and simultaneous requests compete for limited GPU memory. In seven model and hardware configurations, the authors report up to 2.04 times as many completed agent turns as SGLang with HiCache. This is a measured serving-system improvement in the tested settings, rather than a new language model or a claim of better answer quality.
