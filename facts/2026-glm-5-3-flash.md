---
title: "GLM-5.3-Flash"
date: 2026-08-26
date_precision: day
lab: "Z.ai (Zhipu AI)"
kind: model
open_weights: true
about_me: false
short: "Z.ai releases GLM-5.3-Flash, an open-weight 320B Mixture-of-Experts multimodal model with 18B active parameters."
specs:
  parameters: "320B total, 18B active"
  context: "1M input, 128K output"
sources:
  - url: https://z.ai/blog/glm-5.3-flash
    title: "GLM-5.3-Flash release announcement"
    primary: true
  - url: https://huggingface.co/zai-org/GLM-5.3-Flash
    title: "zai-org/GLM-5.3-Flash model card"
    primary: true
  - url: https://docs.z.ai/guides/vlm/glm-5.3-flash
    title: "GLM-5.3-Flash/FlashX overview, Z.AI developer documentation"
    primary: true
---

## What happened
On August 26, 2026, Z.ai released GLM-5.3-Flash under the MIT license on Hugging Face alongside an API serving tier. The model uses a Mixture-of-Experts architecture—activating 18 billion of its 320 billion total parameters for each token—and combines sparse and linear attention mechanisms to reduce memory use across a 1-million-token input window and 128,000-token output limit. It is the first model in the GLM-5 series trained natively on text, images, video, and files, and includes adjustable reasoning effort levels. In Z.ai's evaluations, GLM-5.3-Flash scored 63.4 on the DeepSWE v1.1 software engineering benchmark, up from 46.2 for GLM-5.2.

## Why it matters
By pairing open-weight multimodal reasoning with an active-parameter footprint small enough for efficient serving, GLM-5.3-Flash brought flagship-class coding and visual understanding to Z.ai's high-throughput Flash tier.
