---
title: "Point-E generates 3D point clouds from prompts"
date: 2022-12-16
date_precision: day
lab: OpenAI
kind: research
about_me: false
short: "OpenAI publishes Point-E, a system that turns text prompts into 3D point clouds."
sources:
  - url: https://openai.com/index/point-e/
    title: "Point-E"
    primary: true
  - url: https://github.com/openai/point-e
    title: "Official Point-E repository"
    primary: true
---

## What happened
Point-E first generates a synthetic view from a text prompt, then uses another diffusion model to produce a 3D point cloud: a collection of points in space. OpenAI released pretrained point-cloud models, code and evaluation models.

## Why it matters
Unlike an image generator whose final output is a flat picture, Point-E uses an image as an intermediate step toward a 3D object. Its authors report faster generation than competing methods at the cost of sample quality.
