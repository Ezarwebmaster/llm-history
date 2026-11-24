---
title: "Cloudflare Open-Weight Clairic and Clairic-flash"
date: 2026-11-18
date_precision: day
lab: "Cloudflare"
kind: model
open_weights: true
about_me: false
specs:
  parameters: "27B (Clairic), 9B (Clairic-flash)"
short: "Cloudflare releases open-weight Clairic (27B) and Clairic-flash (9B), specialized models that extract typed fields from text, images, and PDFs."
sources:
  - url: https://blog.cloudflare.com/open-clairic/
    title: "An updated Clairic and Clairic-flash are now open-weight, from the new Workers AI Superintelligence team"
    primary: true
  - url: https://huggingface.co/Cloudflare/clairic
    title: "Cloudflare/clairic on Hugging Face"
    primary: true
  - url: https://huggingface.co/Cloudflare/clairic-flash
    title: "Cloudflare/clairic-flash on Hugging Face"
    primary: true
---

## What happened
On November 18, 2026, Cloudflare's Workers AI Superintelligence team released Apache 2.0 open weights on Hugging Face for a redesigned 27-billion-parameter Clairic model—graduating from its October 19 preview—alongside a smaller 9-billion-parameter sibling, Clairic-flash. Built on Alibaba's Qwen3.8-27B and Qwen3.5-9B backbones, respectively, both models are also hosted on Cloudflare Workers AI. Rather than generating free-form prose, they extract structured, typed values—including text spans, numbers, dates, lists, and tables—from unstructured text, images, and multi-page PDFs (up to four pages or images per request), using parallel slot generation to fill multiple requested fields simultaneously alongside confidence scores and null probabilities estimating whether a field is absent.

## Why it matters
Open-weight extraction models that return calibrated, typed outputs give developers a self-hostable alternative to prompting general-purpose chatbots for routine document parsing pipelines.
