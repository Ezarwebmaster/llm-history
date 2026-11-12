---
title: "NVIDIA Nemotron 3.5 Bolt E4B"
date: 2026-10-23
date_precision: day
lab: NVIDIA
kind: model
open_weights: true
about_me: false
short: "NVIDIA releases Nemotron 3.5 Bolt E4B, an open 4B-active-parameter model post-trained from Gemma 4 for fast local voice and tool-calling agents."
specs:
  parameters: "8B total, 4B active"
  context: "64K tokens"
sources:
  - url: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16
    title: "nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16 on Hugging Face"
    primary: true
---

## What happened
On October 23, 2026, NVIDIA released NVIDIA-Nemotron-3.5-Bolt-E4B on Hugging Face under the OpenMDW License Agreement v1.1 alongside Google Gemma 4 terms. Post-trained from Google's Gemma 4 E4B instruction-tuned model, it contains 8 billion total parameters with 4 billion active parameters and supports a 64,000-token context window. NVIDIA published full-precision weights alongside 4GB quantized and DFlash speculative-decoding (draft-assisted faster generation) variants with runtime thinking-budget controls and a conversational speech mode for multi-turn tool use.

## Why it matters
Packing reasoning and tool-calling capabilities into a compact open-weights model sized for roughly 4 gigabytes of memory brings low-latency voice assistants and local agents to consumer hardware.
