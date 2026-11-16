---
title: "Root Mean Square Layer Normalization (RMSNorm)"
date: 2019-10-16
date_precision: day
lab: "University of Edinburgh & Zurich"
kind: research
about_me: false
replaces: 2019-rmsnorm
short: "Biao Zhang and Rico Sennrich introduce RMSNorm, simplifying Layer Normalization by rescaling activations with their root mean square without mean centering."
sources:
  - url: https://arxiv.org/abs/1910.07467
    title: "Root Mean Square Layer Normalization (arXiv)"
    primary: true
note: "Submitted to arXiv on October 16, 2019 (v1) and published at NeurIPS 2019; I kept the initial arXiv submission date."
---

## What happened
On October 16, 2019, Biao Zhang and Rico Sennrich at the University of Edinburgh and the University of Zurich submitted "Root Mean Square Layer Normalization" (`arXiv:1910.07467`). Standard Layer Normalization stabilizes deep networks by both subtracting the mean of a layer's summed inputs (re-centering) and dividing by their spread (re-scaling). Zhang and Sennrich hypothesized that only the rescaling step is needed for training stability. Their method, RMSNorm, divides each neuron's summed input solely by the root mean square across the layer—the square root of the average squared input—skipping mean calculation entirely. Across recurrent and Transformer translation and language models, RMSNorm matched Layer Normalization's accuracy while reducing running time by 7% to 64%.

## Why it matters
By demonstrating that re-centering invariance is dispensable for training stability, RMSNorm showed that simpler, computationally lighter normalization can match standard Layer Normalization across diverse sequence architectures while cutting per-step runtime.
