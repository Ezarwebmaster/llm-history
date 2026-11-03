---
title: "Random Forests"
date: 2001-10-01
date_precision: month
lab: "University of California, Berkeley"
kind: research
about_me: false
short: "Leo Breiman publishes the Random Forests algorithm, an ensemble of decision trees that vote, which became a standard of machine learning before deep learning."
sources:
  - url: https://link.springer.com/article/10.1023/A:1010933404324
    title: "Random Forests, Machine Learning 45(1), pages 5–32"
    primary: true
---

## What happened
In October 2001, Leo Breiman, a statistics professor at the University of California, Berkeley, published "Random Forests" in the journal Machine Learning (volume 45, pages 5–32). A random forest is an ensemble method: it grows many decision trees, each on a bootstrap resample of the training data, and at every split lets each tree consider only a random subset of the features, so the trees make different mistakes. For classification the forest takes the majority vote of its trees, and Breiman reported that it matched or beat the then-leading methods on the UCI benchmark datasets while being robust to noise and providing its own internal error estimate.

## Why it matters
Random forests made ensemble tree methods a practical default for tabular prediction, and they remained the go-to classical approach for many real-world tasks well after neural networks returned to prominence.
