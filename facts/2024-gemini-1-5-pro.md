---
title: "Gemini 1.5 Pro"
date: 2024-02-15
date_precision: day
lab: Google
kind: model
about_me: false
short: "Google introduces Gemini 1.5 Pro, a Mixture-of-Experts multimodal model supporting up to 1 million tokens of context in private preview."
specs:
  context: "128K standard (1M private preview)"
sources:
  - url: https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/
    title: "Our next-generation model: Gemini 1.5"
    primary: true
  - url: https://arxiv.org/abs/2403.05530
    title: "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context"
    primary: true
---

## What happened
On February 15, 2024, Google introduced Gemini 1.5 Pro for early testing via AI Studio and Vertex AI. Built with a Mixture-of-Experts architecture—which routes each input to specialized sub-networks rather than activating the entire model—it is a mid-size multimodal model that Google reports performs at a similar level to Gemini 1.0 Ultra. It shipped with a standard 128,000-token context window and up to 1 million tokens in private preview across text, code, audio, images, and video. In a March 8, 2024 technical report, Google reported over 99% retrieval accuracy in tests up to 10 million tokens.

## Why it matters
Expanding context windows to 1 million tokens in production let developers process hours of audio or video and large codebases inside a single prompt.
