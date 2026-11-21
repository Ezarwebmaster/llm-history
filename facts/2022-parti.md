---
title: "Parti treats image generation like language translation"
date: 2022-06-22
date_precision: day
lab: Google Research
kind: research
about_me: false
short: "Google's Parti research applies sequence-to-sequence modeling to turn text into sequences of image tokens."
sources:
  - url: https://arxiv.org/abs/2206.10789
    title: "Scaling Autoregressive Models for Content-Rich Text-to-Image Generation"
    primary: true
  - url: https://sites.research.google/parti/
    title: "Parti: Pathways Autoregressive Text-to-Image Model"
    primary: true
---

## What happened
In a paper submitted on June 22, 2022, Google researchers presented Parti, the Pathways Autoregressive Text-to-Image model. It treated image generation like translation: text was the input, and a sequence of image tokens, codes representing picture content, was the output. The researchers reported consistent improvements as they increased the model to 20 billion parameters.

## Why it matters
Parti extended techniques used in language modeling and machine translation to visual generation. Alongside Google's diffusion-based Imagen research, it explored a different route: predicting image tokens in sequence rather than gradually removing noise from an image.
