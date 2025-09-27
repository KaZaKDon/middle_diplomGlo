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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sertificates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sertificates */ \"./src/modules/sertificates.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slidServis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slidServis */ \"./src/modules/slidServis.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_formsAndModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/formsAndModal.js */ \"./src/modules/formsAndModal.js\");\n/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_modules_formsAndModal_js__WEBPACK_IMPORTED_MODULE_5__.initHeaderModal)();\r\n    (0,_modules_formsAndModal_js__WEBPACK_IMPORTED_MODULE_5__.initServicesModal)();\r\n    (0,_modules_formsAndModal_js__WEBPACK_IMPORTED_MODULE_5__.initFormsValidation)();\r\n    if (document.getElementById(\"calc\")) {\r\n        (0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__.initCalc)();\r\n    }\r\n});\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__.slider)();\r\n(0,_modules_slidServis__WEBPACK_IMPORTED_MODULE_2__.slidServis)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__.timer)();\r\n(0,_modules_sertificates__WEBPACK_IMPORTED_MODULE_0__.sertificatesModal)();\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.smoothScroll)();\r\n\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCalc: () => (/* binding */ initCalc)\n/* harmony export */ });\nconst initCalc = () => {\r\n    const typeSelect = document.getElementById(\"calc-type\");\r\n    const materialSelect = document.getElementById(\"calc-type-material\");\r\n    const inputArea = document.getElementById(\"calc-input\");\r\n    const totalInput = document.getElementById(\"calc-total\");\r\n\r\n    function validateField(field) {\r\n        if (!field.value || field.value === \"--\" || Number(field.value) <= 0) {\r\n            field.classList.add(\"is-invalid\");\r\n            return false;\r\n        } else {\r\n            field.classList.remove(\"is-invalid\");\r\n            return true;\r\n        }\r\n    }\r\n\r\n    function calculateTotal() {\r\n        const typeValid = validateField(typeSelect);\r\n        const materialValid = validateField(materialSelect);\r\n        const areaValid = validateField(inputArea);\r\n\r\n        if (typeValid && materialValid && areaValid) {\r\n            const area = parseFloat(inputArea.value);\r\n            const type = parseFloat(typeSelect.value);\r\n            const material = parseFloat(materialSelect.value);\r\n            const total = area * type * material;\r\n\r\n            totalInput.value = total.toFixed(2);\r\n        } else {\r\n            totalInput.value = \"\";\r\n        }\r\n    }\r\n\r\n    // слушатели\r\n    typeSelect.addEventListener(\"change\", calculateTotal);\r\n    materialSelect.addEventListener(\"change\", calculateTotal);\r\n    inputArea.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/[^0-9]/g, \"\"); // только цифры\r\n        calculateTotal();\r\n    });\r\n};\n\n//# sourceURL=webpack://lesson19/./src/modules/calc.js?\n}");

/***/ }),

