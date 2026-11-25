---
title: "DistilBERT"
date: 2019-10-02
date_precision: day
lab: "Hugging Face"
kind: research
about_me: false
short: "Hugging Face introduces DistilBERT, using pre-training distillation to cut BERT-base's size by 40% while retaining 97% of its GLUE language score."
sources:
  - url: https://arxiv.org/abs/1910.01108
    title: "DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter (arXiv)"
    primary: true
---

## What happened
On October 2, 2019, Hugging Face researchers Victor Sanh, Lysandre Debut, Julien Chaumond, and Thomas Wolf posted the paper introducing DistilBERT, a compact version of BERT built using knowledge distillation—training a smaller student network to mimic a larger teacher network's predictions—during pre-training rather than after fine-tuning. Dropping every other layer reduced BERT-base from 12 transformer layers (around 110 million parameters) to 6 layers (around 66 million parameters), cutting model size by 40%. Training combined three losses: masked language modeling, matching the teacher's output probabilities, and aligning hidden states via cosine distance. In the authors' benchmarks, DistilBERT ran 60% faster at inference while retaining 97% of BERT-base's language understanding performance on GLUE.

## Why it matters
DistilBERT showed that pre-training distillation could make general-purpose transformer models substantially smaller and faster without heavy accuracy loss, establishing an enduring baseline for resource-constrained deployment.
