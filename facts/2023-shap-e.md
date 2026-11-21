---
title: "Shap-E generates implicit 3D representations"
date: 2023-05-03
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI researchers publish Shap-E, a model that generates 3D assets from text or images."
sources:
  - url: https://arxiv.org/abs/2305.02463
    title: "Shap-E paper and submission history"
    primary: true
  - url: https://github.com/openai/shap-e
    title: "Official Shap-E code and model release"
    primary: true
---

## What happened
Shap-E generates parameters for implicit functions: learned descriptions of a 3D object's shape and appearance. These can be rendered as textured meshes or neural radiance fields, representations used to synthesize views. The paper appeared on May 3, 2023; OpenAI also released code and models.

## Why it matters
Where Point-E produces explicit point clouds, Shap-E produces a representation that supports more than one form of 3D output. It is a 3D asset generator, distinct from models whose final output is a single image.
