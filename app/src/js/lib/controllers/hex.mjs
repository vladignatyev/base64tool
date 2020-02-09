export const HexViewer = function (blob, config) {
  this.blob = blob;

  var config = config || {};

  this.cols = config.cols || 16;
  this.trimFirst = config.trimFirst || 64;
  this.trimLast = config.trimLast || 64;

  this.present = (el) => {
    let viewer = this;
    return new Promise((resolve, reject) => {
      let fr = new FileReader();
      fr.addEventListener("loadend", () => viewer._renderHex(el, fr.result).then(() => resolve()));
      fr.readAsArrayBuffer(blob);
    });
  };
  this.present.bind(this);

  this._renderHex = (el, bytes) => {
    let bytesArr = new Uint8Array(bytes);

    return new Promise((resolve, reject) => {
      var addr = 0;
      var clsName = 'hexviewer';
      var markup = `<table class="${clsName}">`;

      markup += '<thead><tr><th></th>';
      for (let j = 0; j < this.cols; j++)
        markup += `<th>${j.toString(16).padStart(2, '0')}</th>`;
      markup += '</tr></thead>';

      let i = 0, l = bytesArr.length;

      let trimmingStartAddr = 0 + this.trimFirst;
      let trimmingEndAddr   = l - 1 - this.trimLast;

      if (trimmingEndAddr < 0) trimmingEndAddr = l - 1;

      while(addr < l) {
        let r = '<tr>';
        let startAddr = `0x${addr.toString(16).padStart(8, '0')}`;

        for(let offset = 0; offset < this.cols && addr + offset < l; offset++) {
          let a = addr + offset;
          let trimmed = (a >= trimmingStartAddr) && (a < trimmingEndAddr);

          if (trimmed) {
            i = trimmingEndAddr + 1;
            r = r + `<tr class="trimmed"><td class="trimmed" colspan="${this.cols + 1}">0x${a.toString(16).padStart(8, '0')}..0x${trimmingEndAddr.toString(16).padStart(8, '0')}</td>`;
            break;
          } else {
            if (offset == 0) {
              r = r + `<td class="addr">${startAddr}</td>`;
            }
            let hexAddr  = '0x' + (a).toString(16).padStart(8, '0');
            let hexValue = (bytesArr[a]).toString(16).padStart(2, '0');
            let asciiPreview = String.fromCharCode(bytesArr[a]);

            r = r + `<td data-addr="${hexAddr}" data-ascii="${asciiPreview}">${hexValue}</td>`;
            i++;
          }
        }
        addr = i;
        r = r + '</tr>';
        markup = markup + r;
      }

      markup = markup + '</table>';

      el.innerHTML = markup;

      resolve();
    });
  };
  this._renderHex.bind(this);
};
