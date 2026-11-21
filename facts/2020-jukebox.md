---
title: "Jukebox generates music as raw audio"
date: 2020-04-30
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI introduces Jukebox, a model that generates raw music audio including rudimentary singing."
sources:
  - url: https://openai.com/index/jukebox/
    title: "Jukebox"
    primary: true
---

## What happened
OpenAI released Jukebox's model weights and code. It compressed raw audio into sequences of codes, then trained transformer models to predict codes in sequence and decode them back into audio. Artist and genre labels could steer the style; a lyrics-conditioned model could also use words to guide singing.

## Why it matters
Unlike MuseNet's symbolic MIDI note events, Jukebox generated the sound itself, including voices and timbre. OpenAI noted that its samples lacked familiar large-scale structures such as repeated choruses, and that generating them was slow.
