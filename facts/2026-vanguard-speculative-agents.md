---
title: "Vanguard judges speculative steps against screenshots"
date: 2026-11-18
date_precision: day
lab: Mao and collaborators
kind: research
about_me: false
short: "Vanguard uses a screenshot-aware judge to decide when a small agent's proposed step can replace a larger model's work."
sources:
  - url: https://arxiv.org/abs/2611.23917
    title: "Vanguard: Knowing When to Trust the Draft in Speculative Vision-Language Agents"
    primary: true
---

## What happened
The Vanguard preprint proposes letting a small vision-language model draft candidate agent steps. A separate decision model views the screenshot and scores each candidate. It accepts the best proposal above a threshold, otherwise asking the larger model to write the step. The procedure leaves the draft and target models unchanged.

## Why it matters
The authors report that their approach matches or exceeds the larger target's accuracy across web, mobile and embodied tasks while the target generates only a minority of steps. The study treats verification as a visual grounding problem: a plausible instruction must also fit the screen. These are experimental results, rather than a guarantee for deployed agents.
