---
title: "GLIDE studies text-guided image diffusion"
date: 2021-12-20
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI publishes GLIDE, a study of generating and editing images with text-guided diffusion models."
sources:
  - url: https://arxiv.org/abs/2112.10741
    title: "GLIDE paper and submission history"
    primary: true
  - url: https://github.com/openai/glide-text2im
    title: "Official GLIDE codebase"
    primary: true
  - url: https://openai.com/index/dall-e-now-available-without-waitlist/
    title: "OpenAI's retrospective image-generation timeline"
    primary: true
note: "OpenAI's retrospective labels GLIDE November 2021; the paper's own submission history dates its first public arXiv version December 20, which this entry uses."
---

## What happened
OpenAI researchers published GLIDE, which generates images by progressively removing noise while following a text description. The study compared guidance from CLIP, a model connecting images and text, with classifier-free guidance, which uses the image generator's own conditional and unconditional predictions. Human evaluators preferred the latter for realism and matching captions. The researchers also demonstrated filling missing image regions using text.

## Why it matters
GLIDE connected diffusion image generation with natural-language control, extending the text-to-image work represented by the original DALL·E. The public release provided code and weights for a smaller model trained on filtered data; it did not release the full research model described in the comparisons.
