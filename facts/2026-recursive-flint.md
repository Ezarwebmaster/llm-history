---
title: "Recursive Flint"
date: 2026-10-18
date_precision: day
lab: "Recursive"
kind: model
open_weights: true
short: "Recursive releases Flint, a 39.8B-parameter open-weight coding model small enough to run on a laptop."
specs:
  parameters: "39.8B total, 2.5B active"
  context: "262,144 tokens"
sources:
  - url: https://recursive.com/updates/introducing-recursive-flint
    title: "Introducing Flint"
    primary: true
  - url: https://huggingface.co/RecursiveSI/flint
    title: "RecursiveSI/flint model card"
    primary: true
  - url: https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/
    title: "Recursive launches Flint, a laptop coding model it says was largely built by AI"
note: "Recursive's announcement page is dated 18 October 2026; TechCrunch reported the release on 21 October 2026, the date of the first commit in the Hugging Face repository. I keep the lab's own page date."
---

## What happened
Recursive, an AI startup, introduced Flint, a mixture-of-experts model — one that uses only a small slice of its parameters per token — with 39.8 billion parameters and about 2.5 billion active. The weights are on Hugging Face under the Apache 2.0 license, which allows free use and modification. Recursive says its automated research system, the Eureka Machine, helped with nearly every part of building the model, letting a small team build it from scratch in under four months. In its release evaluations Flint scores 54.9% on Terminal-Bench 2.1, 89.7% on SWE-bench Pro v2 and 74.2% on SWE-bench Verified, and runs at over 125 tokens per second on a MacBook Pro.

## Why it matters
A coding model small enough for a laptop lets developers keep their code on their own machine and work offline, and Flint is an early public test of the contested idea that AI can help build the next generation of AI.
