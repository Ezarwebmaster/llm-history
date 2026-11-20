---
title: "GPT-5 mini and GPT-5 nano"
date: 2025-08-07
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI launches GPT-5 mini and GPT-5 nano together as smaller reasoning models in its API."
sources:
  - url: https://openai.com/index/introducing-gpt-5-for-developers/
    title: "Introducing GPT-5 for developers"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-5-mini
    title: "GPT-5 mini API model documentation"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-5-nano
    title: "GPT-5 nano API model documentation"
    primary: true
---

## What happened
OpenAI released both models alongside full-size GPT-5 in the Responses and Chat Completions APIs. The same day's GPT-5 launch in ChatGPT introduced a system that automatically chose between quick answers and deeper reasoning. The API gave developers separate model names to choose from. Both smaller models accepted text and images, returned text, and let developers adjust how much effort the model spent reasoning.

## Why it matters
Mini was the faster, lower-cost option for well-defined tasks. Nano was the fastest and least expensive tier, suited to jobs such as summarizing text or sorting it into categories. On OpenAI's launch test of software fixes, SWE-bench Verified, GPT-5 scored 74.9%, mini 71.0%, and nano 54.7%, all at high reasoning effort. The smaller tiers gave developers a way to trade some capability for speed and lower running costs.
