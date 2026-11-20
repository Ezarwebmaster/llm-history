---
title: "GPT-4o Search Preview models leave the API"
date: 2026-07-23
date_precision: day
lab: OpenAI
kind: product
about_me: false
short: "OpenAI shuts down the GPT-4o and GPT-4o mini Search Preview models in the Chat Completions API."
sources:
  - url: https://developers.openai.com/api/docs/guides/tools-web-search
    title: "OpenAI API web search guide, migrating from legacy web search"
    primary: true
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI API deprecations, shutdown history"
    primary: false
---

## What happened
OpenAI shut down `gpt-4o-search-preview` and `gpt-4o-mini-search-preview` on July 23, 2026. The API web-search guide points developers to the web-search tool in Responses or to `gpt-5-search-api` for applications that still use Chat Completions.

## Why it matters
The two migration paths give developers different control over when to search. The Chat Completions search model searches before answering, while the Responses tool can be used only when needed.
