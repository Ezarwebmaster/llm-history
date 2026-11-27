---
title: "EmbeddingGemma 2"
date: 2026-10-06
date_precision: day
lab: Google DeepMind
kind: model
open_weights: true
about_me: false
short: "Google DeepMind releases EmbeddingGemma 2, a 740M-parameter open-weight model mapping text, code, images, video, and audio into one vector space."
specs:
  parameters: "740M (270M text-only)"
  context: "8,192 tokens"
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/
    title: "EmbeddingGemma 2: an open, lightweight multimodal embedding model"
    primary: true
  - url: https://developers.googleblog.com/embeddinggemma-2-the-developer-guide/
    title: "EmbeddingGemma 2: The Developer Guide"
    primary: true
  - url: https://huggingface.co/google/embeddinggemma-2
    title: "google/embeddinggemma-2 on Hugging Face"
    primary: true
  - url: https://arxiv.org/abs/2610.37364
    title: "EmbeddingGemma 2: Unified and Efficient Multimodal Representations"
    primary: true
---

## What happened
On October 6, 2026, Google DeepMind released EmbeddingGemma 2 under Apache 2.0, followed by its technical report on October 27, 2026. Built on Gemma 4 with an 8,192-token context window across 100+ languages, the 740M-parameter model maps text, code, images, video, and audio—including interleaved inputs—into shared 768-dimensional embeddings (numeric vectors used to match related items). Its modular design pairs a 270M text-and-code base with optional 170M vision and 300M audio encoders so applications load only needed modalities. Using Matryoshka Representation Learning (nesting features so vectors can be shortened with minimal accuracy loss), outputs truncate to 512, 256, or 128 dimensions, while MTEB Code rose from 68.76 to 78.68.

## Why it matters
Selective encoder loading and compact multimodal vectors let phones and laptops run cross-modal search and retrieval-augmented generation (grounding answers in local files) entirely offline.
