---
title: "Kolibri-1.1"
date: 2026-11-23
date_precision: day
lab: "Aleph Alpha"
kind: model
open_weights: true
about_me: false
replaces: 2026-aleph-alpha-kolibri-1-1
short: "Aleph Alpha releases Kolibri-1.1, an open-weight German-English reasoning model that can process up to about one million tokens."
specs:
  parameters: "75.1B total, 3.44B active"
  context: "262K native, up to 1M tokens"
sources:
  - url: https://huggingface.co/Aleph-Alpha/Kolibri-1.1
    title: "Kolibri 1.1 model card"
    primary: true
  - url: https://aleph-alpha.com/en/blog/kolibri-1-1/
    title: "Kolibri 1.1 release and measurements"
    primary: true
---

## What happened
On November 23, 2026, Aleph Alpha released Kolibri-1.1 on Hugging Face under Apache 2.0, seven weeks after Kolibri 1.0. It supports German and English and uses 3.44 billion of its 75.1 billion parameters for each token, or piece of text. Its new attention method focuses detailed comparisons on selected earlier tokens. It supports reasoning and tool calls. The model card lists a native limit of 262,144 tokens and an extended limit of 1,048,576.

## Why it matters
Aleph Alpha reports better scores on its German math and knowledge tests. In its million-token speed test, total output per second per GPU was 14 times as high as with Kolibri 1.0. An individual request generated text 4.4 times as fast in that test, with the remaining throughput gain coming from serving more requests at once.
