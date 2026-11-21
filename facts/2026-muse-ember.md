---
title: "Meta releases Muse Ember"
date: 2026-11-09
date_precision: day
lab: "Meta"
kind: model
open_weights: false
about_me: false
short: "Meta Superintelligence Labs introduces Muse Ember, a lightweight multimodal model built for high-volume agent subtasks via the Meta Model API."
specs:
  context: "1M tokens"
sources:
  - url: https://research.meta.ai/blog/introducing-muse-ember
    title: "Introducing Our Smallest, Most Efficient Model: Muse Ember"
    primary: true
  - url: https://research.meta.ai/static/muse-ember-evaluation-report
    title: "Muse Ember Evaluation Report"
    primary: true
---

## What happened
On November 9, 2026, Meta Superintelligence Labs released Muse Ember (`muse-ember-1.0`) as a hosted model through the Meta Model API and Muse Code, without releasing downloadable weights. Meta calls it its smallest and most efficient model to date, built for repetitive agent work such as calling external tools, routing requests, extracting data, and handling coding subtasks. It accepts text, images, audio, and video within a 1-million-token context window (the amount of input it can read in a single call) and generates up to 512,000 output tokens. Meta pairs it with larger models like Muse Wonder, which plan complex tasks while Muse Ember executes high-volume steps.

## Why it matters
Adding a fast execution tier reflects an emerging split in agent systems, where frontier reasoning models delegate routine multimodal subtasks to smaller, specialized worker models.
