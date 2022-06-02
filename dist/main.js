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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/prices */ \"./src/modules/prices.js\");\n// Модуль взаимодействия с корзиной\r\n\r\n\r\n// Модуль взаимодействия с загрузкой начальной страницы\r\n\r\n\r\n// Модуль взаимодействия с товарами через поисковую строку\r\n\r\n\r\n// Модуль взаимодействия с товарами по каталогу с категориями\r\n\r\n\r\n// Модуль взаимодействия с товарами по цене\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postDataCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postDataCart */ \"./src/modules/postDataCart.js\");\n/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./count */ \"./src/modules/count.js\");\n// Модуль взаимодействия с корзиной\r\n\r\n\r\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart');\r\n  const cartModal = document.querySelector('.cart');\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close');\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  const cartTotal = cartModal.querySelector('.cart-total > span');\r\n  const cartWrapper = document.querySelector('.cart-wrapper');\r\n  const cartSendBtn = cartModal.querySelector('.cart-confirm');\r\n\r\n  // Открытие модального окна корзины\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem(\"cart\") ?\r\n      JSON.parse(localStorage.getItem(\"cart\")) : [];\r\n\r\n    cartModal.style.display = \"flex\";\r\n\r\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  }\r\n\r\n  cartBtn.addEventListener('click', openCart);\r\n\r\n  // Закрытие модального окна\r\n  const closeCart = () => {\r\n    cartModal.style.display = ''\r\n  }\r\n\r\n  cartCloseBtn.addEventListener('click', closeCart);\r\n\r\n  // Добавление товара в корзину\r\n  goodsWrapper.addEventListener('click', (event) => {\r\n    if (event.target.classList.contains('btn-primary')) {\r\n      const card = event.target.closest('.card');\r\n      const key = card.dataset.key;\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      const cart = localStorage.getItem('cart') ?\r\n        JSON.parse(localStorage.getItem('cart')) : [];\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key\r\n      })\r\n\r\n      cart.push(goodItem)\r\n\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n      // count();\r\n    }\r\n  });\r\n\r\n  // Удаление товара из  корзины\r\n  cartWrapper.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('btn-primary')) {\r\n      const cart = localStorage.getItem(\"cart\") ?\r\n        JSON.parse(localStorage.getItem(\"cart\")) : [];\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key\r\n      })\r\n\r\n      cart.splice(index, 1);\r\n\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n\r\n      (0,_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n  })\r\n\r\n  // Оформление заказ (отправка запроса на сервер)\r\n  cartSendBtn.addEventListener('click', async () => {\r\n    const cart = localStorage.getItem(\"cart\") ?\r\n      JSON.parse(localStorage.getItem(\"cart\")) : [];\r\n\r\n    await (0,_postDataCart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem('cart');\r\n\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n\r\n      cartTotal.textContent = 0;\r\n    })\r\n\r\n    ;(0,_count__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n// Фильтрация товаров по категориям\r\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n    const catalogModal = document.querySelector(\".catalog\");\r\n    const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n\r\n    let isOpen = false;\r\n\r\n    // Вызов модального окна с категориями товаров\r\n    btnCatalog.addEventListener(\"click\", () => {\r\n        isOpen = !isOpen;\r\n\r\n        if (isOpen) {\r\n            catalogModal.style.display = \"block\";\r\n        } else {\r\n            catalogModal.style.display = '';\r\n        }\r\n    });\r\n\r\n    // Отображение товаров по категориям\r\n    catalogModalItems.forEach((item) => {\r\n        item.addEventListener(\"click\", () => {\r\n            const text = item.textContent;\r\n\r\n            (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n            });\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/count.js":
/*!******************************!*\
  !*** ./src/modules/count.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Подсчет количества товаров в корзине\r\nconst count = () => {\r\n    const cartCount = document.querySelector('.counter');\r\n    const cart = localStorage.getItem('cart') ? \r\n        JSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n    cartCount.textContent = cart.length;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (count);\n\n//# sourceURL=webpack://ozon/./src/modules/count.js?");

/***/ }),

/***/ "./src/modules/deleteData.js":
/*!***********************************!*\
  !*** ./src/modules/deleteData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Удаление данных из БД\r\nconst deleteData = () => {\r\n    return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json/24', {\r\n            method: 'DELETE',          \r\n        })\r\n        .then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteData);\n\n//# sourceURL=webpack://ozon/./src/modules/deleteData.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\n// Модуль фильтрации всех объектов согласно запроса\r\n\r\n// Фильтрация товаров в строке поиска\r\nconst searchFilter = (goods, value) => {\r\n\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\n\r\n// Фильтрация товаров по категориям\r\nconst categoryFilter = (goods, value) => {\r\n\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === value;\r\n    })\r\n}\r\n\r\n// Фильтрация товаров по цене\r\nconst priceFilter = (goods, min, max) => {\r\n\r\n    return goods.filter((goodsItem) => {\r\n        if (min === '' && max === '') {\r\n            return goodsItem;\r\n        } else if (min !== '' && max !== '') {\r\n            return goodsItem.price > +min && goodsItem.price < +max;\r\n        } else if (min !== '' && max === '') {\r\n            return goodsItem.price > +min;\r\n        } else if (min === '' && max !== '') {\r\n            return goodsItem.price < +max;\r\n        }\r\n    })\r\n}\r\n\r\n// Фильтрация по акции\r\nconst hotSaleFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (value) {\r\n            return goodsItem.sale === true;\r\n        } else {\r\n            return goodsItem;\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/modules/search.js\");\n// Получение списка всех объектов(товаров) из БД\r\n\r\n\r\nconst getData = (str) => {\r\n    return fetch(\r\n        `https://o-zoneshop-default-rtdb.firebaseio.com/goods.json`\r\n    )\r\n    .then((response) => {\r\n        return response.json()\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData); \n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _putData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./putData */ \"./src/modules/putData.js\");\n/* harmony import */ var _deleteData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteData */ \"./src/modules/deleteData.js\");\n// Загрузка первоначальной страницы\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Добавление данных в БД\r\nconst postData = () => {\r\n    return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json', {\r\n            method: 'POST',\r\n            body: JSON.stringify({\r\n                id: 24,\r\n                title: \"Ведьмак 3\",\r\n                price: 3000,\r\n                sale: true,\r\n                img: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HmN6DtREtYb7xr4doYat3dBSCW3mrW7C1Q&usqp=CAU\",\r\n                category: \"Игры и софт\"\r\n            }),\r\n            headers: {\r\n                'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n        })\r\n        .then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/postDataCart.js":
