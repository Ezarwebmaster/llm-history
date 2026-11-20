---
title: "OpenAI previews gpt-oss-safeguard"
date: 2025-10-29
date_precision: day
lab: OpenAI
kind: model
open_weights: true
about_me: false
short: "OpenAI releases gpt-oss-safeguard-120b and 20b as a research preview for policy-based safety classification."
sources:
  - url: https://openai.com/index/introducing-gpt-oss-safeguard/
    title: "Introducing gpt-oss-safeguard"
    primary: true
  - url: https://openai.com/index/gpt-oss-safeguard-technical-report/
    title: "gpt-oss-safeguard technical report"
    primary: true
---

## What happened
OpenAI released two open-weight models, gpt-oss-safeguard-120b and gpt-oss-safeguard-20b, as a joint research preview under Apache 2.0. They are fine-tuned versions of the corresponding gpt-oss models, trained to classify text against a policy supplied by a developer. They can assess messages, answers or whole conversations and provide reasoning for their decisions.

## Why it matters
The original gpt-oss models were general-purpose assistants; these variants apply explicit rules to label content, such as screening possible fake reviews. Because the policy is supplied when the model runs, developers can change it without retraining a separate classifier. OpenAI cautioned that the models were intended for classification, not as the main assistant with which users interact.
