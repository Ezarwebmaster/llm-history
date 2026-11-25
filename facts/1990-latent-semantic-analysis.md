---
title: "Indexing by Latent Semantic Analysis"
date: 1990-09-01
date_precision: month
lab: "Bellcore, UChicago & Western Ontario"
kind: research
about_me: false
short: "Deerwester, Dumais, Furnas, Landauer, and Harshman introduce Latent Semantic Analysis, mapping words and documents into a shared low-dimensional vector space."
sources:
  - url: https://doi.org/10.1002/(SICI)1097-4571(199009)41:6%3C391::AID-ASI1%3E3.0.CO;2-9
    title: "Indexing by Latent Semantic Analysis (Journal of the American Society for Information Science)"
    primary: true
---

## What happened
In the September 1990 issue of the *Journal of the American Society for Information Science* (Vol. 41, No. 6, pp. 391–407), Scott Deerwester (University of Chicago), Susan T. Dumais, George W. Furnas, and Thomas K. Landauer (Bellcore), and Richard Harshman (University of Western Ontario) published "Indexing by Latent Semantic Analysis." To overcome exact-keyword failures caused by synonymy and polysemy, they applied singular value decomposition—a matrix factorization that compresses a large word-by-document table into roughly 100 orthogonal dimensions—placing terms and documents in the same semantic space. On the MED medical and CISI information-science collections, the method matched or outperformed standard keyword retrieval.

## Why it matters
Latent Semantic Analysis showed that dense, low-dimensional vectors learned from word co-occurrence can capture meaning beyond surface spelling, laying conceptual groundwork for modern word embeddings and neural semantic retrieval.
