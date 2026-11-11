---
title: "Inkling, Thinking Machines' First Open-Weights Model"
date: 2026-07-15
date_precision: day
lab: "Thinking Machines Lab"
kind: model
open_weights: true
about_me: false
short: "Thinking Machines Lab releases Inkling, a model it trained from scratch, with full weights on Hugging Face for others to adapt."
specs:
  parameters: "975B total, 41B active"
  context: "1M tokens"
sources:
  - url: https://thinkingmachines.ai/news/introducing-inkling/
    title: "Inkling: Our Open-Weights Model (Thinking Machines Lab)"
    primary: true
  - url: https://huggingface.co/blog/thinkingmachines-inkling
    title: "Welcome Inkling by Thinking Machines (Hugging Face blog)"
    primary: false
---

## What happened
On July 15, 2026, Thinking Machines Lab released Inkling, the first model it trained from scratch, with its full weights on Hugging Face. It is a mixture-of-experts model, one that sends each piece of text through only a few of its many sub-networks: 41 billion of its 975 billion parameters are active at a time. It reads text, images and audio, and was pretrained on 45 trillion tokens. The lab presents it as a base for customization, which developers can fine-tune through its Tinker service, and calls it the first of a family of models of different sizes. It also says plainly that Inkling is not the strongest model available today, open or closed.

## Why it matters
Thinking Machines made its first model a base for others to adapt, rather than a bid for the top of the leaderboards.
