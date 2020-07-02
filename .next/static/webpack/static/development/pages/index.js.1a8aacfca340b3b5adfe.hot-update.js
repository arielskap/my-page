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
    delay: 2000,
    config: {
      duration: 3000,
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
    delay: 2000,
    config: {
      duration: 3000,
      easing: d3_ease__WEBPACK_IMPORTED_MODULE_2__["easeCubic"]
    },
    to: {
      transform: 'translateY(100%)'
    },
    from: {
      transform: 'translateY(0%)'
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
    className: "overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "absolute bg-red-700 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Lenkedin"))));
}, "COb0TI2D88yvk5IPfH2wUIpTBxA=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidHJhbnNsYXRlWVRvcCIsInVzZVNwcmluZyIsImRlbGF5IiwiY29uZmlnIiwiZHVyYXRpb24iLCJlYXNpbmciLCJlYXNlQ3ViaWMiLCJ0byIsInRyYW5zZm9ybSIsImZyb20iLCJ0cmFuc2xhdGVZQm90dG9tIiwidXNlRWZmZWN0IiwidHh0IiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzdHlsZXMiLCJkb29yVG9wIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsOEVBQU07QUFBQTs7QUFDbkIsTUFBTUEsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQzlCQyxTQUFLLEVBQUUsSUFEdUI7QUFFOUJDLFVBQU0sRUFBRTtBQUFDQyxjQUFRLEVBQUUsSUFBWDtBQUFpQkMsWUFBTSxFQUFFQyxpREFBU0E7QUFBbEMsS0FGc0I7QUFHOUJDLE1BQUUsRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUgwQjtBQUk5QkMsUUFBSSxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiO0FBSndCLEdBQUQsQ0FBL0I7QUFNQSxNQUFNRSxnQkFBZ0IsR0FBR1QsOERBQVMsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLElBRDBCO0FBRWpDQyxVQUFNLEVBQUU7QUFBQ0MsY0FBUSxFQUFFLElBQVg7QUFBaUJDLFlBQU0sRUFBRUMsaURBQVNBO0FBQWxDLEtBRnlCO0FBR2pDQyxNQUFFLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FINkI7QUFJakNDLFFBQUksRUFBRTtBQUFFRCxlQUFTLEVBQUU7QUFBYjtBQUoyQixHQUFELENBQWxDO0FBTUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBRyx1Y0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQywrQ0FBSixDQUFVLFdBQVYsRUFBdUI7QUFDakNDLGFBQU8sRUFBRSxDQUFDLGlCQUFELEVBQW1CSCxHQUFuQixDQUR3QjtBQUVqQ0ksZUFBUyxFQUFFO0FBRnNCLEtBQXZCLENBQVo7QUFJRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxhQUFTLGtEQUEyQ0MsNkVBQU0sQ0FBQ0MsT0FBbEQsQ0FBdkI7QUFBb0YsU0FBSyxFQUFFbEIsYUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBRUEsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxhQUFTLHlEQUFrRGlCLDZFQUFNLENBQUNFLFVBQXpELENBQXZCO0FBQThGLFNBQUssRUFBRVQsZ0JBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQURGLEVBS0U7QUFBSyxhQUFTLFlBQUtPLDZFQUFNLENBQUNHLE9BQVoseUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUywrQ0FBd0NILDZFQUFNLENBQUNJLE1BQS9DLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMscUJBQWNKLDZFQUFNLENBQUNLLE1BQXJCLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQURGLENBREYsRUFRRTtBQUFLLGFBQVMsWUFBS0wsNkVBQU0sQ0FBQ0ksTUFBWixnQ0FBd0NKLDZFQUFNLENBQUNNLFdBQS9DLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsWUFBS04sNkVBQU0sQ0FBQ08sTUFBWix5REFBZDtBQUF3RixPQUFHLEVBQUMsd0JBQTVGO0FBQXFILE9BQUcsRUFBQyxFQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsVUFBVDtBQUFvQixhQUFTLFlBQUtQLDZFQUFNLENBQUNRLE9BQVosd0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsMkdBQW9HUiw2RUFBTSxDQUFDSSxNQUEzRyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixDQWRGLENBTEYsQ0FERjtBQTRCRCxDQWhERDtBQUFBLFVBQ3dCcEIsc0RBRHhCLEVBTzJCQSxzREFQM0I7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWE4YWFjZmNhMzQwYjNiNWFkZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQge2Vhc2VDdWJpYyB9IGZyb20gJ2QzLWVhc2UnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB0cmFuc2xhdGVZVG9wID0gdXNlU3ByaW5nKHtcclxuICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDMwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknfSxcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0sXHJcbiAgfSlcclxuICBjb25zdCB0cmFuc2xhdGVZQm90dG9tID0gdXNlU3ByaW5nKHtcclxuICAgIGRlbGF5OiAyMDAwLFxyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDMwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSd9LFxyXG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJyx0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J292ZXJmbG93LWhpZGRlbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTEwJz5cclxuICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1yZWQtNzAwIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JUb3B9YH0gc3R5bGU9e3RyYW5zbGF0ZVlUb3B9IC8+XHJcbiAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17dHJhbnNsYXRlWUJvdHRvbX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iZ0VhcnRofSBiZy1uby1yZXBlYXQgYmctZml4ZWQgbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGJnLWJsYWNrICR7c3R5bGVzLnJlZEJveH0gaC04YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtzdHlsZXMudG9wQm94fSBiZy1ibGFjayB0ZXh0LXdoaXRlIHctMjRgfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5oZWxsb1dvcmxkLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZEJveH0gcmVsYXRpdmUgYmctYmxhY2sgJHtzdHlsZXMuYmdPcGFjaXR5OTB9IHJvdW5kZWQtbGcgcC02IG1heC13LWxnIG14LTZgfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94SW1nfSBvYmplY3QtY29udGFpbiBmbG9hdC1sZWZ0IHctMjAgbXItNCBtdC0yIHJvdW5kZWQtbGdgfSBzcmM9Jy9hc3NldHMvc3RhdGljL2lhbS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9J2JveC10ZXh0JyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hUZXh0fSB0ZXh0LWxnIHRleHQtd2hpdGVgfT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtcmVkLTgwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIGgtMTYgJHtzdHlsZXMucmVkQm94fWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlByb3llY3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+R2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+TGVua2VkaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==