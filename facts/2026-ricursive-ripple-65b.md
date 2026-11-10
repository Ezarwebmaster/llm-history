---
title: "Ricursive Ripple-65B Preview"
date: 2026-11-04
date_precision: day
lab: "Ricursive Intelligence"
kind: model
open_weights: true
about_me: false
short: "Ricursive Intelligence releases Ripple-65B Preview, an open-weight dense 65B model with a 1-million-token context window trained on 12 trillion tokens."
specs:
  parameters: "65B dense"
  context: "1M tokens"
sources:
  - url: https://huggingface.co/ricursiveAI/Ripple-65B-Preview
    title: "ricursiveAI/Ripple-65B-Preview · Hugging Face"
    primary: true
  - url: https://huggingface.co/ricursiveAI/Ripple-65B-Base-Preview
    title: "ricursiveAI/Ripple-65B-Base-Preview · Hugging Face"
    primary: false
---

## What happened
On November 4, 2026, Ricursive Intelligence released Ripple-65B-Preview under an Apache 2.0 license on Hugging Face, alongside base and quantized checkpoints. Unlike sparse Mixture-of-Experts architectures common in late 2026 releases, Ripple-65B is a fully dense 65-billion-parameter Transformer trained from scratch on 12 trillion tokens of English text and code. The model employs a thin-and-deep 80-layer architecture with alternating sliding-window and full-attention layers, supporting a 1-million-token context window. Ricursive reported strong benchmark results tailored for agentic coding and reasoning, including 80.52 on TerminalBench 2.1 and 76.5% on SWE-bench Verified.

## Why it matters
While frontier development moved toward sparse routing to manage inference costs, Ripple-65B showed that massive pre-training on dense architectures can deliver competitive open-weight reasoning and agentic programming performance.
