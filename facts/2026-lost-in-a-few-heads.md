---
title: "Lost in a Few Heads: Diagnosing Block Selection in Sparse Attention"
date: 2026-11-16
date_precision: day
lab: "Yale University & Huawei"
kind: research
about_me: false
short: "Wenhe Zhang and Boxing Chen show accuracy drops in sparse attention stem from a few blind heads and can be repaired without training."
sources:
  - url: https://arxiv.org/abs/2611.21917
    title: "Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention (arXiv)"
    primary: true
---

## What happened
On November 16, 2026, Wenhe Zhang of Yale University and Boxing Chen of Huawei Canada submitted "Lost in a Few Heads: Diagnosing and Repairing Block Selection in Sparse Attention" to arXiv (`arXiv:2611.21917`). Block-sparse attention reduces compute by selecting only top key blocks per query, but often degrades retrieval accuracy at fixed budgets. Using an exact attention mass oracle and a teacher-forced calibration probe, the authors revealed that selection failures are not caused by budget exhaustion but are concentrated in three specific "blind heads." In models from the InfLLM-V2 family and NOSA-8B, these heads attend to the needle while mean-pooled key summaries dilute decisive tokens. Restoring full attention only in those three heads, or using a 4-bit scorer within the existing budget, recovered most retrieval accuracy without retraining.

## Why it matters
Isolating sparse attention failures to a few identifiable heads provides a training-free repair strategy for long-context language models.
