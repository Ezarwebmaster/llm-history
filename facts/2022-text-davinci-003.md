---
title: "Text-davinci-003 extends instruction-following completions"
date: 2022-11-01
date_precision: month
lab: OpenAI
kind: model
about_me: false
short: "OpenAI introduces text-davinci-003, an instruction-following text completion model preceding the chat API."
note: "November is supported by Jan Leike's November 28 announcement reproduced in contemporary reporting; the original OpenAI comparison page no longer loads. Training details are attributed to GPT-Fathom's reconstruction."
sources:
  - url: https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/data/oai_docs/deprecations.txt
    title: "OpenAI deprecations: InstructGPT models"
    primary: true
  - url: https://techcrunch.com/2022/12/01/while-anticipation-builds-for-gpt-4-openai-quietly-releases-gpt-3-5/
    title: "Contemporary reporting reproducing Jan Leike's November announcement"
    primary: false
  - url: https://arxiv.org/html/2309.16583v6
    title: "GPT-Fathom: historical model descriptions"
    primary: false
---

## What happened
OpenAI's Jan Leike publicly discussed text-davinci-003 on November 28, 2022. GPT-Fathom later described it as text-davinci-002 further trained with reinforcement learning from human feedback: people compare answers, and their preferences guide improvements.

OpenAI's preserved deprecation table places both text-davinci models under InstructGPT and lists gpt-3.5-turbo-instruct as their replacement. It separately lists the original base GPT models and their replacements, including davinci-002.

## Why it matters
Text-davinci-003 belongs to the period when developers supplied a text prompt to obtain an instruction-following completion, before the March 2023 chat API. Instruction tuning and a conversational API were separate developments: a model could follow a request without receiving the structured conversation interface used by chat models.
