---
title: "omni-moderation adds image classification"
date: 2024-09-26
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI launches a GPT-4o-based moderation model that classifies harmful text and images through the Moderation API."
sources:
  - url: https://openai.com/index/upgrading-the-moderation-api-with-our-new-multimodal-moderation-model/
    title: "Upgrading the Moderation API with our new multimodal moderation model"
    primary: true
---

## What happened
OpenAI introduced `omni-moderation-latest` on September 26, 2024. Built on GPT-4o, it accepted text and images through the Moderation API and was free for developers to use. At launch, image classification covered six categories spanning violence, self-harm and sexual content; the remaining categories were text-only. The model also added two text-only categories for illicit activity and violent illicit activity, and calibrated scores to better reflect the probability of a category match.

## Why it matters
The 2022 endpoint classified text. This launch extended that moderation service to images, including images combined with text, while keeping explicit limits on which categories supported visual input. OpenAI also reported improved classification across languages.
