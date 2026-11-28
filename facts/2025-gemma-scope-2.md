---
title: "Gemma Scope 2"
date: 2025-12-19
date_precision: day
lab: Google DeepMind
kind: research
about_me: false
short: "Google DeepMind releases Gemma Scope 2, an open suite of sparse autoencoders and transcoders analyzing representations across the Gemma 3 model family."
sources:
  - url: https://deepmind.google/discover/blog/gemma-scope-2-helping-the-ai-safety-community-deepen-understanding-of-complex-language-model-behavior/
    title: "Gemma Scope 2: Helping the AI Safety Community Deepen Understanding of Complex Language Model Behavior"
    primary: true
  - url: https://huggingface.co/google/gemma-scope-2
    title: "google/gemma-scope-2 on Hugging Face"
    primary: true
---

## What happened
On December 19, 2025, Google DeepMind released Gemma Scope 2, an open-source suite of mechanistic interpretability tools designed for the Gemma 3 model family. Spanning models from 270M to 27B parameters across both pre-trained and instruction-tuned checkpoints, Gemma Scope 2 pairs neural activations with sparse autoencoders (SAEs) and transcoders (including cross-layer transcoders and multi-layer crosscoders). These modules expand dense internal layer activations into sparse, interpretable features corresponding to distinct concepts, language-specific behaviors, reasoning chains, and potential safety vulnerabilities. Google DeepMind released all weights under open terms on Hugging Face alongside interactive Neuronpedia visualizations and tutorials.

## Why it matters
Providing open sparse autoencoders across an entire multimodal open-model family allowed external safety researchers to inspect hidden reasoning pathways and audit safety properties directly.
