"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/playerLayout.tsx":
/*!*************************************!*\
  !*** ./components/playerLayout.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/.pnpm/@chakra-ui+layout@1.8.0_@chakra-ui+system@1.12.1_@emotion+react@11.13.0_@types+react@17.0.80__sjiyo43sdhj4bo6vcihzjjl4ba/node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ \"./components/sidebar.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/jeff/dev/next/trax/components/playerLayout.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar PlayerLayout = function PlayerLayout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Box, {\n    width: \"100vw\",\n    height: \"100vh\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      position: \"absolute\",\n      top: \"0\",\n      width: \"250px\",\n      left: \"0\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      marginLeft: \"250px\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_2__.Box, {\n      position: \"absolute\",\n      left: \"0\",\n      bottom: \"0\",\n      children: \"player\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = PlayerLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerLayout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BsYXllckxheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNyQyxzQkFDRSw4REFBQyxrREFBRDtBQUFLLFNBQUssRUFBQyxPQUFYO0FBQW1CLFVBQU0sRUFBQyxPQUExQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssY0FBUSxFQUFDLFVBQWQ7QUFBeUIsU0FBRyxFQUFDLEdBQTdCO0FBQWlDLFdBQUssRUFBQyxPQUF2QztBQUErQyxVQUFJLEVBQUMsR0FBcEQ7QUFBQSw2QkFDRSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFBSyxnQkFBVSxFQUFDLE9BQWhCO0FBQUEsZ0JBQXlCQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSw4REFBQyxrREFBRDtBQUFLLGNBQVEsRUFBQyxVQUFkO0FBQXlCLFVBQUksRUFBQyxHQUE5QjtBQUFrQyxZQUFNLEVBQUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBWkQ7O0tBQU1EO0FBY04sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wbGF5ZXJMYXlvdXQudHN4P2FlMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5cbmNvbnN0IFBsYXllckxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHdpZHRoPVwiMTAwdndcIiBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPVwiMFwiIHdpZHRoPVwiMjUwcHhcIiBsZWZ0PVwiMFwiPlxuICAgICAgICA8U2lkZWJhci8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggbWFyZ2luTGVmdD1cIjI1MHB4XCI+e2NoaWxkcmVufTwvQm94PlxuICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjBcIiBib3R0b209XCIwXCI+XG4gICAgICAgIHBsYXllclxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMYXlvdXQ7XG4iXSwibmFtZXMiOlsiQm94IiwiU2lkZWJhciIsIlBsYXllckxheW91dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/playerLayout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jeff_dev_next_trax_node_modules_pnpm_next_12_1_5_canary_7_react_dom_17_0_2_react_17_0_2_react_17_0_2_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/next@12.1.5-canary.7_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/.pnpm/next@12.1.5-canary.7_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/.pnpm/@chakra-ui+react@1.8.9_@emotion+react@11.13.0_@types+react@17.0.80_react@17.0.2__@emotion+sty_ddmyauwc5xl4ytor75e5wijynu/node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reset-css */ \"./node_modules/.pnpm/reset-css@5.0.2/node_modules/reset-css/reset.css\");\n/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reset_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_playerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/playerLayout */ \"./components/playerLayout.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/jeff/dev/next/trax/pages/_app.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_jeff_dev_next_trax_node_modules_pnpm_next_12_1_5_canary_7_react_dom_17_0_2_react_17_0_2_react_17_0_2_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.extendTheme)({\n  colors: {\n    gray: {\n      100: \"#F5F5F5\",\n      200: \"#EEEEEE\",\n      300: \"#E0E0E0\",\n      400: \"#BDBDBD\",\n      500: \"#9E9E9E\",\n      600: \"#757575\",\n      700: \"#616161\",\n      800: \"#424242\",\n      900: \"#212121\"\n    }\n  },\n  components: {\n    Button: {\n      variants: {\n        link: {\n          \":focus\": {\n            outline: \"none\",\n            boxShadow: \"none\"\n          }\n        }\n      }\n    }\n  }\n});\n\nvar Trax = function Trax(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {\n    theme: theme,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_playerLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Trax;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trax);\n\nvar _c;\n\n$RefreshReg$(_c, \"Trax\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxLQUFLLEdBQUdGLDZEQUFXLENBQUM7QUFDeEJHLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxJQUFJLEVBQUU7QUFDSixXQUFLLFNBREQ7QUFFSixXQUFLLFNBRkQ7QUFHSixXQUFLLFNBSEQ7QUFJSixXQUFLLFNBSkQ7QUFLSixXQUFLLFNBTEQ7QUFNSixXQUFLLFNBTkQ7QUFPSixXQUFLLFNBUEQ7QUFRSixXQUFLLFNBUkQ7QUFTSixXQUFLO0FBVEQ7QUFEQSxHQURnQjtBQWN4QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxRQUFRLEVBQUU7QUFDUkMsUUFBQUEsSUFBSSxFQUFFO0FBQ0osb0JBQVU7QUFDUkMsWUFBQUEsT0FBTyxFQUFFLE1BREQ7QUFFUkMsWUFBQUEsU0FBUyxFQUFFO0FBRkg7QUFETjtBQURFO0FBREo7QUFERTtBQWRZLENBQUQsQ0FBekI7O0FBMkJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQThCO0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDekMsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsU0FBSyxFQUFFWCxLQUF2QjtBQUFBLDJCQUNFLDhEQUFDLGdFQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZVcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBUkQ7O0tBQU1GO0FBVU4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IFwicmVzZXQtY3NzXCI7XG5pbXBvcnQgUGxheWVyTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL3BsYXllckxheW91dFwiO1xuXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgY29sb3JzOiB7XG4gICAgZ3JheToge1xuICAgICAgMTAwOiBcIiNGNUY1RjVcIixcbiAgICAgIDIwMDogXCIjRUVFRUVFXCIsXG4gICAgICAzMDA6IFwiI0UwRTBFMFwiLFxuICAgICAgNDAwOiBcIiNCREJEQkRcIixcbiAgICAgIDUwMDogXCIjOUU5RTlFXCIsXG4gICAgICA2MDA6IFwiIzc1NzU3NVwiLFxuICAgICAgNzAwOiBcIiM2MTYxNjFcIixcbiAgICAgIDgwMDogXCIjNDI0MjQyXCIsXG4gICAgICA5MDA6IFwiIzIxMjEyMVwiLFxuICAgIH0sXG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCdXR0b246IHtcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIGxpbms6IHtcbiAgICAgICAgICBcIjpmb2N1c1wiOiB7XG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuY29uc3QgVHJheCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxQbGF5ZXJMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUGxheWVyTGF5b3V0PlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF4O1xuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwiZXh0ZW5kVGhlbWUiLCJQbGF5ZXJMYXlvdXQiLCJ0aGVtZSIsImNvbG9ycyIsImdyYXkiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwidmFyaWFudHMiLCJsaW5rIiwib3V0bGluZSIsImJveFNoYWRvdyIsIlRyYXgiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});