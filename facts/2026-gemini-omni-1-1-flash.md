---
title: "Gemini Omni 1.1 Flash"
date: 2026-08-27
date_precision: day
lab: Google DeepMind
kind: model
about_me: false
short: "Google DeepMind releases Gemini Omni 1.1 Flash to general availability, adding 40-second scene extension, keyframe interpolation, and 360p-to-4K output."
specs:
  context: "131,072 input tokens"
sources:
  - url: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
    title: "Gemini Omni 1.1 Flash lets you build with more control"
    primary: true
  - url: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/omni-1-1-flash
    title: "Gemini Omni 1.1 Flash Preview · Google Cloud Documentation"
    primary: true
  - url: https://aistudio.google.com/docs/changelog
    title: "Gemini API Changelog"
    primary: false
  - url: https://deepmind.google/models/model-cards/gemini-omni-flash/
    title: "Gemini Omni Flash - Model Card"
    primary: false
---

## What happened
On August 27, 2026, Google DeepMind released Gemini Omni 1.1 Flash (`gemini-omni-1.1-flash`) to general availability via the Gemini API in Google AI Studio and in preview on Google Cloud's Gemini Enterprise Agent Platform, updating the Gemini Omni Flash model card the same day. Built on Google's native multimodal transformer architecture, it generates and conversationally edits video with synchronized speech, music, and sound effects through the Interactions API. Version 1.1 added scene extension—analyzing up to 10 seconds of prior clip context to extend videos in 10-second increments up to 40 seconds—first-and-last-frame interpolation between two keyframes, up to 3-second video references, and selectable resolutions from 360p drafts and default 720p to upscaled 1080p and 4K. Google superseded it with Gemini Omni 1.2 Flash on November 5, 2026.

## Why it matters
Multi-shot scene extension, start-and-end keyframing, and draft-to-4K controls moved conversational video generation from one-off clips toward structured studio and developer workflows.
