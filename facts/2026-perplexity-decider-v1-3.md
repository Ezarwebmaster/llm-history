---
title: "Perplexity Decider v1.3"
date: 2026-11-12
date_precision: day
lab: "Perplexity"
kind: model
open_weights: true
about_me: false
short: "Perplexity releases open-weight Decider v1.3 and Decider Flash v1.3 classification models, adding verbatim text-span extraction via a new Locate mode."
sources:
  - url: https://www.perplexity.ai/hub/blog/perplexity-decider
    title: "Perplexity Decider v1.3: Training, eval, and use cases"
    primary: true
  - url: https://huggingface.co/perplexity-ai/pplx-decider-v1.3
    title: "perplexity-ai/pplx-decider-v1.3 (Hugging Face)"
    primary: false
  - url: https://huggingface.co/perplexity-ai/pplx-decider-flash-v1.3
    title: "perplexity-ai/pplx-decider-flash-v1.3 (Hugging Face)"
    primary: false
---

## What happened
On November 12, 2026, Perplexity released Decider v1.3 and its smaller distilled companion, Decider Flash v1.3, under the Apache 2.0 license. Rather than generating open-ended prose token by token, the Qwen-based models evaluate an input state against user-defined questions and return calibrated probabilities for binary, multiple-choice, and scoring decisions. Version 1.3 adds bidirectional attention refinements and a new Locate capability that extracts verbatim text spans with character offsets and confidence scores for named entity recognition, personal information detection, and extractive question answering.

## Why it matters
Dedicated decision models replace brittle prompt-based LLM classifiers with calibrated probability outputs and exact span localization in a compact, open-weight package suited for routing, moderation, and structured extraction pipelines.
