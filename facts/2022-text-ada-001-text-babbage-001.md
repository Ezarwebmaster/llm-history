---
title: "Researchers evaluate text-ada-001 and text-babbage-001"
date: 2022-08-17
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "Researchers use OpenAI’s text-ada-001 and text-babbage-001 to test whether language models understand implied meaning."
sources:
  - url: https://proceedings.neurips.cc/paper_files/paper/2023/file/4241fec6e94221526b0a9b24828bb774-Paper-Conference.pdf
    title: "The Goldilocks of Pragmatic Understanding, Table 88"
    primary: true
  - url: https://proceedings.neurips.cc/paper_files/paper/2022/file/8bb0d291acd4acf06ef112099c16f326-Supplemental-Conference.pdf
    title: "NeurIPS 2022 supplementary model comparison, Table 8"
    primary: false
  - url: https://community.openai.com/t/retrieve-engine-endpoint-broken/15730
    title: "OpenAI Developer Community, March 2022 API engine listing"
    primary: false
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI API deprecation and shutdown history"
    primary: false
note: "The date comes from the researchers’ API call timestamps. The original release dates are unverified."
---

## What happened
A study of implied meaning logged calls to both models on August 17, 2022. Evidence of the model IDs predates that experiment: a developer posted an API engine listing with both names on March 2, 2022. A separate NeurIPS 2022 paper classified the two as instruction-oriented GPT-3 models.

## Why it matters
OpenAI tracked `text-ada-001` and `text-babbage-001` separately from the `ada` and `babbage` base models. All four reached their documented shutdown date on January 4, 2024. OpenAI recommended `gpt-3.5-turbo-instruct` for the two text models and `babbage-002` for the base models. The distinct migration paths show why developers needed the full model ID.
