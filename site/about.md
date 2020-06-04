---
title: About
subtitle:
width: small
---

This tool was created to provide an ultimate GUI tool for encoding and decoding binary data, files and assets to and from `base64` encoding.

Base64 Encoding is a family of encodings, supposed to safely transmit binary data across machines. Base64 turns any binary stream (bytes from `0x00` to `0xFF`) into ASCII stream (characters from `0` to `9`, from `A` to `Z`, `a` to `z`, `=` and `/`). Base64 encoded data can be read through any text terminal, by people or machines, transmitted over HTTP etc.

If you try to find the easiest way of converting `base16/32/64` representations you’ll get a tons of information, that makes difficulties in understanding the problem that `base*` family encodings deal with. Probably, you’ll find some online tools, similar to this one, tutorials, Q&A at the Stackoverflow or other community websites, code libraries and packages. Take the NPM as an example:
{% include image.html
  src="npm-base64-encoding-and-decoding-packages.png"
  caption="NPM: Base64 Encoding And Decoding Packages as of year 2020"
  align="left"
  alt="NPM: Base64 Encoding And Decoding Packages as of year 2020."
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
 %}
NPM has a bunch of _1499 packages_ (😲): tools and libraries implementing the variety of base64 encoding/decoding algorithms and wrappers for every need.

Such enormous diversity of tools along with more broader set of applications for radix conversion and base*-family, makes a challenge to every software engineer who simply needs ”binary to ASCII” and back in his project.

Additionally, when implementing your own application or the website you may find challenging the debugging and investigating problems those may appear due to *incorrect implementation or unsupported boundary cases*.

## Short example of the boundary case
For example, if you make a web application, your code may rely on `btoa`/`atob` function in Javascript.

This code snippet will convert a binary data (the string “asdß”) into Base64-encoded string:
```js
> btoa('asdß')
"YXNk3w=="
```
For some reason, the following, the same snippet, but different input, containing UTF-8 character (notice the ˚ symbol), will 🐛 fail in Chrome browser:
```
> btoa('asd˚')
Uncaught DOMException:
Failed to execute 'btoa' on 'Window':
The string to be encoded contains characters
outside of the Latin1 range.
```

If you run the snippet below in your Terminal on Mac, you probably get the right result:
```bash
$ echo 'asd˚' | base64
YXNky5oK
```
> This snippet uses `base64` BSD command-line tool, the part of the standard Mac OS X distribution

*Implementing a correct and error-prone code is tricky.* Every encoding/decoding is crafty, because it requires the correct specification first, and the correct implementation second, built upon this specification.

# Use cases
## Part of the web development workflow
One of the most popular use-cases for Base64 encoding is an embedding (“inlining”) of JPG/PNG/SVG images into HTML or CSS files. The goal is to make images appear on the webpage without additional HTTP requests to server. Such method is used to deliver logos, icons or small images to browser client and to make loading and the first rendering faster.

Let's take this pattern from Background-Tiles.com as an example website background.

{% include image.html
  src="1020-pattern-preview.jpg"
  caption="White Hexagons Pattern 20"
  align="left"
  alt="White Hexagons Pattern 20"
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
 %}

Example #1:
```css
.pattern {
  background: url(https://base64tool.com/uploads/1020.png);
  background-repeat: repeat-x repeat-y;
}
```
Example #2, Code using embedding technique:
```css
.pattern {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAACQCAIAA...);
  background-repeat: repeat-x repeat-y;
}
```
What happens in the example #2?
1. Special attributes tells the browser, that provided string is a Base64 encoded binary data
2. Therefore the browser decodes the data first back into PNG image in memory
3. Then he parses PNG format
4. And then, finally, he draw pixels of image on the corresponding block in the website layout.

Since the browser has the image already loaded along with CSS, there is no need to run new HTTP request again. Load time decreases, rendering time decreases, the user engagement increases!

Inlining small images considered as one of best practices for optimising page load speed.

## Other applications
Another examples of Base64 encoding and decoding, that most of time works behind the scenes:

1. E-mail messages sent as a MIME encoded strings.
2. SSL certificates for webservers are PEM base64 encoded stream of DER encoded structured binary data.
3. The Bitcoin address is a Base52 encoded binary stream of the public key and the checksum.

Base64 is around you. Everywhere when you need to transmit binary data over ASCII (“text”) channels, base* family encodings come to help.

# Problem and solution
As shown above, the Base16/32/64 and other base-family encodings is a great good. But using Base64 is not so easy.

Every time you need to convert asset to Base64, you have only few options:
1. Call CLI tool manually every time. 😭
2. Make Base64 converting a build step in your Webpack / another bundling system. 🦸‍♂️
3. 💁‍♀️ Use another (free) GUI tools.

Using CLI becomes annoying quickly, because command-line interface is error-prone, requires advanced knowledge and typing commands on the keyboard. Lots of developers prefer powerful GUI tools over CLI tools for almost every development task: code editing, debugging and profiling; building and publishing software or libraries; working with versioning systems, etc.

Making Base64 conversion automatic in the build process is rarely used, but possible. Look at [“How to optimize images in Webpack” article](https://iamakulov.com/notes/optimize-images-webpack/) by Ivan Akulov.

In most cases automating of the encoding and decoding is not required or leads to significant overhead during development.

Existing online tools those easily searched in Google are lacking of modern user experience and, basically, they’re lacking of awesomeness!

The solution is straightforward: the Ultimate Base64 Tool, suitable for big files, all-way encoding with simple yet powerful GUI, that doesn't transmit anything over network for much better performance. This is how the website was born.
