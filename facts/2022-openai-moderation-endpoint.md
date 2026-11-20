---
title: "OpenAI introduces its Moderation endpoint"
date: 2022-08-10
date_precision: day
lab: OpenAI
kind: product
about_me: false
short: "OpenAI introduces a Moderation endpoint using GPT-based classifiers to assess potentially harmful text."
sources:
  - url: https://openai.com/index/new-and-improved-content-moderation-tooling/
    title: "New and improved content moderation tooling"
    primary: true
  - url: https://developers.openai.com/api/docs/models/text-moderation-latest
    title: "text-moderation model"
    primary: true
---

## What happened
OpenAI introduced a Moderation endpoint for API developers, offering free classification of OpenAI API-generated content. Given text, its GPT-based classifiers assessed categories including sexual, hateful and violent content and self-harm. OpenAI also released a technical paper and evaluation dataset. Its text-moderation model is a text-only classifier; the later omni-moderation models also handle images.

## Why it matters
The endpoint made a safety tool available to developers building on generative models. A classifier flags categories for supervision rather than producing a conversational answer.
