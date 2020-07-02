webpackHotUpdate("static\\development\\pages\\index.js",{

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
    return {};
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      translateYTop = _useSpring2[0],
      setTranslateYTop = _useSpring2[1];

  var _useSpring3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {};
  }),
      _useSpring4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring3, 2),
      translateYBottom = _useSpring4[0],
      setTranslateYBottom = _useSpring4[1];

  var rotate = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    config: {
      duration: 2000
    },
    to: {
      transform: 'rotate(360deg)'
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
        },
        from: {
          transform: 'translateY(0%)'
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
        from: {
          transform: 'translateY(0%)'
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "door absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "absolute bg-red-700 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "w-20 h-20 bg-blue-700 rounded-full z-20",
    style: rotate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJ1c2VTcHJpbmciLCJ0cmFuc2xhdGVZVG9wIiwic2V0VHJhbnNsYXRlWVRvcCIsInRyYW5zbGF0ZVlCb3R0b20iLCJzZXRUcmFuc2xhdGVZQm90dG9tIiwicm90YXRlIiwiY29uZmlnIiwiZHVyYXRpb24iLCJ0byIsInRyYW5zZm9ybSIsImZyb20iLCJvblJlc3QiLCJkZWxheSIsImVhc2luZyIsImVhc2VDdWJpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlcGxhY2UiLCJ1c2VFZmZlY3QiLCJ0eHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsInN0eWxlcyIsImRvb3JUb3AiLCJkb29yQm90dG9tIiwiYmdFYXJ0aCIsInJlZEJveCIsInRvcEJveCIsImJnT3BhY2l0eTkwIiwiYm94SW1nIiwiYm94VGV4dCJd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QXdDSiw2RUFBTSxDQUFDTSxXQUEvQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtOLDZFQUFNLENBQUNPLE1BQVoseURBQWQ7QUFBd0YsT0FBRyxFQUFDLHdCQUE1RjtBQUFxSCxPQUFHLEVBQUMsRUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsYUFBUyxZQUFLUCw2RUFBTSxDQUFDUSxPQUFaLHdCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQVJGLEVBY0U7QUFBSyxhQUFTLDJHQUFvR1IsNkVBQU0sQ0FBQ0ksTUFBM0csQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsQ0FkRixDQU5GLENBREY7QUE2QkQsQ0E3REQ7QUFBQSxVQUM0QzdCLHNEQUQ1QyxFQUVrREEsc0RBRmxELEVBR2lCQSxzREFIakI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGE2MzY2ZjJlYWUzZmQxNDA3YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHtlYXNlQ3ViaWMgfSBmcm9tICdkMy1lYXNlJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW3RyYW5zbGF0ZVlUb3AsIHNldFRyYW5zbGF0ZVlUb3BdID0gdXNlU3ByaW5nKCgpID0+ICh7fSkpXHJcbiAgY29uc3QgW3RyYW5zbGF0ZVlCb3R0b20sIHNldFRyYW5zbGF0ZVlCb3R0b21dID0gdXNlU3ByaW5nKCgpID0+ICh7fSkpXHJcbiAgY29uc3Qgcm90YXRlID0gdXNlU3ByaW5nKHtcclxuICAgIGNvbmZpZzoge2R1cmF0aW9uOiAyMDAwfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknfSxcclxuICAgIGZyb206IHt0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknfSxcclxuICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICBzZXRUcmFuc2xhdGVZVG9wKHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBjb25maWc6IHtkdXJhdGlvbjogMjAwMCwgZWFzaW5nOiBlYXNlQ3ViaWN9LFxyXG4gICAgICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknfSxcclxuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyB9LFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRUcmFuc2xhdGVZQm90dG9tKHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBjb25maWc6IHtkdXJhdGlvbjogMjAwMCwgZWFzaW5nOiBlYXNlQ3ViaWN9LFxyXG4gICAgICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSd9LFxyXG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0sXHJcbiAgICAgICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJyx0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3IgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIHotMTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXJlZC03MDAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vclRvcH1gfSBzdHlsZT17dHJhbnNsYXRlWVRvcH0gLz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT0ndy0yMCBoLTIwIGJnLWJsdWUtNzAwIHJvdW5kZWQtZnVsbCB6LTIwJyBzdHlsZT17cm90YXRlfSAvPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17dHJhbnNsYXRlWUJvdHRvbX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iZ0VhcnRofSBiZy1uby1yZXBlYXQgYmctZml4ZWQgbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGJnLWJsYWNrICR7c3R5bGVzLnJlZEJveH0gaC04YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtzdHlsZXMudG9wQm94fSBiZy1ibGFjayB0ZXh0LXdoaXRlIHctMjRgfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5oZWxsb1dvcmxkLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZEJveH0gcmVsYXRpdmUgYmctYmxhY2sgJHtzdHlsZXMuYmdPcGFjaXR5OTB9IHJvdW5kZWQtbGcgcC02IG1heC13LWxnIG14LTZgfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94SW1nfSBvYmplY3QtY29udGFpbiBmbG9hdC1sZWZ0IHctMjAgbXItNCBtdC0yIHJvdW5kZWQtbGdgfSBzcmM9Jy9hc3NldHMvc3RhdGljL2lhbS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9J2JveC10ZXh0JyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hUZXh0fSB0ZXh0LWxnIHRleHQtd2hpdGVgfT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtcmVkLTgwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIGgtMTYgJHtzdHlsZXMucmVkQm94fWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlByb3llY3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+R2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+TGVua2VkaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==