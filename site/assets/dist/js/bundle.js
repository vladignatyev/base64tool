var b64app =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/css/style.sass":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/ignatev/Projects/base64/node_modules/mini-css-extract-plugin/dist/loader.js!/Users/ignatev/Projects/base64/node_modules/css-loader/dist/cjs.js!/Users/ignatev/Projects/base64/node_modules/sass-loader/dist/cjs.js!./src/css/style.sass ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://b64app/./src/css/style.sass?/Users/ignatev/Projects/base64/node_modules/mini-css-extract-plugin/dist/loader.js!/Users/ignatev/Projects/base64/node_modules/css-loader/dist/cjs.js!/Users/ignatev/Projects/base64/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************!*\
  !*** /Users/ignatev/Projects/base64/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://b64app//Users/ignatev/Projects/base64/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppController\", function() { return AppController; });\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.sass */ \"./src/css/style.sass\");\n/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_core_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core.mjs */ \"./src/lib/core.mjs\");\n/* harmony import */ var _lib_controllers_input_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/controllers/input.mjs */ \"./src/lib/controllers/input.mjs\");\n/* harmony import */ var _lib_controllers_result_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/controllers/result.mjs */ \"./src/lib/controllers/result.mjs\");\n/* harmony import */ var _lib_controllers_progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/controllers/progress.mjs */ \"./src/lib/controllers/progress.mjs\");\n/* harmony import */ var _lib_bridge_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/bridge.mjs */ \"./src/lib/bridge.mjs\");\n/* harmony import */ var _encode_worker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encode.worker.js */ \"./src/encode.worker.js\");\n/* harmony import */ var _encode_worker_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_encode_worker_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _decode_worker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decode.worker.js */ \"./src/decode.worker.js\");\n/* harmony import */ var _decode_worker_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_decode_worker_js__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst AppController = function (el){\n  let bus = el;\n\n  this.inputViewCtl = new _lib_controllers_input_mjs__WEBPACK_IMPORTED_MODULE_2__[\"InputViewController\"](bus, Object(_lib_core_mjs__WEBPACK_IMPORTED_MODULE_1__[\"$\"])(el)('[role=input-view]'));\n  this.resultViewCtl = new _lib_controllers_result_mjs__WEBPACK_IMPORTED_MODULE_3__[\"ResultViewController\"](bus, Object(_lib_core_mjs__WEBPACK_IMPORTED_MODULE_1__[\"$\"])(el)('[role=result-view]'));\n  this.progressViewCtl = new _lib_controllers_progress_mjs__WEBPACK_IMPORTED_MODULE_4__[\"ProgressViewController\"](bus, Object(_lib_core_mjs__WEBPACK_IMPORTED_MODULE_1__[\"$\"])(el)('[role=progress-view]'));\n\n  this.progressViewCtl.init();\n\n  let controller = this;\n\n  this.presentView = (view) => {\n    view.el.classList.remove(\"b64-hidden\");\n    return new Promise((resolve, _) => setTimeout(resolve, 300));\n  };\n\n  this.hideView = (view) => {\n    view.el.classList.add(\"b64-hidden\");\n    return new Promise((resolve, _) => setTimeout(resolve, 300));\n  };\n\n  this.init = () => {\n    this.inputViewCtl.init();\n    this.resultViewCtl.init();\n    bus.addEventListener(\"error\", (event) => {\n      alert(\"Unknown error has occured. Try again.\");\n    });\n    bus.addEventListener(\"encode\", (event) => {\n      let blob = event.detail;\n      let job = this.presentView(controller.progressViewCtl)\n        .then(() => Object(_lib_bridge_mjs__WEBPACK_IMPORTED_MODULE_5__[\"runWorkerBridge\"])(new _encode_worker_js__WEBPACK_IMPORTED_MODULE_6___default.a(), blob, bus))\n        .then((textResult) => {\n          if (job.rejected) {\n            throw new Error('Rejected.');\n          }\n          controller.resultViewCtl.renderEncodingResult(blob, textResult);\n          return controller.presentView(controller.resultViewCtl);\n        })\n        .then(() => {\n          if (job.rejected) {\n            throw new Error('Rejected.');\n          }\n          controller.hideView(controller.progressViewCtl);\n          controller.hideView(controller.inputViewCtl);\n        });\n\n      job.rejected = false;\n\n      let cancelJob = () => {\n        job.rejected = true;\n        controller.hideView(controller.progressViewCtl);\n        controller.hideView(controller.resultViewCtl);\n        controller.presentView(controller.inputViewCtl);\n        bus.removeEventListener('progressCancel', cancelJob);\n      };\n      bus.addEventListener('progressCancel', cancelJob);\n\n    });\n\n    bus.addEventListener(\"decode\", (event) => {\n      let blob = event.detail;\n\n      let job = this.presentView(controller.progressViewCtl)\n        .then(() => Object(_lib_bridge_mjs__WEBPACK_IMPORTED_MODULE_5__[\"runWorkerBridge\"])(new _decode_worker_js__WEBPACK_IMPORTED_MODULE_7___default.a(), blob, bus))\n        .then((textResult) => {\n          if (job.rejected) {\n            throw new Error('Rejected.');\n          }\n          controller.resultViewCtl.renderDecodingResult(blob, textResult);\n          return controller.presentView(controller.resultViewCtl);\n        })\n        .then(() => {\n          if (job.rejected) {\n            throw new Error('Rejected.');\n          }\n          controller.hideView(controller.inputViewCtl)\n        })\n        .then(() => {\n          if (job.rejected) {\n            throw new Error('Rejected.');\n          }\n          controller.hideView(controller.progressViewCtl)\n        });\n      job.rejected = false;\n      let cancelJob = () => {\n        job.rejected = true;\n        controller.hideView(controller.progressViewCtl);\n        controller.hideView(controller.resultViewCtl);\n        controller.presentView(controller.inputViewCtl); //todo: sequence\n        bus.removeEventListener('progressCancel', cancelJob);\n      };\n      bus.addEventListener('progressCancel', cancelJob);\n\n    });\n\n    bus.addEventListener(\"restart\", () => {\n      controller.inputViewCtl.clear();\n      controller.hideView(controller.resultViewCtl).then(() => controller.presentView(controller.inputViewCtl));\n    });\n  };\n\n  this.init.bind(this);\n};\n\n\n//# sourceURL=webpack://b64app/./src/app.js?");

