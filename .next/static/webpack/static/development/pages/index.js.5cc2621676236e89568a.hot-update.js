webpackHotUpdate("static\\development\\pages\\index.js",{

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
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "w-20 h-20 bg-blue-700 rounded-full z-20",
    style: rotate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWVRvcCIsInNldFRyYW5zbGF0ZVlUb3AiLCJ0cmFuc2xhdGVZQm90dG9tIiwic2V0VHJhbnNsYXRlWUJvdHRvbSIsInJvdGF0ZSIsImNvbmZpZyIsImR1cmF0aW9uIiwidG8iLCJmcm9tIiwib25SZXN0IiwiZGVsYXkiLCJlYXNpbmciLCJlYXNlQ3ViaWMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwidHh0IiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzdHlsZXMiLCJkb29yVG9wIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsOEVBQU07QUFBQTs7QUFBQSxtQkFDdUJBLDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUNDLGVBQVMsRUFBRTtBQUFaLEtBQVA7QUFBQSxHQUFELENBRGhDO0FBQUE7QUFBQSxNQUNaQyxhQURZO0FBQUEsTUFDR0MsZ0JBREg7O0FBQUEsb0JBRTZCSCw4REFBUyxDQUFDO0FBQUEsV0FBTztBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUFQO0FBQUEsR0FBRCxDQUZ0QztBQUFBO0FBQUEsTUFFWkcsZ0JBRlk7QUFBQSxNQUVNQyxtQkFGTjs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHTiw4REFBUyxDQUFDO0FBQ3ZCTyxVQUFNLEVBQUU7QUFBQ0MsY0FBUSxFQUFFO0FBQVgsS0FEZTtBQUV2QkMsTUFBRSxFQUFFO0FBQUNSLGVBQVMsRUFBRTtBQUFaLEtBRm1CO0FBR3ZCUyxRQUFJLEVBQUU7QUFBQ1Qs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsVUFBVDtBQUFvQixhQUFTLFlBQUtQLDZFQUFNLENBQUNRLE9BQVosd0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsMkdBQW9HUiw2RUFBTSxDQUFDSSxNQUEzRyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixDQWRGLENBTkYsQ0FERjtBQTZCRCxDQTNERDtBQUFBLFVBQzRDN0Isc0RBRDVDLEVBRWtEQSxzREFGbEQsRUFHaUJBLHNEQUhqQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41Y2MyNjIxNjc2MjM2ZTg5NTY4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7ZWFzZUN1YmljIH0gZnJvbSAnZDMtZWFzZSdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZVG9wLCBzZXRUcmFuc2xhdGVZVG9wXSA9IHVzZVNwcmluZygoKSA9PiAoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKVxyXG4gIGNvbnN0IFt0cmFuc2xhdGVZQm90dG9tLCBzZXRUcmFuc2xhdGVZQm90dG9tXSA9IHVzZVNwcmluZygoKSA9PiAoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ30pKVxyXG4gIGNvbnN0IHJvdGF0ZSA9IHVzZVNwcmluZyh7XHJcbiAgICBjb25maWc6IHtkdXJhdGlvbjogMjAwMH0sXHJcbiAgICB0bzoge3RyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ30sXHJcbiAgICBmcm9tOiB7dHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJ30sXHJcbiAgICBvblJlc3Q6ICgpID0+IHtcclxuICAgICAgc2V0VHJhbnNsYXRlWVRvcCh7XHJcbiAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgY29uZmlnOiB7ZHVyYXRpb246IDIwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgICAgICB0bzoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ30sXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldFRyYW5zbGF0ZVlCb3R0b20oe1xyXG4gICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgIGNvbmZpZzoge2R1cmF0aW9uOiAyMDAwLCBlYXNpbmc6IGVhc2VDdWJpY30sXHJcbiAgICAgICAgdG86IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ30sXHJcbiAgICAgICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJyx0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3IgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIHotMTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXJlZC03MDAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vclRvcH1gfSBzdHlsZT17dHJhbnNsYXRlWVRvcH0gLz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT0ndy0yMCBoLTIwIGJnLWJsdWUtNzAwIHJvdW5kZWQtZnVsbCB6LTIwJyBzdHlsZT17cm90YXRlfSAvPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17dHJhbnNsYXRlWUJvdHRvbX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iZ0VhcnRofSBiZy1uby1yZXBlYXQgYmctZml4ZWQgbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGJnLWJsYWNrICR7c3R5bGVzLnJlZEJveH0gaC04YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtzdHlsZXMudG9wQm94fSBiZy1ibGFjayB0ZXh0LXdoaXRlIHctMjRgfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5oZWxsb1dvcmxkLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZEJveH0gcmVsYXRpdmUgYmctYmxhY2sgJHtzdHlsZXMuYmdPcGFjaXR5OTB9IHJvdW5kZWQtbGcgcC02IG1heC13LWxnIG14LTZgfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94SW1nfSBvYmplY3QtY29udGFpbiBmbG9hdC1sZWZ0IHctMjAgbXItNCBtdC0yIHJvdW5kZWQtbGdgfSBzcmM9Jy9hc3NldHMvc3RhdGljL2lhbS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9J2JveC10ZXh0JyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hUZXh0fSB0ZXh0LWxnIHRleHQtd2hpdGVgfT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtcmVkLTgwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIGgtMTYgJHtzdHlsZXMucmVkQm94fWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlByb3llY3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+R2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+TGVua2VkaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==