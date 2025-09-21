/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)()\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    document.querySelectorAll('.fancyboxModal').forEach(function (button) {\r\n        button.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            // Показываем модальное окно\r\n            document.querySelector('.header-modal').style.display = 'block';\r\n            // Можно добавить скрытие подложки, если есть\r\n            document.querySelector('.overlay').style.display = 'block';\r\n        });\r\n    });\r\n\r\n    // Закрытие модального окна при клике на крестик\r\n    document.querySelectorAll('.header-modal__close').forEach(function (closeBtn) {\r\n        closeBtn.addEventListener('click', function () {\r\n            document.querySelector('.header-modal').style.display = 'none';\r\n            document.querySelector('.overlay').style.display = 'none';\r\n        });\r\n    });\r\n\r\n    // Также можно закрывать окно при клике на подложку (если есть такая возможность)\r\n    document.querySelector('.overlay').addEventListener('click', function () {\r\n        document.querySelector('.header-modal').style.display = 'none';\r\n        this.style.display = 'none';\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/modal.js?\n}");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n    const items = document.querySelectorAll('.benefits__item');\r\n    const prevBtn = document.querySelector('.benefits__arrow--left');\r\n    const nextBtn = document.querySelector('.benefits__arrow--right');\r\n\r\n    let currentIndex = 0;\r\n    let autoSlide;\r\n\r\n    function getVisibleCount() {\r\n        return window.innerWidth <= 576 ? 1 : 3;\r\n    }\r\n\r\n    function render() {\r\n        const visible = getVisibleCount();\r\n        items.forEach(item => item.classList.remove('active'));\r\n\r\n        for (let i = 0; i < visible; i++) {\r\n            const index = (currentIndex + i) % items.length; // зацикливание\r\n            items[index].classList.add('active');\r\n        }\r\n    }\r\n\r\n    function nextSlide() {\r\n        currentIndex = (currentIndex + 1) % items.length;\r\n        render();\r\n    }\r\n\r\n    function prevSlide() {\r\n        currentIndex = (currentIndex - 1 + items.length) % items.length;\r\n        render();\r\n    }\r\n\r\n    nextBtn.addEventListener('click', () => {\r\n        nextSlide();\r\n        resetAutoSlide();\r\n    });\r\n\r\n    prevBtn.addEventListener('click', () => {\r\n        prevSlide();\r\n        resetAutoSlide();\r\n    });\r\n\r\n    function startAutoSlide() {\r\n        autoSlide = setInterval(nextSlide, 2000);\r\n    }\r\n\r\n    function resetAutoSlide() {\r\n        clearInterval(autoSlide);\r\n        startAutoSlide();\r\n    }\r\n\r\n    window.addEventListener('resize', () => {\r\n        render();\r\n    });\r\n\r\n    render();\r\n    startAutoSlide();\r\n};\n\n//# sourceURL=webpack://lesson19/./src/modules/slider.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;