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
                _context.next = 4;
                return next({
                  translateYTop: '100%',
                  translateYBottom: '-100%'
                });

              case 4:
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
    className: "top-0 left-0 absolute w-screen h-screen bg-red-700 ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doorTop),
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
    className: "w-20 h-20 rounded-full flex justify-center items-center ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circle),
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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "w-20 h-20 bg-blue-700 rounded-full flex justify-center items-center ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.circleReverse),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div, {
    className: "absolute bg-white bottom-0 w-screen h-screen ".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.doorBottom),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwiY29uZmlnIiwibW9sYXNzZXMiLCJ0byIsIm5leHQiLCJyb3RhdGUiLCJ0cmFuc2xhdGVZVG9wIiwidHJhbnNsYXRlWUJvdHRvbSIsImZyb20iLCJvblJlc3QiLCJ1c2VFZmZlY3QiLCJ0eHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsInN0eWxlcyIsImRvb3JUb3AiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSIsImNpcmNsZSIsImNpcmNsZVJldmVyc2UiLCJkb29yQm90dG9tIiwiYmdFYXJ0aCIsInJlZEJveCIsInRvcEJveCIsImJnT3BhY2l0eTkwIiwiYm94SW1nIiwiYm94VGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSw4RUFBTTtBQUFBOztBQUFBLG1CQUNpQ0EsOERBQVMsQ0FBQztBQUM1REMsVUFBTSxFQUFFQSxtREFBTSxDQUFDQyxRQUQ2QztBQUU1REMsTUFBRTtBQUFBLGlNQUFFLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNJQSxJQUFJLENBQUM7QUFBRUMsd0JBQU0sRUFBRTtBQUFWLGlCQUFELENBRFI7O0FBQUE7QUFBQTtBQUFBLHVCQUVJRCxJQUFJLENBQUM7QUFBRUUsK0JBQWEsRUFBRSxNQUFqQjtBQUF5QkMsa0NBQWdCLEVBQUU7QUFBM0MsaUJBQUQsQ0FGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLE9BRjBEO0FBTTVEQyxRQUFJLEVBQUU7QUFBRUgsWUFBTSxFQUFFLE1BQVY7QUFBa0JDLG1CQUFhLEVBQUUsSUFBakM7QUFBdUNDLHNCQUFnQixFQUFFO0FBQXpELEtBTnNEO0FBTzVERSxVQUFN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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQURGLENBREYsRUFRRTtBQUFLLGFBQVMsWUFBS1QsNkVBQU0sQ0FBQ1EsTUFBWixnQ0FBd0NSLDZFQUFNLENBQUNVLFdBQS9DLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsWUFBS1YsNkVBQU0sQ0FBQ1csTUFBWix5REFBZDtBQUF3RixPQUFHLEVBQUMsd0JBQTVGO0FBQXFILE9BQUcsRUFBQyxFQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxNQUFFLEVBQUMsVUFBVDtBQUFvQixhQUFTLFlBQUtYLDZFQUFNLENBQUNZLE9BQVosd0JBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsMkdBQW9HWiw2RUFBTSxDQUFDUSxNQUEzRyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixFQUdFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixDQWRGLENBYkYsQ0FERjtBQW9DRCxDQXZERDtBQUFBLFVBQ3NEeEIsc0RBRHREO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmEyODAxMWQ4NzkxNjVmZDE5YzA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCwgY29uZmlnLCBpbnRlcnBvbGF0ZSB9IGZyb20gJ3JlYWN0LXNwcmluZydcclxuaW1wb3J0IHsgZWFzZUN1YmljIH0gZnJvbSAnZDMtZWFzZSdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgeyByb3RhdGUsIHRyYW5zbGF0ZVlUb3AsIHRyYW5zbGF0ZVlCb3R0b20gfSA9IHVzZVNwcmluZyh7XHJcbiAgICBjb25maWc6IGNvbmZpZy5tb2xhc3NlcyxcclxuICAgIHRvOiBhc3luYyAobmV4dCkgPT4ge1xyXG4gICAgICBhd2FpdCBuZXh0KHsgcm90YXRlOiAnMTgwZGVnJyB9KVxyXG4gICAgICBhd2FpdCBuZXh0KHsgdHJhbnNsYXRlWVRvcDogJzEwMCUnLCB0cmFuc2xhdGVZQm90dG9tOiAnLTEwMCUnIH0pXHJcbiAgICB9LFxyXG4gICAgZnJvbTogeyByb3RhdGU6ICcwZGVnJywgdHJhbnNsYXRlWVRvcDogJzAlJywgdHJhbnNsYXRlWUJvdHRvbTogJzAlJyB9LFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkdyYW5kRG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIHJlcHVkaWFuZGFlIHF1YXMgYXRxdWUsIGN1bHBhIHRlbmV0dXIgbWFnbmkgcmVwZWxsZW5kdXMgZXVtIGlsbG8gcmVydW0gYXV0ZW0sIG1heGltZSByZWljaWVuZGlzIHZpdGFlIGFyY2hpdGVjdG8gYWxpcXVpZCBsYXVkYW50aXVtIHZvbHVwdGFzIHBlcmZlcmVuZGlzIGV2ZW5pZXQgcXVhbSFEZWxlY3R1cyBzaW1pbGlxdWUgbmVtbyBiZWF0YWUgaXVzdG8gZG9sb3JlcyBmYWNpbGlzIHBvc3NpbXVzIHN1c2NpcGl0IG5lc2NpdW50IG5hdHVzIGRvbG9ydW0gb3B0aW8gcmF0aW9uZSB2ZXJpdGF0aXMsIHNvbHV0YSBpc3RlIG9mZmljaWlzIGZ1Z2l0LCB0ZW1wb3JlIGRvbG9yZW0gb2RpbyBpbj8gSXBzYW0gZXN0IHByb3ZpZGVudCBudW1xdWFtIHF1YWUsIGVuaW0gY3VwaWRpdGF0ZS4nXHJcbiAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZCgnI2JveC10ZXh0Jywge1xyXG4gICAgICBzdHJpbmdzOiBbJ2xvYWRpbmcgZGF0YS4uLicsIHR4dF0sXHJcbiAgICAgIHR5cGVTcGVlZDogMTBcclxuICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nR3JhbmREb29yIGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2B0b3AtMCBsZWZ0LTAgYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gYmctcmVkLTcwMCAke3N0eWxlcy5kb29yVG9wfWB9IHN0eWxlPXt7dHJhbnNmb3JtOiB0cmFuc2xhdGVZQm90dG9tLmludGVycG9sYXRlKCh0cmFuc2xhdGVZQm90dG9tKSA9PiBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVlCb3R0b219KWApfX0gLz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHctc2NyZWVuIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMjBgfSBzdHlsZT17eyB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3RhdGUsIHRyYW5zbGF0ZVlUb3BdLCAocm90YXRlLCB0cmFuc2xhdGVZVG9wKSA9PiBgcm90YXRlKCR7cm90YXRlfSkgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVlUb3B9KWApIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICR7c3R5bGVzLmNpcmNsZX1gfT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0yMGB9IHN0eWxlPXt7IHRyYW5zZm9ybTogaW50ZXJwb2xhdGUoW3JvdGF0ZSwgdHJhbnNsYXRlWUJvdHRvbV0sIChyb3RhdGUsIHRyYW5zbGF0ZVlCb3R0b20pID0+IGByb3RhdGUoJHtyb3RhdGV9KSB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWUJvdHRvbX0pYCkgfX0gPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgYmctYmx1ZS03MDAgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICR7c3R5bGVzLmNpcmNsZVJldmVyc2V9YH0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXdoaXRlIGJvdHRvbS0wIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JCb3R0b219YH0gc3R5bGU9e3t0cmFuc2Zvcm06IHRyYW5zbGF0ZVlUb3AuaW50ZXJwb2xhdGUoKHRyYW5zbGF0ZVlUb3ApID0+IGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlWVRvcH0pYCl9fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iZ0VhcnRofSBiZy1uby1yZXBlYXQgYmctZml4ZWQgbWluLWgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGJnLWJsYWNrICR7c3R5bGVzLnJlZEJveH0gaC04YH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgdy1mdWxsIGgtZnVsbCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgJHtzdHlsZXMudG9wQm94fSBiZy1ibGFjayB0ZXh0LXdoaXRlIHctMjRgfT5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5oZWxsb1dvcmxkLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJlZEJveH0gcmVsYXRpdmUgYmctYmxhY2sgJHtzdHlsZXMuYmdPcGFjaXR5OTB9IHJvdW5kZWQtbGcgcC02IG1heC13LWxnIG14LTZgfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94SW1nfSBvYmplY3QtY29udGFpbiBmbG9hdC1sZWZ0IHctMjAgbXItNCBtdC0yIHJvdW5kZWQtbGdgfSBzcmM9Jy9hc3NldHMvc3RhdGljL2lhbS5qcGcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9J2JveC10ZXh0JyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hUZXh0fSB0ZXh0LWxnIHRleHQtd2hpdGVgfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLXJlZC04MDAgYmctYmxhY2sgdGV4dC13aGl0ZSBoLTE2ICR7c3R5bGVzLnJlZEJveH1gfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5Qcm95ZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkdpdGh1YjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkxlbmtlZGluPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=