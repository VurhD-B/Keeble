"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/posts/create/page",{

/***/ "(app-client)/./app/posts/create/page.jsx":
/*!***********************************!*\
  !*** ./app/posts/create/page.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Forms_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Forms/PostForm */ \"(app-client)/./components/Forms/PostForm.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CreatePost = ()=>{\n    _s();\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        prompt: \"\",\n        tag: \"\"\n    });\n    const createPost = async (e)=>{\n        e.preventDefault();\n        setSubmitting(true);\n        try {\n            const response = await fetch(\"/api/post/new\", {\n                method: \"POST\",\n                body: JSON.stringify\n            });\n        } catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"Create\",\n        post: post,\n        setPost: setPost,\n        submitting: submitting,\n        handleSubmit: createPost\n    }, void 0, false, {\n        fileName: \"/Users/dhruvbenegal/Documents/GitHub/Team-21-Project/Keeble/app/posts/create/page.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreatePost, \"thYPwEOBDHAXKASFLxNSzHL7N9I=\");\n_c = CreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePost);\nvar _c;\n$RefreshReg$(_c, \"CreatePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Bvc3RzL2NyZWF0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpQztBQUNZO0FBQ0Q7QUFFTTtBQUVsRCxNQUFNSSxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7UUFDN0JTLFFBQVE7UUFDUkMsS0FBSztJQUNUO0lBRUEsTUFBTUMsYUFBYSxPQUFPQztRQUN0QkEsRUFBRUMsY0FBYztRQUNoQlAsY0FBYztRQUVkLElBQUk7WUFDQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU0saUJBQzdCO2dCQUNJQyxRQUFRO2dCQUNSQyxNQUFNQyxLQUFLQyxTQUFTO1lBQ3hCO1FBQ0osRUFBRSxPQUFNQyxPQUFPLENBRWY7SUFDSjtJQUVBLHFCQUNJLDhEQUFDakIsa0VBQVFBO1FBQ0xrQixNQUFLO1FBQ0xkLE1BQU1BO1FBQ05DLFNBQVNBO1FBQ1RILFlBQVlBO1FBQ1ppQixjQUFjWDs7Ozs7O0FBRzFCO0dBL0JNUDtLQUFBQTtBQWlDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcG9zdHMvY3JlYXRlL3BhZ2UuanN4PzM3MTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCJAY29tcG9uZW50cy9Gb3Jtcy9Qb3N0Rm9ybVwiO1xuXG5jb25zdCBDcmVhdGVQb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcHJvbXB0OiAnJyxcbiAgICAgICAgdGFnOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNyZWF0ZVBvc3QgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcG9zdC9uZXcnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQb3N0Rm9ybVxuICAgICAgICAgICAgdHlwZT1cIkNyZWF0ZVwiXG4gICAgICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICAgICAgc2V0UG9zdD17c2V0UG9zdH1cbiAgICAgICAgICAgIHN1Ym1pdHRpbmc9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2NyZWF0ZVBvc3R9XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQb3N0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJQb3N0Rm9ybSIsIkNyZWF0ZVBvc3QiLCJzdWJtaXR0aW5nIiwic2V0U3VibWl0dGluZyIsInBvc3QiLCJzZXRQb3N0IiwicHJvbXB0IiwidGFnIiwiY3JlYXRlUG9zdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwidHlwZSIsImhhbmRsZVN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/posts/create/page.jsx\n"));

/***/ })

});