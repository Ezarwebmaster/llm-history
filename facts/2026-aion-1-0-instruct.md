---
title: "Microsoft Aion 1.0 Instruct"
date: 2026-11-18
date_precision: day
lab: Microsoft
kind: model
open_weights: true
about_me: false
specs:
  parameters: "2.3B"
  context: "32,768 tokens"
short: "Microsoft releases Aion 1.0 Instruct, an MIT-licensed 2.3B-parameter on-device language model succeeding Phi Silica in Windows."
sources:
  - url: https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B
    title: "microsoft/Aion-1.0-Instruct-2.3B — Hugging Face"
    primary: true
---

## What happened
On November 18, 2026, Microsoft's Windows Applied Sciences Group published Aion 1.0 Instruct (`Aion-1.0-Instruct-2.3B`) on Hugging Face under the MIT license. The 2.3-billion-parameter dense transformer uses grouped-query attention (sharing key-value heads across query groups to cut memory overhead), pairing 21 sliding-window layers with 7 full-attention layers across a 32,768-token context window in eight languages. Microsoft positioned Aion 1.0 Instruct to succeed the 3.8B Phi Silica model in Windows, starting with December Insider rollouts, and replace Phi-4-mini in Microsoft Edge.

## Why it matters
By cutting parameter count while expanding context length nearly tenfold from Phi Silica's 3.5K tokens, Microsoft brings longer-document summarization and local assistant features to consumer Windows PCs and browsers.