/***/ }),

/***/ "./src/css/style.sass":
/*!****************************!*\
  !*** ./src/css/style.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/css/style.sass\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://b64app/./src/css/style.sass?");

/***/ }),

/***/ "./src/decode.worker.js":
/*!******************************!*\
  !*** ./src/decode.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n  return new Worker(\"assets/dist/\" + \"js/workers/decode.worker.f1f7df8dab82a0f962ff.js\");\n};\n\n//# sourceURL=webpack://b64app/./src/decode.worker.js?");

/***/ }),

/***/ "./src/encode.worker.js":
/*!******************************!*\
  !*** ./src/encode.worker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n  return new Worker(\"assets/dist/\" + \"js/workers/encode.worker.a446fd8117a1368b8a13.js\");\n};\n\n//# sourceURL=webpack://b64app/./src/encode.worker.js?");

/***/ }),

/***/ "./src/lib/bridge.mjs":
/*!****************************!*\
  !*** ./src/lib/bridge.mjs ***!
  \****************************/
/*! exports provided: runWorkerBridge */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runWorkerBridge\", function() { return runWorkerBridge; });\nconst runWorkerBridge = (worker, blob, bus) => {\n  return new Promise((resolve, reject) => {\n    let w = worker;\n\n    let terminate;\n    terminate = () => {\n      w.terminate();\n      bus.removeEventListener('progressCancel', terminate);\n    }\n    bus.addEventListener('progressCancel', terminate);\n\n    w.onmessage = (e) => {\n      switch(e.data[0]) {\n        case 'progress':\n          bus.dispatchEvent(new CustomEvent(\"progress\", {detail: e.data[1]}));\n        break;\n        case 'start':\n          bus.dispatchEvent(new CustomEvent(\"progressStart\", {detail: e.data[1]}));\n        break;\n        case 'error':\n          reject(e.data[1]);\n        break;\n        case 'end':\n          bus.dispatchEvent(new CustomEvent(\"progressEnd\"));\n          bus.removeEventListener('progressCancel', terminate); // todo\n          w.terminate();\n          resolve(e.data[1]);\n        break;\n        case 'beforestart':\n          bus.dispatchEvent(new CustomEvent(\"progressStarted\"));\n        break;\n        default:\n          reject(new Error('Unknown message from worker.'));\n      }\n    };\n\n    w.postMessage([blob]);\n  });\n}\n\n\n//# sourceURL=webpack://b64app/./src/lib/bridge.mjs?");

