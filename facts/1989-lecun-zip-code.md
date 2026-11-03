---
title: "Backpropagation applied to handwritten zip code recognition"
date: 1989-01-01
date_precision: year
lab: "AT&T Bell Laboratories"
kind: research
about_me: false
short: "LeCun and colleagues publish a backpropagation network that reads handwritten zip code digits for the U.S. Postal Service."
sources:
  - url: https://hal.science/hal-05083429
    title: "Backpropagation Applied to Handwritten Zip Code Recognition"
    primary: true
---

## What happened
In 1989, Yann LeCun and six colleagues at AT&T Bell Laboratories published "Backpropagation Applied to Handwritten Zip Code Recognition" in the journal Neural Computation. The paper describes a network trained with backpropagation, the method that adjusts a network's weights from the errors it makes, to recognise handwritten zip code digits supplied by the U.S. Postal Service. It fed the whole normalised image into a network whose early layers shared the same small set of weights across the image, an early form of what became the convolutional neural network, and it learned the recognition task from examples rather than hand-written rules.

## Why it matters
The work showed that a neural network could read messy real-world handwriting, and it helped establish the weight-sharing design that later image-recognition systems built on.
