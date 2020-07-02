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
  }), __jsx("div", {
    className: "bg-blue-70 w-20 z-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "w-full h-full-50 bg-orange-700 rounded-full circle ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.circle),
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWVRvcCIsInNldFRyYW5zbGF0ZVlUb3AiLCJ0cmFuc2xhdGVZQm90dG9tIiwic2V0VHJhbnNsYXRlWUJvdHRvbSIsInJvdGF0ZSIsImNvbmZpZyIsImR1cmF0aW9uIiwidG8iLCJmcm9tIiwib25SZXN0IiwiZGVsYXkiLCJlYXNpbmciLCJlYXNlQ3ViaWMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwidHh0IiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzdHlsZXMiLCJkb29yVG9wIiwiY2lyY2xlIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsOEVBQU07QUFBQTs7QUFBQSxtQkFDdUJBLDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUNDLGVBQVMsRUFBRTtBQUFaLEtBQVA7QUFBQSxHQUFELENBRGhDO0FBQUE7QUFBQSxNQUNaQyxhQURZO0FBQUEsTUFDR0MsZ0JBREg7O0FBQUEsb0JBRTZCSCw4REFBUyxDQUFDO0FBQUEsV0FBTztBQUFDQyxlQUFTLEVBQUU7QUFBWixLQUFQO0FBQUEsR0FBRCxDQUZ0QztBQUFBO0FBQUEsTUFFWkcsZ0JBRlk7QUFBQSxNQUVNQyxtQkFGTjs7QUFHbkIsTUFBTUMsTUFBTSxHQUFHTiw4REFBUyxDQUFDO0FBQ3ZCTyxVQUFNLEVBQUU7QUFBQ0MsY0FBUSxFQUFFO0FBQVgsS0FEZTtBQUV2QkMsTUFBRSxFQUFFO0FBQUNSLGVBQVMsRUFBRTtBQUFaLEtBRm1CO0FBR3ZCUyxRQUFJLEVBQUU7QUFBQ1QsZUFBUyxFQUFFO0FBQVosS0FIaUI7QUFJdkJVLFVBQU0sRUFBRSxrQkFBTTtBQUNaUixzQkFBZ0IsQ0FBQztBQUNmUyxhQUFLLEVBQUUsSUFEUTtBQUVmTCxjQUFNLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRSxJQUFYO0FBQWlCSyxnQkFBTSxFQUFFQyxpREFBU0E7QUFBbEMsU0FGTztBQUdmTCxVQUFFLEVBQUU7QUFBQ1IsbUJBQVMsRUFBRTtBQUFaO0FBSFcsT0FBRCxDQUFoQjtBQUtBSSx5QkFBbUIsQ0FBQztBQUNsQk8sYUFBSyxFQUFFLElBRFc7QUFFbEJMLGNBQU0sRUFBRTtBQUFDQyxrQkFBUSxFQUFFLElBQVg7QUFBaUJLLGdCQUFNLEVBQUVDLGlEQUFTQTtBQUFsQyxTQUZVO0FBR2xCTCxVQUFFLEVBQUU7QUFBQ1IsbUJBQVMsRUFBRTtBQUFaLFNBSGM7QUFJbEJVLGNBQU0sRUFBRSxrQkFBTTtBQUNaSSxrQkFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLEVBQWdDQyxTQUFoQyxDQUEwQ0MsT0FBMUMsQ0FBa0QsTUFBbEQsRUFBMEQsUUFBMUQ7QUFDRDtBQU5pQixPQUFELENBQW5CO0FBUUQ7QUFsQnNCLEdBQUQsQ0FBeEI7QUFvQkFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEdBQUcsR0FBRyx1Y0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQywrQ0FBSixDQUFVLFdBQVYsRUFBdUI7QUFDakNDLGFBQU8sRUFBRSxDQUFDLGlCQUFELEVBQW1CSCxHQUFuQixDQUR3QjtBQUVqQ0ksZUFBUyxFQUFFO0FBRnNCLEtBQXZCLENBQVo7QUFJRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyxrREFBMkNDLDZFQUFNLENBQUNDLE9BQWxELENBQXZCO0FBQW9GLFNBQUssRUFBRXhCLGFBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLGFBQVMsK0RBQXdEdUIsNkVBQU0sQ0FBQ0UsTUFBL0QsQ0FBdkI7QUFBZ0csU0FBSyxFQUFFckIsTUFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFLRSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLGFBQVMseURBQWtEbUIsNkVBQU0sQ0FBQ0csVUFBekQsQ0FBdkI7QUFBOEYsU0FBSyxFQUFFeEIsZ0JBQXJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixDQURGLEVBUUU7QUFBSyxhQUFTLFlBQUtxQiw2RUFBTSxDQUFDSSxPQUFaLHlFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsK0NBQXdDSiw2RUFBTSxDQUFDSyxNQUEvQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLHFCQUFjTCw2RUFBTSxDQUFDTSxNQUFyQiw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FERixDQURGLEVBUUU7QUFBSyxhQUFTLFlBQUtOLDZFQUFNLENBQUNLLE1BQVosZ0NBQXdDTCw2RUFBTSxDQUFDTyxXQUEvQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtQLDZFQUFNLENBQUNRLE1BQVoseURBQWQ7QUFBd0YsT0FBRyxFQUFDLHdCQUE1RjtBQUFxSCxPQUFHLEVBQUMsRUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsYUFBUyxZQUFLUiw2RUFBTSxDQUFDUyxPQUFaLHdCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQVJGLEVBY0U7QUFBSyxhQUFTLDJHQUFvR1QsNkVBQU0sQ0FBQ0ssTUFBM0csQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsQ0FkRixDQVJGLENBREY7QUErQkQsQ0E3REQ7QUFBQSxVQUM0QzlCLHNEQUQ1QyxFQUVrREEsc0RBRmxELEVBR2lCQSxzREFIakI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYzkzN2YzMmZhZDQ3NmIwZWZhZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQge2Vhc2VDdWJpYyB9IGZyb20gJ2QzLWVhc2UnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbdHJhbnNsYXRlWVRvcCwgc2V0VHJhbnNsYXRlWVRvcF0gPSB1c2VTcHJpbmcoKCkgPT4gKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKSd9KSlcclxuICBjb25zdCBbdHJhbnNsYXRlWUJvdHRvbSwgc2V0VHJhbnNsYXRlWUJvdHRvbV0gPSB1c2VTcHJpbmcoKCkgPT4gKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKSd9KSlcclxuICBjb25zdCByb3RhdGUgPSB1c2VTcHJpbmcoe1xyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDIwMDB9LFxyXG4gICAgdG86IHt0cmFuc2Zvcm06ICdyb3RhdGUoMzYwZGVnKSd9LFxyXG4gICAgZnJvbToge3RyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKSd9LFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIHNldFRyYW5zbGF0ZVlUb3Aoe1xyXG4gICAgICAgIGRlbGF5OiAxMDAwLFxyXG4gICAgICAgIGNvbmZpZzoge2R1cmF0aW9uOiAyMDAwLCBlYXNpbmc6IGVhc2VDdWJpY30sXHJcbiAgICAgICAgdG86IHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSd9LFxyXG4gICAgICB9KVxyXG4gICAgICBzZXRUcmFuc2xhdGVZQm90dG9tKHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBjb25maWc6IHtkdXJhdGlvbjogMjAwMCwgZWFzaW5nOiBlYXNlQ3ViaWN9LFxyXG4gICAgICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSd9LFxyXG4gICAgICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvb3InKS5jbGFzc0xpc3QucmVwbGFjZSgnZmxleCcsICdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdHh0ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJhdGlvbmUgcmVwdWRpYW5kYWUgcXVhcyBhdHF1ZSwgY3VscGEgdGVuZXR1ciBtYWduaSByZXBlbGxlbmR1cyBldW0gaWxsbyByZXJ1bSBhdXRlbSwgbWF4aW1lIHJlaWNpZW5kaXMgdml0YWUgYXJjaGl0ZWN0byBhbGlxdWlkIGxhdWRhbnRpdW0gdm9sdXB0YXMgcGVyZmVyZW5kaXMgZXZlbmlldCBxdWFtIURlbGVjdHVzIHNpbWlsaXF1ZSBuZW1vIGJlYXRhZSBpdXN0byBkb2xvcmVzIGZhY2lsaXMgcG9zc2ltdXMgc3VzY2lwaXQgbmVzY2l1bnQgbmF0dXMgZG9sb3J1bSBvcHRpbyByYXRpb25lIHZlcml0YXRpcywgc29sdXRhIGlzdGUgb2ZmaWNpaXMgZnVnaXQsIHRlbXBvcmUgZG9sb3JlbSBvZGlvIGluPyBJcHNhbSBlc3QgcHJvdmlkZW50IG51bXF1YW0gcXVhZSwgZW5pbSBjdXBpZGl0YXRlLidcclxuICAgIGxldCB0eXBlZCA9IG5ldyBUeXBlZCgnI2JveC10ZXh0Jywge1xyXG4gICAgICBzdHJpbmdzOiBbJ2xvYWRpbmcgZGF0YS4uLicsdHh0XSxcclxuICAgICAgdHlwZVNwZWVkOiAxMFxyXG4gICAgfSk7XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb29yIGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1yZWQtNzAwIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JUb3B9YH0gc3R5bGU9e3RyYW5zbGF0ZVlUb3B9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtNzAgdy0yMCB6LTIwJz5cclxuICAgICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbC01MCBiZy1vcmFuZ2UtNzAwIHJvdW5kZWQtZnVsbCBjaXJjbGUgJHtzdHlsZXMuY2lyY2xlfWB9IHN0eWxlPXtyb3RhdGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy13aGl0ZSBib3R0b20tMCB3LXNjcmVlbiBoLXNjcmVlbiAke3N0eWxlcy5kb29yQm90dG9tfWB9IHN0eWxlPXt0cmFuc2xhdGVZQm90dG9tfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnRWFydGh9IGJnLW5vLXJlcGVhdCBiZy1maXhlZCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2sgJHtzdHlsZXMucmVkQm94fSBoLThgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke3N0eWxlcy50b3BCb3h9IGJnLWJsYWNrIHRleHQtd2hpdGUgdy0yNGB9PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPmhlbGxvV29ybGQuY29tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVkQm94fSByZWxhdGl2ZSBiZy1ibGFjayAke3N0eWxlcy5iZ09wYWNpdHk5MH0gcm91bmRlZC1sZyBwLTYgbWF4LXctbGcgbXgtNmB9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hJbWd9IG9iamVjdC1jb250YWluIGZsb2F0LWxlZnQgdy0yMCBtci00IG10LTIgcm91bmRlZC1sZ2B9IHNyYz0nL2Fzc2V0cy9zdGF0aWMvaWFtLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBpZD0nYm94LXRleHQnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveFRleHR9IHRleHQtbGcgdGV4dC13aGl0ZWB9Pjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTAgbGVmdC0wIHctZnVsbCBncmlkIGdyaWQtY29scy0zIGRpdmlkZS14IGRpdmlkZS1yZWQtODAwIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiAke3N0eWxlcy5yZWRCb3h9YH0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+UHJveWVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5HaXRodWI8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5MZW5rZWRpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9