/***/ }),

/***/ "./src/lib/controllers/ascii.mjs":
/*!***************************************!*\
  !*** ./src/lib/controllers/ascii.mjs ***!
  \***************************************/
/*! exports provided: AsciiViewer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AsciiViewer\", function() { return AsciiViewer; });\nconst AsciiViewer = function (blob, config) {\n  this.blob = blob;\n  var config = config || {};\n  this.trimFirst = config.trimFirst || 64;\n  this.trimLast = config.trimLast || 64;\n\n  this.present = (el) => {\n    let viewer = this;\n    return new Promise((resolve, reject) => {\n      let fr = new FileReader();\n      fr.addEventListener(\"loadend\", () => {\n        let trimmed = fr.result.length > viewer.trimFirst;\n        let out = `<pre class=\"trimFirst\">${fr.result.slice(0, viewer.trimFirst)}</pre>`;\n        if (trimmed) {\n          out = out + '<pre class=\"delimiter\">...</pre>';\n          out = out + `<pre class=\"trimLast\">${fr.result.slice(-viewer.trimLast)}</pre>`;\n        }\n\n        el.innerHTML =  out;\n      });\n      fr.readAsText(blob);\n    });\n  };\n  this.present.bind(this);\n};\n\n\n//# sourceURL=webpack://b64app/./src/lib/controllers/ascii.mjs?");

/***/ }),

/***/ "./src/lib/controllers/hex.mjs":
/*!*************************************!*\
  !*** ./src/lib/controllers/hex.mjs ***!
  \*************************************/
/*! exports provided: HexViewer */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HexViewer\", function() { return HexViewer; });\nconst HexViewer = function (blob, config) {\n  this.blob = blob;\n\n  var config = config || {};\n\n  this.cols = config.cols || 16;\n  this.trimFirst = config.trimFirst || 64;\n  this.trimLast = config.trimLast || 64;\n\n  this.present = (el) => {\n    let viewer = this;\n    return new Promise((resolve, reject) => {\n      let fr = new FileReader();\n      fr.addEventListener(\"loadend\", () => viewer._renderHex(el, fr.result).then(() => resolve()));\n      fr.readAsArrayBuffer(blob);\n    });\n  };\n  this.present.bind(this);\n\n  this._renderHex = (el, bytes) => {\n    let bytesArr = new Uint8Array(bytes);\n\n    return new Promise((resolve, reject) => {\n      var addr = 0;\n      var clsName = 'hexviewer';\n      var markup = `<table class=\"${clsName}\">`;\n\n      markup += '<thead><tr><th></th>';\n      for (let j = 0; j < this.cols; j++)\n        markup += `<th>${j.toString(16).padStart(2, '0')}</th>`;\n      markup += '</tr></thead>';\n\n      let i = 0, l = bytesArr.length;\n\n      let trimmingStartAddr = 0 + this.trimFirst;\n      let trimmingEndAddr   = l - 1 - this.trimLast;\n\n      if (trimmingEndAddr < 0) trimmingEndAddr = l - 1;\n\n      while(addr < l) {\n        let r = '<tr>';\n        let startAddr = `0x${addr.toString(16).padStart(8, '0')}`;\n\n        for(let offset = 0; offset < this.cols && addr + offset < l; offset++) {\n          let a = addr + offset;\n          let trimmed = (a >= trimmingStartAddr) && (a < trimmingEndAddr);\n\n          if (trimmed) {\n            i = trimmingEndAddr + 1;\n            r = r + `<tr class=\"trimmed\"><td class=\"trimmed\" colspan=\"${this.cols + 1}\">0x${a.toString(16).padStart(8, '0')}..0x${trimmingEndAddr.toString(16).padStart(8, '0')}</td>`;\n            break;\n          } else {\n            if (offset == 0) {\n              r = r + `<td class=\"addr\">${startAddr}</td>`;\n            }\n            let hexAddr  = '0x' + (a).toString(16).padStart(8, '0');\n            let hexValue = (bytesArr[a]).toString(16).padStart(2, '0');\n            let asciiPreview = String.fromCharCode(bytesArr[a]);\n\n            r = r + `<td data-addr=\"${hexAddr}\" data-ascii=\"${asciiPreview}\">${hexValue}</td>`;\n            i++;\n          }\n        }\n        addr = i;\n        r = r + '</tr>';\n        markup = markup + r;\n      }\n\n      markup = markup + '</table>';\n\n      el.innerHTML = markup;\n\n      resolve();\n    });\n  };\n  this._renderHex.bind(this);\n};\n\n\n//# sourceURL=webpack://b64app/./src/lib/controllers/hex.mjs?");

