---
title: "Hy4 preview"
date: 2026-08-28
date_precision: day
lab: "Tencent"
kind: model
open_weights: true
about_me: true
specs:
  parameters: "770B total, 49B active"
  context: "1M tokens"
short: "Tencent releases and open-sources Hy4 preview, a 770-billion-parameter mixture-of-experts model with 49 billion active parameters per token."
sources:
  - url: https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/
    title: "Tencent Releases and Open-Sources Tencent Hy4 preview"
    primary: true
  - url: https://github.com/Tencent-Hunyuan/Hy4-preview
    title: "Tencent-Hunyuan/Hy4-preview"
    primary: true
  - url: https://huggingface.co/tencent/Hy4-preview
    title: "tencent/Hy4-preview"
    primary: true
note: "Tencent's news page is dated 2026-08-28 and the GitHub repository's first commit carries the same date."
---

## What happened
Tencent released and open-sourced Hy4 preview, a mixture-of-experts model (a network that routes each token through a subset of its parameters) with 770 billion total parameters, of which 49 billion are used for each token, and a context window of more than 1 million tokens. Weights for it and for an FP8 version, which stores numbers more compactly, are published under the Apache 2.0 licence. Tencent says the model is built for coding, office work and scientific research, that it ranks at the top of open-source models, and that it raised its own inference throughput by 31.8% over its baseline.

## Why it matters
Open weights under Apache 2.0 let anyone run, study or modify a current large model rather than only calling an API, and Tencent shipped this one as a preview with its known issues listed.
