"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginDocument\": function() { return /* binding */ LoginDocument; },\n/* harmony export */   \"ReqisterDocument\": function() { return /* binding */ ReqisterDocument; },\n/* harmony export */   \"useLoginMutation\": function() { return /* binding */ useLoginMutation; },\n/* harmony export */   \"useReqisterMutation\": function() { return /* binding */ useReqisterMutation; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    mutation Login($username: String!, $password: String!) {\\n  login(options: {username: $username, password: $password}) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    mutation Reqister($username: String!, $password: String!) {\\n  register(options: {username: $username, password: $password}) {\\n    errors {\\n      field\\n      message\\n    }\\n    user {\\n      id\\n      username\\n    }\\n  }\\n}\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LoginDocument = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject());\nfunction useLoginMutation() {\n    _s();\n    return urql__WEBPACK_IMPORTED_MODULE_2__.useMutation(LoginDocument);\n}\n_s(useLoginMutation, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        urql__WEBPACK_IMPORTED_MODULE_2__.useMutation\n    ];\n});\nvar ReqisterDocument = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject1());\nfunction useReqisterMutation() {\n    _s1();\n    return urql__WEBPACK_IMPORTED_MODULE_2__.useMutation(ReqisterDocument);\n}\n_s1(useReqisterMutation, \"wwwtpB20p0aLiHIvSy5P98MwIUg=\", false, function() {\n    return [\n        urql__WEBPACK_IMPORTED_MODULE_2__.useMutation\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNEOztBQWtIdEIsSUFBTUUsYUFBYSxHQUFHRix1REFBRyxtQkFhM0IsQ0FBQztBQUVDLFNBQVNHLGdCQUFnQixHQUFHOztJQUNqQyxPQUFPRiw2Q0FBZ0IsQ0FBd0NDLGFBQWEsQ0FBQyxDQUFDO0NBQy9FO0dBRmVDLGdCQUFnQjs7UUFDdkJGLDZDQUFnQjs7O0FBRWxCLElBQU1JLGdCQUFnQixHQUFHTCx1REFBRyxvQkFhOUIsQ0FBQztBQUVDLFNBQVNNLG1CQUFtQixHQUFHOztJQUNwQyxPQUFPTCw2Q0FBZ0IsQ0FBOENJLGdCQUFnQixDQUFDLENBQUM7Q0FDeEY7SUFGZUMsbUJBQW1COztRQUMxQkwsNkNBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbC50c3g/MGU4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCAqIGFzIFVycWwgZnJvbSAndXJxbCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgSW5wdXRNYXliZTxUPiA9IE1heWJlPFQ+O1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbmV4cG9ydCB0eXBlIE9taXQ8VCwgSyBleHRlbmRzIGtleW9mIFQ+ID0gUGljazxULCBFeGNsdWRlPGtleW9mIFQsIEs+Pjtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY3JlYXRlUG9zdDogUG9zdDtcbiAgZGVsZXRlUG9zdDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsb2dpbjogVXNlclJlc3BvbnNlO1xuICByZWdpc3RlcjogVXNlclJlc3BvbnNlO1xuICB1cGRhdGVQb3N0PzogTWF5YmU8UG9zdD47XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUG9zdEFyZ3MgPSB7XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBvcHRpb25zOiBVc2VyTmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VyTmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUG9zdEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUG9zdCA9IHtcbiAgX190eXBlbmFtZT86ICdQb3N0JztcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgcG9zdD86IE1heWJlPFBvc3Q+O1xuICBwb3N0czogQXJyYXk8UG9zdD47XG4gIHVzZXJzOiBBcnJheTxVc2VyPjtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQb3N0QXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJOYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB1c2VyPzogTWF5YmU8VXNlcj47XG59O1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb24gPSB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nLCBsb2dpbjogeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScsIGVycm9ycz86IEFycmF5PHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJywgZmllbGQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nIH0+IHwgbnVsbCwgdXNlcj86IHsgX190eXBlbmFtZT86ICdVc2VyJywgaWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZyB9IHwgbnVsbCB9IH07XG5cbmV4cG9ydCB0eXBlIFJlcWlzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgUmVxaXN0ZXJNdXRhdGlvbiA9IHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicsIHJlZ2lzdGVyOiB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJywgZXJyb3JzPzogQXJyYXk8eyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InLCBmaWVsZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcgfT4gfCBudWxsLCB1c2VyPzogeyBfX3R5cGVuYW1lPzogJ1VzZXInLCBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nIH0gfCBudWxsIH0gfTtcblxuXG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkdXNlcm5hbWU6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbihvcHRpb25zOiB7dXNlcm5hbWU6ICR1c2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcbiAgICBlcnJvcnMge1xuICAgICAgZmllbGRcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gICAgdXNlciB7XG4gICAgICBpZFxuICAgICAgdXNlcm5hbWVcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbigpIHtcbiAgcmV0dXJuIFVycWwudXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCk7XG59O1xuZXhwb3J0IGNvbnN0IFJlcWlzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVxaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgcmVnaXN0ZXIob3B0aW9uczoge3VzZXJuYW1lOiAkdXNlcm5hbWUsIHBhc3N3b3JkOiAkcGFzc3dvcmR9KSB7XG4gICAgZXJyb3JzIHtcbiAgICAgIGZpZWxkXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICAgIHVzZXIge1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlcWlzdGVyTXV0YXRpb24oKSB7XG4gIHJldHVybiBVcnFsLnVzZU11dGF0aW9uPFJlcWlzdGVyTXV0YXRpb24sIFJlcWlzdGVyTXV0YXRpb25WYXJpYWJsZXM+KFJlcWlzdGVyRG9jdW1lbnQpO1xufTsiXSwibmFtZXMiOlsiZ3FsIiwiVXJxbCIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwidXNlTXV0YXRpb24iLCJSZXFpc3RlckRvY3VtZW50IiwidXNlUmVxaXN0ZXJNdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/generated/graphql.tsx\n"));

/***/ })

});