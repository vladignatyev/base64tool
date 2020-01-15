onmessage = function(e) {
  alphabetBase64    = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  reBase64 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

  var blob = e.data[0];

  handleDataConsumed = (event) => {
    var s = new Uint8Array(event.target.result);

    postMessage(['start', s.length]);

    // this code based on polyfill from https://github.com/MaxArt2501/base64-js/blob/master/base64.js
    // mentioned at https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
    var bitmap, a, b, c,
        result,
        i = 0,
        j = 0,
        rest = s.length % 3; // To determine the final padding

    result = "";

    for (; i < s.length;) {
        a = s[i++];
        b = s[i++];
        c = s[i++];
        bitmap = (a << 16) | (b << 8) | c;
        result += alphabetBase64.charAt(bitmap >> 18 & 63) + alphabetBase64.charAt(bitmap >> 12 & 63) +
            alphabetBase64.charAt(bitmap >> 6 & 63) + alphabetBase64.charAt(bitmap & 63);

        if ((i % (256 * 1024)) == 0) {
          postMessage(['progress', i]);
        }

    }

    var out = rest ? result.slice(0, rest - 3) + "===".substring(rest) : result;

    postMessage(['end', out]);
  };

  var fr = new FileReader(blob);
  fr.addEventListener("loadend", handleDataConsumed);
  fr.readAsArrayBuffer(blob);

  postMessage(['beforestart', undefined]);
}
