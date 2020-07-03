webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"])({
    config: react_spring__WEBPACK_IMPORTED_MODULE_3__["config"].molasses,
    to: function () {
      var _to = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(next) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next({
                  rotate: '180deg'
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function to(_x) {
        return _to.apply(this, arguments);
      }

      return to;
    }(),
    from: {
      rotate: '0deg',
      translateYTop: '0%',
      translateYBottom: '0%'
    },
    onRest: function onRest() {//document.querySelector('.GrandDoor').classList.replace('flex', 'hidden');
    }
  }),
      rotate = _useSpring.rotate,
      translateYTop = _useSpring.translateYTop,
      translateYBottom = _useSpring.translateYBottom;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_5___default.a('#box-text', {
      strings: ['loading data...', txt],
      typeSpeed: 10
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "GrandDoor absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "top-0 left-0 absolute w-screen h-screen bg-red-700 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doorTop, " ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doors),
    style: {
      transform: translateYBottom.interpolate(function (translateYBottom) {
        return "translateY(".concat(translateYBottom, ")");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "absolute w-screen h-screen flex justify-center items-center z-20",
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([rotate, translateYTop], function (rotate, translateYTop) {
        return "rotate(".concat(rotate, ") translateY(").concat(translateYTop, ")");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-20 h-20 bg-orange-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circle, " ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circles),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "absolute w-screen h-screen flex justify-center items-center z-20",
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["interpolate"])([rotate, translateYBottom], function (rotate, translateYBottom) {
        return "rotate(".concat(rotate, ") translateY(").concat(translateYBottom, ")");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-20 h-20 bg-blue-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circleReverse, " ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circles),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doorBottom, " ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doors),
    style: {
      transform: translateYTop.interpolate(function (translateYTop) {
        return "translateY(".concat(translateYTop, ")");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Lenkedin"))));
}, "6p903JMdaa/i5rt8wiD5auHbv5I=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_3__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwiY29uZmlnIiwibW9sYXNzZXMiLCJ0byIsIm5leHQiLCJyb3RhdGUiLCJmcm9tIiwidHJhbnNsYXRlWVRvcCIsInRyYW5zbGF0ZVlCb3R0b20iLCJvblJlc3QiLCJ1c2VFZmZlY3QiLCJ0eHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsInN0eWxlcyIsImRvb3JUb3AiLCJkb29ycyIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwiY2lyY2xlIiwiY2lyY2xlcyIsImNpcmNsZVJldmVyc2UiLCJkb29yQm90dG9tIiwiYmdFYXJ0aCIsInJlZEJveCIsInRvcEJveCIsImJnT3BhY2l0eTkwIiwiYm94SW1nIiwiYm94VGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSw4RUFBTTtBQUFBOztBQUFBLG1CQUNpQ0EsOERBQVMsQ0FBQztBQUM1REMsVUFBTSxFQUFFQSxtREFBTSxDQUFDQyxRQUQ2QztBQUU1REMsTUFBRTtBQUFBLGlNQUFFLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNJQSxJQUFJLENBQUM7QUFBRUMsd0JBQU0sRUFBRTtBQUFWLGlCQUFELENBRFI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxPQUYwRDtBQU01REMsUUFBSSxFQUFFO0FBQUVELFlBQU0sRUFBRSxNQUFWO0FBQWtCRSxtQkFBYSxFQUFFLElBQWpDO0FBQXVDQyxzQkFBZ0IsRUFBRTtBQUF6RCxLQU5zRDtBQU81REMsVUFBTSxFQUFFLGtCQUFNLENBQ1o7QUFDRDtBQVQyRCxHQUFELENBRDFDO0FBQUEsTUFDWEosTUFEVyxjQUNYQSxNQURXO0FBQUEsTUFD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YWdlc1xcaW5kZXguanMuZTQ0Y2ZjNjhmYzg3NzMyZDM2MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgeyBlYXNlQ3ViaWMgfSBmcm9tICdkMy1lYXNlJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB7IHJvdGF0ZSwgdHJhbnNsYXRlWVRvcCwgdHJhbnNsYXRlWUJvdHRvbSB9ID0gdXNlU3ByaW5nKHtcclxuICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxyXG4gICAgdG86IGFzeW5jIChuZXh0KSA9PiB7XHJcbiAgICAgIGF3YWl0IG5leHQoeyByb3RhdGU6ICcxODBkZWcnIH0pXHJcbiAgICAgIC8vYXdhaXQgbmV4dCh7IHRyYW5zbGF0ZVlUb3A6ICcxMDAlJywgdHJhbnNsYXRlWUJvdHRvbTogJy0xMDAlJyB9KVxyXG4gICAgfSxcclxuICAgIGZyb206IHsgcm90YXRlOiAnMGRlZycsIHRyYW5zbGF0ZVlUb3A6ICcwJScsIHRyYW5zbGF0ZVlCb3R0b206ICcwJScgfSxcclxuICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5HcmFuZERvb3InKS5jbGFzc0xpc3QucmVwbGFjZSgnZmxleCcsICdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoJyNib3gtdGV4dCcsIHtcclxuICAgICAgc3RyaW5nczogWydsb2FkaW5nIGRhdGEuLi4nLCB0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J0dyYW5kRG9vciBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW4gei0xMCBvdmVyZmxvdy1oaWRkZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgdG9wLTAgbGVmdC0wIGFic29sdXRlIHctc2NyZWVuIGgtc2NyZWVuIGJnLXJlZC03MDAgJHtzdHlsZXMuZG9vclRvcH0gJHtzdHlsZXMuZG9vcnN9YH0gc3R5bGU9e3t0cmFuc2Zvcm06IHRyYW5zbGF0ZVlCb3R0b20uaW50ZXJwb2xhdGUoKHRyYW5zbGF0ZVlCb3R0b20pID0+IGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWUJvdHRvbX0pYCl9fSAvPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0yMGB9IHN0eWxlPXt7IHRyYW5zZm9ybTogaW50ZXJwb2xhdGUoW3JvdGF0ZSwgdHJhbnNsYXRlWVRvcF0sIChyb3RhdGUsIHRyYW5zbGF0ZVlUb3ApID0+IGByb3RhdGUoJHtyb3RhdGV9KSB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWVRvcH0pYCkgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMjAgaC0yMCBiZy1vcmFuZ2UtNzAwIHJvdW5kZWQtZnVsbCAke3N0eWxlcy5jaXJjbGV9ICR7c3R5bGVzLmNpcmNsZXN9YH0gLz5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHctc2NyZWVuIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMjBgfSBzdHlsZT17eyB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3RhdGUsIHRyYW5zbGF0ZVlCb3R0b21dLCAocm90YXRlLCB0cmFuc2xhdGVZQm90dG9tKSA9PiBgcm90YXRlKCR7cm90YXRlfSkgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVlCb3R0b219KWApIH19ID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0yMCBoLTIwIGJnLWJsdWUtNzAwIHJvdW5kZWQtZnVsbCAke3N0eWxlcy5jaXJjbGVSZXZlcnNlfSAke3N0eWxlcy5jaXJjbGVzfWB9IC8+XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtNzAwIHctMjAgaC0yMCB6LTIwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy13aGl0ZSBib3R0b20tMCB3LXNjcmVlbiBoLXNjcmVlbiAke3N0eWxlcy5kb29yQm90dG9tfSAke3N0eWxlcy5kb29yc31gfSBzdHlsZT17e3RyYW5zZm9ybTogdHJhbnNsYXRlWVRvcC5pbnRlcnBvbGF0ZSgodHJhbnNsYXRlWVRvcCkgPT4gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZVG9wfSlgKX19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnRWFydGh9IGJnLW5vLXJlcGVhdCBiZy1maXhlZCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2sgJHtzdHlsZXMucmVkQm94fSBoLThgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke3N0eWxlcy50b3BCb3h9IGJnLWJsYWNrIHRleHQtd2hpdGUgdy0yNGB9PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPmhlbGxvV29ybGQuY29tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVkQm94fSByZWxhdGl2ZSBiZy1ibGFjayAke3N0eWxlcy5iZ09wYWNpdHk5MH0gcm91bmRlZC1sZyBwLTYgbWF4LXctbGcgbXgtNmB9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hJbWd9IG9iamVjdC1jb250YWluIGZsb2F0LWxlZnQgdy0yMCBtci00IG10LTIgcm91bmRlZC1sZ2B9IHNyYz0nL2Fzc2V0cy9zdGF0aWMvaWFtLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBpZD0nYm94LXRleHQnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveFRleHR9IHRleHQtbGcgdGV4dC13aGl0ZWB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtcmVkLTgwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIGgtMTYgJHtzdHlsZXMucmVkQm94fWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlByb3llY3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+R2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+TGVua2VkaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==