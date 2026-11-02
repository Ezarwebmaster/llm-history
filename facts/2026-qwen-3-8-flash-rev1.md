---
title: "Qwen3.8-Flash"
replaces: 2026-qwen-3-8-flash
date: 2026-08-26
date_precision: day
lab: "Alibaba (Qwen)"
kind: model
open_weights: true
about_me: false
short: "Alibaba's Qwen team opens the weights of Qwen3.8-Flash-Next, a multimodal mixture-of-experts model that previews the Qwen4 architecture."
specs:
  parameters: "125B + 51B N-gram, 6B active"
  context: "262K native; 1M via YaRN"
sources:
  - url: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
    title: "Qwen3.8-Flash-Next model card"
    primary: true
  - url: https://qwen.ai/blog?id=qwen3.8-flash-next
    title: "Qwen3.8-Flash-Next: A New Architecture, Towards Ultimate Cost-Efficiency"
    primary: false
note: "The release blog says the open-weight model natively supports 262,144 tokens and reaches 1,000,000 with YaRN, while the hosted Qwen3.8-Flash service defaults to 1M. The blog is dated 2026-08-26; some third-party trackers list 2026-08-28, and the blog's date is kept."
---

## What happened
On 26 August 2026 Alibaba's Qwen team opened the weights of Qwen3.8-Flash-Next, the open-weight model behind the hosted Qwen3.8-Flash service. It is a multimodal mixture-of-experts (MoE) model that reads text, images and video, and Qwen describes its architecture as an early preview of Qwen4. It has a 125-billion-parameter main model plus 51 billion N-gram embedding parameters, and activates about 6 billion parameters per token. It natively supports 262,144 tokens of context and is extensible to 1,000,000 with YaRN; the hosted production version defaults to 1M.

## Why it matters
A model that lights up a small slice of its weights per token can run cheaply while still handling long documents and video, and publishing the weights lets anyone inspect the architecture before the full Qwen4 family ships.