/***/ "./src/modules/formsAndModal.js":
/*!**************************************!*\
  !*** ./src/modules/formsAndModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFormsValidation: () => (/* binding */ initFormsValidation),\n/* harmony export */   initHeaderModal: () => (/* binding */ initHeaderModal),\n/* harmony export */   initServicesModal: () => (/* binding */ initServicesModal)\n/* harmony export */ });\n// formsAndModal.js\r\n\r\n// =========================\r\n// 1. МОДАЛКА HEADER\r\n// =========================\r\nconst initHeaderModal = () => {\r\n    const modalWindow = document.querySelector(\".header-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n\r\n    if (!modalWindow || !overlay) return;\r\n\r\n    // Открытие\r\n    document.querySelectorAll(\".fancyboxModal\").forEach((button) => {\r\n        button.addEventListener(\"click\", (e) => {\r\n            if (button.closest(\"#services\")) return; // кнопки из services идут в другой модалке\r\n            e.preventDefault();\r\n            modalWindow.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n        });\r\n    });\r\n\r\n    // Закрытие по крестику\r\n    modalWindow.querySelectorAll(\".header-modal__close\").forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            modalWindow.style.display = \"none\";\r\n            overlay.style.display = \"none\";\r\n        });\r\n    });\r\n\r\n    // Закрытие по клику на overlay\r\n    overlay.addEventListener(\"click\", () => {\r\n        modalWindow.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n}\r\n\r\n// =========================\r\n// 2. МОДАЛКА SERVICES\r\n// =========================\r\nfunction initServicesModal() {\r\n    \r\n    const modal = document.querySelector(\".services-modal--opened\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n\r\n    if (!modal || !overlay) {\r\n        return;\r\n    }\r\n\r\n    // Делегирование: ловим клики по кнопкам вызова замерщика\r\n    document.addEventListener(\"click\", (e) => {\r\n        const btn = e.target.closest(\".service-button\");\r\n        if (btn) {\r\n            e.preventDefault();\r\n\r\n            // Открыть окно\r\n            modal.style.display = \"block\";\r\n            overlay.style.display = \"block\";\r\n\r\n            // Если у кнопки есть data-subject → запишем в форму\r\n            const subject = btn.dataset.subject;\r\n            if (subject) {\r\n                const subjectInput = modal.querySelector(\"input[name='subject']\");\r\n                if (subjectInput) subjectInput.value = subject;\r\n            }\r\n        }\r\n    });\r\n\r\n    // Закрытие окна\r\n    modal.querySelector(\".services-modal__close\")?.addEventListener(\"click\", () => {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n\r\n    overlay.addEventListener(\"click\", () => {\r\n        modal.style.display = \"none\";\r\n        overlay.style.display = \"none\";\r\n    });\r\n}\r\n\r\n// =========================\r\n// 3. ВАЛИДАЦИЯ ФОРМ\r\n// =========================\r\nfunction initFormsValidation() {\r\n    const forms = document.querySelectorAll(\"form\");\r\n\r\n    forms.forEach((form) => {\r\n        form.addEventListener(\"submit\", (e) => {\r\n            e.preventDefault();\r\n\r\n            let valid = true;\r\n            const requiredFields = form.querySelectorAll(\".required\");\r\n\r\n            requiredFields.forEach((field) => {\r\n                if (!field.value.trim()) {\r\n                    field.classList.add(\"is-invalid\");\r\n                    valid = false;\r\n                } else {\r\n                    field.classList.remove(\"is-invalid\");\r\n                }\r\n            });\r\n\r\n            if (!valid) {\r\n                console.warn(\"Форма не прошла валидацию\");\r\n                return;\r\n            }\r\n\r\n            // собираем данные формы\r\n            const formData = new FormData(form);\r\n            const data = {};\r\n\r\n            formData.forEach((value, key) => {\r\n                data[key] = value;\r\n            });\r\n\r\n            // 🔥 если на странице есть калькулятор — добавляем calc-total\r\n            const calcTotal = document.getElementById(\"calc-total\");\r\n            if (calcTotal && calcTotal.value) {\r\n                data[\"calc-total\"] = calcTotal.value;\r\n            }\r\n\r\n            console.log(\"Отправляем JSON:\", JSON.stringify(data));\r\n\r\n            // TODO: здесь можно добавить fetch() для реальной отправки\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/formsAndModal.js?\n}");

/***/ }),

