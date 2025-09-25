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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_sertificates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sertificates */ \"./src/modules/sertificates.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slidServis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slidServis */ \"./src/modules/slidServis.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_validForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validForms */ \"./src/modules/validForms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.slider)()\r\n;(0,_modules_slidServis__WEBPACK_IMPORTED_MODULE_3__.slidServis)()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__.timer)()\r\n;(0,_modules_validForms__WEBPACK_IMPORTED_MODULE_5__.validForms)()\r\n;(0,_modules_sertificates__WEBPACK_IMPORTED_MODULE_1__.sertificatesModal)();\n\n//# sourceURL=webpack://lesson19/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    document.querySelectorAll('.fancyboxModal').forEach(function (button) {\r\n        button.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            // Показываем модальное окно\r\n            document.querySelector('.header-modal').style.display = 'block';\r\n            // Можно добавить скрытие подложки, если есть\r\n            document.querySelector('.overlay').style.display = 'block';\r\n        });\r\n    });\r\n\r\n    // Закрытие модального окна при клике на крестик\r\n    document.querySelectorAll('.header-modal__close').forEach(function (closeBtn) {\r\n        closeBtn.addEventListener('click', function () {\r\n            document.querySelector('.header-modal').style.display = 'none';\r\n            document.querySelector('.overlay').style.display = 'none';\r\n        });\r\n    });\r\n\r\n    // Также можно закрывать окно при клике на подложку (если есть такая возможность)\r\n    document.querySelector('.overlay').addEventListener('click', function () {\r\n        document.querySelector('.header-modal').style.display = 'none';\r\n        this.style.display = 'none';\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/modal.js?\n}");

/***/ }),

/***/ "./src/modules/sertificates.js":
/*!*************************************!*\
  !*** ./src/modules/sertificates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sertificatesModal: () => (/* binding */ sertificatesModal)\n/* harmony export */ });\nconst sertificatesModal = () => {\r\n    const certLinks = document.querySelectorAll(\".sertificate-document\");\r\n    const modal = document.getElementById(\"certModal\");\r\n    const modalImg = modal.querySelector(\"img\");\r\n    const closeBtn = modal.querySelector(\".cert-modal-close\");\r\n\r\n    if (!certLinks.length || !modal || !modalImg || !closeBtn) return;\r\n\r\n    // открытие\r\n    certLinks.forEach(link => {\r\n        link.addEventListener(\"click\", e => {\r\n            e.preventDefault();\r\n            const imgSrc = link.getAttribute(\"href\");\r\n            modalImg.src = imgSrc;\r\n            modal.classList.add(\"active\");\r\n        });\r\n    });\r\n\r\n    // закрытие крестиком\r\n    closeBtn.addEventListener(\"click\", () => {\r\n        modal.classList.remove(\"active\");\r\n        modalImg.src = \"\";\r\n    });\r\n\r\n    // закрытие по клику на фон\r\n    modal.addEventListener(\"click\", e => {\r\n        if (e.target === modal) {\r\n            modal.classList.remove(\"active\");\r\n            modalImg.src = \"\";\r\n        }\r\n    });\r\n\r\n    // закрытие по Esc\r\n    document.addEventListener(\"keydown\", e => {\r\n        if (e.key === \"Escape\" && modal.classList.contains(\"active\")) {\r\n            modal.classList.remove(\"active\");\r\n            modalImg.src = \"\";\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/sertificates.js?\n}");

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

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n        // 👉 дата окончания акции\r\n        const endDate = new Date(\"2025-09-30T23:59:59\");\r\n\r\n        // 👉 выбираем все таймеры на странице\r\n        const countdowns = document.querySelectorAll(\".countdown\");\r\n\r\n        function updateCountdown() {\r\n            const now = new Date();\r\n            const diff = endDate - now;\r\n\r\n            // если время вышло\r\n            if (diff <= 0) {\r\n                countdowns.forEach(cd => {\r\n                    cd.querySelector(\".count_1 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_2 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_3 span\").textContent = \"00\";\r\n                    cd.querySelector(\".count_4 span\").textContent = \"00\";\r\n                });\r\n                clearInterval(timer);\r\n                return;\r\n            }\r\n\r\n            // вычисляем оставшееся время\r\n            const days = Math.floor(diff / (1000 * 60 * 60 * 24));\r\n            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);\r\n            const minutes = Math.floor((diff / (1000 * 60)) % 60);\r\n            const seconds = Math.floor((diff / 1000) % 60);\r\n\r\n            // выводим во все таймеры\r\n            countdowns.forEach(cd => {\r\n                cd.querySelector(\".count_1 span\").textContent = String(days).padStart(2, \"0\");\r\n                cd.querySelector(\".count_2 span\").textContent = String(hours).padStart(2, \"0\");\r\n                cd.querySelector(\".count_3 span\").textContent = String(minutes).padStart(2, \"0\");\r\n                cd.querySelector(\".count_4 span\").textContent = String(seconds).padStart(2, \"0\");\r\n            });\r\n        }\r\n\r\n        // запуск\r\n        updateCountdown();\r\n        const timer = setInterval(updateCountdown, 1000);\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/timer.js?\n}");

/***/ }),

