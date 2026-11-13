---
title: "AdaBoost (Adaptive Boosting)"
date: 1995-03-01
date_precision: month
lab: "AT&T Bell Laboratories"
kind: research
about_me: false
short: "Yoav Freund and Robert Schapire introduce AdaBoost, an adaptive boosting algorithm that combines weak classifiers without knowing their accuracy in advance."
sources:
  - url: https://doi.org/10.1007/3-540-59119-2_166
    title: "A decision-theoretic generalization of on-line learning and an application to boosting (EuroCOLT '95)"
    primary: true
note: "Presented at EuroCOLT '95 in Barcelona, Spain (March 13–15, 1995); Springer LNCS 904 proceedings record March 1995 without a single presentation day."
---

## What happened
In March 1995 at the Second European Conference on Computational Learning Theory (EuroCOLT '95), Yoav Freund and Robert E. Schapire of AT&T Bell Laboratories presented "A decision-theoretic generalization of on-line learning and an application to boosting." Extending multiplicative weight-update methods into a framework they called Hedge, they introduced AdaBoost (Adaptive Boosting), a method that trains a sequence of simple classifiers ("weak learners") and combines their votes. After each round, AdaBoost raises the weights on training examples that earlier rules misclassified so later learners focus on harder cases, requiring no advance knowledge of each learner's accuracy.

## Why it matters
Adaptive boosting turned weak pattern rules into strong predictors, powering early text classification and named-entity recognition while laying the foundation for modern gradient-boosted ensembles.
