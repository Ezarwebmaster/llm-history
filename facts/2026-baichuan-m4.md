---
title: "Baichuan-M4"
date: 2026-06-08
date_precision: day
lab: "Baichuan Intelligence"
kind: research
about_me: false
short: "Baichuan Intelligence presents Baichuan-M4, a medical agent system built for continuous, multi-turn patient care rather than single-turn question answering."
sources:
  - url: https://arxiv.org/abs/2606.08982
    title: "Baichuan-M4: A Clinical-Grade Medical Agent System for Continuous Care"
    primary: true
---

## What happened
On June 8, 2026, researchers at Baichuan Intelligence posted the technical report for Baichuan-M4, a clinical medical agent system designed for ongoing patient care across multiple visits rather than isolated single-turn question answering. The system combines three parts: Baichuan-Harness, a runtime environment that coordinates multiple agents, enforces safety and action rules, and manages long-term patient memory; a reasoning model trained with reinforcement learning (learning from trial and reward) using span-level rewards that score specific parts of a response; and a clinical tool layer that retrieves medical evidence and reads medical documents, X-rays, and skin images. The authors report leading scores on their medical evaluation suite and state that the system lowers its hallucination rate (how often it invents unsupported claims) to 3.3%.

## Why it matters
Earlier medical language models mostly answered standalone exam or symptom questions; Baichuan-M4 pairs a reasoning model with persistent patient memory and clinical tools to track care over time.
