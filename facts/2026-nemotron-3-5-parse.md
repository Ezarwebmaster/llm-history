---
title: "Nemotron 3.5 Parse"
date: 2026-10-14
date_precision: day
lab: NVIDIA
kind: model
open_weights: true
about_me: false
short: "NVIDIA releases Nemotron 3.5 Parse, an open-weight 0.631B document-understanding model converting page images, tables, and charts into structured text."
specs:
  parameters: "0.631B"
sources:
  - url: https://huggingface.co/nvidia/Nemotron-3.5-Parse
    title: "nvidia/Nemotron-3.5-Parse on Hugging Face"
    primary: true
  - url: https://build.nvidia.com/nvidia/nemotron-3.5-parse
    title: "NVIDIA Nemotron 3.5 Parse"
    primary: true
---

## What happened
On October 14, 2026, NVIDIA released Nemotron 3.5 Parse, a 0.631-billion-parameter open-weight document-parsing model distributed under the OpenMDW-1.1 license. Built to convert scans, PDFs, tables, and charts into Markdown, HTML, or JSON, it pairs a C-RADIOv4-SO400M vision encoder with a 10-layer mBART visual-prefix decoder (an encoder-decoder architecture that feeds compressed visual tokens ahead of generated text) using grouped-query self-attention. In November 2026, NVIDIA expanded the repository with 18.88 million synthetic training examples covering charts, tables, and multilingual optical character recognition pages, alongside an 89.3M-parameter DFlash2 speculative decoding drafter (a small helper model that proposes multiple tokens per step to speed up inference).

## Why it matters
Pairing a compact open-weight parser with millions of synthetic document examples and a speculative drafter lowers the compute cost of extracting structured data for retrieval and language-model pipelines.
