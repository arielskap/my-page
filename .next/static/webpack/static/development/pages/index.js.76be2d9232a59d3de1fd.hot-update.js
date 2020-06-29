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
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {
      config: {
        duration: 1000
      },
      to: {
        maxWidth: '1024px',
        maxHeight: '100%'
      },
      from: {
        maxWidth: '0px',
        maxHeight: '0%'
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 3),
      props = _useSpring2[0],
      set = _useSpring2[1],
      stop = _useSpring2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('#box-text', {
      strings: [txt],
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
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgEarth, " bg-no-repeat bg-fixed min-h-screen flex justify-center items-center"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.box, " relative bg-black ").concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgOpacity90, " rounded-lg p-6 max-w-lg mx-6"),
    style: props,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxImg, " object-contain float-left w-20 mr-4 mt-2 rounded-lg"),
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("p", {
    id: "box-text",
    className: "".concat(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxText, " text-lg text-white"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }))));
}, "h/u/yKVpU3K8AMe4HbNo5XWBICQ=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3ByaW5nIiwiY29uZmlnIiwiZHVyYXRpb24iLCJ0byIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZnJvbSIsInByb3BzIiwic2V0Iiwic3RvcCIsInVzZUVmZmVjdCIsInR4dCIsInR5cGVkIiwiVHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwic3R5bGVzIiwiYmdFYXJ0aCIsImJveCIsImJnT3BhY2l0eTkwIiwiYm94SW1nIiwiYm94VGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSw4RUFBTTtBQUFBOztBQUFBLG1CQUNRQSw4REFBUyxDQUFDO0FBQUEsV0FBTztBQUMxQ0MsWUFBTSxFQUFFO0FBQUNDLGdCQUFRLEVBQUU7QUFBWCxPQURrQztBQUUxQ0MsUUFBRSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUUsUUFEUjtBQUVGQyxpQkFBUyxFQUFFO0FBRlQsT0FGc0M7QUFNMUNDLFVBQUksRUFBRTtBQUNKRixnQkFBUSxFQUFFLEtBRE47QUFFSkMsaUJBQVMsRUFBRTtBQUZQO0FBTm9DLEtBQVA7QUFBQSxHQUFELENBRGpCO0FBQUE7QUFBQSxNQUNaRSxLQURZO0FBQUEsTUFDTEMsR0FESztBQUFBLE1BQ0FDLElBREE7O0FBWW5CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxHQUFHLEdBQUcsdWNBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsK0NBQUosQ0FBVSxXQUFWLEVBQXVCO0FBQ2pDQyxhQUFPLEVBQUUsQ0FBQ0gsR0FBRCxDQUR3QjtBQUVqQ0ksZUFBUyxFQUFFO0FBRnNCLEtBQXZCLENBQVo7QUFJRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLFlBQUtDLDZFQUFNLENBQUNDLE9BQVoseUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyxZQUFLRCw2RUFBTSxDQUFDRSxHQUFaLGdDQUFxQ0YsNkVBQU0sQ0FBQ0csV0FBNUMsa0NBQXZCO0FBQStHLFNBQUssRUFBRVosS0FBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxZQUFLUyw2RUFBTSxDQUFDSSxNQUFaLHlEQUFkO0FBQXdGLE9BQUcsRUFBQyx3QkFBNUY7QUFBcUgsT0FBRyxFQUFDLEVBQXpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsTUFBRSxFQUFDLFVBQU47QUFBaUIsYUFBUyxZQUFLSiw2RUFBTSxDQUFDSyxPQUFaLHdCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREY7QUFVRCxDQTdCRDtBQUFBLFVBQzZCckIsc0RBRDdCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc2YmUyZDkyMzJhNTlkM2RlMWZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VTcHJpbmcsIGFuaW1hdGVkfSBmcm9tICdyZWFjdC1zcHJpbmcnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCBbcHJvcHMsIHNldCwgc3RvcF0gPSB1c2VTcHJpbmcoKCkgPT4gKHtcclxuICAgIGNvbmZpZzoge2R1cmF0aW9uOiAxMDAwfSxcclxuICAgIHRvOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTAyNHB4JyxcclxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICBmcm9tOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMHB4JyxcclxuICAgICAgbWF4SGVpZ2h0OiAnMCUnXHJcbiAgICB9XHJcbiAgfSkpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHR4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSYXRpb25lIHJlcHVkaWFuZGFlIHF1YXMgYXRxdWUsIGN1bHBhIHRlbmV0dXIgbWFnbmkgcmVwZWxsZW5kdXMgZXVtIGlsbG8gcmVydW0gYXV0ZW0sIG1heGltZSByZWljaWVuZGlzIHZpdGFlIGFyY2hpdGVjdG8gYWxpcXVpZCBsYXVkYW50aXVtIHZvbHVwdGFzIHBlcmZlcmVuZGlzIGV2ZW5pZXQgcXVhbSFEZWxlY3R1cyBzaW1pbGlxdWUgbmVtbyBiZWF0YWUgaXVzdG8gZG9sb3JlcyBmYWNpbGlzIHBvc3NpbXVzIHN1c2NpcGl0IG5lc2NpdW50IG5hdHVzIGRvbG9ydW0gb3B0aW8gcmF0aW9uZSB2ZXJpdGF0aXMsIHNvbHV0YSBpc3RlIG9mZmljaWlzIGZ1Z2l0LCB0ZW1wb3JlIGRvbG9yZW0gb2RpbyBpbj8gSXBzYW0gZXN0IHByb3ZpZGVudCBudW1xdWFtIHF1YWUsIGVuaW0gY3VwaWRpdGF0ZS4nXHJcbiAgICBsZXQgdHlwZWQgPSBuZXcgVHlwZWQoJyNib3gtdGV4dCcsIHtcclxuICAgICAgc3RyaW5nczogW3R4dF0sXHJcbiAgICAgIHR5cGVTcGVlZDogMTBcclxuICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJnRWFydGh9IGJnLW5vLXJlcGVhdCBiZy1maXhlZCBtaW4taC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgfT5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveH0gcmVsYXRpdmUgYmctYmxhY2sgJHtzdHlsZXMuYmdPcGFjaXR5OTB9IHJvdW5kZWQtbGcgcC02IG1heC13LWxnIG14LTZgfSBzdHlsZT17cHJvcHN9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib3hJbWd9IG9iamVjdC1jb250YWluIGZsb2F0LWxlZnQgdy0yMCBtci00IG10LTIgcm91bmRlZC1sZ2B9IHNyYz0nL2Fzc2V0cy9zdGF0aWMvaWFtLmpwZycgYWx0PScnIC8+XHJcbiAgICAgICAgICA8cCBpZD0nYm94LXRleHQnIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveFRleHR9IHRleHQtbGcgdGV4dC13aGl0ZWB9PjwvcD5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==