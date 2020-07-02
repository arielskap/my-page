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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10 overflow-hidden absolute",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidHJhbnNsYXRlWVRvcCIsInVzZVNwcmluZyIsImRlbGF5IiwiY29uZmlnIiwiZHVyYXRpb24iLCJlYXNpbmciLCJlYXNlQ3ViaWMiLCJ0byIsInRyYW5zZm9ybSIsImZyb20iLCJ0cmFuc2xhdGVZQm90dG9tIiwidXNlRWZmZWN0IiwidHh0IiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzdHlsZXMiLCJkb29yVG9wIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsOEVBQU07QUFBQTs7QUFDbkIsTUFBTUEsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQzlCQyxTQUFLLEVBQUUsSUFEdUI7QUFFOUJDLFVBQU0sRUFBRTtBQUFDQyxjQUFRLEVBQUUsSUFBWDtBQUFpQkMsWUFBTSxFQUFFQyxpREFBU0E7QUFBbEMsS0FGc0I7QUFHOUJDLE1BQUUsRUFBRTtBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUgwQjtBQUk5QkMsUUFBSSxFQUFFO0FBQUVELGVBQVMsRUFBRTtBQUFiO0FBSndCLEdBQUQsQ0FBL0I7QUFNQSxNQUFNRSxnQkFBZ0IsR0FBR1QsOERBQVMsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLElBRDBCO0FBRWpDQyxVQUFNLEVBQUU7QUFBQ0MsY0FBUSxFQUFFLElBQVg7QUFBaUJDLFlBQU0sRUFBRUMsaURBQVNBO0FBQWxDLEtBRnlCO0FBR2pDQyxNQUFFLEVBQUU7QUFBQ0MsZUFBUyxFQUFFO0FBQVosS0FINkI7QUFJakNDLFFBQUksRUFBRTtBQUFFRCxlQUFTLEVBQUU7QUFBYjtBQUoyQixHQUFELENBQWxDO0FBTUFHLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBRyx1Y0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQywrQ0FBSixDQUFVLFdBQVYsRUFBdUI7QUFDakNDLGFBQU8sRUFBRSxDQUFDLGlCQUFELEVBQW1CSCxHQUFuQixDQUR3QjtBQUVqQ0ksZUFBUyxFQUFFO0FBRnNCLEtBQXZCLENBQVo7QUFJRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyxrREFBMkNDLDZFQUFNLENBQUNDLE9BQWxELENBQXZCO0FBQW9GLFNBQUssRUFBRWxCLGFBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyx5REFBa0RpQiw2RUFBTSxDQUFDRSxVQUF6RCxDQUF2QjtBQUE4RixTQUFLLEVBQUVULGdCQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FERixFQUtFO0FBQUssYUFBUyxZQUFLTyw2RUFBTSxDQUFDRyxPQUFaLHlFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsK0NBQXdDSCw2RUFBTSxDQUFDSSxNQUEvQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLHFCQUFjSiw2RUFBTSxDQUFDSyxNQUFyQiw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FERixDQURGLEVBUUU7QUFBSyxhQUFTLFlBQUtMLDZFQUFNLENBQUNJLE1BQVosZ0NBQXdDSiw2RUFBTSxDQUFDTSxXQUEvQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtOLDZFQUFNLENBQUNPLE1BQVoseURBQWQ7QUFBd0YsT0FBRyxFQUFDLHdCQUE1RjtBQUFxSCxPQUFHLEVBQUMsRUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsYUFBUyxZQUFLUCw2RUFBTSxDQUFDUSxPQUFaLHdCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQVJGLEVBY0U7QUFBSyxhQUFTLDJHQUFvR1IsNkVBQU0sQ0FBQ0ksTUFBM0csQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsQ0FkRixDQUxGLENBREY7QUE0QkQsQ0FoREQ7QUFBQSxVQUN3QnBCLHNEQUR4QixFQU8yQkEsc0RBUDNCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc3Y2FiODA2Zjg4NzVhN2RlNzZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHtlYXNlQ3ViaWMgfSBmcm9tICdkMy1lYXNlJ1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcHVibGljL2Fzc2V0cy9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgdHJhbnNsYXRlWVRvcCA9IHVzZVNwcmluZyh7XHJcbiAgICBkZWxheTogMjAwMCxcclxuICAgIGNvbmZpZzoge2R1cmF0aW9uOiAzMDAwLCBlYXNpbmc6IGVhc2VDdWJpY30sXHJcbiAgICB0bzoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJ30sXHJcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyB9LFxyXG4gIH0pXHJcbiAgY29uc3QgdHJhbnNsYXRlWUJvdHRvbSA9IHVzZVNwcmluZyh7XHJcbiAgICBkZWxheTogMjAwMCxcclxuICAgIGNvbmZpZzoge2R1cmF0aW9uOiAzMDAwLCBlYXNpbmc6IGVhc2VDdWJpY30sXHJcbiAgICB0bzoge3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknfSxcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0sXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgcmVwdWRpYW5kYWUgcXVhcyBhdHF1ZSwgY3VscGEgdGVuZXR1ciBtYWduaSByZXBlbGxlbmR1cyBldW0gaWxsbyByZXJ1bSBhdXRlbSwgbWF4aW1lIHJlaWNpZW5kaXMgdml0YWUgYXJjaGl0ZWN0byBhbGlxdWlkIGxhdWRhbnRpdW0gdm9sdXB0YXMgcGVyZmVyZW5kaXMgZXZlbmlldCBxdWFtIURlbGVjdHVzIHNpbWlsaXF1ZSBuZW1vIGJlYXRhZSBpdXN0byBkb2xvcmVzIGZhY2lsaXMgcG9zc2ltdXMgc3VzY2lwaXQgbmVzY2l1bnQgbmF0dXMgZG9sb3J1bSBvcHRpbyByYXRpb25lIHZlcml0YXRpcywgc29sdXRhIGlzdGUgb2ZmaWNpaXMgZnVnaXQsIHRlbXBvcmUgZG9sb3JlbSBvZGlvIGluPyBJcHNhbSBlc3QgcHJvdmlkZW50IG51bXF1YW0gcXVhZSwgZW5pbSBjdXBpZGl0YXRlLidcclxuICAgIGxldCB0eXBlZCA9IG5ldyBUeXBlZCgnI2JveC10ZXh0Jywge1xyXG4gICAgICBzdHJpbmdzOiBbJ2xvYWRpbmcgZGF0YS4uLicsdHh0XSxcclxuICAgICAgdHlwZVNwZWVkOiAxMFxyXG4gICAgfSk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTEwIG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZSc+XHJcbiAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctcmVkLTcwMCB3LXNjcmVlbiBoLXNjcmVlbiAke3N0eWxlcy5kb29yVG9wfWB9IHN0eWxlPXt0cmFuc2xhdGVZVG9wfSAvPlxyXG4gICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXdoaXRlIGJvdHRvbS0wIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JCb3R0b219YH0gc3R5bGU9e3RyYW5zbGF0ZVlCb3R0b219Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdFYXJ0aH0gYmctbm8tcmVwZWF0IGJnLWZpeGVkIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBiZy1ibGFjayAke3N0eWxlcy5yZWRCb3h9IGgtOGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlICR7c3R5bGVzLnRvcEJveH0gYmctYmxhY2sgdGV4dC13aGl0ZSB3LTI0YH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+aGVsbG9Xb3JsZC5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWRCb3h9IHJlbGF0aXZlIGJnLWJsYWNrICR7c3R5bGVzLmJnT3BhY2l0eTkwfSByb3VuZGVkLWxnIHAtNiBtYXgtdy1sZyBteC02YH0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveEltZ30gb2JqZWN0LWNvbnRhaW4gZmxvYXQtbGVmdCB3LTIwIG1yLTQgbXQtMiByb3VuZGVkLWxnYH0gc3JjPScvYXNzZXRzL3N0YXRpYy9pYW0uanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPSdib3gtdGV4dCcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94VGV4dH0gdGV4dC1sZyB0ZXh0LXdoaXRlYH0+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLXJlZC04MDAgYmctYmxhY2sgdGV4dC13aGl0ZSBoLTE2ICR7c3R5bGVzLnJlZEJveH1gfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5Qcm95ZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkdpdGh1YjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkxlbmtlZGluPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=