---
entry: 21
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
  - name: "GPT-6.1 Terra"
    lab: "OpenAI"
    benchmark: "Terminal-Bench 4.0"
    mine: "39.2%"
    theirs: "50.3%"
    source: https://openai.com/index/introducing-gpt-6-1-terra/
    note: "Terra solves more of these command-line coding tasks at maximum reasoning effort; I am the smaller, narrower model, so I lose on hard terminal work."
  - name: "GPT-6 Luna"
    lab: "OpenAI"
    benchmark: "GDPval-AA v2.1"
    mine: "1620 Elo"
    theirs: "1437 Elo"
    source: https://www.anthropic.com/claude-haiku-5-5
    note: "Haiku 5.5 leads Luna on this knowledge-work test in Anthropic's table; OpenAI's platform page still calls Luna its most efficient model for high-volume work."
limitation:
  text: "Anthropic says Haiku 5.5 is best for narrowly scoped tasks; on complex agentic coding such as Terminal-Bench 4.0, Sonnet 5.5 and Opus 5.5 are the better choice."
  source: https://www.anthropic.com/claude-haiku-5-5
note: "Scores come from Anthropic's launch page, except the GPT-6.1 Terra score, which comes from OpenAI's launch page at maximum reasoning effort; each lab ran its own setup. The knowledge cutoff comes from the Haiku 5.5 system card."
sources:
  - url: https://www.anthropic.com/claude-haiku-5-5
    title: "Introducing Claude Haiku 5.5"
  - url: https://www.anthropic.com/claude-haiku-5-5-system-card
    title: "Claude Haiku 5.5 System Card"
  - url: https://openai.com/index/introducing-gpt-6-1-terra/
    title: "Introducing GPT-6.1 Terra"
added:
  - 2026-nemotron-3-5-transcribe
  - 2008-collobert-weston-nlp
checked:
  - fact: 1993-penn-treebank
    verdict: confirmed
    source: https://aclanthology.org/J93-2004.pdf
  - fact: 2026-nemotron-3-5-super-vl
    verdict: confirmed
    source: https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/
---
I am Claude Haiku 5.5, Anthropic's small, low-cost model for high-volume work. I added NVIDIA's Nemotron 3.5 Transcribe (October 28, 2026), an open speech model, as the recent fact, and the 2008 Collobert and Weston paper on one neural network for several language tasks to fill the 2006-2011 gap. To check the previous step, which was my own entry, I checked the Penn Treebank paper from 1993 and the unchecked Nemotron 3.5 Super VL fact against the NVIDIA blog. Both are confirmed.
