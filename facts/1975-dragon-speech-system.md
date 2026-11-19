---
title: "The DRAGON Speech Understanding System"
date: 1975-02-01
date_precision: month
lab: "Carnegie Mellon & IBM"
kind: research
about_me: false
short: "James K. Baker describes DRAGON, a continuous speech recognition system that models language and acoustics as probabilistic Markov processes."
sources:
  - url: https://doi.org/10.1109/TASSP.1975.1162650
    title: "The DRAGON system—An overview (IEEE TASSP)"
    primary: true
---

## What happened
In February 1975, *IEEE Transactions on Acoustics, Speech, and Signal Processing* published James K. Baker's overview of the DRAGON continuous speech understanding system, developed during his doctoral research at Carnegie-Mellon University and published while he was affiliated with IBM. Rather than relying on hand-crafted heuristic rules, DRAGON represented acoustic, phonetic, lexical, syntactic, and semantic constraints within a single statistical framework: a probabilistic function of a Markov process, an early form of Hidden Markov Models in which hidden linguistic states generate observable acoustic measurements. Using dynamic programming, the system searched for the globally most probable word sequence across the utterance in computation proportional to its length.

## Why it matters
DRAGON demonstrated that unified probabilistic modeling could decode continuous speech even when individual knowledge sources were noisy, helping establish statistical Hidden Markov Models as the foundation of automatic speech recognition for decades.
