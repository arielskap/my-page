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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(function () {
    return {
      transform: 'translateY(0%)'
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSpring, 2),
      translateYTop = _useSpring2[0],
      setTranslateYTop = _useSpring2[1];

  var _useSpring3 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(function () {
    return {
      transform: 'translateY(0%)'
    };
  }),
      _useSpring4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSpring3, 2),
      translateYBottom = _useSpring4[0],
      setTranslateYBottom = _useSpring4[1];

  var _useSpring5 = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"])(function () {
    var count = 0;
    return {
      config: react_spring__WEBPACK_IMPORTED_MODULE_4__["config"].molasses,
      to: function () {
        var _to = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(next, cancel) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return next({
                    rotate: 180
                  });

                case 2:
                  _context.next = 4;
                  return next({
                    translateY: 100
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function to(_x, _x2) {
          return _to.apply(this, arguments);
        }

        return to;
      }(),
      from: {
        rotate: 0,
        translateY: 0
      },
      onStart: function onStart() {
        console.log(count);
        count++;
      },
      onRest: function onRest() {//document.querySelector('.door').classList.replace('flex', 'hidden');

        /*setTranslateYTop({
          delay: 1000,
          config: { easing: easeCubic, mass: 1, tension: 280, friction: 250 },
          to: { transform: 'translateY(-100%)' },
        })
        setTranslateYBottom({
          delay: 1000,
          config: { easing: easeCubic, mass: 1, tension: 280, friction: 250 },
          to: { transform: 'translateY(100%)' },
          onRest: () => {
            document.querySelector('.door').classList.replace('flex', 'hidden');
          }
        })*/
      }
    };
  }),
      _useSpring6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSpring5, 3),
      _useSpring6$ = _useSpring6[0],
      rotate = _useSpring6$.rotate,
      translateY = _useSpring6$.translateY,
      update = _useSpring6[1],
      stop = _useSpring6[2];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_6___default.a('#box-text', {
      strings: ['loading data...', txt],
      typeSpeed: 10
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "door absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "top-0 left-0 absolute flex justify-center items-center w-screen h-screen bg-red-700 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute z-20 w-20 h-20 bg-orange-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.circle),
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([rotate, translateY], function (rotate, translateY) {
        return "rotate(".concat(rotate, "deg) translateY(").concat(translateY, "%)");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute z-20 w-20 h-20 bg-blue-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.circleReverse),
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([rotate, translateY], function (rotate, translateY) {
        return "rotate(".concat(rotate, "deg) translateY(").concat(translateY, "%)");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute bg-white flex justify-center items-center bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "Lenkedin"))));
}, "TYv/qKx/72Y7QtU996UI+kH/G74=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_4__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWVRvcCIsInNldFRyYW5zbGF0ZVlUb3AiLCJ0cmFuc2xhdGVZQm90dG9tIiwic2V0VHJhbnNsYXRlWUJvdHRvbSIsImNvdW50IiwiY29uZmlnIiwibW9sYXNzZXMiLCJ0byIsIm5leHQiLCJjYW5jZWwiLCJyb3RhdGUiLCJ0cmFuc2xhdGVZIiwiZnJvbSIsIm9uU3RhcnQiLCJjb25zb2xlIiwibG9nIiwib25SZXN0IiwidXBkYXRlIiwic3RvcCIsInVzZUVmZmVjdCIsInR4dCIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwic3R5bGVzIiwiZG9vclRvcCIsImNpcmNsZSIsImludGVycG9sYXRlIiwiY2lyY2xlUmV2ZXJzZSIsImRvb3JCb3R0b20iLCJiZ0VhcnRoIiwicmVkQm94IiwidG9wQm94IiwiYmdPcGFjaXR5OTAiLCJib3hJbWciLCJib3hUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsOEVBQU07QUFBQTs7QUFBQSxtQkFDdUJBLDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVA7QUFBQSxHQUFELENBRGhDO0FBQUE7QUFBQSxNQUNaQyxhQURZO0FBQUEsTUFDR0MsZ0JBREg7O0FBQUEsb0JBRTZCSCw4REFBUyxDQUFDO0FBQUEsV0FBTztBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFQO0FBQUEsR0FBRCxDQUZ0QztBQUFBO0FBQUEsTUFFWkcsZ0JBRlk7QUFBQSxNQUVNQyxtQkFGTjs7QUFBQSxvQkFJMkJMLDhEQUFTLENBQUMsWUFBTTtBQUM1RCxRQUFJTSxLQUFLLEdBQUcsQ0FBWjtBQUNBLFdBQVE7QUFDUkMsWUFBTSxFQUFFQSxtREFBTSxDQUFDQyxRQURQ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QUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsQ0FkRixDQVRGLENBREY7QUFnQ0QsQ0ExRUQ7QUFBQSxVQUM0Q2xDLHNEQUQ1QyxFQUVrREEsc0RBRmxELEVBSWdEQSxzREFKaEQ7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuN2Q1ZDE5M2EzZWVhM2JmZmMyZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcsIGludGVycG9sYXRlIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQgeyBlYXNlQ3ViaWMgfSBmcm9tICdkMy1lYXNlJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbdHJhbnNsYXRlWVRvcCwgc2V0VHJhbnNsYXRlWVRvcF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0pKVxyXG4gIGNvbnN0IFt0cmFuc2xhdGVZQm90dG9tLCBzZXRUcmFuc2xhdGVZQm90dG9tXSA9IHVzZVNwcmluZygoKSA9PiAoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSkpXHJcblxyXG4gIGNvbnN0IFt7IHJvdGF0ZSwgdHJhbnNsYXRlWSB9LHVwZGF0ZSwgc3RvcF0gPSB1c2VTcHJpbmcoKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIHJldHVybiAoe1xyXG4gICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXHJcbiAgICB0bzogYXN5bmMgKG5leHQsIGNhbmNlbCkgPT4ge1xyXG4gICAgICBhd2FpdCBuZXh0KHsgcm90YXRlOiAxODAgfSlcclxuICAgICAgYXdhaXQgbmV4dCh7IHRyYW5zbGF0ZVk6IDEwMCB9KVxyXG4gICAgfSxcclxuICAgIGZyb206IHsgcm90YXRlOiAwLCB0cmFuc2xhdGVZOiAwIH0sXHJcbiAgICBvblN0YXJ0OiAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxyXG4gICAgICBjb3VudCsrXHJcbiAgICB9LFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvb3InKS5jbGFzc0xpc3QucmVwbGFjZSgnZmxleCcsICdoaWRkZW4nKTtcclxuICAgICAgLypzZXRUcmFuc2xhdGVZVG9wKHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBjb25maWc6IHsgZWFzaW5nOiBlYXNlQ3ViaWMsIG1hc3M6IDEsIHRlbnNpb246IDI4MCwgZnJpY3Rpb246IDI1MCB9LFxyXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9LFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRUcmFuc2xhdGVZQm90dG9tKHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBjb25maWc6IHsgZWFzaW5nOiBlYXNlQ3ViaWMsIG1hc3M6IDEsIHRlbnNpb246IDI4MCwgZnJpY3Rpb246IDI1MCB9LFxyXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH0sXHJcbiAgICAgICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkqL1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgcmVwdWRpYW5kYWUgcXVhcyBhdHF1ZSwgY3VscGEgdGVuZXR1ciBtYWduaSByZXBlbGxlbmR1cyBldW0gaWxsbyByZXJ1bSBhdXRlbSwgbWF4aW1lIHJlaWNpZW5kaXMgdml0YWUgYXJjaGl0ZWN0byBhbGlxdWlkIGxhdWRhbnRpdW0gdm9sdXB0YXMgcGVyZmVyZW5kaXMgZXZlbmlldCBxdWFtIURlbGVjdHVzIHNpbWlsaXF1ZSBuZW1vIGJlYXRhZSBpdXN0byBkb2xvcmVzIGZhY2lsaXMgcG9zc2ltdXMgc3VzY2lwaXQgbmVzY2l1bnQgbmF0dXMgZG9sb3J1bSBvcHRpbyByYXRpb25lIHZlcml0YXRpcywgc29sdXRhIGlzdGUgb2ZmaWNpaXMgZnVnaXQsIHRlbXBvcmUgZG9sb3JlbSBvZGlvIGluPyBJcHNhbSBlc3QgcHJvdmlkZW50IG51bXF1YW0gcXVhZSwgZW5pbSBjdXBpZGl0YXRlLidcclxuICAgIGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJywgdHh0XSxcclxuICAgICAgdHlwZVNwZWVkOiAxMFxyXG4gICAgfSk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb29yIGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2B0b3AtMCBsZWZ0LTAgYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gYmctcmVkLTcwMCAke3N0eWxlcy5kb29yVG9wfWB9IHN0eWxlPXt0cmFuc2xhdGVZVG9wfSAvPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgei0yMCB3LTIwIGgtMjAgYmctb3JhbmdlLTcwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMuY2lyY2xlfWB9IHN0eWxlPXt7IHRyYW5zZm9ybTogaW50ZXJwb2xhdGUoW3JvdGF0ZSwgdHJhbnNsYXRlWV0sIChyb3RhdGUsIHRyYW5zbGF0ZVkpID0+IGByb3RhdGUoJHtyb3RhdGV9ZGVnKSB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWX0lKWApIH19IC8+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LTIwIHctMjAgaC0yMCBiZy1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMuY2lyY2xlUmV2ZXJzZX1gfSBzdHlsZT17eyB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3RhdGUsIHRyYW5zbGF0ZVldLCAocm90YXRlLCB0cmFuc2xhdGVZKSA9PiBgcm90YXRlKCR7cm90YXRlfWRlZykgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9JSlgKSB9fSAvPlxyXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTcwMCB3LTIwIGgtMjAgei0yMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17dHJhbnNsYXRlWUJvdHRvbX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdFYXJ0aH0gYmctbm8tcmVwZWF0IGJnLWZpeGVkIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBiZy1ibGFjayAke3N0eWxlcy5yZWRCb3h9IGgtOGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlICR7c3R5bGVzLnRvcEJveH0gYmctYmxhY2sgdGV4dC13aGl0ZSB3LTI0YH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+aGVsbG9Xb3JsZC5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWRCb3h9IHJlbGF0aXZlIGJnLWJsYWNrICR7c3R5bGVzLmJnT3BhY2l0eTkwfSByb3VuZGVkLWxnIHAtNiBtYXgtdy1sZyBteC02YH0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveEltZ30gb2JqZWN0LWNvbnRhaW4gZmxvYXQtbGVmdCB3LTIwIG1yLTQgbXQtMiByb3VuZGVkLWxnYH0gc3JjPScvYXNzZXRzL3N0YXRpYy9pYW0uanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPSdib3gtdGV4dCcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94VGV4dH0gdGV4dC1sZyB0ZXh0LXdoaXRlYH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTAgbGVmdC0wIHctZnVsbCBncmlkIGdyaWQtY29scy0zIGRpdmlkZS14IGRpdmlkZS1yZWQtODAwIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiAke3N0eWxlcy5yZWRCb3h9YH0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+UHJveWVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5HaXRodWI8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5MZW5rZWRpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9