---
title: "Gemini 1.5 Flash-8B"
date: 2024-10-03
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google makes Gemini 1.5 Flash-8B generally available, a smaller and faster variant of 1.5 Flash optimized for high-volume multimodal and chat tasks."
sources:
  - url: https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/
    title: "Gemini 1.5 Flash-8B is now production ready"
    primary: true
  - url: https://ai.google.dev/gemini-api/docs/changelog
    title: "Gemini API Changelog"
    primary: true
---

## What happened
On October 3, 2024, Google announced that Gemini 1.5 Flash-8B became production-ready and generally available via Google AI Studio and the Gemini API as `gemini-1.5-flash-8b-001`. Following an experimental preview in August and an updated checkpoint in September, Google DeepMind released the model as a smaller, faster variant of Gemini 1.5 Flash. Google optimized Flash-8B for high-volume multimodal workloads, chat, audio transcription, and long-context language translation, delivering lower latency on small prompts and double the rate limits of standard 1.5 Flash while nearly matching its benchmark performance.

## Why it matters
Flash-8B reduced serving latency and inference costs for high-throughput developer workloads while preserving multimodal capabilities across text, audio, and visual inputs.
