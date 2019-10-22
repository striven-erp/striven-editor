(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["striveneditor"] = factory();
	else
		root["striveneditor"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  /*
  @license/i
  * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
  * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
  */
  var EXTENSIONS = [".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".tif", ".jpeg", ".jpg", ".gif", ".bmp", ".txt", ".csv", ".png", ".msg", ".wav", ".mp3", ".mp4", ".zip", ".rtf", ".eps", ".ai", ".psd", ".avi", ".mov", ".wmv", ".cfg", ".wss", ".vsd", ".vsdx", ".tsd", ".lic"];
  var FONTPACK = "fas";
  var OPTIONGROUPS = {
    textDecoration: {
      menu: {
        viewBox: "0 0 1792 1792",
        d: "M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 5-.5 13.5t-.5 12.5q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"
      },
      group: [{
        bold: {
          viewBox: "0 0 1792 1792",
          d: "M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68 .5t68 .5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"
        }
      }, {
        italic: {
          viewBox: "0 0 1792 1792",
          d: "M384 1662l17-85q22-7 61.5-16.5t72-19 59.5-23.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"
        }
      }, {
        underline: {
          viewBox: "0 0 1792 1792",
          d: "M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"
        }
      }, {
        strikethrough: {
          viewBox: "0 0 1792 1792",
          d: "M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-98-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 56-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"
        }
      }, {
        removeFormat: {
          viewBox: "0 0 640 512",
          d: "M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z"
        }
      }]
    },
    listOptions: {
      menu: {
        viewBox: "0 0 1792 1792",
        d: "M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"
      },
      group: [{
        insertOrderedList: {
          viewBox: "0 0 1792 1792",
          d: "M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-121.5t.5-121.5v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
        }
      }, {
        insertUnorderedList: {
          viewBox: "0 0 1792 1792",
          d: "M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5"
        }
      }]
    },
    textAlign: {
      menu: {
        viewBox: "0 0 1792 1792",
        d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"
      },
      group: [{
        indent: {
          viewBox: "0 0 1792 1792",
          d: "M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"
        }
      }, {
        justifyLeft: {
          viewBox: "0 0 1792 1792",
          d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
        }
      }, {
        justifyCenter: {
          viewBox: "0 0 1792 1792",
          d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"
        }
      }, {
        justifyRight: {
          viewBox: "0 0 1792 1792",
          d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"
        }
      }]
    },
    attachments: {
      menu: {
        viewBox: "0 0 1792 1792",
        d: "M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"
      },
      group: [{
        attachment: {
          viewBox: "0 0 1792 1792",
          d: "M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"
        }
      }, {
        link: {
          viewBox: "0 0 1792 1792",
          d: "M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"
        }
      }, {
        image: {
          viewBox: "0 0 2048 1792",
          d: "M704 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
        }
      }]
    }
  };
  var DEFAULTOPTIONS = ["bold", "italic", "underline", "strikethrough", "removeFormat", "insertOrderedList", "insertUnorderedList", "indent", "justifyLeft", "justifyCenter", "justifyRight", "attachment", "link", "image"];
  var ACTIVEOPTIONCOLOR = "#777777";

  var StrivenEditor =
  /*#__PURE__*/
  function () {
    function StrivenEditor(el, options) {
      var _this = this;

      _classCallCheck(this, StrivenEditor);

      this.establishBrowser();
      this.range = new Range();
      this.files = [];
      this.optionGroups = OPTIONGROUPS;

      if (options) {
        this.options = options;
        options.fontPack || (this.options.fontPack = FONTPACK);
        options.extensions || (this.options.extensions = EXTENSIONS);
        options.toolbarOptions || (this.options.toolbarOptions = DEFAULTOPTIONS);
        options.activeOptionColor || (this.options.activeOptionColor = ACTIVEOPTIONCOLOR);
      } else {
        this.options = {
          fontPack: FONTPACK,
          extensions: EXTENSIONS,
          toolbarOptions: DEFAULTOPTIONS,
          activeOptionColor: ACTIVEOPTIONCOLOR
        };
      }

      this.initEditor(el);
      this.initResponsive();
      this.initOverflow();

      el.StrivenEditor = function () {
        return _this;
      }; //bind handler functions to scope


      this.bound_popupEscapeHandler = this.popupEscapeHandler.bind(this);
    }

    _createClass(StrivenEditor, [{
      key: "initEditor",
      value: function initEditor(el) {
        var _this2 = this;

        this.editor = el;
        this.toolbar = this.initToolbar();
        this.body = this.initBody();
        this.linkMenu = this.initLinkMenu();
        this.imageMenu = this.initImageMenu();
        this.metaDataSection = this.initMetaDataSection();
        this.filesSection = this.initFilesSection();
        this.editor.classList.add("editor", "Striven-Editor"); // Toolbar Hide

        if (this.options.toolbarHide) {
          this.customToolbarButton && (this.customToolbarButton.style.display = "none");
          this.toolbarOptionsGroup.style.display = "none";
          var bodyFocus = this.body.onfocus;

          this.body.onfocus = function () {
            bodyFocus && bodyFocus();

            _this2.overflow();

            _this2.toolbarSlideUp();
          };

          var bodyBlur = this.body.onblur;

          this.body.onblur = function () {
            bodyBlur && bodyBlur();

            _this2.overflow();

            setTimeout(function () {
              if (_this2.linkMenu.dataset.active !== "true" && _this2.imageMenu.dataset.active !== "true" && !_this2.isEditorInFocus()) {
                _this2.toolbarSlideDown();
              }
            }, 500);
          };
        } // Toolbar Options


        this.toolbarOptions.forEach(function (optionEl) {
          // Assign Styles
          // optionEl.style.padding = "0 10px";
          optionEl.style.cursor = "pointer";
          optionEl.style.userSelect = "none"; // Execute Toolbar Commands

          var optionElClick = optionEl.onclick;

          optionEl.onclick = function (e) {
            var indents = function indents() {
              var indents = _this2.body.querySelectorAll('blockquote');

              _toConsumableArray(indents).forEach(function (indent) {
                return indent.style.margin = "0 0 0 40px";
              }); // make the margin an option

            };

            _this2.body.focus();

            window.getSelection().removeAllRanges();
            window.getSelection().addRange(_this2.range);
            var command = optionEl.id.split("-")[1];

            switch (command) {
              case "insertOrderedList":
                if (_this2.isFirefox) {
                  document.execCommand("indent");
                  document.execCommand(command);
                  indents();
                } else if (_this2.isEdge) {
                  document.execCommand(command);

                  _toConsumableArray(document.querySelectorAll('ol')).forEach(function (ol) {
                    return ol.style.marginLeft = "40px";
                  });
                } else {
                  document.execCommand("indent", true);
                  document.execCommand(command, true);
                }

                break;

              case "insertUnorderedList":
                if (_this2.isFirefox) {
                  document.execCommand("indent");
                  document.execCommand(command);
                  indents();
                } else if (_this2.isEdge) {
                  document.execCommand(command);

                  _toConsumableArray(document.querySelectorAll('ul')).forEach(function (ul) {
                    return ul.style.marginLeft = "40px";
                  });
                } else {
                  document.execCommand("indent", true);
                  document.execCommand(command, true);
                }

                break;

              case "attachment":
                var attachmentInput = document.createElement("input");
                attachmentInput.style.display = "none";
                attachmentInput.type = "file";

                attachmentInput.onchange = function (e) {
                  return _this2.attachFile(attachmentInput.files[0]);
                };

                attachmentInput.click();
                break;

              case "link":
                if (_this2.linkMenu.dataset.active === "true") {
                  _this2.closeLinkMenu();
                } else {
                  _this2.linkMenuSlideIn();

                  _this2.linkMenu.querySelector('input').focus();
                }

                break;

              case "image":
                if (_this2.imageMenu.dataset.active === "true") {
                  _this2.closeImageMenu();
                } else {
                  _this2.imageMenuSlideIn();

                  _this2.range = _this2.getRange();

                  _this2.imageMenu.querySelector('input').focus();
                }

                break;

              default:
                if (_this2.isFirefox || _this2.isEdge) {
                  document.execCommand(command);
                  command === 'indent' && indents();
                } else {
                  document.execCommand(command, true);
                }

                _this2.toolbarState();

                break;
            }

            optionElClick && optionElClick();
          };
        });
        this.editor.appendChild(this.toolbar);
        this.editor.appendChild(this.body);
        this.editor.appendChild(this.linkMenu);
        this.editor.appendChild(this.imageMenu);
        this.editor.appendChild(this.metaDataSection);
        this.editor.appendChild(this.filesSection); // Reposition Toolbar

        if (this.options.toolbarBottom) {
          this.editor.removeChild(this.toolbar);
          this.editor.append(this.toolbar);
        }
      }
    }, {
      key: "imageMenuSlideIn",
      value: function imageMenuSlideIn() {
        var that = this;
        this.openImageMenu();
        var opacity = 0;
        var right = this.editor.offsetWidth / 4;
        var id = setInterval(frame, 5);
        this.imageMenu.style.opacity = opacity;

        function frame() {
          if (right <= 10) {
            clearInterval(id);
            that.imageMenu.style.opacity = 1;
          } else {
            right -= 2.5;
            opacity += .01;
            that.imageMenu.style.opacity = "".concat(opacity);
            that.imageMenu.style.right = "".concat(right, "px");
          }
        }
      }
    }, {
      key: "linkMenuSlideIn",
      value: function linkMenuSlideIn() {
        var that = this;
        this.openLinkMenu();
        var opacity = 0;
        var right = this.editor.offsetWidth / 4;
        var id = setInterval(frame, 5);
        this.linkMenu.style.opacity = opacity;

        function frame() {
          if (right <= 10) {
            clearInterval(id);
            that.linkMenu.style.opacity = 1;
          } else {
            right -= 2.5;
            opacity += .01;
            that.linkMenu.style.opacity = "".concat(opacity);
            that.linkMenu.style.right = "".concat(right, "px");
          }
        }
      }
    }, {
      key: "toolbarSlideUp",
      value: function toolbarSlideUp() {
        var that = this;
        var height = this.toolbar.offsetHeight;
        var id = setInterval(frame, 5);

        function frame() {
          if (height >= 40) {
            that.customToolbarButton && (that.customToolbarButton.style.display = "flex");
            that.toolbarOptionsGroup.style.display = "flex";
            clearInterval(id);
          } else {
            height++;
            that.toolbar.style.minHeight = "".concat(height, "px");
          }
        }
      }
    }, {
      key: "toolbarSlideDown",
      value: function toolbarSlideDown() {
        var that = this;
        this.customToolbarButton && (this.customToolbarButton.style.display = "none");
        this.toolbarOptionsGroup.style.display = "none";
        var height = 40;
        var id = setInterval(frame, 5);

        function frame() {
          if (height === 0) {
            clearInterval(id);
          } else {
            height--;
            that.toolbar.style.minHeight = "".concat(height, "px");
          }
        }
      }
    }, {
      key: "initToolbar",
      value: function initToolbar() {
        var _this3 = this;

        var toolbar = document.createElement("div");
        this.toolbarOptionsGroup = document.createElement("div");
        var groups = Object.keys(this.optionGroups);
        toolbar.classList.add("toolbar");
        toolbar.style.minHeight = this.options.toolbarHide ? "0" : "40px";
        this.toolbarOptionsGroup.classList.add("toolbar-options");
        this.toolbarOptionsGroup.style.display = this.options.toolbarHide ? "none" : "flex";

        toolbar.onclick = function () {
          return _this3.body.focus();
        }; //iterate groups


        groups.forEach(function (group) {
          // add menu to toolbarOptions
          var toolbarMenu = document.createElement("div"); // const toolbarMenuIcon = document.createElement("i");

          toolbarMenu.classList.add("toolbar-menu");
          toolbarMenu.id = "menu-".concat(group); // toolbarMenuIcon.classList.add(this.options.fontPack);
          // toolbarMenuIcon.classList.add(this.optionGroups[group].menu);

          toolbarMenu.appendChild(_this3.constructSVG(_this3.optionGroups[group].menu));

          _this3.toolbarOptionsGroup.appendChild(toolbarMenu); // add group to toolbarOptions


          var toolbarGroup = document.createElement("div");
          toolbarGroup.classList.add("toolbar-group");
          toolbarGroup.id = "group-".concat(group);

          _this3.options.toolbarOptions.forEach(function (option) {
            var toolbarOption = _this3.optionGroups[group].group.filter(function (group) {
              return group[option];
            })[0];

            if (toolbarOption) {
              var svgData = toolbarOption[option];

              var optionSpan = _this3.constructSVG(svgData);

              optionSpan.classList.add('toolbar-option');
              optionSpan.id = "toolbar-".concat(option);
              toolbarGroup.appendChild(optionSpan);
            }
          });

          _this3.toolbarOptionsGroup.appendChild(toolbarGroup); // FONT AWESOME IMPORTED ICONS
          // this.optionGroups[group].group.forEach((option) => {
          //     const toolbarCommand = Object.keys(option)[0];
          //     if(this.options.toolbarOptions.includes(toolbarCommand)){
          //         const optionSpan = this.constructSVG(option[toolbarCommand]);
          //         // const optionIcon = document.createElement("i");
          //         optionSpan.id = `toolbar-${toolbarCommand}`;
          //         optionSpan.style.margin = "0 10px";
          //         // optionIcon.classList.add(this.options.fontPack);
          //         // optionIcon.classList.add(option[toolbarCommand]);
          //         // optionSpan.appendChild(optionIcon);
          //         toolbarGroup.appendChild(optionSpan);
          //     }
          // })
          // this.toolbarOptionsGroup.appendChild(toolbarGroup);

        }); // toolbar group for custom options

        var customOptions = this.options.toolbarOptions.filter(function (option) {
          return _typeof(option) === "object";
        });

        if (customOptions.length > 0) {
          this.customToolbarMenu = document.createElement("div");
          this.customToolbarMenu.classList.add("toolbar-menu");
          this.customToolbarMenu.id = "menu-custom";
          var customSVGViewBox = "0 0 1792 1792";
          var customSVGD = "M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z";
          this.customToolbarMenu.appendChild(this.constructSVG({
            viewBox: customSVGViewBox,
            d: customSVGD
          }));
          this.toolbarOptionsGroup.appendChild(this.customToolbarMenu);
          this.customToolbarGroup = document.createElement("div");
          this.customToolbarGroup.classList.add("toolbar-group");
          this.customToolbarGroup.id = "group-custom";
          customOptions.forEach(function (customOption) {
            var icon = customOption.icon,
                handler = customOption.handler;

            var optionSpan = _this3.constructSVG(icon);

            optionSpan.id = "toolbar-customOption";
            optionSpan.style.margin = "0 10px";

            optionSpan.onclick = function () {
              return handler();
            };

            _this3.customToolbarGroup.appendChild(optionSpan);
          });
          this.toolbarOptionsGroup.appendChild(this.customToolbarGroup);
        }

        toolbar.appendChild(this.toolbarOptionsGroup); //add toolbar-send

        if (this.options.customToolbarButton) {
          var customToolbarButton = document.createElement("div");
          customToolbarButton.id = "custom-toolbar-button";
          customToolbarButton.classList.add('custom-toolbar-button');
          customToolbarButton.style.minHeight = this.options.toolbarHide ? "40px" : toolbar.style.minHeight;

          customToolbarButton.onclick = function () {
            return _this3.options.customToolbarButton.handler();
          };

          !this.options.toolbarHide && (customToolbarButton.style.display = "flex");

          customToolbarButton.onmouseenter = function () {
            customToolbarButton.style.borderColor = _this3.options.customToolbarButton.hoverBorderColor;
            customToolbarButton.style.backgroundColor = _this3.options.customToolbarButton.hoverBackgroundColor;
            customToolbarButton.style.color = _this3.options.customToolbarButton.hoverColor;
          };

          customToolbarButton.onmouseleave = function () {
            customToolbarButton.style.borderColor = _this3.options.customToolbarButton.borderColor;
            customToolbarButton.style.backgroundColor = _this3.options.customToolbarButton.backgroundColor;
            customToolbarButton.style.color = _this3.options.customToolbarButton.color;
          };

          var customToolbarButtonSVG = this.constructSVG(this.options.customToolbarButton.svgData);
          customToolbarButtonSVG.querySelector('path').setAttribute("fill", this.options.customToolbarButton.color);
          customToolbarButton.appendChild(customToolbarButtonSVG);
          toolbar.appendChild(customToolbarButton);
        }

        this.toolbarOptions = toolbar.querySelectorAll("span");
        this.toolbarGroups = _toConsumableArray(toolbar.getElementsByClassName("toolbar-group"));
        this.toolbarMenus = _toConsumableArray(toolbar.getElementsByClassName("toolbar-menu"));
        this.customToolbarButton = toolbar.querySelector("#custom-toolbar-button");
        this.toolbarMenus.push(this.customToolbarMenu);
        this.toolbarGroups.push(this.customToolbarGroup); // Remove menu that has no options enabled

        this.toolbarGroups.forEach(function (group) {
          if (group && group.children.length < 1) {
            var groupName = group.id.split("-")[1];

            var menu = _this3.toolbarMenus.filter(function (menu) {
              return menu.id.split("-")[1] === groupName;
            })[0];

            menu.remove();
          }
        });
        return toolbar;
      }
    }, {
      key: "initBody",
      value: function initBody() {
        var _this4 = this;

        var body = document.createElement("div");
        body.classList.add("body");
        body.contentEditable = "true";
        body.style.height = this.editor.style.height;
        body.style.minHeight = this.editor.style.minHeight;
        body.style.maxHeight = this.editor.style.maxHeight;
        this.editor.style.height = 'auto';
        this.editor.style.minHeight = 'auto';
        this.editor.style.maxHeight = 'auto'; // Placeholder logic

        if (this.options.placeholder) {
          var placeholderNode = document.createElement("p");
          placeholderNode.id = "placeholder-node";
          placeholderNode.style.color = "#5f6368";
          placeholderNode.style.margin = "0";
          placeholderNode.textContent = this.options.placeholder;
          body.append(placeholderNode);
          var bodyFocus = body.onfocus;

          body.onfocus = function () {
            bodyFocus && bodyFocus();
            body.querySelector("#placeholder-node") === placeholderNode && _this4.clearContent();
          };

          var bodyBlur = body.onblur;

          body.onblur = function () {
            bodyBlur && bodyBlur();
            _this4.getContent().trim() === "" && body.append(placeholderNode);
          };
        } // Paste Handler


        body.onpaste = function (e) {
          function dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
            }

            var file = new File([u8arr], filename, {
              type: mime
            });
            return new File([u8arr], "".concat(file.name, ".").concat(file.type.split('/').pop()), {
              type: file.type
            });
          }

          var convertImage = function convertImage(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          };

          if (e.clipboardData.files.length > 0 && e.clipboardData.files[0].type.includes("image")) {
            convertImage(e.clipboardData.files[0]).then(function (res) {
              if (_this4.options.imageUrl) {
                _this4.getImage(res).then(function (data) {
                  document.execCommand("insertImage", true, data.imageRef);
                })["catch"](function (err) {
                  document.execCommand("insertImage", true, res);
                });
              } else {
                document.execCommand("insertImage", true, res);
                _this4.options.uploadOnPaste && _this4.attachFile(dataURLtoFile(res, "pastedimage"));
              }

              _this4.overflow();
            });
          } // sanitize of html


          if (_this4.options.sanitizePaste && e.clipboardData.types.includes("text/html")) {
            e.preventDefault();
            var pastedHtmlItem;

            for (var i = 0; i < e.clipboardData.items.length; i++) {
              var item = e.clipboardData.items[i];
              item.type === "text/html" && (pastedHtmlItem = item);
            }

            if (pastedHtmlItem) {
              pastedHtmlItem.getAsString(function (htmlString) {
                var range = _this4.getRange();

                range.insertNode(_this4.scrubHTML(htmlString));
                range.collapse();
              });
            }
          } // meta extraction on paste


          if (e.clipboardData.items.length > 0 && e.clipboardData.items[0].type === "text/plain") {
            e.clipboardData.items[0].getAsString(function (string) {
              if (_this4.options.metaUrl && _this4.validURL(string)) {
                _this4.getMeta(string).then(function (res) {
                  var url = res.url,
                      title = res.title,
                      image = res.image,
                      description = res.description;
                  url && title && image && _this4.createMetaDataElement(url, image, title, description);
                });
              }
            });
          }

          _this4.overflow();
        }; // State of the editor


        var bodyKeyup = body.onkeyup;

        body.onkeyup = function (e) {
          bodyKeyup && bodyKeyup();
          _this4.range = _this4.getRange();

          if (_this4.options.submitOnEnter && e.keyCode === 13 && !e.shiftKey) {
            if (!document.queryCommandState('insertOrderedList') && !document.queryCommandState('insertUnorderedList')) {
              var hasText = !!_this4.getTextContent();
              var hasImage = !!body.querySelector('img'); // remove break from enter

              if (hasText || hasImage) {
                var breaks = body.querySelectorAll('div');
                var divBreak = breaks[breaks.length ? breaks.length - 1 : 0];
                divBreak && divBreak.remove();
              }

              var content = _this4.getContent();

              var files = _this4.getFiles();

              _this4.clearContent();

              _this4.clearFiles();

              if (files.length || hasText || hasImage) {
                _this4.options.submitOnEnter({
                  content: (hasText || hasImage) && content,
                  files: files
                });
              }
            }
          }

          _this4.toolbarState();
        };

        var bodyMouseUp = body.onmouseup;

        body.onmouseup = function (e) {
          bodyMouseUp && bodyMouseUp();
          _this4.range = _this4.getRange();
        };

        return body;
      }
    }, {
      key: "initLinkMenu",
      value: function initLinkMenu() {
        var _this5 = this;

        var linkMenu = document.createElement("div");
        var linkMenuForm = document.createElement("div");
        var linkMenuButtons = document.createElement("div");
        var linkMenuButton = document.createElement("button");
        var linkMenuCloseButton = document.createElement("button");
        var linkMenuFormLabel = document.createElement("p");
        var linkMenuFormInput = document.createElement("input");
        linkMenu.id = "link-menu";
        linkMenu.classList.add('popup');
        linkMenu.dataset.active = "false";
        linkMenuForm.classList.add('popup-form');
        linkMenuFormLabel.classList.add('form-label');
        linkMenuFormLabel.textContent = "Web Address";
        linkMenuFormInput.classList.add('form-input');
        linkMenuFormInput.type = "text";
        linkMenuFormInput.placeholder = "Insert a Link";
        linkMenuButtons.classList.add('popup-button-container');
        linkMenuButton.classList.add('popup-button');
        linkMenuButton.classList.add('button-primary');
        linkMenuButton.textContent = "Insert Link";
        linkMenuCloseButton.classList.add('popup-button');
        linkMenuCloseButton.classList.add('button-secondary');
        linkMenuCloseButton.textContent = "Close";

        linkMenuButton.onclick = function (e) {
          var linkValue = linkMenuFormInput.value;

          if (linkValue) {
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(_this5.range);

            if (_this5.isFirefox || _this5.isEdge) {
              document.execCommand("createLink", false, linkValue);
            } else {
              document.execCommand("createLink", true, linkValue);
            }

            if (_this5.options.metaUrl && _this5.validURL(linkValue)) {
              _this5.getMeta(linkValue).then(function (res) {
                var url = res.url,
                    image = res.image,
                    title = res.title,
                    description = res.description;
                url && image && title && _this5.createMetaDataElement(url, image, title, description);
              });
            }

            var bodyLinks = _this5.body.querySelectorAll("a");

            _toConsumableArray(bodyLinks).forEach(function (link) {
              return !_this5.isFirefox && (link.contentEditable = 'false');
            });

            linkMenuFormInput.value = "";

            _this5.closeLinkMenu();
          } else {
            _this5.body.focus();

            _this5.closeLinkMenu();
          }
        };

        linkMenuCloseButton.onclick = function (e) {
          _this5.body.focus();

          _this5.closeLinkMenu();
        };

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);
        linkMenu.appendChild(linkMenuForm);
        linkMenuButtons.appendChild(linkMenuButton);
        linkMenuButtons.appendChild(linkMenuCloseButton);
        linkMenu.appendChild(linkMenuButtons);
        return linkMenu;
      }
    }, {
      key: "initImageMenu",
      value: function initImageMenu() {
        var _this6 = this;

        var imageMenu = document.createElement("div");
        var imageMenuForm = document.createElement("div");
        var imageMenuButtons = document.createElement("div");
        var imageMenuButton = document.createElement("button");
        var imageMenuCloseButton = document.createElement("button");
        var imageMenuFormLabel = document.createElement("p");
        var imageMenuFormSourceInput = document.createElement("input");
        imageMenu.id = "image-menu";
        imageMenu.classList.add('popup');
        imageMenu.dataset.active = "false";
        imageMenuForm.classList.add('popup-form');
        imageMenuFormLabel.classList.add('form-label');
        imageMenuFormLabel.textContent = "Image URL";
        imageMenuFormSourceInput.classList.add('form-input');
        imageMenuFormSourceInput.type = "text";
        imageMenuFormSourceInput.placeholder = "Insert a Link";
        imageMenuButtons.classList.add('popup-button-container');
        imageMenuButton.classList.add('popup-button');
        imageMenuButton.classList.add('button-primary');
        imageMenuButton.textContent = "Insert Image";
        imageMenuCloseButton.classList.add('popup-button');
        imageMenuCloseButton.classList.add('button-secondary');
        imageMenuCloseButton.textContent = "Close";
        imageMenuForm.appendChild(imageMenuFormLabel);
        imageMenuForm.appendChild(imageMenuFormSourceInput); // Height Input Form

        var imageMenuHeightForm = imageMenuForm.cloneNode(true);
        var imageMenuHeightFormInput = imageMenuHeightForm.querySelector('input');
        var imageMenuHeightFormLabel = imageMenuHeightForm.querySelector('p');
        imageMenuHeightFormInput.placeholder = "Image Height";
        imageMenuHeightFormLabel.textContent = "Height"; // Width Input Form

        var imageMenuWidthForm = imageMenuForm.cloneNode(true);
        var imageMenuWidthFormInput = imageMenuWidthForm.querySelector('input');
        var imageMenuWidthFormLabel = imageMenuWidthForm.querySelector('p');
        imageMenuWidthFormInput.placeholder = "Image Width";
        imageMenuWidthFormLabel.textContent = "Width";

        imageMenuButton.onclick = function (e) {
          var linkValue = imageMenuFormSourceInput.value;
          var heightValue = imageMenuHeightFormInput.value;
          var widthValue = imageMenuWidthFormInput.value;

          if (linkValue) {
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(_this6.range);

            if (_this6.isFirefox || _this6.isEdge) {
              document.execCommand("insertImage", false, linkValue);
            } else {
              document.execCommand("insertImage", true, linkValue);
            }

            var insertedImage = _toConsumableArray(_this6.body.querySelectorAll("img")).filter(function (img) {
              return img.src === linkValue;
            });

            insertedImage = insertedImage[insertedImage.length - 1];
            insertedImage && (insertedImage.style.height = "".concat(heightValue, "px"));
            insertedImage && (insertedImage.style.width = "".concat(widthValue, "px"));
            imageMenuHeightFormInput.value = "";
            imageMenuWidthFormInput.value = "";
            imageMenuFormSourceInput.value = "";

            _this6.closeImageMenu();
          } else {
            _this6.body.focus();

            _this6.closeImageMenu();
          }
        };

        imageMenuCloseButton.onclick = function (e) {
          _this6.body.focus();

          _this6.closeImageMenu();
        };

        imageMenu.appendChild(imageMenuHeightForm);
        imageMenu.appendChild(imageMenuWidthForm);
        imageMenu.appendChild(imageMenuForm);
        imageMenuButtons.appendChild(imageMenuButton);
        imageMenuButtons.appendChild(imageMenuCloseButton);
        imageMenu.appendChild(imageMenuButtons);
        return imageMenu;
      }
    }, {
      key: "initMetaDataSection",
      value: function initMetaDataSection() {
        var metaDataSection = document.createElement("div");
        metaDataSection.classList.add("metadata-section");
        return metaDataSection;
      }
    }, {
      key: "initFilesSection",
      value: function initFilesSection() {
        var _this7 = this;

        var filesSection = document.createElement("div");
        filesSection.classList.add("files-section");

        this.body.ondragenter = function (e) {
          _this7.body.style.backgroundColor = "#ddd";
        };

        this.body.ondragleave = function (e) {
          _this7.body.style.backgroundColor = "inherit";
        };

        this.body.ondrop = function (e) {
          _this7.body.style.backgroundColor = "inherit";
          e.preventDefault();
          var file = e.dataTransfer.files && e.dataTransfer.files[0];

          _this7.attachFile(file);
        };

        this.isEdge && (this.body.ondragover = function (e) {
          return e.preventDefault();
        });
        return filesSection;
      }
    }, {
      key: "createFileElement",
      value: function createFileElement(name, size) {
        var _this8 = this;

        var fileEl = document.createElement("div");
        var fileNameEl = document.createElement("h4");
        var fileSizeEl = document.createElement("p");
        var removeFileEl = document.createElement("p");
        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = "X";
        fileEl.classList.add('file-el');
        fileEl.dataset.fileindex = this.files.length - 1;
        fileNameEl.classList.add('file-name-el');
        fileSizeEl.classList.add('file-size-el');
        removeFileEl.classList.add('remove-file-el');

        removeFileEl.onmouseenter = function () {
          return removeFileEl.style.color = "#ddd";
        };

        removeFileEl.onmouseleave = function () {
          return removeFileEl.style.color = "black";
        };

        removeFileEl.onclick = function (e) {
          _this8.files.splice(e.target.parentElement.dataset.fileindex, 1);

          e.target.parentElement.remove();
        };

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);
        this.filesSection.appendChild(fileEl);
      }
    }, {
      key: "createMetaDataElement",
      value: function createMetaDataElement(url, img, title, description) {
        var metaItemEl = document.createElement("div");
        var metaLinkEl = document.createElement("a");
        var metaImageEl = document.createElement("img");
        var metaDataEl = document.createElement("div");
        var metaDataTitleEl = document.createElement("h4");
        var metaDataDescriptionEl = document.createElement("p");
        var removeMetaDataEl = document.createElement("span");
        metaLinkEl.href = url;
        metaImageEl.src = img;
        metaDataTitleEl.textContent = title;
        metaDataDescriptionEl.textContent = description;
        removeMetaDataEl.textContent = "X";
        metaLinkEl.target = "blank";
        metaItemEl.classList.add("meta-item-el");
        metaImageEl.classList.add("meta-image-el");
        metaDataTitleEl.classList.add("meta-data-title-el");
        metaDataDescriptionEl.style.margin = "0";
        removeMetaDataEl.classList.add("remove-meta-data-el");

        removeMetaDataEl.onmouseenter = function () {
          return removeMetaDataEl.style.color = "#ddd";
        };

        removeMetaDataEl.onmouseleave = function () {
          return removeMetaDataEl.style.color = "black";
        };

        removeMetaDataEl.onclick = function (e) {
          return e.target.parentElement.remove();
        };

        metaLinkEl.appendChild(metaImageEl);
        metaDataEl.appendChild(metaDataTitleEl);
        metaDataEl.appendChild(metaDataDescriptionEl);
        metaItemEl.appendChild(metaLinkEl);
        metaItemEl.appendChild(metaDataEl);
        metaItemEl.appendChild(removeMetaDataEl);
        this.metaDataSection.appendChild(metaItemEl);
      }
    }, {
      key: "constructSVG",
      value: function constructSVG(svgData) {
        var viewBox = svgData.viewBox,
            d = svgData.d;
        var fillColor = this.options.toolbarOptionFillColor ? this.options.toolbarOptionFillColor : "#333";
        var xmlns = "http://www.w3.org/2000/svg";
        var height = "14";
        var width = "16";
        var icon = document.createElement('span');
        var svg = "<svg width=\"".concat(width, "\" height=\"").concat(height, "\" viewBox=\"").concat(viewBox, "\" xmlns=\"").concat(xmlns, "\">");
        var path = "<path fill=\"".concat(fillColor, "\" d=\"").concat(d, "\"/>");
        icon.innerHTML = "".concat(svg).concat(path, "</svg>");
        return icon;
      }
    }, {
      key: "initResponsive",
      value: function initResponsive() {
        var _this9 = this;

        var that = this;

        if (!this.options.minimal) {
          var responsiveGroups = function responsiveGroups(isResponsive) {
            that.toolbarGroups.forEach(function (group) {
              if (group) {
                group.dataset.open = "false";
                group.style.display = isResponsive ? "none" : "block";
                group.style.position = isResponsive ? "absolute" : "relative"; // group.style.right = isResponsive ? "10px" : "inherit";

                !that.options.toolbarBottom && (group.style.top = isResponsive ? "50px" : "inherit");
                that.options.toolbarBottom && (group.style.bottom = isResponsive ? "50px" : "inherit"); // group.style.margin = isResponsive ? "0 2px" : "inherit";
                // group.style.backgroundColor = isResponsive ? "#fff" : "inherit";
                // group.style.border = isResponsive ? "2px solid #ddd" : "none";
              }
            });
            that.toolbarMenus.forEach(function (menu) {
              function toggleMenu() {
                var selectedGroup = that.toolbar.querySelector("#group-".concat(menu.id.split("-")[1]));

                if (selectedGroup.dataset.open === "false") {
                  // close opened groups
                  that.toolbarGroups.forEach(function (group) {
                    if (group && group.dataset.open === "true") {
                      group.style.display = "none";
                      group.dataset.open = "false";
                    }
                  }); // open group

                  selectedGroup.style.display = "block";
                  selectedGroup.style.padding = "5px 5px 0 5px";
                  selectedGroup.dataset.open = "true";
                } else {
                  selectedGroup.style.display = "none";
                  selectedGroup.dataset.open = "false";
                }
              }

              if (menu) {
                menu.style.padding = "0 10px";
                menu.style.cursor = "pointer";
                menu.style.userSelect = "none";
                menu.style.display = isResponsive ? "block" : "none";

                menu.onclick = function (e) {
                  toggleMenu();
                  that.body.focus();
                };
              }
            });
          };

          var setResponsive = function setResponsive() {
            responsive = window.matchMedia("(max-width: 700px)").matches;
            responsiveGroups(responsive);
          };

          var responsive = window.matchMedia("(max-width: 700px)").matches;
          setResponsive();

          window.onresize = function () {
            _this9.toolbarGroups.forEach(function (group) {
              return group && (group.style.padding = "0");
            });

            _this9.closeLinkMenu();

            _this9.closeImageMenu();

            setResponsive();
          };
        } else {
          this.toolbarMenus.forEach(function (menu) {
            return menu && (menu.style.display = "none");
          });
          this.toolbar.querySelector("#toolbar-strikethrough").style.display = "none";
          this.toolbar.querySelector("#toolbar-image").style.display = "none";
          this.toolbar.querySelector("#toolbar-insertOrderedList").style.display = "none";
          this.toolbar.querySelector("#group-textAlign").style.display = "none";
          this.toolbar.querySelector("#toolbar-removeFormat").style.display = "none";
        }
      }
    }, {
      key: "initOverflow",
      value: function initOverflow() {
        var _this10 = this;

        var onFocus = this.body.onfocus;

        this.body.onfocus = function () {
          onFocus && onFocus();

          _this10.overflow();
        };

        var onBlur = this.body.onblur;

        this.body.onblur = function () {
          onBlur && onBlur();

          _this10.overflow();
        };

        var bodyKeypress = this.body.onkeypress;

        this.body.onkeypress = function () {
          bodyKeypress && bodyKeypress();

          _this10.overflow();
        };
      }
    }, {
      key: "getFiles",
      value: function getFiles() {
        return this.files;
      }
    }, {
      key: "getContent",
      value: function getContent() {
        if (this.body.querySelector("#placeholder-node")) {
          return "";
        } else {
          return this.body.innerHTML;
        }
      }
    }, {
      key: "getRange",
      value: function getRange() {
        return window.getSelection().getRangeAt(0);
      }
    }, {
      key: "getMeta",
      value: function getMeta(url) {
        return fetch(this.options.metaUrl, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            targetUrl: url
          })
        }).then(function (res) {
          return res.json();
        });
      }
    }, {
      key: "getImage",
      value: function getImage(imageEncoding) {
        return fetch(this.options.imageUrl, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            imageEncoding: imageEncoding
          })
        }).then(function (res) {
          return res.json();
        });
      }
    }, {
      key: "validURL",
      value: function validURL(str) {
        var pattern = new RegExp("^(https?:\\/\\/)?" + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + "((\\d{1,3}\\.){3}\\d{1,3}))" + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + "(\\?[;&a-z\\d%_.~+=-]*)?" + "(\\#[-a-z\\d_]*)?$", "i");
        return !!pattern.test(str);
      }
    }, {
      key: "overflow",
      value: function overflow() {
        var body = this.body;
        body.scrollHeight > body.clientHeight ? body.style.overflowY = "scroll" : body.style.overflowY = "hidden";
        body.scrollWidth > body.clientWidth ? body.style.overflowX = "scroll" : body.style.overflowX = "hidden";
      }
    }, {
      key: "formatBytes",
      value: function formatBytes(bytes) {
        var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        if (bytes === 0) return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
      }
    }, {
      key: "validateFile",
      value: function validateFile(file) {
        var extension = file.type.split('/').pop();
        return this.options.extensions.includes(".".concat(extension));
      }
    }, {
      key: "attachFile",
      value: function attachFile(file) {
        if (this.validateFile(file)) {
          this.files.push(file);
          this.createFileElement(file.name, this.formatBytes(file.size));
        } else {
          this.fileInvalid();
        }
      }
    }, {
      key: "fileInvalid",
      value: function fileInvalid() {
        var _this11 = this;

        this.body.style.transition = "background-color .5s";
        this.body.style.backgroundColor = "#d9534f";
        setTimeout(function () {
          _this11.body.style.backgroundColor = "inherit";
          setTimeout(function () {
            return _this11.body.style.transition = "none";
          }, 500);
        }, 2000);
      }
    }, {
      key: "openLinkMenu",
      value: function openLinkMenu() {
        //close other open popups
        this.closeImageMenu();
        this.linkMenu.dataset.active = "true";
        this.linkMenu.style.display = "block";
        this.addPopupEscapeHandler();
      }
    }, {
      key: "openImageMenu",
      value: function openImageMenu() {
        //close other open popups
        this.closeLinkMenu();
        this.imageMenu.dataset.active = "true";
        this.imageMenu.style.display = "block";
        this.addPopupEscapeHandler();
      }
    }, {
      key: "closeLinkMenu",
      value: function closeLinkMenu() {
        this.linkMenu.dataset.active = "false";
        this.linkMenu.style.display = "none";
        this.removePopupEscapeHandler();
      }
    }, {
      key: "closeImageMenu",
      value: function closeImageMenu() {
        this.imageMenu.dataset.active = "false";
        this.imageMenu.style.display = "none";
        this.removePopupEscapeHandler();
      }
    }, {
      key: "popupEscapeHandler",
      value: function popupEscapeHandler(evt) {
        if (evt.which === 27) {
          //close all open popups
          this.closeImageMenu();
          this.closeLinkMenu();
        }
      }
    }, {
      key: "addPopupEscapeHandler",
      value: function addPopupEscapeHandler() {
        this.removePopupEscapeHandler();
        this.editor.addEventListener('keyup', this.bound_popupEscapeHandler);
      }
    }, {
      key: "removePopupEscapeHandler",
      value: function removePopupEscapeHandler() {
        this.editor.removeEventListener('keyup', this.bound_popupEscapeHandler);
      }
    }, {
      key: "setContent",
      value: function setContent(html) {
        this.clearContent();
        this.body.innerHTML = html;
      }
    }, {
      key: "clearContent",
      value: function clearContent() {
        this.body.innerHTML = "";
      }
    }, {
      key: "clearFiles",
      value: function clearFiles() {
        this.files = [];
        this.filesSection.innerHTML = '';
      }
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        if (this.body.querySelector("#placeholder-node")) {
          return "";
        } else {
          return this.body.textContent;
        }
      }
    }, {
      key: "scrubHTML",
      value: function scrubHTML(html) {
        var dirtyNode = document.createElement("div");
        var cleanNode = document.createElement("div");
        dirtyNode.innerHTML = html;
        cleanNode.append(document.createTextNode(dirtyNode.textContent));
        return cleanNode;
      }
    }, {
      key: "toolbarState",
      value: function toolbarState() {
        var _this12 = this;

        this.options.toolbarOptions.forEach(function (option) {
          var toolbarOption = _this12.toolbar.querySelector("#toolbar-".concat(option));

          if (!option.includes('justify') && !option.includes('list')) {
            if (document.queryCommandState(option)) {
              toolbarOption.querySelector('path').setAttribute('fill', _this12.options.activeOptionColor);
            } else {
              toolbarOption.querySelector('path').setAttribute('fill', '#333');
            }
          }
        });
      }
    }, {
      key: "establishBrowser",
      value: function establishBrowser() {
        // Change this to user agent
        // Opera 8.0+
        this.isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Firefox 1.0+

        this.isFirefox = typeof InstallTrigger !== 'undefined'; // Safari 3.0+ "[object HTMLElementConstructor]" 

        this.isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
          return p.toString() === "[object SafariRemoteNotification]";
        }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification); // Internet Explorer 6-11


        this.isIE =
        /*@cc_on!@*/
         false || !!document.documentMode; // Edge 20+

        this.isEdge = !this.isIE && !!window.StyleMedia; // Chrome 1 - 71

        this.isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime); // Blink engine detection

        this.isBlink = (this.isChrome || this.isOpera) && !!window.CSS;
      }
    }, {
      key: "isEditorInFocus",
      value: function isEditorInFocus() {
        var _this13 = this;

        var activeEl = document.activeElement;

        var isEditor = function isEditor(el) {
          if (el === _this13.editor) {
            return true;
          } else if (el === document.body) {
            return false;
          }

          return el.parentNode && isEditor(el.parentNode);
        };

        return isEditor(activeEl);
      }
    }]);

    return StrivenEditor;
  }();

  _exports["default"] = StrivenEditor;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _striveneditor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _striveneditor = _interopRequireDefault(_striveneditor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  //
  //
  //
  //
  var _default = {
    name: "striven-editor",
    props: {
      toolbarHide: Boolean,
      toolbarBotoom: Boolean,
      minimal: Boolean,
      metaUrl: String,
      extensions: Array,
      uploadOnPaste: Boolean,
      toolbarOptionFillColor: String,
      placeholder: String,
      sanitizePaste: String,
      imageUrl: String,
      customToolbarOption: Object,
      activeOptionColor: String,
      submitOnEnter: Function
    },
    mounted: function mounted() {
      this.editor = new _striveneditor["default"](this.$refs.editor, this.$props);
    },
    data: function data() {
      return {
        editor: {}
      };
    }
  };
  _exports["default"] = _default;
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-striveneditor.vue?vue&type=template&id=5e858f64&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "editor" })
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/vue-striveneditor.vue?vue&type=template&id=5e858f64&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _striveneditor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _striveneditor = _interopRequireDefault(_striveneditor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var KoStrivenEditor = function KoStrivenEditor(ko) {
    _classCallCheck(this, KoStrivenEditor);

    ko.bindingHandlers.striveneditor = {
      init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var valueOption = valueAccessor();
        var value = ko.utils.unwrapObservable(valueOption);
        var editor = new _striveneditor["default"](value);
      }
    };
  };

  _exports["default"] = KoStrivenEditor;
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_striveneditor_vue_vue_type_template_id_5e858f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _vue_striveneditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_striveneditor_vue_vue_type_template_id_5e858f64___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _vue_striveneditor_vue_vue_type_template_id_5e858f64___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue-striveneditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8), __webpack_require__(0), __webpack_require__(5), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _striveneditor, _striveneditor2, _koStriveneditor, _vueStriveneditor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "StrivenEditor", {
    enumerable: true,
    get: function get() {
      return _striveneditor2["default"];
    }
  });
  Object.defineProperty(_exports, "KoStrivenEditor", {
    enumerable: true,
    get: function get() {
      return _koStriveneditor["default"];
    }
  });
  Object.defineProperty(_exports, "VueStrivenEditor", {
    enumerable: true,
    get: function get() {
      return _vueStriveneditor["default"];
    }
  });
  _striveneditor2 = _interopRequireDefault(_striveneditor2);
  _koStriveneditor = _interopRequireDefault(_koStriveneditor);
  _vueStriveneditor = _interopRequireDefault(_vueStriveneditor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(9);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// Module
exports.push([module.i, "/**\r\n** - Editor\r\n** - Toolbar\r\n** - Image Menu\r\n** - File element\r\n** - Meta Item\r\n** - Link Menu\r\n*/\r\n\r\n/** Editor **/\r\n\r\n.Striven-Editor.editor {\r\n\tborder: 2px solid #ddd;\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\tflex-direction: column;\r\n\tfont-family: Arial;\r\n\tmax-width: 100%;\r\n}\r\n\r\n.Striven-Editor .body {\r\n\toutline: none;\r\n\tpadding: 10px 20px;\r\n\tmin-height: auto;\r\n\tmax-height: auto;\r\n\theight: auto;\r\n}\r\n\r\n\r\n/** Toolbar **/\r\n\r\n.Striven-Editor .toolbar {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tflex-wrap: wrap;\r\n\tposition: relative\r\n}\r\n\r\n.Striven-Editor .toolbar-options {\r\n\tmargin: 0 10px;\r\n}\r\n\r\n.Striven-Editor .toolbar-option {\r\n\tpadding: 8px;\r\n}\r\n\r\n.Striven-Editor .toolbar-group[data-open=\"true\"] .toolbar-option {\r\n\tbackground-color: #fff;\r\n\tborder: 2px solid #ddd;\r\n\tmargin: 0 2px;\t\r\n}\r\n\r\n.Striven-Editor .toolbar-group[data-open=\"true\"] .toolbar-option:hover {\r\n\tbackground-color: #ddd;\r\n}\r\n\r\n.Striven-Editor .toolbar-option >svg {\r\n\tvertical-align: middle;\r\n}\r\n\r\n.Striven-Editor .toolbar-option:hover,\r\n.Striven-Editor .toolbar-option:focus,\r\n.Striven-Editor .toolbar-option:active {\r\n\tbackground-color: #ddd;\r\n}\r\n\r\n.Striven-Editor .custom-toolbar-button {\r\n\tdisplay: none;\r\n\tcolor: #fff;\r\n\tbackground-color: #5cb85c;\r\n\twidth: 50px;\r\n\ttext-align: center;\r\n\tjustify-content: center;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n\tborder: 1px solid #4cae4c;\r\n\talign-self: flex-end\r\n}\r\n\r\n\r\n/** File Element **/\r\n\r\n.Striven-Editor .file-el {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tmargin: 10px;\r\n\tposition: relative;\r\n}\r\n\r\n.Striven-Editor .file-name-el {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\n.Striven-Editor .file-size-el {\r\n\tfont-size: 12px;\r\n\tmargin: 2px 0;\r\n}\r\n\r\n.Striven-Editor .remove-file-el {\r\n\tmargin: 0;\r\n\tuser-select: none;\r\n\tcolor: black;\r\n\tposition: absolute;\r\n\tright: 5px;\r\n\ttop: -5px;\r\n\tcursor: pointer;\r\n\tbackground-color: #fff\r\n}\r\n\r\n/** Meta Item **/\r\n\r\n.Striven-Editor .meta-item-el {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tmargin: 10px;\r\n\tposition: relative\r\n}\r\n\r\n.Striven-Editor .meta-image-el {\r\n\tmargin-right: 10px;\r\n\theight: 50px;\r\n\twidth: 75px;\r\n}\r\n\r\n.Striven-Editor .meta-data-title-el {\r\n\tfont-weight: bold;\r\n\tmargin: 0;\r\n}\r\n\r\n.Striven-Editor .remove-meta-data-el {\r\n\tuser-select: none;\r\n\tcolor: black;\r\n\tposition: absolute;\r\n\tright: 5px;\r\n\ttop: -5px;\r\n\tcursor: pointer;\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.Striven-Editor .metadata-section, .Striven-Editor .files-section {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tz-index: 500\r\n}\r\n\r\n/** Popup Menu **/\r\n\r\n.Striven-Editor .popup {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tright: 10px;\r\n\tbottom: 10px;\r\n\tbackground-color: #fff;\r\n\tborder: 2px solid #ddd;\r\n\tpadding: 10px 20px;\r\n\tz-index: 1000;\t\r\n}\r\n\r\n\r\n.Striven-Editor .popup > .popup-form {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\tmargin: 5px 0;\r\n}\r\n\r\n.Striven-Editor .popup > .popup-form > .form-label {\r\n\tmargin: 8px 10px 8px 0;\r\n\tfont-size: 14px;\r\n\twidth: 100%;\r\n\ttext-align: right;\r\n\tmargin-right: 10px;\r\n}\r\n\r\n.Striven-Editor .popup > .popup-form >.form-input {\r\n\toutline: none;\r\n\tpadding: 0 5px;\r\n}\r\n\r\n\r\n.Striven-Editor .popup-button-container\r\n{\r\n\tfloat:right;\r\n}\r\n\r\n.Striven-Editor .popup-button{\r\n\tcursor: pointer;\r\n\tpadding: 6px 12px;\r\n\tborder: 1px solid transparent;\r\n\tfont-size: 14px;\r\n\toutline: none;\r\n\tcolor: #333;\r\n\tmargin:2px;\r\n}\r\n\r\n.Striven-Editor .popup-button.button-primary{\r\n\tborder-color: #4cae4c;\r\n\tbackground-color: #5cb85c;\r\n\tcolor: #fff;\r\n}\r\n.Striven-Editor .popup-button.button-secondary{\r\n\tborder-color: #ccc;\r\n\tbackground-color: #fff;\r\n\tcolor: #333;\r\n}\r\n.Striven-Editor .popup-button.button-primary:hover,\r\n.Striven-Editor .popup-button.button-primary:active,\r\n.Striven-Editor .popup-button.button-primary:focus{\r\n\tbackground-color: #4cae4c;\r\n    border-color: #398439;\r\n}\r\n.Striven-Editor .popup-button.button-secondary:hover,\r\n.Striven-Editor .popup-button.button-secondary:active,\r\n.Striven-Editor .popup-button.button-secondary:focus{\r\n\tbackground-color: #d4d4d4;\r\n    border-color: #8c8c8c;\r\n}\r\n\r\n", ""]);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ })
/******/ ]);
});