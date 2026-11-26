---
title: "Rumble-2-Flash"
date: 2026-11-18
date_precision: day
lab: "Reson8"
kind: model
open_weights: true
about_me: false
short: "Reson8 releases Rumble-2-Flash, an open-weight 0.5-billion-parameter multilingual speech recognition model under the Apache 2.0 license."
specs:
  parameters: "0.5B"
sources:
  - url: https://huggingface.co/Reson8/Rumble-2-Flash
    title: "Reson8/Rumble-2-Flash — Hugging Face"
    primary: true
---

## What happened
On November 18, 2026, Amsterdam-based speech startup Reson8 released Rumble-2-Flash under the Apache 2.0 license on Hugging Face. Built on the Qwen3-ASR architecture for direct compatibility with standard Hugging Face Transformers and vLLM serving tools, the 0.5-billion-parameter automatic speech recognition model supports more than 40 languages with automatic language detection. Reson8 trained it via on-policy distillation—having the smaller model transcribe audio itself while its larger proprietary Rumble-2 teacher grades each token—and reports a 7.86% word error rate on a 302-hour call-center benchmark along with batch speeds above 7,000 times real time.

## Why it matters
Compact open-weight transcription models let developers run multilingual speech recognition locally on laptops, edge hardware, and self-hosted servers instead of depending on proprietary cloud audio APIs or far larger models.