/***/ "./src/modules/validForms.js":
/*!***********************************!*\
  !*** ./src/modules/validForms.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validForms: () => (/* binding */ validForms)\n/* harmony export */ });\nconst validForms = () => {\r\n    document.addEventListener(\"DOMContentLoaded\", () => {\r\n        // Все формы на странице\r\n        const forms = document.querySelectorAll(\"form[name='action-form'], form[name='action-form2']\");\r\n\r\n        forms.forEach(form => {\r\n            form.addEventListener(\"submit\", function (e) {\r\n                e.preventDefault();\r\n\r\n                const nameInput = form.querySelector(\"input[name='fio']\");\r\n                const phoneInput = form.querySelector(\"input[name='phone']\");\r\n\r\n                const name = nameInput.value.trim();\r\n                const phone = phoneInput.value.trim();\r\n\r\n                // Регулярки для проверки\r\n                const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\\s]+$/; // только буквы и пробелы\r\n                const phoneRegex = /^\\+?\\d{7,16}$/; // + опционально и до 16 цифр\r\n\r\n                // Валидация\r\n                let errors = [];\r\n\r\n                if (!name && !phone) {\r\n                    errors.push(\"Заполните оба поля\");\r\n                } else {\r\n                    if (!name) {\r\n                        errors.push(\"Введите имя\");\r\n                    } else if (!nameRegex.test(name)) {\r\n                        errors.push(\"Имя может содержать только буквы (русские или латинские)\");\r\n                    }\r\n\r\n                    if (!phone) {\r\n                        errors.push(\"Введите телефон\");\r\n                    } else if (!phoneRegex.test(phone)) {\r\n                        errors.push(\"Телефон должен содержать только + и цифры (до 16)\");\r\n                    }\r\n                }\r\n\r\n                if (errors.length > 0) {\r\n                    alert(errors.join(\"\\n\"));\r\n                    return;\r\n                }\r\n\r\n                // ✅ Если ошибок нет — собираем JSON\r\n                const data = {\r\n                    fio: name,\r\n                    phone: phone,\r\n                    page: form.querySelector(\"input[name='page']\") ?\r\n                        form.querySelector(\"input[name='page']\").value :\r\n                        \"Не указана\"\r\n                };\r\n\r\n                console.log(\"Отправка данных:\", JSON.stringify(data));\r\n\r\n                /* Пример отправки через fetch\r\n                fetch(\"/send.php\", {\r\n                        method: \"POST\",\r\n                        headers: {\r\n                            \"Content-Type\": \"application/json\"\r\n                        },\r\n                        body: JSON.stringify(data)\r\n                    })\r\n                    .then(res => res.json())\r\n                    .then(result => {\r\n                        alert(\"Заявка успешно отправлена!\");\r\n                        console.log(result);\r\n                        form.reset();\r\n                    })\r\n                    .catch(err => {\r\n                        alert(\"Ошибка при отправке!\");\r\n                        console.error(err);\r\n                    });*/\r\n            });\r\n        });\r\n    });\r\n}\n\n//# sourceURL=webpack://lesson19/./src/modules/validForms.js?\n}");

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