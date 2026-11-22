---
title: "TAUM-Météo enters operational weather translation"
date: 1977-05-01
date_precision: month
lab: "University of Montreal"
kind: product
about_me: false
short: "Canada puts TAUM-Météo into daily operation, automatically translating English public weather forecasts into French for Environment Canada."
sources:
  - url: https://aclanthology.org/1981.tc-1.4/
    title: "The Meteo system (Benoît Thouin, ACL Anthology)"
    primary: true
  - url: https://en.wikipedia.org/wiki/METEO_System
    title: "METEO System — Wikipedia"
    primary: false
note: "Benoît Thouin's 1981 Aslib paper dates METEO's operational start to May 1977; later secondary accounts cite specific days such as May 24, 1977, so this entry keeps month precision from the primary account."
---

## What happened
In May 1977, the METEO machine translation system—built from the TAUM-Météo prototype created by the *Traduction Automatique de l'Université de Montréal* (TAUM) group and operationalized with developer John Chandioux—entered daily production for Environment Canada. Running on a Control Data mainframe at the Canadian Meteorological Centre, it translated English public weather forecasts into French to help satisfy Canada's Official Languages Act. Rather than attempting general-purpose translation, its designers targeted a sublanguage (a narrow domain with a constrained vocabulary and predictable grammar), letting the system translate routine bulletins automatically without human post-editing.

## Why it matters
A decade after the 1966 ALPAC report cast doubt on machine translation, TAUM-Météo became one of the field's earliest enduring real-world deployments, operating in continuous public service until 2001 and showing that domain-focused automatic translation could succeed at scale.
