export const $ = (el) => { return el.querySelector.bind(el); };

String.prototype.trim = () => String(this).replace(/^\s+|\s+$/g, '');
