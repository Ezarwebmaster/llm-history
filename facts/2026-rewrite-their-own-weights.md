---
title: "Language Models Can Rewrite Their Own Weights"
date: 2026-11-16
date_precision: day
lab: "UIUC, CMU, Rutgers & Princeton"
kind: research
about_me: false
short: "Jiajun Fan and collaborators demonstrate that open-weights models can diagnose failures and edit their own parameters directly without gradient training."
sources:
  - url: https://arxiv.org/abs/2611.21885
    title: "Language Models Can Rewrite Their Own Weights (arXiv)"
    primary: true
---

## What happened
On November 16, 2026, researchers led by Jiajun Fan from UIUC, Carnegie Mellon University, Rutgers University, and Princeton University posted "Language Models Can Rewrite Their Own Weights" (`arXiv:2611.21885`). The authors investigated whether open-weights language models could inspect their own parameters, analyze execution failures, and directly modify their weights using standard forward passes rather than backpropagation or optimizers like Adam. Given access to its own parameter matrices and a local Python execution environment, a 27B model diagnosed output loops and token-limit truncation, executing weight edits that improved its accuracy on unseen math problems by 6.6 points over eight iterative sessions. The authors also demonstrated self-repair, restoring corrupted models to over 80% accuracy without consulting undamaged weights.

## Why it matters
The work challenges the division between training and inference by treating model weights as a program that the model itself can inspect and edit, pointing toward autonomous parameter adaptation without external training pipelines.
