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

/***/ "./components/sidebar.tsx":
/*!********************************!*\
  !*** ./components/sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/.pnpm/next@12.1.5-canary.7_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@12.1.5-canary.7_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/.pnpm/@chakra-ui+layout@1.8.0_@chakra-ui+system@1.12.1_@emotion+react@11.13.0_@types+react@17.0.80__sjiyo43sdhj4bo6vcihzjjl4ba/node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/.pnpm/react-icons@4.12.0_react@17.0.2/node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/jeff/dev/next/trax/components/sidebar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar navMenu = [{\n  name: \"Home\",\n  icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdHome,\n  route: \"/\"\n}, {\n  name: \"Search\",\n  icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdSearch,\n  route: \"/search\"\n}, {\n  name: \"Your Library\",\n  icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdLibraryMusic,\n  route: \"/library\"\n}];\nvar musicMenu = [{\n  name: \"Create Playlist\",\n  icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdPlaylistAdd,\n  route: \"/\"\n}, {\n  name: \"Favorites\",\n  icon: react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdFavorite,\n  route: \"/\"\n}];\nvar playlists = new Array(30).fill(1).map(function (_, i) {\n  return \"Playlist \".concat(i + 1);\n});\n\nvar Sidebar = function Sidebar() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    width: \"100%\",\n    height: \"calc(100vh - 100px)\",\n    bg: \"black\",\n    paddingX: \"5px\",\n    color: \"grey\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n      paddingY: \"20px\",\n      height: \"100%\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        width: \"120px\",\n        marginBottom: \"20px\",\n        paddingX: \"20px\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n          src: \"/logo.svg\",\n          height: 60,\n          width: 120\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        marginBottom: \"20px\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.List, {\n          spacing: 2,\n          children: navMenu.map(function (menu) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n              paddingX: \"20px\",\n              fontSize: \"16px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.LinkBox, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                  href: menu.route,\n                  passHref: true,\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.LinkOverlay, {\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.ListIcon, {\n                      as: menu.icon,\n                      color: \"white\",\n                      marginRight: \"20px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 23\n                    }, _this), menu.name]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 71,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, _this)\n            }, menu.name, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.List, {\n          spacing: 2,\n          children: musicMenu.map(function (menu) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.ListItem, {\n              paddingX: \"20px\",\n              fontSize: \"16px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.LinkBox, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                  href: menu.route,\n                  passHref: true,\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.LinkOverlay, {\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.ListIcon, {\n                      as: menu.icon,\n                      color: \"white\",\n                      marginRight: \"20px\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 92,\n                      columnNumber: 23\n                    }, _this), menu.name]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 91,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, menu.name, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Divider, {\n        marginTop: \"20px\",\n        color: \"gray.800\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        height: \"70%\",\n        overflowY: \"auto\",\n        paddingY: \"20px\",\n        children: new Array(50).fill(1).map(function () {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n            children: \"hi\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNHLElBQUlLLEtBQUosQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQXRCLENBQTBCO0FBQUEsOEJBQ3pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR5QjtBQUFBLFNBQTFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2REQsQ0E5REQ7O0tBQU1HO0FBK0ROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci50c3g/N2E4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEljb24sXG4gIERpdmlkZXIsXG4gIENlbnRlcixcbiAgTGlua0JveCxcbiAgTGlua092ZXJsYXksXG59IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuXG5pbXBvcnQge1xuICBNZEhvbWUsXG4gIE1kU2VhcmNoLFxuICBNZExpYnJhcnlNdXNpYyxcbiAgTWRGYXZvcml0ZSxcbiAgTWRQbGF5bGlzdEFkZCxcbn0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cbmNvbnN0IG5hdk1lbnUgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBpY29uOiBNZEhvbWUsXG4gICAgcm91dGU6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTZWFyY2hcIixcbiAgICBpY29uOiBNZFNlYXJjaCxcbiAgICByb3V0ZTogXCIvc2VhcmNoXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIllvdXIgTGlicmFyeVwiLFxuICAgIGljb246IE1kTGlicmFyeU11c2ljLFxuICAgIHJvdXRlOiBcIi9saWJyYXJ5XCIsXG4gIH0sXG5dO1xuY29uc3QgbXVzaWNNZW51ID0gW1xuICB7XG4gICAgbmFtZTogXCJDcmVhdGUgUGxheWxpc3RcIixcbiAgICBpY29uOiBNZFBsYXlsaXN0QWRkLFxuICAgIHJvdXRlOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRmF2b3JpdGVzXCIsXG4gICAgaWNvbjogTWRGYXZvcml0ZSxcbiAgICByb3V0ZTogXCIvXCIsXG4gIH0sXG5dO1xuY29uc3QgcGxheWxpc3RzID0gbmV3IEFycmF5KDMwKS5maWxsKDEpLm1hcCgoXywgaSkgPT4gYFBsYXlsaXN0ICR7aSArIDF9YClcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cImNhbGMoMTAwdmggLSAxMDBweClcIlxuICAgICAgYmc9XCJibGFja1wiXG4gICAgICBwYWRkaW5nWD1cIjVweFwiXG4gICAgICBjb2xvcj1cImdyZXlcIlxuICAgID5cbiAgICAgIDxCb3ggcGFkZGluZ1k9XCIyMHB4XCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICA8Qm94IHdpZHRoPVwiMTIwcHhcIiBtYXJnaW5Cb3R0b209XCIyMHB4XCIgcGFkZGluZ1g9XCIyMHB4XCI+XG4gICAgICAgICAgPE5leHRJbWFnZSBzcmM9XCIvbG9nby5zdmdcIiBoZWlnaHQ9ezYwfSB3aWR0aD17MTIwfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBtYXJnaW5Cb3R0b209XCIyMHB4XCI+XG4gICAgICAgICAgPExpc3Qgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7bmF2TWVudS5tYXAoKG1lbnUpID0+IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtIHBhZGRpbmdYPVwiMjBweFwiIGZvbnRTaXplPVwiMTZweFwiIGtleT17bWVudS5uYW1lfT5cbiAgICAgICAgICAgICAgICA8TGlua0JveD5cbiAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXttZW51LnJvdXRlfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtPdmVybGF5PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e21lbnUuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ9XCIyMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHttZW51Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlua092ZXJsYXk+XG4gICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgIDwvTGlua0JveD5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPExpc3Qgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICB7bXVzaWNNZW51Lm1hcCgobWVudSkgPT4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gcGFkZGluZ1g9XCIyMHB4XCIgZm9udFNpemU9XCIxNnB4XCIga2V5PXttZW51Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxMaW5rQm94PlxuICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e21lbnUucm91dGV9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICA8TGlua092ZXJsYXk+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17bWVudS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD1cIjIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge21lbnUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cbiAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPC9MaW5rQm94PlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpdmlkZXIgbWFyZ2luVG9wPVwiMjBweFwiIGNvbG9yPVwiZ3JheS44MDBcIiAvPlxuICAgICAgICA8Qm94IGhlaWdodD1cIjcwJVwiIG92ZXJmbG93WT1cImF1dG9cIiBwYWRkaW5nWT1cIjIwcHhcIj5cbiAgICAgICAgICB7bmV3IEFycmF5KDUwKS5maWxsKDEpLm1hcCgoKSA9PiAoXG4gICAgICAgICAgICA8aDE+aGk8L2gxPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwibmFtZXMiOlsiTmV4dEltYWdlIiwiTmV4dExpbmsiLCJCb3giLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIkRpdmlkZXIiLCJMaW5rQm94IiwiTGlua092ZXJsYXkiLCJNZEhvbWUiLCJNZFNlYXJjaCIsIk1kTGlicmFyeU11c2ljIiwiTWRGYXZvcml0ZSIsIk1kUGxheWxpc3RBZGQiLCJuYXZNZW51IiwibmFtZSIsImljb24iLCJyb3V0ZSIsIm11c2ljTWVudSIsInBsYXlsaXN0cyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwiU2lkZWJhciIsIm1lbnUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar.tsx\n");

/***/ })

});