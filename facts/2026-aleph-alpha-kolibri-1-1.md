---
title: "Kolibri-1.1"
date: 2026-11-23
date_precision: day
lab: "Aleph Alpha"
kind: model
open_weights: true
about_me: false
short: "Aleph Alpha releases Kolibri-1.1, an Apache 2.0 German-English reasoning model with 75.1B total parameters, 3.44B active per token, and up to 1M-token context."
specs:
  parameters: "75.1B total, 3.44B active"
  context: "262K native, up to 1M tokens"
sources:
  - url: https://huggingface.co/Aleph-Alpha/Kolibri-1.1
    title: "Aleph-Alpha/Kolibri-1.1 — Hugging Face"
    primary: true
  - url: https://aleph-alpha.com/models/kolibri-1-1/
    title: "Kolibri 1.1: More Efficient. More Capable. — Aleph Alpha"
    primary: true
---

## What happened
On November 23, 2026, German AI company Aleph Alpha released Kolibri-1.1 under the Apache 2.0 license on Hugging Face, seven weeks after Kolibri 1.0. Like its predecessor, Kolibri-1.1 is a bilingual German-English mixture-of-experts model—a neural network that routes each token through only a small subset of specialized sub-networks—with 75.1 billion total parameters and 3.44 billion active per token. It adds sparse attention, which limits how many earlier tokens each step compares against, and supports a 262,144-token native context window extendable to 1,048,576 tokens, alongside explicit reasoning and tool calling.

## Why it matters
Aleph Alpha reports up to 14 times faster decoding at one-million-token contexts and stronger German benchmarks than Kolibri 1.0, giving European organizations a self-hostable open-weight reasoning model built for long documents and regulated workflows.
