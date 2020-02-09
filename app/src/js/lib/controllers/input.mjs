import { $ } from "../core.mjs"
import { errorStrings } from "../errors.mjs"


export const InputViewController = function (bus, el) {
  this.FILESIZE_LIMIT = 1024 * 1024 * 128;
  this.el = el;

  this.textInput = $(el)("[role=textinput]");
  this.fileInput = $(el)("[role=file-drop]");
  this.errorsView = $(el)("[role=errors]");

  this.encodeBtn = $(el)('[role=encode-btn]');
  this.decodeBtn = $(el)('[role=decode-btn]');
  this.restartBtn = $(el)('[role=restart-btn]');

  // let bus = bus;
  let controller = this;

  let errors = [];

  this.validateEncode = () => {
    let textInputEmpty = this.textInput.value.trim() === '';
    let fileInputEmpty = this.fileInput.files.length === 0;
    let emptyInput = textInputEmpty && fileInputEmpty;

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
    this.errorsView.innerHTML = errors.map((e) => `<p>${errorStrings[e]}</p>`).join('')
  }
  this.renderErrors.bind(this);

  this.readInputForEncode = () => {
    let blob;
    if (typeof this.fileInput.files[0] != 'undefined') {
      blob = new Blob([this.fileInput.files[0]]);
    } else {
      blob = new Blob([this.textInput.value]);
    }

    if (blob.size > this.FILESIZE_LIMIT) {
      this.renderErrors(['filesize']);
    } else if (blob.size == 0) {
      this.renderErrors(['zerofilesize']);
    } else {
      bus.dispatchEvent(new CustomEvent("encode", {'detail': blob}));
    }
  }
  this.readInputForEncode.bind(this);

  this.readInputForDecode = () => {
    let fileInputEmpty = this.fileInput.files.length === 0;

    let blob;
    if (fileInputEmpty) {
      blob = new Blob([this.textInput.value]);
    } else {
      blob = new Blob([this.fileInput.files[0]]);
    }

    let e = new CustomEvent("decode", {
      'detail': blob
    });
    bus.dispatchEvent(e);
  }
  this.readInputForDecode.bind(this);

  this.init = () => {
    this.restartBtn.addEventListener('click', () => {
      let e = new Event("restart");
      controller.cleanErrors();
      bus.dispatchEvent(e);
    });
    this.fileInput.addEventListener('change', () => this.decodeBtn.disabled = true);
    this.encodeBtn.addEventListener('click', () => {
      // let validation = controller.validateEncode();
      // if (validation !== true) {
      //   controller.renderErrors(validation);
      //   return;
      // } else {
      //   controller.cleanErrors();
      // }
      controller.readInputForEncode();


    });

    this.decodeBtn.addEventListener('click', () => {
      let validation = controller.validateDecode();
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
