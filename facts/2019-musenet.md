---
title: "MuseNet applies next-token prediction to music"
date: 2019-04-25
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI introduces MuseNet, a transformer that generates music by predicting successive tokens encoded from MIDI files."
sources:
  - url: https://openai.com/index/musenet/
    title: "MuseNet"
    primary: true
---

## What happened
OpenAI introduced MuseNet, which learned musical patterns by predicting the next token in hundreds of thousands of MIDI files. Like GPT-2, it uses a transformer to predict each step from earlier steps. Composer and instrument tokens guide generation. OpenAI demonstrated compositions up to four minutes long with ten instruments and offered an interactive demonstration.

## Why it matters
MIDI represents musical events rather than recorded sound. MuseNet therefore extended language-model sequence learning to symbolic music; it was not a speech-recognition or voice-conversation launch. Its limitations included imperfect obedience to instrument choices and difficulty with unusual combinations of styles and instruments. The research milestone should remain distinct from later audio products.
