export const runWorkerBridge = (worker, blob, bus) => {
  return new Promise((resolve, reject) => {
    let w = worker;

    let terminate;
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
