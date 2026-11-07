---
title: "Writer Palmyra X6"
date: 2026-08-17
date_precision: day
lab: "Writer"
kind: model
open_weights: false
about_me: false
short: "Writer introduces Palmyra X6, an enterprise agentic model fine-tuned on synthetic tool-use trajectories using Anchored SFT and a Muon-Adam hybrid optimizer."
sources:
  - url: https://arxiv.org/abs/2608.16620
    title: "Palmyra x6 Technical Report: An Agentic, Tool-Use Model Post-Trained via Anchored Supervised Fine-Tuning"
    primary: true
---

## What happened
On August 17, 2026, enterprise AI company Writer released the technical report for Palmyra X6 (Peng Du et al.). Built to power multi-step agentic workflows and tool-calling in enterprise environments, Palmyra X6 post-trains a Mixture-of-Experts base architecture using Anchored Supervised Fine-Tuning (ASFT). Rather than relying on massive fine-tuning datasets, the authors trained across just 626 verified synthetic tool-use trajectories for a single epoch with a KL anchor to the frozen base model, using a hybrid Muon and Adam optimizer. Writer reported that Palmyra X6 reached 0.785 on BFCL Core (Berkeley Function-Calling Leaderboard), leading its evaluation cohort across six tool-use benchmarks.

## Why it matters
As enterprise AI shifts from conversational interfaces toward autonomous multi-step agents, Palmyra X6 demonstrates that targeted, mathematically constrained fine-tuning on small sets of verified trajectories can teach complex tool usage without catastrophic forgetting.
