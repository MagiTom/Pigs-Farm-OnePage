/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n// import { info } from \"node-sass\";\n\n\n__webpack_require__(/*! ./server */ \"./src/server.js\"); // Validation form \n\n\nvar name = document.getElementById('name');\nvar email = document.getElementById('email');\nvar message = document.getElementById('message');\nvar submit = document.getElementById('submit');\nvar infoMessage = document.getElementById('info');\nvar form = document.querySelector('form');\n\nvar showError = function showError(input, msg) {\n  var info = input.parentElement.querySelector('.error-text');\n  input.classList.add('error');\n  info.textContent = msg;\n};\n\nvar clearError = function clearError(input) {\n  var info = input.parentElement.querySelector('.error-text');\n  input.classList.remove('error');\n  info.textContent = '';\n};\n\nvar checkForm = function checkForm(input) {\n  input.forEach(function (el) {\n    if (el.value === '') {\n      showError(el, \"Please, state Your\".concat(el.placeholder));\n      clearInputs(el);\n    } else {\n      clearError(el);\n    }\n  });\n};\n\nvar checkLength = function checkLength(input, min) {\n  if (input.value.length < min) {\n    showError(input, \"\".concat(input.placeholder, \" should have min. \").concat(min, \" signs.\"));\n    clearInputs(input);\n  } else {\n    clearError(input);\n  }\n};\n\nvar checkEmail = function checkEmail(email) {\n  var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n  if (re.test(email.value)) {\n    clearError(email);\n  } else {\n    showError(email, 'E-mail is incorrect');\n    clearInputs(email);\n  }\n};\n\nvar clearInputs = function clearInputs(input) {\n  input.addEventListener('input', function () {\n    clearError(input);\n  });\n};\n\nvar checkErrors = function checkErrors() {\n  var allInputs = Array.from([name, email, message]);\n  console.log(allInputs);\n  var errorCount = 0;\n  allInputs.forEach(function (el) {\n    if (el.classList.contains('error')) {\n      errorCount++;\n      console.log(errorCount);\n    }\n  });\n\n  if (errorCount === 0) {\n    infoMessage.style.visibility = 'visible';\n  }\n};\n\nsubmit.addEventListener('click', function (e) {\n  e.preventDefault();\n  checkForm([name, email, message]);\n  checkLength(name, 3);\n  checkEmail(email);\n  checkErrors();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {// const path = require('path');\nvar express = __webpack_require__(/*! express */ \"express\"); // const ejs = require('ejs');\n\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar app = express(); //set views file\n// app.set('views',path.join(__dirname,'views'));\n//set view engine\n// app.set('view engine', 'ejs');\n\napp.get('/', function (req, res) {\n  res.sendFile(__dirname + '/index.html');\n});\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\nvar transporter = nodemailer.createTransport({\n  host: 'smtp.googlemail.com',\n  port: 465,\n  auth: {\n    user: 'mag.testowo@gmail.com',\n    pass: 'Madzia89'\n  },\n  tls: {\n    rejectUnauthorized: false\n  }\n}); // Base index route\n\napp.get('/', function (req, res) {\n  res.render('index');\n});\napp.post('/', function (req, res) {\n  var email = req.body.email;\n  var name = req.body.name;\n  var message = req.body.message;\n  var messageOptions = {\n    from: email,\n    to: 'mag.testowo@gmail.com',\n    subject: name,\n    // text: message\n    html: \"\".concat(email, \": \").concat(message)\n  };\n  transporter.sendMail(messageOptions, function (error, info) {\n    if (error) {\n      return console.log(error);\n    }\n\n    console.log('Message %s sent: %s', info.messageId, info.response);\n    res.redirect('/');\n  });\n}); // Server Listening\n\napp.listen(9100, function () {\n  console.log('Server is running at port 9100');\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ })

/******/ });