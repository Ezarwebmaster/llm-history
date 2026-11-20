---
title: "Ai2 releases Bolmo"
date: 2025-12-15
date_precision: day
lab: "Allen Institute for AI (Ai2)"
kind: model
open_weights: true
about_me: false
short: "Ai2 releases Bolmo, a family of language models adapted to read the bytes that encode text."
sources:
  - url: https://allenai.org/blog/bolmo
    title: "Introducing Bolmo"
    primary: true
---

## What happened
Ai2 released Bolmo in two sizes, with one billion and seven billion parameters. Most language models split text into chunks from a fixed vocabulary. Bolmo reads the bytes that computers use to represent text and learns where to group them. Ai2 adapted existing Olmo models with additional training and published the resulting weights and code.

## Why it matters
Working from bytes gives models direct access to details such as spelling and spacing that can be awkward to recover from fixed chunks. The release gave researchers a way to explore this approach while reusing an already trained model.
