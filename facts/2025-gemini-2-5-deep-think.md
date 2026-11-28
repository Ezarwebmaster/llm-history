---
title: "Gemini 2.5 Deep Think"
date: 2025-08-01
date_precision: day
lab: Google
kind: model
open_weights: false
about_me: false
short: "Google rolls out Gemini 2.5 Deep Think to Google AI Ultra subscribers, an enhanced reasoning mode that explores multiple hypotheses in parallel."
specs:
  context: "1M input, 192K output"
note: "Previewed at Google I/O on May 20, 2025 as an experimental 2.5 Pro mode and rolled out in the Gemini app on August 1, 2025; kept the August 1 launch and Model Card publication date."
sources:
  - url: https://blog.google/products-and-platforms/products/gemini/gemini-2-5-deep-think/
    title: "Try Deep Think in the Gemini app"
    primary: true
  - url: https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Deep-Think-Model-Card.pdf
    title: "Gemini 2.5 Deep Think - Model Card"
    primary: true
  - url: https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025/
    title: "Gemini 2.5: Our most intelligent models are getting even better"
    primary: true
  - url: https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/
    title: "Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad"
    primary: true
---

## What happened
Previewed at Google I/O on May 20, 2025 as an experimental mode for Gemini 2.5 Pro, Gemini 2.5 Deep Think launched in the Gemini app for Google AI Ultra subscribers on August 1, 2025. Built on Gemini 2.5's sparse mixture-of-experts architecture (activating only a subset of parameters per token) with a 1M input and 192K output window, it uses parallel thinking and reinforcement learning to test and combine multiple hypotheses simultaneously. The app release uses code execution and Search and scored 34.8% on Humanity's Last Exam, 99.2% on AIME 2025, 87.6% on LiveCodeBench v6, and 60.7% (Bronze-level) on IMO 2025 without tools; Google also shared the IMO gold-medal variant (35 of 42 points, July 21) with select mathematicians.

## Why it matters
Spending extra inference-time compute on parallel hypothesis search turned competition-grade reasoning into a toggleable product mode.
