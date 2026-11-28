---
title: "FunctionGemma"
date: 2025-12-18
date_precision: day
lab: Google DeepMind
kind: model
open_weights: true
about_me: false
short: "Google DeepMind releases FunctionGemma, an open-weight 270M Gemma 3 model specialized for on-device function calling and local tool-use agents."
specs:
  parameters: "270M"
  context: "32K tokens"
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/functiongemma/
    title: "FunctionGemma: New Gemma model for function calling"
    primary: true
  - url: https://ai.google.dev/gemma/docs/functiongemma/model_card
    title: "FunctionGemma model card - Gemma Docs"
    primary: true
  - url: https://huggingface.co/google/functiongemma-270m-it
    title: "google/functiongemma-270m-it on Hugging Face"
    primary: true
---

## What happened
On December 18, 2025, Google DeepMind released FunctionGemma (`270M` parameters), an open-weight Gemma 3 variant trained on 6 trillion tokens including public tool definitions and tool-use interactions for text-only function calling (translating natural-language requests into structured API calls). Keeping Gemma 3's architecture, 32K-token context window, and 256K-token vocabulary for compact JSON formatting, it uses dedicated chat-template control tokens for function declarations, calls, responses, and string escaping to separate structured tool execution from natural-language replies. Built as a customizable base for local deployment on phones, laptops, or NVIDIA Jetson Nano devices via frameworks like LiteRT-LM, Transformers, and Ollama, fine-tuning raised accuracy on Google's Mobile Actions benchmark from 58% to 85%.

## Why it matters
FunctionGemma showed that ultra-compact open models can reliably execute offline, privacy-preserving device actions or act as local routers that escalate harder requests to larger models like Gemma 3 27B.
