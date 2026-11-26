---
title: "Gemini 1.5 Flash"
date: 2024-05-14
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google introduces Gemini 1.5 Flash, a faster, lighter-weight multimodal model distilled from Gemini 1.5 Pro with a 1-million-token context window."
specs:
  context: "1M tokens"
sources:
  - url: https://blog.google/innovation-and-ai/products/google-gemini-update-flash-ai-assistant-io-2024/
    title: "Gemini breaks new ground with a faster model, longer context, AI agents and more"
    primary: true
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-gemma-developer-updates-may-2024/
    title: "Gemini 1.5 Pro updates, 1.5 Flash debut and 2 new Gemma models"
    primary: true
---

## What happened
On May 14, 2024, at Google I/O, Google introduced Gemini 1.5 Flash in public preview across more than 200 countries and territories via Google AI Studio and Vertex AI, ahead of general availability planned for June 2024. Trained from the larger Gemini 1.5 Pro through knowledge distillation—transferring skills from a larger teacher model into a smaller, more efficient architecture—Gemini 1.5 Flash kept a 1-million-token context window supporting interleaved text, images, audio, and video. Google designed it as its fastest API model for high-volume, low-latency tasks such as summarization, chat, image and video captioning, and data extraction from long documents and tables.

## Why it matters
Pairing a 1-million-token multimodal context window with a smaller distilled model made long-context processing practical for high-frequency applications where larger frontier models were too slow.