/*!*************************************!*\
  !*** ./src/modules/postDataCart.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Отправка данных на сервер с выбранными товарами\r\nconst postDataCart = (cart) => {\r\n  return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n          method: 'POST',\r\n          body: JSON.stringify(cart),\r\n          headers: {\r\n              'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n      })\r\n      .then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postDataCart);\n\n//# sourceURL=webpack://ozon/./src/modules/postDataCart.js?");

/***/ }),

/***/ "./src/modules/prices.js":
/*!*******************************!*\
  !*** ./src/modules/prices.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n// Фильтрация товаров через блок фильтр\r\n\r\n\r\n\r\n\r\n// Фильтрация по цене\r\nconst prices = () => {\r\n    const priceInputMin = document.getElementById(\"min\");\r\n    const priceInputMax = document.getElementById(\"max\");\r\n\r\n    const checkboxInput = document.getElementById('discount-checkbox');\r\n    const checkboxSpan = document.querySelector('.filter-check_checkmark');\r\n\r\n    // Фильтрация по минимальном значении\r\n    priceInputMin.addEventListener('input', () => {\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value));\r\n        });\r\n    })\r\n\r\n    // Фильтрация по максимальном значении\r\n    priceInputMax.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value));\r\n        });\r\n    })\r\n\r\n    // Фильтрация по акции\r\n    checkboxInput.addEventListener('change', () => {\r\n        if (checkboxInput.checked) checkboxSpan.classList.add('checked');\r\n        else checkboxSpan.classList.remove('checked');\r\n    \r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), priceInputMin.value, priceInputMax.value))\r\n        });\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prices);\n\n//# sourceURL=webpack://ozon/./src/modules/prices.js?");

/***/ }),

/***/ "./src/modules/putData.js":
/*!********************************!*\
  !*** ./src/modules/putData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Редактирование данных в БД\r\nconst putData = () => {\r\n  return fetch('https://o-zoneshop-default-rtdb.firebaseio.com/goods.json/24', {\r\n          method: 'PUT',\r\n          body: JSON.stringify({\r\n              id: 24,\r\n              title: \"Ведьмак 3\",\r\n              price: 3000,\r\n              sale: true,\r\n              img: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HmN6DtREtYb7xr4doYat3dBSCW3mrW7C1Q&usqp=CAU\",\r\n              category: \"Игры и софт\"\r\n          }),\r\n          headers: {\r\n              'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n      })\r\n      .then((res) => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (putData);\n\n//# sourceURL=webpack://ozon/./src/modules/putData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Отображение товаров в корзине\r\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n  cartWrapper.innerHTML = '';\r\n\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML('beforeend', `\r\n    <div id=\"cart-empty\">\r\n      Ваша корзина пока пуста\r\n    </div>\r\n    `);\r\n  } else {\r\n    goods.forEach((goodsItem) => {\r\n      cartWrapper.insertAdjacentHTML('beforeend', `\r\n          <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n              <span class=\"card-img-top\"\r\n                style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n              <div class=\"card-price\">${goodsItem.price} ₴</div>\r\n              <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n              <button class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n          </div>\r\n      `);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Получение (отображение) объекта (товара) на странице\r\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods');\r\n\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = '';\r\n\r\n    goods.forEach((goodsItem) => {\r\n\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n            <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                    ${goodsItem.sale ? `<div class=\"card-sale\">🔥Hot Sale🔥</div>` : ''}\r\n                     <div class=\"card-img-wrapper\">\r\n                        <span class=\"card-img-top\"\r\n                            style=\"background-image: url('${goodsItem.img}')\"></span>\r\n                    </div>\r\n                    <div class=\"card-body justify-content-between\">\r\n                        <div class=\"card-price\">${goodsItem.price} ₴</div>\r\n                        <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                        <button class=\"btn btn-primary\">В корзину</button>\r\n                    </div>\r\n                </div>\t\t\t\t\r\n        \t</div>\r\n        `)\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n// Поиск товара через поисковую строку\r\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input');\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n        const value = event.target.value;\r\n\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

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