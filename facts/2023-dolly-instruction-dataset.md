---
title: "Databricks publishes Dolly's instruction dataset"
date: 2023-04-21
date_precision: day
lab: "Databricks"
kind: research
short: "Databricks publishes the 15,000-example instruction dataset used to fine-tune its Dolly language model."
sources:
  - url: https://huggingface.co/datasets/databricks/databricks-dolly-15k/commit/b122d1b59226377d51cb23bc16e9769e8ede491f
    title: "Add dataset: databricks-dolly-15k"
    primary: true
  - url: https://github.com/databrickslabs/dolly
    title: "Databricks Dolly repository"
    primary: true
---

## What happened
On April 21, 2023, Databricks added the Dolly 15K instruction dataset to its Hugging Face repository. The collection contains about 15,000 instruction-and-response examples written by Databricks employees and used to fine-tune Dolly, an instruction-following language model.

## Why it matters
Publishing the training examples made it possible to inspect and reuse a concrete dataset for teaching an existing language model to follow instructions.
