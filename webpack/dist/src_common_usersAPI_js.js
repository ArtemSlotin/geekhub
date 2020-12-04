/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunkwebpack_tutorial"] = globalThis["webpackChunkwebpack_tutorial"] || []).push([["src_common_usersAPI_js"],{

/***/ "./src/common/usersAPI.js":
/*!********************************!*\
  !*** ./src/common/usersAPI.js ***!
  \********************************/
/*! namespace exports */
/*! export getUsers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => /* binding */ getUsers\n/* harmony export */ });\nconst ENDPOINT = \"https://jsonplaceholder.typicode.com/users/\";\nfunction getUsers() {\n  return fetch(ENDPOINT).then(response => {\n    if (!response.ok) throw Error(response.statusText);\n    return response.json();\n  }).then(json => json);\n}\n\n//# sourceURL=webpack://webpack-tutorial/./src/common/usersAPI.js?");

/***/ })

}]);