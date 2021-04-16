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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CounterInput.js":
/*!*****************************!*\
  !*** ./src/CounterInput.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 * @prop {HTMLLIElement} el
 * @prop {HTMLDivElement} disp
 * @prop {HTMLInputElement} answerElement
 */
class CounterInput {
	/**
	 * @param {HTMLLIElement} el 
	 */
	constructor (el) {
		this.el = el;
		this.disp = document.createElement('div');
		this.plugins = [];
		this.safeColor = '#00c541';
		this.errorColor = '#f55151';
		this.init();
	}
	
	init () {
		if(!this.el.querySelector(".char-counter")) {
			this.el.appendChild(this.createCharCounterElement());
		}
		this.answerElement.addEventListener('input', () => this.updateCounter());

		this.updateCounter ();
		this.el.querySelector(".char-counter").appendChild(this.disp);
	}

	plugin (Plugin) {
		const plugin = new Plugin(this);
		this.plugins.push(plugin);
		return this;
	}

	updateCounter () {
		this.plugins.every(pl => !pl.onChangeAnswer());
	}

	createCharCounterElement () {
		const charCounter = document.createElement("div");
		charCounter.classList.add("char-counter");
		return charCounter;
	}

	getAnsLength (text, value) {
		let template = {
			num: void 0,
			type: 0,
			length: value.length
		};
		if (/(\d+)字以内/.test(text)) {
			template.num = text.match(/([\d,]+)字以内/m)[1].replace(/,/g, '');
			template.type = 1;
		} else if (/([\d,]+)字程度/.test(text)) {
			template.num = text.match(/([\d,]+)字程度/m)[1].replace(/,/g, '');
			template.type = 2;
		} else if (/([\d,]+)文字/.test(text)) {
			template.num = text.match(/([\d,]+)文字/m)[1].replace(/,/g, '');
			template.type = 3;
		} else if (/(\d+)つ書/.test(text)) {
			template.num = text.match(/([\d,]+)つ書/m)[1].replace(/,/g, '');
			template.type = 3;
			template.length = value.split(/[,\s\n　、。]+/).filter(v => v != '').length;
		} else if (/([\d,]+)字/.test(text)) {
			template.num = text.match(/([\d,]+)字/m)[1].replace(/,/g, '');
			template.length = value.length;
		}
		if(template.num) template.num = Number(template.num);
		return template;
	}

	get answerElement () {
		return this.el.querySelector('.answers');
	}

	get qustionText () {
		return this.el.querySelector('.question').innerHTML;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (CounterInput);

/***/ }),

/***/ "./src/contentScript.js":
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CounterInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterInput */ "./src/CounterInput.js");


const fields = document.querySelectorAll(".section-item .exercise-item.type-descriptive");

for (let key=0;fields.length>key;key++) {
	new _CounterInput__WEBPACK_IMPORTED_MODULE_0__["default"](fields[key])
		.plugin();
	
}

/***/ })

/******/ });
//# sourceMappingURL=contentScript.js.map