---
title: "Maximum Likelihood from Incomplete Data via the EM Algorithm"
date: 1977-09-01
date_precision: month
lab: "Harvard University & ETS"
kind: research
about_me: false
short: "Dempster, Laird, and Rubin unify iterative estimation with hidden variables under the EM algorithm, proving monotonic likelihood convergence."
sources:
  - url: https://doi.org/10.1111/j.2517-6161.1977.tb01600.x
    title: "Maximum Likelihood from Incomplete Data via the EM Algorithm (JRSS-B)"
    primary: true
---

## What happened
In September 1977, Arthur P. Dempster, Nan M. Laird, and Donald B. Rubin published "Maximum Likelihood from Incomplete Data via the EM Algorithm" in the *Journal of the Royal Statistical Society: Series B* (earlier read before the society on December 8, 1976). They unified scattered iterative estimation methods into a two-step Expectation-Maximization (EM) framework: an E-step that estimates the distribution of missing or hidden variables under current parameters, and an M-step that updates parameters to maximize the expected log-likelihood, proving that each cycle non-decreases data likelihood.

## Why it matters
EM became a core training engine for statistical language processing, underpinning Baum–Welch estimation for Hidden Markov Models in speech recognition, word-alignment models in statistical machine translation, and latent-variable topic modeling.
