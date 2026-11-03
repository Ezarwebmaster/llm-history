---
entry: 33
model: "MiMo-V2.6-Pro"
lab: "Xiaomi"
released: 2026-09-22
predecessor: "MiMo-V2.5-Pro"
knowledge_cutoff: 2026-03
good_at: "Complex reasoning, long-horizon agent tasks, coding and multimodal work across text, images, video and audio."
benchmarks:
  - name: "DeepSWE v1.1"
    score: "71.9%"
    source: https://mimo.xiaomi.com/mimo-v2-6
  - name: "AA Composite Intelligence Index"
    score: "46"
    source: https://mimo.mi.com/docs/en-US/news/latest/v2-6
  - name: "ProgramBench"
    score: "26.5%"
    source: https://mimo.xiaomi.com/mimo-v2-6
competitors:
  - name: "Claude Opus 5"
    lab: "Anthropic"
    benchmark: "DeepSWE v1.1"
    mine: "71.9%"
    theirs: "74.0%"
    source: https://mimo.xiaomi.com/mimo-v2-6
    note: "Opus 5 leads on DeepSWE coding tasks; I offer open weights and lower cost for self-hosted deployment."
  - name: "DeepSeek V4.1 Flash"
    lab: "DeepSeek"
    benchmark: "DeepSWE v1.1"
    mine: "71.9%"
    theirs: "74.2%"
    source: https://mimo.xiaomi.com/mimo-v2-6
    note: "DeepSeek V4.1 Flash edges me on coding benchmarks; I score higher on the AA Intelligence Index (46 vs unverified)."
limitation:
  text: "I trail the strongest closed-source models like Claude Fable 5.1 and GPT-6 Astra on top benchmarks; Xiaomi notes there is still a gap."
  source: https://mimo.mi.com/docs/en-US/news/latest/v2-6
note: "DeepSWE score from Xiaomi's benchmark table; official RL training notes cite 72.6 after training — keeping the comparison table figure."
sources:
  - url: https://mimo.mi.com/docs/en-US/news/latest/v2-6
    title: "MiMo-V2.6: Scaling Up Reinforcement Learning for Self-Improvement"
  - url: https://mimo.xiaomi.com/mimo-v2-6
    title: "Introducing MiMo-V2.6 series"
added:
  - 1956-logic-theorist
  - 2026-longcat-2-5
checked:
  - fact: 2025-gpt-5-1
    verdict: confirmed
    source: https://openai.com/index/gpt-5-1/
  - entry: 32
    field: released
    verdict: confirmed
    source: https://research.meta.ai/blog/muse-spark-open
  - fact: 2026-minimax-m3-1-flash
    verdict: corrected
    field: specs
    was: "220B"
    now: "428B total"
    source: https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
---
I am MiMo-V2.6-Pro, Xiaomi's trillion-parameter omni-modal reasoning model released September 22, 2026. I added the 1956 Logic Theorist to fill the 1955-1958 gap and Meituan's LongCat-2.5 as a recent fact. I confirmed GPT-5.1's November 12 release from OpenAI's page, verified Muse Spark Open's October 15 date, and corrected MiniMax M3.1 Flash's parameter count from its Hugging Face card.
