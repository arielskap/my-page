module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-ease */ "d3-ease");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_ease__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/styles/index.module.css */ "./public/assets/styles/index.module.css");
/* harmony import */ var _public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Arielskap\\Desktop\\my-page\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const translateYTop = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    delay: 3000,
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
  const translateYBottom = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    delay: 3000,
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae quas atque, culpa tenetur magni repellendus eum illo rerum autem, maxime reiciendis vitae architecto aliquid laudantium voluptas perferendis eveniet quam!Delectus similique nemo beatae iusto dolores facilis possimus suscipit nesciunt natus dolorum optio ratione veritatis, soluta iste officiis fugit, tempore dolorem odio in? Ipsam est provident numquam quae, enim cupiditate.';
    let typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('#box-text', {
      strings: ['loading data...', txt],
      typeSpeed: 10
    });
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "absolute top-0 left-0 h-screen w-screen z-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: `relative bg-red-700 w-screen h-screen ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorTop}`,
    style: translateYTop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: `absolute bg-white bottom-0 w-screen h-screen ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.doorBottom}`,
    style: translateYBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: `${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgEarth} bg-no-repeat bg-fixed min-h-screen flex justify-center items-center`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: `fixed top-0 left-0 w-full bg-black ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox} h-8`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative w-full h-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: `absolute ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.topBox} bg-black text-white w-24`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "helloWorld.com")))), __jsx("div", {
    className: `${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox} relative bg-black ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bgOpacity90} rounded-lg p-6 max-w-lg mx-6`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: `${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxImg} object-contain float-left w-20 mr-4 mt-2 rounded-lg`,
    src: "/assets/static/iam.jpg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("span", {
    id: "box-text",
    className: `${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.boxText} text-lg text-white`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: `fixed bottom-0 left-0 w-full grid grid-cols-3 divide-x divide-red-800 bg-black text-white h-16 ${_public_assets_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.redBox}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Proyects"), __jsx("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Github"), __jsx("button", {
    type: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Lenkedin"))));
});

/***/ }),

/***/ "./public/assets/styles/index.module.css":
/*!***********************************************!*\
  !*** ./public/assets/styles/index.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bgEarth": "styles_bgEarth__2lVXM",
	"redBox": "styles_redBox__1yOvN",
	"topBox": "styles_topBox__3nQvn",
	"boxImg": "styles_boxImg__1eF20",
	"bgOpacity90": "styles_bgOpacity90__1BtBP",
	"doorTop": "styles_doorTop__3I18V",
	"doorBottom": "styles_doorBottom__2rVbd"
};


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Arielskap\Desktop\my-page\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "d3-ease":
/*!**************************!*\
  !*** external "d3-ease" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "typed.js":
/*!***************************!*\
  !*** external "typed.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZDMtZWFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHlwZWQuanNcIiJdLCJuYW1lcyI6WyJ0cmFuc2xhdGVZVG9wIiwidXNlU3ByaW5nIiwiZGVsYXkiLCJjb25maWciLCJkdXJhdGlvbiIsImVhc2luZyIsImVhc2VDdWJpYyIsInRvIiwidHJhbnNmb3JtIiwiZnJvbSIsInRyYW5zbGF0ZVlCb3R0b20iLCJ1c2VFZmZlY3QiLCJ0eHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsInN0eWxlcyIsImRvb3JUb3AiLCJkb29yQm90dG9tIiwiYmdFYXJ0aCIsInJlZEJveCIsInRvcEJveCIsImJnT3BhY2l0eTkwIiwiYm94SW1nIiwiYm94VGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUcsR0FBRU4sNkVBQU0sQ0FBQ08sTUFBTyxzREFBakM7QUFBd0YsT0FBRyxFQUFDLHdCQUE1RjtBQUFxSCxPQUFHLEVBQUMsRUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sTUFBRSxFQUFDLFVBQVQ7QUFBb0IsYUFBUyxFQUFHLEdBQUVQLDZFQUFNLENBQUNRLE9BQVEscUJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsRUFBRyxrR0FBaUdSLDZFQUFNLENBQUNJLE1BQU8sRUFBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBR0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLENBZEYsQ0FMRixDQURGO0FBNEJELENBaERELEU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5pbXBvcnQge2Vhc2VDdWJpYyB9IGZyb20gJ2QzLWVhc2UnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9wdWJsaWMvYXNzZXRzL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB0cmFuc2xhdGVZVG9wID0gdXNlU3ByaW5nKHtcclxuICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDMwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknfSxcclxuICAgIGZyb206IHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknIH0sXHJcbiAgfSlcclxuICBjb25zdCB0cmFuc2xhdGVZQm90dG9tID0gdXNlU3ByaW5nKHtcclxuICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgY29uZmlnOiB7ZHVyYXRpb246IDMwMDAsIGVhc2luZzogZWFzZUN1YmljfSxcclxuICAgIHRvOiB7dHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSd9LFxyXG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScgfSxcclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0eHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmF0aW9uZSByZXB1ZGlhbmRhZSBxdWFzIGF0cXVlLCBjdWxwYSB0ZW5ldHVyIG1hZ25pIHJlcGVsbGVuZHVzIGV1bSBpbGxvIHJlcnVtIGF1dGVtLCBtYXhpbWUgcmVpY2llbmRpcyB2aXRhZSBhcmNoaXRlY3RvIGFsaXF1aWQgbGF1ZGFudGl1bSB2b2x1cHRhcyBwZXJmZXJlbmRpcyBldmVuaWV0IHF1YW0hRGVsZWN0dXMgc2ltaWxpcXVlIG5lbW8gYmVhdGFlIGl1c3RvIGRvbG9yZXMgZmFjaWxpcyBwb3NzaW11cyBzdXNjaXBpdCBuZXNjaXVudCBuYXR1cyBkb2xvcnVtIG9wdGlvIHJhdGlvbmUgdmVyaXRhdGlzLCBzb2x1dGEgaXN0ZSBvZmZpY2lpcyBmdWdpdCwgdGVtcG9yZSBkb2xvcmVtIG9kaW8gaW4/IElwc2FtIGVzdCBwcm92aWRlbnQgbnVtcXVhbSBxdWFlLCBlbmltIGN1cGlkaXRhdGUuJ1xyXG4gICAgbGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjYm94LXRleHQnLCB7XHJcbiAgICAgIHN0cmluZ3M6IFsnbG9hZGluZyBkYXRhLi4uJyx0eHRdLFxyXG4gICAgICB0eXBlU3BlZWQ6IDEwXHJcbiAgICB9KTtcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiB6LTEwJz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGJnLXJlZC03MDAgdy1zY3JlZW4gaC1zY3JlZW4gJHtzdHlsZXMuZG9vclRvcH1gfSBzdHlsZT17dHJhbnNsYXRlWVRvcH0gLz5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIGJnLXdoaXRlIGJvdHRvbS0wIHctc2NyZWVuIGgtc2NyZWVuICR7c3R5bGVzLmRvb3JCb3R0b219YH0gc3R5bGU9e3RyYW5zbGF0ZVlCb3R0b219Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmdFYXJ0aH0gYmctbm8tcmVwZWF0IGJnLWZpeGVkIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBiZy1ibGFjayAke3N0eWxlcy5yZWRCb3h9IGgtOGB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBoLWZ1bGwnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlICR7c3R5bGVzLnRvcEJveH0gYmctYmxhY2sgdGV4dC13aGl0ZSB3LTI0YH0+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+aGVsbG9Xb3JsZC5jb208L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yZWRCb3h9IHJlbGF0aXZlIGJnLWJsYWNrICR7c3R5bGVzLmJnT3BhY2l0eTkwfSByb3VuZGVkLWxnIHAtNiBtYXgtdy1sZyBteC02YH0+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJveEltZ30gb2JqZWN0LWNvbnRhaW4gZmxvYXQtbGVmdCB3LTIwIG1yLTQgbXQtMiByb3VuZGVkLWxnYH0gc3JjPScvYXNzZXRzL3N0YXRpYy9pYW0uanBnJyBhbHQ9JycgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPSdib3gtdGV4dCcgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm94VGV4dH0gdGV4dC1sZyB0ZXh0LXdoaXRlYH0+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaXhlZCBib3R0b20tMCBsZWZ0LTAgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLXJlZC04MDAgYmctYmxhY2sgdGV4dC13aGl0ZSBoLTE2ICR7c3R5bGVzLnJlZEJveH1gfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJz5Qcm95ZWN0czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkdpdGh1YjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPkxlbmtlZGluPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJnRWFydGhcIjogXCJzdHlsZXNfYmdFYXJ0aF9fMmxWWE1cIixcblx0XCJyZWRCb3hcIjogXCJzdHlsZXNfcmVkQm94X18xeU92TlwiLFxuXHRcInRvcEJveFwiOiBcInN0eWxlc190b3BCb3hfXzNuUXZuXCIsXG5cdFwiYm94SW1nXCI6IFwic3R5bGVzX2JveEltZ19fMWVGMjBcIixcblx0XCJiZ09wYWNpdHk5MFwiOiBcInN0eWxlc19iZ09wYWNpdHk5MF9fMUJ0QlBcIixcblx0XCJkb29yVG9wXCI6IFwic3R5bGVzX2Rvb3JUb3BfXzNJMThWXCIsXG5cdFwiZG9vckJvdHRvbVwiOiBcInN0eWxlc19kb29yQm90dG9tX18yclZiZFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZDMtZWFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zcHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZWQuanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==