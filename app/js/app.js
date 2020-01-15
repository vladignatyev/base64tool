var b64 = b64 || {};

b64.errorStrings = {
  'empty': "Please provide either file or text.",
  'filesize': "The file provided is too large.",
  'outputTrimmed': "The output has been truncated. Please use \"Save file...\" or \"Copy to clipboard\" feature."
};

b64.$ = (el) => { return el.querySelector.bind(el); };


if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

b64.AsciiViewer = function (blob, config) {
  this.blob = blob;
  var config = config || {};
  this.trimFirst = config.trimFirst || 64;
  this.trimLast = config.trimLast || 64;

  this.present = (el) => {
    var viewer = this;
    return new Promise((resolve, reject) => {
      var fr = new FileReader();
      fr.addEventListener("loadend", () => {
        var trimmed = fr.result.length > viewer.trimFirst;
        var out = `<pre class="trimFirst">${fr.result.slice(0, viewer.trimFirst)}</pre>`;
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

b64.HexViewer = function (blob, config) {
  this.blob = blob;

  var config = config || {};

  this.cols = config.cols || 16;
  this.trimFirst = config.trimFirst || 64;
  this.trimLast = config.trimLast || 64;

  this.present = (el) => {
    var viewer = this;
    return new Promise((resolve, reject) => {
      var fr = new FileReader();
      fr.addEventListener("loadend", () => viewer._renderHex(el, fr.result).then(() => resolve()));
      fr.readAsArrayBuffer(blob);
    });
  };
  this.present.bind(this);

  this._renderHex = (el, bytes) => {
    var el = el;
    var bytes = new Uint8Array(bytes);

    return new Promise((resolve, reject) => {
      var addr = 0;
      var clsName = 'hexviewer';
      var markup = `<table class="${clsName}">`;

      markup += '<thead><tr><th></th>';
      for (var j = 0; j < this.cols; j++)
        markup += `<th>${j.toString(16).padStart(2, '0')}</th>`;
      markup += '</tr></thead>';

      var i = 0, l = bytes.length;

      var trimmingStartAddr = 0 + this.trimFirst;
      var trimmingEndAddr   = l - 1 - this.trimLast;

      if (trimmingEndAddr < 0) trimmingEndAddr = l - 1;

      while(addr < l) {
        var r = '<tr>';
        var startAddr = `0x${addr.toString(16).padStart(8, '0')}`;

        for(var offset = 0; offset < this.cols && addr + offset < l; offset++) {
          var a = addr + offset;
          var trimmed = (a >= trimmingStartAddr) && (a < trimmingEndAddr);

          if (trimmed) {
            i = trimmingEndAddr + 1;
            r = r + `<tr class="trimmed"><td class="trimmed" colspan="${this.cols + 1}">0x${a.toString(16).padStart(8, '0')}..0x${trimmingEndAddr.toString(16).padStart(8, '0')}</td>`;
            break;
          } else {
            if (offset == 0) {
              r = r + `<td class="addr">${startAddr}</td>`;
            }
            var hexAddr  = '0x' + (a).toString(16).padStart(8, '0');
            var hexValue = (bytes[a]).toString(16).padStart(2, '0');
            var asciiPreview = String.fromCharCode(bytes[a]);

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

b64.InputViewController = function (bus, el) {
  this.FILESIZE_LIMIT = 1024 * 1024 * 8;
  this.el = el;

  this.textInput = b64.$(this.el)("[role=textinput]");
  this.fileInput = b64.$(this.el)("[role=file-drop]");
  this.errorsView = b64.$(this.el)("[role=errors]");

  this.encodeBtn = b64.$(this.el)('[role=encode-btn]');
  this.decodeBtn = b64.$(this.el)('[role=decode-btn]');
  this.restartBtn = b64.$(el)('[role=restart-btn]');

  var bus = bus;
  var controller = this;

  var errors = [];

  this.validateEncode = () => {
    var textInputEmpty = this.textInput.value.trim() === '';
    var fileInputEmpty = this.fileInput.files.length === 0;
    var emptyInput = textInputEmpty && fileInputEmpty;

    if (emptyInput) {
      return ['empty'];
    }

    return true;
  }
  this.validateEncode.bind(this);

  this.validateDecode = this.validateEncode;

  this.clear = () => {
    this.textInput.value = '';
    this.fileInput.value = null;
    this.decodeBtn.disabled = false;
  }
  this.clear.bind(this);

  this.cleanErrors = () => {
    this.errorsView.innerHTML = '';
  }
  this.cleanErrors.bind(this);

  this.renderErrors = (errors) => {
    this.errorsView.innerHTML = errors.map((e) => `<p>${b64.errorStrings[e]}</p>`).join('')
  }
  this.renderErrors.bind(this);

  this.readInputForEncode = () => {
    var blob;
    // var fileInputEmpty = this.fileInput.files.length === 0;
    var textInputEmpty = this.textInput.value.trim() === '';

    if (!textInputEmpty) { // text over file
      blob = new Blob([this.textInput.value]);
    } else {
      blob = new Blob([this.fileInput.files[0]]);
    }

    bus.dispatchEvent(new CustomEvent("encode", {'detail': blob}));
  }
  this.readInputForEncode.bind(this);

  this.readInputForDecode = () => {
    var fileInputEmpty = this.fileInput.files.length === 0;

    if (fileInputEmpty) {
      blob = new Blob([this.textInput.value]);
    } else {
      blob = new Blob([this.fileInput.files[0]]);
    }

    var e = new CustomEvent("decode", {
      'detail': blob
    });
    bus.dispatchEvent(e);
  }
  this.readInputForDecode.bind(this);

  this.init = () => {
    this.restartBtn.addEventListener('click', () => {
      var e = new Event("restart");
      bus.dispatchEvent(e);
    });
    this.fileInput.addEventListener('change', () => this.decodeBtn.disabled = true);
    this.encodeBtn.addEventListener('click', () => {
      var validation = controller.validateEncode();
      if (validation !== true) {
        controller.renderErrors(validation);
        return;
      } else {
        controller.cleanErrors();
      }
      controller.readInputForEncode();
    });

    this.decodeBtn.addEventListener('click', () => {
      var validation = controller.validateDecode();
      if (validation !== true) {
        controller.renderErrors(validation);
        return;
      } else {
        controller.cleanErrors();
      }
      controller.readInputForDecode();
    });
  }
  this.init.bind(this);
};

b64.ResultViewController = function (bus, el) {
  var bus = bus;
  this.el = el;

  this.OUTPUT_MAX_SIZE = 8 * 1024;

  this.binaryPreview = b64.$(el)('[role=binary-preview]');
  this.textPreview = b64.$(el)('[role=text-preview]');
  this.outputView = b64.$(el)('[role=encoding-output]');
  this.notificationView = b64.$(el)('[role=notification]');

  this.encodingResult = undefined;
  this.decodingResult = undefined;

  this.restartBtn = b64.$(el)('[role=restart-btn]');

  this.setOutputIsTrimmed = (trimmed) => {
    if (trimmed) {
      this.notificationView.innerHTML = `<p>${b64.errorStrings['outputTrimmed']}</p>`;
    } else {
      this.notificationView.innerHTML = ``;
    }
  }
  this.setOutputIsTrimmed.bind(this);


  this.renderEncodingResult = (sourceBlob, textResult) => {
    var binaryViewer = new b64.HexViewer(sourceBlob, {trimFirst: 128, trimLast: 128});
    var asciiViewer = new b64.AsciiViewer(sourceBlob);

    binaryViewer.present(this.binaryPreview);
    asciiViewer.present(this.textPreview);

    this.encodingResult = textResult;

    var outputMaxLength = this.OUTPUT_MAX_SIZE;

    if (textResult.length > outputMaxLength) {
      this.outputView.innerText = textResult.slice(0, outputMaxLength) + '...';
      this.setOutputIsTrimmed(true);
    } else {
      this.setOutputIsTrimmed(false);
      this.outputView.innerText = textResult;
    }

  }
  this.renderEncodingResult.bind(this);

  this.renderDecodingResult = (sourceBlob, textResult) => {
    var binaryViewer = new b64.HexViewer(textResult, {trimFirst: 128, trimLast: 128});
    var asciiViewer = new b64.AsciiViewer(textResult);

    binaryViewer.present(this.binaryPreview);
    asciiViewer.present(this.textPreview);

    this.decodingResult = textResult;
    this.outputView.innerText = '';
  }
  this.renderDecodingResult.bind(this);

  this.init = () => {
    this.restartBtn.addEventListener('click', () => {
      var e = new Event("restart");
      bus.dispatchEvent(e);
    });
  }
  this.init.bind(this);
};

b64.ProgressViewController = function(bus, el){
  this.el = el;
  this.volume = undefined;

  this.cancelBtn = b64.$(el)('[role=cancel-btn]');
  this.outputView = b64.$(el)('[role=output-holder]');

  this.updateView = (event) => {
    var newProgress = event.detail;

    var percents = (newProgress * 1.0) / (this.volume * 1.0) * 100.0;
    this.outputView.innerHTML = `<p>${newProgress}/${this.volume} (${percents})</p>`;
  }
  this.updateView.bind(this);

  this.start = (event) => {
    this.volume = event.detail;
    this.outputView.innerHTML = `<p></p>`;
    bus.addEventListener('progress', this.updateView);
    bus.addEventListener('progressEnd', this.end);
  }
  this.start.bind(this);
  this.end = () => {
    bus.removeEventListener('progress', this.updateView);
    bus.removeEventListener('progressEnd', this.end);
    this.volume = undefined;
  }
  this.end.bind(this);

  this.init = () => {
    bus.addEventListener('progressStart', this.start);
    this.cancelBtn.addEventListener('click', () => {
      bus.dispatchEvent(new Event('progressCancel'))
    });
  }
  this.init.bind(this);
}

b64.runWorkerBridge = (worker, blob, bus) => {
  return new Promise((resolve, reject) => {
    var w = new Worker(worker);
    var terminate;
    terminate = () => {
      w.terminate();
      bus.removeEventListener('progressCancel', terminate);
    }
    bus.addEventListener('progressCancel', terminate);

    w.onmessage = (e) => {
      switch(e.data[0]) {
        case 'progress':
          bus.dispatchEvent(new CustomEvent("progress", {detail: e.data[1]}));
        break;
        case 'start':
          bus.dispatchEvent(new CustomEvent("progressStart", {detail: e.data[1]}));
        break;
        case 'error':
          reject(e.data[1]);
        break;
        case 'end':
          bus.dispatchEvent(new CustomEvent("progressEnd"));
          bus.removeEventListener('progressCancel', terminate); // todo
          w.terminate();
          resolve(e.data[1]);
        break;
        case 'beforestart':
          bus.dispatchEvent(new CustomEvent("progressStarted"));
        break;
        default:
          reject(new Error('Unknown message from worker.'));
      }
    };

    w.postMessage([blob]);
  });
}

b64.AppController = function (el){
  var bus = el;

  this.inputViewCtl = new b64.InputViewController(bus, b64.$(el)('[role=input-view]'));
  this.resultViewCtl = new b64.ResultViewController(bus, b64.$(el)('[role=result-view]'));
  this.progressViewCtl = new b64.ProgressViewController(bus, b64.$(el)('[role=progress-view]'));

  this.progressViewCtl.init();

  var controller = this;

  this.presentView = (view) => {
    view.el.classList.remove("b64-hidden");
    return new Promise((resolve, _) => setTimeout(resolve, 300));
  };

  this.hideView = (view) => {
    view.el.classList.add("b64-hidden");
    return new Promise((resolve, _) => setTimeout(resolve, 300));
  };

  this.init = () => {
    this.inputViewCtl.init();
    this.resultViewCtl.init();

    bus.addEventListener("encode", (event) => {
      var blob = event.detail;
      var job = this.presentView(controller.progressViewCtl)
        .then(() => b64.runWorkerBridge('js/encode-worker.js', blob, bus))
        .then((textResult) => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.resultViewCtl.renderEncodingResult(blob, textResult);
          return controller.presentView(controller.resultViewCtl);
        })
        .then(() => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.hideView(controller.inputViewCtl)
        })
        .then(() => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.hideView(controller.progressViewCtl)
        });
      job.rejected = false;
      var cancelJob = () => {
        job.rejected = true;
        controller.hideView(controller.progressViewCtl);
        controller.hideView(controller.resultViewCtl);
        controller.presentView(controller.inputViewCtl); //todo: sequence
        bus.removeEventListener('progressCancel', cancelJob);
      };
      bus.addEventListener('progressCancel', cancelJob);

    });

    bus.addEventListener("decode", (event) => {
      var blob = event.detail;

      var job = this.presentView(controller.progressViewCtl)
        .then(() => b64.runWorkerBridge('js/decode-worker.js', blob, bus))
        .then((textResult) => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.resultViewCtl.renderDecodingResult(blob, textResult);
          return controller.presentView(controller.resultViewCtl);
        })
        .then(() => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.hideView(controller.inputViewCtl)
        })
        .then(() => {
          if (job.rejected) {
            throw new Error('Rejected.');
          }
          controller.hideView(controller.progressViewCtl)
        });
      job.rejected = false;
      var cancelJob = () => {
        job.rejected = true;
        controller.hideView(controller.progressViewCtl);
        controller.hideView(controller.resultViewCtl);
        controller.presentView(controller.inputViewCtl); //todo: sequence
        bus.removeEventListener('progressCancel', cancelJob);
      };
      bus.addEventListener('progressCancel', cancelJob);

    });

    bus.addEventListener("restart", () => {
      controller.inputViewCtl.clear();
      controller.hideView(controller.resultViewCtl).then(() => controller.presentView(controller.inputViewCtl));
    });
  };

  this.init.bind(this);
};

// TODO: extract
window.addEventListener('DOMContentLoaded', () => {
  var view = document.querySelector('[role=b64-app]');
  var vc = new b64.AppController(view);
  vc.init();
});
