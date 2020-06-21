---
title: "Base64 in every programming language"
subtitle: "Encode Base64 in Python, Golang, PHP and others."
tags: ["tutorial"]
related: false
category: "tutorial"
---

## Python Base64 Encode and Python Base64 Decode: Base64 in Python programming language
Typically, Python is already available in your shell. You may just run `python` and get into Python REPL (Read–eval–print loop). In Linux you may need to install an additional package to run Python shell.
```python
import base64
base64.b64encode('Example string'.encode('utf-8'))  # will output b'RXhhbXBsZSBzdHJpbmc='
base64.b64decode(b'RXhhbXBsZSBzdHJpbmc=') # will output b'Example string'
```

## PHP Base64 Encode and Base64 PHP Decode: Base64 in PHP programming language
Best way to play around with PHP is to use [the official Docker image](https://hub.docker.com/_/php). To run interactive PHP shell from the Docker image, just run `docker run -it --rm php bash -c "php -a"`. This command will download the latest Docker PHP image, then run container from this image in interactive mode, then run `bash` shell and the `php -a` command (PHP interactive mode) in this shell.
Once `> php` interactive welcome appear, you'll be able to play the code below.
```php
$str = 'Example string';
echo base64_encode($str); # will output RXhhbXBsZSBzdHJpbmc=
$encoded = 'RXhhbXBsZSBzdHJpbmc=';
echo base64_decode($encoded); # will output Example string
```

## Golang Base64 Encode and Golang Base64 Decode: Base64 in Go programming language
The following Golang program will encode to base64 the ‘Example string’ and decode the string back. Note the `[]byte(msg)` and `string(decoded)` typecasts. `EncodeToString` expects the array of bytes as an input, and `DecodeString` outputs raw bytes, that’s why we have to apply conversion.
> The official [Golang documentation of the package base64](https://golang.org/pkg/encoding/base64/)

```go
package main

import (
	"encoding/base64"
	"fmt"
)

func main() {
	msg := "Example string"
	encoded := base64.StdEncoding.EncodeToString([]byte(msg))
	fmt.Println(encoded)
	decoded, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		fmt.Println("decode error:", err)
		return
	}
	fmt.Println(string(decoded))
}

```

> Later this page will contain more examples of Base64 encoding and decoding in other modern programming languages: C, C++, C#, Rust, Ruby, Elm, Erlang, Kotlin, Java etc.
