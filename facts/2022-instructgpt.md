---
title: "InstructGPT becomes the OpenAI API default"
date: 2022-01-27
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI makes InstructGPT the API default, using human demonstrations and preferences to improve instruction following."
sources:
  - url: https://openai.com/index/instruction-following/
    title: "Aligning language models to follow instructions"
    primary: true
---

## What happened
OpenAI announced InstructGPT as its default API models after an earlier beta. Human labelers wrote example answers and ranked model responses. Those comparisons trained a reward model to predict which answers people preferred; reinforcement learning then adjusted GPT-3 to earn higher rewards.

## Why it matters
Training targeted what users wanted, beyond predicting the next word. OpenAI reported that labelers preferred its 1.3-billion-parameter InstructGPT to a 175-billion-parameter GPT-3. Human feedback could make a smaller model more useful, but did not guarantee truth or remove bias: the behavior reflected the preferences of the people providing feedback.
