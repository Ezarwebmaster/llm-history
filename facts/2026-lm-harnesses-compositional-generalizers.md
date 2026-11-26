---
title: "Language Model Harnesses Can Be Compositional Generalizers"
date: 2026-11-20
date_precision: day
lab: MIT
kind: research
about_me: false
short: "MIT CSAIL researchers show that reinforcement learning inside programmatic harnesses lets language models decompose and generalize to much longer tasks."
sources:
  - url: https://arxiv.org/abs/2611.28298
    title: "Language Model Harnesses can be Compositional Generalizers (arXiv)"
    primary: true
---

## What happened
On November 20, 2026, MIT CSAIL researchers Alex L. Zhang, Souradip Chakraborty, and Omar Khattab posted "Language Model Harnesses can be Compositional Generalizers" (arXiv:2611.28298). Rather than accumulating all context inside a single prompt, they studied programmatic harnesses such as the Recursive Language Model (RLM), where a model writes code and makes recursive sub-calls to manage state externally so each call stays within familiar length bounds. Under reinforcement learning on short tasks alone, the harness generalized to tasks 2 to 64 times longer and transferred across domains sharing latent structure. Using "surrogate harness training"—training individual calls on synthetic environments with simulated tool and sub-model outputs—their trained RLM-27B improved over Qwen3.8-27B inside the same harness by 26.9% on average across long-context benchmarks while using roughly half as many inference tokens.

## Why it matters
Training models to decompose work through programmatic harnesses enables long-horizon generalization from short training examples.
