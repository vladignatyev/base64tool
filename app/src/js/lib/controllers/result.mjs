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

  this.encodingResult = undefined;
  this.decodingResult = undefined;

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

    this.encodingResult = textResult.slice(0, outputMaxLength);

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

    this.decodingResult = textResult;
    this.outputView.innerText = '';
  }
  this.renderDecodingResult.bind(this);

  this.init = () => {
    this.restartBtn.addEventListener('click', () => {
      let e = new Event("restart");
      bus.dispatchEvent(e);
    });
  }
  this.init.bind(this);
};
