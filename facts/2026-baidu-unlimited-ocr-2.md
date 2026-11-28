---
title: "Unlimited OCR 2"
date: 2026-10-27
date_precision: day
lab: Baidu
kind: model
open_weights: true
about_me: false
short: "Baidu releases Unlimited OCR 2, an open-weight vision-language document parser using Sparse Reference Sliding Window Attention for hundred-page documents."
note: "Baidu released Unlimited OCR 2 on Hugging Face and GitHub on 2026-10-27 (kept for date), submitted the arXiv paper (2610.39308) on 2026-10-29 (announced 2026-11-02), and launched it on Baidu AI Cloud TextMind on 2026-11-16."
sources:
  - url: https://huggingface.co/baidu/Unlimited-OCR-2
    title: "baidu/Unlimited-OCR-2 on Hugging Face"
    primary: true
  - url: https://arxiv.org/abs/2610.39308
    title: "Unlimited OCR Works 2"
    primary: true
---

## What happened
On October 27, 2026, Baidu released Unlimited OCR 2 under the MIT license on Hugging Face (`baidu/Unlimited-OCR-2`), followed by its technical report *"Unlimited OCR Works 2"* (`arXiv:2610.39308`, submitted October 29) and deployment on Baidu AI Cloud TextMind on November 16. Building on June 2026's Unlimited OCR, the model replaces decoder attention modules with Sparse Reference Sliding Window Attention (SR-SWA), which compresses text-visual attention interactions across long document sequences into a fixed-capacity working set of active reference tokens (such as 512 tokens). Paired with an unlimited-horizon decoding schedule, SR-SWA keeps per-step decoding compute and memory nearly constant as page counts grow. Baidu reports 7.0x and 5.6x per-step speedups at the 100-page scale over full attention and Reference Sliding Window Attention, alongside results on MPDocBench and its new hundred-page MarathonDocBench benchmark.

## Why it matters
Bounding active visual reference tokens allows vision-language document parsers to transcribe hundred-page books in a single pass without quadratic attention slowdowns.
