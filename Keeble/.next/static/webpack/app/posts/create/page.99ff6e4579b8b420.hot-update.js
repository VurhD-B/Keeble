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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Forms_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Forms/PostForm */ \"(app-client)/./components/Forms/PostForm.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst CreatePost = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [submitting, setSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        prompt: \"\",\n        tag: \"\"\n    });\n    const createPost = async (e)=>{\n        e.preventDefault();\n        setSubmitting(true);\n        try {\n            var _session;\n            const response = await fetch(\"/api/post/new\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    prompt: post.prompt,\n                    userId: (_session = session) === null || _session === void 0 ? void 0 : _session.user.id,\n                    tag: post.tag\n                })\n            });\n            if (response.ok) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_PostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        type: \"Create\",\n        post: post,\n        setPost: setPost,\n        submitting: submitting,\n        handleSubmit: createPost\n    }, void 0, false, {\n        fileName: \"/Users/dhruvbenegal/Documents/GitHub/Team-21-Project/Keeble/app/posts/create/page.jsx\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreatePost, \"2sIwVSaTN98ITi3bJlpSeajefXM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CreatePost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreatePost);\nvar _c;\n$RefreshReg$(_c, \"CreatePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Bvc3RzL2NyZWF0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVpQztBQUNZO0FBQ0Q7QUFFTTtBQUVsRCxNQUFNSSxhQUFhOztJQUNmLE1BQU0sRUFBRUMsTUFBS0MsT0FBTyxFQUFFLEdBQUdMLDJEQUFVQTtJQUNuQyxNQUFNTSxTQUFTTCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUM3QlksUUFBUTtRQUNSQyxLQUFLO0lBQ1Q7SUFFQSxNQUFNQyxhQUFhLE9BQU9DO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCUCxjQUFjO1FBRWQsSUFBSTtnQkFNZ0JIO1lBTGhCLE1BQU1XLFdBQVcsTUFBTUMsTUFBTSxpQkFDN0I7Z0JBQ0lDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJWLFFBQVFGLEtBQUtFLE1BQU07b0JBQ25CVyxNQUFNLEdBQUVqQixXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNrQixJQUFJLENBQUNDLEVBQUU7b0JBQ3hCWixLQUFLSCxLQUFLRyxHQUFHO2dCQUNqQjtZQUNKO1lBQ0EsSUFBR0ksU0FBU1MsRUFBRSxFQUFFO2dCQUNabkIsT0FBT29CLElBQUksQ0FBQztZQUNoQjtRQUNKLEVBQUUsT0FBTUMsT0FBTztZQUNYQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCLFNBQVU7WUFDTm5CLGNBQWM7UUFDbEI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTixrRUFBUUE7UUFDTDRCLE1BQUs7UUFDTHJCLE1BQU1BO1FBQ05DLFNBQVNBO1FBQ1RILFlBQVlBO1FBQ1p3QixjQUFjbEI7Ozs7OztBQUcxQjtHQTFDTVY7O1FBQ3VCSCx1REFBVUE7UUFDcEJDLHNEQUFTQTs7O0tBRnRCRTtBQTRDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcG9zdHMvY3JlYXRlL3BhZ2UuanN4PzM3MTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCJAY29tcG9uZW50cy9Gb3Jtcy9Qb3N0Rm9ybVwiO1xuXG5jb25zdCBDcmVhdGVQb3N0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTpzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3Bvc3QsIHNldFBvc3RdID0gdXNlU3RhdGUoe1xuICAgICAgICBwcm9tcHQ6ICcnLFxuICAgICAgICB0YWc6ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY3JlYXRlUG9zdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wb3N0L25ldycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBwcm9tcHQ6IHBvc3QucHJvbXB0LFxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24/LnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogcG9zdC50YWcgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBvc3RGb3JtXG4gICAgICAgICAgICB0eXBlPVwiQ3JlYXRlXCJcbiAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XG4gICAgICAgICAgICBzZXRQb3N0PXtzZXRQb3N0fVxuICAgICAgICAgICAgc3VibWl0dGluZz17c3VibWl0dGluZ31cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17Y3JlYXRlUG9zdH1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIlBvc3RGb3JtIiwiQ3JlYXRlUG9zdCIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJwb3N0Iiwic2V0UG9zdCIsInByb21wdCIsInRhZyIsImNyZWF0ZVBvc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJvayIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/posts/create/page.jsx\n"));

/***/ })

});