---
title: "Uncaught DOMException: Failed to execute 'btoa'
on 'Window': The string to be encoded contains characters outside of the Latin1 range."
subtitle: "How to use btoa and atob with UTF strings?"
tags: ["answers"]
related: false
---

The error occurs when the `btoa` method has been called upon string, containing UTF-8 characters. This article tells how to resolve this issue properly.

{% include image.html
  src="uncaught-dom-exception-failed-to-execute-btoa-on-window.jpg"
  align="left"
  alt="Illustration of the browser error Uncaught DOMException: failed to execute 'btoa' on 'Window'"
 %}

## Btoa and Atob
`btoa` stays for "*B*inary to *A*SCII", and `atob` is short for "*A*SCII to *B*inary". These methods implement the [Base64 encoding](/about/) in modern browsers

Base64 expects binary data as its input, but in Javascript, strings may contain more than one byte per character, as for UTF encodings.

It makes `btoa` and `atob` inappropriate when converting UTF strings without additional moves.

Mozilla recommends the following workaround.

## toBinary() and fromBinary() workaround
In example shown at [`btoa` page at Mozilla Developer's Portal](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa), the workaround is to convert the source string into binary representation first and then pass it into `btoa`.
```javascript
// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}
```
Usage example:
```
> btoa('asd˚')
VM132:1 Uncaught DOMException: Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.
> btoa(toBinary('asd˚'))
"YQBzAGQA2gI="
```

See the full GitHub Gist snippet [toBinary() and fromBinary() workaround to make atob() and btoa() work with UTF strings](https://gist.github.com/vladignatyev/b9792c861f28f75244cfc66769569591).

## Learn more
First, I'd recommend to visit [the About page](/about/), where Base64 explained and examples of Base64 conversion in browser shown.
The next good source of information is the Mozilla's Developer portal, especially [atob()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) and [btoa()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) pages, and further information on this topic present at [the related Mozilla Developer Glossary page](https://developer.mozilla.org/en-US/docs/Glossary/Base64).
