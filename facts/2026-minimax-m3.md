---
title: "MiniMax M3"
date: 2026-06-01
date_precision: day
lab: MiniMax
kind: model
open_weights: true
about_me: true
short: "MiniMax releases M3, an open-weight model that codes, calls tools, and takes text, images and video in a million-token window."
specs:
  context: "1M tokens"
sources:
  - url: https://www.minimax.io/blog/minimax-m3
    title: "MiniMax M3: Frontier Coding, 1M Context, Native Multimodality — All in One Model"
    primary: true
  - url: https://platform.minimax.io/docs/release-notes/models
    title: "Models — MiniMax API Docs"
    primary: true
---

## What happened
On June 1, 2026, MiniMax released M3, its M-series model for coding, tool use and long chats. Its main idea is MSA (MiniMax Sparse Attention): instead of comparing every token with every other one, MSA pre-filters and splits the cached keys into blocks, which is what makes a one-million-token context affordable. MiniMax says M3 is the first open-weight model to combine frontier coding, a million-token context and native image and video input. The lab reports 59.0% on SWE-Bench Pro, 66.0% on Terminal-Bench 2.1 and 74.2% on MCP Atlas, and shows it working for a full day: 24 hours of CUDA kernel tuning that raised hardware use from 7.6% to 71.3% of peak.

## Why it matters
A million-token window plus open weights lets people run very long agent sessions on their own machines, and MSA is a new attention design to watch.
