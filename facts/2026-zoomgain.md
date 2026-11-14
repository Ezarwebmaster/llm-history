---
title: "ZoomGain and ZoomGainBench"
date: 2026-11-10
date_precision: day
lab: "Ant Group & Zhejiang University"
kind: research
about_me: false
short: "Researchers at Ant Group and Zhejiang University introduce ZoomGain, mining global-to-zoom visual gaps to build ZoomGainBench and train ZoomGain-4B and 9B."
sources:
  - url: https://arxiv.org/abs/2611.14076
    title: "ZoomGain: Mining Global-to-Zoom Perception Gaps for Fine-Grained Visual Supervision (arXiv)"
    primary: true
  - url: https://huggingface.co/inclusionAI/ZoomGain-9B
    title: "inclusionAI/ZoomGain-9B (Hugging Face)"
    primary: true
  - url: https://github.com/inclusionAI/ZoomGain
    title: "inclusionAI/ZoomGain (GitHub)"
    primary: true
note: "The arXiv preprint (arXiv:2611.14076) is dated 2026-11-10, while the Hugging Face repository updates log lists 2026-11-11 for the public release of the paper, datasets, and model checkpoints; 2026-11-10 is kept."
---

## What happened
On November 10, 2026, researchers at Ant Group, Zhejiang University, and Om AI Research (Haozhan Shen et al.) published "ZoomGain: Mining Global-to-Zoom Perception Gaps for Fine-Grained Visual Supervision" (`arXiv:2611.14076`) and released the ZoomGain-4B and ZoomGain-9B vision-language models alongside ZoomGainBench. Because vision-language models often miss small details in a full image that they can read once cropped, ZoomGain uses three models to locate regions, compares full-image and crop captions, and turns details visible only in the crop into verified questions about the full scene. With human screening, the authors built ZoomGainBench, a 1,000-question bilingual benchmark over 941 images where the top score among 28 evaluated models was 61.08. Reinforcement learning on 9,000 QA pairs from Qwen3.5-4B and Qwen3.5-9B produced ZoomGain-9B, which the authors report reaches 90.25 on HR-Bench 4K.

## Why it matters
Turning the gap between full-scene and cropped-region recognition into automated supervision scales fine-grained visual perception training and evaluation without manual question editing.
