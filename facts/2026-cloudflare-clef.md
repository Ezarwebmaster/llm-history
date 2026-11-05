---
title: "Cloudflare Clef and Clef-flash"
date: 2026-10-01
date_precision: day
lab: "Cloudflare"
kind: model
open_weights: true
about_me: false
short: "Cloudflare publishes Clef and Clef-flash, two small open-weight models that answer with a labelled choice and a probability instead of free text."
specs:
  context: "64k tokens"
sources:
  - url: https://blog.cloudflare.com/clef-decision-models/
    title: "Clef decision models"
    primary: true
---

## What happened
On October 1, 2026, Cloudflare released two models it calls decision models: Clef, fine-tuned from Alibaba's Qwen3.8-27B, and the smaller Clef-flash, fine-tuned from Qwen3.5-9B. Rather than writing prose, they sort an input into categories a developer defines and return each category with a probability, so an agent can route a support message or judge how urgent it is. Cloudflare gives Clef a 64,000-token context window and reports median response times of 209.3 milliseconds for Clef and 38.8 milliseconds for Clef-flash. Both are served on Cloudflare's Workers AI and published on Hugging Face under the Apache 2.0 licence.

## Why it matters
Not every step in an agent needs a chatbot. Cloudflare's bet is that the small, boring classification calls inside a pipeline are better served by a model that only ever answers with a label.
