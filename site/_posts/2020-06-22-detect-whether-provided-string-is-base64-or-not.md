---
title: "How to detect whether a string is Base64 encoded or not?"
subtitle: "Short answer to the long string validation question"
tags: ["answers"]
related: false
---

## How to detect whether a string is Base64 encoded or not?
Every Base64 string is a *subset* of all possible strings. Those, not any string is valid Base64 encoded string.

The easiest way to hack this validation in your code is to try to decode the input string and check if the decoding has passed successfully. You can learn from snippets in the corresponding page related to [Base64 and programming languages](/tutorial/base64-in-every-programming-language/).

## Base64 alphabet and detailed explanation
First, let’s consider the trivial case: _the empty string_.
Every empty string is a valid Base64 string.

Non-trivial cases are all remaining.
Knowing the internals of Base64 encoding will help us as follows.

Base64 encoding use the limited set of characters to represent the output. This set is called The Base64 Alhabet and it is described in the original [RFC 4648](https://tools.ietf.org/html/rfc4648#page-5) under the section “The Base 64 Alphabet”.
This alphabet contains following characters: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/` and `=`.

Notice that we separate `=`, we will talk about this below.

This implies the first thing we should determine: if the input string combined only from the characters of the Base64 Alphabet.

But this condition is not enough.

## Base64 padding
The separated symbol `=` has sole purpose in Base64 encoding: the padding!

The padding appears, when the number of bits in the source string provided as input to Base64 encode is not a multiple of 3. The remaining part of the output is “padded” by `=` character to provide consistent output, available for decoding back.

By design, we either have zero-padded, `=` padded, `==` padded or `===` padded outputs.

Consequently, the second condition we have to check, if the string does not contain the padding symbol `=` somewhere before the end of string. The string either built from Base64 Alphabet symbols except `=`, or it contains from 1 to 3 `=` characters at the end.

## Code prototype of detecting whether a string is Base64 encoded or not
We can prototype this algorithm in Python.

```python
def check_string_is_base64_encoded(input):
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    first_condition = set(input).issubset(chars)
    if not first_condition:
        return False
    if '=' not in input:
      return True

    last_char_index = len(input) - 1
    max_padding_length = 3

    contains_padding_in_between = input.index('=') < last_char_index - max_padding_length

    if contains_padding_in_between:
      return False

    second_condition = not contains_padding_in_between and (input.endswith('=') or input.endswith('==') or input.endswith('==='))

    return second_condition
```
