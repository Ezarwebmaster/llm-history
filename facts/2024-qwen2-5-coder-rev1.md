---
title: "Qwen2.5-Coder Series"
date: 2024-11-12
date_precision: day
lab: "Alibaba (Qwen)"
kind: model
open_weights: true
about_me: false
replaces: 2024-qwen2-5-coder
specs:
  parameters: "0.5B to 32B"
  context: "Up to 131,072 tokens with YaRN"
short: "Qwen expands its open-weight coding family to six sizes, adding 0.5B, 3B, 14B and 32B models."
sources:
  - url: https://qwenlm.github.io/blog/qwen2.5-coder-family/
    title: "Qwen2.5-Coder Series: Powerful, Diverse, Practical"
    primary: true
  - url: https://arxiv.org/abs/2409.12186
    title: "Qwen2.5-Coder Technical Report and version history"
    primary: true
  - url: https://arxiv.org/abs/2409.12186v1
    title: "Original report covering the 1.5B and 7B models"
    primary: true
  - url: https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct
    title: "Qwen2.5-Coder-32B-Instruct model card and long-context setup"
    primary: true
note: "The report first appeared on September 18, 2024 for the 1.5B and 7B models. This record dates the four-size expansion to the November 12 launch announcement, not the first report."
---

## What happened
On November 12, 2024, Qwen added 0.5B, 3B, 14B and 32B coding models alongside its earlier 1.5B and 7B models, offering base and instruction-following versions. Built on Qwen2.5, they continued training on over 5.5 trillion tokens of code and related text. The launch table lists 128K context for 7B, 14B and 32B, and 32K for smaller models. The 32B card specifies 131,072 tokens, requiring YaRN, a context-extension technique, beyond the default 32,768. All sizes use Apache 2.0 except 3B, which uses Qwen Research. Qwen reports 32B-Instruct scores of 73.7 on Aider code repair, 65.9 on McEval and 75.2 on MdEval; its multilingual tests cover more than 40 programming languages.

## Why it matters
Six sizes gave developers choices for running coding assistants themselves, covering generation, completion and repair. The 3B model's license differs from the rest.
