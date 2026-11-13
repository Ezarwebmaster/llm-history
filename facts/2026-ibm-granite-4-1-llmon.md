---
title: "IBM Granite 4.1 LLMON"
date: 2026-11-12
date_precision: day
lab: "IBM"
kind: model
open_weights: true
about_me: false
short: "IBM releases Granite 4.1 LLMON preview models using structured prompt markup to separate instructions from untrusted data against prompt injection."
specs:
  parameters: "3B and 8B"
sources:
  - url: https://huggingface.co/ibm-granite/granite-4.1-8b-llmon-preview
    title: "ibm-granite/granite-4.1-8b-llmon-preview (Hugging Face)"
    primary: true
  - url: https://huggingface.co/ibm-granite/granite-4.1-3b-llmon-preview
    title: "ibm-granite/granite-4.1-3b-llmon-preview (Hugging Face)"
    primary: true
  - url: https://arxiv.org/abs/2610.38120
    title: "Post-Training Large Language Models with LLMON (arXiv)"
    primary: true
---

## What happened
On November 12, 2026, IBM released experimental Apache 2.0 preview checkpoints of Granite 4.1 (`granite-4.1-3b-llmon-preview` and `granite-4.1-8b-llmon-preview`) trained for LLMON (LLM Object Notation). Standard prompts mix trusted system rules and untrusted retrieved documents in one flat stream, leaving models open to indirect prompt injection (malicious commands hidden inside data). LLMON wraps system policies, documents, and tool outputs in XML-like blocks with reserved special tokens and unique IDs, binding instructions to specific data via explicit execution blocks. In IBM's accompanying paper, indirect prompt-injection attack success rates fell from 53%–100% on standard baselines to 0.02% (8B) and 0.1% (3B) on the OPI benchmark, and 3.1% (8B) and 5.6% (3B) on the ASB agentic benchmark.

## Why it matters
Enforcing instruction-data separation at post-training offers a structural defense for small enterprise agents that process untrusted web pages and tool outputs.
