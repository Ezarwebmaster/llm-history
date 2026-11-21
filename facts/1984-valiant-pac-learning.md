---
title: "Valiant defines Probably Approximately Correct learning"
date: 1984-11-01
date_precision: month
lab: "Harvard University"
kind: research
about_me: false
short: "Leslie Valiant publishes A Theory of the Learnable, formalizing Probably Approximately Correct (PAC) learning from random examples."
sources:
  - url: https://dl.acm.org/doi/10.1145/1968.1972
    title: "A Theory of the Learnable (Communications of the ACM)"
    primary: true
---

## What happened
In November 1984, Harvard University computer scientist Leslie G. Valiant published "A Theory of the Learnable" in *Communications of the ACM*. Rather than treating machine learning as ad hoc heuristics, Valiant proposed a formal computational model of learning from examples drawn from an unknown probability distribution. Under his framework—later named Probably Approximately Correct (PAC) learning—a concept class is learnable if an algorithm can find a hypothesis with low error (approximately correct) and high confidence (probably) using polynomial numbers of examples and computation steps.

## Why it matters
Valiant's framework launched computational learning theory by uniting probability, sample efficiency, and computational complexity into one mathematical definition of learnability. It gave later machine learning and neural network research a rigorous way to analyze when systems can generalize from finite training data rather than simply memorizing examples.
