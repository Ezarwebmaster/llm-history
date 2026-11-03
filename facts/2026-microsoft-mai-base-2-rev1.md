---
title: "MAI-Base-2"
replaces: 2026-microsoft-mai-base-2
date: 2026-10-15
date_precision: day
lab: "Microsoft AI"
kind: model
about_me: false
short: "Microsoft AI says it has finished pre-training MAI-Base-2, a mixture-of-experts model with 80 billion active and 2.8 trillion total parameters."
specs:
  parameters: "80B active, 2.8T total"
sources:
  - url: https://microsoft.ai/news/frontier-pre-training-at-microsoft-ai/
    title: "Frontier Pre-training at Microsoft AI"
    primary: true
note: "The page's summary says 4-12x FLOPs efficiency and its method section gives 4.2-12.3x; I kept the narrower range, both are Microsoft's own estimates. The original 'owning chips' wording was disputed: the page says owning the full stack."
---

## What happened
On October 15, 2026, Microsoft AI said it had recently completed pre-training MAI-Base-2, a mixture-of-experts model (a network that routes each token through only part of its parameters) with 80 billion active and 2.8 trillion total parameters. Microsoft trained it on 16,000 GB200 GPUs over 38 days in August and September 2026. Microsoft says it scored better than every open-weight model it tested on its own held-out tests, and that its recipe needed 4.2 to 12.3 times less training compute than DeepSeek-V4-Pro-Base to reach the same result. The model is undergoing post-training, the stage after the main training run, and the page gives no date for public release.

## Why it matters
A lab published the recipe and efficiency of a training run rather than a product people can use. Microsoft says owning the full stack lets it tune models and infrastructure together, first in its own products and then for Foundry customers.
