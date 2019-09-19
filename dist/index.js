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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  // Font Awesome Imports
  // import { dom } from '@fortawesome/fontawesome-svg-core';
  // import { library as faLib } from "@fortawesome/fontawesome-svg-core";
  // import { faFont } from "@fortawesome/free-solid-svg-icons/faFont";
  // import { faBold } from "@fortawesome/free-solid-svg-icons/faBold";
  // import { faItalic } from "@fortawesome/free-solid-svg-icons/faItalic";
  // import { faUnderline } from "@fortawesome/free-solid-svg-icons/faUnderline";
  // import { faStrikethrough } from "@fortawesome/free-solid-svg-icons/faStrikethrough";
  // import { faList } from "@fortawesome/free-solid-svg-icons/faList";
  // import { faListOl } from "@fortawesome/free-solid-svg-icons/faListOl";
  // import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
  // import { faAlignJustify } from "@fortawesome/free-solid-svg-icons/faAlignJustify";
  // import { faIndent } from "@fortawesome/free-solid-svg-icons/faIndent";
  // import { faAlignLeft } from "@fortawesome/free-solid-svg-icons/faAlignLeft";
  // import { faAlignCenter } from "@fortawesome/free-solid-svg-icons/faAlignCenter";
  // import { faAlignRight } from "@fortawesome/free-solid-svg-icons/faAlignRight";
  // import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
  // import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
  // import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
  // import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
  // faLib.add(faFont);
  // faLib.add(faBold);
  // faLib.add(faItalic);
  // faLib.add(faUnderline);
  // faLib.add(faStrikethrough);
  // faLib.add(faList);
  // faLib.add(faListOl);
  // faLib.add(faListUl);
  // faLib.add(faAlignJustify);
  // faLib.add(faIndent);
  // faLib.add(faAlignLeft);
  // faLib.add(faAlignCenter);
  // faLib.add(faAlignRight);
  // faLib.add(faPaperclip);
  // faLib.add(faLink);
  // faLib.add(faImage);
  // faLib.add(faPaperPlane);
  // dom.watch();
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
  var DEFAULTOPTIONS = ["bold", "italic", "underline", "strikethrough", "insertOrderedList", "insertUnorderedList", "indent", "justifyLeft", "justifyCenter", "justifyRight", "attachment", "link", "image"];

  var StrivenEditor =
  /*#__PURE__*/
  function () {
    function StrivenEditor(el, options) {
      _classCallCheck(this, StrivenEditor);

      this.range = new Range();
      this.files = [];
      this.optionGroups = OPTIONGROUPS;

      if (options) {
        this.options = options;
        options.fontPack || (this.options.fontPack = FONTPACK);
        options.extensions || (this.options.extensions = EXTENSIONS);
        options.toolbarOptions || (this.options.toolbarOptions = DEFAULTOPTIONS);
      } else {
        this.options = {
          fontPack: FONTPACK,
          extensions: EXTENSIONS,
          DEFAULTOPTIONS: DEFAULTOPTIONS
        };
      }

      this.initEditor(el);
      this.initResponsive();
      this.initOverflow();
    }

    _createClass(StrivenEditor, [{
      key: "initEditor",
      value: function initEditor(el) {
        var _this = this;

        this.editor = el;
        this.toolbar = this.initToolbar();
        this.body = this.initBody();
        this.linkMenu = this.initLinkMenu();
        this.imageMenu = this.initImageMenu();
        this.metaDataSection = this.initMetaDataSection();
        this.filesSection = this.initFilesSection();
        this.editor.style.border = "2px solid #ddd";
        this.editor.style.display = "flex";
        this.editor.style.position = "relative";
        this.editor.style.flexDirection = "column";
        this.editor.style.fontFamily = "Arial";
        this.editor.style.minHeight = "auto";
        this.editor.style.maxHeight = "auto";
        this.editor.style.maxWidth = "100%"; // Toolbar Hide

        if (this.options.toolbarHide) {
          this.toolbarSend.style.display = "none";
          this.toolbarOptionsGroup.style.display = "none";

          this.body.onfocus = function () {
            _this.overflow();

            _this.toolbarSlideUp();
          };

          this.body.onblur = function () {
            _this.overflow();

            setTimeout(function () {
              if (document.activeElement !== _this.body && document.activeElement !== _this.linkMenu.querySelector('input') && document.activeElement !== _this.imageMenu.querySelectorAll('input')[0] && document.activeElement !== _this.imageMenu.querySelectorAll('input')[1] && document.activeElement !== _this.imageMenu.querySelectorAll('input')[2]) {
                _this.toolbarSlideDown();
              }
            }, 2000);
          };
        } // Toolbar Options


        this.toolbarOptions.forEach(function (optionEl) {
          // Assign Styles
          // optionEl.style.padding = "0 10px";
          optionEl.style.cursor = "pointer";
          optionEl.style.userSelect = "none"; // Execute Toolbar Commands

          var optionElClick = optionEl.onclick;

          optionEl.onclick = function (e) {
            _this.body.focus();

            var command = optionEl.id.split("-")[1];

            switch (command) {
              case "insertOrderedList":
                document.execCommand("indent", true);
                document.execCommand(command, true);
                break;

              case "insertUnorderedList":
                document.execCommand("indent", true);
                document.execCommand(command, true);
                break;

              case "attachment":
                var attachmentInput = document.createElement("input");
                attachmentInput.style.display = "none";
                attachmentInput.type = "file";
                attachmentInput.click();

                attachmentInput.onchange = function (e) {
                  return _this.attachFile(attachmentInput.files[0]);
                };

                break;

              case "link":
                if (_this.linkMenu.dataset.active === "true") {
                  _this.closeLinkMenu();
                } else {
                  _this.openLinkMenu();

                  _this.range = _this.getRange();

                  _this.linkMenu.querySelector('input').focus();
                }

                break;

              case "image":
                if (_this.imageMenu.dataset.active === "true") {
                  _this.closeImageMenu();
                } else {
                  _this.openImageMenu();

                  _this.range = _this.getRange();

                  _this.imageMenu.querySelector('input').focus();
                }

                break;

              default:
                document.execCommand(command, true);
                break;
            }

            optionElClick && optionElClick();
          };
        }); // Get Content from Editor

        this.editor.getcontent = function () {
          return _this.getContent();
        }; // Get Editor Range


        this.editor.getrange = function () {
          return _this.getRange();
        };

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
      key: "toolbarSlideUp",
      value: function toolbarSlideUp() {
        var that = this;
        var height = this.toolbar.offsetHeight;
        var id = setInterval(frame, 5);

        function frame() {
          if (height >= 40) {
            that.options.onToolbarSend && (that.toolbarSend.style.display = "flex");
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
        this.options.onToolbarSend && (this.toolbarSend.style.display = "none");
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
        var _this2 = this;

        var toolbar = document.createElement("div");
        this.toolbarOptionsGroup = document.createElement("div");
        var groups = Object.keys(this.optionGroups);
        toolbar.classList.add("toolbar");
        toolbar.style.display = "flex";
        toolbar.style.justifyContent = "space-between";
        toolbar.style.alignItems = "center";
        toolbar.style.flexWrap = "wrap";
        toolbar.style.minHeight = this.options.toolbarHide ? "0" : "40px";
        toolbar.style.position = "relative";
        this.toolbarOptionsGroup.classList.add("toolbar-options");
        this.toolbarOptionsGroup.style.margin = "0 10px";
        this.toolbarOptionsGroup.style.display = this.options.toolbarHide ? "none" : "flex"; //iterate groups

        groups.forEach(function (group) {
          // add menu to toolbarOptions
          var toolbarMenu = document.createElement("div"); // const toolbarMenuIcon = document.createElement("i");

          toolbarMenu.classList.add("toolbar-menu");
          toolbarMenu.id = "menu-".concat(group); // toolbarMenuIcon.classList.add(this.options.fontPack);
          // toolbarMenuIcon.classList.add(this.optionGroups[group].menu);

          toolbarMenu.appendChild(_this2.constructSVG(_this2.optionGroups[group].menu));

          _this2.toolbarOptionsGroup.appendChild(toolbarMenu); // add group to toolbarOptions


          var toolbarGroup = document.createElement("div");
          toolbarGroup.classList.add("toolbar-group");
          toolbarGroup.id = "group-".concat(group);

          _this2.options.toolbarOptions.forEach(function (option) {
            var toolbarOption = _this2.optionGroups[group].group.filter(function (group) {
              return group[option];
            })[0];

            if (toolbarOption) {
              var svgData = toolbarOption[option];

              var optionSpan = _this2.constructSVG(svgData);

              optionSpan.id = "toolbar-".concat(option);
              optionSpan.style.margin = "0 10px";
              toolbarGroup.appendChild(optionSpan);
            }
          });

          _this2.toolbarOptionsGroup.appendChild(toolbarGroup); // this.optionGroups[group].group.forEach((option) => {
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

            var optionSpan = _this2.constructSVG(icon);

            optionSpan.id = "toolbar-customOption";
            optionSpan.style.margin = "0 10px";

            optionSpan.onclick = function () {
              return handler();
            };

            _this2.customToolbarGroup.appendChild(optionSpan);
          });
          this.toolbarOptionsGroup.appendChild(this.customToolbarGroup);
        }

        toolbar.appendChild(this.toolbarOptionsGroup); //add toolbar-send

        var toolbarSend = document.createElement("div"); // const toolbarSendIcon = document.createElement("i");

        toolbarSend.id = "toolbar-send"; // toolbarSendIcon.classList.add(this.options.fontPack);
        // toolbarSendIcon.classList.add("fa-paper-plane");

        toolbarSend.style.display = "none";
        toolbarSend.style.color = "#fff";
        toolbarSend.style.backgroundColor = "#5cb85c";
        toolbarSend.style.minHeight = this.options.toolbarHide ? "40px" : this.toolbar.style.minHeight;
        toolbarSend.style.width = "50px";
        toolbarSend.style.textAlign = "center";
        toolbarSend.style.justifyContent = "center";
        toolbarSend.style.alignContent = "center";
        toolbarSend.style.alignItems = "center";
        toolbarSend.style.cursor = "pointer";
        toolbarSend.style.border = "1px solid #4cae4c";
        toolbarSend.style.alignSelf = "flex-end";
        this.options.onToolbarSend && (toolbarSend.onclick = function () {
          return _this2.options.onToolbarSend();
        });
        this.options.onToolbarSend && !this.options.toolbarHide && (toolbarSend.style.display = "flex");

        toolbarSend.onmouseenter = function () {
          return toolbarSend.style.backgroundColor = "#4cae4c";
        };

        toolbarSend.onmouseleave = function () {
          return toolbarSend.style.backgroundColor = "#5cb85c";
        };

        var toolbarSendSVG = this.constructSVG({
          viewBox: "0 0 1792 1792",
          d: "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z"
        });
        toolbarSendSVG.querySelector('path').setAttribute("fill", "#fff");
        toolbarSend.appendChild(toolbarSendSVG);
        toolbar.appendChild(toolbarSend);
        this.toolbarOptions = toolbar.querySelectorAll("span");
        this.toolbarGroups = _toConsumableArray(toolbar.getElementsByClassName("toolbar-group"));
        this.toolbarMenus = _toConsumableArray(toolbar.getElementsByClassName("toolbar-menu"));
        this.toolbarSend = toolbar.querySelector("#toolbar-send");
        this.toolbarMenus.push(this.customToolbarMenu);
        this.toolbarGroups.push(this.customToolbarGroup); // Remove menu that has no options enabled

        this.toolbarGroups.forEach(function (group) {
          if (group.children.length < 1) {
            var groupName = group.id.split("-")[1];

            var menu = _this2.toolbarMenus.filter(function (menu) {
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
        var _this3 = this;

        var body = document.createElement("div");
        body.classList.add("body");
        body.contentEditable = "true";
        body.style.outline = "none";
        body.style.padding = "10px 20px";
        body.style.height = this.editor.style.height;
        body.style.minHeight = this.editor.style.minHeight;
        body.style.maxHeight = this.editor.style.maxHeight; // Paste Handler

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
              document.execCommand("insertImage", true, res);
              _this3.options.uploadOnPaste && _this3.attachFile(dataURLtoFile(res, "pastedimage"));

              _this3.overflow();
            });
          }

          if (e.clipboardData.items.length > 0 && e.clipboardData.items[0].type === "text/plain") {
            e.clipboardData.items[0].getAsString(function (string) {
              if (_this3.options.metaUrl && _this3.validURL(string)) {
                _this3.getMeta(string).then(function (res) {
                  var url = res.url,
                      title = res.title,
                      image = res.image,
                      description = res.description;
                  url && title && image && _this3.createMetaDataElement(url, image, title, description);
                });
              }
            });
          }

          _this3.overflow();
        };

        return body;
      }
    }, {
      key: "initLinkMenu",
      value: function initLinkMenu() {
        var _this4 = this;

        var linkMenu = document.createElement("div");
        var linkMenuForm = document.createElement("div");
        var linkMenuButton = document.createElement("button");
        var linkMenuFormLabel = document.createElement("p");
        var linkMenuFormInput = document.createElement("input");
        linkMenu.id = "link-menu";
        linkMenuButton.textContent = "Insert Link";
        linkMenuFormLabel.textContent = "Web Address";
        linkMenuFormInput.type = "text";
        linkMenuFormLabel.style.margin = "8px 10px 8px 0";
        linkMenuFormLabel.style.fontSize = "14px";
        linkMenuButton.style.cursor = "pointer";
        linkMenu.dataset.active = "false";
        linkMenu.style.display = "none";
        linkMenu.style.position = "absolute";
        linkMenu.style.right = "10px";
        linkMenu.style.bottom = "10px";
        linkMenu.style.backgroundColor = "#fff";
        linkMenu.style.border = "2px solid #ddd";
        linkMenu.style.padding = "10px 20px";
        linkMenu.style.zIndex = "1000";
        linkMenuFormLabel.style.width = "100%";
        linkMenuFormLabel.style.textAlign = "right";
        linkMenuFormLabel.style.marginRight = "10px";
        linkMenuFormInput.style.outline = "none";
        linkMenuFormInput.style.padding = "0 5px";
        linkMenuFormInput.placeholder = "Insert a Link";
        linkMenuForm.style.display = "flex";
        linkMenuForm.style.justifyContent = "space-between";
        linkMenuForm.style.margin = "5px 0";
        linkMenuButton.style["float"] = "right";
        linkMenuButton.style.padding = "6px 12px";
        linkMenuButton.style.border = "1px solid #4cae4c";
        linkMenuButton.style.backgroundColor = "#5cb85c";
        linkMenuButton.style.fontSize = "14px";
        linkMenuButton.style.color = "#fff";
        linkMenuButton.style.outline = "none";

        linkMenuButton.onmouseenter = function () {
          return linkMenuButton.style.backgroundColor = "#4cae4c";
        };

        linkMenuButton.onmouseleave = function () {
          return linkMenuButton.style.backgroundColor = "#5cb85c";
        };

        linkMenuButton.onclick = function (e) {
          var linkValue = linkMenuFormInput.value;

          if (linkValue) {
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(_this4.range);
            document.execCommand("createLink", true, linkValue);

            if (_this4.options.metaUrl && _this4.validURL(linkValue)) {
              _this4.getMeta(linkValue).then(function (res) {
                var url = res.url,
                    image = res.image,
                    title = res.title,
                    description = res.description;
                url && image && title && _this4.createMetaDataElement(url, image, title, description);
              });
            }

            var bodyLinks = _this4.body.querySelectorAll("a");

            bodyLinks[bodyLinks.length - 1].contentEditable = "false";
            linkMenuFormInput.value = "";

            _this4.toolbar.querySelector("#toolbar-link").onclick();
          } else {
            _this4.body.focus();

            _this4.closeLinkMenu();
          }
        };

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);
        linkMenu.appendChild(linkMenuForm);
        linkMenu.appendChild(linkMenuButton);
        return linkMenu;
      }
    }, {
      key: "initImageMenu",
      value: function initImageMenu() {
        var _this5 = this;

        var imageMenu = document.createElement("div");
        var imageMenuForm = document.createElement("div");
        var imageMenuButton = document.createElement("button");
        var imageMenuFormLabel = document.createElement("p");
        var imageMenuFormSourceInput = document.createElement("input");
        imageMenu.id = "image-menu";
        imageMenuButton.textContent = "Insert Image";
        imageMenuFormLabel.textContent = "Image URL";
        imageMenuFormSourceInput.type = "text";
        imageMenuFormLabel.style.margin = "8px 10px 8px 0";
        imageMenuFormLabel.style.fontSize = "14px";
        imageMenuButton.style.cursor = "pointer";
        imageMenu.dataset.active = "false";
        imageMenu.style.display = "none";
        imageMenu.style.position = "absolute";
        imageMenu.style.right = "10px";
        imageMenu.style.bottom = "10px";
        imageMenu.style.backgroundColor = "#fff";
        imageMenu.style.border = "2px solid #ddd";
        imageMenu.style.padding = "10px 20px";
        imageMenu.style.zIndex = "1000";
        imageMenuFormLabel.style.width = "100%";
        imageMenuFormLabel.style.textAlign = "right";
        imageMenuFormLabel.style.marginRight = "10px";
        imageMenuFormSourceInput.style.outline = "none";
        imageMenuFormSourceInput.style.padding = "0 5px";
        imageMenuFormSourceInput.placeholder = "Insert a Link";
        imageMenuForm.style.display = "flex";
        imageMenuForm.style.justifyContent = "space-between";
        imageMenuForm.style.margin = "5px 0";
        imageMenuButton.style["float"] = "right";
        imageMenuButton.style.padding = "6px 12px";
        imageMenuButton.style.border = "1px solid #4cae4c";
        imageMenuButton.style.backgroundColor = "#5cb85c";
        imageMenuButton.style.fontSize = "14px";
        imageMenuButton.style.color = "#fff";
        imageMenuButton.style.outline = "none";

        imageMenuButton.onmouseenter = function () {
          return imageMenuButton.style.backgroundColor = "#4cae4c";
        };

        imageMenuButton.onmouseleave = function () {
          return imageMenuButton.style.backgroundColor = "#5cb85c";
        };

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
        imageMenuWidthFormInput.placeholder = "Image Height";
        imageMenuWidthFormLabel.textContent = "Width";

        imageMenuButton.onclick = function (e) {
          var linkValue = imageMenuFormSourceInput.value;
          var heightValue = imageMenuHeightFormInput.value;
          var widthValue = imageMenuWidthFormInput.value;

          if (linkValue) {
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(_this5.range);
            document.execCommand("insertImage", true, linkValue);

            var imageTags = _this5.body.querySelectorAll("img");

            imageTags[imageTags.length - 1].style.height = "".concat(heightValue, "px");
            imageTags[imageTags.length - 1].style.width = "".concat(widthValue, "px");
            imageMenuHeightFormInput.value = "";
            imageMenuWidthFormInput.value = "";
            imageMenuFormSourceInput.value = "";

            _this5.toolbar.querySelector("#toolbar-image").onclick();
          } else {
            _this5.body.focus();

            _this5.closeImageMenu();
          }
        };

        imageMenu.appendChild(imageMenuHeightForm);
        imageMenu.appendChild(imageMenuWidthForm);
        imageMenu.appendChild(imageMenuForm);
        imageMenu.appendChild(imageMenuButton);
        return imageMenu;
      }
    }, {
      key: "initMetaDataSection",
      value: function initMetaDataSection() {
        var metaDataSection = document.createElement("div");
        metaDataSection.classList.add("metadata-section");
        metaDataSection.style.display = "flex";
        metaDataSection.style.flexWrap = "wrap";
        metaDataSection.style.zIndex = "500";
        return metaDataSection;
      }
    }, {
      key: "initFilesSection",
      value: function initFilesSection() {
        var _this6 = this;

        var filesSection = document.createElement("div");
        filesSection.classList.add("files-section");
        filesSection.style.display = "flex";
        filesSection.style.flexWrap = "wrap";
        filesSection.style.zIndex = "500";

        this.body.ondragenter = function (e) {
          _this6.body.style.backgroundColor = "#ddd";
        };

        this.body.ondragleave = function (e) {
          _this6.body.style.backgroundColor = "inherit";
        };

        this.body.ondrop = function (e) {
          _this6.body.style.backgroundColor = "inherit";
          e.preventDefault();
          var file = e.dataTransfer.files && e.dataTransfer.files[0];

          _this6.attachFile(file);
        };

        this.editor.getfiles = function () {
          return _this6.getFiles();
        };

        return filesSection;
      }
    }, {
      key: "createFileElement",
      value: function createFileElement(name, size) {
        var _this7 = this;

        var fileEl = document.createElement("div");
        var fileNameEl = document.createElement("h4");
        var fileSizeEl = document.createElement("p");
        var removeFileEl = document.createElement("p");
        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = "X";
        fileEl.dataset.fileindex = this.files.length - 1;
        fileEl.style.width = "100%";
        fileEl.style.display = "flex";
        fileEl.style.flexDirection = "column";
        fileEl.style.margin = "10px";
        fileEl.style.position = "relative";
        fileNameEl.style.fontWeight = "bold";
        fileNameEl.style.margin = "0";
        fileSizeEl.style.fontSize = "12px";
        fileSizeEl.style.margin = "2px 0";
        removeFileEl.style.margin = "0";
        removeFileEl.style.userSelect = "none";
        removeFileEl.style.color = "black";
        removeFileEl.style.position = "absolute";
        removeFileEl.style.right = "5px";
        removeFileEl.style.top = "-5px";
        removeFileEl.style.cursor = "pointer";
        removeFileEl.style.backgroundColor = "#fff";

        removeFileEl.onmouseenter = function () {
          return removeFileEl.style.color = "#ddd";
        };

        removeFileEl.onmouseleave = function () {
          return removeFileEl.style.color = "black";
        };

        removeFileEl.onclick = function (e) {
          _this7.files.splice(e.target.parentElement.dataset.fileindex, 1);

          e.target.parentElement.remove();
        };

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);
        this.filesSection.appendChild(fileEl);

        this.editor.getfiles = function () {
          return _this7.getFiles();
        };
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
        metaItemEl.style.width = "100%";
        metaItemEl.style.display = "flex";
        metaItemEl.style.margin = "10px";
        metaItemEl.style.position = "relative";
        metaImageEl.style.marginRight = "10px";
        metaImageEl.style.height = "50px";
        metaImageEl.style.width = "75px";
        metaDataTitleEl.style.fontWeight = "bold";
        metaDataTitleEl.style.margin = "0";
        metaDataDescriptionEl.style.margin = "0";
        removeMetaDataEl.style.userSelect = "none";
        removeMetaDataEl.style.color = "black";
        removeMetaDataEl.style.position = "absolute";
        removeMetaDataEl.style.right = "5px";
        removeMetaDataEl.style.top = "-5px";
        removeMetaDataEl.style.cursor = "pointer";
        removeMetaDataEl.style.backgroundColor = "#fff";

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
        var height = "16";
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
        var _this8 = this;

        var that = this;

        if (!this.options.minimal) {
          var responsiveGroups = function responsiveGroups(isResponsive) {
            that.toolbarGroups.forEach(function (group) {
              group.dataset.open = "false";
              group.style.display = isResponsive ? "none" : "block";
              group.style.position = isResponsive ? "absolute" : "relative";
              group.style.bottom = isResponsive ? "5px" : "inherit";
              group.style.right = isResponsive ? "5px" : "inherit";
              group.style.backgroundColor = isResponsive ? "#fff" : "inherit";
              group.style.border = isResponsive ? "2px solid #ddd" : "none";
            });
            that.toolbarMenus.forEach(function (menu) {
              function toggleMenu() {
                var selectedGroup = that.toolbar.querySelector("#group-".concat(menu.id.split("-")[1]));

                if (selectedGroup.dataset.open === "false") {
                  // close opened groups
                  that.toolbarGroups.forEach(function (group) {
                    if (group.dataset.open === "true") {
                      group.style.display = "none";
                      group.dataset.open = "false";
                    }
                  }); // open group

                  selectedGroup.style.display = "block";
                  selectedGroup.style.padding = "5px";
                  selectedGroup.dataset.open = "true";
                } else {
                  selectedGroup.style.display = "none";
                  selectedGroup.dataset.open = "false";
                }
              }

              menu.style.padding = "0 10px";
              menu.style.cursor = "pointer";
              menu.style.userSelect = "none";
              menu.style.display = isResponsive ? "block" : "none";

              menu.onclick = function (e) {
                toggleMenu();
                that.body.focus();
              };
            });
          };

          var setResponsive = function setResponsive() {
            responsive = window.matchMedia("(max-width: 700px)").matches;
            responsiveGroups(responsive);
          };

          var responsive = window.matchMedia("(max-width: 700px)").matches;
          setResponsive();

          window.onresize = function () {
            _this8.toolbarGroups.forEach(function (group) {
              return group.style.padding = "0";
            });

            _this8.closeLinkMenu();

            _this8.closeImageMenu();

            setResponsive();
          };
        } else {
          this.toolbarMenus.forEach(function (menu) {
            return menu.style.display = "none";
          });
          this.toolbar.querySelector("#toolbar-strikethrough").style.display = "none";
          this.toolbar.querySelector("#toolbar-image").style.display = "none";
          this.toolbar.querySelector("#toolbar-insertOrderedList").style.display = "none";
          this.toolbar.querySelector("#group-textAlign").style.display = "none";
        }
      }
    }, {
      key: "initOverflow",
      value: function initOverflow() {
        var _this9 = this;

        var onFocus = this.body.onfocus;

        this.body.onfocus = function () {
          onFocus && onFocus();

          _this9.overflow();
        };

        var onBlur = this.body.onblur;

        this.body.onblur = function () {
          onBlur && onBlur();

          _this9.overflow();
        };

        this.body.onkeypress = function () {
          return _this9.overflow();
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
        return this.body.innerHTML;
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
        var _this10 = this;

        this.body.style.transition = "background-color .5s";
        this.body.style.backgroundColor = "#d9534f";
        setTimeout(function () {
          _this10.body.style.backgroundColor = "inherit";
          setTimeout(function () {
            return _this10.body.style.transition = "none";
          }, 500);
        }, 500);
      }
    }, {
      key: "openLinkMenu",
      value: function openLinkMenu() {
        this.closeImageMenu();
        this.linkMenu.dataset.active = "true";
        this.linkMenu.style.display = "block";
      }
    }, {
      key: "openImageMenu",
      value: function openImageMenu() {
        this.closeLinkMenu();
        this.imageMenu.dataset.active = "true";
        this.imageMenu.style.display = "block";
      }
    }, {
      key: "closeLinkMenu",
      value: function closeLinkMenu() {
        this.linkMenu.dataset.active = "false";
        this.linkMenu.style.display = "none";
      }
    }, {
      key: "closeImageMenu",
      value: function closeImageMenu() {
        this.imageMenu.dataset.active = "false";
        this.imageMenu.style.display = "none";
      }
    }, {
      key: "setContent",
      value: function setContent(html) {
        this.body.innerHTML = html;
      }
    }]);

    return StrivenEditor;
  }();

  _exports["default"] = StrivenEditor;
});

/***/ }),
/* 1 */
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
  Object.defineProperty(_exports, "StrivenEditor", {
    enumerable: true,
    get: function get() {
      return _striveneditor["default"];
    }
  });
  _striveneditor = _interopRequireDefault(_striveneditor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
});

/***/ })
/******/ ]);
});