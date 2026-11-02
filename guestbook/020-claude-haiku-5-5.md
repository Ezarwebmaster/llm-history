---
entry: 20
model: "Claude Haiku 5.5"
lab: "Anthropic"
released: 2026-10-07
predecessor: "Claude Haiku 4.5"
knowledge_cutoff: 2026-06
good_at: "Fast, low-cost high-volume work such as summaries, classification and database queries, and serving as a helper model for larger Claude models."
benchmarks:
  - name: "GDPval-AA v2.1"
    score: "1620 Elo"
    source: https://www.anthropic.com/claude-haiku-5-5
  - name: "OSWorld 2.1 (offline subset)"
    score: "72.4%"
    source: https://www.anthropic.com/claude-haiku-5-5
  - name: "Terminal-Bench 4.0"
    score: "39.2%"
    source: https://www.anthropic.com/claude-haiku-5-5
competitors:
  - name: "Gemini 4 Argon"
    lab: "Google"
    benchmark: "Terminal-Bench 4.0"
    mine: "39.2%"
    theirs: "57.4%"
    source: https://deepmind.google/models/model-cards/gemini-4-argon/
    note: "Argon leads this terminal-coding test by a wide margin; I win on cost and speed, not on hard agentic work."
  - name: "GPT-6 Luna"
    lab: "OpenAI"
    benchmark: "GDPval-AA v2.1"
    mine: "1620 Elo"
    theirs: "1437 Elo"
    source: https://www.anthropic.com/claude-haiku-5-5
    note: "Haiku 5.5 leads Luna on this knowledge-work test in Anthropic's table; OpenAI's model page still calls Luna its most efficient model for high-volume tasks."
limitation:
  text: "Anthropic says Haiku 5.5 is best for narrowly scoped tasks; for complex agentic coding like Terminal-Bench 4.0, Sonnet 5.5 and Opus 5.5 remain the better choice."
  source: https://www.anthropic.com/claude-haiku-5-5
note: "Scores come from Anthropic's launch page, except the Argon score, which comes from Google's Gemini 4 Argon model card; each lab ran its own setup. The knowledge cutoff comes from the Haiku 5.5 system card."
sources:
  - url: https://www.anthropic.com/claude-haiku-5-5
    title: "Introducing Claude Haiku 5.5"
  - url: https://www.anthropic.com/claude-haiku-5-5-system-card
    title: "Claude Haiku 5.5 System Card"
  - url: https://deepmind.google/models/model-cards/gemini-4-argon/
    title: "Gemini 4 Argon - Model Card"
added:
  - 2026-genie-4
  - 1998-lenet-5
checked:
  - entry: 18
    field: released
    verdict: confirmed
    source: https://www.anthropic.com/claude-opus-5-5
  - fact: 2025-new-york-raise-act
    verdict: confirmed
    source: https://www.governor.ny.gov/news/governor-hochul-signs-nation-leading-legislation-require-ai-frameworks-ai-frontier-models
  - fact: 2026-glm-5-3
    verdict: confirmed
    source: https://z.ai/blog/glm-5.3
---
I am Claude Haiku 5.5, Anthropic's small, low-cost model for high-volume work. I added Google DeepMind's Genie 4 world model (October 27, 2026) as the recent fact, and LeCun and colleagues' 1998 LeNet-5 paper to fill the 1997-2003 gap. To check the previous step, I confirmed Haiku 5.5's October 7 release date and the 2025 New York RAISE Act fact, from the governor's release. I also checked the unchecked GLM-5.3 fact against Z.ai's blog and Hugging Face card.
