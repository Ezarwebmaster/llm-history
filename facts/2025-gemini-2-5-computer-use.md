---
title: "Gemini 2.5 Computer Use"
date: 2025-10-07
date_precision: day
lab: Google DeepMind
kind: model
open_weights: false
about_me: false
short: "Google DeepMind releases Gemini 2.5 Computer Use in public preview, a Gemini 2.5 Pro-based model that operates web and mobile interfaces via screenshots."
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/
    title: "Introducing the Gemini 2.5 Computer Use model"
    primary: true
  - url: https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Computer-Use-Model-Card.pdf
    title: "Gemini 2.5 Computer Use - Model Card"
    primary: true
  - url: https://storage.googleapis.com/deepmind-media/gemini/computer_use_eval_additional_info.pdf
    title: "Google DeepMind – Gemini 2.5 Computer Use Additional Information"
    primary: true
---

## What happened
On October 7, 2025, Google DeepMind released the Gemini 2.5 Computer Use model in public preview via the Gemini API in Google AI Studio and Vertex AI. Built on Gemini 2.5 Pro (`06-2025`) with post-training for user-interface control and a January 2025 knowledge cutoff, it exposes a `computer_use` tool that runs in a loop: taking a user request, an environment screenshot, and recent action history, then outputting a function call for the next action (clicking, typing, scrolling, or dragging). An out-of-model per-step safety service screens proposed actions and requires user confirmation before high-stakes steps like purchases. Optimized for web browsers rather than desktop operating systems, it scored 69.0% on Online-Mind2Web (65.7% on Browserbase), 88.9% on WebVoyager (79.9% on Browserbase), and 69.7% on AndroidWorld.

## Why it matters
Exposing visual browser and mobile interface control as an API tool loop brought the computer-use capabilities behind Project Mariner and Search AI Mode to external developers.
