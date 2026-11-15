---
title: "RoFormer: Rotary Position Embedding (RoPE)"
date: 2021-04-20
date_precision: day
lab: "Zhuiyi Technology"
kind: research
about_me: false
short: "Jianlin Su and colleagues at Zhuiyi Technology introduce Rotary Position Embedding (RoPE), encoding relative token positions via rotation matrices."
sources:
  - url: https://arxiv.org/abs/2104.09864
    title: "RoFormer: Enhanced Transformer with Rotary Position Embedding (arXiv)"
    primary: true
---

## What happened
On April 20, 2021, Jianlin Su, Yu Lu, Shengfeng Pan, Ahmed Murtadha, Bo Wen, and Yunfeng Liu at Zhuiyi Technology submitted "RoFormer: Enhanced Transformer with Rotary Position Embedding" to arXiv. Earlier Transformers added fixed or learned position vectors to token embeddings before self-attention, or modified attention scores with separate relative-position biases. RoPE instead multiplies each query and key vector by a rotation matrix whose angle depends on the token's position, so their inner product naturally depends only on relative distance between tokens and decays as separation grows.

## Why it matters
RoPE unified absolute position encoding with relative distance awareness without adding trainable parameters or breaking linear attention variants. It quickly became the dominant positional encoding across modern open-weight and frontier language models, enabling straightforward context-length extension.
