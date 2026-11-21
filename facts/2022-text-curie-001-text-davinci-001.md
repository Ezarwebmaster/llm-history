---
title: "API listing records text-curie-001 and text-davinci-001"
date: 2022-03-02
date_precision: day
lab: OpenAI
kind: product
about_me: false
short: "A posted API engine listing records text-curie-001 and text-davinci-001 alongside the original GPT-3 base models."
sources:
  - url: https://github.com/openai/following-instructions-human-feedback/blob/main/model-card.md
    title: "OpenAI InstructGPT model card"
    primary: true
  - url: https://community.openai.com/t/retrieve-engine-endpoint-broken/15730
    title: "March 2, 2022 API engine listing"
    primary: false
  - url: https://proceedings.neurips.cc/paper_files/paper/2022/file/8bb0d291acd4acf06ef112099c16f326-Supplemental-Conference.pdf
    title: "Contemporary research distinguishes original GPT-3 and Instruct GPT-3"
    primary: false
  - url: https://developers.openai.com/api/docs/deprecations
    title: "OpenAI model shutdown and replacement table"
    primary: false
note: "This dates a surviving API listing, not either model's launch. Exact first-availability dates remain unverified; the family-level January announcement does not establish individual model-ID launch dates."
---

## What happened
A developer posted an engine inventory containing `text-curie-001` and `text-davinci-001` on March 2, 2022. Contemporary research classifies both as Instruct GPT-3, separately from the original `curie` and `davinci` models. OpenAI's InstructGPT card describes instruction training from human demonstrations and feedback, while warning that deployed API versions used a different procedure from the paper.

## Why it matters
These IDs identify instruction-oriented text completion models. They should not be collapsed into their base-model names or the later `text-davinci-002` and `text-davinci-003` variants. OpenAI lists January 4, 2024 as both models' shutdown date and recommends `gpt-3.5-turbo-instruct`; the original Curie and Davinci base models instead map to `davinci-002`.
