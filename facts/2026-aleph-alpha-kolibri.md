---
title: "Kolibri"
date: 2026-10-03
date_precision: day
lab: "Aleph Alpha"
kind: model
open_weights: true
short: "Aleph Alpha releases Kolibri, an open-weight English-German model that uses a mixture of experts, with 78B total parameters and 3B active."
specs:
  parameters: "78B total, 3B active"
  context: "1M tokens"
sources:
  - url: https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/
    title: "Kolibri Has Landed: A Sovereign Open-Weight Model"
    primary: true
note: "Dated from Aleph Alpha's blog post of 3 October 2026, the Day of German Reunification. Weights under Apache 2.0 are on Hugging Face, as the post says."
---

## What happened
On 3 October 2026, Aleph Alpha released Kolibri, a mixture-of-experts Transformer (a network that sends each token to a few of its many expert sub-networks) for English and German. It has 78 billion total parameters, of which 3 billion are active, and supports context lengths up to 1 million tokens. The company says the full weights are on Hugging Face under the Apache 2.0 licence. Aleph Alpha describes Kolibri as a sovereign model for regulated work such as public administration, industry and aerospace.

## Why it matters
Kolibri is an open-weight release from a German lab, which the company argues lets customers run the model on their own premises without sending internal data to third-party services.
