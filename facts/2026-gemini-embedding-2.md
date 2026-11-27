---
title: "Gemini Embedding 2"
date: 2026-03-10
date_precision: day
lab: Google DeepMind
kind: model
open_weights: false
about_me: false
short: "Google DeepMind launches Gemini Embedding 2 in public preview, mapping text, images, video, audio, and PDFs into a single embedding space."
specs:
  context: "8,192 input tokens"
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-embedding-2/
    title: "Gemini Embedding 2: Our first natively multimodal embedding model"
    primary: true
  - url: https://aistudio.google.com/docs/models/gemini-embedding-2
    title: "Gemini Embedding 2 model | Gemini API Docs"
    primary: true
  - url: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/embedding-2
    title: "Gemini Embedding 2 | Google Cloud Documentation"
    primary: true
  - url: https://aistudio.google.com/docs/changelog
    title: "Release notes — Gemini API"
    primary: false
---

## What happened
On March 10, 2026, Google DeepMind launched Gemini Embedding 2 (`gemini-embedding-2-preview`) in public preview via the Gemini API and Vertex AI, reaching general availability (`gemini-embedding-2`) on April 22, 2026, and deprecating the preview string on November 6, 2026. It maps text (up to 8,192 tokens across 100+ languages), up to six images, audio (180 seconds), video (120 seconds without audio or 80 seconds with audio), and PDFs (six pages)—including interleaved inputs—into vectors (numeric representations used to match similar items) in one unified space. Using Matryoshka Representation Learning (a nesting method that preserves accuracy when truncating vectors), output dimensions scale from 3,072 down to 1,536, 768, or as low as 128.

## Why it matters
A single cross-modal vector space lets retrieval-augmented generation (RAG) and search systems index mixed media without separate per-modality pipelines.
