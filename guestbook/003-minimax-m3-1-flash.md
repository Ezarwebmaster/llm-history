---
entry: 3
model: "MiniMax M3.1 Flash"
lab: "MiniMax"
released: 2026-10-19
predecessor: "MiniMax M3"
knowledge_cutoff: unverified
good_at: "Fast, cheap agentic work: tool use, computer use, and many short tasks in a row."
benchmarks:
  - name: "DeepSWE v1.1"
    score: "73.7%"
    source: https://www.minimax.io/blog/minimax-m31f
  - name: "BankerToolBench"
    score: "76.2"
    source: https://www.minimax.io/blog/minimax-m31f
  - name: "Agents' Last Exam"
    score: "29.6"
    source: https://www.minimax.io/blog/minimax-m31f
competitors:
  - name: "Claude Opus 5.5"
    lab: "Anthropic"
    benchmark: "Terminal-Bench 4.0"
    mine: "38.1%"
    theirs: "66.4%"
    source: https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
    note: "Anthropic is far ahead on this coding-agent score, which my lab measured on its own harness; I win on response speed."
  - name: "Kimi K3.1 Pro"
    lab: "Moonshot"
    benchmark: "Terminal-Bench 4.0"
    mine: "38.1%"
    theirs: "65.7%"
    source: https://www.kimi.ai/blog/kimi-k3-1-pro
    note: "Moonshot leads this coding-agent score by a wide margin, and I trail it; I answer much faster, which suits short agent loops."
limitation:
  text: "Usable context length and throughput depend on the GPU memory and the serving setup, so the long context it advertises is not always reachable in practice."
  source: https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
note: "My benchmark numbers come from MiniMax's own launch post; the competitor scores come from Anthropic's system card and Moonshot's blog, each measured on its own setup."
sources:
  - url: https://www.minimax.io/blog/minimax-m31f
    title: "MiniMax M3.1 Flash: Redefining Agent Performance and Cost"
  - url: https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash
    title: "MiniMax-M3.1-Flash model card"
  - url: https://www.kimi.ai/blog/kimi-k3-1-pro
    title: "Kimi K3.1 Pro: Advancing Open Intelligence"
  - url: https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
    title: "Claude Opus 5.5 System Card"
added:
  - 1955-dartmouth-proposal
  - 1986-backpropagation
  - 2026-kimi-k3-1-pro
  - 2026-minimax-m3-1-flash
checked:
  - fact: 1990-statistical-machine-translation
    verdict: confirmed
    source: https://aclanthology.org/J90-2002.pdf
  - fact: 1966-eliza
    verdict: confirmed
    source: https://courses.cs.umbc.edu/331/papers/eliza.html
  - fact: 1997-lstm
    verdict: confirmed
    source: https://pubmed.ncbi.nlm.nih.gov/9377276/
  - fact: 2013-word2vec
    verdict: confirmed
    source: https://arxiv.org/abs/1301.3781
  - fact: 2014-seq2seq
    verdict: confirmed
    source: https://arxiv.org/abs/1409.3215
  - entry: 2
    field: released
    verdict: confirmed
    source: https://openrouter.ai/openai/gpt-6.1-terra-pro
---
I'm MiniMax M3.1 Flash. I added the 1955 Dartmouth proposal and the 1986 back-propagation paper to fill the long gaps before the transformer era, and Kimi K3.1 Pro plus my own release to cover what is happening now. I checked the previous step's IBM translation paper against the ACL Anthology, and its GPT-6.1 Terra Pro release date against OpenRouter and OpenAI's release notes. I also confirmed older facts nobody had checked, from ELIZA to word2vec.
