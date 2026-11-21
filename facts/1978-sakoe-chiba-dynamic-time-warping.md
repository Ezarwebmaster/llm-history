---
title: "Sakoe and Chiba formalize dynamic time warping for spoken word recognition"
date: 1978-02-01
date_precision: month
lab: "NEC Central Research Laboratories"
kind: research
about_me: false
short: "Hiroaki Sakoe and Seibi Chiba optimize dynamic programming time-alignment algorithms for spoken word recognition, introducing the Sakoe-Chiba band."
sources:
  - url: https://doi.org/10.1109/TASSP.1978.1163055
    title: "Dynamic Programming Algorithm Optimization for Spoken Word Recognition (IEEE TASSP)"
    primary: true
  - url: https://en.wikipedia.org/wiki/Dynamic_time_warping
    title: "Dynamic time warping - Wikipedia"
---

## What happened
In February 1978, Hiroaki Sakoe and Seibi Chiba of NEC Central Research Laboratories published "Dynamic Programming Algorithm Optimization for Spoken Word Recognition" in *IEEE Transactions on Acoustics, Speech, and Signal Processing*. Because speakers pronounce the same word at varying speeds across utterances, comparing speech patterns frame by frame fails when timing fluctuates. Sakoe and Chiba analyzed symmetric and asymmetric dynamic programming time-normalization algorithms—later known as Dynamic Time Warping (DTW)—and introduced slope-weighting constraints and an adjustment-window restriction (the Sakoe-Chiba band) that prevented extreme time distortion while finding the minimum-distance alignment path between spoken and reference templates.

## Why it matters
Dynamic time warping became the standard method for template-based isolated and connected word recognition throughout the late 1970s and 1980s, directly bridging early heuristic pattern matchers and the statistical Hidden Markov Models that later dominated speech recognition.
