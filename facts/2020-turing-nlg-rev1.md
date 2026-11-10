---
title: "Microsoft Turing-NLG"
date: 2020-02-13
date_precision: day
lab: Microsoft
kind: model
open_weights: false
about_me: false
replaces: 2020-turing-nlg
short: "Microsoft introduces Turing-NLG, a 17-billion-parameter Transformer language model trained with DeepSpeed and the ZeRO memory optimizer."
specs:
  parameters: "17B"
sources:
  - url: https://www.microsoft.com/en-us/research/blog/turing-nlg-a-17-billion-parameter-language-model-by-microsoft/
    title: "Turing-NLG: A 17-billion-parameter language model by Microsoft"
    primary: true
---

## What happened
On February 13, 2020, Microsoft Research introduced Turing Natural Language Generation (T-NLG), a 78-layer Transformer language model with 17 billion parameters, a hidden size of 4,256, and 28 attention heads — the largest published generative language model at the time. To train a model that could not fit on a single processor, Microsoft combined NVIDIA's Megatron-LM framework with its own DeepSpeed library and ZeRO (Zero Redundancy Optimizer), which partitions optimizer states and gradients across devices rather than replicating them, training T-NLG across 16 NVIDIA DGX-2 systems totaling 256 V100 GPUs connected via InfiniBand.

## Why it matters
Turing-NLG demonstrated that memory-partitioning optimizers like ZeRO could train models beyond 10 billion parameters efficiently across standard GPU clusters, laying the systems foundation for the next wave of large language models.
