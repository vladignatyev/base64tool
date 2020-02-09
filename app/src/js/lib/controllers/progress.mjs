import { $ } from "../core.mjs"
import { errorStrings } from "../errors.mjs"


export const ProgressViewController = function(bus, el){
  this.el = el;
  this.volume = undefined;

  this.cancelBtn = $(el)('[role=cancel-btn]');
  this.outputView = $(el)('[role=output-holder]');

  this.updateView = (event) => {
    let newProgress = event.detail;

    let percents = (newProgress * 1.0) / (this.volume * 1.0) * 100.0;
    this.outputView.innerHTML = `<p>${newProgress}/${this.volume} (${percents})</p>`;
  }
  this.updateView.bind(this);

  this.start = (event) => {
    this.volume = event.detail;
    this.outputView.innerHTML = `<p></p>`;
    this.cancelBtn.style.opacity = '1.0';
    bus.addEventListener('progress', this.updateView);
    bus.addEventListener('progressEnd', this.end);
  }
  this.start.bind(this);

  this.end = () => {
    this.cancelBtn.style.opacity = '0.0';
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
