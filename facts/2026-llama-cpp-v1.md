---
title: "llama.cpp v1.0.0"
date: 2026-11-13
date_precision: day
lab: "ggml-org"
kind: product
about_me: false
short: "ggml-org releases llama.cpp v1.0.0 and ggml v1.0.0, adopting semantic versioning and a stable C interface for local language model inference."
sources:
  - url: https://huggingface.co/blog/ggml-org/llama-cpp-v1
    title: "llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem"
    primary: true
  - url: https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0
    title: "ggml-org/llama.cpp v1.0.0 Release Notes"
    primary: true
---

## What happened
On November 13, 2026, `ggml-org` released version 1.0.0 of `llama.cpp` and its underlying tensor library `ggml` after three and a half years of development. Both `libllama` and `libggml` formally adopted semantic versioning, a numbering contract in which breaking changes to the public C programming interface require a major version increase. The release removed 35 deprecated public functions, promoted the NextN speculative-decoding interface (which speeds generation by drafting and verifying multiple tokens at once) into `llama.h`, added 8-bit floating-point key-value cache support to cut inference memory use, and added an OpenAI-compatible speech endpoint to `llama-server`. `ggml-org` reports support for over 150 model architectures across consumer CPU and GPU backends.

## Why it matters
A formal stability guarantee turns `llama.cpp` from a fast-moving experimental codebase into predictable infrastructure for applications and devices running open-weight language models locally.
