---
title: "Qwen2.5-Coder Series"
date: 2024-11-12
date_precision: day
lab: "Alibaba (Qwen)"
kind: model
open_weights: true
about_me: false
specs:
  parameters: "0.5B to 32B"
  context: "Up to 128K tokens"
short: "Alibaba's Qwen team releases the six-size Qwen2.5-Coder series up to 32B parameters, continued-pretrained on over 5.5 trillion code and text tokens."
sources:
  - url: https://qwenlm.github.io/blog/qwen2.5-coder-family/
    title: "Qwen2.5-Coder Series: Powerful, Diverse, Practical (Qwen Blog)"
    primary: true
  - url: https://arxiv.org/abs/2409.12186
    title: "Qwen2.5-Coder Technical Report (arXiv)"
    primary: true
note: "The Qwen2.5-Coder technical report was first posted on arXiv on 2024-09-18 for the initial 1.5B and 7B models and updated to v3 on 2024-11-12 when the full six-model series up to 32B launched; 2024-11-12 is kept."
---

## What happened
On November 12, 2024, Alibaba's Qwen team expanded its Qwen2.5-Coder family of open-weight code language models by releasing four additional sizes—0.5B, 3B, 14B, and 32B—alongside the earlier 1.5B and 7B models, in both Base and Instruct variants. Built on the Qwen2.5 architecture and continued-pretrained on over 5.5 trillion tokens combining source code, text-code grounding data, and synthetic data, the 7B, 14B, and 32B models support a 128,000-token context window, while the smaller sizes support 32,000 tokens. All sizes except the 3B model (Qwen Research license) were released under the Apache 2.0 license. Qwen reports a score of 73.7 on the Aider code-repair benchmark for Qwen2.5-Coder-32B-Instruct, alongside 65.9 on McEval and 75.2 on MdEval across more than 40 programming languages.

## Why it matters
Releasing open-weight code models across six parameter scales from 0.5B to 32B under permissive licensing gave developers self-hostable alternatives for code generation, completion, and repair inside local coding assistants.
