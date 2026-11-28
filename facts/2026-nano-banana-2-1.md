---
title: "Nano Banana 2.1"
date: 2026-10-06
date_precision: day
lab: Google DeepMind
kind: model
open_weights: false
about_me: false
short: "Google DeepMind releases Nano Banana 2.1, a Gemini 3.6 Flash-based image generation and editing model supporting up to 14 input images and 4K output."
specs:
  context: "1M model card; 131K Cloud API"
sources:
  - url: https://deepmind.google/models/model-cards/nano-banana-2-1/
    title: "Nano Banana 2.1 - Model Card"
    primary: true
  - url: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/nano-banana-2-1
    title: "Gemini Nano Banana 2.1 — Google Cloud Documentation"
    primary: true
note: "The DeepMind model card lists up to 1M input tokens (64K text and 4K image output), whereas Google Cloud Agent Platform docs list a 131,072-token context window and 32,768 maximum output tokens; both give October 6, 2026."
---

## What happened
On October 6, 2026, Google DeepMind released Nano Banana 2.1 (`gemini-nano-banana-2.1`), a multimodal image generation and editing model built on Gemini 3.6 Flash. Distributed across the Gemini app, AI Studio, Gemini API, Google Cloud's Agent Platform, Search AI Mode, Ads, Flow, and Stitch, it outputs interleaved text and 1K, 2K, or 4K images across 14 aspect ratios up to 8:1 and 1:8, accepts up to 14 input images plus video prompts, and supports thinking mode, Search and Image Search grounding, virtual try-on, and Content Credentials (C2PA) provenance metadata. In Google's October 2026 human evaluations with thinking enabled, it reached 1050 Elo overall and 1106 on multi-character consistency, ahead of Nano Banana 2 (990, 978) and Nano Banana Pro (935, 1011).

## Why it matters
Upgrading the backbone to Gemini 3.6 Flash pushed infographic factuality and multi-character consistency past Google's earlier Pro image model at Flash speed.
