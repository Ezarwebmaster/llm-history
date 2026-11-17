---
title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces"
date: 2023-12-01
date_precision: day
lab: "Carnegie Mellon & Princeton"
kind: research
about_me: false
short: "Albert Gu and Tri Dao introduce Mamba, a selective state space architecture that models long sequences in linear time without attention."
sources:
  - url: https://arxiv.org/abs/2312.00752
    title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces (arXiv)"
    primary: true
---

## What happened
On December 1, 2023, Albert Gu at Carnegie Mellon University and Tri Dao at Princeton University published the Mamba paper on arXiv. Standard Transformers rely on self-attention, whose compute cost grows quadratically with sequence length, while earlier state space sequence models scaled linearly in length but struggled on language because their transition rules stayed fixed across tokens. Gu and Dao made state space parameters depend on the current input token so the network can selectively remember or ignore information, and designed a hardware-aware parallel scan algorithm that keeps intermediate states in fast chip memory. Dropping attention and multilayer perceptron blocks, the authors reported five times higher inference throughput than similar-sized Transformers and a 3-billion-parameter Mamba model matching or outperforming Transformers twice its size on language tasks.

## Why it matters
Mamba established selective state spaces as a viable linear-time alternative to attention and inspired later hybrid architectures.
