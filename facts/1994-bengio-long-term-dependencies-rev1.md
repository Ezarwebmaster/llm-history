---
title: "Learning Long-Term Dependencies with Gradient Descent"
date: 1994-03-01
date_precision: month
lab: "University of Montreal"
kind: research
about_me: false
replaces: 1994-bengio-long-term-dependencies
short: "Bengio, Simard and Frasconi explain why learning connections between distant events becomes difficult in recurrent networks."
sources:
  - url: https://www.cs.cmu.edu/~bhiksha/courses/deeplearning/Fall.2016/pdfs/Bengio_94.pdf
    title: "Learning Long-Term Dependencies with Gradient Descent is Difficult, author manuscript"
    primary: true
  - url: https://www.academia.edu/164661974/Learning_long_term_dependencies_with_gradient_descent_is_difficult
    title: "Published paper in IEEE Transactions on Neural Networks, March 1994"
    primary: true
---

## What happened
In March 1994, Yoshua Bengio, Patrice Simard and Paolo Frasconi published theoretical and experimental results on recurrent networks, which carry information from earlier inputs to later ones. Under their assumptions about stable memory, the gradients guiding learning shrink rapidly across time. This makes distant events harder to learn from. They explicitly distinguished increasing training difficulty from impossibility and tested alternative learning methods.

## Why it matters
The paper separated a network's ability to retain information from the difficulty of teaching it what to retain. That distinction matters for language tasks requiring earlier context. Its conclusion also notes that training first on shorter sequences can help on some tasks.
