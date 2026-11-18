---
title: "Learning to restore missing accents in Spanish and French"
date: 1994-06-01
date_precision: month
lab: "University of Pennsylvania"
kind: research
about_me: false
short: "David Yarowsky presents a method that restores missing accents in Spanish and French text using clues from surrounding words."
sources:
  - url: https://aclanthology.org/P94-1013/
    title: "Decision Lists for Lexical Ambiguity Resolution"
    primary: true
  - url: https://aclanthology.org/P94-1013.pdf
    title: "Full paper from the ACL proceedings"
    primary: true
---

## What happened
David Yarowsky presented a statistical method for deciding which form of an ambiguous word belongs in a given sentence. He tested it by restoring missing accents in Spanish and French. The method ranks clues from nearby words and from words farther away, then picks the spelling indicated by the strongest clue it finds.

## Why it matters
A single accent can change which word a sentence contains. The study showed how a program could learn to recover that distinction from patterns in text and express its decision as a rule a reader could inspect.
