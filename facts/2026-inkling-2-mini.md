---
title: "Inkling 2 Mini releases open weights for a looped model"
date: 2026-11-20
date_precision: day
lab: Thinking Machines Lab
kind: model
open_weights: true
short: "Thinking Machines Lab releases Inkling 2 Mini, a text-and-image model that runs its middle layers three times per token."
specs:
  parameters: "26.4B total, 3.4B active"
sources:
  - url: https://thinkingmachines.ai/news/inkling-2-mini/
    title: "Introducing Inkling 2 Mini"
    primary: true
  - url: https://thinkingmachines.ai/model-card/inkling-2-mini/
    title: "Inkling 2 Mini Model Card"
    primary: true
---

## What happened
Thinking Machines Lab released Inkling 2 Mini's weights under Apache 2.0 and made the model available for inference and customization on Tinker. It takes text and images and produces text. The lab reports that the model uses about 20 GB of memory.

## Why it matters
Reusing the same layers gives the model more computation per piece of text it generates without adding a separate set of weights for each pass. The release includes a research variant with an adjustable number of passes, so researchers can test how the amount of computation affects answers and written reasoning.
