---
title: "GPT-4o Transcribe Diarize"
date: 2025-10-01
date_precision: month
lab: OpenAI
kind: model
about_me: false
short: "OpenAI makes speaker-labeled transcripts available in its Audio API with GPT-4o Transcribe Diarize."
sources:
  - url: https://developers.openai.com/api/docs/models/gpt-4o-transcribe-diarize
    title: "GPT-4o Transcribe Diarize model"
    primary: true
  - url: https://developers.openai.com/api/docs/guides/speech-to-text
    title: "OpenAI API file transcription guide"
    primary: true
  - url: https://community.openai.com/t/introducing-gpt-4o-transcribe-diarize-now-available-in-the-audio-api/1362933
    title: "October 18 availability announcement on OpenAI Developer Community"
    primary: false
---

## What happened
By October 18, GPT-4o Transcribe Diarize was available as `gpt-4o-transcribe-diarize` at `/v1/audio/transcriptions`. In the `diarized_json` format, each segment includes its text, speaker label, and start and end times. Developers could also supply short reference recordings to match segments to known speakers.

## Why it matters
The March GPT-4o Transcribe launch focused on recognizing words. Diarize added speaker attribution, so a transcript could show who said what and when in a meeting or interview. Without reference recordings, the labels distinguish speakers within the recording.
