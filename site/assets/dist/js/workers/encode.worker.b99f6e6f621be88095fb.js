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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/encode.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/encode.worker.js":
/*!******************************!*\
  !*** ./src/encode.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("self.addEventListener('message', (e) => {\n  const alphabetBase64    = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\n  const reBase64 = /^(?:[A-Za-z\\d+\\/]{4})*?(?:[A-Za-z\\d+\\/]{2}(?:==)?|[A-Za-z\\d+\\/]{3}=?)?$/;\n\n  let blob = e.data[0];\n\n  handleDataConsumed = (event) => {\n    let s = new Uint8Array(event.target.result);\n\n    postMessage(['start', s.length]);\n\n    // this code based on polyfill from https://github.com/MaxArt2501/base64-js/blob/master/base64.js\n    // mentioned at https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa\n    let bitmap, a, b, c,\n        result,\n        i = 0,\n        j = 0,\n        rest = s.length % 3; // To determine the final padding\n\n    // result = new Array(Math.ceil(s.length / 3) | 0);\n    result = \"\";\n\n    let k = 0;\n\n    for (; i < s.length;) {\n        a = s[i++];\n        b = s[i++];\n        c = s[i++];\n        bitmap = (a << 16) | (b << 8) | c;\n        // result[k] = alphabetBase64.charAt(bitmap >> 18 & 63) + alphabetBase64.charAt(bitmap >> 12 & 63) +\n        //     alphabetBase64.charAt(bitmap >> 6 & 63) + alphabetBase64.charAt(bitmap & 63);\n        // k++;\n\n        result += alphabetBase64.charAt(bitmap >> 18 & 63) + alphabetBase64.charAt(bitmap >> 12 & 63) +\n            alphabetBase64.charAt(bitmap >> 6 & 63) + alphabetBase64.charAt(bitmap & 63);\n\n        if ((i % (256 * 1024)) == 0) {\n          postMessage(['progress', i]);\n        }\n\n    }\n    // let res2 = result.join('');\n    let res2 = result;\n    let out = rest ? res2.slice(0, rest - 3) + \"===\".substring(rest) : res2;\n\n    postMessage(['end', out]);\n  };\n\n  let fr = new FileReader(blob);\n  fr.addEventListener(\"loadend\", handleDataConsumed);\n  fr.readAsArrayBuffer(blob);\n\n  postMessage(['beforestart', undefined]);\n});\n\n\n//# sourceURL=webpack://b64app/./src/encode.worker.js?");

/***/ })

/******/ });