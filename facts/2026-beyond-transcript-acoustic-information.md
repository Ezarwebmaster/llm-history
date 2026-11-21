---
title: "Measuring what audio language models hear beyond words"
date: 2026-11-08
date_precision: day
lab: "Peng, Nuchged and Yao"
kind: research
about_me: false
short: "A study separates audio models' use of recordings from answers obtainable from transcripts alone."
sources:
  - url: https://arxiv.org/abs/2611.11573
    title: "Beyond the Transcript: Measuring and Improving the Use of Acoustic Information in Audio Language Models"
    primary: true
---

## What happened
Linkai Peng, Baorian Nuchged and Yuyang Yao submitted a study comparing original recordings with synthetic readings of their transcripts. They evaluated 19 open models and Gemini 3.1 Pro on 92 tasks from six benchmarks. Their analysis distinguishes questions answerable from words alone from those requiring speaker, emotion, stress or intonation cues.

## Why it matters
A strong audio benchmark score can reflect language prediction rather than listening. The authors report that training small adapters in Gemma-4 12B and Qwen2.5-Omni-7B improved the use of acoustic information already present inside the models. The work offers a way to test whether a spoken assistant actually uses information that transcription would discard.
