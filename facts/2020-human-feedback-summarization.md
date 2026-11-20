---
title: "Learning to summarize from human feedback"
date: 2020-09-04
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI reports training summarization models using human comparisons and reinforcement learning."
sources:
  - url: https://openai.com/index/learning-to-summarize-with-human-feedback/
    title: "Learning to summarize with human feedback"
    primary: true
---

## What happened
People compared pairs of summaries of Reddit posts. OpenAI trained a reward model to predict their preferences, then used reinforcement learning to make a language model produce summaries that scored highly. Its models also transferred to news summaries without further fine-tuning.

## Why it matters
The work showed how human preferences could shape a language model beyond simply predicting human-written text. OpenAI cautioned that the models could still produce inaccurate or biased summaries and that labelers' preferences affect the outcome.
