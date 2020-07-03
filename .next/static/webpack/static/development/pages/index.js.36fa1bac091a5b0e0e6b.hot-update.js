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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwiY29uZmlnIiwibW9sYXNzZXMiLCJ0byIsIm5leHQiLCJyb3RhdGUiLCJmcm9tIiwidHJhbnNsYXRlWVRvcCIsInRyYW5zbGF0ZVlCb3R0b20iLCJvblJlc3QiLCJ1c2VFZmZlY3QiLCJ0eHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsInN0eWxlcyIsImRvb3JUb3AiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSIsImNpcmNsZSIsImNpcmNsZXMiLCJjaXJjbGVSZXZlcnNlIiwiZG9vckJvdHRvbSIsImJnRWFydGgiLCJyZWRCb3giLCJ0b3BCb3giLCJiZ09wYWNpdHk5MCIsImJveEltZyIsImJveFRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsOEVBQU07QUFBQTs7QUFBQSxtQkFDaUNBLDhEQUFTLENBQUM7QUFDNURDLFVBQU0sRUFBRUEsbURBQU0sQ0FBQ0MsUUFENkM7QUFFNURDLE1BQUU7QUFBQSxpTUFBRSxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDSUEsSUFBSSxDQUFDO0FBQUVDLHdCQUFNLEVBQUU7QUFBVixpQkFBRCxDQURSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsT0FGMEQ7QUFNNURDLFFBQUksRUFBRTtBQUFFRCxZQUFNLEVBQUUsTUFBVjtBQUFrQkUsbUJBQWEsRUFBRSxJQUFqQztBQUF1Q0Msc0JBQWdCLEVBQUU7QUFBekQsS0FOc0Q7QUFPNURDLFVBQU0sRUFBRSxrQkFBTSxDQUNaO0FBQ0Q7QUFUMkQsR0FBRCxDQUQxQztBQUFBLE1BQ1hKLE1BRFcsY0FDWEEsTUFEVztBQUFBLE1BQ0hFLGFBREcs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QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FERixDQURGLEVBUUU7QUFBSyxhQUFTLFlBQUtWLDZFQUFNLENBQUNTLE1BQVosZ0NBQXdDVCw2RUFBTSxDQUFDVyxXQUEvQyxrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtYLDZFQUFNLENBQUNZLE1BQVoseURBQWQ7QUFBd0YsT0FBRyxFQUFDLHdCQUE1RjtBQUFxSCxPQUFHLEVBQUMsRUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsYUFBUyxZQUFLWiw2RUFBTSxDQUFDYSxPQUFaLHdCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQVJGLEVBY0U7QUFBSyxhQUFTLDJHQUFvR2IsNkVBQU0sQ0FBQ1MsTUFBM0csQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsQ0FkRixDQWJGLENBREY7QUFvQ0QsQ0F2REQ7QUFBQSxVQUNzRHpCLHNEQUR0RDtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNmZhMWJhYzA5MWE1YjBlMGU2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIGNvbmZpZywgaW50ZXJwb2xhdGUgfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCB7IGVhc2VDdWJpYyB9IGZyb20gJ2QzLWVhc2UnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIGNvbnN0IHsgcm90YXRlLCB0cmFuc2xhdGVZVG9wLCB0cmFuc2xhdGVZQm90dG9tIH0gPSB1c2VTcHJpbmcoe1xyXG4gICAgY29uZmlnOiBjb25maWcubW9sYXNzZXMsXHJcbiAgICB0bzogYXN5bmMgKG5leHQpID0+IHtcclxuICAgICAgYXdhaXQgbmV4dCh7IHJvdGF0ZTogJzE4MGRlZycgfSlcclxuICAgICAgLy9hd2FpdCBuZXh0KHsgdHJhbnNsYXRlWVRvcDogJzEwMCUnLCB0cmFuc2xhdGVZQm90dG9tOiAnLTEwMCUnIH0pXHJcbiAgICB9LFxyXG4gICAgZnJvbTogeyByb3RhdGU6ICcwZGVnJywgdHJhbnNsYXRlWVRvcDogJzAlJywgdHJhbnNsYXRlWUJvdHRvbTogJzAlJyB9LFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkdyYW5kRG9vcicpLmNsYXNzTGlzdC5yZXBsYWNlKCdmbGV4JywgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIHJlcHVkaWFuZGFlIHF1YXMgYXRxdWUsIGN1bHBhIHRlbmV0dXIgbWFnbmkgcmVwZWxsZW5kdXMgZXVtIGlsbG8gcmVydW0gYXV0ZW0sIG1heGltZSByZWljaWVuZGlzIHZpdGFlIGFyY2hpdGVjdG8gYWxpcXVpZCBsYXVkYW50aXVtIHZvbHVwdGFzIHBlcmZlcmVuZGlzIGV2ZW5pZXQgcXVhbSFEZWxlY3R1cyBzaW1pbGlxdWUgbmVtbyBiZWF0YWUgaXVzdG8gZG9sb3JlcyBmYWNpbGlzIHBvc3NpbXVzIHN1c2NpcGl0IG5lc2NpdW50IG5hdHVzIGRvbG9ydW0gb3B0aW8gcmF0aW9uZSB2ZXJpdGF0aXMsIHNvbHV0YSBpc3RlIG9mZmljaWlzIGZ1Z2l0LCB0ZW1wb3JlIGRvbG9yZW0gb2RpbyBpbj8gSXBzYW0gZXN0IHByb3ZpZGVudCBudW1xdWFtIHF1YWUsIGVuaW0gY3VwaWRpdGF0ZS4nXHJcbiAgICBjb25zdCB0eXBlZCA9IG5ldyBUeXBlZCgnI2JveC10ZXh0Jywge1xyXG4gICAgICBzdHJpbmdzOiBbJ2xvYWRpbmcgZGF0YS4uLicsIHR4dF0sXHJcbiAgICAgIHR5cGVTcGVlZDogMTBcclxuICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nR3JhbmREb29yIGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2B0b3AtMCBsZWZ0LTAgYWJzb2x1dGUgdy1zY3JlZW4gaC1zY3JlZW4gYmctcmVkLTcwMCAke3N0eWxlcy5kb29yVG9wfWB9IHN0eWxlPXt7dHJhbnNmb3JtOiB0cmFuc2xhdGVZQm90dG9tLmludGVycG9sYXRlKCh0cmFuc2xhdGVZQm90dG9tKSA9PiBgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVlCb3R0b219KWApfX0gLz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHctc2NyZWVuIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMjBgfSBzdHlsZT17eyB0cmFuc2Zvcm06IGludGVycG9sYXRlKFtyb3RhdGUsIHRyYW5zbGF0ZVlUb3BdLCAocm90YXRlLCB0cmFuc2xhdGVZVG9wKSA9PiBgcm90YXRlKCR7cm90YXRlfSkgdHJhbnNsYXRlWSgke3RyYW5zbGF0ZVlUb3B9KWApIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTIwIGgtMjAgYmctb3JhbmdlLTcwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMuY2lyY2xlfSAke3N0eWxlcy5jaXJjbGVzfWB9IC8+XHJcbiAgICAgICAgPC9hbmltYXRlZC5kaXY+XHJcbiAgICAgICAgPGFuaW1hdGVkLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTIwYH0gc3R5bGU9e3sgdHJhbnNmb3JtOiBpbnRlcnBvbGF0ZShbcm90YXRlLCB0cmFuc2xhdGVZQm90dG9tXSwgKHJvdGF0ZSwgdHJhbnNsYXRlWUJvdHRvbSkgPT4gYHJvdGF0ZSgke3JvdGF0ZX0pIHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZQm90dG9tfSlgKSB9fSA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMjAgaC0yMCBiZy1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgJHtzdHlsZXMuY2lyY2xlUmV2ZXJzZX0gJHtzdHlsZXMuY2lyY2xlc31gfSAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTcwMCB3LTIwIGgtMjAgei0yMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgIDxhbmltYXRlZC5kaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctd2hpdGUgYm90dG9tLTAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vckJvdHRvbX1gfSBzdHlsZT17e3RyYW5zZm9ybTogdHJhbnNsYXRlWVRvcC5pbnRlcnBvbGF0ZSgodHJhbnNsYXRlWVRvcCkgPT4gYHRyYW5zbGF0ZVkoJHt0cmFuc2xhdGVZVG9wfSlgKX19IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnRWFydGh9IGJnLW5vLXJlcGVhdCBiZy1maXhlZCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgYmctYmxhY2sgJHtzdHlsZXMucmVkQm94fSBoLThgfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAke3N0eWxlcy50b3BCb3h9IGJnLWJsYWNrIHRleHQtd2hpdGUgdy0yNGB9PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPmhlbGxvV29ybGQuY29tPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucmVkQm94fSByZWxhdGl2ZSBiZy1ibGFjayAke3N0eWxlcy5iZ09wYWNpdHk5MH0gcm91bmRlZC1sZyBwLTYgbWF4LXctbGcgbXgtNmB9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hJbWd9IG9iamVjdC1jb250YWluIGZsb2F0LWxlZnQgdy0yMCBtci00IG10LTIgcm91bmRlZC1sZ2B9IHNyYz0nL2Fzc2V0cy9zdGF0aWMvaWFtLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBpZD0nYm94LXRleHQnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveFRleHR9IHRleHQtbGcgdGV4dC13aGl0ZWB9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIGJvdHRvbS0wIGxlZnQtMCB3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtcmVkLTgwMCBiZy1ibGFjayB0ZXh0LXdoaXRlIGgtMTYgJHtzdHlsZXMucmVkQm94fWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPlByb3llY3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+R2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbic+TGVua2VkaW48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==