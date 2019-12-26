onmessage = function(e) {
  alphabetBase64    = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  reBase64 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

  var blob = e.data[0];

  handleDataConsumed = () => {
    // atob can work with strings with whitespaces, even inside the encoded part,
    // but only \t, \n, \f, \r and ' ', which can be stripped.
    var string = String(fr.result).replace(/[\t\n\f\r ]+/g, "");
    if (!reBase64.test(string))
        reject(new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded."));

    // Adding the padding if missing, for semplicity
    string += "==".slice(2 - (string.length & 3));
    var bitmap, result = [],
        r1, r2, i = 0;
    for (; i < string.length;) {
        bitmap = alphabetBase64.indexOf(string.charAt(i++)) << 18 | alphabetBase64.indexOf(string.charAt(i++)) << 12 |
            (r1 = alphabetBase64.indexOf(string.charAt(i++))) << 6 | (r2 = alphabetBase64.indexOf(string.charAt(i++)));

            if (r1 === 64) result.push(bitmap >> 16 & 255);
            else if (r2 === 64){ result.push(bitmap >> 16 & 255); result.push(bitmap >> 8 & 255); }
            else { result.push(bitmap >> 16 & 255); result.push(bitmap >> 8 & 255); result.push(bitmap & 255); }
    }
    resolve(new Blob([new Uint8Array(result)]));
  }

  var fr = new FileReader(blob);
  fr.addEventListener("loadend", handleDataConsumed);
  fr.readAsBinaryString(blob);

}
