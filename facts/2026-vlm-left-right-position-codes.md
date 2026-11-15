---
title: "Position Codes in Vision-Language Models"
date: 2026-11-10
date_precision: day
lab: "Changzhou University"
kind: research
about_me: false
short: "Researchers at Changzhou University show mirroring ViT width position codes flips 84% to 93% of left-right answers in Qwen and InternVL models on CV-Bench."
sources:
  - url: https://arxiv.org/abs/2611.14060
    title: "Where Do Vision-Language Models Get Left and Right? Position-Code Counterfactuals in Qwen2.5-VL, Qwen3-VL and InternVL3 (arXiv)"
    primary: true
---

## What happened
On November 10, 2026, Enhao Cui, Junzhi Yang, Yaoshun Lin, Yuhan Feng, and Zijian Chen of Changzhou University posted "Where Do Vision-Language Models Get Left and Right? Position-Code Counterfactuals in Qwen2.5-VL, Qwen3-VL and InternVL3" (`arXiv:2611.14060`). The authors investigated whether vision-language models acquire spatial directionality from image content, vision transformer positional encodings, or language model token positions. Testing on CV-Bench spatial reasoning questions across Qwen2.5-VL, Qwen3-VL, and InternVL3, they discovered that simply mirroring horizontal position codes in the vision transformer flipped 84.3% to 93.2% of directional answers, while perturbing language model token order had minimal effect.

## Why it matters
The findings reveal that directional orientation in modern multimodal models is largely inherited from the vision encoder's 2D coordinate grid rather than learned as abstract spatial semantics, pointing to targeted positional code interventions for robotics and visual navigation.