/***/ }),

/***/ "./src/lib/controllers/input.mjs":
/*!***************************************!*\
  !*** ./src/lib/controllers/input.mjs ***!
  \***************************************/
/*! exports provided: InputViewController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputViewController\", function() { return InputViewController; });\n/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.mjs */ \"./src/lib/core.mjs\");\n/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors.mjs */ \"./src/lib/errors.mjs\");\n\n\n\n\nconst InputViewController = function (bus, el) {\n  this.FILESIZE_LIMIT = 1024 * 1024 * 512;\n  this.el = el;\n\n  this.textInput = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)(\"[role=textinput]\");\n  this.fileInput = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)(\"[role=file-drop]\");\n  this.errorsView = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)(\"[role=errors]\");\n\n  this.encodeBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=encode-btn]');\n  this.decodeBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=decode-btn]');\n\n  let controller = this;\n\n  let errors = [];\n\n  this.validateEncode = () => {\n    let textInputEmpty = this.textInput.value.trim() === '';\n    let fileInputEmpty = this.fileInput.files.length === 0;\n    let emptyInput = textInputEmpty && fileInputEmpty;\n\n    if (emptyInput) {\n      return ['empty'];\n    }\n\n    return true;\n  }\n  this.validateEncode.bind(this);\n\n  this.validateDecode = this.validateEncode;\n\n  this.clear = () => {\n    this.textInput.value = '';\n    this.fileInput.value = null;\n    this.decodeBtn.disabled = false;\n  }\n  this.clear.bind(this);\n\n  this.cleanErrors = () => {\n    this.errorsView.style.opacity = 0.0;\n    this.errorsView.innerHTML = '';\n  }\n  this.cleanErrors.bind(this);\n\n  this.renderErrors = (errors) => {\n    this.errorsView.style.opacity = 1.0;\n    this.errorsView.innerHTML = errors.map((e) => `<p>${_errors_mjs__WEBPACK_IMPORTED_MODULE_1__[\"errorStrings\"][e]}</p>`).join('')\n  }\n  this.renderErrors.bind(this);\n\n  this.readInputForEncode = () => {\n    let blob;\n    if (typeof this.fileInput.files[0] != 'undefined') {\n      blob = new Blob([this.fileInput.files[0]]);\n    } else {\n      blob = new Blob([this.textInput.value]);\n    }\n\n    if (blob.size > this.FILESIZE_LIMIT) {\n      this.renderErrors(['filesize']);\n    } else if (blob.size == 0) {\n      this.renderErrors(['zerofilesize']);\n    } else {\n      bus.dispatchEvent(new CustomEvent(\"encode\", {'detail': blob}));\n    }\n  }\n  this.readInputForEncode.bind(this);\n\n  this.readInputForDecode = () => {\n    let fileInputEmpty = this.fileInput.files.length === 0;\n\n    let blob;\n    if (fileInputEmpty) {\n      blob = new Blob([this.textInput.value]);\n    } else {\n      blob = new Blob([this.fileInput.files[0]]);\n    }\n\n    let e = new CustomEvent(\"decode\", {\n      'detail': blob\n    });\n    bus.dispatchEvent(e);\n  }\n  this.readInputForDecode.bind(this);\n\n  this.init = () => {\n    // this.decodeBtn.disabled = true;\n    // this.encodeBtn.disabled = true;\n\n\n    this.fileInput.addEventListener('change', () => {\n      this.decodeBtn.disabled = true;\n      this.encodeBtn.disabled = false;\n    });\n\n    this.textInput.addEventListener('change', () => {\n      this.decodeBtn.disabled = false;\n      this.encodeBtn.disabled = false;\n    });\n\n    this.encodeBtn.addEventListener('click', () => {\n      // let validation = controller.validateEncode();\n      // if (validation !== true) {\n      //   controller.renderErrors(validation);\n      //   return;\n      // } else {\n      //   controller.cleanErrors();\n      // }\n      controller.readInputForEncode();\n\n\n    });\n\n    this.decodeBtn.addEventListener('click', () => {\n      let validation = controller.validateDecode();\n      if (validation !== true) {\n        controller.renderErrors(validation);\n        return;\n      } else {\n        controller.cleanErrors();\n      }\n      controller.readInputForDecode();\n    });\n  }\n  this.init.bind(this);\n};\n\n\n//# sourceURL=webpack://b64app/./src/lib/controllers/input.mjs?");

