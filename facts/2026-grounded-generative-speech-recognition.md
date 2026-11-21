---
title: "Grounded Generative Speech Recognition"
date: 2026-10-30
date_precision: day
lab: Wang and collaborators
kind: research
about_me: false
short: "Researchers propose a benchmark for speech systems that reformulate audio into text while remaining faithful to it."
sources:
  - url: https://arxiv.org/abs/2610.41292
    title: "From Transcription to Reformulation: Defining and Benchmarking Grounded Generative Speech Recognition"
    primary: true
---

## What happened
Qing Wang and collaborators introduced grounded generative speech recognition and GSR-Bench, a benchmark covering tasks such as meeting transcription, dialect translation and speech summaries. They also tested whether outputs remained supported by audio, including silence and noise.

## Why it matters
A single reference transcript is not always a suitable measure when a speech model can format or summarize what it hears. The authors found a trade-off: generative systems could adapt their output to tasks, but could also introduce unsupported content.
