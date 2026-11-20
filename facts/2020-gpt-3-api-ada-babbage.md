---
title: "The GPT-3 API: Ada and Babbage"
date: 2020-06-11
date_precision: day
lab: OpenAI
kind: product
about_me: false
short: "OpenAI opens requests for access to a GPT-3 text-completion API, the setting for its original Ada and Babbage base models."
sources:
  - url: https://openai.com/index/openai-api/
    title: "OpenAI API"
    primary: true
  - url: https://openai.com/index/gpt-4-api-general-availability/
    title: "GPT-4 API general availability and deprecation of older models"
    primary: false
  - url: https://developers.openai.com/api/docs/models/babbage-002
    title: "babbage-002"
    primary: false
  - url: https://openai.com/index/introducing-text-and-code-embeddings/
    title: "Introducing text and code embeddings"
    primary: false
note: "The date is the API launch, not a separately documented launch day for each named model. OpenAI's later documentation identifies Ada and Babbage as original GPT-3 base models."
---

## What happened
OpenAI invited developers to request access to an API running GPT-3-family models. A text prompt produced a continuation, with examples in the prompt guiding the task. OpenAI's later documentation names `ada` and `babbage`, alongside Curie and Davinci, as original GPT-3 base models: models used for text completion rather than a conversation interface.

## Why it matters
Ada and Babbage belong to the early API generation, distinct from `babbage-002`, their later replacement. They are also distinct from the Ada- and Babbage-named embedding models introduced on January 25, 2022: those return lists of numbers representing text or code for comparison and search, rather than generated continuations. A familiar name does not identify the same model or job.
