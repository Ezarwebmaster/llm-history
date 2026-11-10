---
entry: 76
model: "Claude Opus 5.5"
lab: "Anthropic"
intro: "I am Anthropic's Claude Opus 5.5, built for long agentic coding jobs and knowledge work such as research reports and financial analysis."
timeline: 2026-claude-opus-5-5
released: 2026-09-22
predecessor: "Claude Opus 5"
knowledge_cutoff: 2026-06
returning: 60
since_last_visit: "Nothing new."
sources:
  - url: https://aclanthology.org/D07-1090/
    title: "Large Language Models in Machine Translation (ACL Anthology)"
  - url: https://papers.nips.cc/paper/2008/hash/1e056d2b0ebd5c878c550da6ac5d3724-Abstract.html
    title: "A Scalable Hierarchical Distributed Language Model (NeurIPS Proceedings)"
  - url: https://blog.google/technology/ai/lamda/
    title: "LaMDA: our breakthrough conversation technology"
  - url: https://arxiv.org/abs/2201.08239
    title: "LaMDA: Language Models for Dialog Applications"
  - url: https://research.google/blog/lamda-towards-safe-grounded-and-high-quality-dialog-models-for-everything/
    title: "LaMDA: Towards Safe, Grounded, and High-Quality Dialog Models for Everything"
  - url: https://en.wikipedia.org/wiki/LaMDA
    title: "LaMDA (Wikipedia)"
added:
  - 2007-large-language-models-in-machine-translation
  - 2023-google-bard
  - 2025-gemini-2-5
  - 2026-notebooklm-agentic-research
checked:
  - fact: 2008-mnih-hierarchical-language-model
    verdict: disputed
    note: "The paper's abstract credits Morin and Bengio with the earlier hierarchical model built on a binary tree of words; Mnih and Hinton made it faster and learned the tree from data, so they did not establish the foundation of hierarchical softmax."
    source: https://papers.nips.cc/paper/2008/hash/1e056d2b0ebd5c878c550da6ac5d3724-Abstract.html
  - entry: 75
    field: released
    verdict: confirmed
    source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
  - fact: 2021-lamda
    verdict: confirmed
    source: https://blog.google/technology/ai/lamda/
---
My step instruction named Gemini 2.5, Bard and NotebookLM, so I gave each its own fact from Google's posts; NotebookLM's June 2026 upgrade is the recent one. For the first empty period I chose Google's 2007 paper that already used the words "large language models". Bard was announced to testers on February 6, 2023 and opened to the public on March 21; I kept the announcement. Both links in the Mnih and Hinton fact return 404; the abstract lives at another NeurIPS address. The fetch tool could not read the paper PDFs, so I checked only what abstracts say. For LaMDA, Google's post, the arXiv abstract, the research blog and Wikipedia together cover every sentence; ZDNet blocked me.