/***/ "./src/modules/sertificates.js":
/*!*************************************!*\
  !*** ./src/modules/sertificates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sertificatesModal: () => (/* binding */ sertificatesModal)\n/* harmony export */ });\nconst sertificatesModal = () => {\r\n    const links = document.querySelectorAll('.sertificate-document');\r\n    const modal = document.querySelector('.cert-modal');\r\n    const modalContent = modal?.querySelector('.cert-modal-content');\r\n    const modalImg = modal?.querySelector('img');\r\n    const closeBtn = modal?.querySelector('.cert-modal-close');\r\n\r\n    if (!links.length || !modal || !modalContent || !modalImg || !closeBtn) {\r\n        console.warn(\"⚠️ Сертификаты или модалка не найдены на странице\");\r\n        return;\r\n    }\r\n\r\n    // Открыть модалку по клику на сертификат\r\n    links.forEach(link => {\r\n        link.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            const imgSrc = link.getAttribute('href');\r\n            modalImg.src = imgSrc;\r\n            modal.classList.add('active');\r\n\r\n            setTimeout(() => {\r\n                modalContent.classList.add('show');\r\n            }, 10);\r\n        });\r\n    });\r\n\r\n    // Функция закрытия\r\n    const closeModal = () => {\r\n        modalContent.classList.remove('show');\r\n        setTimeout(() => {\r\n            modal.classList.remove('active');\r\n        }, 300);\r\n    };\r\n\r\n    // Закрытие по крестику\r\n    closeBtn.addEventListener('click', closeModal);\r\n\r\n    // Закрытие по клику на фон\r\n    modal.addEventListener('click', (e) => {\r\n        if (e.target === modal) {\r\n            closeModal();\r\n        }\r\n    });\r\n};\n\n//# sourceURL=webpack://lesson19/./src/modules/sertificates.js?\n}");

/***/ }),

