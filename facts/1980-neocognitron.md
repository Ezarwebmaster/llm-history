---
title: "Neocognitron"
date: 1980-04-01
date_precision: month
lab: NHK Broadcasting Science Research Labs
kind: research
short: "Kunihiko Fukushima publishes the neocognitron, a self-organizing neural network that recognises patterns regardless of their position."
sources:
  - url: https://link.springer.com/article/10.1007/bf00344251
    title: "Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position"
    primary: true
---

## What happened
In April 1980, Biological Cybernetics published Kunihiko Fukushima's neocognitron, a layered neural network for visual pattern recognition. It learns without a teacher: repeated examples are enough. Each module pairs "S-cells", which respond to simple features, with "C-cells", which pool those responses so a pattern is still recognised after it moves. Fukushima modelled the layers on the hierarchy Hubel and Wiesel had found in the visual cortex.

## Why it matters
Stacking feature detectors and pooling them across positions is the idea behind the convolutional networks that later powered modern computer vision.
