---
title: "Transition Network Grammars for Natural Language Analysis"
date: 1970-10-01
date_precision: month
lab: "Harvard University"
kind: research
about_me: false
short: "William A. Woods describes how a computer can analyze English sentences by following and testing paths in a network of grammar rules."
sources:
  - url: https://cse.buffalo.edu/~rapaport/Papers/Papers.by.Others/woods70.atn.pdf
    title: "Transition Network Grammars for Natural Language Analysis (original paper)"
    primary: true
---

## What happened
In the October 1970 issue of *Communications of the ACM*, William A. Woods described a grammar as a network of paths a program could follow while reading a sentence. A path could call another network to handle a phrase nested inside the sentence. Woods added tests that could rule out a path, and instructions that could store or rearrange parts of the sentence as the program went.

## Why it matters
The program could build a description of a sentence's structure while it read the words. It could also use clues about meaning during that process to choose among possible grammatical readings.
