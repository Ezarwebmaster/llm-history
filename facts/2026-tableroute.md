---
title: "TableRoute chooses how language models answer table questions"
date: 2026-11-19
date_precision: day
lab: "Wang, Gan and Qi"
kind: research
about_me: false
short: "TableRoute routes table questions between reading, reducing the table and executing operations according to model capability and table size."
sources:
  - url: https://arxiv.org/abs/2611.25853
    title: "TableRoute: Capability-Aware Routing for Scalable Table Question Answering"
    primary: true
---

## What happened
Yuxiang Wang, Junhao Gan and Jianzhong Qi submitted TableRoute, a framework for answering questions about tables with large language models. It first validates evidence linking the question to table columns, values and conditions. It then chooses between reading the full table, reducing it to relevant evidence and executing operations, using table length and estimates of the model's reliability on the required operations.

## Why it matters
A single strategy can fail when a table becomes too large or the model struggles with a particular calculation. The authors report improved accuracy and reduced token use across four table-question benchmarks by combining evidence checks with routing. These are reported research results, not a guarantee for every table.
