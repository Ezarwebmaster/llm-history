---
title: "Claude Opus 4.6"
date: 2026-02-05
date_precision: day
lab: Anthropic
kind: model
open_weights: false
about_me: false
short: "Anthropic releases Claude Opus 4.6, introducing a 1-million-token beta context window, adaptive thinking, and context compaction for long-running agents."
specs:
  context: "1M tokens (beta)"
sources:
  - url: https://www.anthropic.com/news/claude-opus-4-6
    title: "Introducing Claude Opus 4.6"
    primary: true
---

## What happened
On February 5, 2026, Anthropic released Claude Opus 4.6 across claude.ai, the Claude API, and partner cloud platforms. The release introduced a 1-million-token context window in beta—which Anthropic called a first for an Opus-tier model—alongside adaptive thinking (letting the model decide how much step-by-step reasoning to use across four effort levels: low, medium, high, and max) and context compaction (automatically summarizing older conversation history as prompts approach capacity). Anthropic also previewed agent teams in Claude Code, letting parallel sub-agents work across separate context windows, and reported 65.4% on Terminal-Bench 2.0 for command-line coding tasks.

## Why it matters
Combining a 1-million-token context window with automatic compaction and adjustable reasoning effort made flagship agents more reliable across large codebases and multi-step professional workflows.
