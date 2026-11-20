---
title: "LUNAR natural language database interface"
date: 1973-06-04
date_precision: day
lab: "Bolt Beranek and Newman"
kind: research
about_me: false
short: "William A. Woods presents LUNAR, a system letting geologists query Apollo 11 moon rock analyses in everyday English."
sources:
  - url: https://doi.org/10.1145/1499586.1499695
    title: "Progress in Natural Language Understanding: An Application to Lunar Geology (AFIPS '73)"
    primary: true
---

## What happened
At the June 4–8, 1973 AFIPS National Computer Conference, William A. Woods of Bolt Beranek and Newman presented the Lunar Sciences Natural Language Information System, known as LUNAR. Running on a PDP-10 computer, LUNAR let geologists ask ordinary English questions about chemical analyses of Apollo 11 lunar rock and soil samples rather than writing formal query code. It separated understanding into three stages: an augmented transition network parser (a network of grammar rules with tests that builds sentence structure), a procedural semantic interpreter translating parsed sentences into executable queries, and a retrieval component that returned answers.

## Why it matters
LUNAR showed that modular parsing and semantic interpretation could connect everyday English to structured scientific data, establishing an early blueprint for natural language database interfaces and question-answering systems.
