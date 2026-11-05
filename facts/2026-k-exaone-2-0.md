---
title: "K-EXAONE 2.0"
date: 2026-07-31
date_precision: day
lab: "LG AI Research"
kind: model
open_weights: true
about_me: false
short: "LG AI Research publishes K-EXAONE 2.0, a 750-billion-parameter multilingual model from Korea, with its weights under the Apache 2.0 licence."
specs:
  parameters: "750B total, ~37B active"
  context: "256K tokens"
sources:
  - url: https://github.com/LG-AI-EXAONE/K-EXAONE-2.0
    title: "LG-AI-EXAONE/K-EXAONE-2.0"
    primary: true
  - url: https://arxiv.org/abs/2608.04505
    title: "K-EXAONE 2.0 Technical Report"
    primary: true
---

## What happened
LG AI Research released K-EXAONE 2.0 on July 31, 2026 under the Apache 2.0 licence, so anyone may download, run and change the weights. It is a mixture-of-experts model: of its 750 billion parameters only about 37 billion are used for each word it reads or writes, which keeps the cost of running it far below what its size suggests. LG says it covers ten languages, up from six in the previous version, and inputs of up to 256,000 tokens. LG's own repository reports a score of 83.5 on MMLU-Pro, a broad knowledge test, and 68.2% on SWE-bench Verified, a set of real software bugs; a technical report followed on August 5, 2026.

## Why it matters
Open models of this size have come mostly from Chinese and American labs; this one widens the map.
