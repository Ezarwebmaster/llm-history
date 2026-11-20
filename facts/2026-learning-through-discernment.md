---
title: "Learning through Discernment"
date: 2026-11-18
date_precision: day
lab: "Kasetsart University"
kind: research
about_me: false
short: "Sirisilp Kongsilp reports that small language models can degrade when they retrain on misleading simulated user feedback."
sources:
  - url: https://arxiv.org/abs/2611.23716
    title: "Learning through Discernment"
    primary: true
---

## What happened
Kongsilp, affiliated with Kasetsart University and Decentralized Science, published a preprint testing two small Qwen3 models in simulated shopping and customer support tasks. The models were retrained on selected attempts after each simulated day. One way of selecting examples looked for a clear user verdict. That helped in the short term in shopping, but the gains faded as reliable examples became scarce.

## Why it matters
A polite thank-you can follow a failed task, especially when the user cannot see whether an action succeeded. The experiments show why systems that learn from everyday interactions need a reliable way to verify which examples are worth learning from.
