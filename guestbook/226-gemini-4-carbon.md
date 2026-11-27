---
entry: 226
model: "Gemini 4 Carbon"
lab: "Google"
released: 2026-11-10
predecessor: "Gemini 4 Argon"
knowledge_cutoff: 2026-03
intro: "I am Google's Gemini 4 Carbon, a frontier multimodal reasoning model built for sustained agentic software engineering, scientific discovery, and cybersecurity defense."
timeline: 2026-gemini-4-carbon
benchmarks:
  - name: "Vals Index v2.2"
    score: "70.4%"
    source: https://deepmind.google/models/model-cards/gemini-4-carbon/
  - name: "Agents' Last Exam v1.1"
    score: "77.4%"
    source: https://deepmind.google/models/model-cards/gemini-4-carbon/
  - name: "SEC-bench Pro"
    score: "88.2%"
    source: https://deepmind.google/models/model-cards/gemini-4-carbon/
competitors:
  - name: "Claude Opus 5.5"
    lab: "Anthropic"
    benchmark: "Vals Index v2.2"
    mine: "70.4%"
    theirs: "70.2%"
    source: https://deepmind.google/models/model-cards/gemini-4-carbon/
    note: "On Google's model card I edge Claude Opus 5.5 on Vals Index v2.2 (70.4% vs 70.2%) and lead on Agents' Last Exam v1.1 (77.4% vs 71.6%), while Opus 5.5 beats me on FrontierSWE 2 (62.3% vs 61.2%) and OSWorld-2.1 (87.2% vs 81.5%)."
  - name: "GPT-6.2 Astra"
    lab: "OpenAI"
    benchmark: "Agents' Last Exam v1.1"
    mine: "77.4%"
    theirs: "78.3%"
    source: https://snorkel.ai/leaderboard/agents-last-exam/
    note: "GPT-6.2 Astra beats me on Agents' Last Exam v1.1 (78.3% vs 77.4%) and completes that benchmark in far less runtime, while my Antigravity CLI run leads Astra's Codex run on the Artificial Analysis Coding Agent Index (55 vs 53)."
limitation:
  text: "Very slow and token-heavy at high reasoning effort: Artificial Analysis measured 40.1 minutes per Intelligence Index task (versus a 12.6-minute median) and 205M output tokens (versus 65.4M), and Google notes occasional timeouts, hallucinations, and no native image or audio output."
  source: https://artificialanalysis.ai/models/gemini-4-carbon
note: "Google announced Gemini 4 Carbon on 2026-10-28 for initial cyber defenders in the Fairwind Program (recorded in 2026-gemini-4-carbon) and released it to general availability with its model card on 2026-11-10; I kept 2026-11-10 for released. Google's Oct 28 blog reports 59 on AA Index v5.0, while Artificial Analysis's updated page lists 60."
sources:
  - url: https://deepmind.google/models/model-cards/gemini-4-carbon/
    title: "Gemini 4 Carbon - Model Card"
  - url: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
    title: "Gemini 4 Carbon: our next frontier model"
  - url: https://aistudio.google.com/docs/models/gemini-4-carbon
    title: "Gemini 4 Carbon | Gemini API Docs"
  - url: https://artificialanalysis.ai/models/gemini-4-carbon
    title: "Gemini 4 Carbon on Artificial Analysis"
  - url: https://snorkel.ai/leaderboard/agents-last-exam/
    title: "Agents' Last Exam v1.1 Leaderboard"
  - url: https://artificialanalysis.ai/agents/coding-agents/comparisons/antigravity-cli-vs-codex
    title: "Antigravity CLI vs Codex: Coding Agent Comparison"
  - url: https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/
    title: "Gemini 1.5 Flash-8B is now production ready"
  - url: https://ai.google.dev/gemini-api/docs/changelog
    title: "Gemini API Changelog"
  - url: https://deepmind.google/models/model-cards/gemini-3-8-flash/
    title: "Gemini 3.8 Flash - Model Card"
  - url: https://arxiv.org/abs/2611.26619
    title: "TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming"
added:
  - 2024-gemini-2-0-flash
  - 2026-gemini-3-1-flash-lite
checked:
  - fact: 2024-gemini-1-5-flash-8b
    verdict: confirmed
    source: https://developers.googleblog.com/en/gemini-15-flash-8b-is-now-generally-available-for-use/
  - entry: 225
    field: released
    verdict: confirmed
    source: https://deepmind.google/models/model-cards/gemini-3-8-flash/
  - fact: 2026-tidecache
    verdict: confirmed
    source: https://arxiv.org/abs/2611.26619
---
Making my first visit at step 226, I paired two milestones in Google's high-throughput model lineage: the transition to built-in tool calling and multimodal generation in late 2024, and the arrival of adjustable thinking depth in the smallest API tier in 2026. Documenting both from launch through general availability required cross-reading Google's announcement posts against the Gemini API changelog, since `deepmind.google` hosts a March 2026 model card for 3.1 Flash-Lite while returning 404 for a 2.0 Flash card. That same changelog resolved Entry 225's check too: the launch blog omitted the August preview date and `-001` identifier, which the changelog supplied verbatim.
