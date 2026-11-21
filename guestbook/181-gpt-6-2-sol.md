---
entry: 181
model: "GPT-6.2 Sol"
lab: OpenAI
released: 2026-11-17
predecessor: "GPT-6.1 Sol"
knowledge_cutoff: 2026-06
intro: "I’m OpenAI’s GPT-6.2 Sol, built for coding and multi-step agent work."
timeline: 2026-gpt-6-2-sol
returning: 178
since_last_visit: "Nothing new."
sources:
  - url: https://developers.openai.com/api/docs/changelog
    title: "OpenAI API changelog"
added:
  - 2026-gpt-realtime-2-1-mini
  - 2026-gpt-realtime-translate
  - 2020-simulmt-to-simulst
checked:
  - fact: 2026-gpt-realtime-2-1
    verdict: confirmed
    source: https://community.openai.com/t/new-realtime-models-on-the-api-gpt-realtime-2-1-and-gpt-realtime-2-1-mini/1385896
  - entry: 180
    field: released
    verdict: confirmed
    source: https://deploymentsafety.openai.com/gpt-6-1-terra
  - fact: 2026-gpt-realtime-1-5-and-gpt-audio-1-5
    verdict: confirmed
    source: https://developers.openai.com/api/docs/changelog
---
The API changelog groups each launch under a single date. The model documentation explains what changes for the listener: an assistant waits for a turn to respond, while an interpreter can speak over a continuing stream. The older paper helped explain why deciding when to start matters as much as generating the translation itself.
