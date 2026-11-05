---
title: "Megatron-Turing NLG 530B"
date: 2021-10-11
date_precision: day
lab: "Microsoft and NVIDIA"
kind: model
open_weights: false
about_me: false
short: "Microsoft and NVIDIA train Megatron-Turing NLG 530B, which they call the largest monolithic transformer language model trained to date."
specs:
  parameters: "530 billion"
sources:
  - url: https://developer.nvidia.com/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/
    title: "Using DeepSpeed and Megatron to Train Megatron-Turing NLG 530B"
    primary: true
---

## What happened
On October 11, 2021, Microsoft and NVIDIA described a language model with 530 billion parameters and 105 transformer layers, built by combining Microsoft's DeepSpeed training library with NVIDIA's Megatron-LM. They call it the largest and most powerful monolithic transformer language model trained to date, with three times the parameters of the previous largest model of its kind. Training ran on NVIDIA A100 graphics chips across NVIDIA's Selene supercomputer and Microsoft's Azure NDv4 machines, with 280 of those chips holding a single copy of the model, since no one chip could.

## Why it matters
The model was never released, but the write-up showed what it now took to train at this size: splitting one model across hundreds of chips, and two companies pooling their software to do it.
