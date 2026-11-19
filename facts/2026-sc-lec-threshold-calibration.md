---
title: "Stability-Compensated Threshold Calibration for LLMs"
date: 2026-11-16
date_precision: day
lab: "City University of Hong Kong"
kind: research
about_me: false
short: "Researchers introduce SC-LEC, using stability-compensated certificates to prevent error-rate violations in selective LLM prediction."
sources:
  - url: https://arxiv.org/abs/2611.21384
    title: "Stability-Compensated Threshold Calibration for Selection-Conditioned Risk Control in Large Language Models (arXiv)"
    primary: true
---

## What happened
On November 16, 2026, Zhiyuan Wang, Kaidi Xu, and colleagues from the City University of Hong Kong and collaborating institutions submitted "Stability-Compensated Threshold Calibration for Selection-Conditioned Risk Control in Large Language Models" to arXiv (`arXiv:2611.21384`). Selective prediction allows language models to abstain on queries when uncertain, but heuristic thresholds lack statistical error control. The authors showed that linear expectation constraints suffer from a risk-transfer gap because the loss is non-monotonic with respect to acceptance thresholds, causing empirical threshold selection to violate population error targets. To fix this, they introduced Stability-Compensated Linear Expectation Control (SC-LEC), using the negative linear risk of a full-data reference to absorb selection instability. Combining this with stability and structural certificates yielded finite-sample error bounds on CommonsenseQA, ARC-Challenge, and TriviaQA.

## Why it matters
SC-LEC provides certified statistical error bounds for selective generation, ensuring deployed models reliably meet target error rates when deciding whether to answer.
