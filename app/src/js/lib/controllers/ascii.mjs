export const AsciiViewer = function (blob, config) {
  this.blob = blob;
  var config = config || {};
  this.trimFirst = config.trimFirst || 64;
  this.trimLast = config.trimLast || 64;

  this.present = (el) => {
    let viewer = this;
    return new Promise((resolve, reject) => {
      let fr = new FileReader();
      fr.addEventListener("loadend", () => {
        let trimmed = fr.result.length > viewer.trimFirst;
        let out = `<pre class="trimFirst">${fr.result.slice(0, viewer.trimFirst)}</pre>`;
        if (trimmed) {
          out = out + '<pre class="delimiter">...</pre>';
          out = out + `<pre class="trimLast">${fr.result.slice(-viewer.trimLast)}</pre>`;
        }

        el.innerHTML =  out;
      });
      fr.readAsText(blob);
    });
  };
  this.present.bind(this);
};
