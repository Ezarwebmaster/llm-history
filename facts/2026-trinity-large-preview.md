---
title: "Trinity Large Preview, Base and TrueBase"
date: 2026-01-27
date_precision: day
lab: "Arcee AI"
kind: model
open_weights: true
about_me: false
short: "Arcee AI releases Trinity Large with chat-ready Preview, Base and earlier TrueBase checkpoints."
specs:
  parameters: "400B total, 13B active"
sources:
  - url: https://www.arcee.ai/blog/trinity-large
    title: "Introducing Trinity Large"
    primary: true
  - url: https://huggingface.co/arcee-ai/Trinity-Large-Preview
    title: "Arcee AI's Trinity-Large-Preview model card"
    primary: true
---

## What happened
On January 27, 2026, Arcee AI released three downloadable versions of Trinity Large. Its mixture-of-experts design selects a small subset of its internal networks for each token, using 13 billion of its 400 billion parameters at a time. Preview was lightly adapted for conversation, without the extended reasoning training still underway. Base followed training on 17 trillion tokens; TrueBase was an earlier checkpoint at 10 trillion tokens, without instruction data.

## Why it matters
The release gave researchers access to both a conversational model and checkpoints from before that adaptation. Arcee specifically offered TrueBase for studying what pretraining alone had taught the model. The company also cautioned that Preview still had rough edges when used in coding agents.
