import { $ } from "../core.mjs"
import { errorStrings } from "../errors.mjs"

import { AsciiViewer } from "./ascii.mjs"
import { HexViewer } from "./hex.mjs"


export const ResultViewController = function (bus, el) {
  this.el = el;

  this.OUTPUT_MAX_SIZE = 64;

  this.binaryPreview = $(el)('[role=binary-preview]');
  this.textPreview = $(el)('[role=text-preview]');
  this.outputView = $(el)('[role=encoding-output]');
  this.notificationView = $(el)('[role=notification]');

  this.copyToClipboardBtn = $(el)('[role=save-clipboard-btn]');
  this.saveFileBtn = $(el)('[role=save-file-btn]');

  this.operationResult = undefined;

  this.restartBtn = $(el)('[role=restart-btn]');



  this.setOutputIsTrimmed = (trimmed) => {
    if (trimmed) {
      this.notificationView.innerHTML = `<p>${errorStrings['outputTrimmed']}</p>`;
    } else {
      this.notificationView.innerHTML = ``;
    }
  }
  this.setOutputIsTrimmed.bind(this);


  this.renderEncodingResult = (sourceBlob, textResult) => {
    let binaryViewer = new HexViewer(sourceBlob, {trimFirst: 128, trimLast: 128});
    let asciiViewer = new AsciiViewer(sourceBlob);

    binaryViewer.present(this.binaryPreview);
    asciiViewer.present(this.textPreview);


    let outputMaxLength = this.OUTPUT_MAX_SIZE;

    this.operationResult = ["encoded", new Blob([textResult], {type: 'text/plain'})];

    this.copyToClipboardBtn.disabled = false;
    this.saveFileBtn.disabled = false;

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
    let binaryViewer = new HexViewer(textResult, {trimFirst: 128, trimLast: 128});
    let asciiViewer = new AsciiViewer(textResult);

    binaryViewer.present(this.binaryPreview);
    asciiViewer.present(this.textPreview);

    this.copyToClipboardBtn.disabled = true;
    this.saveFileBtn.disabled = false;

    this.operationResult = ["decoded", new Blob([textResult], { type: 'application/octet-stream' })];

    this.outputView.innerText = '';
  }
  this.renderDecodingResult.bind(this);

  this.init = () => {
    this.copyToClipboardBtn.disabled = true;
    this.saveFileBtn.disabled = true;

    this.restartBtn.addEventListener('click', () => {
      let e = new Event("restart");
      this.copyToClipboardBtn.disabled = true;
      this.saveFileBtn.disabled = true;

      bus.dispatchEvent(e);
    });

    this.copyToClipboardBtn.addEventListener('click', () => {
      let item = {};
      item[this.operationResult[1].type] = this.operationResult[1];
      navigator.clipboard.write([ new ClipboardItem(item) ]);
    });

    this.saveFileBtn.addEventListener('click', () => {
      let saver = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
      let blobURL = saver.href = URL.createObjectURL(this.operationResult[1]);
      if (this.operationResult[0] == 'encoded') {
        saver.download = 'result.base64.txt';
      } else {
        saver.download = 'result.base64.bin';
      }

      document.body.appendChild(saver);
      saver.dispatchEvent(new MouseEvent("click"));
      document.body.removeChild(saver);

      // TODO:
    });

    let self = this;
  }
  this.init.bind(this);
};
