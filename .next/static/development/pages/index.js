(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/assets/styles/index.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./public/assets/styles/index.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".styles_bgEarth__2lVXM::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  background-image: url(\"/assets/static/earth.jpg\");\n}\n\n.styles_redBox__1yOvN {\n  box-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px red, 0 0 25px red;\n}\n\n.styles_topBox__3nQvn {\n  bottom: -1.5rem;\n  left: 50%;\n  transform: translate(-50%, 0);\n  box-shadow: 0 4px 5px 0 black, 0 7px 10px 0 black, 0 9px 15px 0 black, 0 12px 10px 0 red, 0 14px 13px 0 red;\n}\n\n.styles_boxImg__1eF20 {\n  -webkit-filter: hue-rotate(90deg);\n          filter: hue-rotate(90deg);\n}\n\n.styles_bgOpacity90__1BtBP {\n  --bg-opacity: 0.9;\n}\n\n.styles_doorTop__3I18V {\n  -webkit-clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\n          clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\n}\n\n.styles_doorTop__3I18V::before {\n  content: '';\n  width: 100vw;\n  height: 100vh;\n  -webkit-clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\n          clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\n  background: black;\n  display: block;\n  position: absolute;\n  bottom: 3px;\n  left: 0;\n}\n\n.styles_doorBottom__2rVbd {\n  -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 45%, 78% 45%, 70% 50%, 30% 50%, 22% 55%, 0 55%);\n          clip-path: polygon(0 100%, 100% 100%, 100% 45%, 78% 45%, 70% 50%, 30% 50%, 22% 55%, 0 55%);\n}\n\n.styles_circle__1gu4f {\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 55%, 50% 45%, 0 45%);\n          clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 55%, 50% 45%, 0 45%);\n}\r\n", "",{"version":3,"sources":["C:/Users/Arielskap/Desktop/my-page/public/assets/styles/index.module.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,iDAAiD;AACnD;;AAEA;EACE,qFAAqF;AACvF;;AAEA;EACE,eAAe;EACf,SAAS;EACT,6BAA6B;EAC7B,2GAA2G;AAC7G;;AAEA;EACE,iCAAyB;UAAzB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4FAAoF;UAApF,oFAAoF;AACtF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,4FAAoF;UAApF,oFAAoF;EACpF,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,OAAO;AACT;;AAEA;EACE,kGAA0F;UAA1F,0FAA0F;AAC5F;;AAEA;EACE,0EAAkE;UAAlE,kEAAkE;AACpE","file":"index.module.css","sourcesContent":[".bgEarth::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  background-image: url(\"/assets/static/earth.jpg\");\r\n}\r\n\r\n.redBox {\r\n  box-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px red, 0 0 25px red;\r\n}\r\n\r\n.topBox {\r\n  bottom: -1.5rem;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n  box-shadow: 0 4px 5px 0 black, 0 7px 10px 0 black, 0 9px 15px 0 black, 0 12px 10px 0 red, 0 14px 13px 0 red;\r\n}\r\n\r\n.boxImg {\r\n  filter: hue-rotate(90deg);\r\n}\r\n\r\n.bgOpacity90 {\r\n  --bg-opacity: 0.9;\r\n}\r\n\r\n.doorTop {\r\n  clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\r\n}\r\n\r\n.doorTop::before {\r\n  content: '';\r\n  width: 100vw;\r\n  height: 100vh;\r\n  clip-path: polygon(100% 0, 0 0, 0 55%, 22% 55%, 30% 50%, 70% 50%, 78% 45%, 100% 45%);\r\n  background: black;\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 3px;\r\n  left: 0;\r\n}\r\n\r\n.doorBottom {\r\n  clip-path: polygon(0 100%, 100% 100%, 100% 45%, 78% 45%, 70% 50%, 30% 50%, 22% 55%, 0 55%);\r\n}\r\n\r\n.circle {\r\n  clip-path: polygon(0 0, 100% 0, 100% 55%, 50% 55%, 50% 45%, 0 45%);\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"bgEarth": "styles_bgEarth__2lVXM",
	"redBox": "styles_redBox__1yOvN",
	"topBox": "styles_topBox__3nQvn",
	"boxImg": "styles_boxImg__1eF20",
	"bgOpacity90": "styles_bgOpacity90__1BtBP",
	"doorTop": "styles_doorTop__3I18V",
	"doorBottom": "styles_doorBottom__2rVbd",
	"circle": "styles_circle__1gu4f"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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

/***/ "./node_modules/d3-ease/src/back.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/back.js ***!
  \******************************************/
/*! exports provided: backIn, backOut, backInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),

/***/ "./node_modules/d3-ease/src/bounce.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/bounce.js ***!
  \********************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/circle.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/circle.js ***!
  \********************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleIn", function() { return circleIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleOut", function() { return circleOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleInOut", function() { return circleInOut; });
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/cubic.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/cubic.js ***!
  \*******************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicIn", function() { return cubicIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicOut", function() { return cubicOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicInOut", function() { return cubicInOut; });
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/elastic.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-ease/src/elastic.js ***!
  \*********************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticIn", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticOut", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elasticInOut", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),

/***/ "./node_modules/d3-ease/src/exp.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/exp.js ***!
  \*****************************************/
/*! exports provided: expIn, expOut, expInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expIn", function() { return expIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expOut", function() { return expOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expInOut", function() { return expInOut; });
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-ease/src/index.js ***!
  \*******************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-ease/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_0__["linear"]; });

/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-ease/src/quad.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return _quad_js__WEBPACK_IMPORTED_MODULE_1__["quadInOut"]; });

/* harmony import */ var _cubic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubic.js */ "./node_modules/d3-ease/src/cubic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return _cubic_js__WEBPACK_IMPORTED_MODULE_2__["cubicInOut"]; });

/* harmony import */ var _poly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poly.js */ "./node_modules/d3-ease/src/poly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return _poly_js__WEBPACK_IMPORTED_MODULE_3__["polyInOut"]; });

/* harmony import */ var _sin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sin.js */ "./node_modules/d3-ease/src/sin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return _sin_js__WEBPACK_IMPORTED_MODULE_4__["sinInOut"]; });

/* harmony import */ var _exp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp.js */ "./node_modules/d3-ease/src/exp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return _exp_js__WEBPACK_IMPORTED_MODULE_5__["expInOut"]; });

/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circle.js */ "./node_modules/d3-ease/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return _circle_js__WEBPACK_IMPORTED_MODULE_6__["circleInOut"]; });

/* harmony import */ var _bounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bounce.js */ "./node_modules/d3-ease/src/bounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return _bounce_js__WEBPACK_IMPORTED_MODULE_7__["bounceInOut"]; });

/* harmony import */ var _back_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./back.js */ "./node_modules/d3-ease/src/back.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return _back_js__WEBPACK_IMPORTED_MODULE_8__["backInOut"]; });

/* harmony import */ var _elastic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elastic.js */ "./node_modules/d3-ease/src/elastic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return _elastic_js__WEBPACK_IMPORTED_MODULE_9__["elasticInOut"]; });






















/***/ }),

/***/ "./node_modules/d3-ease/src/linear.js":
/*!********************************************!*\
  !*** ./node_modules/d3-ease/src/linear.js ***!
  \********************************************/
/*! exports provided: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
function linear(t) {
  return +t;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/poly.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/poly.js ***!
  \******************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyIn", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyOut", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyInOut", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),

/***/ "./node_modules/d3-ease/src/quad.js":
/*!******************************************!*\
  !*** ./node_modules/d3-ease/src/quad.js ***!
  \******************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadIn", function() { return quadIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadOut", function() { return quadOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadInOut", function() { return quadInOut; });
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),

/***/ "./node_modules/d3-ease/src/sin.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-ease/src/sin.js ***!
  \*****************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinIn", function() { return sinIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinOut", function() { return sinOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinInOut", function() { return sinInOut; });
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArielskap%5CDesktop%5Cmy-page%5Cpages%5Cindex.jsx!./":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArielskap%5CDesktop%5Cmy-page%5Cpages%5Cindex.jsx ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.jsx */ "./pages/index.jsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {
      transform: 'translateY(0%)'
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      translateYTop = _useSpring2[0],
      setTranslateYTop = _useSpring2[1];

  var _useSpring3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {
      transform: 'translateY(0%)'
    };
  }),
      _useSpring4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring3, 2),
      translateYBottom = _useSpring4[0],
      setTranslateYBottom = _useSpring4[1];

  var rotate = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    config: {
      duration: 1000
    },
    to: {
      transform: 'rotate(180deg)'
    },
    from: {
      transform: 'rotate(0deg)'
    },
    onRest: function onRest() {
      setTranslateYTop({
        delay: 1000,
        config: {
          duration: 2000,
          easing: d3_ease__WEBPACK_IMPORTED_MODULE_3__["easeCubic"]
        },
        to: {
          transform: 'translateY(-100%)'
        }
      });
      setTranslateYBottom({
        delay: 1000,
        config: {
          duration: 2000,
          easing: d3_ease__WEBPACK_IMPORTED_MODULE_3__["easeCubic"]
        },
        to: {
          transform: 'translateY(100%)'
        },
        onRest: function onRest() {
          document.querySelector('.door').classList.replace('flex', 'hidden');
        }
      });
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_4___default.a('#box-text', {
      strings: ['loading data...', txt],
      typeSpeed: 10
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "door absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "absolute bg-red-700 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "bg-blue-700 w-20 h-20 z-20 rounded-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "w-full h-full bg-orange-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle),
    style: rotate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "Lenkedin"))));
}, "QdcWvxO0NzXa/AQ4QVpeCrPxzAk=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./public/assets/styles/index.module.css":
/*!***********************************************!*\
  !*** ./public/assets/styles/index.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/assets/styles/index.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/assets/styles/index.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./public/assets/styles/index.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CArielskap%5CDesktop%5Cmy-page%5Cpages%5Cindex.jsx ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CArielskap%5CDesktop%5Cmy-page%5Cpages%5Cindex.jsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CArielskap%5CDesktop%5Cmy-page%5Cpages%5Cindex.jsx!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZWFzZS9zcmMvYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9jaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2N1YmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9lbGFzdGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9leHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1lYXNlL3NyYy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3BvbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3F1YWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWVhc2Uvc3JjL3Npbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwcmluZy93ZWIuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvbGliL3R5cGVkLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcz81Mzc1Iiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbInVzZVNwcmluZyIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZVlUb3AiLCJzZXRUcmFuc2xhdGVZVG9wIiwidHJhbnNsYXRlWUJvdHRvbSIsInNldFRyYW5zbGF0ZVlCb3R0b20iLCJyb3RhdGUiLCJjb25maWciLCJkdXJhdGlvbiIsInRvIiwiZnJvbSIsIm9uUmVzdCIsImRlbGF5IiwiZWFzaW5nIiwiZWFzZUN1YmljIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInVzZUVmZmVjdCIsInR4dCIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwic3R5bGVzIiwiZG9vclRvcCIsImNpcmNsZSIsImRvb3JCb3R0b20iLCJiZ0VhcnRoIiwicmVkQm94IiwidG9wQm94IiwiYmdPcGFjaXR5OTAiLCJib3hJbWciLCJib3hUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsK0JBQStCO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXFCOztBQU9GOztBQU9DOztBQU9EOztBQU9EOztBQU9BOztBQU9HOztBQU9BOztBQU9GOztBQU9HOzs7Ozs7Ozs7Ozs7O0FDakV0QjtBQUFBO0FBQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRU07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVNO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0Es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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNFQUFzRSxhQUFhO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDL0QsNkJB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0EsRUFBRTs7QUFF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OiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX2JnRWFydGhfXzJsVlhNOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2Fzc2V0cy9zdGF0aWMvZWFydGguanBnXFxcIik7XFxufVxcblxcbi5zdHlsZXNfcmVkQm94X18xeU92TiB7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrLCAwIDAgMTBweCBibGFjaywgMCAwIDE1cHggYmxhY2ssIDAgMCAyMHB4IHJlZCwgMCAwIDI1cHggcmVkO1xcbn1cXG5cXG4uc3R5bGVzX3RvcEJveF9fM25Rdm4ge1xcbiAgYm90dG9tOiAtMS41cmVtO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggMCBibGFjaywgMCA3cHggMTBweCAwIGJsYWNrLCAwIDlweCAxNXB4IDAgYmxhY2ssIDAgMTJweCAxMHB4IDAgcmVkLCAwIDE0cHggMTNweCAwIHJlZDtcXG59XFxuXFxuLnN0eWxlc19ib3hJbWdfXzFlRjIwIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnN0eWxlc19iZ09wYWNpdHk5MF9fMUJ0QlAge1xcbiAgLS1iZy1vcGFjaXR5OiAwLjk7XFxufVxcblxcbi5zdHlsZXNfZG9vclRvcF9fM0kxOFYge1xcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAwIDAsIDAgNTUlLCAyMiUgNTUlLCAzMCUgNTAlLCA3MCUgNTAlLCA3OCUgNDUlLCAxMDAlIDQ1JSk7XFxuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDAgMCwgMCA1NSUsIDIyJSA1NSUsIDMwJSA1MCUsIDcwJSA1MCUsIDc4JSA0NSUsIDEwMCUgNDUlKTtcXG59XFxuXFxuLnN0eWxlc19kb29yVG9wX18zSTE4Vjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMCAwLCAwIDU1JSwgMjIlIDU1JSwgMzAlIDUwJSwgNzAlIDUwJSwgNzglIDQ1JSwgMTAwJSA0NSUpO1xcbiAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAwIDAsIDAgNTUlLCAyMiUgNTUlLCAzMCUgNTAlLCA3MCUgNTAlLCA3OCUgNDUlLCAxMDAlIDQ1JSk7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAzcHg7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uc3R5bGVzX2Rvb3JCb3R0b21fXzJyVmJkIHtcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDQ1JSwgNzglIDQ1JSwgNzAlIDUwJSwgMzAlIDUwJSwgMjIlIDU1JSwgMCA1NSUpO1xcbiAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgNDUlLCA3OCUgNDUlLCA3MCUgNTAlLCAzMCUgNTAlLCAyMiUgNTUlLCAwIDU1JSk7XFxufVxcblxcbi5zdHlsZXNfY2lyY2xlX18xZ3U0ZiB7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA1NSUsIDUwJSA1NSUsIDUwJSA0NSUsIDAgNDUlKTtcXG4gICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDU1JSwgNTAlIDU1JSwgNTAlIDQ1JSwgMCA0NSUpO1xcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9BcmllbHNrYXAvRGVza3RvcC9teS1wYWdlL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UscUZBQXFGO0FBQ3ZGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsMkdBQTJHO0FBQzdHOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRGQUFvRjtVQUFwRixvRkFBb0Y7QUFDdEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw0RkFBb0Y7VUFBcEYsb0ZBQW9GO0VBQ3BGLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrR0FBMEY7VUFBMUYsMEZBQTBGO0FBQzVGOztBQUVBO0VBQ0UsMEVBQWtFO1VBQWxFLGtFQUFrRTtBQUNwRVwiLFwiZmlsZVwiOlwiaW5kZXgubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmdFYXJ0aDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9hc3NldHMvc3RhdGljL2VhcnRoLmpwZ1xcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkQm94IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2ssIDAgMCAxMHB4IGJsYWNrLCAwIDAgMTVweCBibGFjaywgMCAwIDIwcHggcmVkLCAwIDAgMjVweCByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b3BCb3gge1xcclxcbiAgYm90dG9tOiAtMS41cmVtO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCA1cHggMCBibGFjaywgMCA3cHggMTBweCAwIGJsYWNrLCAwIDlweCAxNXB4IDAgYmxhY2ssIDAgMTJweCAxMHB4IDAgcmVkLCAwIDE0cHggMTNweCAwIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveEltZyB7XFxyXFxuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYmdPcGFjaXR5OTAge1xcclxcbiAgLS1iZy1vcGFjaXR5OiAwLjk7XFxyXFxufVxcclxcblxcclxcbi5kb29yVG9wIHtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDAgMCwgMCA1NSUsIDIyJSA1NSUsIDMwJSA1MCUsIDcwJSA1MCUsIDc4JSA0NSUsIDEwMCUgNDUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRvb3JUb3A6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLCAwIDAsIDAgNTUlLCAyMiUgNTUlLCAzMCUgNTAlLCA3MCUgNTAlLCA3OCUgNDUlLCAxMDAlIDQ1JSk7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAzcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZG9vckJvdHRvbSB7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMDAlLCAxMDAlIDEwMCUsIDEwMCUgNDUlLCA3OCUgNDUlLCA3MCUgNTAlLCAzMCUgNTAlLCAyMiUgNTUlLCAwIDU1JSk7XFxyXFxufVxcclxcblxcclxcbi5jaXJjbGUge1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDU1JSwgNTAlIDU1JSwgNTAlIDQ1JSwgMCA0NSUpO1xcclxcbn1cXHJcXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJiZ0VhcnRoXCI6IFwic3R5bGVzX2JnRWFydGhfXzJsVlhNXCIsXG5cdFwicmVkQm94XCI6IFwic3R5bGVzX3JlZEJveF9fMXlPdk5cIixcblx0XCJ0b3BCb3hcIjogXCJzdHlsZXNfdG9wQm94X18zblF2blwiLFxuXHRcImJveEltZ1wiOiBcInN0eWxlc19ib3hJbWdfXzFlRjIwXCIsXG5cdFwiYmdPcGFjaXR5OTBcIjogXCJzdHlsZXNfYmdPcGFjaXR5OTBfXzFCdEJQXCIsXG5cdFwiZG9vclRvcFwiOiBcInN0eWxlc19kb29yVG9wX18zSTE4VlwiLFxuXHRcImRvb3JCb3R0b21cIjogXCJzdHlsZXNfZG9vckJvdHRvbV9fMnJWYmRcIixcblx0XCJjaXJjbGVcIjogXCJzdHlsZXNfY2lyY2xlX18xZ3U0ZlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIG92ZXJzaG9vdCA9IDEuNzAxNTg7XG5cbmV4cG9ydCB2YXIgYmFja0luID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xuICB9XG5cbiAgYmFja0luLm92ZXJzaG9vdCA9IGN1c3RvbTtcblxuICByZXR1cm4gYmFja0luO1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShzKSB7XG4gIHMgPSArcztcblxuICBmdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbiAgfVxuXG4gIGJhY2tPdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrT3V0O1xufSkob3ZlcnNob290KTtcblxuZXhwb3J0IHZhciBiYWNrSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKHMpIHtcbiAgcyA9ICtzO1xuXG4gIGZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8IDEgPyB0ICogdCAqICgocyArIDEpICogdCAtIHMpIDogKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKSAvIDI7XG4gIH1cblxuICBiYWNrSW5PdXQub3ZlcnNob290ID0gY3VzdG9tO1xuXG4gIHJldHVybiBiYWNrSW5PdXQ7XG59KShvdmVyc2hvb3QpO1xuIiwidmFyIGIxID0gNCAvIDExLFxuICAgIGIyID0gNiAvIDExLFxuICAgIGIzID0gOCAvIDExLFxuICAgIGI0ID0gMyAvIDQsXG4gICAgYjUgPSA5IC8gMTEsXG4gICAgYjYgPSAxMCAvIDExLFxuICAgIGI3ID0gMTUgLyAxNixcbiAgICBiOCA9IDIxIC8gMjIsXG4gICAgYjkgPSA2MyAvIDY0LFxuICAgIGIwID0gMSAvIGIxIC8gYjE7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gIHJldHVybiAxIC0gYm91bmNlT3V0KDEgLSB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gIHJldHVybiAodCA9ICt0KSA8IGIxID8gYjAgKiB0ICogdCA6IHQgPCBiMyA/IGIwICogKHQgLT0gYjIpICogdCArIGI0IDogdCA8IGI2ID8gYjAgKiAodCAtPSBiNSkgKiB0ICsgYjcgOiBiMCAqICh0IC09IGI4KSAqIHQgKyBiOTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gMSAtIGJvdW5jZU91dCgxIC0gdCkgOiBib3VuY2VPdXQodCAtIDEpICsgMSkgLyAyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUluKHQpIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZU91dCh0KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCkgOiBNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSAvIDI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gIHJldHVybiAtLXQgKiB0ICogdCArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgKiB0IDogKHQgLT0gMikgKiB0ICogdCArIDIpIC8gMjtcbn1cbiIsInZhciB0YXUgPSAyICogTWF0aC5QSSxcbiAgICBhbXBsaXR1ZGUgPSAxLFxuICAgIHBlcmlvZCA9IDAuMztcblxuZXhwb3J0IHZhciBlbGFzdGljSW4gPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIDEwICogLS10KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNJbi5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbi5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbjtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljT3V0ID0gKGZ1bmN0aW9uIGN1c3RvbShhLCBwKSB7XG4gIHZhciBzID0gTWF0aC5hc2luKDEgLyAoYSA9IE1hdGgubWF4KDEsIGEpKSkgKiAocCAvPSB0YXUpO1xuXG4gIGZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAxIC0gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0ID0gK3QpKSAqIE1hdGguc2luKCh0ICsgcykgLyBwKTtcbiAgfVxuXG4gIGVsYXN0aWNPdXQuYW1wbGl0dWRlID0gZnVuY3Rpb24oYSkgeyByZXR1cm4gY3VzdG9tKGEsIHAgKiB0YXUpOyB9O1xuICBlbGFzdGljT3V0LnBlcmlvZCA9IGZ1bmN0aW9uKHApIHsgcmV0dXJuIGN1c3RvbShhLCBwKTsgfTtcblxuICByZXR1cm4gZWxhc3RpY091dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcblxuZXhwb3J0IHZhciBlbGFzdGljSW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGEsIHApIHtcbiAgdmFyIHMgPSBNYXRoLmFzaW4oMSAvIChhID0gTWF0aC5tYXgoMSwgYSkpKSAqIChwIC89IHRhdSk7XG5cbiAgZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gKCh0ID0gdCAqIDIgLSAxKSA8IDBcbiAgICAgICAgPyBhICogTWF0aC5wb3coMiwgMTAgKiB0KSAqIE1hdGguc2luKChzIC0gdCkgLyBwKVxuICAgICAgICA6IDIgLSBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigocyArIHQpIC8gcCkpIC8gMjtcbiAgfVxuXG4gIGVsYXN0aWNJbk91dC5hbXBsaXR1ZGUgPSBmdW5jdGlvbihhKSB7IHJldHVybiBjdXN0b20oYSwgcCAqIHRhdSk7IH07XG4gIGVsYXN0aWNJbk91dC5wZXJpb2QgPSBmdW5jdGlvbihwKSB7IHJldHVybiBjdXN0b20oYSwgcCk7IH07XG5cbiAgcmV0dXJuIGVsYXN0aWNJbk91dDtcbn0pKGFtcGxpdHVkZSwgcGVyaW9kKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBleHBJbih0KSB7XG4gIHJldHVybiBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBPdXQodCkge1xuICByZXR1cm4gMSAtIE1hdGgucG93KDIsIC0xMCAqIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwSW5PdXQodCkge1xuICByZXR1cm4gKCh0ICo9IDIpIDw9IDEgPyBNYXRoLnBvdygyLCAxMCAqIHQgLSAxMCkgOiAyIC0gTWF0aC5wb3coMiwgMTAgLSAxMCAqIHQpKSAvIDI7XG59XG4iLCJleHBvcnQge1xuICBsaW5lYXIgYXMgZWFzZUxpbmVhclxufSBmcm9tIFwiLi9saW5lYXIuanNcIjtcblxuZXhwb3J0IHtcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkLFxuICBxdWFkSW4gYXMgZWFzZVF1YWRJbixcbiAgcXVhZE91dCBhcyBlYXNlUXVhZE91dCxcbiAgcXVhZEluT3V0IGFzIGVhc2VRdWFkSW5PdXRcbn0gZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQge1xuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpYyxcbiAgY3ViaWNJbiBhcyBlYXNlQ3ViaWNJbixcbiAgY3ViaWNPdXQgYXMgZWFzZUN1YmljT3V0LFxuICBjdWJpY0luT3V0IGFzIGVhc2VDdWJpY0luT3V0XG59IGZyb20gXCIuL2N1YmljLmpzXCI7XG5cbmV4cG9ydCB7XG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seSxcbiAgcG9seUluIGFzIGVhc2VQb2x5SW4sXG4gIHBvbHlPdXQgYXMgZWFzZVBvbHlPdXQsXG4gIHBvbHlJbk91dCBhcyBlYXNlUG9seUluT3V0XG59IGZyb20gXCIuL3BvbHkuanNcIjtcblxuZXhwb3J0IHtcbiAgc2luSW5PdXQgYXMgZWFzZVNpbixcbiAgc2luSW4gYXMgZWFzZVNpbkluLFxuICBzaW5PdXQgYXMgZWFzZVNpbk91dCxcbiAgc2luSW5PdXQgYXMgZWFzZVNpbkluT3V0XG59IGZyb20gXCIuL3Npbi5qc1wiO1xuXG5leHBvcnQge1xuICBleHBJbk91dCBhcyBlYXNlRXhwLFxuICBleHBJbiBhcyBlYXNlRXhwSW4sXG4gIGV4cE91dCBhcyBlYXNlRXhwT3V0LFxuICBleHBJbk91dCBhcyBlYXNlRXhwSW5PdXRcbn0gZnJvbSBcIi4vZXhwLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGUsXG4gIGNpcmNsZUluIGFzIGVhc2VDaXJjbGVJbixcbiAgY2lyY2xlT3V0IGFzIGVhc2VDaXJjbGVPdXQsXG4gIGNpcmNsZUluT3V0IGFzIGVhc2VDaXJjbGVJbk91dFxufSBmcm9tIFwiLi9jaXJjbGUuanNcIjtcblxuZXhwb3J0IHtcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2UsXG4gIGJvdW5jZUluIGFzIGVhc2VCb3VuY2VJbixcbiAgYm91bmNlT3V0IGFzIGVhc2VCb3VuY2VPdXQsXG4gIGJvdW5jZUluT3V0IGFzIGVhc2VCb3VuY2VJbk91dFxufSBmcm9tIFwiLi9ib3VuY2UuanNcIjtcblxuZXhwb3J0IHtcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrLFxuICBiYWNrSW4gYXMgZWFzZUJhY2tJbixcbiAgYmFja091dCBhcyBlYXNlQmFja091dCxcbiAgYmFja0luT3V0IGFzIGVhc2VCYWNrSW5PdXRcbn0gZnJvbSBcIi4vYmFjay5qc1wiO1xuXG5leHBvcnQge1xuICBlbGFzdGljT3V0IGFzIGVhc2VFbGFzdGljLFxuICBlbGFzdGljSW4gYXMgZWFzZUVsYXN0aWNJbixcbiAgZWxhc3RpY091dCBhcyBlYXNlRWxhc3RpY091dCxcbiAgZWxhc3RpY0luT3V0IGFzIGVhc2VFbGFzdGljSW5PdXRcbn0gZnJvbSBcIi4vZWxhc3RpYy5qc1wiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gIHJldHVybiArdDtcbn1cbiIsInZhciBleHBvbmVudCA9IDM7XG5cbmV4cG9ydCB2YXIgcG9seUluID0gKGZ1bmN0aW9uIGN1c3RvbShlKSB7XG4gIGUgPSArZTtcblxuICBmdW5jdGlvbiBwb2x5SW4odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0LCBlKTtcbiAgfVxuXG4gIHBvbHlJbi5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seUluO1xufSkoZXhwb25lbnQpO1xuXG5leHBvcnQgdmFyIHBvbHlPdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlPdXQodCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHQsIGUpO1xuICB9XG5cbiAgcG9seU91dC5leHBvbmVudCA9IGN1c3RvbTtcblxuICByZXR1cm4gcG9seU91dDtcbn0pKGV4cG9uZW50KTtcblxuZXhwb3J0IHZhciBwb2x5SW5PdXQgPSAoZnVuY3Rpb24gY3VzdG9tKGUpIHtcbiAgZSA9ICtlO1xuXG4gIGZ1bmN0aW9uIHBvbHlJbk91dCh0KSB7XG4gICAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gTWF0aC5wb3codCwgZSkgOiAyIC0gTWF0aC5wb3coMiAtIHQsIGUpKSAvIDI7XG4gIH1cblxuICBwb2x5SW5PdXQuZXhwb25lbnQgPSBjdXN0b207XG5cbiAgcmV0dXJuIHBvbHlJbk91dDtcbn0pKGV4cG9uZW50KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBxdWFkSW4odCkge1xuICByZXR1cm4gdCAqIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgcmV0dXJuIHQgKiAoMiAtIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgcmV0dXJuICgodCAqPSAyKSA8PSAxID8gdCAqIHQgOiAtLXQgKiAoMiAtIHQpICsgMSkgLyAyO1xufVxuIiwidmFyIHBpID0gTWF0aC5QSSxcbiAgICBoYWxmUGkgPSBwaSAvIDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbih0KSB7XG4gIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5PdXQodCkge1xuICByZXR1cm4gTWF0aC5zaW4odCAqIGhhbGZQaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5Jbk91dCh0KSB7XG4gIHJldHVybiAoMSAtIE1hdGguY29zKHBpICogdCkpIC8gMjtcbn1cbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcQXJpZWxza2FwXFxcXERlc2t0b3BcXFxcbXktcGFnZVxcXFxwYWdlc1xcXFxpbmRleC5qc3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIGZvcndhcmRSZWYsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpcyA9IHtcbiAgYXJyOiBBcnJheS5pc0FycmF5LFxuICBvYmo6IGEgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBPYmplY3RdJyxcbiAgZnVuOiBhID0+IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nLFxuICBzdHI6IGEgPT4gdHlwZW9mIGEgPT09ICdzdHJpbmcnLFxuICBudW06IGEgPT4gdHlwZW9mIGEgPT09ICdudW1iZXInLFxuICB1bmQ6IGEgPT4gYSA9PT0gdm9pZCAwLFxuICBudWw6IGEgPT4gYSA9PT0gbnVsbCxcbiAgc2V0OiBhID0+IGEgaW5zdGFuY2VvZiBTZXQsXG4gIG1hcDogYSA9PiBhIGluc3RhbmNlb2YgTWFwLFxuXG4gIGVxdShhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhICE9PSB0eXBlb2YgYikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChpcy5zdHIoYSkgfHwgaXMubnVtKGEpKSByZXR1cm4gYSA9PT0gYjtcbiAgICBpZiAoaXMub2JqKGEpICYmIGlzLm9iaihiKSAmJiBPYmplY3Qua2V5cyhhKS5sZW5ndGggKyBPYmplY3Qua2V5cyhiKS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xuICAgIGxldCBpO1xuXG4gICAgZm9yIChpIGluIGEpIGlmICghKGkgaW4gYikpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSBpbiBiKSBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGlzLnVuZChpKSA/IGEgPT09IGIgOiB0cnVlO1xuICB9XG5cbn07XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIGxvd2VyY2FzZSkge1xuICBpZiAobG93ZXJjYXNlID09PSB2b2lkIDApIHtcbiAgICBsb3dlcmNhc2UgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdCA9PiAoaXMuYXJyKG9iamVjdCkgPyBvYmplY3QgOiBPYmplY3Qua2V5cyhvYmplY3QpKS5yZWR1Y2UoKGFjYywgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGxvd2VyY2FzZSA/IGVsZW1lbnRbMF0udG9Mb3dlckNhc2UoKSArIGVsZW1lbnQuc3Vic3RyaW5nKDEpIDogZWxlbWVudDtcbiAgICBhY2Nba2V5XSA9IHRhcmdldChrZXkpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHRhcmdldCk7XG59XG5mdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgY29uc3QgX3VzZVN0YXRlID0gdXNlU3RhdGUoZmFsc2UpLFxuICAgICAgICBmID0gX3VzZVN0YXRlWzFdO1xuXG4gIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4gZih2ID0+ICF2KSwgW10pO1xuICByZXR1cm4gZm9yY2VVcGRhdGU7XG59XG5mdW5jdGlvbiB3aXRoRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIHJldHVybiBpcy51bmQodmFsdWUpIHx8IGlzLm51bCh2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkoYSkge1xuICByZXR1cm4gIWlzLnVuZChhKSA/IGlzLmFycihhKSA/IGEgOiBbYV0gOiBbXTtcbn1cbmZ1bmN0aW9uIGNhbGxQcm9wKG9iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gaXMuZnVuKG9iaikgPyBvYmooLi4uYXJncykgOiBvYmo7XG59XG5cbmZ1bmN0aW9uIGdldEZvcndhcmRQcm9wcyhwcm9wcykge1xuICBjb25zdCB0byA9IHByb3BzLnRvLFxuICAgICAgICBmcm9tID0gcHJvcHMuZnJvbSxcbiAgICAgICAgY29uZmlnID0gcHJvcHMuY29uZmlnLFxuICAgICAgICBvblN0YXJ0ID0gcHJvcHMub25TdGFydCxcbiAgICAgICAgb25SZXN0ID0gcHJvcHMub25SZXN0LFxuICAgICAgICBvbkZyYW1lID0gcHJvcHMub25GcmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgcmVzZXQgPSBwcm9wcy5yZXNldCxcbiAgICAgICAgcmV2ZXJzZSA9IHByb3BzLnJldmVyc2UsXG4gICAgICAgIGZvcmNlID0gcHJvcHMuZm9yY2UsXG4gICAgICAgIGltbWVkaWF0ZSA9IHByb3BzLmltbWVkaWF0ZSxcbiAgICAgICAgZGVsYXkgPSBwcm9wcy5kZWxheSxcbiAgICAgICAgYXR0YWNoID0gcHJvcHMuYXR0YWNoLFxuICAgICAgICBkZXN0cm95ZWQgPSBwcm9wcy5kZXN0cm95ZWQsXG4gICAgICAgIGludGVycG9sYXRlVG8gPSBwcm9wcy5pbnRlcnBvbGF0ZVRvLFxuICAgICAgICByZWYgPSBwcm9wcy5yZWYsXG4gICAgICAgIGxhenkgPSBwcm9wcy5sYXp5LFxuICAgICAgICBmb3J3YXJkID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInRvXCIsIFwiZnJvbVwiLCBcImNvbmZpZ1wiLCBcIm9uU3RhcnRcIiwgXCJvblJlc3RcIiwgXCJvbkZyYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJyZXNldFwiLCBcInJldmVyc2VcIiwgXCJmb3JjZVwiLCBcImltbWVkaWF0ZVwiLCBcImRlbGF5XCIsIFwiYXR0YWNoXCIsIFwiZGVzdHJveWVkXCIsIFwiaW50ZXJwb2xhdGVUb1wiLCBcInJlZlwiLCBcImxhenlcIl0pO1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVRvKHByb3BzKSB7XG4gIGNvbnN0IGZvcndhcmQgPSBnZXRGb3J3YXJkUHJvcHMocHJvcHMpO1xuICBpZiAoaXMudW5kKGZvcndhcmQpKSByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHRvOiBmb3J3YXJkXG4gIH0sIHByb3BzKTtcbiAgY29uc3QgcmVzdCA9IE9iamVjdC5rZXlzKHByb3BzKS5yZWR1Y2UoKGEsIGspID0+ICFpcy51bmQoZm9yd2FyZFtrXSkgPyBhIDogX2V4dGVuZHMoe30sIGEsIHtcbiAgICBba106IHByb3BzW2tdXG4gIH0pLCB7fSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgdG86IGZvcndhcmRcbiAgfSwgcmVzdCk7XG59XG5mdW5jdGlvbiBoYW5kbGVSZWYocmVmLCBmb3J3YXJkKSB7XG4gIGlmIChmb3J3YXJkKSB7XG4gICAgLy8gSWYgaXQncyBhIGZ1bmN0aW9uLCBhc3N1bWUgaXQncyBhIHJlZiBjYWxsYmFja1xuICAgIGlmIChpcy5mdW4oZm9yd2FyZCkpIGZvcndhcmQocmVmKTtlbHNlIGlmIChpcy5vYmooZm9yd2FyZCkpIHtcbiAgICAgIGZvcndhcmQuY3VycmVudCA9IHJlZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVmO1xufVxuXG5jbGFzcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGF5bG9hZCA9IHZvaWQgMDtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBnZXRBbmltYXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gIH1cblxuICBnZXRQYXlsb2FkKCkge1xuICAgIHJldHVybiB0aGlzLnBheWxvYWQgfHwgdGhpcztcbiAgfVxuXG4gIGF0dGFjaCgpIHt9XG5cbiAgZGV0YWNoKCkge31cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkKSB7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLmF0dGFjaCgpO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB0aGlzLmRldGFjaCgpO1xuICB9XG5cbn1cbmNsYXNzIEFuaW1hdGVkQXJyYXkgZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5wYXlsb2FkID0gW107XG5cbiAgICB0aGlzLmF0dGFjaCA9ICgpID0+IHRoaXMucGF5bG9hZC5mb3JFYWNoKHAgPT4gcCBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHAuYWRkQ2hpbGQodGhpcykpO1xuXG4gICAgdGhpcy5kZXRhY2ggPSAoKSA9PiB0aGlzLnBheWxvYWQuZm9yRWFjaChwID0+IHAgaW5zdGFuY2VvZiBBbmltYXRlZCAmJiBwLnJlbW92ZUNoaWxkKHRoaXMpKTtcbiAgfVxuXG59XG5jbGFzcyBBbmltYXRlZE9iamVjdCBleHRlbmRzIEFuaW1hdGVkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnBheWxvYWQgPSB7fTtcblxuICAgIHRoaXMuYXR0YWNoID0gKCkgPT4gT2JqZWN0LnZhbHVlcyh0aGlzLnBheWxvYWQpLmZvckVhY2gocyA9PiBzIGluc3RhbmNlb2YgQW5pbWF0ZWQgJiYgcy5hZGRDaGlsZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRldGFjaCA9ICgpID0+IE9iamVjdC52YWx1ZXModGhpcy5wYXlsb2FkKS5mb3JFYWNoKHMgPT4gcyBpbnN0YW5jZW9mIEFuaW1hdGVkICYmIHMucmVtb3ZlQ2hpbGQodGhpcykpO1xuICB9XG5cbiAgZ2V0VmFsdWUoYW5pbWF0ZWQpIHtcbiAgICBpZiAoYW5pbWF0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBheWxvYWQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wYXlsb2FkW2tleV07XG4gICAgICBpZiAoYW5pbWF0ZWQgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFuaW1hdGVkKSkgY29udGludWU7XG4gICAgICBwYXlsb2FkW2tleV0gPSB2YWx1ZSBpbnN0YW5jZW9mIEFuaW1hdGVkID8gdmFsdWVbYW5pbWF0ZWQgPyAnZ2V0QW5pbWF0ZWRWYWx1ZScgOiAnZ2V0VmFsdWUnXSgpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH1cblxuICBnZXRBbmltYXRlZFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZhbHVlKHRydWUpO1xuICB9XG5cbn1cblxubGV0IGFwcGx5QW5pbWF0ZWRWYWx1ZXM7XG5mdW5jdGlvbiBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzKGZuLCB0cmFuc2Zvcm0pIHtcbiAgYXBwbHlBbmltYXRlZFZhbHVlcyA9IHtcbiAgICBmbixcbiAgICB0cmFuc2Zvcm1cbiAgfTtcbn1cbmxldCBjb2xvck5hbWVzO1xuZnVuY3Rpb24gaW5qZWN0Q29sb3JOYW1lcyhuYW1lcykge1xuICBjb2xvck5hbWVzID0gbmFtZXM7XG59XG5sZXQgcmVxdWVzdEZyYW1lID0gY2IgPT4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IC0xO1xubGV0IGNhbmNlbEZyYW1lID0gaWQgPT4ge1xuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xufTtcbmZ1bmN0aW9uIGluamVjdEZyYW1lKHJhZiwgY2FmKSB7XG4gIHJlcXVlc3RGcmFtZSA9IHJhZjtcbiAgY2FuY2VsRnJhbWUgPSBjYWY7XG59XG5sZXQgaW50ZXJwb2xhdGlvbjtcbmZ1bmN0aW9uIGluamVjdFN0cmluZ0ludGVycG9sYXRvcihmbikge1xuICBpbnRlcnBvbGF0aW9uID0gZm47XG59XG5sZXQgbm93ID0gKCkgPT4gRGF0ZS5ub3coKTtcbmZ1bmN0aW9uIGluamVjdE5vdyhub3dGbikge1xuICBub3cgPSBub3dGbjtcbn1cbmxldCBkZWZhdWx0RWxlbWVudDtcbmZ1bmN0aW9uIGluamVjdERlZmF1bHRFbGVtZW50KGVsKSB7XG4gIGRlZmF1bHRFbGVtZW50ID0gZWw7XG59XG5sZXQgYW5pbWF0ZWRBcGkgPSBub2RlID0+IG5vZGUuY3VycmVudDtcbmZ1bmN0aW9uIGluamVjdEFuaW1hdGVkQXBpKGZuKSB7XG4gIGFuaW1hdGVkQXBpID0gZm47XG59XG5sZXQgY3JlYXRlQW5pbWF0ZWRTdHlsZTtcbmZ1bmN0aW9uIGluamVjdENyZWF0ZUFuaW1hdGVkU3R5bGUoZmFjdG9yeSkge1xuICBjcmVhdGVBbmltYXRlZFN0eWxlID0gZmFjdG9yeTtcbn1cbmxldCBtYW51YWxGcmFtZWxvb3A7XG5mdW5jdGlvbiBpbmplY3RNYW51YWxGcmFtZWxvb3AoY2FsbGJhY2spIHtcbiAgbWFudWFsRnJhbWVsb29wID0gY2FsbGJhY2s7XG59XG5cbnZhciBHbG9iYWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBnZXQgYXBwbHlBbmltYXRlZFZhbHVlcyAoKSB7IHJldHVybiBhcHBseUFuaW1hdGVkVmFsdWVzOyB9LFxuICBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzOiBpbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzLFxuICBnZXQgY29sb3JOYW1lcyAoKSB7IHJldHVybiBjb2xvck5hbWVzOyB9LFxuICBpbmplY3RDb2xvck5hbWVzOiBpbmplY3RDb2xvck5hbWVzLFxuICBnZXQgcmVxdWVzdEZyYW1lICgpIHsgcmV0dXJuIHJlcXVlc3RGcmFtZTsgfSxcbiAgZ2V0IGNhbmNlbEZyYW1lICgpIHsgcmV0dXJuIGNhbmNlbEZyYW1lOyB9LFxuICBpbmplY3RGcmFtZTogaW5qZWN0RnJhbWUsXG4gIGdldCBpbnRlcnBvbGF0aW9uICgpIHsgcmV0dXJuIGludGVycG9sYXRpb247IH0sXG4gIGluamVjdFN0cmluZ0ludGVycG9sYXRvcjogaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yLFxuICBnZXQgbm93ICgpIHsgcmV0dXJuIG5vdzsgfSxcbiAgaW5qZWN0Tm93OiBpbmplY3ROb3csXG4gIGdldCBkZWZhdWx0RWxlbWVudCAoKSB7IHJldHVybiBkZWZhdWx0RWxlbWVudDsgfSxcbiAgaW5qZWN0RGVmYXVsdEVsZW1lbnQ6IGluamVjdERlZmF1bHRFbGVtZW50LFxuICBnZXQgYW5pbWF0ZWRBcGkgKCkgeyByZXR1cm4gYW5pbWF0ZWRBcGk7IH0sXG4gIGluamVjdEFuaW1hdGVkQXBpOiBpbmplY3RBbmltYXRlZEFwaSxcbiAgZ2V0IGNyZWF0ZUFuaW1hdGVkU3R5bGUgKCkgeyByZXR1cm4gY3JlYXRlQW5pbWF0ZWRTdHlsZTsgfSxcbiAgaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZTogaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZSxcbiAgZ2V0IG1hbnVhbEZyYW1lbG9vcCAoKSB7IHJldHVybiBtYW51YWxGcmFtZWxvb3A7IH0sXG4gIGluamVjdE1hbnVhbEZyYW1lbG9vcDogaW5qZWN0TWFudWFsRnJhbWVsb29wXG59KTtcblxuLyoqXG4gKiBXcmFwcyB0aGUgYHN0eWxlYCBwcm9wZXJ0eSB3aXRoIGBBbmltYXRlZFN0eWxlYC5cbiAqL1xuXG5jbGFzcyBBbmltYXRlZFByb3BzIGV4dGVuZHMgQW5pbWF0ZWRPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY2FsbGJhY2spIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlID0gdm9pZCAwO1xuICAgIHRoaXMucGF5bG9hZCA9ICFwcm9wcy5zdHlsZSA/IHByb3BzIDogX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBzdHlsZTogY3JlYXRlQW5pbWF0ZWRTdHlsZShwcm9wcy5zdHlsZSlcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZSA9IGNhbGxiYWNrO1xuICAgIHRoaXMuYXR0YWNoKCk7XG4gIH1cblxufVxuXG5jb25zdCBpc0Z1bmN0aW9uQ29tcG9uZW50ID0gdmFsID0+IGlzLmZ1bih2YWwpICYmICEodmFsLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0LkNvbXBvbmVudCk7XG5cbmNvbnN0IGNyZWF0ZUFuaW1hdGVkQ29tcG9uZW50ID0gQ29tcG9uZW50ID0+IHtcbiAgY29uc3QgQW5pbWF0ZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgZm9yY2VVcGRhdGUgPSB1c2VGb3JjZVVwZGF0ZSgpO1xuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgY29uc3QgcHJvcHNBbmltYXRlZCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGF0dGFjaFByb3BzID0gdXNlQ2FsbGJhY2socHJvcHMgPT4ge1xuICAgICAgY29uc3Qgb2xkUHJvcHNBbmltYXRlZCA9IHByb3BzQW5pbWF0ZWQuY3VycmVudDtcblxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkaWRVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAobm9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgZGlkVXBkYXRlID0gYXBwbHlBbmltYXRlZFZhbHVlcy5mbihub2RlLmN1cnJlbnQsIHByb3BzQW5pbWF0ZWQuY3VycmVudC5nZXRBbmltYXRlZFZhbHVlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFub2RlLmN1cnJlbnQgfHwgZGlkVXBkYXRlID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIElmIG5vIHJlZmVyZW5jZWQgbm9kZSBoYXMgYmVlbiBmb3VuZCwgb3IgdGhlIHVwZGF0ZSB0YXJnZXQgZGlkbid0IGhhdmUgYVxuICAgICAgICAgIC8vIG5hdGl2ZS1yZXNwb25kZXIsIHRoZW4gZm9yY2VVcGRhdGUgdGhlIGFuaW1hdGlvbiAuLi5cbiAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBwcm9wc0FuaW1hdGVkLmN1cnJlbnQgPSBuZXcgQW5pbWF0ZWRQcm9wcyhwcm9wcywgY2FsbGJhY2spO1xuICAgICAgb2xkUHJvcHNBbmltYXRlZCAmJiBvbGRQcm9wc0FuaW1hdGVkLmRldGFjaCgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xuICAgICAgbW91bnRlZC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICBwcm9wc0FuaW1hdGVkLmN1cnJlbnQgJiYgcHJvcHNBbmltYXRlZC5jdXJyZW50LmRldGFjaCgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gYW5pbWF0ZWRBcGkobm9kZSwgbW91bnRlZCwgZm9yY2VVcGRhdGUpKTtcbiAgICBhdHRhY2hQcm9wcyhwcm9wcyk7XG5cbiAgICBjb25zdCBfZ2V0VmFsdWUgPSBwcm9wc0FuaW1hdGVkLmN1cnJlbnQuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfZ2V0VmFsdWUuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfZ2V0VmFsdWUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhbmltYXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX2dldFZhbHVlLCBbXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTsgLy8gRnVuY3Rpb25zIGNhbm5vdCBoYXZlIHJlZnMsIHNlZTpcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1zcHJpbmcvcmVhY3Qtc3ByaW5nL2lzc3Vlcy81NjlcblxuXG4gICAgY29uc3QgcmVmRm4gPSBpc0Z1bmN0aW9uQ29tcG9uZW50KENvbXBvbmVudCkgPyB1bmRlZmluZWQgOiBjaGlsZFJlZiA9PiBub2RlLmN1cnJlbnQgPSBoYW5kbGVSZWYoY2hpbGRSZWYsIHJlZik7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYW5pbWF0ZWRQcm9wcywge1xuICAgICAgcmVmOiByZWZGblxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiBBbmltYXRlZENvbXBvbmVudDtcbn07XG5cbmxldCBhY3RpdmUgPSBmYWxzZTtcbmNvbnN0IGNvbnRyb2xsZXJzID0gbmV3IFNldCgpO1xuXG5jb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gIGlmICghYWN0aXZlKSByZXR1cm4gZmFsc2U7XG4gIGxldCB0aW1lID0gbm93KCk7XG5cbiAgZm9yIChsZXQgY29udHJvbGxlciBvZiBjb250cm9sbGVycykge1xuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgY29uZmlnSWR4ID0gMDsgY29uZmlnSWR4IDwgY29udHJvbGxlci5jb25maWdzLmxlbmd0aDsgY29uZmlnSWR4KyspIHtcbiAgICAgIGxldCBjb25maWcgPSBjb250cm9sbGVyLmNvbmZpZ3NbY29uZmlnSWR4XTtcbiAgICAgIGxldCBlbmRPZkFuaW1hdGlvbiwgbGFzdFRpbWU7XG5cbiAgICAgIGZvciAobGV0IHZhbElkeCA9IDA7IHZhbElkeCA8IGNvbmZpZy5hbmltYXRlZFZhbHVlcy5sZW5ndGg7IHZhbElkeCsrKSB7XG4gICAgICAgIGxldCBhbmltYXRpb24gPSBjb25maWcuYW5pbWF0ZWRWYWx1ZXNbdmFsSWR4XTsgLy8gSWYgYW4gYW5pbWF0aW9uIGlzIGRvbmUsIHNraXAsIHVudGlsIGFsbCBvZiB0aGVtIGNvbmNsdWRlXG5cbiAgICAgICAgaWYgKGFuaW1hdGlvbi5kb25lKSBjb250aW51ZTtcbiAgICAgICAgbGV0IGZyb20gPSBjb25maWcuZnJvbVZhbHVlc1t2YWxJZHhdO1xuICAgICAgICBsZXQgdG8gPSBjb25maWcudG9WYWx1ZXNbdmFsSWR4XTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gYW5pbWF0aW9uLmxhc3RQb3NpdGlvbjtcbiAgICAgICAgbGV0IGlzQW5pbWF0ZWQgPSB0byBpbnN0YW5jZW9mIEFuaW1hdGVkO1xuICAgICAgICBsZXQgdmVsb2NpdHkgPSBBcnJheS5pc0FycmF5KGNvbmZpZy5pbml0aWFsVmVsb2NpdHkpID8gY29uZmlnLmluaXRpYWxWZWxvY2l0eVt2YWxJZHhdIDogY29uZmlnLmluaXRpYWxWZWxvY2l0eTtcbiAgICAgICAgaWYgKGlzQW5pbWF0ZWQpIHRvID0gdG8uZ2V0VmFsdWUoKTsgLy8gQ29uY2x1ZGUgYW5pbWF0aW9uIGlmIGl0J3MgZWl0aGVyIGltbWVkaWF0ZSwgb3IgZnJvbS12YWx1ZXMgbWF0Y2ggZW5kLXN0YXRlXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pbW1lZGlhdGUpIHtcbiAgICAgICAgICBhbmltYXRpb24uc2V0VmFsdWUodG8pO1xuICAgICAgICAgIGFuaW1hdGlvbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSAvLyBCcmVhayBhbmltYXRpb24gd2hlbiBzdHJpbmcgdmFsdWVzIGFyZSBpbnZvbHZlZFxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnNldFZhbHVlKHRvKTtcbiAgICAgICAgICBhbmltYXRpb24uZG9uZSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLmR1cmF0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvKiogRHVyYXRpb24gZWFzaW5nICovXG4gICAgICAgICAgcG9zaXRpb24gPSBmcm9tICsgY29uZmlnLmVhc2luZygodGltZSAtIGFuaW1hdGlvbi5zdGFydFRpbWUpIC8gY29uZmlnLmR1cmF0aW9uKSAqICh0byAtIGZyb20pO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gdGltZSA+PSBhbmltYXRpb24uc3RhcnRUaW1lICsgY29uZmlnLmR1cmF0aW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5kZWNheSkge1xuICAgICAgICAgIC8qKiBEZWNheSBlYXNpbmcgKi9cbiAgICAgICAgICBwb3NpdGlvbiA9IGZyb20gKyB2ZWxvY2l0eSAvICgxIC0gMC45OTgpICogKDEgLSBNYXRoLmV4cCgtKDEgLSAwLjk5OCkgKiAodGltZSAtIGFuaW1hdGlvbi5zdGFydFRpbWUpKSk7XG4gICAgICAgICAgZW5kT2ZBbmltYXRpb24gPSBNYXRoLmFicyhhbmltYXRpb24ubGFzdFBvc2l0aW9uIC0gcG9zaXRpb24pIDwgMC4xO1xuICAgICAgICAgIGlmIChlbmRPZkFuaW1hdGlvbikgdG8gPSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKiogU3ByaW5nIGVhc2luZyAqL1xuICAgICAgICAgIGxhc3RUaW1lID0gYW5pbWF0aW9uLmxhc3RUaW1lICE9PSB2b2lkIDAgPyBhbmltYXRpb24ubGFzdFRpbWUgOiB0aW1lO1xuICAgICAgICAgIHZlbG9jaXR5ID0gYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSAhPT0gdm9pZCAwID8gYW5pbWF0aW9uLmxhc3RWZWxvY2l0eSA6IGNvbmZpZy5pbml0aWFsVmVsb2NpdHk7IC8vIElmIHdlIGxvc3QgYSBsb3Qgb2YgZnJhbWVzIGp1c3QganVtcCB0byB0aGUgZW5kLlxuXG4gICAgICAgICAgaWYgKHRpbWUgPiBsYXN0VGltZSArIDY0KSBsYXN0VGltZSA9IHRpbWU7IC8vIGh0dHA6Ly9nYWZmZXJvbmdhbWVzLmNvbS9nYW1lLXBoeXNpY3MvZml4LXlvdXItdGltZXN0ZXAvXG5cbiAgICAgICAgICBsZXQgbnVtU3RlcHMgPSBNYXRoLmZsb29yKHRpbWUgLSBsYXN0VGltZSk7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVN0ZXBzOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBmb3JjZSA9IC1jb25maWcudGVuc2lvbiAqIChwb3NpdGlvbiAtIHRvKTtcbiAgICAgICAgICAgIGxldCBkYW1waW5nID0gLWNvbmZpZy5mcmljdGlvbiAqIHZlbG9jaXR5O1xuICAgICAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IChmb3JjZSArIGRhbXBpbmcpIC8gY29uZmlnLm1hc3M7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5ICsgYWNjZWxlcmF0aW9uICogMSAvIDEwMDA7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uICsgdmVsb2NpdHkgKiAxIC8gMTAwMDtcbiAgICAgICAgICB9IC8vIENvbmRpdGlvbnMgZm9yIHN0b3BwaW5nIHRoZSBzcHJpbmcgYW5pbWF0aW9uXG5cblxuICAgICAgICAgIGxldCBpc092ZXJzaG9vdGluZyA9IGNvbmZpZy5jbGFtcCAmJiBjb25maWcudGVuc2lvbiAhPT0gMCA/IGZyb20gPCB0byA/IHBvc2l0aW9uID4gdG8gOiBwb3NpdGlvbiA8IHRvIDogZmFsc2U7XG4gICAgICAgICAgbGV0IGlzVmVsb2NpdHkgPSBNYXRoLmFicyh2ZWxvY2l0eSkgPD0gY29uZmlnLnByZWNpc2lvbjtcbiAgICAgICAgICBsZXQgaXNEaXNwbGFjZW1lbnQgPSBjb25maWcudGVuc2lvbiAhPT0gMCA/IE1hdGguYWJzKHRvIC0gcG9zaXRpb24pIDw9IGNvbmZpZy5wcmVjaXNpb24gOiB0cnVlO1xuICAgICAgICAgIGVuZE9mQW5pbWF0aW9uID0gaXNPdmVyc2hvb3RpbmcgfHwgaXNWZWxvY2l0eSAmJiBpc0Rpc3BsYWNlbWVudDtcbiAgICAgICAgICBhbmltYXRpb24ubGFzdFZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgICAgICAgYW5pbWF0aW9uLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfSAvLyBUcmFpbHMgYXJlbid0IGRvbmUgdW50aWwgdGhlaXIgcGFyZW50cyBjb25jbHVkZVxuXG5cbiAgICAgICAgaWYgKGlzQW5pbWF0ZWQgJiYgIWNvbmZpZy50b1ZhbHVlc1t2YWxJZHhdLmRvbmUpIGVuZE9mQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGVuZE9mQW5pbWF0aW9uKSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoYXQgd2UgZW5kIHVwIHdpdGggYSByb3VuZCB2YWx1ZVxuICAgICAgICAgIGlmIChhbmltYXRpb24udmFsdWUgIT09IHRvKSBwb3NpdGlvbiA9IHRvO1xuICAgICAgICAgIGFuaW1hdGlvbi5kb25lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBhbmltYXRpb24uc2V0VmFsdWUocG9zaXRpb24pO1xuICAgICAgICBhbmltYXRpb24ubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICB9IC8vIEtlZXAgdHJhY2sgb2YgdXBkYXRlZCB2YWx1ZXMgb25seSB3aGVuIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmIChjb250cm9sbGVyLnByb3BzLm9uRnJhbWUpIGNvbnRyb2xsZXIudmFsdWVzW2NvbmZpZy5uYW1lXSA9IGNvbmZpZy5pbnRlcnBvbGF0aW9uLmdldFZhbHVlKCk7XG4gICAgfSAvLyBVcGRhdGUgY2FsbGJhY2tzIGluIHRoZSBlbmQgb2YgdGhlIGZyYW1lXG5cblxuICAgIGlmIChjb250cm9sbGVyLnByb3BzLm9uRnJhbWUpIGNvbnRyb2xsZXIucHJvcHMub25GcmFtZShjb250cm9sbGVyLnZhbHVlcyk7IC8vIEVpdGhlciBjYWxsIG9uRW5kIG9yIG5leHQgZnJhbWVcblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgIGNvbnRyb2xsZXIuc3RvcCh0cnVlKTtcbiAgICB9XG4gIH0gLy8gTG9vcCBvdmVyIGFzIGxvbmcgYXMgdGhlcmUgYXJlIGNvbnRyb2xsZXJzIC4uLlxuXG5cbiAgaWYgKGNvbnRyb2xsZXJzLnNpemUpIHtcbiAgICBpZiAobWFudWFsRnJhbWVsb29wKSBtYW51YWxGcmFtZWxvb3AoKTtlbHNlIHJlcXVlc3RGcmFtZSh1cGRhdGUpO1xuICB9IGVsc2Uge1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGFjdGl2ZTtcbn07XG5cbmNvbnN0IHN0YXJ0ID0gY29udHJvbGxlciA9PiB7XG4gIGlmICghY29udHJvbGxlcnMuaGFzKGNvbnRyb2xsZXIpKSBjb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG5cbiAgaWYgKCFhY3RpdmUpIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIGlmIChtYW51YWxGcmFtZWxvb3ApIHJlcXVlc3RGcmFtZShtYW51YWxGcmFtZWxvb3ApO2Vsc2UgcmVxdWVzdEZyYW1lKHVwZGF0ZSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0b3AgPSBjb250cm9sbGVyID0+IHtcbiAgaWYgKGNvbnRyb2xsZXJzLmhhcyhjb250cm9sbGVyKSkgY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSW50ZXJwb2xhdG9yKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gIGlmICh0eXBlb2YgcmFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcmFuZ2U7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShyYW5nZSkpIHtcbiAgICByZXR1cm4gY3JlYXRlSW50ZXJwb2xhdG9yKHtcbiAgICAgIHJhbmdlLFxuICAgICAgb3V0cHV0OiBvdXRwdXQsXG4gICAgICBleHRyYXBvbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGludGVycG9sYXRpb24gJiYgdHlwZW9mIHJhbmdlLm91dHB1dFswXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbihyYW5nZSk7XG4gIH1cblxuICBjb25zdCBjb25maWcgPSByYW5nZTtcbiAgY29uc3Qgb3V0cHV0UmFuZ2UgPSBjb25maWcub3V0cHV0O1xuICBjb25zdCBpbnB1dFJhbmdlID0gY29uZmlnLnJhbmdlIHx8IFswLCAxXTtcbiAgY29uc3QgZXh0cmFwb2xhdGVMZWZ0ID0gY29uZmlnLmV4dHJhcG9sYXRlTGVmdCB8fCBjb25maWcuZXh0cmFwb2xhdGUgfHwgJ2V4dGVuZCc7XG4gIGNvbnN0IGV4dHJhcG9sYXRlUmlnaHQgPSBjb25maWcuZXh0cmFwb2xhdGVSaWdodCB8fCBjb25maWcuZXh0cmFwb2xhdGUgfHwgJ2V4dGVuZCc7XG5cbiAgY29uc3QgZWFzaW5nID0gY29uZmlnLmVhc2luZyB8fCAodCA9PiB0KTtcblxuICByZXR1cm4gaW5wdXQgPT4ge1xuICAgIGNvbnN0IHJhbmdlID0gZmluZFJhbmdlKGlucHV0LCBpbnB1dFJhbmdlKTtcbiAgICByZXR1cm4gaW50ZXJwb2xhdGUoaW5wdXQsIGlucHV0UmFuZ2VbcmFuZ2VdLCBpbnB1dFJhbmdlW3JhbmdlICsgMV0sIG91dHB1dFJhbmdlW3JhbmdlXSwgb3V0cHV0UmFuZ2VbcmFuZ2UgKyAxXSwgZWFzaW5nLCBleHRyYXBvbGF0ZUxlZnQsIGV4dHJhcG9sYXRlUmlnaHQsIGNvbmZpZy5tYXApO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShpbnB1dCwgaW5wdXRNaW4sIGlucHV0TWF4LCBvdXRwdXRNaW4sIG91dHB1dE1heCwgZWFzaW5nLCBleHRyYXBvbGF0ZUxlZnQsIGV4dHJhcG9sYXRlUmlnaHQsIG1hcCkge1xuICBsZXQgcmVzdWx0ID0gbWFwID8gbWFwKGlucHV0KSA6IGlucHV0OyAvLyBFeHRyYXBvbGF0ZVxuXG4gIGlmIChyZXN1bHQgPCBpbnB1dE1pbikge1xuICAgIGlmIChleHRyYXBvbGF0ZUxlZnQgPT09ICdpZGVudGl0eScpIHJldHVybiByZXN1bHQ7ZWxzZSBpZiAoZXh0cmFwb2xhdGVMZWZ0ID09PSAnY2xhbXAnKSByZXN1bHQgPSBpbnB1dE1pbjtcbiAgfVxuXG4gIGlmIChyZXN1bHQgPiBpbnB1dE1heCkge1xuICAgIGlmIChleHRyYXBvbGF0ZVJpZ2h0ID09PSAnaWRlbnRpdHknKSByZXR1cm4gcmVzdWx0O2Vsc2UgaWYgKGV4dHJhcG9sYXRlUmlnaHQgPT09ICdjbGFtcCcpIHJlc3VsdCA9IGlucHV0TWF4O1xuICB9XG5cbiAgaWYgKG91dHB1dE1pbiA9PT0gb3V0cHV0TWF4KSByZXR1cm4gb3V0cHV0TWluO1xuICBpZiAoaW5wdXRNaW4gPT09IGlucHV0TWF4KSByZXR1cm4gaW5wdXQgPD0gaW5wdXRNaW4gPyBvdXRwdXRNaW4gOiBvdXRwdXRNYXg7IC8vIElucHV0IFJhbmdlXG5cbiAgaWYgKGlucHV0TWluID09PSAtSW5maW5pdHkpIHJlc3VsdCA9IC1yZXN1bHQ7ZWxzZSBpZiAoaW5wdXRNYXggPT09IEluZmluaXR5KSByZXN1bHQgPSByZXN1bHQgLSBpbnB1dE1pbjtlbHNlIHJlc3VsdCA9IChyZXN1bHQgLSBpbnB1dE1pbikgLyAoaW5wdXRNYXggLSBpbnB1dE1pbik7IC8vIEVhc2luZ1xuXG4gIHJlc3VsdCA9IGVhc2luZyhyZXN1bHQpOyAvLyBPdXRwdXQgUmFuZ2VcblxuICBpZiAob3V0cHV0TWluID09PSAtSW5maW5pdHkpIHJlc3VsdCA9IC1yZXN1bHQ7ZWxzZSBpZiAob3V0cHV0TWF4ID09PSBJbmZpbml0eSkgcmVzdWx0ID0gcmVzdWx0ICsgb3V0cHV0TWluO2Vsc2UgcmVzdWx0ID0gcmVzdWx0ICogKG91dHB1dE1heCAtIG91dHB1dE1pbikgKyBvdXRwdXRNaW47XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRSYW5nZShpbnB1dCwgaW5wdXRSYW5nZSkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0UmFuZ2UubGVuZ3RoIC0gMTsgKytpKSBpZiAoaW5wdXRSYW5nZVtpXSA+PSBpbnB1dCkgYnJlYWs7XG5cbiAgcmV0dXJuIGkgLSAxO1xufVxuXG5jbGFzcyBBbmltYXRlZEludGVycG9sYXRpb24gZXh0ZW5kcyBBbmltYXRlZEFycmF5IHtcbiAgY29uc3RydWN0b3IocGFyZW50cywgcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FsYyA9IHZvaWQgMDtcbiAgICB0aGlzLnBheWxvYWQgPSBwYXJlbnRzIGluc3RhbmNlb2YgQW5pbWF0ZWRBcnJheSAmJiAhKHBhcmVudHMgaW5zdGFuY2VvZiBBbmltYXRlZEludGVycG9sYXRpb24pID8gcGFyZW50cy5nZXRQYXlsb2FkKCkgOiBBcnJheS5pc0FycmF5KHBhcmVudHMpID8gcGFyZW50cyA6IFtwYXJlbnRzXTtcbiAgICB0aGlzLmNhbGMgPSBjcmVhdGVJbnRlcnBvbGF0b3IocmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsYyguLi50aGlzLnBheWxvYWQubWFwKHZhbHVlID0+IHZhbHVlLmdldFZhbHVlKCkpKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbmZpZyhyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHRoaXMuY2FsYyA9IGNyZWF0ZUludGVycG9sYXRvcihyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZShyYW5nZSwgb3V0cHV0LCBleHRyYXBvbGF0ZSkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKTtcbiAgfVxuXG59XG5cbmNvbnN0IGludGVycG9sYXRlJDEgPSAocGFyZW50cywgcmFuZ2UsIG91dHB1dCkgPT4gcGFyZW50cyAmJiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHBhcmVudHMsIHJhbmdlLCBvdXRwdXQpO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICB0ZW5zaW9uOiAxNzAsXG4gICAgZnJpY3Rpb246IDI2XG4gIH0sXG4gIGdlbnRsZToge1xuICAgIHRlbnNpb246IDEyMCxcbiAgICBmcmljdGlvbjogMTRcbiAgfSxcbiAgd29iYmx5OiB7XG4gICAgdGVuc2lvbjogMTgwLFxuICAgIGZyaWN0aW9uOiAxMlxuICB9LFxuICBzdGlmZjoge1xuICAgIHRlbnNpb246IDIxMCxcbiAgICBmcmljdGlvbjogMjBcbiAgfSxcbiAgc2xvdzoge1xuICAgIHRlbnNpb246IDI4MCxcbiAgICBmcmljdGlvbjogNjBcbiAgfSxcbiAgbW9sYXNzZXM6IHtcbiAgICB0ZW5zaW9uOiAyODAsXG4gICAgZnJpY3Rpb246IDEyMFxuICB9XG59O1xuXG4vKiogQVBJXG4gKiAgdXNlQ2hhaW4ocmVmZXJlbmNlcywgdGltZVN0ZXBzLCB0aW1lRnJhbWUpXG4gKi9cblxuZnVuY3Rpb24gdXNlQ2hhaW4ocmVmcywgdGltZVN0ZXBzLCB0aW1lRnJhbWUpIHtcbiAgaWYgKHRpbWVGcmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgdGltZUZyYW1lID0gMTAwMDtcbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzID0gdXNlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzLmVxdShyZWZzLCBwcmV2aW91cy5jdXJyZW50KSkgcmVmcy5mb3JFYWNoKChfcmVmKSA9PiB7XG4gICAgICBsZXQgY3VycmVudCA9IF9yZWYuY3VycmVudDtcbiAgICAgIHJldHVybiBjdXJyZW50ICYmIGN1cnJlbnQuc3RhcnQoKTtcbiAgICB9KTtlbHNlIGlmICh0aW1lU3RlcHMpIHtcbiAgICAgIHJlZnMuZm9yRWFjaCgoX3JlZjIsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gX3JlZjIuY3VycmVudDtcblxuICAgICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICAgIGNvbnN0IGN0cmxzID0gY3VycmVudC5jb250cm9sbGVycztcblxuICAgICAgICAgIGlmIChjdHJscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aW1lRnJhbWUgKiB0aW1lU3RlcHNbaW5kZXhdO1xuICAgICAgICAgICAgY3RybHMuZm9yRWFjaChjdHJsID0+IHtcbiAgICAgICAgICAgICAgY3RybC5xdWV1ZSA9IGN0cmwucXVldWUubWFwKGUgPT4gX2V4dGVuZHMoe30sIGUsIHtcbiAgICAgICAgICAgICAgICBkZWxheTogZS5kZWxheSArIHRcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICBjdHJsLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSByZWZzLnJlZHVjZSgocSwgX3JlZjMsIHJJKSA9PiB7XG4gICAgICBsZXQgY3VycmVudCA9IF9yZWYzLmN1cnJlbnQ7XG4gICAgICByZXR1cm4gcSA9IHEudGhlbigoKSA9PiBjdXJyZW50LnN0YXJ0KCkpO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICBwcmV2aW91cy5jdXJyZW50ID0gcmVmcztcbiAgfSk7XG59XG5cbi8qKlxuICogQW5pbWF0ZWQgd29ya3MgYnkgYnVpbGRpbmcgYSBkaXJlY3RlZCBhY3ljbGljIGdyYXBoIG9mIGRlcGVuZGVuY2llc1xuICogdHJhbnNwYXJlbnRseSB3aGVuIHlvdSByZW5kZXIgeW91ciBBbmltYXRlZCBjb21wb25lbnRzLlxuICpcbiAqICAgICAgICAgICAgICAgbmV3IEFuaW1hdGVkLlZhbHVlKDApXG4gKiAgICAgLmludGVycG9sYXRlKCkgICAgICAgIC5pbnRlcnBvbGF0ZSgpICAgIG5ldyBBbmltYXRlZC5WYWx1ZSgxKVxuICogICAgICAgICBvcGFjaXR5ICAgICAgICAgICAgICAgdHJhbnNsYXRlWSAgICAgIHNjYWxlXG4gKiAgICAgICAgICBzdHlsZSAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1cbiAqICAgICAgICAgVmlldyMyMzQgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IzEyM1xuICpcbiAqIEEpIFRvcCBEb3duIHBoYXNlXG4gKiBXaGVuIGFuIEFuaW1hdGVkVmFsdWUgaXMgdXBkYXRlZCwgd2UgcmVjdXJzaXZlbHkgZ28gZG93biB0aHJvdWdoIHRoaXNcbiAqIGdyYXBoIGluIG9yZGVyIHRvIGZpbmQgbGVhZiBub2RlczogdGhlIHZpZXdzIHRoYXQgd2UgZmxhZyBhcyBuZWVkaW5nXG4gKiBhbiB1cGRhdGUuXG4gKlxuICogQikgQm90dG9tIFVwIHBoYXNlXG4gKiBXaGVuIGEgdmlldyBpcyBmbGFnZ2VkIGFzIG5lZWRpbmcgYW4gdXBkYXRlLCB3ZSByZWN1cnNpdmVseSBnbyBiYWNrIHVwXG4gKiBpbiBvcmRlciB0byBidWlsZCB0aGUgbmV3IHZhbHVlIHRoYXQgaXQgbmVlZHMuIFRoZSByZWFzb24gd2h5IHdlIG5lZWRcbiAqIHRoaXMgdHdvLXBoYXNlcyBwcm9jZXNzIGlzIHRvIGRlYWwgd2l0aCBjb21wb3NpdGUgcHJvcHMgc3VjaCBhc1xuICogdHJhbnNmb3JtIHdoaWNoIGNhbiByZWNlaXZlIHZhbHVlcyBmcm9tIG11bHRpcGxlIHBhcmVudHMuXG4gKi9cbmZ1bmN0aW9uIGFkZEFuaW1hdGVkU3R5bGVzKG5vZGUsIHN0eWxlcykge1xuICBpZiAoJ3VwZGF0ZScgaW4gbm9kZSkge1xuICAgIHN0eWxlcy5hZGQobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4gYWRkQW5pbWF0ZWRTdHlsZXMoY2hpbGQsIHN0eWxlcykpO1xuICB9XG59XG5cbmNsYXNzIEFuaW1hdGVkVmFsdWUgZXh0ZW5kcyBBbmltYXRlZCB7XG4gIGNvbnN0cnVjdG9yKF92YWx1ZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHN1cGVyKCk7XG4gICAgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuYW5pbWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy52YWx1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0UG9zaXRpb24gPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0VmVsb2NpdHkgPSB2b2lkIDA7XG4gICAgdGhpcy5zdGFydFRpbWUgPSB2b2lkIDA7XG4gICAgdGhpcy5sYXN0VGltZSA9IHZvaWQgMDtcbiAgICB0aGlzLmRvbmUgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZsdXNoKSB7XG4gICAgICBpZiAoZmx1c2ggPT09IHZvaWQgMCkge1xuICAgICAgICBmbHVzaCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoZmx1c2gpIF90aGlzLmZsdXNoKCk7XG4gICAgfTtcblxuICAgIHRoaXMudmFsdWUgPSBfdmFsdWU7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gX3ZhbHVlO1xuICAgIHRoaXMubGFzdFBvc2l0aW9uID0gX3ZhbHVlO1xuICB9XG5cbiAgZmx1c2goKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0ZWRTdHlsZXMuc2l6ZSA9PT0gMCkge1xuICAgICAgYWRkQW5pbWF0ZWRTdHlsZXModGhpcywgdGhpcy5hbmltYXRlZFN0eWxlcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlZFN0eWxlcy5mb3JFYWNoKGFuaW1hdGVkU3R5bGUgPT4gYW5pbWF0ZWRTdHlsZS51cGRhdGUoKSk7XG4gIH1cblxuICBjbGVhclN0eWxlcygpIHtcbiAgICB0aGlzLmFuaW1hdGVkU3R5bGVzLmNsZWFyKCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGludGVycG9sYXRlKHJhbmdlLCBvdXRwdXQsIGV4dHJhcG9sYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBBbmltYXRlZEludGVycG9sYXRpb24odGhpcywgcmFuZ2UsIG91dHB1dCwgZXh0cmFwb2xhdGUpO1xuICB9XG5cbn1cblxuY2xhc3MgQW5pbWF0ZWRWYWx1ZUFycmF5IGV4dGVuZHMgQW5pbWF0ZWRBcnJheSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXlsb2FkID0gdmFsdWVzLm1hcChuID0+IG5ldyBBbmltYXRlZFZhbHVlKG4pKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlLCBmbHVzaCkge1xuICAgIGlmIChmbHVzaCA9PT0gdm9pZCAwKSB7XG4gICAgICBmbHVzaCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSB0aGlzLnBheWxvYWQubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHYsIGkpID0+IHRoaXMucGF5bG9hZFtpXS5zZXRWYWx1ZSh2LCBmbHVzaCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBheWxvYWQuZm9yRWFjaChwID0+IHAuc2V0VmFsdWUodmFsdWUsIGZsdXNoKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF5bG9hZC5tYXAodiA9PiB2LmdldFZhbHVlKCkpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGUocmFuZ2UsIG91dHB1dCkge1xuICAgIHJldHVybiBuZXcgQW5pbWF0ZWRJbnRlcnBvbGF0aW9uKHRoaXMsIHJhbmdlLCBvdXRwdXQpO1xuICB9XG5cbn1cblxubGV0IEcgPSAwO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pZCA9IHZvaWQgMDtcbiAgICB0aGlzLmlkbGUgPSB0cnVlO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ3VpZCA9IDA7XG4gICAgdGhpcy5sb2NhbCA9IDA7XG4gICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgIHRoaXMubWVyZ2VkID0ge307XG4gICAgdGhpcy5hbmltYXRpb25zID0ge307XG4gICAgdGhpcy5pbnRlcnBvbGF0aW9ucyA9IHt9O1xuICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgdGhpcy5jb25maWdzID0gW107XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgdGhpcy5sb2NhbFF1ZXVlID0gdm9pZCAwO1xuXG4gICAgdGhpcy5nZXRWYWx1ZXMgPSAoKSA9PiB0aGlzLmludGVycG9sYXRpb25zO1xuXG4gICAgdGhpcy5pZCA9IEcrKztcbiAgfVxuICAvKiogdXBkYXRlKHByb3BzKVxuICAgKiAgVGhpcyBmdW5jdGlvbiBmaWx0ZXJzIGlucHV0IHByb3BzIGFuZCBjcmVhdGVzIGFuIGFycmF5IG9mIHRhc2tzIHdoaWNoIGFyZSBleGVjdXRlZCBpbiAuc3RhcnQoKVxuICAgKiAgRWFjaCB0YXNrIGlzIGFsbG93ZWQgdG8gY2FycnkgYSBkZWxheSwgd2hpY2ggbWVhbnMgaXQgY2FuIGV4ZWN1dGUgYXNueWNocm9uZW91c2x5ICovXG5cblxuICB1cGRhdGUoYXJncykge1xuICAgIC8vdGhpcy5faWQgPSBuICsgdGhpcy5pZFxuICAgIGlmICghYXJncykgcmV0dXJuIHRoaXM7IC8vIEV4dHJhY3QgZGVsYXkgYW5kIHRoZSB0by1wcm9wIGZyb20gcHJvcHNcblxuICAgIGNvbnN0IF9yZWYgPSBpbnRlcnBvbGF0ZVRvKGFyZ3MpLFxuICAgICAgICAgIF9yZWYkZGVsYXkgPSBfcmVmLmRlbGF5LFxuICAgICAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMCA6IF9yZWYkZGVsYXksXG4gICAgICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiZGVsYXlcIiwgXCJ0b1wiXSk7XG5cbiAgICBpZiAoaXMuYXJyKHRvKSB8fCBpcy5mdW4odG8pKSB7XG4gICAgICAvLyBJZiBjb25maWcgaXMgZWl0aGVyIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkgcXVldWUgaXQgdXAgYXMgaXNcbiAgICAgIHRoaXMucXVldWUucHVzaChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIHRvXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmICh0bykge1xuICAgICAgLy8gT3RoZXJ3aXNlIGdvIHRocm91Z2ggZWFjaCBrZXkgc2luY2UgaXQgY291bGQgYmUgZGVsYXllZCBpbmRpdmlkdWFsbHlcbiAgICAgIGxldCBvcHMgPSB7fTtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRvKS5mb3JFYWNoKChfcmVmMikgPT4ge1xuICAgICAgICBsZXQgayA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgdiA9IF9yZWYyWzFdO1xuXG4gICAgICAgIC8vIEZldGNoIGRlbGF5IGFuZCBjcmVhdGUgYW4gZW50cnksIGNvbnNpc3Rpbmcgb2YgdGhlIHRvLXByb3BzLCB0aGUgZGVsYXksIGFuZCBiYXNpYyBwcm9wc1xuICAgICAgICBjb25zdCBlbnRyeSA9IF9leHRlbmRzKHtcbiAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgW2tdOiB2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxheTogY2FsbFByb3AoZGVsYXksIGspXG4gICAgICAgIH0sIHByb3BzKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91cyA9IG9wc1tlbnRyeS5kZWxheV0gJiYgb3BzW2VudHJ5LmRlbGF5XS50bztcbiAgICAgICAgb3BzW2VudHJ5LmRlbGF5XSA9IF9leHRlbmRzKHt9LCBvcHNbZW50cnkuZGVsYXldLCBlbnRyeSwge1xuICAgICAgICAgIHRvOiBfZXh0ZW5kcyh7fSwgcHJldmlvdXMsIGVudHJ5LnRvKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5xdWV1ZSA9IE9iamVjdC52YWx1ZXMob3BzKTtcbiAgICB9IC8vIFNvcnQgcXVldWUsIHNvIHRoYXQgYXN5bmMgY2FsbHMgZ28gbGFzdFxuXG5cbiAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5zb3J0KChhLCBiKSA9PiBhLmRlbGF5IC0gYi5kZWxheSk7IC8vIERpZmYgdGhlIHJlZHVjZWQgcHJvcHMgaW1tZWRpYXRlbHkgKHRoZXknbGwgY29udGFpbiB0aGUgZnJvbS1wcm9wIGFuZCBzb21lIGNvbmZpZylcblxuICAgIHRoaXMuZGlmZihwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIHN0YXJ0KG9uRW5kKVxuICAgKiAgVGhpcyBmdW5jdGlvbiBlaXRoZXIgZXhlY3V0ZXMgYSBxdWV1ZSwgaWYgcHJlc2VudCwgb3Igc3RhcnRzIHRoZSBmcmFtZWxvb3AsIHdoaWNoIGFuaW1hdGVzICovXG5cblxuICBzdGFydChvbkVuZCkge1xuICAgIC8vIElmIGEgcXVldWUgaXMgcHJlc2VudCB3ZSBtdXN0IGV4Y2VjdXRlIGl0XG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlkbGUgPSBmYWxzZTsgLy8gVXBkYXRlcyBjYW4gaW50ZXJydXB0IHRyYWlsaW5nIHF1ZXVlcywgaW4gdGhhdCBjYXNlIHdlIGp1c3QgbWVyZ2UgdmFsdWVzXG5cbiAgICAgIGlmICh0aGlzLmxvY2FsUXVldWUpIHtcbiAgICAgICAgdGhpcy5sb2NhbFF1ZXVlLmZvckVhY2goKF9yZWYzKSA9PiB7XG4gICAgICAgICAgbGV0IF9yZWYzJGZyb20gPSBfcmVmMy5mcm9tLFxuICAgICAgICAgICAgICBmcm9tID0gX3JlZjMkZnJvbSA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRmcm9tLFxuICAgICAgICAgICAgICBfcmVmMyR0byA9IF9yZWYzLnRvLFxuICAgICAgICAgICAgICB0byA9IF9yZWYzJHRvID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJHRvO1xuICAgICAgICAgIGlmIChpcy5vYmooZnJvbSkpIHRoaXMubWVyZ2VkID0gX2V4dGVuZHMoe30sIGZyb20sIHRoaXMubWVyZ2VkKTtcbiAgICAgICAgICBpZiAoaXMub2JqKHRvKSkgdGhpcy5tZXJnZWQgPSBfZXh0ZW5kcyh7fSwgdGhpcy5tZXJnZWQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFRoZSBndWlkIGhlbHBzIHVzIHRyYWNraW5nIGZyYW1lcywgYSBuZXcgcXVldWUgb3ZlciBhbiBvbGQgb25lIG1lYW5zIGFuIG92ZXJyaWRlXG4gICAgICAvLyBXZSBkaXNjYXJkIGFzeW5jIGNhbGxzIGluIHRoYXQgY2FzZcONXG5cblxuICAgICAgY29uc3QgbG9jYWwgPSB0aGlzLmxvY2FsID0gKyt0aGlzLmd1aWQ7XG4gICAgICBjb25zdCBxdWV1ZSA9IHRoaXMubG9jYWxRdWV1ZSA9IHRoaXMucXVldWU7XG4gICAgICB0aGlzLnF1ZXVlID0gW107IC8vIEdvIHRocm91Z2ggZWFjaCBlbnRyeSBhbmQgZXhlY3V0ZSBpdFxuXG4gICAgICBxdWV1ZS5mb3JFYWNoKChfcmVmNCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGRlbGF5ID0gX3JlZjQuZGVsYXksXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBbXCJkZWxheVwiXSk7XG5cbiAgICAgICAgY29uc3QgY2IgPSBmaW5pc2hlZCA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSBxdWV1ZS5sZW5ndGggLSAxICYmIGxvY2FsID09PSB0aGlzLmd1aWQgJiYgZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWRsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5vblJlc3QpIHRoaXMucHJvcHMub25SZXN0KHRoaXMubWVyZ2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25FbmQpIG9uRW5kKCk7XG4gICAgICAgIH07IC8vIEVudHJpZXMgY2FuIGJlIGRlbGF5ZWQsIGFuc3ljIG9yIGltbWVkaWF0ZVxuXG5cbiAgICAgICAgbGV0IGFzeW5jID0gaXMuYXJyKHByb3BzLnRvKSB8fCBpcy5mdW4ocHJvcHMudG8pO1xuXG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvY2FsID09PSB0aGlzLmd1aWQpIHtcbiAgICAgICAgICAgICAgaWYgKGFzeW5jKSB0aGlzLnJ1bkFzeW5jKHByb3BzLCBjYik7ZWxzZSB0aGlzLmRpZmYocHJvcHMpLnN0YXJ0KGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXN5bmMpIHRoaXMucnVuQXN5bmMocHJvcHMsIGNiKTtlbHNlIHRoaXMuZGlmZihwcm9wcykuc3RhcnQoY2IpO1xuICAgICAgfSk7XG4gICAgfSAvLyBPdGhlcndpc2Ugd2Uga2ljayBvZiB0aGUgZnJhbWVsb29wXG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpcy5mdW4ob25FbmQpKSB0aGlzLmxpc3RlbmVycy5wdXNoKG9uRW5kKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TdGFydCkgdGhpcy5wcm9wcy5vblN0YXJ0KCk7XG4gICAgICAgIHN0YXJ0KHRoaXMpO1xuICAgICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKGZpbmlzaGVkKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChvbkVuZCA9PiBvbkVuZChmaW5pc2hlZCkpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqIFBhdXNlIHNldHMgb25FbmQgbGlzdGVuZXJzIGZyZWUsIGJ1dCBhbHNvIHJlbW92ZXMgdGhlIGNvbnRyb2xsZXIgZnJvbSB0aGUgZnJhbWVsb29wICovXG5cblxuICBwYXVzZShmaW5pc2hlZCkge1xuICAgIHRoaXMuc3RvcCh0cnVlKTtcbiAgICBpZiAoZmluaXNoZWQpIHN0b3AodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBydW5Bc3luYyhfcmVmNSwgb25FbmQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgbGV0IGRlbGF5ID0gX3JlZjUuZGVsYXksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcImRlbGF5XCJdKTtcblxuICAgIGNvbnN0IGxvY2FsID0gdGhpcy5sb2NhbDsgLy8gSWYgXCJ0b1wiIGlzIGVpdGhlciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5IGl0IHdpbGwgYmUgcHJvY2Vzc2VkIGFzeW5jLCB0aGVyZWZvciBcInRvXCIgc2hvdWxkIGJlIGVtcHR5IHJpZ2h0IG5vd1xuICAgIC8vIElmIHRoZSB2aWV3IHJlbGllcyBvbiBjZXJ0YWluIHZhbHVlcyBcImZyb21cIiBoYXMgdG8gYmUgcHJlc2VudFxuXG4gICAgbGV0IHF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG5cbiAgICBpZiAoaXMuYXJyKHByb3BzLnRvKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy50by5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgZnJlc2ggPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIGludGVycG9sYXRlVG8ocHJvcHMudG9baW5kZXhdKSk7XG5cbiAgICAgICAgaWYgKGlzLmFycihmcmVzaC5jb25maWcpKSBmcmVzaC5jb25maWcgPSBmcmVzaC5jb25maWdbaW5kZXhdO1xuICAgICAgICBxdWV1ZSA9IHF1ZXVlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vdGhpcy5zdG9wKClcbiAgICAgICAgICBpZiAobG9jYWwgPT09IHRoaXMuZ3VpZCkgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gdGhpcy5kaWZmKGZyZXNoKS5zdGFydChyKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXMuZnVuKHByb3BzLnRvKSkge1xuICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgIGxldCBsYXN0O1xuICAgICAgcXVldWUgPSBxdWV1ZS50aGVuKCgpID0+IHByb3BzLnRvKCAvLyBuZXh0KHByb3BzKVxuICAgICAgcCA9PiB7XG4gICAgICAgIGNvbnN0IGZyZXNoID0gX2V4dGVuZHMoe30sIHByb3BzLCBpbnRlcnBvbGF0ZVRvKHApKTtcblxuICAgICAgICBpZiAoaXMuYXJyKGZyZXNoLmNvbmZpZykpIGZyZXNoLmNvbmZpZyA9IGZyZXNoLmNvbmZpZ1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7IC8vdGhpcy5zdG9wKClcblxuICAgICAgICBpZiAobG9jYWwgPT09IHRoaXMuZ3VpZCkgcmV0dXJuIGxhc3QgPSBuZXcgUHJvbWlzZShyID0+IHRoaXMuZGlmZihmcmVzaCkuc3RhcnQocikpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9LCAvLyBjYW5jZWwoKVxuICAgICAgZnVuY3Rpb24gKGZpbmlzaGVkKSB7XG4gICAgICAgIGlmIChmaW5pc2hlZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnN0b3AoZmluaXNoZWQpO1xuICAgICAgfSkudGhlbigoKSA9PiBsYXN0KSk7XG4gICAgfVxuXG4gICAgcXVldWUudGhlbihvbkVuZCk7XG4gIH1cblxuICBkaWZmKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgbGV0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgX3RoaXMkcHJvcHMkZnJvbSA9IF90aGlzJHByb3BzLmZyb20sXG4gICAgICAgIGZyb20gPSBfdGhpcyRwcm9wcyRmcm9tID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGZyb20sXG4gICAgICAgIF90aGlzJHByb3BzJHRvID0gX3RoaXMkcHJvcHMudG8sXG4gICAgICAgIHRvID0gX3RoaXMkcHJvcHMkdG8gPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkdG8sXG4gICAgICAgIF90aGlzJHByb3BzJGNvbmZpZyA9IF90aGlzJHByb3BzLmNvbmZpZyxcbiAgICAgICAgY29uZmlnID0gX3RoaXMkcHJvcHMkY29uZmlnID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGNvbmZpZyxcbiAgICAgICAgcmV2ZXJzZSA9IF90aGlzJHByb3BzLnJldmVyc2UsXG4gICAgICAgIGF0dGFjaCA9IF90aGlzJHByb3BzLmF0dGFjaCxcbiAgICAgICAgcmVzZXQgPSBfdGhpcyRwcm9wcy5yZXNldCxcbiAgICAgICAgaW1tZWRpYXRlID0gX3RoaXMkcHJvcHMuaW1tZWRpYXRlOyAvLyBSZXZlcnNlIHZhbHVlcyB3aGVuIHJlcXVlc3RlZFxuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHZhciBfcmVmNiA9IFt0bywgZnJvbV07XG4gICAgICBmcm9tID0gX3JlZjZbMF07XG4gICAgICB0byA9IF9yZWY2WzFdO1xuICAgIH0gLy8gVGhpcyB3aWxsIGNvbGxlY3QgYWxsIHByb3BzIHRoYXQgd2VyZSBldmVyIHNldCwgcmVzZXQgbWVyZ2VkIHByb3BzIHdoZW4gbmVjZXNzYXJ5XG5cblxuICAgIHRoaXMubWVyZ2VkID0gX2V4dGVuZHMoe30sIGZyb20sIHRoaXMubWVyZ2VkLCB0byk7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7IC8vIEF0dGFjaG1lbnQgaGFuZGxpbmcsIHRyYWlsZWQgc3ByaW5ncyBjYW4gXCJhdHRhY2hcIiB0aGVtc2VsdmVzIHRvIGEgcHJldmlvdXMgc3ByaW5nXG5cbiAgICBsZXQgdGFyZ2V0ID0gYXR0YWNoICYmIGF0dGFjaCh0aGlzKTsgLy8gUmVkdWNlcyBpbnB1dCB7IG5hbWU6IHZhbHVlIH0gcGFpcnMgaW50byBhbmltYXRlZCB2YWx1ZXNcblxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHRoaXMubWVyZ2VkKS5yZWR1Y2UoKGFjYywgX3JlZjcpID0+IHtcbiAgICAgIGxldCBuYW1lID0gX3JlZjdbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfcmVmN1sxXTtcbiAgICAgIC8vIElzc3VlIGNhY2hlZCBlbnRyaWVzLCBleGNlcHQgb24gcmVzZXRcbiAgICAgIGxldCBlbnRyeSA9IGFjY1tuYW1lXSB8fCB7fTsgLy8gRmlndXJlIG91dCB3aGF0IHRoZSB2YWx1ZSBpcyBzdXBwb3NlZCB0byBiZVxuXG4gICAgICBjb25zdCBpc051bWJlciA9IGlzLm51bSh2YWx1ZSk7XG4gICAgICBjb25zdCBpc1N0cmluZyA9IGlzLnN0cih2YWx1ZSkgJiYgIXZhbHVlLnN0YXJ0c1dpdGgoJyMnKSAmJiAhL1xcZC8udGVzdCh2YWx1ZSkgJiYgIWNvbG9yTmFtZXNbdmFsdWVdO1xuICAgICAgY29uc3QgaXNBcnJheSA9IGlzLmFycih2YWx1ZSk7XG4gICAgICBjb25zdCBpc0ludGVycG9sYXRpb24gPSAhaXNOdW1iZXIgJiYgIWlzQXJyYXkgJiYgIWlzU3RyaW5nO1xuICAgICAgbGV0IGZyb21WYWx1ZSA9ICFpcy51bmQoZnJvbVtuYW1lXSkgPyBmcm9tW25hbWVdIDogdmFsdWU7XG4gICAgICBsZXQgdG9WYWx1ZSA9IGlzTnVtYmVyIHx8IGlzQXJyYXkgPyB2YWx1ZSA6IGlzU3RyaW5nID8gdmFsdWUgOiAxO1xuICAgICAgbGV0IHRvQ29uZmlnID0gY2FsbFByb3AoY29uZmlnLCBuYW1lKTtcbiAgICAgIGlmICh0YXJnZXQpIHRvVmFsdWUgPSB0YXJnZXQuYW5pbWF0aW9uc1tuYW1lXS5wYXJlbnQ7XG4gICAgICBsZXQgcGFyZW50ID0gZW50cnkucGFyZW50LFxuICAgICAgICAgIGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAgIHRvVmFsdWVzID0gdG9BcnJheSh0YXJnZXQgPyB0b1ZhbHVlLmdldFBheWxvYWQoKSA6IHRvVmFsdWUpLFxuICAgICAgICAgIGFuaW1hdGVkVmFsdWVzO1xuICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uKSBuZXdWYWx1ZSA9IGludGVycG9sYXRpb24oe1xuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgICBvdXRwdXQ6IFt2YWx1ZSwgdmFsdWVdXG4gICAgICB9KSgxKTtcbiAgICAgIGxldCBjdXJyZW50VmFsdWUgPSBpbnRlcnBvbGF0aW9uJCQxICYmIGludGVycG9sYXRpb24kJDEuZ2V0VmFsdWUoKTsgLy8gQ2hhbmdlIGRldGVjdGlvbiBmbGFnc1xuXG4gICAgICBjb25zdCBpc0ZpcnN0ID0gaXMudW5kKHBhcmVudCk7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9ICFpc0ZpcnN0ICYmIGVudHJ5LmFuaW1hdGVkVmFsdWVzLnNvbWUodiA9PiAhdi5kb25lKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZURpZmZlcnNGcm9tR29hbCA9ICFpcy5lcXUobmV3VmFsdWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zdCBoYXNOZXdHb2FsID0gIWlzLmVxdShuZXdWYWx1ZSwgZW50cnkucHJldmlvdXMpO1xuICAgICAgY29uc3QgaGFzTmV3Q29uZmlnID0gIWlzLmVxdSh0b0NvbmZpZywgZW50cnkuY29uZmlnKTsgLy8gQ2hhbmdlIGFuaW1hdGlvbiBwcm9wcyB3aGVuIHByb3BzIGluZGljYXRlIGEgbmV3IGdvYWwgKG5ldyB2YWx1ZSBkaWZmZXJzIGZyb20gcHJldmlvdXMgb25lKVxuICAgICAgLy8gYW5kIGN1cnJlbnQgdmFsdWVzIGRpZmZlciBmcm9tIGl0LiBDb25maWcgY2hhbmdlcyB0cmlnZ2VyIGEgbmV3IHVwZGF0ZSBhcyB3ZWxsICh0aG91Z2ggcHJvYmFibHkgc2hvdWxkbid0PylcblxuICAgICAgaWYgKHJlc2V0IHx8IGhhc05ld0dvYWwgJiYgY3VycmVudFZhbHVlRGlmZmVyc0Zyb21Hb2FsIHx8IGhhc05ld0NvbmZpZykge1xuICAgICAgICAvLyBDb252ZXJ0IHJlZ3VsYXIgdmFsdWVzIGludG8gYW5pbWF0ZWQgdmFsdWVzLCBBTFdBWVMgcmUtdXNlIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmIChpc051bWJlciB8fCBpc1N0cmluZykgcGFyZW50ID0gaW50ZXJwb2xhdGlvbiQkMSA9IGVudHJ5LnBhcmVudCB8fCBuZXcgQW5pbWF0ZWRWYWx1ZShmcm9tVmFsdWUpO2Vsc2UgaWYgKGlzQXJyYXkpIHBhcmVudCA9IGludGVycG9sYXRpb24kJDEgPSBlbnRyeS5wYXJlbnQgfHwgbmV3IEFuaW1hdGVkVmFsdWVBcnJheShmcm9tVmFsdWUpO2Vsc2UgaWYgKGlzSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgIGxldCBwcmV2ID0gZW50cnkuaW50ZXJwb2xhdGlvbiAmJiBlbnRyeS5pbnRlcnBvbGF0aW9uLmNhbGMoZW50cnkucGFyZW50LnZhbHVlKTtcbiAgICAgICAgICBwcmV2ID0gcHJldiAhPT0gdm9pZCAwICYmICFyZXNldCA/IHByZXYgOiBmcm9tVmFsdWU7XG5cbiAgICAgICAgICBpZiAoZW50cnkucGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBlbnRyeS5wYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoMCwgZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSBwYXJlbnQgPSBuZXcgQW5pbWF0ZWRWYWx1ZSgwKTtcblxuICAgICAgICAgIGNvbnN0IHJhbmdlID0ge1xuICAgICAgICAgICAgb3V0cHV0OiBbcHJldiwgdmFsdWVdXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChlbnRyeS5pbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBpbnRlcnBvbGF0aW9uJCQxID0gZW50cnkuaW50ZXJwb2xhdGlvbjtcbiAgICAgICAgICAgIGVudHJ5LmludGVycG9sYXRpb24udXBkYXRlQ29uZmlnKHJhbmdlKTtcbiAgICAgICAgICB9IGVsc2UgaW50ZXJwb2xhdGlvbiQkMSA9IHBhcmVudC5pbnRlcnBvbGF0ZShyYW5nZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9WYWx1ZXMgPSB0b0FycmF5KHRhcmdldCA/IHRvVmFsdWUuZ2V0UGF5bG9hZCgpIDogdG9WYWx1ZSk7XG4gICAgICAgIGFuaW1hdGVkVmFsdWVzID0gdG9BcnJheShwYXJlbnQuZ2V0UGF5bG9hZCgpKTtcbiAgICAgICAgaWYgKHJlc2V0ICYmICFpc0ludGVycG9sYXRpb24pIHBhcmVudC5zZXRWYWx1ZShmcm9tVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTsgLy8gUmVzZXQgYW5pbWF0ZWQgdmFsdWVzXG5cbiAgICAgICAgYW5pbWF0ZWRWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgdmFsdWUuc3RhcnRQb3NpdGlvbiA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgIHZhbHVlLmxhc3RQb3NpdGlvbiA9IHZhbHVlLnZhbHVlO1xuICAgICAgICAgIHZhbHVlLmxhc3RWZWxvY2l0eSA9IGlzQWN0aXZlID8gdmFsdWUubGFzdFZlbG9jaXR5IDogdW5kZWZpbmVkO1xuICAgICAgICAgIHZhbHVlLmxhc3RUaW1lID0gaXNBY3RpdmUgPyB2YWx1ZS5sYXN0VGltZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB2YWx1ZS5zdGFydFRpbWUgPSBub3coKTtcbiAgICAgICAgICB2YWx1ZS5kb25lID0gZmFsc2U7XG4gICAgICAgICAgdmFsdWUuYW5pbWF0ZWRTdHlsZXMuY2xlYXIoKTtcbiAgICAgICAgfSk7IC8vIFNldCBpbW1lZGlhdGUgdmFsdWVzXG5cbiAgICAgICAgaWYgKGNhbGxQcm9wKGltbWVkaWF0ZSwgbmFtZSkpIHtcbiAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoaXNJbnRlcnBvbGF0aW9uID8gdG9WYWx1ZSA6IHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgICAgICAgIFtuYW1lXTogX2V4dGVuZHMoe30sIGVudHJ5LCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvbiQkMSxcbiAgICAgICAgICAgIGFuaW1hdGVkVmFsdWVzLFxuICAgICAgICAgICAgdG9WYWx1ZXMsXG4gICAgICAgICAgICBwcmV2aW91czogbmV3VmFsdWUsXG4gICAgICAgICAgICBjb25maWc6IHRvQ29uZmlnLFxuICAgICAgICAgICAgZnJvbVZhbHVlczogdG9BcnJheShwYXJlbnQuZ2V0VmFsdWUoKSksXG4gICAgICAgICAgICBpbW1lZGlhdGU6IGNhbGxQcm9wKGltbWVkaWF0ZSwgbmFtZSksXG4gICAgICAgICAgICBpbml0aWFsVmVsb2NpdHk6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLnZlbG9jaXR5LCAwKSxcbiAgICAgICAgICAgIGNsYW1wOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5jbGFtcCwgZmFsc2UpLFxuICAgICAgICAgICAgcHJlY2lzaW9uOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5wcmVjaXNpb24sIDAuMDEpLFxuICAgICAgICAgICAgdGVuc2lvbjogd2l0aERlZmF1bHQodG9Db25maWcudGVuc2lvbiwgMTcwKSxcbiAgICAgICAgICAgIGZyaWN0aW9uOiB3aXRoRGVmYXVsdCh0b0NvbmZpZy5mcmljdGlvbiwgMjYpLFxuICAgICAgICAgICAgbWFzczogd2l0aERlZmF1bHQodG9Db25maWcubWFzcywgMSksXG4gICAgICAgICAgICBkdXJhdGlvbjogdG9Db25maWcuZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6IHdpdGhEZWZhdWx0KHRvQ29uZmlnLmVhc2luZywgdCA9PiB0KSxcbiAgICAgICAgICAgIGRlY2F5OiB0b0NvbmZpZy5kZWNheVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjdXJyZW50VmFsdWVEaWZmZXJzRnJvbUdvYWwpIHtcbiAgICAgICAgICAvLyBTbyAuLi4gdGhlIGN1cnJlbnQgdGFyZ2V0IHZhbHVlIChuZXdWYWx1ZSkgYXBwZWFycyB0byBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgcHJldmlvdXMgdmFsdWUsXG4gICAgICAgICAgLy8gd2hpY2ggbm9ybWFsbHkgY29uc3RpdHV0ZXMgYW4gdXBkYXRlLCBidXQgdGhlIGFjdHVhbCB2YWx1ZSAoY3VycmVudFZhbHVlKSBtYXRjaGVzIHRoZSB0YXJnZXQhXG4gICAgICAgICAgLy8gSW4gb3JkZXIgdG8gcmVzb2x2ZSB0aGlzIHdpdGhvdXQgY2F1c2luZyBhbiBhbmltYXRpb24gdXBkYXRlIHdlIHNpbGVudGx5IGZsYWcgdGhlIGFuaW1hdGlvbiBhcyBkb25lLFxuICAgICAgICAgIC8vIHdoaWNoIGl0IHRlY2huaWNhbGx5IGlzLiBJbnRlcnBvbGF0aW9ucyBhbHNvIG5lZWRzIGEgY29uZmlnIHVwZGF0ZSB3aXRoIHRoZWlyIHRhcmdldCBzZXQgdG8gMS5cbiAgICAgICAgICBpZiAoaXNJbnRlcnBvbGF0aW9uKSB7XG4gICAgICAgICAgICBwYXJlbnQuc2V0VmFsdWUoMSwgZmFsc2UpO1xuICAgICAgICAgICAgaW50ZXJwb2xhdGlvbiQkMS51cGRhdGVDb25maWcoe1xuICAgICAgICAgICAgICBvdXRwdXQ6IFtuZXdWYWx1ZSwgbmV3VmFsdWVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXJlbnQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywge1xuICAgICAgICAgICAgW25hbWVdOiBfZXh0ZW5kcyh7fSwgYWNjW25hbWVdLCB7XG4gICAgICAgICAgICAgIHByZXZpb3VzOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgfSwgdGhpcy5hbmltYXRpb25zKTtcblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIC8vIE1ha2UgYW5pbWF0aW9ucyBhdmFpbGFibGUgdG8gZnJhbWVsb29wXG4gICAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QudmFsdWVzKHRoaXMuYW5pbWF0aW9ucyk7XG4gICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgdGhpcy5pbnRlcnBvbGF0aW9ucyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICAgIHRoaXMuaW50ZXJwb2xhdGlvbnNba2V5XSA9IHRoaXMuYW5pbWF0aW9uc1trZXldLmludGVycG9sYXRpb247XG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB0aGlzLmFuaW1hdGlvbnNba2V5XS5pbnRlcnBvbGF0aW9uLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMucHJvcHMgPSB7fTtcbiAgICB0aGlzLm1lcmdlZCA9IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHt9O1xuICAgIHRoaXMuaW50ZXJwb2xhdGlvbnMgPSB7fTtcbiAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgIHRoaXMuY29uZmlncyA9IFtdO1xuICAgIHRoaXMubG9jYWwgPSAwO1xuICB9XG5cbn1cblxuLyoqIEFQSVxuICogY29uc3QgcHJvcHMgPSB1c2VTcHJpbmdzKG51bWJlciwgW3sgLi4uIH0sIHsgLi4uIH0sIC4uLl0pXG4gKiBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmdzKG51bWJlciwgKGksIGNvbnRyb2xsZXIpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5jb25zdCB1c2VTcHJpbmdzID0gKGxlbmd0aCwgcHJvcHMpID0+IHtcbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IGN0cmwgPSB1c2VSZWYoKTtcbiAgY29uc3QgaXNGbiA9IGlzLmZ1bihwcm9wcyk7IC8vIFRoZSBjb250cm9sbGVyIG1haW50YWlucyB0aGUgYW5pbWF0aW9uIHZhbHVlcywgc3RhcnRzIGFuZCBzdG9wcyBhbmltYXRpb25zXG5cbiAgY29uc3QgX3VzZU1lbW8gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAvLyBSZW1vdmUgb2xkIGNvbnRyb2xsZXJzXG4gICAgaWYgKGN0cmwuY3VycmVudCkge1xuICAgICAgY3RybC5jdXJyZW50Lm1hcChjID0+IGMuZGVzdHJveSgpKTtcbiAgICAgIGN0cmwuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgcmVmO1xuICAgIHJldHVybiBbbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgpLm1hcCgoXywgaSkgPT4ge1xuICAgICAgY29uc3QgY3RybCA9IG5ldyBDb250cm9sbGVyKCk7XG4gICAgICBjb25zdCBuZXdQcm9wcyA9IGlzRm4gPyBjYWxsUHJvcChwcm9wcywgaSwgY3RybCkgOiBwcm9wc1tpXTtcbiAgICAgIGlmIChpID09PSAwKSByZWYgPSBuZXdQcm9wcy5yZWY7XG4gICAgICBjdHJsLnVwZGF0ZShuZXdQcm9wcyk7XG4gICAgICBpZiAoIXJlZikgY3RybC5zdGFydCgpO1xuICAgICAgcmV0dXJuIGN0cmw7XG4gICAgfSksIHJlZl07XG4gIH0sIFtsZW5ndGhdKSxcbiAgICAgICAgY29udHJvbGxlcnMgPSBfdXNlTWVtb1swXSxcbiAgICAgICAgcmVmID0gX3VzZU1lbW9bMV07XG5cbiAgY3RybC5jdXJyZW50ID0gY29udHJvbGxlcnM7IC8vIFRoZSBob29rcyByZWZlcmVuY2UgYXBpIGdldHMgZGVmaW5lZCBoZXJlIC4uLlxuXG4gIGNvbnN0IGFwaSA9IHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgIHN0YXJ0OiAoKSA9PiBQcm9taXNlLmFsbChjdHJsLmN1cnJlbnQubWFwKGMgPT4gbmV3IFByb21pc2UociA9PiBjLnN0YXJ0KHIpKSkpLFxuICAgIHN0b3A6IGZpbmlzaGVkID0+IGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5zdG9wKGZpbmlzaGVkKSksXG5cbiAgICBnZXQgY29udHJvbGxlcnMoKSB7XG4gICAgICByZXR1cm4gY3RybC5jdXJyZW50O1xuICAgIH1cblxuICB9KSk7IC8vIFRoaXMgZnVuY3Rpb24gdXBkYXRlcyB0aGUgY29udHJvbGxlcnNcblxuICBjb25zdCB1cGRhdGVDdHJsID0gdXNlTWVtbygoKSA9PiB1cGRhdGVQcm9wcyA9PiBjdHJsLmN1cnJlbnQubWFwKChjLCBpKSA9PiB7XG4gICAgYy51cGRhdGUoaXNGbiA/IGNhbGxQcm9wKHVwZGF0ZVByb3BzLCBpLCBjKSA6IHVwZGF0ZVByb3BzW2ldKTtcbiAgICBpZiAoIXJlZikgYy5zdGFydCgpO1xuICB9KSwgW2xlbmd0aF0pOyAvLyBVcGRhdGUgY29udHJvbGxlciBpZiBwcm9wcyBhcmVuJ3QgZnVuY3Rpb25hbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vdW50ZWQuY3VycmVudCkge1xuICAgICAgaWYgKCFpc0ZuKSB1cGRhdGVDdHJsKHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKCFyZWYpIGN0cmwuY3VycmVudC5mb3JFYWNoKGMgPT4gYy5zdGFydCgpKTtcbiAgfSk7IC8vIFVwZGF0ZSBtb3VudGVkIGZsYWcgYW5kIGRlc3Ryb3kgY29udHJvbGxlciBvbiB1bm1vdW50XG5cbiAgdXNlRWZmZWN0KCgpID0+IChtb3VudGVkLmN1cnJlbnQgPSB0cnVlLCAoKSA9PiBjdHJsLmN1cnJlbnQuZm9yRWFjaChjID0+IGMuZGVzdHJveSgpKSksIFtdKTsgLy8gUmV0dXJuIGFuaW1hdGVkIHByb3BzLCBvciwgYW5pbS1wcm9wcyArIHRoZSB1cGRhdGUtc2V0dGVyIGFib3ZlXG5cbiAgY29uc3QgcHJvcFZhbHVlcyA9IGN0cmwuY3VycmVudC5tYXAoYyA9PiBjLmdldFZhbHVlcygpKTtcbiAgcmV0dXJuIGlzRm4gPyBbcHJvcFZhbHVlcywgdXBkYXRlQ3RybCwgZmluaXNoZWQgPT4gY3RybC5jdXJyZW50LmZvckVhY2goYyA9PiBjLnBhdXNlKGZpbmlzaGVkKSldIDogcHJvcFZhbHVlcztcbn07XG5cbi8qKiBBUElcbiAqIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgLi4uIH0pXG4gKiBjb25zdCBbcHJvcHMsIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgLi4uIH0pKVxuICovXG5cbmNvbnN0IHVzZVNwcmluZyA9IHByb3BzID0+IHtcbiAgY29uc3QgaXNGbiA9IGlzLmZ1bihwcm9wcyk7XG5cbiAgY29uc3QgX3VzZVNwcmluZ3MgPSB1c2VTcHJpbmdzKDEsIGlzRm4gPyBwcm9wcyA6IFtwcm9wc10pLFxuICAgICAgICByZXN1bHQgPSBfdXNlU3ByaW5nc1swXSxcbiAgICAgICAgc2V0ID0gX3VzZVNwcmluZ3NbMV0sXG4gICAgICAgIHBhdXNlID0gX3VzZVNwcmluZ3NbMl07XG5cbiAgcmV0dXJuIGlzRm4gPyBbcmVzdWx0WzBdLCBzZXQsIHBhdXNlXSA6IHJlc3VsdDtcbn07XG5cbi8qKiBBUElcbiAqIGNvbnN0IHRyYWlscyA9IHVzZVRyYWlsKG51bWJlciwgeyAuLi4gfSlcbiAqIGNvbnN0IFt0cmFpbHMsIHNldF0gPSB1c2VUcmFpbChudW1iZXIsICgpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5jb25zdCB1c2VUcmFpbCA9IChsZW5ndGgsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBpc0ZuID0gaXMuZnVuKHByb3BzKTtcbiAgY29uc3QgdXBkYXRlUHJvcHMgPSBjYWxsUHJvcChwcm9wcyk7XG4gIGNvbnN0IGluc3RhbmNlcyA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IF91c2VTcHJpbmdzID0gdXNlU3ByaW5ncyhsZW5ndGgsIChpLCBjdHJsKSA9PiB7XG4gICAgaWYgKGkgPT09IDApIGluc3RhbmNlcy5jdXJyZW50ID0gW107XG4gICAgaW5zdGFuY2VzLmN1cnJlbnQucHVzaChjdHJsKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHVwZGF0ZVByb3BzLCB7XG4gICAgICBjb25maWc6IGNhbGxQcm9wKHVwZGF0ZVByb3BzLmNvbmZpZywgaSksXG4gICAgICBhdHRhY2g6IGkgPiAwICYmICgoKSA9PiBpbnN0YW5jZXMuY3VycmVudFtpIC0gMV0pXG4gICAgfSk7XG4gIH0pLFxuICAgICAgICByZXN1bHQgPSBfdXNlU3ByaW5nc1swXSxcbiAgICAgICAgc2V0ID0gX3VzZVNwcmluZ3NbMV0sXG4gICAgICAgIHBhdXNlID0gX3VzZVNwcmluZ3NbMl07IC8vIFNldCB1cCBmdW5jdGlvbiB0byB1cGRhdGUgY29udHJvbGxlclxuXG5cbiAgY29uc3QgdXBkYXRlQ3RybCA9IHVzZU1lbW8oKCkgPT4gcHJvcHMgPT4gc2V0KChpLCBjdHJsKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHByb3BzLnJldmVyc2UgPyBpID09PSAwIDogbGVuZ3RoIC0gMSA9PT0gaTtcbiAgICBjb25zdCBhdHRhY2hJZHggPSBwcm9wcy5yZXZlcnNlID8gaSArIDEgOiBpIC0gMTtcbiAgICBjb25zdCBhdHRhY2hDb250cm9sbGVyID0gaW5zdGFuY2VzLmN1cnJlbnRbYXR0YWNoSWR4XTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBjb25maWc6IGNhbGxQcm9wKHByb3BzLmNvbmZpZyB8fCB1cGRhdGVQcm9wcy5jb25maWcsIGkpLFxuICAgICAgYXR0YWNoOiBhdHRhY2hDb250cm9sbGVyICYmICgoKSA9PiBhdHRhY2hDb250cm9sbGVyKVxuICAgIH0pO1xuICB9KSwgW2xlbmd0aCwgdXBkYXRlUHJvcHMucmV2ZXJzZV0pOyAvLyBVcGRhdGUgY29udHJvbGxlciBpZiBwcm9wcyBhcmVuJ3QgZnVuY3Rpb25hbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB2b2lkIChtb3VudGVkLmN1cnJlbnQgJiYgIWlzRm4gJiYgdXBkYXRlQ3RybChwcm9wcykpKTsgLy8gVXBkYXRlIG1vdW50ZWQgZmxhZyBhbmQgZGVzdHJveSBjb250cm9sbGVyIG9uIHVubW91bnRcblxuICB1c2VFZmZlY3QoKCkgPT4gdm9pZCAobW91bnRlZC5jdXJyZW50ID0gdHJ1ZSksIFtdKTtcbiAgcmV0dXJuIGlzRm4gPyBbcmVzdWx0LCB1cGRhdGVDdHJsLCBwYXVzZV0gOiByZXN1bHQ7XG59O1xuXG4vKiogQVBJXG4gKiBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oaXRlbXMsIGl0ZW1LZXlzLCB7IC4uLiB9KVxuICogY29uc3QgW3RyYW5zaXRpb25zLCB1cGRhdGVdID0gdXNlVHJhbnNpdGlvbihpdGVtcywgaXRlbUtleXMsICgpID0+ICh7IC4uLiB9KSlcbiAqL1xuXG5sZXQgZ3VpZCA9IDA7XG5jb25zdCBFTlRFUiA9ICdlbnRlcic7XG5jb25zdCBMRUFWRSA9ICdsZWF2ZSc7XG5jb25zdCBVUERBVEUgPSAndXBkYXRlJztcblxuY29uc3QgbWFwS2V5cyA9IChpdGVtcywga2V5cykgPT4gKHR5cGVvZiBrZXlzID09PSAnZnVuY3Rpb24nID8gaXRlbXMubWFwKGtleXMpIDogdG9BcnJheShrZXlzKSkubWFwKFN0cmluZyk7XG5cbmNvbnN0IGdldCA9IHByb3BzID0+IHtcbiAgbGV0IGl0ZW1zID0gcHJvcHMuaXRlbXMsXG4gICAgICBfcHJvcHMka2V5cyA9IHByb3BzLmtleXMsXG4gICAgICBrZXlzID0gX3Byb3BzJGtleXMgPT09IHZvaWQgMCA/IGl0ZW0gPT4gaXRlbSA6IF9wcm9wcyRrZXlzLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpdGVtc1wiLCBcImtleXNcIl0pO1xuXG4gIGl0ZW1zID0gdG9BcnJheShpdGVtcyAhPT0gdm9pZCAwID8gaXRlbXMgOiBudWxsKTtcbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICBpdGVtcyxcbiAgICBrZXlzOiBtYXBLZXlzKGl0ZW1zLCBrZXlzKVxuICB9LCByZXN0KTtcbn07XG5cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oaW5wdXQsIGtleVRyYW5zZm9ybSwgY29uZmlnKSB7XG4gIGNvbnN0IHByb3BzID0gX2V4dGVuZHMoe1xuICAgIGl0ZW1zOiBpbnB1dCxcbiAgICBrZXlzOiBrZXlUcmFuc2Zvcm0gfHwgKGkgPT4gaSlcbiAgfSwgY29uZmlnKTtcblxuICBjb25zdCBfZ2V0ID0gZ2V0KHByb3BzKSxcbiAgICAgICAgX2dldCRsYXp5ID0gX2dldC5sYXp5LFxuICAgICAgICBsYXp5ID0gX2dldCRsYXp5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9nZXQkbGF6eSxcbiAgICAgICAgX2dldCR1bmlxdWUgPSBfZ2V0LnVuaXF1ZSxcbiAgICAgICAgX2dldCRyZXNldCA9IF9nZXQucmVzZXQsXG4gICAgICAgIHJlc2V0ID0gX2dldCRyZXNldCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZ2V0JHJlc2V0LFxuICAgICAgICBlbnRlciA9IF9nZXQuZW50ZXIsXG4gICAgICAgIGxlYXZlID0gX2dldC5sZWF2ZSxcbiAgICAgICAgdXBkYXRlID0gX2dldC51cGRhdGUsXG4gICAgICAgIG9uRGVzdHJveWVkID0gX2dldC5vbkRlc3Ryb3llZCxcbiAgICAgICAga2V5cyA9IF9nZXQua2V5cyxcbiAgICAgICAgaXRlbXMgPSBfZ2V0Lml0ZW1zLFxuICAgICAgICBvbkZyYW1lID0gX2dldC5vbkZyYW1lLFxuICAgICAgICBfb25SZXN0ID0gX2dldC5vblJlc3QsXG4gICAgICAgIG9uU3RhcnQgPSBfZ2V0Lm9uU3RhcnQsXG4gICAgICAgIHJlZiA9IF9nZXQucmVmLFxuICAgICAgICBleHRyYSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9nZXQsIFtcImxhenlcIiwgXCJ1bmlxdWVcIiwgXCJyZXNldFwiLCBcImVudGVyXCIsIFwibGVhdmVcIiwgXCJ1cGRhdGVcIiwgXCJvbkRlc3Ryb3llZFwiLCBcImtleXNcIiwgXCJpdGVtc1wiLCBcIm9uRnJhbWVcIiwgXCJvblJlc3RcIiwgXCJvblN0YXJ0XCIsIFwicmVmXCJdKTtcblxuICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZih7XG4gICAgbW91bnRlZDogZmFsc2UsXG4gICAgZmlyc3Q6IHRydWUsXG4gICAgZGVsZXRlZDogW10sXG4gICAgY3VycmVudDoge30sXG4gICAgdHJhbnNpdGlvbnM6IFtdLFxuICAgIHByZXZQcm9wczoge30sXG4gICAgcGF1c2VkOiAhIXByb3BzLnJlZixcbiAgICBpbnN0YW5jZXM6ICFtb3VudGVkLmN1cnJlbnQgJiYgbmV3IE1hcCgpLFxuICAgIGZvcmNlVXBkYXRlXG4gIH0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHByb3BzLnJlZiwgKCkgPT4gKHtcbiAgICBzdGFydDogKCkgPT4gUHJvbWlzZS5hbGwoQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykubWFwKChfcmVmKSA9PiB7XG4gICAgICBsZXQgYyA9IF9yZWZbMV07XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UociA9PiBjLnN0YXJ0KHIpKTtcbiAgICB9KSksXG4gICAgc3RvcDogZmluaXNoZWQgPT4gQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykuZm9yRWFjaCgoX3JlZjIpID0+IHtcbiAgICAgIGxldCBjID0gX3JlZjJbMV07XG4gICAgICByZXR1cm4gYy5zdG9wKGZpbmlzaGVkKTtcbiAgICB9KSxcblxuICAgIGdldCBjb250cm9sbGVycygpIHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzKS5tYXAoKF9yZWYzKSA9PiB7XG4gICAgICAgIGxldCBjID0gX3JlZjNbMV07XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pKTsgLy8gVXBkYXRlIHN0YXRlXG5cbiAgc3RhdGUuY3VycmVudCA9IGRpZmZJdGVtcyhzdGF0ZS5jdXJyZW50LCBwcm9wcyk7XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnQuY2hhbmdlZCkge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgIHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMuZm9yRWFjaCh0cmFuc2l0aW9uID0+IHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0cmFuc2l0aW9uLnNsb3QsXG4gICAgICAgICAgICBmcm9tID0gdHJhbnNpdGlvbi5mcm9tLFxuICAgICAgICAgICAgdG8gPSB0cmFuc2l0aW9uLnRvLFxuICAgICAgICAgICAgY29uZmlnID0gdHJhbnNpdGlvbi5jb25maWcsXG4gICAgICAgICAgICB0cmFpbCA9IHRyYW5zaXRpb24udHJhaWwsXG4gICAgICAgICAgICBrZXkgPSB0cmFuc2l0aW9uLmtleSxcbiAgICAgICAgICAgIGl0ZW0gPSB0cmFuc2l0aW9uLml0ZW07XG4gICAgICBpZiAoIXN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmhhcyhrZXkpKSBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5zZXQoa2V5LCBuZXcgQ29udHJvbGxlcigpKTsgLy8gdXBkYXRlIHRoZSBtYXAgb2JqZWN0XG5cbiAgICAgIGNvbnN0IGN0cmwgPSBzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcy5nZXQoa2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgZXh0cmEsIHtcbiAgICAgICAgdG8sXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVmLFxuICAgICAgICBvblJlc3Q6IHZhbHVlcyA9PiB7XG4gICAgICAgICAgaWYgKHN0YXRlLmN1cnJlbnQubW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb24uZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAgIC8vIElmIG5vIHJlZiBpcyBnaXZlbiBkZWxldGUgZGVzdHJveWVkIGl0ZW1zIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgIGlmICghcmVmICYmICFsYXp5KSBjbGVhblVwKHN0YXRlLCBrZXkpO1xuICAgICAgICAgICAgICBpZiAob25EZXN0cm95ZWQpIG9uRGVzdHJveWVkKGl0ZW0pO1xuICAgICAgICAgICAgfSAvLyBBIHRyYW5zaXRpb24gY29tZXMgdG8gcmVzdCBvbmNlIGFsbCBpdHMgc3ByaW5ncyBjb25jbHVkZVxuXG5cbiAgICAgICAgICAgIGNvbnN0IGN1ckluc3RhbmNlcyA9IEFycmF5LmZyb20oc3RhdGUuY3VycmVudC5pbnN0YW5jZXMpO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gY3VySW5zdGFuY2VzLnNvbWUoKF9yZWY0KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjID0gX3JlZjRbMV07XG4gICAgICAgICAgICAgIHJldHVybiAhYy5pZGxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZSAmJiAocmVmIHx8IGxhenkpICYmIHN0YXRlLmN1cnJlbnQuZGVsZXRlZC5sZW5ndGggPiAwKSBjbGVhblVwKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChfb25SZXN0KSBfb25SZXN0KGl0ZW0sIHNsb3QsIHZhbHVlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblN0YXJ0OiBvblN0YXJ0ICYmICgoKSA9PiBvblN0YXJ0KGl0ZW0sIHNsb3QpKSxcbiAgICAgICAgb25GcmFtZTogb25GcmFtZSAmJiAodmFsdWVzID0+IG9uRnJhbWUoaXRlbSwgc2xvdCwgdmFsdWVzKSksXG4gICAgICAgIGRlbGF5OiB0cmFpbCxcbiAgICAgICAgcmVzZXQ6IHJlc2V0ICYmIHNsb3QgPT09IEVOVEVSIC8vIFVwZGF0ZSBjb250cm9sbGVyXG5cbiAgICAgIH0pO1xuXG4gICAgICBjdHJsLnVwZGF0ZShuZXdQcm9wcyk7XG4gICAgICBpZiAoIXN0YXRlLmN1cnJlbnQucGF1c2VkKSBjdHJsLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnQubW91bnRlZCA9IG1vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnQubW91bnRlZCA9IG1vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgQXJyYXkuZnJvbShzdGF0ZS5jdXJyZW50Lmluc3RhbmNlcykubWFwKChfcmVmNSkgPT4ge1xuICAgICAgICBsZXQgYyA9IF9yZWY1WzFdO1xuICAgICAgICByZXR1cm4gYy5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmNsZWFyKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucy5tYXAoKF9yZWY2KSA9PiB7XG4gICAgbGV0IGl0ZW0gPSBfcmVmNi5pdGVtLFxuICAgICAgICBzbG90ID0gX3JlZjYuc2xvdCxcbiAgICAgICAga2V5ID0gX3JlZjYua2V5O1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtLFxuICAgICAga2V5LFxuICAgICAgc3RhdGU6IHNsb3QsXG4gICAgICBwcm9wczogc3RhdGUuY3VycmVudC5pbnN0YW5jZXMuZ2V0KGtleSkuZ2V0VmFsdWVzKClcbiAgICB9O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYW5VcChzdGF0ZSwgZmlsdGVyS2V5KSB7XG4gIGNvbnN0IGRlbGV0ZWQgPSBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQ7XG5cbiAgZm9yIChsZXQgX3JlZjcgb2YgZGVsZXRlZCkge1xuICAgIGxldCBrZXkgPSBfcmVmNy5rZXk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0ID0+IHQua2V5ICE9PSBrZXk7XG5cbiAgICBpZiAoaXMudW5kKGZpbHRlcktleSkgfHwgZmlsdGVyS2V5ID09PSBrZXkpIHtcbiAgICAgIHN0YXRlLmN1cnJlbnQuaW5zdGFuY2VzLmRlbGV0ZShrZXkpO1xuICAgICAgc3RhdGUuY3VycmVudC50cmFuc2l0aW9ucyA9IHN0YXRlLmN1cnJlbnQudHJhbnNpdGlvbnMuZmlsdGVyKGZpbHRlcik7XG4gICAgICBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQgPSBzdGF0ZS5jdXJyZW50LmRlbGV0ZWQuZmlsdGVyKGZpbHRlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuY3VycmVudC5mb3JjZVVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBkaWZmSXRlbXMoX3JlZjgsIHByb3BzKSB7XG4gIGxldCBmaXJzdCA9IF9yZWY4LmZpcnN0LFxuICAgICAgcHJldlByb3BzID0gX3JlZjgucHJldlByb3BzLFxuICAgICAgc3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOCwgW1wiZmlyc3RcIiwgXCJwcmV2UHJvcHNcIl0pO1xuXG4gIGxldCBfZ2V0MiA9IGdldChwcm9wcyksXG4gICAgICBpdGVtcyA9IF9nZXQyLml0ZW1zLFxuICAgICAga2V5cyA9IF9nZXQyLmtleXMsXG4gICAgICBpbml0aWFsID0gX2dldDIuaW5pdGlhbCxcbiAgICAgIGZyb20gPSBfZ2V0Mi5mcm9tLFxuICAgICAgZW50ZXIgPSBfZ2V0Mi5lbnRlcixcbiAgICAgIGxlYXZlID0gX2dldDIubGVhdmUsXG4gICAgICB1cGRhdGUgPSBfZ2V0Mi51cGRhdGUsXG4gICAgICBfZ2V0MiR0cmFpbCA9IF9nZXQyLnRyYWlsLFxuICAgICAgdHJhaWwgPSBfZ2V0MiR0cmFpbCA9PT0gdm9pZCAwID8gMCA6IF9nZXQyJHRyYWlsLFxuICAgICAgdW5pcXVlID0gX2dldDIudW5pcXVlLFxuICAgICAgY29uZmlnID0gX2dldDIuY29uZmlnLFxuICAgICAgX2dldDIkb3JkZXIgPSBfZ2V0Mi5vcmRlcixcbiAgICAgIG9yZGVyID0gX2dldDIkb3JkZXIgPT09IHZvaWQgMCA/IFtFTlRFUiwgTEVBVkUsIFVQREFURV0gOiBfZ2V0MiRvcmRlcjtcblxuICBsZXQgX2dldDMgPSBnZXQocHJldlByb3BzKSxcbiAgICAgIF9rZXlzID0gX2dldDMua2V5cyxcbiAgICAgIF9pdGVtcyA9IF9nZXQzLml0ZW1zO1xuXG4gIGxldCBjdXJyZW50ID0gX2V4dGVuZHMoe30sIHN0YXRlLmN1cnJlbnQpO1xuXG4gIGxldCBkZWxldGVkID0gWy4uLnN0YXRlLmRlbGV0ZWRdOyAvLyBDb21wYXJlIG5leHQga2V5cyB3aXRoIGN1cnJlbnQga2V5c1xuXG4gIGxldCBjdXJyZW50S2V5cyA9IE9iamVjdC5rZXlzKGN1cnJlbnQpO1xuICBsZXQgY3VycmVudFNldCA9IG5ldyBTZXQoY3VycmVudEtleXMpO1xuICBsZXQgbmV4dFNldCA9IG5ldyBTZXQoa2V5cyk7XG4gIGxldCBhZGRlZCA9IGtleXMuZmlsdGVyKGl0ZW0gPT4gIWN1cnJlbnRTZXQuaGFzKGl0ZW0pKTtcbiAgbGV0IHJlbW92ZWQgPSBzdGF0ZS50cmFuc2l0aW9ucy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kZXN0cm95ZWQgJiYgIW5leHRTZXQuaGFzKGl0ZW0ub3JpZ2luYWxLZXkpKS5tYXAoaSA9PiBpLm9yaWdpbmFsS2V5KTtcbiAgbGV0IHVwZGF0ZWQgPSBrZXlzLmZpbHRlcihpdGVtID0+IGN1cnJlbnRTZXQuaGFzKGl0ZW0pKTtcbiAgbGV0IGRlbGF5ID0gLXRyYWlsO1xuXG4gIHdoaWxlIChvcmRlci5sZW5ndGgpIHtcbiAgICBjb25zdCBjaGFuZ2VUeXBlID0gb3JkZXIuc2hpZnQoKTtcblxuICAgIHN3aXRjaCAoY2hhbmdlVHlwZSkge1xuICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAge1xuICAgICAgICAgIGFkZGVkLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIEluIHVuaXF1ZSBtb2RlLCByZW1vdmUgZmFkaW5nIG91dCB0cmFuc2l0aW9ucyBpZiB0aGVpciBrZXkgY29tZXMgaW4gYWdhaW5cbiAgICAgICAgICAgIGlmICh1bmlxdWUgJiYgZGVsZXRlZC5maW5kKGQgPT4gZC5vcmlnaW5hbEtleSA9PT0ga2V5KSkgZGVsZXRlZCA9IGRlbGV0ZWQuZmlsdGVyKHQgPT4gdC5vcmlnaW5hbEtleSAhPT0ga2V5KTtcbiAgICAgICAgICAgIGNvbnN0IGtleUluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNba2V5SW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IGZpcnN0ICYmIGluaXRpYWwgIT09IHZvaWQgMCA/ICdpbml0aWFsJyA6IEVOVEVSO1xuICAgICAgICAgICAgY3VycmVudFtrZXldID0ge1xuICAgICAgICAgICAgICBzbG90LFxuICAgICAgICAgICAgICBvcmlnaW5hbEtleToga2V5LFxuICAgICAgICAgICAgICBrZXk6IHVuaXF1ZSA/IFN0cmluZyhrZXkpIDogZ3VpZCsrLFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICB0cmFpbDogZGVsYXkgPSBkZWxheSArIHRyYWlsLFxuICAgICAgICAgICAgICBjb25maWc6IGNhbGxQcm9wKGNvbmZpZywgaXRlbSwgc2xvdCksXG4gICAgICAgICAgICAgIGZyb206IGNhbGxQcm9wKGZpcnN0ID8gaW5pdGlhbCAhPT0gdm9pZCAwID8gaW5pdGlhbCB8fCB7fSA6IGZyb20gOiBmcm9tLCBpdGVtKSxcbiAgICAgICAgICAgICAgdG86IGNhbGxQcm9wKGVudGVyLCBpdGVtKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIExFQVZFOlxuICAgICAgICB7XG4gICAgICAgICAgcmVtb3ZlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IF9rZXlzLmluZGV4T2Yoa2V5KTtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IF9pdGVtc1trZXlJbmRleF07XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gTEVBVkU7XG4gICAgICAgICAgICBkZWxldGVkLnVuc2hpZnQoX2V4dGVuZHMoe30sIGN1cnJlbnRba2V5XSwge1xuICAgICAgICAgICAgICBzbG90LFxuICAgICAgICAgICAgICBkZXN0cm95ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGxlZnQ6IF9rZXlzW01hdGgubWF4KDAsIGtleUluZGV4IC0gMSldLFxuICAgICAgICAgICAgICByaWdodDogX2tleXNbTWF0aC5taW4oX2tleXMubGVuZ3RoLCBrZXlJbmRleCArIDEpXSxcbiAgICAgICAgICAgICAgdHJhaWw6IGRlbGF5ID0gZGVsYXkgKyB0cmFpbCxcbiAgICAgICAgICAgICAgY29uZmlnOiBjYWxsUHJvcChjb25maWcsIGl0ZW0sIHNsb3QpLFxuICAgICAgICAgICAgICB0bzogY2FsbFByb3AobGVhdmUsIGl0ZW0pXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBkZWxldGUgY3VycmVudFtrZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgVVBEQVRFOlxuICAgICAgICB7XG4gICAgICAgICAgdXBkYXRlZC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2tleUluZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBVUERBVEU7XG4gICAgICAgICAgICBjdXJyZW50W2tleV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFtrZXldLCB7XG4gICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgIHRyYWlsOiBkZWxheSA9IGRlbGF5ICsgdHJhaWwsXG4gICAgICAgICAgICAgIGNvbmZpZzogY2FsbFByb3AoY29uZmlnLCBpdGVtLCBzbG90KSxcbiAgICAgICAgICAgICAgdG86IGNhbGxQcm9wKHVwZGF0ZSwgaXRlbSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IG91dCA9IGtleXMubWFwKGtleSA9PiBjdXJyZW50W2tleV0pOyAvLyBUaGlzIHRyaWVzIHRvIHJlc3RvcmUgb3JkZXIgZm9yIGRlbGV0ZWQgaXRlbXMgYnkgZmluZGluZyB0aGVpciBsYXN0IGtub3duIHNpYmxpbmdzXG4gIC8vIG9ubHkgdXNpbmcgdGhlIGxlZnQgc2libGluZyB0byBrZWVwIG9yZGVyIHBsYWNlbWVudCBjb25zaXN0ZW50IGZvciBhbGwgZGVsZXRlZCBpdGVtc1xuXG4gIGRlbGV0ZWQuZm9yRWFjaCgoX3JlZjkpID0+IHtcbiAgICBsZXQgbGVmdCA9IF9yZWY5LmxlZnQsXG4gICAgICAgIHJpZ2h0ID0gX3JlZjkucmlnaHQsXG4gICAgICAgIGl0ZW0gPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOSwgW1wibGVmdFwiLCBcInJpZ2h0XCJdKTtcblxuICAgIGxldCBwb3M7IC8vIFdhcyBpdCB0aGUgZWxlbWVudCBvbiB0aGUgbGVmdCwgaWYgeWVzLCBtb3ZlIHRoZXJlIC4uLlxuXG4gICAgaWYgKChwb3MgPSBvdXQuZmluZEluZGV4KHQgPT4gdC5vcmlnaW5hbEtleSA9PT0gbGVmdCkpICE9PSAtMSkgcG9zICs9IDE7IC8vIEFuZCBpZiBub3RoaW5nIGVsc2UgaGVscHMsIG1vdmUgaXQgdG8gdGhlIHN0YXJ0IMKvXFxfKOODhClfL8KvXG5cbiAgICBwb3MgPSBNYXRoLm1heCgwLCBwb3MpO1xuICAgIG91dCA9IFsuLi5vdXQuc2xpY2UoMCwgcG9zKSwgaXRlbSwgLi4ub3V0LnNsaWNlKHBvcyldO1xuICB9KTtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIGNoYW5nZWQ6IGFkZGVkLmxlbmd0aCB8fCByZW1vdmVkLmxlbmd0aCB8fCB1cGRhdGVkLmxlbmd0aCxcbiAgICBmaXJzdDogZmlyc3QgJiYgYWRkZWQubGVuZ3RoID09PSAwLFxuICAgIHRyYW5zaXRpb25zOiBvdXQsXG4gICAgY3VycmVudCxcbiAgICBkZWxldGVkLFxuICAgIHByZXZQcm9wczogcHJvcHNcbiAgfSk7XG59XG5cbmNsYXNzIEFuaW1hdGVkU3R5bGUgZXh0ZW5kcyBBbmltYXRlZE9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHN0eWxlKSB7XG4gICAgaWYgKHN0eWxlID09PSB2b2lkIDApIHtcbiAgICAgIHN0eWxlID0ge307XG4gICAgfVxuXG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChzdHlsZS50cmFuc2Zvcm0gJiYgIShzdHlsZS50cmFuc2Zvcm0gaW5zdGFuY2VvZiBBbmltYXRlZCkpIHtcbiAgICAgIHN0eWxlID0gYXBwbHlBbmltYXRlZFZhbHVlcy50cmFuc2Zvcm0oc3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMucGF5bG9hZCA9IHN0eWxlO1xuICB9XG5cbn1cblxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG5jb25zdCBjb2xvcnMgPSB7XG4gIHRyYW5zcGFyZW50OiAweDAwMDAwMDAwLFxuICBhbGljZWJsdWU6IDB4ZjBmOGZmZmYsXG4gIGFudGlxdWV3aGl0ZTogMHhmYWViZDdmZixcbiAgYXF1YTogMHgwMGZmZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDRmZixcbiAgYXp1cmU6IDB4ZjBmZmZmZmYsXG4gIGJlaWdlOiAweGY1ZjVkY2ZmLFxuICBiaXNxdWU6IDB4ZmZlNGM0ZmYsXG4gIGJsYWNrOiAweDAwMDAwMGZmLFxuICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2RmZixcbiAgYmx1ZTogMHgwMDAwZmZmZixcbiAgYmx1ZXZpb2xldDogMHg4YTJiZTJmZixcbiAgYnJvd246IDB4YTUyYTJhZmYsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODdmZixcbiAgYnVybnRzaWVubmE6IDB4ZWE3ZTVkZmYsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTBmZixcbiAgY2hhcnRyZXVzZTogMHg3ZmZmMDBmZixcbiAgY2hvY29sYXRlOiAweGQyNjkxZWZmLFxuICBjb3JhbDogMHhmZjdmNTBmZixcbiAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkZmYsXG4gIGNvcm5zaWxrOiAweGZmZjhkY2ZmLFxuICBjcmltc29uOiAweGRjMTQzY2ZmLFxuICBjeWFuOiAweDAwZmZmZmZmLFxuICBkYXJrYmx1ZTogMHgwMDAwOGJmZixcbiAgZGFya2N5YW46IDB4MDA4YjhiZmYsXG4gIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiZmYsXG4gIGRhcmtncmF5OiAweGE5YTlhOWZmLFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwZmYsXG4gIGRhcmtncmV5OiAweGE5YTlhOWZmLFxuICBkYXJra2hha2k6IDB4YmRiNzZiZmYsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YmZmLFxuICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmZmZixcbiAgZGFya29yYW5nZTogMHhmZjhjMDBmZixcbiAgZGFya29yY2hpZDogMHg5OTMyY2NmZixcbiAgZGFya3JlZDogMHg4YjAwMDBmZixcbiAgZGFya3NhbG1vbjogMHhlOTk2N2FmZixcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZmZmLFxuICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YmZmLFxuICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZmZmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZmZmLFxuICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMWZmLFxuICBkYXJrdmlvbGV0OiAweDk0MDBkM2ZmLFxuICBkZWVwcGluazogMHhmZjE0OTNmZixcbiAgZGVlcHNreWJsdWU6IDB4MDBiZmZmZmYsXG4gIGRpbWdyYXk6IDB4Njk2OTY5ZmYsXG4gIGRpbWdyZXk6IDB4Njk2OTY5ZmYsXG4gIGRvZGdlcmJsdWU6IDB4MWU5MGZmZmYsXG4gIGZpcmVicmljazogMHhiMjIyMjJmZixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwZmYsXG4gIGZvcmVzdGdyZWVuOiAweDIyOGIyMmZmLFxuICBmdWNoc2lhOiAweGZmMDBmZmZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjZmYsXG4gIGdob3N0d2hpdGU6IDB4ZjhmOGZmZmYsXG4gIGdvbGQ6IDB4ZmZkNzAwZmYsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjBmZixcbiAgZ3JheTogMHg4MDgwODBmZixcbiAgZ3JlZW46IDB4MDA4MDAwZmYsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZmZmLFxuICBncmV5OiAweDgwODA4MGZmLFxuICBob25leWRldzogMHhmMGZmZjBmZixcbiAgaG90cGluazogMHhmZjY5YjRmZixcbiAgaW5kaWFucmVkOiAweGNkNWM1Y2ZmLFxuICBpbmRpZ286IDB4NGIwMDgyZmYsXG4gIGl2b3J5OiAweGZmZmZmMGZmLFxuICBraGFraTogMHhmMGU2OGNmZixcbiAgbGF2ZW5kZXI6IDB4ZTZlNmZhZmYsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1ZmYsXG4gIGxhd25ncmVlbjogMHg3Y2ZjMDBmZixcbiAgbGVtb25jaGlmZm9uOiAweGZmZmFjZGZmLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2ZmYsXG4gIGxpZ2h0Y29yYWw6IDB4ZjA4MDgwZmYsXG4gIGxpZ2h0Y3lhbjogMHhlMGZmZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyZmYsXG4gIGxpZ2h0Z3JheTogMHhkM2QzZDNmZixcbiAgbGlnaHRncmVlbjogMHg5MGVlOTBmZixcbiAgbGlnaHRncmV5OiAweGQzZDNkM2ZmLFxuICBsaWdodHBpbms6IDB4ZmZiNmMxZmYsXG4gIGxpZ2h0c2FsbW9uOiAweGZmYTA3YWZmLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYWZmLFxuICBsaWdodHNreWJsdWU6IDB4ODdjZWZhZmYsXG4gIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OWZmLFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTlmZixcbiAgbGlnaHRzdGVlbGJsdWU6IDB4YjBjNGRlZmYsXG4gIGxpZ2h0eWVsbG93OiAweGZmZmZlMGZmLFxuICBsaW1lOiAweDAwZmYwMGZmLFxuICBsaW1lZ3JlZW46IDB4MzJjZDMyZmYsXG4gIGxpbmVuOiAweGZhZjBlNmZmLFxuICBtYWdlbnRhOiAweGZmMDBmZmZmLFxuICBtYXJvb246IDB4ODAwMDAwZmYsXG4gIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhZmYsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkZmYsXG4gIG1lZGl1bW9yY2hpZDogMHhiYTU1ZDNmZixcbiAgbWVkaXVtcHVycGxlOiAweDkzNzBkYmZmLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzFmZixcbiAgbWVkaXVtc2xhdGVibHVlOiAweDdiNjhlZWZmLFxuICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWFmZixcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjY2ZmLFxuICBtZWRpdW12aW9sZXRyZWQ6IDB4YzcxNTg1ZmYsXG4gIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzBmZixcbiAgbWludGNyZWFtOiAweGY1ZmZmYWZmLFxuICBtaXN0eXJvc2U6IDB4ZmZlNGUxZmYsXG4gIG1vY2Nhc2luOiAweGZmZTRiNWZmLFxuICBuYXZham93aGl0ZTogMHhmZmRlYWRmZixcbiAgbmF2eTogMHgwMDAwODBmZixcbiAgb2xkbGFjZTogMHhmZGY1ZTZmZixcbiAgb2xpdmU6IDB4ODA4MDAwZmYsXG4gIG9saXZlZHJhYjogMHg2YjhlMjNmZixcbiAgb3JhbmdlOiAweGZmYTUwMGZmLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwZmYsXG4gIG9yY2hpZDogMHhkYTcwZDZmZixcbiAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWFmZixcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OGZmLFxuICBwYWxldHVycXVvaXNlOiAweGFmZWVlZWZmLFxuICBwYWxldmlvbGV0cmVkOiAweGRiNzA5M2ZmLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNWZmLFxuICBwZWFjaHB1ZmY6IDB4ZmZkYWI5ZmYsXG4gIHBlcnU6IDB4Y2Q4NTNmZmYsXG4gIHBpbms6IDB4ZmZjMGNiZmYsXG4gIHBsdW06IDB4ZGRhMGRkZmYsXG4gIHBvd2RlcmJsdWU6IDB4YjBlMGU2ZmYsXG4gIHB1cnBsZTogMHg4MDAwODBmZixcbiAgcmViZWNjYXB1cnBsZTogMHg2NjMzOTlmZixcbiAgcmVkOiAweGZmMDAwMGZmLFxuICByb3N5YnJvd246IDB4YmM4ZjhmZmYsXG4gIHJveWFsYmx1ZTogMHg0MTY5ZTFmZixcbiAgc2FkZGxlYnJvd246IDB4OGI0NTEzZmYsXG4gIHNhbG1vbjogMHhmYTgwNzJmZixcbiAgc2FuZHlicm93bjogMHhmNGE0NjBmZixcbiAgc2VhZ3JlZW46IDB4MmU4YjU3ZmYsXG4gIHNlYXNoZWxsOiAweGZmZjVlZWZmLFxuICBzaWVubmE6IDB4YTA1MjJkZmYsXG4gIHNpbHZlcjogMHhjMGMwYzBmZixcbiAgc2t5Ymx1ZTogMHg4N2NlZWJmZixcbiAgc2xhdGVibHVlOiAweDZhNWFjZGZmLFxuICBzbGF0ZWdyYXk6IDB4NzA4MDkwZmYsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTBmZixcbiAgc25vdzogMHhmZmZhZmFmZixcbiAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmZmYsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjRmZixcbiAgdGFuOiAweGQyYjQ4Y2ZmLFxuICB0ZWFsOiAweDAwODA4MGZmLFxuICB0aGlzdGxlOiAweGQ4YmZkOGZmLFxuICB0b21hdG86IDB4ZmY2MzQ3ZmYsXG4gIHR1cnF1b2lzZTogMHg0MGUwZDBmZixcbiAgdmlvbGV0OiAweGVlODJlZWZmLFxuICB3aGVhdDogMHhmNWRlYjNmZixcbiAgd2hpdGU6IDB4ZmZmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1ZmYsXG4gIHllbGxvdzogMHhmZmZmMDBmZixcbiAgeWVsbG93Z3JlZW46IDB4OWFjZDMyZmZcbn07XG5cbi8vIGNvbnN0IElOVEVHRVIgPSAnWy0rXT9cXFxcZCsnO1xuY29uc3QgTlVNQkVSID0gJ1stK10/XFxcXGQqXFxcXC4/XFxcXGQrJztcbmNvbnN0IFBFUkNFTlRBR0UgPSBOVU1CRVIgKyAnJSc7XG5cbmZ1bmN0aW9uIGNhbGwoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJ0cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJ0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAnXFxcXChcXFxccyooJyArIHBhcnRzLmpvaW4oJylcXFxccyosXFxcXHMqKCcpICsgJylcXFxccypcXFxcKSc7XG59XG5cbmNvbnN0IHJnYiA9IG5ldyBSZWdFeHAoJ3JnYicgKyBjYWxsKE5VTUJFUiwgTlVNQkVSLCBOVU1CRVIpKTtcbmNvbnN0IHJnYmEgPSBuZXcgUmVnRXhwKCdyZ2JhJyArIGNhbGwoTlVNQkVSLCBOVU1CRVIsIE5VTUJFUiwgTlVNQkVSKSk7XG5jb25zdCBoc2wgPSBuZXcgUmVnRXhwKCdoc2wnICsgY2FsbChOVU1CRVIsIFBFUkNFTlRBR0UsIFBFUkNFTlRBR0UpKTtcbmNvbnN0IGhzbGEgPSBuZXcgUmVnRXhwKCdoc2xhJyArIGNhbGwoTlVNQkVSLCBQRVJDRU5UQUdFLCBQRVJDRU5UQUdFLCBOVU1CRVIpKTtcbmNvbnN0IGhleDMgPSAvXiMoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLztcbmNvbnN0IGhleDQgPSAvXiMoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC87XG5jb25zdCBoZXg2ID0gL14jKFswLTlhLWZBLUZdezZ9KSQvO1xuY29uc3QgaGV4OCA9IC9eIyhbMC05YS1mQS1GXXs4fSkkLztcblxuLypcbmh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21tdW5pdHkvbm9ybWFsaXplLWNzcy1jb2xvclxuXG5CU0QgMy1DbGF1c2UgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIDIwMTYsIFJlYWN0IENvbW11bml0eVxuQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG5tb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG5cbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGNvcHlyaWdodCBob2xkZXIgbm9yIHRoZSBuYW1lcyBvZiBpdHNcbiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbiAgdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cblxuVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbkFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbklNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRVxuRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUxcbkRBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SXG5TRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUlxuQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSxcbk9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG5PRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yKGNvbG9yKSB7XG4gIGxldCBtYXRjaDtcblxuICBpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBjb2xvciA+Pj4gMCA9PT0gY29sb3IgJiYgY29sb3IgPj0gMCAmJiBjb2xvciA8PSAweGZmZmZmZmZmID8gY29sb3IgOiBudWxsO1xuICB9IC8vIE9yZGVyZWQgYmFzZWQgb24gb2NjdXJyZW5jZXMgb24gRmFjZWJvb2sgY29kZWJhc2VcblxuXG4gIGlmIChtYXRjaCA9IGhleDYuZXhlYyhjb2xvcikpIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArICdmZicsIDE2KSA+Pj4gMDtcbiAgaWYgKGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShjb2xvcikpIHJldHVybiBjb2xvcnNbY29sb3JdO1xuXG4gIGlmIChtYXRjaCA9IHJnYi5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiAocGFyc2UyNTUobWF0Y2hbMV0pIDw8IDI0IHwgLy8gclxuICAgIHBhcnNlMjU1KG1hdGNoWzJdKSA8PCAxNiB8IC8vIGdcbiAgICBwYXJzZTI1NShtYXRjaFszXSkgPDwgOCB8IC8vIGJcbiAgICAweDAwMDAwMGZmKSA+Pj4gLy8gYVxuICAgIDA7XG4gIH1cblxuICBpZiAobWF0Y2ggPSByZ2JhLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChwYXJzZTI1NShtYXRjaFsxXSkgPDwgMjQgfCAvLyByXG4gICAgcGFyc2UyNTUobWF0Y2hbMl0pIDw8IDE2IHwgLy8gZ1xuICAgIHBhcnNlMjU1KG1hdGNoWzNdKSA8PCA4IHwgLy8gYlxuICAgIHBhcnNlMShtYXRjaFs0XSkpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IGhleDMuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0gKyBtYXRjaFsxXSArIC8vIHJcbiAgICBtYXRjaFsyXSArIG1hdGNoWzJdICsgLy8gZ1xuICAgIG1hdGNoWzNdICsgbWF0Y2hbM10gKyAvLyBiXG4gICAgJ2ZmJywgLy8gYVxuICAgIDE2KSA+Pj4gMDtcbiAgfSAvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLWNvbG9yLTQvI2hleC1ub3RhdGlvblxuXG5cbiAgaWYgKG1hdGNoID0gaGV4OC5leGVjKGNvbG9yKSkgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxNikgPj4+IDA7XG5cbiAgaWYgKG1hdGNoID0gaGV4NC5leGVjKGNvbG9yKSkge1xuICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSArIG1hdGNoWzFdICsgLy8gclxuICAgIG1hdGNoWzJdICsgbWF0Y2hbMl0gKyAvLyBnXG4gICAgbWF0Y2hbM10gKyBtYXRjaFszXSArIC8vIGJcbiAgICBtYXRjaFs0XSArIG1hdGNoWzRdLCAvLyBhXG4gICAgMTYpID4+PiAwO1xuICB9XG5cbiAgaWYgKG1hdGNoID0gaHNsLmV4ZWMoY29sb3IpKSB7XG4gICAgcmV0dXJuIChoc2xUb1JnYihwYXJzZTM2MChtYXRjaFsxXSksIC8vIGhcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbMl0pLCAvLyBzXG4gICAgcGFyc2VQZXJjZW50YWdlKG1hdGNoWzNdKSAvLyBsXG4gICAgKSB8IDB4MDAwMDAwZmYpID4+PiAvLyBhXG4gICAgMDtcbiAgfVxuXG4gIGlmIChtYXRjaCA9IGhzbGEuZXhlYyhjb2xvcikpIHtcbiAgICByZXR1cm4gKGhzbFRvUmdiKHBhcnNlMzYwKG1hdGNoWzFdKSwgLy8gaFxuICAgIHBhcnNlUGVyY2VudGFnZShtYXRjaFsyXSksIC8vIHNcbiAgICBwYXJzZVBlcmNlbnRhZ2UobWF0Y2hbM10pIC8vIGxcbiAgICApIHwgcGFyc2UxKG1hdGNoWzRdKSkgPj4+IC8vIGFcbiAgICAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xuICBpZiAodCA8IDApIHQgKz0gMTtcbiAgaWYgKHQgPiAxKSB0IC09IDE7XG4gIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgaWYgKHQgPCAyIC8gMykgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xuICByZXR1cm4gcDtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaCwgcywgbCkge1xuICBjb25zdCBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgY29uc3QgcCA9IDIgKiBsIC0gcTtcbiAgY29uc3QgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcbiAgY29uc3QgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XG4gIGNvbnN0IGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHIgKiAyNTUpIDw8IDI0IHwgTWF0aC5yb3VuZChnICogMjU1KSA8PCAxNiB8IE1hdGgucm91bmQoYiAqIDI1NSkgPDwgODtcbn1cblxuZnVuY3Rpb24gcGFyc2UyNTUoc3RyKSB7XG4gIGNvbnN0IGludCA9IHBhcnNlSW50KHN0ciwgMTApO1xuICBpZiAoaW50IDwgMCkgcmV0dXJuIDA7XG4gIGlmIChpbnQgPiAyNTUpIHJldHVybiAyNTU7XG4gIHJldHVybiBpbnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlMzYwKHN0cikge1xuICBjb25zdCBpbnQgPSBwYXJzZUZsb2F0KHN0cik7XG4gIHJldHVybiAoaW50ICUgMzYwICsgMzYwKSAlIDM2MCAvIDM2MDtcbn1cblxuZnVuY3Rpb24gcGFyc2UxKHN0cikge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHN0cik7XG4gIGlmIChudW0gPCAwKSByZXR1cm4gMDtcbiAgaWYgKG51bSA+IDEpIHJldHVybiAyNTU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGVyY2VudGFnZShzdHIpIHtcbiAgLy8gcGFyc2VGbG9hdCBjb252ZW5pZW50bHkgaWdub3JlcyB0aGUgZmluYWwgJVxuICBjb25zdCBpbnQgPSBwYXJzZUZsb2F0KHN0cik7XG4gIGlmIChpbnQgPCAwKSByZXR1cm4gMDtcbiAgaWYgKGludCA+IDEwMCkgcmV0dXJuIDE7XG4gIHJldHVybiBpbnQgLyAxMDA7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2JhKGlucHV0KSB7XG4gIGxldCBpbnQzMkNvbG9yID0gbm9ybWFsaXplQ29sb3IoaW5wdXQpO1xuICBpZiAoaW50MzJDb2xvciA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICBpbnQzMkNvbG9yID0gaW50MzJDb2xvciB8fCAwO1xuICBsZXQgciA9IChpbnQzMkNvbG9yICYgMHhmZjAwMDAwMCkgPj4+IDI0O1xuICBsZXQgZyA9IChpbnQzMkNvbG9yICYgMHgwMGZmMDAwMCkgPj4+IDE2O1xuICBsZXQgYiA9IChpbnQzMkNvbG9yICYgMHgwMDAwZmYwMCkgPj4+IDg7XG4gIGxldCBhID0gKGludDMyQ29sb3IgJiAweDAwMDAwMGZmKSAvIDI1NTtcbiAgcmV0dXJuIGByZ2JhKCR7cn0sICR7Z30sICR7Yn0sICR7YX0pYDtcbn0gLy8gUHJvYmxlbTogaHR0cHM6Ly9naXRodWIuY29tL2FuaW1hdGVkanMvYW5pbWF0ZWQvcHVsbC8xMDJcbi8vIFNvbHV0aW9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82Mzg1NjUvcGFyc2luZy1zY2llbnRpZmljLW5vdGF0aW9uLXNlbnNpYmx5LzY1ODY2MlxuXG5cbmNvbnN0IHN0cmluZ1NoYXBlUmVnZXggPSAvWytcXC1dPyg/OjB8WzEtOV1cXGQqKSg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2c7IC8vIENvdmVycyByZ2IsIHJnYmEsIGhzbCwgaHNsYVxuLy8gVGFrZW4gZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9vbG1va3JhbWVyLzgyY2NjZTY3M2Y4NmRiN2NkYTVlXG5cbmNvbnN0IGNvbG9yUmVnZXggPSAvKCMoPzpbMC05YS1mXXsyfSl7Miw0fXwoI1swLTlhLWZdezN9KXwocmdifGhzbClhP1xcKCgtP1xcZCslP1ssXFxzXSspezIsM31cXHMqW1xcZFxcLl0rJT9cXCkpL2dpOyAvLyBDb3ZlcnMgY29sb3IgbmFtZXMgKHRyYW5zcGFyZW50LCBibHVlLCBldGMuKVxuXG5jb25zdCBjb2xvck5hbWVzUmVnZXggPSBuZXcgUmVnRXhwKGAoJHtPYmplY3Qua2V5cyhjb2xvcnMpLmpvaW4oJ3wnKX0pYCwgJ2cnKTtcbi8qKlxuICogU3VwcG9ydHMgc3RyaW5nIHNoYXBlcyBieSBleHRyYWN0aW5nIG51bWJlcnMgc28gbmV3IHZhbHVlcyBjYW4gYmUgY29tcHV0ZWQsXG4gKiBhbmQgcmVjb21iaW5lcyB0aG9zZSB2YWx1ZXMgaW50byBuZXcgc3RyaW5ncyBvZiB0aGUgc2FtZSBzaGFwZS4gIFN1cHBvcnRzXG4gKiB0aGluZ3MgbGlrZTpcbiAqXG4gKiAgIHJnYmEoMTIzLCA0MiwgOTksIDAuMzYpICAgICAgICAgICAvLyBjb2xvcnNcbiAqICAgLTQ1ZGVnICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlcyB3aXRoIHVuaXRzXG4gKiAgIDAgMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSAvLyBib3ggc2hhZG93c1xuICovXG5cbmNvbnN0IGNyZWF0ZVN0cmluZ0ludGVycG9sYXRvciA9IGNvbmZpZyA9PiB7XG4gIC8vIFJlcGxhY2UgY29sb3JzIHdpdGggcmdiYVxuICBjb25zdCBvdXRwdXRSYW5nZSA9IGNvbmZpZy5vdXRwdXQubWFwKHJhbmdlVmFsdWUgPT4gcmFuZ2VWYWx1ZS5yZXBsYWNlKGNvbG9yUmVnZXgsIGNvbG9yVG9SZ2JhKSkubWFwKHJhbmdlVmFsdWUgPT4gcmFuZ2VWYWx1ZS5yZXBsYWNlKGNvbG9yTmFtZXNSZWdleCwgY29sb3JUb1JnYmEpKTtcbiAgY29uc3Qgb3V0cHV0UmFuZ2VzID0gb3V0cHV0UmFuZ2VbMF0ubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkubWFwKCgpID0+IFtdKTtcbiAgb3V0cHV0UmFuZ2UuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgdmFsdWUubWF0Y2goc3RyaW5nU2hhcGVSZWdleCkuZm9yRWFjaCgobnVtYmVyLCBpKSA9PiBvdXRwdXRSYW5nZXNbaV0ucHVzaCgrbnVtYmVyKSk7XG4gIH0pO1xuICBjb25zdCBpbnRlcnBvbGF0aW9ucyA9IG91dHB1dFJhbmdlWzBdLm1hdGNoKHN0cmluZ1NoYXBlUmVnZXgpLm1hcCgoX3ZhbHVlLCBpKSA9PiBjcmVhdGVJbnRlcnBvbGF0b3IoX2V4dGVuZHMoe30sIGNvbmZpZywge1xuICAgIG91dHB1dDogb3V0cHV0UmFuZ2VzW2ldXG4gIH0pKSk7XG4gIHJldHVybiBpbnB1dCA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIHJldHVybiBvdXRwdXRSYW5nZVswXSAvLyAncmdiYSgwLCAxMDAsIDIwMCwgMCknXG4gICAgLy8gLT5cbiAgICAvLyAncmdiYSgke2ludGVycG9sYXRpb25zWzBdKGlucHV0KX0sICR7aW50ZXJwb2xhdGlvbnNbMV0oaW5wdXQpfSwgLi4uJ1xuICAgIC5yZXBsYWNlKHN0cmluZ1NoYXBlUmVnZXgsICgpID0+IGludGVycG9sYXRpb25zW2krK10oaW5wdXQpKSAvLyByZ2JhIHJlcXVpcmVzIHRoYXQgdGhlIHIsZyxiIGFyZSBpbnRlZ2Vycy4uLi4gc28gd2Ugd2FudCB0byByb3VuZCB0aGVtLCBidXQgd2UgKmRvbnQqIHdhbnQgdG9cbiAgICAvLyByb3VuZCB0aGUgb3BhY2l0eSAoNHRoIGNvbHVtbikuXG4gICAgLnJlcGxhY2UoL3JnYmFcXCgoWzAtOVxcLi1dKyksIChbMC05XFwuLV0rKSwgKFswLTlcXC4tXSspLCAoWzAtOVxcLi1dKylcXCkvZ2ksIChfLCBwMSwgcDIsIHAzLCBwNCkgPT4gYHJnYmEoJHtNYXRoLnJvdW5kKHAxKX0sICR7TWF0aC5yb3VuZChwMil9LCAke01hdGgucm91bmQocDMpfSwgJHtwNH0pYCk7XG4gIH07XG59O1xuXG5sZXQgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGNvbHVtbnM6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkUm93U3BhbjogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uRW5kOiB0cnVlLFxuICBncmlkQ29sdW1uU3BhbjogdHJ1ZSxcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcblxuY29uc3QgcHJlZml4S2V5ID0gKHByZWZpeCwga2V5KSA9PiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xuXG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01zJywgJ01veicsICdPJ107XG5pc1VuaXRsZXNzTnVtYmVyID0gT2JqZWN0LmtleXMoaXNVbml0bGVzc051bWJlcikucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgcHJlZml4ZXMuZm9yRWFjaChwcmVmaXggPT4gYWNjW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IGFjY1twcm9wXSk7XG4gIHJldHVybiBhY2M7XG59LCBpc1VuaXRsZXNzTnVtYmVyKTtcblxuZnVuY3Rpb24gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShuYW1lLCB2YWx1ZSwgaXNDdXN0b21Qcm9wZXJ0eSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJycpIHJldHVybiAnJztcbiAgaWYgKCFpc0N1c3RvbVByb3BlcnR5ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pKSByZXR1cm4gdmFsdWUgKyAncHgnOyAvLyBQcmVzdW1lcyBpbXBsaWNpdCAncHgnIHN1ZmZpeCBmb3IgdW5pdGxlc3MgbnVtYmVyc1xuXG4gIHJldHVybiAoJycgKyB2YWx1ZSkudHJpbSgpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVDYWNoZSA9IHt9O1xuaW5qZWN0Q3JlYXRlQW5pbWF0ZWRTdHlsZShzdHlsZSA9PiBuZXcgQW5pbWF0ZWRTdHlsZShzdHlsZSkpO1xuaW5qZWN0RGVmYXVsdEVsZW1lbnQoJ2RpdicpO1xuaW5qZWN0U3RyaW5nSW50ZXJwb2xhdG9yKGNyZWF0ZVN0cmluZ0ludGVycG9sYXRvcik7XG5pbmplY3RDb2xvck5hbWVzKGNvbG9ycyk7XG5pbmplY3RBcHBseUFuaW1hdGVkVmFsdWVzKChpbnN0YW5jZSwgcHJvcHMpID0+IHtcbiAgaWYgKGluc3RhbmNlLm5vZGVUeXBlICYmIGluc3RhbmNlLnNldEF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHNjcm9sbFRvcCA9IHByb3BzLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gcHJvcHMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcInN0eWxlXCIsIFwiY2hpbGRyZW5cIiwgXCJzY3JvbGxUb3BcIiwgXCJzY3JvbGxMZWZ0XCJdKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IGluc3RhbmNlLm5vZGVOYW1lID09PSAnZmlsdGVyJyB8fCBpbnN0YW5jZS5wYXJlbnROb2RlICYmIGluc3RhbmNlLnBhcmVudE5vZGUubm9kZU5hbWUgPT09ICdmaWx0ZXInO1xuICAgIGlmIChzY3JvbGxUb3AgIT09IHZvaWQgMCkgaW5zdGFuY2Uuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgIGlmIChzY3JvbGxMZWZ0ICE9PSB2b2lkIDApIGluc3RhbmNlLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyAvLyBTZXQgdGV4dENvbnRlbnQsIGlmIGNoaWxkcmVuIGlzIGFuIGFuaW1hdGFibGUgdmFsdWVcblxuICAgIGlmIChjaGlsZHJlbiAhPT0gdm9pZCAwKSBpbnN0YW5jZS50ZXh0Q29udGVudCA9IGNoaWxkcmVuOyAvLyBTZXQgc3R5bGVzIC4uLlxuXG4gICAgZm9yIChsZXQgc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICBpZiAoIXN0eWxlLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIGNvbnRpbnVlO1xuICAgICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICAgIHZhciBzdHlsZVZhbHVlID0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlW3N0eWxlTmFtZV0sIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgaWYgKHN0eWxlTmFtZSA9PT0gJ2Zsb2F0Jykgc3R5bGVOYW1lID0gJ2Nzc0Zsb2F0JztcbiAgICAgIGlmIChpc0N1c3RvbVByb3BlcnR5KSBpbnN0YW5jZS5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO2Vsc2UgaW5zdGFuY2Uuc3R5bGVbc3R5bGVOYW1lXSA9IHN0eWxlVmFsdWU7XG4gICAgfSAvLyBTZXQgYXR0cmlidXRlcyAuLi5cblxuXG4gICAgZm9yIChsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAvLyBBdHRyaWJ1dGVzIGFyZSB3cml0dGVuIGluIGRhc2ggY2FzZVxuICAgICAgY29uc3QgZGFzaENhc2UgPSBmaWx0ZXIgPyBuYW1lIDogYXR0cmlidXRlQ2FjaGVbbmFtZV0gfHwgKGF0dHJpYnV0ZUNhY2hlW25hbWVdID0gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIG4gPT4gJy0nICsgbi50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmdldEF0dHJpYnV0ZShkYXNoQ2FzZSkgIT09ICd1bmRlZmluZWQnKSBpbnN0YW5jZS5zZXRBdHRyaWJ1dGUoZGFzaENhc2UsIGF0dHJpYnV0ZXNbbmFtZV0pO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn0sIHN0eWxlID0+IHN0eWxlKTtcblxuY29uc3QgZG9tRWxlbWVudHMgPSBbJ2EnLCAnYWJicicsICdhZGRyZXNzJywgJ2FyZWEnLCAnYXJ0aWNsZScsICdhc2lkZScsICdhdWRpbycsICdiJywgJ2Jhc2UnLCAnYmRpJywgJ2JkbycsICdiaWcnLCAnYmxvY2txdW90ZScsICdib2R5JywgJ2JyJywgJ2J1dHRvbicsICdjYW52YXMnLCAnY2FwdGlvbicsICdjaXRlJywgJ2NvZGUnLCAnY29sJywgJ2NvbGdyb3VwJywgJ2RhdGEnLCAnZGF0YWxpc3QnLCAnZGQnLCAnZGVsJywgJ2RldGFpbHMnLCAnZGZuJywgJ2RpYWxvZycsICdkaXYnLCAnZGwnLCAnZHQnLCAnZW0nLCAnZW1iZWQnLCAnZmllbGRzZXQnLCAnZmlnY2FwdGlvbicsICdmaWd1cmUnLCAnZm9vdGVyJywgJ2Zvcm0nLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnaGVhZCcsICdoZWFkZXInLCAnaGdyb3VwJywgJ2hyJywgJ2h0bWwnLCAnaScsICdpZnJhbWUnLCAnaW1nJywgJ2lucHV0JywgJ2lucycsICdrYmQnLCAna2V5Z2VuJywgJ2xhYmVsJywgJ2xlZ2VuZCcsICdsaScsICdsaW5rJywgJ21haW4nLCAnbWFwJywgJ21hcmsnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG4vLyBFeHRlbmQgYW5pbWF0ZWQgd2l0aCBhbGwgdGhlIGF2YWlsYWJsZSBUSFJFRSBlbGVtZW50c1xuY29uc3QgYXBwbHkgPSBtZXJnZShjcmVhdGVBbmltYXRlZENvbXBvbmVudCwgZmFsc2UpO1xuY29uc3QgZXh0ZW5kZWRBbmltYXRlZCA9IGFwcGx5KGRvbUVsZW1lbnRzKTtcblxuZXhwb3J0IHsgYXBwbHksIGNvbmZpZywgdXBkYXRlLCBleHRlbmRlZEFuaW1hdGVkIGFzIGFuaW1hdGVkLCBleHRlbmRlZEFuaW1hdGVkIGFzIGEsIGludGVycG9sYXRlJDEgYXMgaW50ZXJwb2xhdGUsIEdsb2JhbHMsIHVzZVNwcmluZywgdXNlVHJhaWwsIHVzZVRyYW5zaXRpb24sIHVzZUNoYWluLCB1c2VTcHJpbmdzIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIVxuICogXG4gKiAgIHR5cGVkLmpzIC0gQSBKYXZhU2NyaXB0IFR5cGluZyBBbmltYXRpb24gTGlicmFyeVxuICogICBBdXRob3I6IE1hdHQgQm9sZHQgPG1lQG1hdHRib2xkdC5jb20+XG4gKiAgIFZlcnNpb246IHYyLjAuMTFcbiAqICAgVXJsOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGJvbGR0L3R5cGVkLmpzXG4gKiAgIExpY2Vuc2Uocyk6IE1JVFxuICogXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlR5cGVkXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9pbml0aWFsaXplckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblx0XG5cdHZhciBfaHRtbFBhcnNlckpzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdC8qKlxuXHQgKiBXZWxjb21lIHRvIFR5cGVkLmpzIVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIEhUTUwgZWxlbWVudFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBhIG5ldyBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgVHlwZWQgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIFR5cGVkKGVsZW1lbnRJZCwgb3B0aW9ucykge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR5cGVkKTtcblx0XG5cdCAgICAvLyBJbml0aWFsaXplIGl0IHVwXG5cdCAgICBfaW5pdGlhbGl6ZXJKcy5pbml0aWFsaXplci5sb2FkKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnRJZCk7XG5cdCAgICAvLyBBbGwgc3lzdGVtcyBnbyFcblx0ICAgIHRoaXMuYmVnaW4oKTtcblx0ICB9XG5cdFxuXHQgIC8qKlxuXHQgICAqIFRvZ2dsZSBzdGFydCgpIGFuZCBzdG9wKCkgb2YgdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICogQHB1YmxpY1xuXHQgICAqL1xuXHRcblx0ICBfY3JlYXRlQ2xhc3MoVHlwZWQsIFt7XG5cdCAgICBrZXk6ICd0b2dnbGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPyB0aGlzLnN0YXJ0KCkgOiB0aGlzLnN0b3AoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0b3AgdHlwaW5nIC8gYmFja3NwYWNpbmcgYW5kIGVuYWJsZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0b3AnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IHRydWU7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdGFydCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdGFydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG5cdCAgICAgIGlmICh0aGlzLnR5cGluZ0NvbXBsZXRlKSByZXR1cm47XG5cdCAgICAgIGlmICghdGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSBmYWxzZTtcblx0ICAgICAgaWYgKHRoaXMucGF1c2UudHlwZXdyaXRlKSB7XG5cdCAgICAgICAgdGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRGVzdHJveSB0aGlzIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkZXN0cm95Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHQgICAgICB0aGlzLnJlc2V0KGZhbHNlKTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlc2V0IFR5cGVkIGFuZCBvcHRpb25hbGx5IHJlc3RhcnRzXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc3RhcnRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3Jlc2V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgdmFyIHJlc3RhcnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdO1xuXHRcblx0ICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KCcnKTtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yICYmIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKTtcblx0ICAgICAgICB0aGlzLmN1cnNvciA9IG51bGw7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5zdHJQb3MgPSAwO1xuXHQgICAgICB0aGlzLmFycmF5UG9zID0gMDtcblx0ICAgICAgdGhpcy5jdXJMb29wID0gMDtcblx0ICAgICAgaWYgKHJlc3RhcnQpIHtcblx0ICAgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpO1xuXHQgICAgICAgIHRoaXMuYmVnaW4oKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmVnaW5zIHRoZSB0eXBpbmcgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmVnaW4nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJlZ2luKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyk7XG5cdCAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0ICAgICAgdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpO1xuXHQgICAgICB0aGlzLmluc2VydEN1cnNvcigpO1xuXHQgICAgICBpZiAodGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cykgdGhpcy5iaW5kRm9jdXNFdmVudHMoKTtcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50LCBpZiB5ZXMgc3RhcnQgYnkgYmFja3NwYWNpbmcgdGhlIGRlZmF1bHQgbWVzc2FnZVxuXHQgICAgICAgIGlmICghX3RoaXMuY3VycmVudEVsQ29udGVudCB8fCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgX3RoaXMudHlwZXdyaXRlKF90aGlzLnN0cmluZ3NbX3RoaXMuc2VxdWVuY2VbX3RoaXMuYXJyYXlQb3NdXSwgX3RoaXMuc3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgLy8gU3RhcnQgdHlwaW5nXG5cdCAgICAgICAgICBfdGhpcy5iYWNrc3BhY2UoX3RoaXMuY3VycmVudEVsQ29udGVudCwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5zdGFydERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENhbGxlZCBmb3IgZWFjaCBjaGFyYWN0ZXIgdHlwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0eXBld3JpdGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQgJiYgdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpKSB7XG5cdCAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCk7XG5cdCAgICAgIHZhciBudW1DaGFycyA9IDE7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNvbnRhaW4gdHlwaW5nIGZ1bmN0aW9uIGluIGEgdGltZW91dCBodW1hbml6ZSdkIGRlbGF5XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIHNraXAgb3ZlciBhbnkgSFRNTCBjaGFyc1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci50eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczIpO1xuXHRcblx0ICAgICAgICB2YXIgcGF1c2VUaW1lID0gMDtcblx0ICAgICAgICB2YXIgc3Vic3RyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpO1xuXHQgICAgICAgIC8vIGNoZWNrIGZvciBhbiBlc2NhcGUgY2hhcmFjdGVyIGJlZm9yZSBhIHBhdXNlIHZhbHVlXG5cdCAgICAgICAgLy8gZm9ybWF0OiBcXF5cXGQrIC4uIGVnOiBeMTAwMCAuLiBzaG91bGQgYmUgYWJsZSB0byBwcmludCB0aGUgXiB0b28gdXNpbmcgXl5cblx0ICAgICAgICAvLyBzaW5nbGUgXiBhcmUgcmVtb3ZlZCBmcm9tIHN0cmluZ1xuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnXicpIHtcblx0ICAgICAgICAgIGlmICgvXlxcXlxcZCsvLnRlc3Qoc3Vic3RyKSkge1xuXHQgICAgICAgICAgICB2YXIgc2tpcCA9IDE7IC8vIHNraXAgYXQgbGVhc3QgMVxuXHQgICAgICAgICAgICBzdWJzdHIgPSAvXFxkKy8uZXhlYyhzdWJzdHIpWzBdO1xuXHQgICAgICAgICAgICBza2lwICs9IHN1YnN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHBhdXNlVGltZSA9IHBhcnNlSW50KHN1YnN0cik7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IHRydWU7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVyIGFuZCBwYXVzZSB2YWx1ZSBzbyB0aGV5J3JlIG5vdCBwcmludGVkXG5cdCAgICAgICAgICAgIGN1clN0cmluZyA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKSArIGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgc2tpcCk7XG5cdCAgICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGNoZWNrIGZvciBza2lwIGNoYXJhY3RlcnMgZm9ybWF0dGVkIGFzXG5cdCAgICAgICAgLy8gXCJ0aGlzIGlzIGEgYHN0cmluZyB0byBwcmludCBOT1dgIC4uLlwiXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdgJykge1xuXHQgICAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgbnVtQ2hhcnMpLmNoYXJBdCgwKSAhPT0gJ2AnKSB7XG5cdCAgICAgICAgICAgIG51bUNoYXJzKys7XG5cdCAgICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyBudW1DaGFycyA+IGN1clN0cmluZy5sZW5ndGgpIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gc3RyaXAgb3V0IHRoZSBlc2NhcGUgY2hhcmFjdGVycyBhbmQgYXBwZW5kIGFsbCB0aGUgc3RyaW5nIGluIGJldHdlZW5cblx0ICAgICAgICAgIHZhciBzdHJpbmdCZWZvcmVTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ1NraXBwZWQgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKHN0cmluZ0JlZm9yZVNraXAubGVuZ3RoICsgMSwgY3VyU3RyUG9zICsgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgdmFyIHN0cmluZ0FmdGVyU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoY3VyU3RyUG9zICsgbnVtQ2hhcnMgKyAxKTtcblx0ICAgICAgICAgIGN1clN0cmluZyA9IHN0cmluZ0JlZm9yZVNraXAgKyBzdHJpbmdTa2lwcGVkICsgc3RyaW5nQWZ0ZXJTa2lwO1xuXHQgICAgICAgICAgbnVtQ2hhcnMtLTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIHRpbWVvdXQgZm9yIGFueSBwYXVzZSBhZnRlciBhIGNoYXJhY3RlclxuXHQgICAgICAgIF90aGlzMi50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAvLyBBY2NvdW50cyBmb3IgYmxpbmtpbmcgd2hpbGUgcGF1c2VkXG5cdCAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHRcblx0ICAgICAgICAgIC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHNlbnRlbmNlIVxuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA+PSBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5kb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzMi5rZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBlbmQgb2YgY2hhcmFjdGVyIHBhdXNlXG5cdCAgICAgICAgICBpZiAoX3RoaXMyLnRlbXBvcmFyeVBhdXNlKSB7XG5cdCAgICAgICAgICAgIF90aGlzMi50ZW1wb3JhcnlQYXVzZSA9IGZhbHNlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH0sIHBhdXNlVGltZSk7XG5cdFxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIENvbnRpbnVlIHRvIHRoZSBuZXh0IHN0cmluZyAmIGJlZ2luIHR5cGluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2tlZXBUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKSB7XG5cdCAgICAgIC8vIGNhbGwgYmVmb3JlIGZ1bmN0aW9ucyBpZiBhcHBsaWNhYmxlXG5cdCAgICAgIGlmIChjdXJTdHJQb3MgPT09IDApIHtcblx0ICAgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIH1cblx0ICAgICAgLy8gc3RhcnQgdHlwaW5nIGVhY2ggbmV3IGNoYXIgaW50byBleGlzdGluZyBzdHJpbmdcblx0ICAgICAgLy8gY3VyU3RyaW5nOiBhcmcsIHRoaXMuZWwuaHRtbDogb3JpZ2luYWwgdGV4dCBpbnNpZGUgZWxlbWVudFxuXHQgICAgICBjdXJTdHJQb3MgKz0gbnVtQ2hhcnM7XG5cdCAgICAgIHZhciBuZXh0U3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICB0aGlzLnJlcGxhY2VUZXh0KG5leHRTdHJpbmcpO1xuXHQgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICB0aGlzLnR5cGV3cml0ZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBXZSdyZSBkb25lIHR5cGluZyB0aGUgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdkb25lVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXHRcblx0ICAgICAgLy8gZmlyZXMgY2FsbGJhY2sgZnVuY3Rpb25cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIC8vIGlzIHRoaXMgdGhlIGZpbmFsIHN0cmluZ1xuXHQgICAgICBpZiAodGhpcy5hcnJheVBvcyA9PT0gdGhpcy5zdHJpbmdzLmxlbmd0aCAtIDEpIHtcblx0ICAgICAgICAvLyBjYWxsYmFjayB0aGF0IG9jY3VycyBvbiB0aGUgbGFzdCB0eXBlZCBzdHJpbmdcblx0ICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG5cdCAgICAgICAgLy8gcXVpdCBpZiB3ZSB3b250IGxvb3AgYmFja1xuXHQgICAgICAgIGlmICh0aGlzLmxvb3AgPT09IGZhbHNlIHx8IHRoaXMuY3VyTG9vcCA9PT0gdGhpcy5sb29wQ291bnQpIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXMzLmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgIH0sIHRoaXMuYmFja0RlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZXMgMSBjaGFyYWN0ZXIgYXQgYSB0aW1lXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja3NwYWNlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMgPT09IHRydWUpIHtcblx0ICAgICAgICB0aGlzLnNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCB0cnVlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCkgcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTtcblx0XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7XG5cdFxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIuYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczQpO1xuXHQgICAgICAgIC8vIHJlcGxhY2UgdGV4dCB3aXRoIGJhc2UgdGV4dCArIHR5cGVkIGNoYXJhY3RlcnNcblx0ICAgICAgICB2YXIgY3VyU3RyaW5nQXRQb3NpdGlvbiA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICBfdGhpczQucmVwbGFjZVRleHQoY3VyU3RyaW5nQXRQb3NpdGlvbik7XG5cdFxuXHQgICAgICAgIC8vIGlmIHNtYXJ0QmFjayBpcyBlbmFibGVkXG5cdCAgICAgICAgaWYgKF90aGlzNC5zbWFydEJhY2tzcGFjZSkge1xuXHQgICAgICAgICAgLy8gdGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBjdXJyZW50IHN0cmluZyBpcyBlcXVhbCBvZiB0aGUgc2FtZSBwYXJ0IG9mIHRoZSBuZXcgc3RyaW5nXG5cdCAgICAgICAgICB2YXIgbmV4dFN0cmluZyA9IF90aGlzNC5zdHJpbmdzW190aGlzNC5hcnJheVBvcyArIDFdO1xuXHQgICAgICAgICAgaWYgKG5leHRTdHJpbmcgJiYgY3VyU3RyaW5nQXRQb3NpdGlvbiA9PT0gbmV4dFN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKSkge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IGN1clN0clBvcztcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gMDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGlmIHRoZSBudW1iZXIgKGlkIG9mIGNoYXJhY3RlciBpbiBjdXJyZW50IHN0cmluZykgaXNcblx0ICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHN0b3AgbnVtYmVyLCBrZWVwIGdvaW5nXG5cdCAgICAgICAgaWYgKGN1clN0clBvcyA+IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBzdWJ0cmFjdCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgICAgIF90aGlzNC5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoY3VyU3RyUG9zIDw9IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBpZiB0aGUgc3RvcCBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZCwgaW5jcmVhc2Vcblx0ICAgICAgICAgIC8vIGFycmF5IHBvc2l0aW9uIHRvIG5leHQgc3RyaW5nXG5cdCAgICAgICAgICBfdGhpczQuYXJyYXlQb3MrKztcblx0ICAgICAgICAgIC8vIFdoZW4gbG9vcGluZywgYmVnaW4gYXQgdGhlIGJlZ2lubmluZyBhZnRlciBiYWNrc3BhY2UgY29tcGxldGVcblx0ICAgICAgICAgIGlmIChfdGhpczQuYXJyYXlQb3MgPT09IF90aGlzNC5zdHJpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczQuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgICAgICBfdGhpczQub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5iZWdpbigpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnR5cGV3cml0ZShfdGhpczQuc3RyaW5nc1tfdGhpczQuc2VxdWVuY2VbX3RoaXM0LmFycmF5UG9zXV0sIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEZ1bGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcGxldGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXMubG9vcCkge1xuXHQgICAgICAgIHRoaXMuY3VyTG9vcCsrO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBIYXMgdGhlIHR5cGluZyBiZWVuIHN0b3BwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUeXBpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRQYXVzZVN0YXR1cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGlzVHlwaW5nKSB7XG5cdCAgICAgIHRoaXMucGF1c2UudHlwZXdyaXRlID0gaXNUeXBpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyaW5nID0gY3VyU3RyaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0clBvcyA9IGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFRvZ2dsZSB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQmxpbmtpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0b2dnbGVCbGlua2luZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQmxpbmtpbmcoaXNCbGlua2luZykge1xuXHQgICAgICBpZiAoIXRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIC8vIGlmIGluIHBhdXNlZCBzdGF0ZSwgZG9uJ3QgdG9nZ2xlIGJsaW5raW5nIGEgMm5kIHRpbWVcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvckJsaW5raW5nID09PSBpc0JsaW5raW5nKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yQmxpbmtpbmcgPSBpc0JsaW5raW5nO1xuXHQgICAgICBpZiAoaXNCbGlua2luZykge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNwZWVkIGluIE1TIHRvIHR5cGVcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2h1bWFuaXplcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaHVtYW5pemVyKHNwZWVkKSB7XG5cdCAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzcGVlZCAvIDIpICsgc3BlZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTaHVmZmxlIHRoZSBzZXF1ZW5jZSBvZiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NodWZmbGVTdHJpbmdzSWZOZWVkZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaHVmZmxlKSByZXR1cm47XG5cdCAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEFkZHMgYSBDU1MgY2xhc3MgdG8gZmFkZSBvdXQgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbml0RmFkZU91dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEZhZGVPdXQoKSB7XG5cdCAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5lbC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXM1LmFycmF5UG9zKys7XG5cdCAgICAgICAgX3RoaXM1LnJlcGxhY2VUZXh0KCcnKTtcblx0XG5cdCAgICAgICAgLy8gUmVzZXRzIGN1cnJlbnQgc3RyaW5nIGlmIGVuZCBvZiBsb29wIHJlYWNoZWRcblx0ICAgICAgICBpZiAoX3RoaXM1LnN0cmluZ3MubGVuZ3RoID4gX3RoaXM1LmFycmF5UG9zKSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzW190aGlzNS5zZXF1ZW5jZVtfdGhpczUuYXJyYXlQb3NdXSwgMCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbMF0sIDApO1xuXHQgICAgICAgICAgX3RoaXM1LmFycmF5UG9zID0gMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuZmFkZU91dERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2VzIGN1cnJlbnQgdGV4dCBpbiB0aGUgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBkZXBlbmRpbmcgb24gZWxlbWVudCB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVwbGFjZVRleHQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KHN0cikge1xuXHQgICAgICBpZiAodGhpcy5hdHRyKSB7XG5cdCAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLCBzdHIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHtcblx0ICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gc3RyO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdXNpbmcgaW5wdXQgZWxlbWVudHMsIGJpbmQgZm9jdXMgaW4gb3JkZXIgdG9cblx0ICAgICAqIHN0YXJ0IGFuZCBzdG9wIHRoZSBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiaW5kRm9jdXNFdmVudHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcblx0ICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAoIXRoaXMuaXNJbnB1dCkgcmV0dXJuO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBfdGhpczYuc3RvcCgpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoX3RoaXM2LmVsLnZhbHVlICYmIF90aGlzNi5lbC52YWx1ZS5sZW5ndGggIT09IDApIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgX3RoaXM2LnN0YXJ0KCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT24gaW5pdCwgaW5zZXJ0IHRoZSBjdXJzb3IgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luc2VydEN1cnNvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0Q3Vyc29yKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2hvd0N1cnNvcikgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSA9ICd0eXBlZC1jdXJzb3InO1xuXHQgICAgICB0aGlzLmN1cnNvci5pbm5lckhUTUwgPSB0aGlzLmN1cnNvckNoYXI7XG5cdCAgICAgIHRoaXMuZWwucGFyZW50Tm9kZSAmJiB0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLCB0aGlzLmVsLm5leHRTaWJsaW5nKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBUeXBlZDtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IFR5cGVkO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfZGVmYXVsdHNKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHNKcyk7XG5cdFxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB0aGUgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIEluaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBJbml0aWFsaXplcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbml0aWFsaXplcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSW5pdGlhbGl6ZXIsIFt7XG5cdCAgICBrZXk6ICdsb2FkJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIExvYWQgdXAgZGVmYXVsdHMgJiBvcHRpb25zIG9uIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gaW5zdGFuY2Ugb2YgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQoc2VsZiwgb3B0aW9ucywgZWxlbWVudElkKSB7XG5cdCAgICAgIC8vIGNob3NlbiBlbGVtZW50IHRvIG1hbmlwdWxhdGUgdGV4dFxuXHQgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJZCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50SWQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuZWwgPSBlbGVtZW50SWQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHNlbGYub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBfZGVmYXVsdHNKczJbJ2RlZmF1bHQnXSwgb3B0aW9ucyk7XG5cdFxuXHQgICAgICAvLyBhdHRyaWJ1dGUgdG8gdHlwZSBpbnRvXG5cdCAgICAgIHNlbGYuaXNJbnB1dCA9IHNlbGYuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnO1xuXHQgICAgICBzZWxmLmF0dHIgPSBzZWxmLm9wdGlvbnMuYXR0cjtcblx0ICAgICAgc2VsZi5iaW5kSW5wdXRGb2N1c0V2ZW50cyA9IHNlbGYub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cztcblx0XG5cdCAgICAgIC8vIHNob3cgY3Vyc29yXG5cdCAgICAgIHNlbGYuc2hvd0N1cnNvciA9IHNlbGYuaXNJbnB1dCA/IGZhbHNlIDogc2VsZi5vcHRpb25zLnNob3dDdXJzb3I7XG5cdFxuXHQgICAgICAvLyBjdXN0b20gY3Vyc29yXG5cdCAgICAgIHNlbGYuY3Vyc29yQ2hhciA9IHNlbGYub3B0aW9ucy5jdXJzb3JDaGFyO1xuXHRcblx0ICAgICAgLy8gSXMgdGhlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICBzZWxmLmN1cnNvckJsaW5raW5nID0gdHJ1ZTtcblx0XG5cdCAgICAgIC8vIHRleHQgY29udGVudCBvZiBlbGVtZW50XG5cdCAgICAgIHNlbGYuZWxDb250ZW50ID0gc2VsZi5hdHRyID8gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKSA6IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdFxuXHQgICAgICAvLyBodG1sIG9yIHBsYWluIHRleHRcblx0ICAgICAgc2VsZi5jb250ZW50VHlwZSA9IHNlbGYub3B0aW9ucy5jb250ZW50VHlwZTtcblx0XG5cdCAgICAgIC8vIHR5cGluZyBzcGVlZFxuXHQgICAgICBzZWxmLnR5cGVTcGVlZCA9IHNlbGYub3B0aW9ucy50eXBlU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBhZGQgYSBkZWxheSBiZWZvcmUgdHlwaW5nIHN0YXJ0c1xuXHQgICAgICBzZWxmLnN0YXJ0RGVsYXkgPSBzZWxmLm9wdGlvbnMuc3RhcnREZWxheTtcblx0XG5cdCAgICAgIC8vIGJhY2tzcGFjaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYuYmFja1NwZWVkID0gc2VsZi5vcHRpb25zLmJhY2tTcGVlZDtcblx0XG5cdCAgICAgIC8vIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICAgIHNlbGYuc21hcnRCYWNrc3BhY2UgPSBzZWxmLm9wdGlvbnMuc21hcnRCYWNrc3BhY2U7XG5cdFxuXHQgICAgICAvLyBhbW91bnQgb2YgdGltZSB0byB3YWl0IGJlZm9yZSBiYWNrc3BhY2luZ1xuXHQgICAgICBzZWxmLmJhY2tEZWxheSA9IHNlbGYub3B0aW9ucy5iYWNrRGVsYXk7XG5cdFxuXHQgICAgICAvLyBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAgICBzZWxmLmZhZGVPdXQgPSBzZWxmLm9wdGlvbnMuZmFkZU91dDtcblx0ICAgICAgc2VsZi5mYWRlT3V0Q2xhc3MgPSBzZWxmLm9wdGlvbnMuZmFkZU91dENsYXNzO1xuXHQgICAgICBzZWxmLmZhZGVPdXREZWxheSA9IHNlbGYub3B0aW9ucy5mYWRlT3V0RGVsYXk7XG5cdFxuXHQgICAgICAvLyB2YXJpYWJsZSB0byBjaGVjayB3aGV0aGVyIHR5cGluZyBpcyBjdXJyZW50bHkgcGF1c2VkXG5cdCAgICAgIHNlbGYuaXNQYXVzZWQgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIGlucHV0IHN0cmluZ3Mgb2YgdGV4dFxuXHQgICAgICBzZWxmLnN0cmluZ3MgPSBzZWxmLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24gKHMpIHtcblx0ICAgICAgICByZXR1cm4gcy50cmltKCk7XG5cdCAgICAgIH0pO1xuXHRcblx0ICAgICAgLy8gZGl2IGNvbnRhaW5pbmcgc3RyaW5nc1xuXHQgICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmIChzZWxmLnN0cmluZ3NFbGVtZW50KSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzID0gW107XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHQgICAgICAgIHZhciBzdHJpbmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHNlbGYuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pO1xuXHQgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XG5cdFxuXHQgICAgICAgIGlmIChzdHJpbmdzTGVuZ3RoKSB7XG5cdCAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3NMZW5ndGg7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICB2YXIgc3RyaW5nRWwgPSBzdHJpbmdzW2ldO1xuXHQgICAgICAgICAgICBzZWxmLnN0cmluZ3MucHVzaChzdHJpbmdFbC5pbm5lckhUTUwudHJpbSgpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIGNoYXJhY3RlciBudW1iZXIgcG9zaXRpb24gb2YgY3VycmVudCBzdHJpbmdcblx0ICAgICAgc2VsZi5zdHJQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gY3VycmVudCBhcnJheSBwb3NpdGlvblxuXHQgICAgICBzZWxmLmFycmF5UG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGluZGV4IG9mIHN0cmluZyB0byBzdG9wIGJhY2tzcGFjaW5nIG9uXG5cdCAgICAgIHNlbGYuc3RvcE51bSA9IDA7XG5cdFxuXHQgICAgICAvLyBMb29waW5nIGxvZ2ljXG5cdCAgICAgIHNlbGYubG9vcCA9IHNlbGYub3B0aW9ucy5sb29wO1xuXHQgICAgICBzZWxmLmxvb3BDb3VudCA9IHNlbGYub3B0aW9ucy5sb29wQ291bnQ7XG5cdCAgICAgIHNlbGYuY3VyTG9vcCA9IDA7XG5cdFxuXHQgICAgICAvLyBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2h1ZmZsZSA9IHNlbGYub3B0aW9ucy5zaHVmZmxlO1xuXHQgICAgICAvLyB0aGUgb3JkZXIgb2Ygc3RyaW5nc1xuXHQgICAgICBzZWxmLnNlcXVlbmNlID0gW107XG5cdFxuXHQgICAgICBzZWxmLnBhdXNlID0ge1xuXHQgICAgICAgIHN0YXR1czogZmFsc2UsXG5cdCAgICAgICAgdHlwZXdyaXRlOiB0cnVlLFxuXHQgICAgICAgIGN1clN0cmluZzogJycsXG5cdCAgICAgICAgY3VyU3RyUG9zOiAwXG5cdCAgICAgIH07XG5cdFxuXHQgICAgICAvLyBXaGVuIHRoZSB0eXBpbmcgaXMgY29tcGxldGUgKHdoZW4gbm90IGxvb3BlZClcblx0ICAgICAgc2VsZi50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gU2V0IHRoZSBvcmRlciBpbiB3aGljaCB0aGUgc3RyaW5ncyBhcmUgdHlwZWRcblx0ICAgICAgZm9yICh2YXIgaSBpbiBzZWxmLnN0cmluZ3MpIHtcblx0ICAgICAgICBzZWxmLnNlcXVlbmNlW2ldID0gaTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gSWYgdGhlcmUgaXMgc29tZSB0ZXh0IGluIHRoZSBlbGVtZW50XG5cdCAgICAgIHNlbGYuY3VycmVudEVsQ29udGVudCA9IHRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKTtcblx0XG5cdCAgICAgIHNlbGYuYXV0b0luc2VydENzcyA9IHNlbGYub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzO1xuXHRcblx0ICAgICAgdGhpcy5hcHBlbmRBbmltYXRpb25Dc3Moc2VsZik7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnZ2V0Q3VycmVudEVsQ29udGVudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudEVsQ29udGVudChzZWxmKSB7XG5cdCAgICAgIHZhciBlbENvbnRlbnQgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuYXR0cikge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cik7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc0lucHV0KSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC52YWx1ZTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmlubmVySFRNTDtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnRleHRDb250ZW50O1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBlbENvbnRlbnQ7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAnYXBwZW5kQW5pbWF0aW9uQ3NzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRBbmltYXRpb25Dc3Moc2VsZikge1xuXHQgICAgICB2YXIgY3NzRGF0YU5hbWUgPSAnZGF0YS10eXBlZC1qcy1jc3MnO1xuXHQgICAgICBpZiAoIXNlbGYuYXV0b0luc2VydENzcykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoIXNlbGYuc2hvd0N1cnNvciAmJiAhc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbJyArIGNzc0RhdGFOYW1lICsgJ10nKSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cdCAgICAgIGNzcy50eXBlID0gJ3RleHQvY3NzJztcblx0ICAgICAgY3NzLnNldEF0dHJpYnV0ZShjc3NEYXRhTmFtZSwgdHJ1ZSk7XG5cdFxuXHQgICAgICB2YXIgaW5uZXJDc3MgPSAnJztcblx0ICAgICAgaWYgKHNlbGYuc2hvd0N1cnNvcikge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIGlubmVyQ3NzICs9ICdcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5rLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICc7XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGNzcy5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgY3NzLmlubmVySFRNTCA9IGlubmVyQ3NzO1xuXHQgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSW5pdGlhbGl6ZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBJbml0aWFsaXplcjtcblx0dmFyIGluaXRpYWxpemVyID0gbmV3IEluaXRpYWxpemVyKCk7XG5cdGV4cG9ydHMuaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIERlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcmV0dXJucyB7b2JqZWN0fSBUeXBlZCBkZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7YXJyYXl9IHN0cmluZ3Mgc3RyaW5ncyB0byBiZSB0eXBlZFxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJpbmdzRWxlbWVudCBJRCBvZiBlbGVtZW50IGNvbnRhaW5pbmcgc3RyaW5nIGNoaWxkcmVuXG5cdCAgICovXG5cdCAgc3RyaW5nczogWydUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uJywgJ1lvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz8nLCAnVXNlIHlvdXIgb3duIScsICdIYXZlIGEgZ3JlYXQgZGF5ISddLFxuXHQgIHN0cmluZ3NFbGVtZW50OiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gdHlwZVNwZWVkIHR5cGUgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgdHlwZVNwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnREZWxheSB0aW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHN0YXJ0RGVsYXk6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrU3BlZWQgYmFja3NwYWNpbmcgc3BlZWQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja1NwZWVkOiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNtYXJ0QmFja3NwYWNlIG9ubHkgYmFja3NwYWNlIHdoYXQgZG9lc24ndCBtYXRjaCB0aGUgcHJldmlvdXMgc3RyaW5nXG5cdCAgICovXG5cdCAgc21hcnRCYWNrc3BhY2U6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2h1ZmZsZSBzaHVmZmxlIHRoZSBzdHJpbmdzXG5cdCAgICovXG5cdCAgc2h1ZmZsZTogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBiYWNrRGVsYXkgdGltZSBiZWZvcmUgYmFja3NwYWNpbmcgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgYmFja0RlbGF5OiA3MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dCBGYWRlIG91dCBpbnN0ZWFkIG9mIGJhY2tzcGFjZVxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBmYWRlT3V0Q2xhc3MgY3NzIGNsYXNzIGZvciBmYWRlIGFuaW1hdGlvblxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmFkZU91dERlbGF5IEZhZGUgb3V0IGRlbGF5IGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGZhZGVPdXQ6IGZhbHNlLFxuXHQgIGZhZGVPdXRDbGFzczogJ3R5cGVkLWZhZGUtb3V0Jyxcblx0ICBmYWRlT3V0RGVsYXk6IDUwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBsb29wIGxvb3Agc3RyaW5nc1xuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsb29wQ291bnQgYW1vdW50IG9mIGxvb3BzXG5cdCAgICovXG5cdCAgbG9vcDogZmFsc2UsXG5cdCAgbG9vcENvdW50OiBJbmZpbml0eSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaG93Q3Vyc29yIHNob3cgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnNvckNoYXIgY2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGF1dG9JbnNlcnRDc3MgaW5zZXJ0IENTUyBmb3IgY3Vyc29yIGFuZCBmYWRlT3V0IGludG8gSFRNTCA8aGVhZD5cblx0ICAgKi9cblx0ICBzaG93Q3Vyc29yOiB0cnVlLFxuXHQgIGN1cnNvckNoYXI6ICd8Jyxcblx0ICBhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0ciBhdHRyaWJ1dGUgZm9yIHR5cGluZ1xuXHQgICAqIEV4OiBpbnB1dCBwbGFjZWhvbGRlciwgdmFsdWUsIG9yIGp1c3QgSFRNTCB0ZXh0XG5cdCAgICovXG5cdCAgYXR0cjogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBiaW5kSW5wdXRGb2N1c0V2ZW50cyBiaW5kIHRvIGZvY3VzIGFuZCBibHVyIGlmIGVsIGlzIHRleHQgaW5wdXRcblx0ICAgKi9cblx0ICBiaW5kSW5wdXRGb2N1c0V2ZW50czogZmFsc2UsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb250ZW50VHlwZSAnaHRtbCcgb3IgJ251bGwnIGZvciBwbGFpbnRleHRcblx0ICAgKi9cblx0ICBjb250ZW50VHlwZTogJ2h0bWwnLFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgaXQgYmVnaW5zIHR5cGluZ1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkJlZ2luOiBmdW5jdGlvbiBvbkJlZ2luKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBbGwgdHlwaW5nIGlzIGNvbXBsZXRlXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIG9uQ29tcGxldGUoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBwcmVTdHJpbmdUeXBlZDogZnVuY3Rpb24gcHJlU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBlYWNoIHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0cmluZ1R5cGVkOiBmdW5jdGlvbiBvblN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogRHVyaW5nIGxvb3BpbmcsIGFmdGVyIGxhc3Qgc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6IGZ1bmN0aW9uIG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUGF1c2VkOiBmdW5jdGlvbiBvblR5cGluZ1BhdXNlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIFR5cGluZyBoYXMgYmVlbiBzdGFydGVkIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdSZXN1bWVkOiBmdW5jdGlvbiBvblR5cGluZ1Jlc3VtZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciByZXNldFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblJlc2V0OiBmdW5jdGlvbiBvblJlc2V0KHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdG9wXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RhcnRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGRlc3Ryb3lcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koc2VsZikge31cblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRzO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIFRPRE86IFRoZXNlIG1ldGhvZHMgY2FuIHByb2JhYmx5IGJlIGNvbWJpbmVkIHNvbWVob3dcblx0ICogUGFyc2UgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIEhUTUxQYXJzZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEhUTUxQYXJzZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTFBhcnNlcik7XG5cdCAgfVxuXHRcblx0ICBfY3JlYXRlQ2xhc3MoSFRNTFBhcnNlciwgW3tcblx0ICAgIGtleTogJ3R5cGVIdG1sQ2hhcnMnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVHlwZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc8JyB8fCBjdXJDaGFyID09PSAnJicpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc8Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJz4nO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnOyc7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgKyAxID4gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJhY2tzcGFjZSBIVE1MIHRhZ3MgYW5kIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmFja1NwYWNlSHRtbENoYXJzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nIHx8IGN1ckNoYXIgPT09ICc7Jykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJz4nKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPCc7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICcmJztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zIC0gMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyA8IDApIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gSFRNTFBhcnNlcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEhUTUxQYXJzZXI7XG5cdHZhciBodG1sUGFyc2VyID0gbmV3IEhUTUxQYXJzZXIoKTtcblx0ZXhwb3J0cy5odG1sUGFyc2VyID0gaHRtbFBhcnNlcjtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7ZWFzZUN1YmljIH0gZnJvbSAnZDMtZWFzZSdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZVG9wLCBzZXRUcmFuc2xhdGVZVG9wXSA9IHVzZVNwcmluZygoKSA9PiAoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKVxyXG4gIGNvbnN0IFt0cmFuc2xhdGVZQm90dG9tLCBzZXRUcmFuc2xhdGVZQm90dG9tXSA9IHVzZVNwcmluZygoKSA9PiAoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKVxyXG4gIGNvbnN0IHJvdGF0ZSA9IHVzZVNwcmluZyh7XHJcbiAgICBjb25maWc6IHtkdXJhdGlvbjogMTAwMH0sXHJcbiAgICB0bzoge3RyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ30sXHJcbiAgICBmcm9tOiB7dHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJ30sXHJcbiAgICBvblJlc3Q6ICgpID0+IHtcclxuICAgICAgc2V0VHJhbnNsYXRlWVRvcCh7XHJcbiAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgY29uZmlnOiB7ZHVyYXRpb246IDIwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgICAgICB0bzoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ30sXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldFRyYW5zbGF0ZVlCb3R0b20oe1xyXG4gICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgIGNvbmZpZzoge2R1cmF0aW9uOiAyMDAwLCBlYXNpbmc6IGVhc2VDdWJpY30sXHJcbiAgICAgICAgdG86IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ30sXHJcbiAgICAgICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJyx0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3IgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIHotMTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXJlZC03MDAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vclRvcH1gfSBzdHlsZT17dHJhbnNsYXRlWVRvcH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS03MDAgdy0yMCBoLTIwIHotMjAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBiZy1vcmFuZ2UtNzAwIHJvdW5kZWQtZnVsbCAke3N0eWxlcy5jaXJjbGV9YH0gc3R5bGU9e3JvdGF0ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXdoaXRlIGJvdHRvbS0wIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JCb3R0b219YH0gc3R5bGU9e3RyYW5zbGF0ZVlCb3R0b219Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdFYXJ0aH0gYmctbm8tcmVwZWF0IGJnLWZpeGVkIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBiZy1ibGFjayAke3N0eWxlcy5yZWRCb3h9IGgtOGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlICR7c3R5bGVzLnRvcEJveH0gYmctYmxhY2sgdGV4dC13aGl0ZSB3LTI0YH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+aGVsbG9Xb3JsZC5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWRCb3h9IHJlbGF0aXZlIGJnLWJsYWNrICR7c3R5bGVzLmJnT3BhY2l0eTkwfSByb3VuZGVkLWxnIHAtNiBtYXgtdy1sZyBteC02YH0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveEltZ30gb2JqZWN0LWNvbnRhaW4gZmxvYXQtbGVmdCB3LTIwIG1yLTQgbXQtMiByb3VuZGVkLWxnYH0gc3JjPScvYXNzZXRzL3N0YXRpYy9pYW0uanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPSdib3gtdGV4dCcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94VGV4dH0gdGV4dC1sZyB0ZXh0LXdoaXRlYH0+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLXJlZC04MDAgYmctYmxhY2sgdGV4dC13aGl0ZSBoLTE2ICR7c3R5bGVzLnJlZEJveH1gfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5Qcm95ZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkdpdGh1YjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkxlbmtlZGluPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2luZGV4Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2luZGV4Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9pbmRleC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=