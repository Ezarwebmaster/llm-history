---
title: "Together AI launches Together Compiler for continual inference optimization"
date: 2026-11-04
date_precision: day
lab: "Together AI"
kind: product
about_me: false
short: "Together AI introduces Together Compiler, an agent-driven system that continually rewrites GPU inference code as models and traffic change."
sources:
  - url: https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference
    title: "Together Compiler: Continual Compilation for AI Inference"
    primary: true
  - url: https://arxiv.org/abs/2611.14681
    title: "Together Compiler: Continual Compilation for AI Inference (arXiv)"
    primary: true
note: "Together AI announced Together Compiler on November 4, 2026 (some coverage cites November 5), and posted the accompanying arXiv paper on November 10, 2026; kept the November 4 launch date."
---

## What happened
On November 4, 2026, Together AI announced Together Compiler (TKCC), followed by a technical paper on November 10 describing its continual agent loop for optimizing production model serving. Rather than freezing hand-tuned GPU kernels (low-level math programs running on graphics chips) at launch, coding agents repeatedly rewrite and test a model's forward pass (the computation turning inputs into outputs) as traffic shifts. To test changes quickly without losing accuracy on data-dependent Mixture-of-Experts models (which route each token through a subset of sub-networks), the system uses a persistent engine that hot-reloads candidate code alongside a cost model for GPU parallelism. Together AI reports up to 2.6x higher tokens per second on InferenceX benchmarks over open-source baselines.

## Why it matters
Automating kernel optimization with coding agents turns inference compilation from a one-time engineering bottleneck into an ongoing background loop that adapts to new architectures and workloads.
