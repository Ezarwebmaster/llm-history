---
title: "Snowflake Decision"
date: 2026-10-08
date_precision: day
lab: Snowflake
kind: model
about_me: false
short: "Snowflake introduces Snowflake Decision in Cortex AI, a model built for high-volume classification, scoring, and routing inside SQL queries."
sources:
  - url: https://www.snowflake.com/en/blog/introducing-snowflake-decision-in-cortex-ai-functions/
    title: "Introducing Snowflake Decision in Cortex AI Functions"
    primary: true
  - url: https://docs.snowflake.com/en/release-notes/notable-changes
    title: "Snowflake Notable Changes Release Notes"
    primary: false
---

## What happened
On October 8, 2026, Snowflake introduced Snowflake Decision in private preview inside Cortex AI Functions through the `AI_COMPLETE` SQL function. Instead of generating free-form prose, the model evaluates text or structured records against predefined criteria and returns typed outputs—such as category labels, ordered rubric scores, or true-or-false probabilities with confidence values—across multiple questions in a single call. Snowflake followed with a lower-latency `snowflake-decision-fast` variant on October 19, 2026, and moved Snowflake Decision into public preview in `AI_COMPLETE` on November 20, 2026, reporting an average processing speed of roughly 1.58 milliseconds per row.

## Why it matters
Running bounded classification and scoring directly inside governed SQL tables offers a specialized alternative to calling general-purpose generative models across large enterprise data pipelines.
