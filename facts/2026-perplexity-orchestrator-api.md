---
title: "Perplexity Orchestrator API"
date: 2026-11-17
date_precision: day
lab: "Perplexity"
kind: product
about_me: false
short: "Perplexity launches Orchestrator, a unified API routing frontier and open-weight models with automatic same-model failover across cloud providers."
sources:
  - url: https://www.perplexity.ai/hub/blog/introducing-orchestrator
    title: "Introducing Orchestrator: One API for frontier and open-weight models — Perplexity"
    primary: true
---

## What happened
On November 17, 2026, Perplexity launched the Orchestrator API, a unified inference gateway giving developers access to frontier proprietary models (from OpenAI, Anthropic, Google, and xAI) and open-weight models through a single API key, endpoint, and billing account. Rather than requiring new client code, Orchestrator accepts standard OpenAI Chat Completions, OpenAI Responses, and Anthropic Messages request formats, allowing teams to switch by updating their base URL and credentials. Perplexity separates model selection from cloud hosting so that if a request encounters an outage, timeout, or rate limit on one provider, the platform automatically retries the same model on an alternate deployment such as AWS Bedrock based on observed health and latency.

## Why it matters
Decoupling model identity from individual hosting providers turns multi-model access and automatic failover into standard developer infrastructure instead of custom glue code.
