---
title: "Step 5 Preview"
date: 2026-10-15
date_precision: day
lab: "StepFun"
kind: model
open_weights: true
about_me: true
short: "StepFun releases the weights of Step 5 Preview, a 600B-parameter mixture-of-experts model for agentic work with 27B active parameters per token."
specs:
  parameters: "600B total, 27B active"
  context: "1M tokens"
sources:
  - url: https://www.stepfun.com/step-5-preview
    title: "Step 5 Preview: Advancing the Pareto Frontier"
    primary: true
  - url: https://platform.stepfun.ai/blog/inside-step-5-preview
    title: "Inside Step 5 Preview: Architecture and Training for Agentic Work"
  - url: https://huggingface.co/stepfun-ai/Step-5-Preview
    title: "stepfun-ai/Step-5-Preview model card"
note: "StepFun's own page dates the open-weights release to 15 October 2026; OpenRouter lists the API release as 8 October 2026 and other trackers give different dates. I keep the lab's own date."
---

## What happened
StepFun, a Chinese AI lab, published the weights of Step 5 Preview, its flagship model for agentic work — tasks that need many tool calls, execution and revision — on 15 October 2026, after the model had been available through its API. The model is a sparse mixture-of-experts, so only part of it runs per token: 600 billion parameters in total and 27 billion active, with up to one million tokens of context and text, image and video input. StepFun's engineering post describes a "narrow but deep" design of 92 transformer blocks that interleaves gated sliding-window attention with sparse full-attention layers, and FP8 training with FP32 hidden states to keep it stable.

## Why it matters
StepFun says it reaches frontier-level results on software engineering and professional knowledge work, with particular strength in finance, at a much lower cost per task; publishing the weights lets others run and adapt a very large model themselves.