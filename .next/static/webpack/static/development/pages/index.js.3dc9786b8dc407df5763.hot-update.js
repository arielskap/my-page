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
                    rotate: '180deg'
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
        rotate: '0deg',
        translateY: 0
      },
      onStart: function onStart() {
        if (count === 1) {
          setTranslateYTop({
            delay: 1000,
            config: {
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeCubic"],
              mass: 1,
              tension: 280,
              friction: 250
            },
            to: {
              transform: 'translateY(-100%)'
            }
          });
          setTranslateYBottom({
            delay: 1000,
            config: {
              easing: d3_ease__WEBPACK_IMPORTED_MODULE_5__["easeCubic"],
              mass: 1,
              tension: 280,
              friction: 250
            },
            to: {
              transform: 'translateY(100%)'
            },
            onRest: function onRest() {
              document.querySelector('.door').classList.replace('flex', 'hidden');
            }
          });
        }

        count++;
      },
      onRest: function onRest() {//document.querySelector('.door').classList.replace('flex', 'hidden');
      }
    };
  }),
      _useSpring6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSpring5, 1),
      _useSpring6$ = _useSpring6[0],
      rotate = _useSpring6$.rotate,
      translateY = _useSpring6$.translateY;

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
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "door absolute top-0 left-0 h-screen w-screen z-10 overflow-hidden flex justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "top-0 left-0 absolute w-screen h-screen bg-red-700 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.doorTop),
    style: translateYTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute w-screen h-screen flex justify-center items-center z-20",
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([rotate, translateY], function (rotate, translateY) {
        return "rotate(".concat(rotate, ") translateY(").concat(translateY, "%)");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-20 h-20 bg-orange-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.circle),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute w-screen h-screen flex justify-center items-center z-20",
    style: {
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["interpolate"])([rotate, translateY], function (rotate, translateY) {
        return "rotate(".concat(rotate, ") translateY(").concat(translateY, "%)");
      })
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-20 h-20 bg-blue-700 rounded-full ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.circleReverse),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.doorBottom),
    style: translateYBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "fixed top-0 left-0 w-full bg-black ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox, " h-8"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "absolute ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.topBox, " bg-black text-white w-24"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.redBox),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "Lenkedin"))));
}, "KfGFjK8enUAd7iImxe2M9nwqpLc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWVRvcCIsInNldFRyYW5zbGF0ZVlUb3AiLCJ0cmFuc2xhdGVZQm90dG9tIiwic2V0VHJhbnNsYXRlWUJvdHRvbSIsImNvdW50IiwiY29uZmlnIiwibW9sYXNzZXMiLCJ0byIsIm5leHQiLCJjYW5jZWwiLCJyb3RhdGUiLCJ0cmFuc2xhdGVZIiwiZnJvbSIsIm9uU3RhcnQiLCJkZWxheSIsImVhc2luZyIsImVhc2VDdWJpYyIsIm1hc3MiLCJ0ZW5zaW9uIiwiZnJpY3Rpb24iLCJvblJlc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwidHh0IiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJzdHlsZXMiLCJkb29yVG9wIiwiaW50ZXJwb2xhdGUiLCJjaXJjbGUiLCJjaXJjbGVSZXZlcnNlIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSw4RUFBTTtBQUFBOztBQUFBLG1CQUN1QkEsOERBQVMsQ0FBQztBQUFBLFdBQU87QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBUDtBQUFBLEdBQUQsQ0FEaEM7QUFBQTtBQUFBLE1BQ1pDLGFBRFk7QUFBQSxNQUNHQyxnQkFESDs7QUFBQSxvQkFFNkJILDhEQUFTLENBQUM7QUFBQSxXQUFPO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBQVA7QUFBQSxHQUFELENBRnRDO0FBQUE7QUFBQSxNQUVaRyxnQkFGWTtBQUFBLE1BRU1DLG1CQUZOOztBQUFBLG9CQUljTCw4REFBUyxDQUFDLFlB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Nzg2YjhkYzQwN2RmNTc2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGNvbmZpZywgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7IGVhc2VDdWJpYyB9IGZyb20gJ2QzLWVhc2UnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IFt0cmFuc2xhdGVZVG9wLCBzZXRUcmFuc2xhdGVZVG9wXSA9IHVzZVNwcmluZygoKSA9PiAoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSkpXHJcbiAgY29uc3QgW3RyYW5zbGF0ZVlCb3R0b20sIHNldFRyYW5zbGF0ZVlCb3R0b21dID0gdXNlU3ByaW5nKCgpID0+ICh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJyB9KSlcclxuXHJcbiAgY29uc3QgW3sgcm90YXRlLCB0cmFuc2xhdGVZIH1dID0gdXNlU3ByaW5nKCgpID0+IHtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICByZXR1cm4gKHtcclxuICAgIGNvbmZpZzogY29uZmlnLm1vbGFzc2VzLFxyXG4gICAgdG86IGFzeW5jIChuZXh0LCBjYW5jZWwpID0+IHtcclxuICAgICAgYXdhaXQgbmV4dCh7IHJvdGF0ZTogJzE4MGRlZycgfSlcclxuICAgICAgYXdhaXQgbmV4dCh7IHRyYW5zbGF0ZVk6IDEwMCB9KVxyXG4gICAgfSxcclxuICAgIGZyb206IHsgcm90YXRlOiAnMGRlZycsIHRyYW5zbGF0ZVk6IDAgfSxcclxuICAgIG9uU3RhcnQ6ICgpID0+IHtcclxuICAgICAgaWYgKGNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgc2V0VHJhbnNsYXRlWVRvcCh7XHJcbiAgICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICAgIGNvbmZpZzogeyBlYXNpbmc6IGVhc2VDdWJpYywgbWFzczogMSwgdGVuc2lvbjogMjgwLCBmcmljdGlvbjogMjUwIH0sXHJcbiAgICAgICAgICB0bzogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRyYW5zbGF0ZVlCb3R0b20oe1xyXG4gICAgICAgICAgZGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICBjb25maWc6IHsgZWFzaW5nOiBlYXNlQ3ViaWMsIG1hc3M6IDEsIHRlbnNpb246IDI4MCwgZnJpY3Rpb246IDI1MCB9LFxyXG4gICAgICAgICAgdG86IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfSxcclxuICAgICAgICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgY291bnQrK1xyXG4gICAgfSxcclxuICAgIG9uUmVzdDogKCkgPT4ge1xyXG4gICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb29yJykuY2xhc3NMaXN0LnJlcGxhY2UoJ2ZsZXgnLCAnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgfSlcclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoJyNib3gtdGV4dCcsIHtcclxuICAgICAgc3RyaW5nczogWydsb2FkaW5nIGRhdGEuLi4nLCB0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Rvb3IgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIHotMTAgb3ZlcmZsb3ctaGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YHRvcC0wIGxlZnQtMCBhYnNvbHV0ZSB3LXNjcmVlbiBoLXNjcmVlbiBiZy1yZWQtNzAwICR7c3R5bGVzLmRvb3JUb3B9YH0gc3R5bGU9e3RyYW5zbGF0ZVlUb3B9IC8+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTIwYH0gc3R5bGU9e3sgdHJhbnNmb3JtOiBpbnRlcnBvbGF0ZShbcm90YXRlLCB0cmFuc2xhdGVZXSwgKHJvdGF0ZSwgdHJhbnNsYXRlWSkgPT4gYHJvdGF0ZSgke3JvdGF0ZX0pIHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZfSUpYCkgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMjAgaC0yMCBiZy1vcmFuZ2UtNzAwIHJvdW5kZWQtZnVsbCAke3N0eWxlcy5jaXJjbGV9YH0gLz5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHctc2NyZWVuIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMjBgfSBzdHlsZT17eyB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3RhdGUsIHRyYW5zbGF0ZVldLCAocm90YXRlLCB0cmFuc2xhdGVZKSA9PiBgcm90YXRlKCR7cm90YXRlfSkgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVl9JSlgKSB9fSA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMjAgaC0yMCBiZy1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMuY2lyY2xlUmV2ZXJzZX1gfSAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTcwMCB3LTIwIGgtMjAgei0yMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17dHJhbnNsYXRlWUJvdHRvbX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdFYXJ0aH0gYmctbm8tcmVwZWF0IGJnLWZpeGVkIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBiZy1ibGFjayAke3N0eWxlcy5yZWRCb3h9IGgtOGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlICR7c3R5bGVzLnRvcEJveH0gYmctYmxhY2sgdGV4dC13aGl0ZSB3LTI0YH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+aGVsbG9Xb3JsZC5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWRCb3h9IHJlbGF0aXZlIGJnLWJsYWNrICR7c3R5bGVzLmJnT3BhY2l0eTkwfSByb3VuZGVkLWxnIHAtNiBtYXgtdy1sZyBteC02YH0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveEltZ30gb2JqZWN0LWNvbnRhaW4gZmxvYXQtbGVmdCB3LTIwIG1yLTQgbXQtMiByb3VuZGVkLWxnYH0gc3JjPScvYXNzZXRzL3N0YXRpYy9pYW0uanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPSdib3gtdGV4dCcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94VGV4dH0gdGV4dC1sZyB0ZXh0LXdoaXRlYH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgYm90dG9tLTAgbGVmdC0wIHctZnVsbCBncmlkIGdyaWQtY29scy0zIGRpdmlkZS14IGRpdmlkZS1yZWQtODAwIGJnLWJsYWNrIHRleHQtd2hpdGUgaC0xNiAke3N0eWxlcy5yZWRCb3h9YH0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+UHJveWVjdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5HaXRodWI8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5MZW5rZWRpbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9