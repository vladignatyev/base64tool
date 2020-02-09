import '../style.sass';

import { $ } from "./lib/core.mjs"

import { InputViewController } from "./lib/controllers/input.mjs"
import { ResultViewController } from "./lib/controllers/result.mjs"
import { ProgressViewController } from "./lib/controllers/progress.mjs"

import { runWorkerBridge } from "./lib/bridge.mjs"

import EncodeWorker from "./encode.worker.js"
import DecodeWorker from "./decode.worker.js"


export const AppController = function (el){
  let bus = el;

  this.inputViewCtl = new InputViewController(bus, $(el)('[role=input-view]'));
  this.resultViewCtl = new ResultViewController(bus, $(el)('[role=result-view]'));
  this.progressViewCtl = new ProgressViewController(bus, $(el)('[role=progress-view]'));

  this.progressViewCtl.init();

  let controller = this;

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
    bus.addEventListener("error", (event) => {
      alert("ERROR");
    });
    bus.addEventListener("encode", (event) => {
      let blob = event.detail;
      let job = this.presentView(controller.progressViewCtl)
        .then(() => runWorkerBridge(new EncodeWorker(), blob, bus))
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
          controller.hideView(controller.progressViewCtl);
          controller.hideView(controller.inputViewCtl);
        });

      job.rejected = false;

      let cancelJob = () => {
        job.rejected = true;
        controller.hideView(controller.progressViewCtl);
        controller.hideView(controller.resultViewCtl);
        controller.presentView(controller.inputViewCtl);
        bus.removeEventListener('progressCancel', cancelJob);
      };
      bus.addEventListener('progressCancel', cancelJob);

    });

    bus.addEventListener("decode", (event) => {
      let blob = event.detail;

      let job = this.presentView(controller.progressViewCtl)
        .then(() => runWorkerBridge(new DecodeWorker(), blob, bus))
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
      let cancelJob = () => {
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
