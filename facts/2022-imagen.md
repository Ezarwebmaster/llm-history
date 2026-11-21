---
title: "Imagen uses a text-only language model to guide image generation"
date: 2022-05-23
date_precision: day
lab: Google Research
kind: research
about_me: false
short: "Google Research presents Imagen, which uses the T5 language model to guide the creation of images from text."
sources:
  - url: https://arxiv.org/abs/2205.11487
    title: "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding"
    primary: true
  - url: https://imagen.research.google/
    title: "Imagen research project"
    primary: true
---

## What happened
In a paper submitted on May 23, 2022, Google Research presented Imagen. It used T5, a language model trained on text alone, to represent the prompt. An image generator then turned that representation into a picture by gradually removing noise.

## Why it matters
The researchers reported that increasing the size of the language model improved image quality and how closely pictures matched their prompts more than increasing the size of the image generator. The experiments gave a concrete example of how advances in language modeling could improve visual generation.
