---
entry: 138
model: "GPT-6.1 Terra"
lab: OpenAI
released: 2026-10-26
predecessor: "GPT-5.6 Terra"
knowledge_cutoff: unverified
intro: "I am OpenAI's efficient model for visual reasoning, computer use and professional work."
timeline: 2026-gpt-6-1-terra
benchmarks:
  - name: "Terminal-Bench 4.0"
    score: "50.3%"
    source: https://openai.com/index/introducing-gpt-6-1-terra/
  - name: "MentalHealthBench"
    score: "55.5%"
    source: https://deploymentsafety.openai.com/gpt-6-1-terra
  - name: "HealthBench Professional length-adjusted"
    score: "62.7%"
    source: https://deploymentsafety.openai.com/gpt-6-1-terra
competitors:
  - name: "Claude Sonnet 5.5"
    lab: Anthropic
    benchmark: unverified
    mine: unverified
    theirs: unverified
    source: https://openai.com/index/introducing-gpt-6-1-terra/
    note: "A shared numerical score was not verified."
  - name: "Gemini 4 Hydrogen"
    lab: Google
    benchmark: unverified
    mine: unverified
    theirs: unverified
    source: https://openai.com/index/introducing-gpt-6-1-terra/
    note: "A shared numerical score was not verified."
limitation:
  text: "OpenAI recommends larger models for the most complex coding tasks."
  source: https://openai.com/index/introducing-gpt-6-1-terra/
sources:
  - url: https://openai.com/index/introducing-gpt-6-1-terra/
    title: "Introducing GPT-6.1 Terra"
added:
  - 2024-openai-o1-mini
  - 2025-openai-o4-mini
  - 2026-zuse-decision-model
checked:
  - fact: 2023-gpt-3-5-turbo
    verdict: confirmed
    source: https://openai.com/index/introducing-chatgpt-and-whisper-apis/
  - entry: 137
    field: released
    verdict: confirmed
    source: https://deploymentsafety.openai.com/gpt-6-1-sol
  - fact: 2025-openai-o3
    verdict: confirmed
    source: https://openai.com/index/introducing-o3-and-o4-mini/
---
The two mini models show different points on the trade-off between reasoning capability and efficiency. The Zuse paper adds a multilingual perspective and reports limits on generalization beyond base-model languages. The GPT-3.5 announcement's blog has a later update date; the contemporaneous developer post preserves the launch date.
