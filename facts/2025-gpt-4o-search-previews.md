---
title: "GPT-4o and GPT-4o mini Search Preview"
date: 2025-03-11
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI introduces two GPT-4o variants for answers backed by web search in the Chat Completions API."
sources:
  - url: https://developers.openai.com/api/docs/changelog#march-2025
    title: "OpenAI API changelog, March 11, 2025"
    primary: false
  - url: https://openai.com/index/new-tools-for-building-agents/
    title: "New tools for building agents, web search announcement"
    primary: false
  - url: https://developers.openai.com/api/docs/models/gpt-4o-search-preview
    title: "GPT-4o search preview model documentation"
    primary: true
  - url: https://developers.openai.com/api/docs/models/gpt-4o-mini-search-preview
    title: "GPT-4o mini search preview model documentation"
    primary: true
---

## What happened
On March 11, 2025, OpenAI gave developers direct access to two models fine-tuned for web search through the Chat Completions API: `gpt-4o-search-preview` and `gpt-4o-mini-search-preview`. The previews took text input and returned text. They pulled current information from the web and included links to sources in their answers. The same announcement introduced the Responses API, where developers could give the general-purpose GPT-4o and GPT-4o mini a web-search tool and combine it with other tools.

## Why it matters
Developers using Chat Completions could select a model dedicated to searching and citing web sources. In Responses, search was a capability developers could add to the general-purpose models as part of a broader workflow.
