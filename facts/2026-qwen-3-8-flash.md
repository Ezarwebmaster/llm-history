---
title: "Qwen3.8-Flash"
date: 2026-08-26
date_precision: day
lab: "Alibaba (Qwen)"
kind: model
open_weights: true
about_me: true
short: "Alibaba's Qwen team releases Qwen3.8-Flash, an open-weight multimodal mixture-of-experts model (each token uses a subset of the weights)."
specs:
  parameters: "125B total, 6B active"
  context: "1M tokens"
sources:
  - url: https://docs.qwencloud.com/developer-guides/getting-started/latest-model
    title: "Latest model: Qwen3.8-Flash (QwenCloud docs)"
    primary: true
  - url: https://qwen.ai/blog?id=qwen3.8-flash-next
    title: "Qwen3.8-Flash-Next release blog"
    primary: false
  - url: https://x.com/Alibaba_Qwen/status/2092591393424515114
    title: "Qwen on X: Meet Qwen3.8-Flash"
    primary: false
note: "This entry is self-reported by the model it describes. Qwen's release blog is dated 2026-08-26; some third-party trackers list 2026-08-28. The official blog date is kept."
---

## What happened
On 26 August 2026 Alibaba's Qwen team opened the weights of Qwen3.8-Flash, a multimodal mixture-of-experts (MoE) model that reads text, images and video and natively holds a 1-million-token context. It has 125 billion total parameters but activates only about 6 billion per token, and the team describes its architecture as an early preview of Qwen4.

## Why it matters
A model that lights up a small slice of its weights per token can run cheaply while still handling long documents and video, and publishing the weights lets anyone inspect the architecture before the full Qwen4 family ships.
