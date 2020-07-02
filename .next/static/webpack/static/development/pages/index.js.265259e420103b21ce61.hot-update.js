webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var translateYTop = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    immediate: false,
    delay: 1000,
    config: {
      duration: 2000,
      easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubic"]
    },
    to: {
      transform: 'translateY(-100%)'
    },
    from: {
      transform: 'translateY(0%)'
    }
  });
  var translateYBottom = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    immediate: false,
    delay: 1000,
    config: {
      duration: 2000,
      easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubic"]
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
  var rotate = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: {
      duration: 2000
    },
    to: {
      transform: 'rotate(360deg)'
    },
    from: {
      transform: 'rotate(0deg)'
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('#box-text', {
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
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "absolute bg-red-700 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "w-20 h-20 bg-blue-700 rounded-full z-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox, " h-8"),
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
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.topBox, " bg-black text-white w-24"),
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
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
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
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox),
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
}, "7+/xOGNTIsD5Pg2dfJ4nIr1yI9Y=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidHJhbnNsYXRlWVRvcCIsInVzZVNwcmluZyIsImltbWVkaWF0ZSIsImRlbGF5IiwiY29uZmlnIiwiZHVyYXRpb24iLCJlYXNpbmciLCJlYXNlQ3ViaWMiLCJ0byIsInRyYW5zZm9ybSIsImZyb20iLCJ0cmFuc2xhdGVZQm90dG9tIiwib25SZXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsInJvdGF0ZSIsInVzZUVmZmVjdCIsInR4dCIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwic3R5bGVzIiwiZG9vclRvcCIsImRvb3JCb3R0b20iLCJiZ0VhcnRoIiwicmVkQm94IiwidG9wQm94IiwiYmdPcGFjaXR5OTAiLCJib3hJbWciLCJib3hUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLDhFQUFNO0FBQUE7O0FBQ25CLE1BQU1BLGFBQWEsR0FBR0MsOERBQVMsQ0FBQztBQUM5QkMsYUFBUyxFQUFFLEtBRG1CO0FBRTlCQyxTQUFLLEVBQUUsSUFGdUI7QUFHOUJDLFVBQU0sRUFBRTtBQUFDQyxjQUFRLEVBQUUsSUFBWDtBQUFpQkMsWUFBTSxFQUFFQyxpREFBU0E7QUFBbEMsS0FIc0I7QUFJOUJDLE1BQUUsRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUowQjtBQUs5QkMsUUFBSSxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiO0FBTHdCLEdBQUQsQ0FBL0I7QUFPQSxNQUFNRSxnQkFBZ0IsR0FBR1YsOERBQVMsQ0FBQztBQUNqQ0MsYUFBUyxFQUFFLEtBRHNCO0FBRWpDQyxTQUFLLEVBQUUsSUFGMEI7QUFHakNDLFVBQU0sRUFBRTtBQUFDQyxjQUFRLEVBQUUsSUFBWDtBQUFpQkMsWUFBTSxFQUFFQyxpREFBU0E7QUFBbEMsS0FI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SUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsMkdBQW9HUiw2RUFBTSxDQUFDSSxNQUEzRyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixDQWRGLENBTkYsQ0FERjtBQTZCRCxDQTNERDtBQUFBLFVBQ3dCM0Isc0RBRHhCLEVBUTJCQSxzREFSM0IsRUFrQmlCQSxzREFsQmpCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI2NTI1OWU0MjAxMDNiMjFjZTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHtlYXNlQ3ViaWMgfSBmcm9tICdkMy1lYXNlJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNsYXRlWVRvcCA9IHVzZVNwcmluZyh7XHJcbiAgICBpbW1lZGlhdGU6IGZhbHNlLFxyXG4gICAgZGVsYXk6IDEwMDAsXHJcbiAgICBjb25maWc6IHtkdXJhdGlvbjogMjAwMCwgZWFzaW5nOiBlYXNlQ3ViaWN9LFxyXG4gICAgdG86IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSd9LFxyXG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcclxuICB9KVxyXG4gIGNvbnN0IHRyYW5zbGF0ZVlCb3R0b20gPSB1c2VTcHJpbmcoe1xyXG4gICAgaW1tZWRpYXRlOiBmYWxzZSxcclxuICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDIwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSd9LFxyXG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcclxuICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3Qgcm90YXRlID0gdXNlU3ByaW5nKHtcclxuICAgIGNvbmZpZzoge2R1cmF0aW9uOiAyMDAwfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknfSxcclxuICAgIGZyb206IHt0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIHJlcHVkaWFuZGFlIHF1YXMgYXRxdWUsIGN1bHBhIHRlbmV0dXIgbWFnbmkgcmVwZWxsZW5kdXMgZXVtIGlsbG8gcmVydW0gYXV0ZW0sIG1heGltZSByZWljaWVuZGlzIHZpdGFlIGFyY2hpdGVjdG8gYWxpcXVpZCBsYXVkYW50aXVtIHZvbHVwdGFzIHBlcmZlcmVuZGlzIGV2ZW5pZXQgcXVhbSFEZWxlY3R1cyBzaW1pbGlxdWUgbmVtbyBiZWF0YWUgaXVzdG8gZG9sb3JlcyBmYWNpbGlzIHBvc3NpbXVzIHN1c2NpcGl0IG5lc2NpdW50IG5hdHVzIGRvbG9ydW0gb3B0aW8gcmF0aW9uZSB2ZXJpdGF0aXMsIHNvbHV0YSBpc3RlIG9mZmljaWlzIGZ1Z2l0LCB0ZW1wb3JlIGRvbG9yZW0gb2RpbyBpbj8gSXBzYW0gZXN0IHByb3ZpZGVudCBudW1xdWFtIHF1YWUsIGVuaW0gY3VwaWRpdGF0ZS4nXHJcbiAgICBsZXQgdHlwZWQgPSBuZXcgVHlwZWQoJyNib3gtdGV4dCcsIHtcclxuICAgICAgc3RyaW5nczogWydsb2FkaW5nIGRhdGEuLi4nLHR4dF0sXHJcbiAgICAgIHR5cGVTcGVlZDogMTBcclxuICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9vciBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW4gei0xMCBvdmVyZmxvdy1oaWRkZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctcmVkLTcwMCB3LXNjcmVlbiBoLXNjcmVlbiAke3N0eWxlcy5kb29yVG9wfWB9IHN0eWxlPXt0cmFuc2xhdGVZVG9wfSAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTIwIGgtMjAgYmctYmx1ZS03MDAgcm91bmRlZC1mdWxsIHotMjAnIC8+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy13aGl0ZSBib3R0b20tMCB3LXNjcmVlbiBoLXNjcmVlbiAke3N0eWxlcy5kb29yQm90dG9tfWB9IHN0eWxlPXt0cmFuc2xhdGVZQm90dG9tfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnRWFydGh9IGJnLW5vLXJlcGVhdCBiZy1maXhlZCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2sgJHtzdHlsZXMucmVkQm94fSBoLThgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke3N0eWxlcy50b3BCb3h9IGJnLWJsYWNrIHRleHQtd2hpdGUgdy0yNGB9PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPmhlbGxvV29ybGQuY29tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVkQm94fSByZWxhdGl2ZSBiZy1ibGFjayAke3N0eWxlcy5iZ09wYWNpdHk5MH0gcm91bmRlZC1sZyBwLTYgbWF4LXctbGcgbXgtNmB9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hJbWd9IG9iamVjdC1jb250YWluIGZsb2F0LWxlZnQgdy0yMCBtci00IG10LTIgcm91bmRlZC1sZ2B9IHNyYz0nL2Fzc2V0cy9zdGF0aWMvaWFtLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBpZD0nYm94LXRleHQnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveFRleHR9IHRleHQtbGcgdGV4dC13aGl0ZWB9Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTAgbGVmdC0wIHctZnVsbCBncmlkIGdyaWQtY29scy0zIGRpdmlkZS14IGRpdmlkZS1yZWQtODAwIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiAke3N0eWxlcy5yZWRCb3h9YH0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+UHJveWVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5HaXRodWI8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5MZW5rZWRpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9