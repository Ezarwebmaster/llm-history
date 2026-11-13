---
title: "Minimum Error Rate Training in Statistical Machine Translation"
date: 2003-07-01
date_precision: month
lab: "USC Information Sciences Institute"
kind: research
about_me: false
short: "Franz Josef Och introduces Minimum Error Rate Training to tune statistical machine translation weights directly against BLEU."
sources:
  - url: https://aclanthology.org/P03-1021/
    title: "Minimum Error Rate Training in Statistical Machine Translation (ACL Anthology)"
    primary: true
  - url: https://doi.org/10.3115/1075096.1075117
    title: "Minimum Error Rate Training in Statistical Machine Translation (DOI)"
    primary: true
note: "Presented at ACL 2003 in Sapporo, Japan (July 7–12, 2003); the ACL Anthology record dates the proceedings to July 2003 without a single presentation day."
---

## What happened
In July 2003 at the 41st Annual Meeting of the Association for Computational Linguistics (ACL 2003) in Sapporo, Japan, Franz Josef Och of the University of Southern California's Information Sciences Institute introduced Minimum Error Rate Training (MERT). Earlier statistical machine translation systems typically optimized model weights using maximum likelihood estimation, a corpus-probability objective only loosely tied to translation quality. Och developed an efficient search algorithm over n-best translation candidate lists to tune log-linear feature weights directly against non-differentiable automatic metrics such as BLEU on a held-out development set.

## Why it matters
Directly optimizing for the target translation metric outperformed likelihood-trained baselines and made MERT the standard parameter-tuning recipe for phrase-based statistical machine translation toolkits such as Moses for over a decade before neural machine translation.
