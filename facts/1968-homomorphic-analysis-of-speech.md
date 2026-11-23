---
title: "Homomorphic Analysis of Speech"
date: 1968-06-01
date_precision: month
lab: "MIT"
kind: research
about_me: false
short: "Alan Oppenheim and Ronald Schafer apply homomorphic deconvolution and the complex cepstrum to separate vocal-tract resonances from speech excitation."
sources:
  - url: https://doi.org/10.1109/TAU.1968.1161965
    title: "Homomorphic Analysis of Speech (IEEE Transactions on Audio and Electroacoustics)"
    primary: true
---

## What happened
In the June 1968 issue of *IEEE Transactions on Audio and Electroacoustics* (Vol. AU-16, No. 2, pp. 221–226), MIT researchers Alan V. Oppenheim and Ronald W. Schafer introduced homomorphic deconvolution for speech analysis. In standard acoustic models, a speech waveform combines the vocal-cord excitation signal (the pitch pulse train and glottal pulse shape) with the impulse response of the vocal tract through convolution—a mathematical blending operation that ordinary linear filters cannot easily undo. Oppenheim and Schafer transformed the convolved speech signal into the complex cepstrum (a spectrum of a logarithmic spectrum where convolved components become additive), allowing a simple linear filter to separate the rapidly varying pitch structure from the slowly varying vocal-tract envelope.

## Why it matters
Separating vocal-tract shape from pitch in the cepstral domain laid the mathematical foundation for homomorphic vocoders and for the cepstral feature representations that anchored speech recognition for decades.
