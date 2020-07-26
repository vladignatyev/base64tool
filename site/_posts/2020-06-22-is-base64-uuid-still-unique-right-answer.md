---
title: "Is Base64 encoded UUID still unique?"
tags: ["answers"]
related: false
---

## Is Base64 encoded UUID still unique?
The short answer is *yes*.

## What is UUID or GUID?

UUID or GUID stands for universally unique identifier. It is a sequence of bytes
that have a wonderful property: this sequence is unique. This sequence contains 128 bits of information,
so the probability of finding a collision (of generating another UUID with the same value)
is approximately ```1 / 2 ^ 128 = 2.938735877055719e-39```.
To name how small this number is, imagine that this number is 1 divided by the number,
that is ```10 ^ 17``` (100 Quadrillions) times bigger than the number of stars in the Universe.

## How it relates to Base64 encoding
The Base64 encoding transforms every single input byte into associated output serie of bits.
To be exact, every three 8-bit values translates into four 6-bit values (24-bit word).
Literally, we can match exactly one 24-bit word of Base64 output to every 24-bit input.

This means, that we have a single representation for every single UUID/GUID.
Thus, the Base64 encoded UUID is still unique.
