---
title: "Babbage-002 and Davinci-002 enter the OpenAI API"
date: 2023-08-22
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI makes babbage-002 and davinci-002 available through the Completions API as replacements for four original GPT-3 base models."
sources:
  - url: https://openai.com/index/gpt-3-5-turbo-fine-tuning-and-api-updates/
    title: "GPT-3.5 Turbo fine-tuning and API updates"
    primary: true
  - url: https://openai.com/index/gpt-4-api-general-availability/
    title: "GPT-4 API general availability and deprecation of older models"
    primary: false
  - url: https://developers.openai.com/api/docs/models/davinci-002
    title: "davinci-002 model documentation"
    primary: false
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI API deprecations"
    primary: false
---

## What happened
OpenAI outlined the migration on July 6, 2023, and made both replacements available on August 22. It assigned Ada and Babbage to `babbage-002`, and Curie and Davinci to `davinci-002`. Developers could call the base models through the existing Completions API or train custom versions on their own examples through the new fine-tuning endpoint. OpenAI scheduled the old stable base-model names to switch over automatically on January 4, 2024.

## Why it matters
The new base models continued a free-form text prompt and had no additional training to follow instructions. Chat models such as GPT-3.5 Turbo took a structured list of messages, with separate roles for instructions and user input, and could respond across multiple turns. The August release gave developers using raw text completion a migration path as OpenAI shifted its API work toward chat.
