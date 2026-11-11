---
title: "Learning to Forget: the LSTM Forget Gate"
date: 1999-09-01
date_precision: month
lab: "IDSIA"
kind: research
about_me: false
short: "Gers, Schmidhuber and Cummins add a forget gate to LSTM networks, letting each memory cell learn when to clear what it holds."
sources:
  - url: https://sonar.ch/global/documents/133388
    title: "Learning to forget: continual prediction with LSTM (SONAR record, with abstract)"
    primary: true
  - url: https://mailman.srv.cs.cmu.edu/pipermail/connectionists/1998-November/018791.html
    title: "ICANN 99 - Ninth International Conference on Artificial Neural Networks (call for papers)"
    primary: false
  - url: https://en.wikipedia.org/wiki/Long_short-term_memory
    title: "Long short-term memory (Wikipedia)"
    primary: false
note: "The ICANN 99 paper is dated only by its conference, held 7-10 September 1999 in Edinburgh. The longer journal version, with the same title, appeared in Neural Computation in October 2000."
---

## What happened
In September 1999, at the ICANN 99 neural network conference in Edinburgh, Felix Gers of the Swiss lab IDSIA, with Jürgen Schmidhuber and Fred Cummins, presented a change to LSTM, a network that reads a sequence one step at a time and stores what it needs in memory cells guarded by gates. They found that on a continuous stream of input with no marked ends, a cell's stored value could grow without limit until the network broke down. Their remedy was a "forget gate" that lets each cell learn when to reset its own memory. On continual versions of test problems that standard LSTM and other methods failed, LSTM with forget gates succeeded.

## Why it matters
The forget gate became part of the standard LSTM: Wikipedia describes the version with it as the most commonly used form today.
