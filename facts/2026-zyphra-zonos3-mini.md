---
title: "Zyphra ZONOS3-Mini"
date: 2026-11-09
date_precision: day
lab: "Zyphra"
kind: model
open_weights: true
about_me: false
short: "Zyphra releases ZONOS3-Mini, an open-weight 800M-parameter Mixture-of-Experts speech synthesis and voice-cloning model with 100M active parameters."
specs:
  parameters: "800M total, ~100M active"
  context: "32,768 positions"
sources:
  - url: https://www.zyphra.com/our-work/zonos3-mini
    title: "ZONOS3-Mini (Zyphra)"
    primary: true
  - url: https://huggingface.co/Zyphra/ZONOS3-Mini
    title: "Zyphra/ZONOS3-Mini (Hugging Face)"
    primary: true
  - url: https://huggingface.co/blog/Zyphra/zonos3-mini
    title: "ZONOS3-Mini: Open-Source Real-Time Voice Cloning & Steerable TTS in 100M Active Parameters"
    primary: true
note: "Zyphra's official announcement page is dated November 9, 2026, while its Hugging Face blog article displays November 11, 2026 in the byline and November 12, 2026 in the header; kept 2026-11-09 from Zyphra's announcement."
---

## What happened
On November 9, 2026, Zyphra released ZONOS3-Mini under the Apache 2.0 license, a multilingual text-to-speech and zero-shot voice-cloning model supporting 43 languages. Trained in 2.5 days on 112 NVIDIA H100 GPUs, its 11-layer backbone combines nine Gated DeltaNet linear-recurrence layers with two global attention layers and a sparse Mixture-of-Experts design (64 experts with top-2 routing, activating roughly 100 million of its 800 million parameters per token). The model autoregressively predicts 15 Hz frames from Zyphra Audio Codec 1 (ZAC-1) to render 44.1 kHz audio. Zyphra reports time-to-first-audio under 570 ms in-browser via WebGPU on a Pixel 9, under 150 ms on an M3 MacBook Air, and 80 ms median latency (457x real-time peak throughput) on one H100 GPU.

## Why it matters
Pairing a low-frame-rate audio codec with a sparse hybrid backbone brings multilingual voice cloning from an 8-billion-parameter server setup down to client-side browser and phone hardware.
