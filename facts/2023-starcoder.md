---
title: "StarCoder"
date: 2023-05-04
date_precision: day
lab: "BigCode (Hugging Face & ServiceNow)"
kind: model
open_weights: true
about_me: false
short: "The BigCode collaboration releases StarCoder and StarCoderBase, 15.5B open-weight code language models trained on 1 trillion permissively licensed tokens."
specs:
  parameters: "15.5B"
  context: "8,192 tokens"
note: "Hugging Face and ServiceNow published the StarCoder launch announcement on 2023-05-04 (kept for date); the arXiv technical report (2305.06161) was submitted on 2023-05-09."
sources:
  - url: https://huggingface.co/blog/starcoder
    title: "StarCoder: A State-of-the-Art LLM for Code"
    primary: true
  - url: https://arxiv.org/abs/2305.06161
    title: "StarCoder: may the source be with you!"
    primary: true
---

## What happened
On May 4, 2023, the BigCode community—an open scientific collaboration led by Hugging Face and ServiceNow Research—released StarCoderBase and StarCoder, two 15.5-billion-parameter code language models with an 8,192-token context window. StarCoderBase was trained on 1 trillion tokens from The Stack covering more than 80 programming languages, Git commits, GitHub issues, and Jupyter notebooks, using multi-query attention (sharing key and value heads across query heads for faster decoding) and fill-in-the-middle code infilling. Fine-tuning StarCoderBase on an additional 35 billion Python tokens produced StarCoder, which reached over 40% pass@1 on HumanEval when prompted. Both models shipped under the BigCode OpenRAIL-M license with personally identifiable information redaction, repository opt-out tools, and code-attribution tracing.

## Why it matters
StarCoder gave the open-source ecosystem an auditable, permissively trained alternative to closed code models such as OpenAI's `code-cushman-001`, pairing competitive code generation with dataset governance and attribution tooling.
