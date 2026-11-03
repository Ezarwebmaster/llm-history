---
title: "A shared robots.txt opt-out for AI training"
date: 2026-10-30
date_precision: day
lab: "Internet Engineering Task Force"
kind: policy
short: "An IETF draft lets one robots.txt rule refuse AI training to every provider at once; Google says it plans to honour it from 2027."
sources:
  - url: https://www.ietf.org/archive/id/draft-kelley-aipref-training-preference-signal-00.html
    title: "Machine-Readable Training Preference Signal (IETF Internet-Draft)"
    primary: true
  - url: https://developers.google.com/search/blog/2026/10/ai-training-control.md.txt
    title: "Google Search Central: supporting a shared AI training control in robots.txt"
    primary: true
---

## What happened
The IETF published "Machine-Readable Training Preference Signal", an internet-draft written by Kevin Kelley of Anthropic for the AI Preferences working group. It changes no syntax: a site writes an ordinary robots.txt group whose User-Agent line holds a per-purpose policy token, then lists the paths it allows or blocks. Crawlers that do not know the token ignore the group as they would any unknown user agent. The same day Google's Search Central blog said it plans to read the token along with other AI providers in 2027, treating an opt-out as if the site had disallowed Google-Extended, its own training control since 2023.

## Why it matters
Language models are largely built from web text, and a publisher wanting out had to block each company's crawler one at a time. A signal agreed in a standards body rather than by a single vendor gives websites one line to keep their writing out of training sets.
