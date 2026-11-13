---
title: "SOV-Transcribe-1"
date: 2026-11-12
date_precision: day
lab: Salesforce
kind: model
open_weights: true
about_me: false
short: "Salesforce releases SOV-Transcribe-1, an Apache 2.0 open-weight speech recognition model pairing Whisper large-v3 with a Gemma 4 MoE decoder."
specs:
  parameters: "26.6B total (4.6B active)"
sources:
  - url: https://huggingface.co/salesforce-sovereign-intelligence/SOV-Transcribe-1
    title: "salesforce-sovereign-intelligence/SOV-Transcribe-1 (Hugging Face)"
    primary: true
---

## What happened
On November 12, 2026, Salesforce's Missionforce Sovereign AI team released SOV-Transcribe-1 under the Apache 2.0 license on Hugging Face. The speech-augmented language model pairs a Whisper large-v3 audio encoder and projector with a Gemma 4 26B-A4B mixture-of-experts decoder—an architecture that activates only a subset of weights per token—totaling 26.6 billion parameters with 4.6 billion active. Tested on 16 kHz audio clips up to 30 minutes across seven European languages, it supports natural-language formatting instructions and vocabulary context biasing for domain terms, and runs in vLLM and Transformers.

## Why it matters
Pairing speech encoders with open-weight mixture-of-experts decoders gives enterprises customizable, self-hostable transcription with prompt-driven formatting and entity accuracy instead of fixed black-box speech pipelines.
