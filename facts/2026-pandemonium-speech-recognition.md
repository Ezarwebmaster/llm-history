---
title: "Pandemonium links speakers during meeting transcription"
date: 2026-11-07
date_precision: day
lab: "Polok and collaborators"
kind: research
about_me: false
short: "Pandemonium lets a speech recognizer track multiple speakers together while transcribing a recording."
sources:
  - url: https://arxiv.org/abs/2611.10659v1
    title: "Pandemonium: Longform Target-Speaker Speech Recognition with Cross-Speaker Interactions"
    primary: true
---

## What happened
Alexander Polok and collaborators published a method for transcribing conversations with several speakers. The method starts from labels marking when each person speaks. It adapts the long-recording Parakeet speech recognizer and lets the model share information across speakers while working out their words. The team also automatically labeled 5,400 hours of naturally recorded multi-speaker audio for training.

## Why it matters
People interrupt and talk over one another in meetings. The paper tested whether modeling those speakers together helps recover who said what, and reported lower error rates on several meeting benchmarks.
