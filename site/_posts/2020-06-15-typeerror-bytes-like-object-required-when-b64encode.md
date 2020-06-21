---
title: "TypeError: a bytes-like object is required, not 'str' when using b64encode()"
subtitle: "How to use Base64 in Python with UTF strings?"
tags: ["answers"]
related: false
---

The error occurs when the Python's `base64.b64encode` method has been called upon UTF-8 string. This article tells how to resolve this issue properly.

{% include image.html
  src="typeerror-a-bytes-like-object-is-required-when-b64encode.jpg"
  align="left"
  alt="Illustration of the Python's TypeError: a bytes-like object is required, not 'str'"
 %}

## Base64 module in Python and b64encode()/b64decode()
In Python programming language, the standard library has `base64` module responsible for Base64 conversion of strings. It contains multiple encoding/decoding methods for a number of radix conversions.

To convert a string into Base64 representation you have to use `base64.b64encode`. Yet you should convert the input string into bytes representation first, using the standard `encode()` method as shown in the example.

The following example will fail (notice the `˚` UTF character in the source string):
```python
>>> import base64
>>> base64.b64encode('asd˚')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/Library/Frameworks/Python.framework/Versions/3.8/lib/python3.8/base64.py", line 58, in b64encode
    encoded = binascii.b2a_base64(s, newline=False)
TypeError: a bytes-like object is required, not 'str'
```

And here is the solution (such easy!):
```python
>>> import base64
>>> base64.b64encode('asd˚'.encode('utf-8'))
b'YXNky5o='
```

## Learn more
First, I'd recommend to visit [the About page](/about/), where Base64 explained and examples of Base64 conversion in browser shown.
Check out the official [base64 library documentation](https://docs.python.org/3/library/base64.html)
