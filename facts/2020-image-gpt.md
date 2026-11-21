---
title: "Image GPT transfers next-token learning to pixels"
date: 2020-06-17
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI shows that a GPT-2-style model trained to predict pixels can generate images and learn features useful for classification."
sources:
  - url: https://openai.com/index/image-gpt/
    title: "Image GPT"
    primary: true
---

## What happened
OpenAI presented Image GPT, or iGPT, using the same transformer architecture as GPT-2. It turns an image into a sequence of pixels and predicts what comes next from earlier pixels: the image equivalent of predicting the next text token. Training without category labels produced image completions and representations useful for recognizing objects.

## Why it matters
The experiment tested whether language-model training could learn structure in another domain without a specialized vision architecture. OpenAI noted its substantial computing cost. This was a research result about pixel prediction and learned visual features, rather than the launch of a later consumer image-generation product.
