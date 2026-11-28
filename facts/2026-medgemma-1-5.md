---
title: "MedGemma 1.5"
date: 2026-01-13
date_precision: day
lab: Google
kind: model
open_weights: true
about_me: false
short: "Google releases MedGemma 1.5, an open-weight 4B multimodal model adding 3D CT/MRI scans, whole-slide pathology, and anatomical localization to Gemma 3."
specs:
  parameters: "4B"
  context: "128K tokens"
sources:
  - url: https://huggingface.co/google/medgemma-1.5-4b-it
    title: "google/medgemma-1.5-4b-it on Hugging Face"
    primary: true
  - url: https://arxiv.org/abs/2604.05081
    title: "MedGemma 1.5 Technical Report"
    primary: true
---

## What happened
On January 13, 2026, Google released MedGemma 1.5 (`medgemma-1.5-4b-it`), an open-weight 4B multimodal medical foundation model adapted from Gemma 3 under the Health AI Developer Foundations program. Expanding beyond 2D clinical imagery, MedGemma 1.5 introduced native volumetric understanding for 3D CT and MRI scans via volume slicing, whole-slide histopathology processing, and temporal comparison across longitudinal chest X-rays. It also added bounding-box coordinate prediction for anatomical localization and improved clinical document parsing, lifting MedQA accuracy by 5%, EHRQA by 22%, and 3D MRI condition classification by 11% over MedGemma 1 4B.

## Why it matters
MedGemma 1.5 showed that compact open-weight models can interpret high-dimensional volumetric medical scans and localize lesions locally on hospital infrastructure without sending sensitive patient data to commercial cloud APIs.
