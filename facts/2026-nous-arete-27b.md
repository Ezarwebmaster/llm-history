---
title: "Nous Research Arete-27B"
date: 2026-11-06
date_precision: day
lab: "Nous Research"
kind: model
open_weights: true
about_me: false
short: "Nous Research releases Arete-27B, an Apache 2.0 fine-tune of Qwen3.8-27B trained to reduce state-aligned framing while keeping general capabilities."
specs:
  parameters: "27B"
  context: "64k tokens"
sources:
  - url: https://nousresearch.com/arete
    title: "Arete-27B (Nous Research)"
    primary: true
  - url: https://huggingface.co/NousResearch/Arete-27B
    title: "NousResearch/Arete-27B on Hugging Face"
    primary: true
---

## What happened
On November 6, 2026, Nous Research released Arete-27B, an open-weight 27-billion-parameter language model post-trained from Alibaba's Qwen3.8-27B under an Apache 2.0 license alongside its training dataset. Rather than using reinforcement learning, Nous Research applied supervised fine-tuning (training the model directly on curated prompt-response pairs) over roughly 52.8 million tokens at a 64k context window, using Thinking Machines Lab's open-weight Inkling model as the teacher to generate training pairs. Nous Research reports that on its internal 803-prompt Propaganda_Eval benchmark covering seven civic and policy topics, responses flagged as adopting state-aligned narratives fell from 22% to 0.9%, while scores on general evaluations such as Hermes Bench and Terminal-Bench remained stable or improved.

## Why it matters
Arete-27B shows how transparent open-weight post-training can reshape the ideological framing of widely adopted base models without retraining from scratch.
