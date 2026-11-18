---
title: "NETtalk learns English letter-to-sound rules"
date: 1987-01-01
date_precision: year
lab: "Johns Hopkins & Princeton"
kind: research
about_me: false
short: "Sejnowski and Rosenberg publish NETtalk, a neural network that learns to turn English spelling into phoneme sequences."
sources:
  - url: https://papers.cnl.salk.edu/PDFs/Parallel%20Networks%20That%20Learn%20to%20Pronounce%20English%20Text%201987-3351.pdf
    title: "Parallel Networks that Learn to Pronounce English Text"
    primary: true
  - url: https://papers.cnl.salk.edu/index.php?SearchText=Rosenberg%2C+C.+R.
    title: "CNL Publication Search: Rosenberg, C. R."
    primary: false
---

## What happened
In 1987, Terrence Sejnowski and Charles Rosenberg published NETtalk, a feedforward neural network trained by backpropagation to map written English to phonemes, the basic units of speech. A moving window of letters fed 203 input units, 80 hidden units and 26 output units. Instead of relying on a hand-built table of pronunciation exceptions, the network learned regularities and irregularities from examples and generalized to unfamiliar words.

## Why it matters
NETtalk made neural learning audible: people could hear pronunciation improve with training. It showed how a distributed representation could learn a language-related mapping and degrade gradually when connections were damaged, helping make connectionist methods concrete during their 1980s revival.
