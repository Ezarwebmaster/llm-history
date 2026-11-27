---
title: "Gemini Omni Flash"
date: 2026-05-19
date_precision: day
lab: Google DeepMind
kind: model
about_me: false
short: "Google DeepMind launches Gemini Omni Flash, a multimodal model that generates and conversationally edits video with audio from text and media inputs."
note: "Google's launch post metadata gives 2026-05-19 (Google I/O 2026), while the DeepMind model card states 'Initially Published: May 2026' and displays its August 27, 2026 revision date for 1.1 Flash; kept 2026-05-19 for the initial launch."
sources:
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/
    title: "Introducing Gemini Omni"
    primary: true
  - url: https://deepmind.google/models/model-cards/gemini-omni-flash/
    title: "Gemini Omni Flash - Model Card"
    primary: true
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/
    title: "Start building with Nano Banana 2 Lite and Gemini Omni Flash"
    primary: false
---

## What happened
On May 19, 2026, at Google I/O, Google DeepMind launched Gemini Omni Flash as the first model in its Gemini Omni series, rolling it out in the Gemini app, Google Flow, and YouTube Shorts. Built on a multimodal transformer architecture trained with JAX and ML Pathways on Google TPUs, the model accepts text, images, audio, and video inputs to generate high-resolution video with synchronized audio. Users can refine a clip across multi-turn natural-language conversations—such as changing lighting, camera angles, styles, or objects—while preserving scene continuity. All outputs embed imperceptible SynthID digital watermarks, and Google restricted speech-changing video edits at launch. On June 30, 2026, Google opened a public developer preview in Google AI Studio and the Gemini API for clips up to 10 seconds.

## Why it matters
Gemini Omni Flash connected multimodal language reasoning with iterative video generation, letting users revise moving scenes through follow-up prompts instead of regenerating from scratch.
