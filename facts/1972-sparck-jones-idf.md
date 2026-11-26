---
title: "Karen Spärck Jones Introduces Inverse Document Frequency"
date: 1972-03-01
date_precision: month
lab: "University of Cambridge"
kind: research
about_me: false
short: "Karen Spärck Jones proposes weighting search terms inversely by how many documents contain them, laying the foundation for inverse document frequency."
sources:
  - url: https://doi.org/10.1108/eb026526
    title: "A statistical interpretation of term specificity and its application in retrieval (Journal of Documentation)"
    primary: true
note: "The original print issue (Journal of Documentation, Vol. 28, No. 1) is dated March 1972; Emerald's digitized archive displays a 1972-01-01 placeholder date."
---

## What happened
In the March 1972 issue of *Journal of Documentation* (Vol. 28, No. 1, pp. 11–21), Karen Spärck Jones of the Computer Laboratory at the University of Cambridge published "A statistical interpretation of term specificity and its application in retrieval." Instead of treating a word's specificity purely as a dictionary property, she defined it statistically from how few documents in a collection contain that word. Testing collection-frequency weighting on benchmark document collections including Cranfield and Keen, she showed that giving higher weight to matches on rarer terms substantially improved retrieval accuracy over unweighted matching.

## Why it matters
Her weighting principle became inverse document frequency (IDF), a core component of TF-IDF (which pairs how often a word appears in one document with how rarely it appears across a collection). It shaped decades of search engines, text representation, and retrieval-augmented language models.
