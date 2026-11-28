---
title: "RETRO"
date: 2021-12-08
date_precision: day
lab: DeepMind
kind: model
open_weights: false
about_me: false
short: "DeepMind introduces RETRO, a 7.5B retrieval-enhanced language model that queries a 2-trillion-token database to match 25x larger dense Transformers."
specs:
  parameters: "172M, 425M, 1.5B, 7.5B"
  context: "2,048 tokens"
note: "DeepMind's blog lists Jurassic-1 as 175B while arXiv:2112.04426 cites 178B (kept) and gives exact RETRO parameter counts of 172M, 425M, 1,451M (1.5B), and 7,532M (7.5B)."
sources:
  - url: https://deepmind.google/blog/improving-language-models-by-retrieving-from-trillions-of-tokens/
    title: "Improving language models by retrieving from trillions of tokens"
    primary: true
  - url: https://arxiv.org/abs/2112.04426
    title: "Improving language models by retrieving from trillions of tokens (arXiv)"
    primary: true
---

## What happened
On December 8, 2021, DeepMind introduced RETRO (Retrieval-Enhanced Transformer), an autoregressive language model family (172M, 425M, 1.5B, and 7.5B parameters, over 132M to 7B baselines) that decouples model scale from stored knowledge by querying a two-trillion-token MassiveText database. RETRO splits each 2,048-token input into 64-token chunks and uses frozen BERT embeddings with SCaNN approximate nearest-neighbor search (lookup indexes querying two trillion tokens in 10 milliseconds) to retrieve matching chunks and continuations. A bidirectional encoder conditions these neighbors on input chunks, and the decoder integrates them via chunked cross-attention (interleaved layers attending to retrieved passages). On The Pile, RETRO-7.5B beat 178B Jurassic-1 on 10 of 16 test sets and 280B Gopher on 9 of 16, and pretrained models can be retrofitted with retrieval.

## Why it matters
RETRO showed that trillion-token retrieval lets a compact language model match dense models 25 times larger while keeping factual memory updatable without retraining.