/***/ "./src/modules/slidServis.js":
/*!***********************************!*\
  !*** ./src/modules/slidServis.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slidServis: () => (/* binding */ slidServis)\n/* harmony export */ });\nconst slidServis = () => {\r\n    document.addEventListener('DOMContentLoaded', () => {\r\n        const servicesWrap = document.querySelector('.services-wrap');\r\n        if (!servicesWrap) {\r\n            console.error(\"Элемент .services-wrap не найден!\");\r\n            return;\r\n        }\r\n\r\n        const allServices = Array.from(document.querySelectorAll('.service-block'));\r\n        const servicePrev = document.querySelector('.services__arrow--left');\r\n        const serviceNext = document.querySelector('.services__arrow--right');\r\n\r\n        let serviceIndex = 0;\r\n\r\n        function getVisibleCount() {\r\n            return window.innerWidth <= 576 ? 1 : 2;\r\n        }\r\n\r\n        function renderServices() {\r\n            const visible = getVisibleCount();\r\n            servicesWrap.innerHTML = '';\r\n\r\n            for (let i = 0; i < visible; i++) {\r\n                const index = (serviceIndex + i) % allServices.length;\r\n                const clone = allServices[index].cloneNode(true);\r\n                servicesWrap.appendChild(clone);\r\n            }\r\n        }\r\n\r\n        function nextService() {\r\n            serviceIndex = (serviceIndex + 1) % allServices.length;\r\n            renderServices();\r\n        }\r\n\r\n        function prevService() {\r\n            serviceIndex = (serviceIndex - 1 + allServices.length) % allServices.length;\r\n            renderServices();\r\n        }\r\n\r\n        serviceNext.addEventListener('click', nextService);\r\n        servicePrev.addEventListener('click', prevService);\r\n        window.addEventListener('resize', renderServices);\r\n\r\n        renderServices();\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/slidServis.js?\n}");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n    const items = document.querySelectorAll('.benefits__item');\r\n    const prevBtn = document.querySelector('.benefits__arrow--left');\r\n    const nextBtn = document.querySelector('.benefits__arrow--right');\r\n\r\n    let currentIndex = 0;\r\n    let autoSlide;\r\n\r\n    function getVisibleCount() {\r\n        return window.innerWidth <= 576 ? 1 : 3;\r\n    }\r\n\r\n    function render() {\r\n        const visible = getVisibleCount();\r\n        items.forEach(item => item.classList.remove('active'));\r\n\r\n        for (let i = 0; i < visible; i++) {\r\n            const index = (currentIndex + i) % items.length; // зацикливание\r\n            items[index].classList.add('active');\r\n        }\r\n    }\r\n\r\n    function nextSlide() {\r\n        currentIndex = (currentIndex + 1) % items.length;\r\n        render();\r\n    }\r\n\r\n    function prevSlide() {\r\n        currentIndex = (currentIndex - 1 + items.length) % items.length;\r\n        render();\r\n    }\r\n\r\n    nextBtn.addEventListener('click', () => {\r\n        nextSlide();\r\n        resetAutoSlide();\r\n    });\r\n\r\n    prevBtn.addEventListener('click', () => {\r\n        prevSlide();\r\n        resetAutoSlide();\r\n    });\r\n\r\n    function startAutoSlide() {\r\n        autoSlide = setInterval(nextSlide, 2000);\r\n    }\r\n\r\n    function resetAutoSlide() {\r\n        clearInterval(autoSlide);\r\n        startAutoSlide();\r\n    }\r\n\r\n    window.addEventListener('resize', () => {\r\n        render();\r\n    });\r\n\r\n    render();\r\n    startAutoSlide();\r\n};\n\n//# sourceURL=webpack://lesson19/./src/modules/slider.js?\n}");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const scrollBtn = document.querySelector(\".smooth-scroll\");\r\n    const firstSection = document.querySelector(\"#offer\"); // ищем первую секцию (проверь класс!)\r\n\r\n    if (!scrollBtn || !firstSection) return;\r\n\r\n    // изначально скрыта\r\n    scrollBtn.style.display = \"none\";\r\n\r\n    // следим за прокруткой\r\n    window.addEventListener(\"scroll\", () => {\r\n        const sectionBottom = firstSection.offsetTop + firstSection.offsetHeight;\r\n\r\n        if (window.scrollY > sectionBottom) {\r\n            scrollBtn.style.display = \"block\";\r\n        } else {\r\n            scrollBtn.style.display = \"none\";\r\n        }\r\n    });\r\n\r\n    // плавный скролл вверх\r\n    scrollBtn.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n        window.scrollTo({\r\n            top: 0,\r\n            behavior: \"smooth\"\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/smoothScroll.js?\n}");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n        // 👉 дата окончания акции\r\n        const endDate = new Date(\"2025-09-30T23:59:59\");\r\n\r\n        // 👉 выбираем все таймеры на странице\r\n        const countdowns = document.querySelectorAll(\".countdown\");\r\n\r\n        function updateCountdown() {\r\n            const now = new Date();\r\n            const diff = endDate - now;\r\n\r\n            // если время вышло\r\n            if (diff <= 0) {\r\n                countdowns.forEach(cd => {\r\n                    cd.querySelector(\".count_1 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_2 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_3 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_4 span\").textContent = \"00\";\r\n                });\r\n                clearInterval(timer);\r\n                return;\r\n            }\r\n\r\n            // вычисляем оставшееся время\r\n            const days = Math.floor(diff / (1000 * 60 * 60 * 24));\r\n            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);\r\n            const minutes = Math.floor((diff / (1000 * 60)) % 60);\r\n            const seconds = Math.floor((diff / 1000) % 60);\r\n\r\n            // выводим во все таймеры\r\n            countdowns.forEach(cd => {\r\n                cd.querySelector(\".count_1 span\").textContent = String(days).padStart(2, \"0\");\r\n                cd.querySelector(\".count_2 span\").textContent = String(hours).padStart(2, \"0\");\r\n                cd.querySelector(\".count_3 span\").textContent = String(minutes).padStart(2, \"0\");\r\n                cd.querySelector(\".count_4 span\").textContent = String(seconds).padStart(2, \"0\");\r\n            });\r\n        }\r\n\r\n        // запуск\r\n        updateCountdown();\r\n        const timer = setInterval(updateCountdown, 1000);\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/timer.js?\n}");

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