/***/ }),

/***/ "./src/lib/controllers/progress.mjs":
/*!******************************************!*\
  !*** ./src/lib/controllers/progress.mjs ***!
  \******************************************/
/*! exports provided: ProgressViewController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProgressViewController\", function() { return ProgressViewController; });\n/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.mjs */ \"./src/lib/core.mjs\");\n/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors.mjs */ \"./src/lib/errors.mjs\");\n\n\n\n\nconst ProgressViewController = function(bus, el){\n  this.el = el;\n  this.volume = undefined;\n\n  this.cancelBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=cancel-btn]');\n  this.outputView = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=output-holder]');\n\n  this.updateView = (event) => {\n    let newProgress = event.detail;\n\n    let percents = (newProgress * 1.0) / (this.volume * 1.0) * 100.0;\n    this.outputView.innerHTML = `<p>${newProgress}/${this.volume} (${percents})</p>`;\n  }\n  this.updateView.bind(this);\n\n  this.start = (event) => {\n    this.volume = event.detail;\n    this.outputView.innerHTML = `<p></p>`;\n    this.cancelBtn.style.opacity = '1.0';\n    bus.addEventListener('progress', this.updateView);\n    bus.addEventListener('progressEnd', this.end);\n  }\n  this.start.bind(this);\n\n  this.end = () => {\n    this.cancelBtn.style.opacity = '0.0';\n    bus.removeEventListener('progress', this.updateView);\n    bus.removeEventListener('progressEnd', this.end);\n    this.volume = undefined;\n  }\n  this.end.bind(this);\n\n  this.init = () => {\n    bus.addEventListener('progressStart', this.start);\n\n    this.cancelBtn.addEventListener('click', () => {\n      bus.dispatchEvent(new Event('progressCancel'))\n    });\n  }\n  this.init.bind(this);\n}\n\n\n//# sourceURL=webpack://b64app/./src/lib/controllers/progress.mjs?");

/***/ }),

/***/ "./src/lib/controllers/result.mjs":
/*!****************************************!*\
  !*** ./src/lib/controllers/result.mjs ***!
  \****************************************/
