---
title: "SenseNova-Loop-9B"
date: 2026-11-17
date_precision: day
lab: "SenseTime"
kind: model
open_weights: true
about_me: false
short: "SenseTime releases SenseNova-Loop-9B, an Apache-2.0 multimodal model that loops 24 shared transformer layers to reach 56-layer depth with 9B parameters."
specs:
  parameters: "9B (14.6B inference-equivalent)"
  context: "512k tokens"
sources:
  - url: https://www.sensetime.com/en/news/sensenova-loop-9b-release-20261118-1435
    title: "SenseNova Loop-9B Official Release: Deeper Computation with Fewer Parameters"
    primary: true
  - url: https://github.com/OpenSenseNova/SenseNova-Loop
    title: "OpenSenseNova/SenseNova-Loop (GitHub)"
    primary: true
  - url: https://huggingface.co/sensenova/SenseNova-Loop-9B
    title: "sensenova/SenseNova-Loop-9B Model Card (Hugging Face)"
    primary: false
---

## What happened
On November 17, 2026, SenseTime released SenseNova-Loop-9B under the Apache 2.0 license with code on GitHub and weights on Hugging Face (following an October 31 preview, with quantized weights linked on November 18). The 9-billion-parameter model accepts text and images across a 512k-token context window. Rather than storing distinct weights for every layer, it uses a looped transformer (running a shared 24-layer middle block twice inside 32 physical layers to perform 56 layer executions per forward pass), paired with hybrid linear and full attention and two-stream residual routing. SenseTime reports scores of 59.55 on Terminal-Bench 2.1, 69.90 on GAIA, and 36.67 on AutomationBench.

## Why it matters
By reusing weights across repeated passes, SenseTime tests whether deeper computation at inference time can let a 9-billion-parameter model approach larger models while keeping weight memory compact.
