---
title: "Sakana AI Fugu and Fugu Ultra"
date: 2026-06-22
date_precision: day
lab: "Sakana AI"
kind: model
open_weights: false
replaces: 2026-sakana-fugu
about_me: false
short: "Sakana AI introduces Fugu and Fugu Ultra, a multi-agent orchestration system packaged as a single foundation model API."
sources:
  - url: https://sakana.ai/fugu-release/
    title: "Introducing Sakana Fugu: One Model to Command Them All"
    primary: true
---

## What happened
On June 22, 2026, Tokyo-based Sakana AI released Sakana Fugu and its quality-focused variant Fugu Ultra, a learned multi-agent orchestration system exposed through a single OpenAI-compatible API endpoint. Rather than relying on a single monolithic foundation model or static routing rules, Fugu uses a trained conductor model to decompose complex prompts, delegate sub-tasks across a pool of frontier and specialized models, and synthesize a final response. Sakana AI reported that Fugu Ultra achieved 73.7% on SWE-Bench Pro, 93.2% on LiveCodeBench, and 95.5% on GPQA-Diamond.

## Why it matters
It packages multi-agent collaboration directly behind a standard model interface, allowing developers to coordinate heterogeneous foundation models without building custom routing pipelines.
