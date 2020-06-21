/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decode.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/decode.worker.js":
/*!******************************!*\
  !*** ./src/decode.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("self.addEventListener('message', (e) => {\n  alphabetBase64    = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\n  reBase64 = /^(?:[A-Za-z\\d+\\/]{4})*?(?:[A-Za-z\\d+\\/]{2}(?:==)?|[A-Za-z\\d+\\/]{3}=?)?$/;\n\n  let blob = e.data[0];\n\n  handleDataConsumed = (event) => {\n    let s = new Uint8Array(event.target.result);\n\n    // atob can work with strings with whitespaces, even inside the encoded part,\n    // but only \\t, \\n, \\f, \\r and ' ', which can be stripped.\n    let string = String(fr.result).replace(/[\\t\\n\\f\\r ]+/g, \"\");\n    if (!reBase64.test(string))\n      postMessage(['error', new TypeError(\"The string to be decoded is not correctly encoded.\")]);\n\n    // Adding the padding if missing, for simplicity\n    string += \"==\".slice(2 - (string.length & 3));\n    postMessage(['start', string.length]);\n\n    let bitmap, result = [],\n        r1, r2, i = 0;\n    for (; i < string.length;) {\n        bitmap = alphabetBase64.indexOf(string.charAt(i++)) << 18 | alphabetBase64.indexOf(string.charAt(i++)) << 12 |\n            (r1 = alphabetBase64.indexOf(string.charAt(i++))) << 6 | (r2 = alphabetBase64.indexOf(string.charAt(i++)));\n\n            if (r1 === 64) result.push(bitmap >> 16 & 255);\n            else if (r2 === 64){ result.push(bitmap >> 16 & 255); result.push(bitmap >> 8 & 255); }\n            else { result.push(bitmap >> 16 & 255); result.push(bitmap >> 8 & 255); result.push(bitmap & 255); }\n        if ((i % (256 * 1024)) == 0) {\n          postMessage(['progress', i]);\n        }\n    }\n    let out = new Blob([new Uint8Array(result)]);\n    postMessage(['end', out]);\n  }\n\n  let fr = new FileReader(blob);\n  fr.addEventListener(\"loadend\", handleDataConsumed);\n  fr.readAsBinaryString(blob);\n\n  postMessage(['beforestart', undefined]);\n});\n\n\n//# sourceURL=webpack://b64app/./src/decode.worker.js?");

/***/ })

/******/ });