---
title: "Text-davinci-002 adds insertion to GPT-3 text completion"
date: 2022-03-15
date_precision: day
lab: OpenAI
kind: model
about_me: false
short: "OpenAI releases text-davinci-002 with a beta ability to insert text between existing passages."
sources:
  - url: https://openai.com/index/gpt-3-edit-insert/
    title: "New GPT-3 capabilities: Edit & insert"
    primary: true
  - url: https://raw.githubusercontent.com/openai/openai-cookbook/main/examples/data/oai_docs/models.txt
    title: "OpenAI model documentation preserved in the Cookbook"
    primary: true
  - url: https://arxiv.org/html/2309.16583v6
    title: "GPT-Fathom: historical model descriptions"
    primary: false
---

## What happened
OpenAI made insertion available in its Completions API and Playground with text-davinci-002 and code-davinci-002. Unlike ordinary continuation, insertion used text before and after the missing passage. The separately announced Edits endpoint changed text through an instruction; it was not the same feature.

GPT-Fathom's later reconstruction, citing OpenAI's historical model index, describes text-davinci-002 as code-davinci-002 adapted with supervised training on human demonstrations and highly rated model answers.

## Why it matters
This was an instruction-tuned text completion model before the chat API. Its name should not be shortened to davinci-002: OpenAI documents that later model as a replacement base model without instruction-following training. The similar names identify different models and different training roles.