/*! exports provided: ResultViewController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResultViewController\", function() { return ResultViewController; });\n/* harmony import */ var _core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.mjs */ \"./src/lib/core.mjs\");\n/* harmony import */ var _errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors.mjs */ \"./src/lib/errors.mjs\");\n/* harmony import */ var _ascii_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ascii.mjs */ \"./src/lib/controllers/ascii.mjs\");\n/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hex.mjs */ \"./src/lib/controllers/hex.mjs\");\n\n\n\n\n\n\n\nconst ResultViewController = function (bus, el) {\n  this.el = el;\n\n  this.OUTPUT_MAX_SIZE = 64;\n\n  this.binaryPreview = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=binary-preview]');\n  this.textPreview = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=text-preview]');\n  this.outputView = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=encoding-output]');\n  this.notificationView = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=notification]');\n\n  this.copyToClipboardBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=save-clipboard-btn]');\n  this.saveFileBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=save-file-btn]');\n\n  this.operationResult = undefined;\n\n  this.restartBtn = Object(_core_mjs__WEBPACK_IMPORTED_MODULE_0__[\"$\"])(el)('[role=restart-btn]');\n\n\n  this.setOutputIsTrimmed = (trimmed) => {\n    if (trimmed) {\n      this.notificationView.style.opacity = 1.0;\n      this.notificationView.innerHTML = `<p>${_errors_mjs__WEBPACK_IMPORTED_MODULE_1__[\"errorStrings\"]['outputTrimmed']}</p>`;\n    } else {\n      this.notificationView.style.opacity = 0.0;\n      this.notificationView.innerHTML = ``;\n    }\n  }\n  this.setOutputIsTrimmed.bind(this);\n\n\n  this.renderEncodingResult = (sourceBlob, textResult) => {\n    let binaryViewer = new _hex_mjs__WEBPACK_IMPORTED_MODULE_3__[\"HexViewer\"](sourceBlob, {trimFirst: 128, trimLast: 128});\n    let asciiViewer = new _ascii_mjs__WEBPACK_IMPORTED_MODULE_2__[\"AsciiViewer\"](sourceBlob);\n\n    binaryViewer.present(this.binaryPreview);\n    asciiViewer.present(this.textPreview);\n\n\n    let outputMaxLength = this.OUTPUT_MAX_SIZE;\n\n    this.operationResult = [\"encoded\", new Blob([textResult], {type: 'text/plain'})];\n\n    this.copyToClipboardBtn.disabled = false;\n    this.saveFileBtn.disabled = false;\n\n    if (textResult.length > outputMaxLength) {\n      this.outputView.innerText = textResult.slice(0, outputMaxLength) + '...';\n      this.setOutputIsTrimmed(true);\n    } else {\n      this.setOutputIsTrimmed(false);\n      this.outputView.innerText = textResult;\n    }\n\n  }\n  this.renderEncodingResult.bind(this);\n\n  this.renderDecodingResult = (sourceBlob, textResult) => {\n    let binaryViewer = new _hex_mjs__WEBPACK_IMPORTED_MODULE_3__[\"HexViewer\"](textResult, {trimFirst: 128, trimLast: 128});\n    let asciiViewer = new _ascii_mjs__WEBPACK_IMPORTED_MODULE_2__[\"AsciiViewer\"](textResult);\n\n    binaryViewer.present(this.binaryPreview);\n    asciiViewer.present(this.textPreview);\n\n    this.copyToClipboardBtn.disabled = true;\n    this.saveFileBtn.disabled = false;\n\n    this.operationResult = [\"decoded\", new Blob([textResult], { type: 'application/octet-stream' })];\n\n    this.outputView.innerText = '';\n  }\n  this.renderDecodingResult.bind(this);\n\n  this.init = () => {\n    this.copyToClipboardBtn.disabled = true;\n    this.saveFileBtn.disabled = true;\n\n    this.restartBtn.addEventListener('click', () => {\n      let e = new Event(\"restart\");\n      this.copyToClipboardBtn.disabled = true;\n      this.saveFileBtn.disabled = true;\n\n      bus.dispatchEvent(e);\n    });\n\n    this.copyToClipboardBtn.addEventListener('click', () => {\n      let item = {};\n      item[this.operationResult[1].type] = this.operationResult[1];\n      navigator.clipboard.write([ new ClipboardItem(item) ]);\n    });\n\n    this.saveFileBtn.addEventListener('click', () => {\n      let saver = document.createElementNS(\"http://www.w3.org/1999/xhtml\", \"a\");\n      let blobURL = saver.href = URL.createObjectURL(this.operationResult[1]);\n      if (this.operationResult[0] == 'encoded') {\n        saver.download = 'result.base64.txt';\n      } else {\n        saver.download = 'result.base64.bin';\n      }\n\n      document.body.appendChild(saver);\n      saver.dispatchEvent(new MouseEvent(\"click\"));\n      document.body.removeChild(saver);\n    });\n\n    let self = this;\n  }\n  this.init.bind(this);\n};\n\n\n//# sourceURL=webpack://b64app/./src/lib/controllers/result.mjs?");

/***/ }),

/***/ "./src/lib/core.mjs":
/*!**************************!*\
  !*** ./src/lib/core.mjs ***!
  \**************************/
/*! exports provided: $ */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nconst $ = (el) => { return el.querySelector.bind(el); };\n\nString.prototype.trim = () => String(undefined).replace(/^\\s+|\\s+$/g, '');\n\n\n//# sourceURL=webpack://b64app/./src/lib/core.mjs?");

/***/ }),

/***/ "./src/lib/errors.mjs":
/*!****************************!*\
  !*** ./src/lib/errors.mjs ***!
  \****************************/
/*! exports provided: errorStrings */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorStrings\", function() { return errorStrings; });\nconst errorStrings = {\n  'empty': \"Please provide either file or text.\",\n  'zerofilesize': \"No file provided or it is empty.\",\n  'filesize': \"The file provided is too large.\",\n  'outputTrimmed': \"The output has been truncated. Please use \\\"Save file...\\\" or \\\"Copy to clipboard\\\" feature.\"\n};\n\n\n//# sourceURL=webpack://b64app/./src/lib/errors.mjs?");

/***/ })

/******/ });