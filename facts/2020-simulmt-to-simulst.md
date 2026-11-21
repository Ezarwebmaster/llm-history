---
title: "SimulMT to SimulST"
date: 2020-12-01
date_precision: month
lab: "Ma, Pino and Koehn"
kind: research
about_me: false
short: "Researchers adapt simultaneous text translation methods to generate translated text from speech in progress."
sources:
  - url: https://aclanthology.org/2020.aacl-main.58/
    title: "SimulMT to SimulST: Adapting Simultaneous Text Translation to End-to-End Simultaneous Speech Translation"
    primary: true
---

## What happened
Xutai Ma, Juan Pino, and Philipp Koehn presented a way to adapt streaming text translation methods to spoken input. Their system decides when it has heard enough audio to consider producing the next part of the translation. The researchers compared fixed and flexible approaches and proposed a measure of delay that includes the time spent computing the output.

## Why it matters
Waiting for more speech can give a translation system context it needs, but listeners also need the result promptly. The paper treats that trade-off as something system designers can measure and compare.
