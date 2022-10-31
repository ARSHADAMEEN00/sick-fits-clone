/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ameenarshadnediya_Desktop_Courses_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ameenarshadnediya/Desktop/Courses/sick-fits/frontend/components/Products.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_ameenarshadnediya_Desktop_Courses_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n  query ALL_PRODUCT_QUERY {\\n    allProducts {\\n      id\\n      name\\n      description\\n      photo {\\n        image {\\n          id\\n          publicUrlTransformed\\n        }\\n      }\\n      price\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar ALL_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject());\nvar ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({\n  displayName: \"Products__ProductsListStyles\",\n  componentId: \"sc-1uv5x8m-0\"\n})([\"display:grid;grid-template-columns:1fr;grid-gap:10px;\"]);\n_c = ProductsListStyles;\n\nfunction Product() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(ALL_PRODUCT_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading ....\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: [\"error:\", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {\n      children: data.allProducts.map(function (product) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n          product: product\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Product, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n_c2 = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductsListStyles\");\n$RefreshReg$(_c2, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcz83MTQwIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0U3R5bGVzIiwic3R5bGVkIiwiUHJvZHVjdCIsInVzZVF1ZXJ5IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJhbGxQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxpQkFBaUIsR0FBR0Msb0RBQUgsbUJBQXZCO0FBa0JBLElBQU1DLGtCQUFrQixHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFBeEI7S0FBTUQsa0I7O0FBTU4sU0FBU0UsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUFBLGtCQUNnQkMsd0RBQVEsQ0FBQ0wsaUJBQUQsQ0FEeEI7QUFBQSxNQUNUTSxJQURTLGFBQ1RBLElBRFM7QUFBQSxNQUNIQyxLQURHLGFBQ0hBLEtBREc7QUFBQSxNQUNJQyxPQURKLGFBQ0lBLE9BREo7O0FBR2pCLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUEseUJBQVVBLEtBQUssQ0FBQ0UsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFWCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGtCQUFEO0FBQUEsZ0JBQ0dILElBQUksQ0FBQ0ksV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsT0FBRDtBQUFBLDRCQUNwQiw4REFBQyw2Q0FBRDtBQUFhLGlCQUFPLEVBQUVBO0FBQXRCLFdBQW9DQSxPQUFPLENBQUNDLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFTRDs7R0FmUVQsTztVQUMwQkMsb0Q7OztNQUQxQkQsTztBQWlCVCwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xuY29uc3QgQUxMX1BST0RVQ1RfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IEFMTF9QUk9EVUNUX1FVRVJZIHtcbiAgICBhbGxQcm9kdWN0cyB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHBob3RvIHtcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJpY2VcbiAgICAgIHN0YXR1c1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuYDtcblxuZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RfUVVFUlkpO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZyAuLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+ZXJyb3I6e2Vycm9yLm1lc3NhZ2V9PC9wPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdD17cHJvZHVjdH0ga2V5PXtwcm9kdWN0LmlkfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ })

});