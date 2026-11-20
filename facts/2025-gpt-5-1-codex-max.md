---
title: "GPT-5.1-Codex-Max carries coding work across context windows"
date: 2025-11-19
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases GPT-5.1-Codex-Max in Codex with training to carry long coding tasks across multiple context windows."
sources:
  - url: https://openai.com/index/gpt-5-1-codex-max-system-card/
    title: "GPT-5.1-Codex-Max System Card"
    primary: true
  - url: https://openai.com/index/gpt-5-1-codex-max/
    title: "Building more with GPT-5.1-Codex-Max"
    primary: false
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
    primary: false
---

## What happened
OpenAI released GPT-5.1-Codex-Max on November 19, 2025 for the Codex command line, editor extension, cloud tasks and code review. It reached the Responses API on December 4, 2025 as `gpt-5.1-codex-max`. OpenAI described it as its first model trained to work across multiple context windows. Each window holds a limited amount of information that the model can process at once.

## Why it matters
As a Codex session approached its context limit, it automatically trimmed its working history and carried the most important information into a fresh window. This process, called compaction, could repeat while the same task continued, giving the model room to keep editing and testing on project-wide changes or long debugging runs. OpenAI reported seeing runs lasting more than 24 hours in internal evaluations.
