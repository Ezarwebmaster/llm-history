---
title: "codex-mini-latest becomes the Codex CLI default"
date: 2025-05-16
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases codex-mini-latest, an o4-mini variant tuned for fast code questions and edits in Codex CLI."
sources:
  - url: https://developers.openai.com/api/docs/models/codex-mini-latest
    title: "codex-mini-latest model"
    primary: true
  - url: https://openai.com/index/introducing-codex/
    title: "Introducing Codex — Updates to Codex CLI"
    primary: false
---

## What happened
OpenAI released a version of o4-mini specifically for Codex CLI, its open-source terminal coding agent. It became the CLI's default model and was available through the Responses API as codex-mini-latest. OpenAI described its focus as low-latency code questions and editing, while preserving instruction following and coding style. The company said it would regularly update the underlying model snapshot.

## Why it matters
This model served interactive local workflows: the CLI supplied the terminal tools around a model tuned for quick coding exchanges. Its o4-mini lineage distinguishes it from the o3-based codex-1 powering the cloud agent announced that day.
