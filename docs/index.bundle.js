/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/photographer.js":
/*!***************************************!*\
  !*** ./src/assets/js/photographer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Photographer": () => (/* binding */ Photographer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Photographer = /*#__PURE__*/function () {
  /**
   *
   * @param {Object} data
   * @param {number} data.id
   * @param {string} data.portrait
   * @param {string} data.name
   * @param {string} data.coutry
   * @param {string} data.city
   * @param {string} data.tagline
   * @param {string} data.price
   * @param {string} data.tags
   */
  function Photographer(data) {
    _classCallCheck(this, Photographer);

    this.id = data.id;
    this.image = new Image();
    this.image.src = "./assets/images/".concat(data.portrait);
    this.name = data.name;
    this.location = data.city + ' ' + data.country;
    this.slogan = data.tagline;
    this.price = data.price;
    this.tags = data.tags;
  }

  _createClass(Photographer, [{
    key: "identitySection",
    value: function identitySection() {
      var el = [{
        name: 'root',
        type: 'section',
        class: 'photographerIdentity',
        parent: 'main'
      }, {
        name: 'infos',
        type: 'div',
        class: 'photographerIdentity__infos',
        parent: 'root'
      }, {
        name: 'title',
        type: 'h2',
        class: 'photographerIdentity__title',
        parent: 'infos',
        content: this.name
      }, {
        name: 'text',
        type: 'div',
        class: 'photographerIdentity__text',
        parent: 'infos'
      }, {
        name: 'location',
        type: 'p',
        class: 'photographerIdentity__location',
        parent: 'text',
        content: this.location
      }, {
        name: 'slogan',
        type: 'p',
        class: 'photographerIdentity__slogan',
        parent: 'text',
        content: this.slogan
      }, {
        name: 'tagsList',
        type: 'div',
        class: 'photographerIdentity__tagsList',
        parent: 'infos'
      }, {
        name: 'contact',
        type: 'button',
        class: 'photographerIdentity__contact',
        parent: 'root',
        content: 'Contactez-moi'
      }, {
        name: 'imgContainer',
        type: 'div',
        class: 'photographerIdentity__imgContainer',
        parent: 'root'
      }, {
        name: 'img',
        type: 'img',
        class: 'photographerIdentity__img',
        parent: 'imgContainer',
        attributes: {
          src: this.image.src,
          alt: "portrait de ".concat(this.name)
        }
      }, {
        name: 'photographerIdentity__likesAndPrice',
        type: 'div',
        class: 'photographerIdentity__likesAndPrice',
        parent: 'root'
      }, {
        name: 'photographerIdentity__likes',
        type: 'span',
        class: 'photographerIdentity__likes',
        parent: 'photographerIdentity__likesAndPrice'
      }, {
        name: 'photographerIdentity__price',
        type: 'span',
        class: 'photographerIdentity__price',
        parent: 'photographerIdentity__likesAndPrice',
        content: "".concat(this.price, "\u20AC/jour")
      }];
      this.tags.forEach(function (tag) {
        var tagEl = {
          name: 'tag',
          type: 'a',
          class: 'photographerIdentity__lien',
          parent: 'tagsList',
          innerhtml: "<span class=\"sr-only\">".concat(tag, " </span> <span aria-hidden=\"true\">#").concat(tag, "</span>"),
          attributes: {
            href: 'index.html?filter=' + tag
          }
        };
        el.push(tagEl);
      });
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createComplexElement)(el);
    }
    /**
     *
     * @returns {HTMLElement} carte photographe
     */

  }, {
    key: "card",
    value: function card() {
      var el = [{
        name: 'root',
        type: 'article',
        class: 'photographerCard',
        parent: 'main'
      }, {
        name: 'link',
        type: 'a',
        class: 'photographerCard__link',
        parent: 'root',
        attributes: {
          href: "photographer.html?id=".concat(this.id),
          title: "d\xE9couvrez le travail de ".concat(this.name),
          ariaLabel: this.name
        }
      }, {
        name: 'imgContainer',
        type: 'div',
        class: 'photographerCard__imgContainer',
        parent: 'link'
      }, {
        name: 'img',
        type: 'img',
        class: 'photographerCard__img',
        attributes: {
          src: this.image.src,
          alt: ''
        },
        parent: 'imgContainer'
      }, {
        name: 'titre',
        type: 'h2',
        class: 'photographerCard__title',
        parent: 'link',
        content: this.name
      }, {
        name: 'infos',
        type: 'div',
        class: 'photographerCard__infos',
        parent: 'root'
      }, {
        name: 'location',
        type: 'p',
        class: 'photographerCard__location',
        parent: 'infos',
        content: this.location
      }, {
        name: 'slogan',
        type: 'p',
        class: 'photographerCard__slogan',
        parent: 'infos',
        content: this.slogan
      }, {
        name: 'tarif',
        type: 'p',
        class: 'photographerCard__tarif',
        parent: 'infos',
        content: this.price + '€'
      }, {
        name: 'tags',
        type: 'ul',
        class: 'photographerCard__tags',
        parent: 'root'
      }];
      this.tags.forEach(function (tag) {
        var tagLi = {
          name: tag,
          type: 'li',
          parent: 'tags'
        };
        el.push(tagLi);
        var tagA = {
          name: tag + 'link',
          type: 'a',
          class: 'photographerCard__tag',
          parent: tag,
          innerhtml: "<span class=\"sr-only\">".concat(tag, " </span> #<span aria-hidden=\"true\"> ").concat(tag, "</span>"),
          attributes: {
            href: 'index.html?filter=' + tag
          }
        };
        el.push(tagA);
      });
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createComplexElement)(el);
    }
  }]);

  return Photographer;
}();

/***/ }),

/***/ "./src/assets/js/utils.js":
/*!********************************!*\
  !*** ./src/assets/js/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlValue": () => (/* binding */ getUrlValue),
/* harmony export */   "importAll": () => (/* binding */ importAll),
/* harmony export */   "createComplexElement": () => (/* binding */ createComplexElement),
/* harmony export */   "createElementFromObject": () => (/* binding */ createElementFromObject),
/* harmony export */   "findFocusableElements": () => (/* binding */ findFocusableElements)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @param {string} name -- nom de la valeur à rechercher dans l'url
 * @returns {string} value
 */
function getUrlValue(name) {
  var parsedUrl = new URL(window.location.href);
  return parsedUrl.searchParams.get(name);
}
/**
 * Importe une série de fichiers 
 * @param {function} r 
 * @returns {Array.<string>} images - Liens vers les fichiers
 */

function importAll(r) {
  var images = {};
  r.keys().forEach(function (item, index) {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}
/**
 * Crée des éléments Html qui peuvent être liés entre eux à partir d'un tableau d'objet
 * @param {Object[]} arr 
 * @param {String} arr[].name 
 * @param {String} arr[].parent 
 * @param {String} arr[].class 
 * @param {String} arr[].type
 * @param {Object} arr[].attributes 
 * @returns HtmlElement
 */

function createComplexElement(arr) {
  var newArr = [];
  arr.forEach(function (obj) {
    var newObj = {};
    newObj.DOMelement = createElementFromObject(obj);
    newObj.name = obj.name;
    newObj.parent = obj.parent;
    var papa = newArr.find(function (el) {
      return el.name === obj.parent;
    });

    if (papa) {
      papa.DOMelement.appendChild(newObj.DOMelement);
    }

    newArr.push(newObj);
  });
  return newArr.find(function (el) {
    return el.parent === 'main';
  }).DOMelement;
}
/**
 * Crée un élément Html à partir d'un objet
 * @param {Object} obj 
 * @param {String} obj.name 
 * @param {String} obj.parent 
 * @param {String} obj.class 
 * @param {String} obj.type
 * @param {String} obj.content
 * @param {String} obj.innerhtml
 * @param {Object} obj.attributes 
 * @returns HtmlElement
 */

function createElementFromObject(obj) {
  var el = document.createElement(obj.type) || document.createElement('div');
  el.className = obj.class || '';
  var attributes = obj.attributes || [];

  for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var data = camelCaseParser(key);
    el.setAttribute(data, value);
  }

  if (obj.content) el.appendChild(document.createTextNode(obj.content));
  if (obj.innerhtml) el.innerHTML = obj.innerhtml;
  return el;
}
/**
 * 
 * @param {string} text - text en camelCase
 * @returns {string}
 */

function camelCaseParser(text) {
  var result = text.replace(/([A-Z])/g, '-$1');
  var finalResult = result.charAt(0) + result.slice(1).toLowerCase();
  return finalResult;
}
/**
 * 
 * @param {HTMLelement} element - element parent dans lequel chercher les éléments focusables
 * @returns {Array.<HTMLelement>}
 */


function findFocusableElements(element) {
  return element.querySelectorAll("\n      a[href],\n      input:not([disabled]),\n      select:not([disabled]),\n      textarea:not([disabled]),\n      button:not([disabled]),\n      [tabindex=\"0\"],\n      [tabindex=\"1\"],\n      .ember-power-select-trigger\n    ");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg> */ "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.preload {\n  transition: none !important;\n}\n\nbody {\n  font-family: \"DM Sans\", sans-serif;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n.header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 86%;\n  margin: 0 auto 0 auto;\n  gap: 2rem;\n  padding: 3rem 0;\n}\n.header__logo {\n  height: 2.35rem;\n}\n.header__logo img {\n  height: 100%;\n}\n.header__logo:focus img, .header__logo:hover img {\n  filter: drop-shadow(2px 2px 0px black);\n}\n.header__hiddenlink {\n  position: absolute;\n  top: -1000px;\n  left: 50%;\n  background: #DB8876;\n  color: black;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.3125rem;\n}\n.header__hiddenlink:focus {\n  top: 0.5rem;\n}\n\n@media (max-width: 1340px) {\n  .nav {\n    width: 100%;\n  }\n}\n.nav__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem 0.3125rem;\n}\n.nav__tag a {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.nav__tag a:hover, .nav__tag a:focus {\n  background: #901C1C;\n  color: white;\n}\n\n.main__title {\n  position: absolute;\n  top: calc(4.175rem - 2vw);\n  right: 3%;\n  font-size: 2.5vw;\n  color: #901C1C;\n}\n@media (max-width: 900px) {\n  .main__title {\n    top: 3.5rem;\n    font-size: 0.875rem;\n  }\n}\n.main__photographers {\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-content: center;\n  gap: 3rem;\n  margin-bottom: 5rem;\n}\n@media (max-width: 900px) {\n  .main__photographers {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .main__photographers {\n    grid-template-columns: 100%;\n  }\n}\n\n.photographerCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link:hover .photographerCard__title, .photographerCard__link:focus .photographerCard__title {\n  color: #901C1C;\n}\n.photographerCard__link:hover .photographerCard__img, .photographerCard__link:focus .photographerCard__img {\n  transform: scale(1.02);\n}\n.photographerCard__imgContainer {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerCard__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.photographerCard__title {\n  color: #D3573C;\n  text-align: center;\n  font-size: 2.25rem;\n}\n.photographerCard__infos {\n  text-align: center;\n  line-height: 1.5;\n}\n.photographerCard__slogan {\n  color: black;\n}\n.photographerCard__location {\n  color: #901C1C;\n}\n.photographerCard__tarif {\n  color: #757575;\n}\n.photographerCard__tags {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem 0.3125rem;\n  margin: 0.325rem;\n}\n.photographerCard__tag {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerCard__tag:hover, .photographerCard__tag:focus {\n  background: #901C1C;\n  color: white;\n}\n\n.photographerIdentity {\n  display: flex;\n  gap: 1rem;\n  background: #FAFAFA;\n  align-items: flex-start;\n  width: 86%;\n  margin: auto;\n  padding: 4rem 3.125rem 4rem 2rem;\n}\n.photographerIdentity__infos {\n  max-width: 50%;\n}\n.photographerIdentity__title {\n  font-size: 4rem;\n  line-height: 1;\n  color: #D3573C;\n}\n.photographerIdentity__text {\n  line-height: 2;\n}\n.photographerIdentity__location {\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.photographerIdentity__slogan {\n  color: #525252;\n}\n.photographerIdentity__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.9rem;\n  gap: 0.625rem 0.3125rem;\n}\n.photographerIdentity__lien {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerIdentity__lien:hover, .photographerIdentity__lien:focus {\n  background: #901C1C;\n  color: white;\n}\n.photographerIdentity__contact {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  z-index: 10;\n}\n.photographerIdentity__contact:hover, .photographerIdentity__contact:focus {\n  background: #D3573C;\n  color: black;\n}\n.photographerIdentity__imgContainer {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerIdentity__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.photographerIdentity__likesAndPrice {\n  position: fixed;\n  bottom: 0;\n  right: 2rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 4rem;\n  padding: 2rem 1.3125rem;\n  background: #DB8876;\n  color: black;\n  font-size: 1.5rem;\n  font-weight: 500;\n  border-radius: 0.3125rem 0.3125rem 0 0;\n}\n@media (max-width: 960px) {\n  .photographerIdentity__title {\n    font-size: 2.25rem;\n  }\n  .photographerIdentity__location, .photographerIdentity__slogan, .photographerIdentity__lien {\n    font-size: 0.8125rem;\n  }\n  .photographerIdentity__contact {\n    position: fixed;\n    left: 50%;\n    bottom: 2rem;\n    transform: translateX(-50%);\n    padding: 0.3125rem 1rem;\n    font-size: 1rem;\n  }\n  .photographerIdentity__imgContainer {\n    width: 100px;\n    height: 100px;\n  }\n  .photographerIdentity__likesAndPrice {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .photographerIdentity {\n    width: 100%;\n    padding: 4rem 1.25rem 4rem 1.25rem;\n    background: transparent;\n  }\n  .photographerIdentity__infos {\n    max-width: 75%;\n  }\n  .photographerIdentity__imgContainer {\n    position: absolute;\n    right: 5vw;\n  }\n}\n\n.selectStyled {\n  width: 86%;\n  margin: 0.5rem auto 0 auto;\n  /* Add the focus states too, They matter, always! */\n}\n@media (max-width: 800px) {\n  .selectStyled {\n    display: none;\n  }\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom {\n  position: relative;\n  width: 11rem;\n  height: 3rem;\n  font-weight: 700;\n}\n.selectStyled .selectCustom {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n@media (hover: hover) {\n  .selectStyled .selectCustom {\n    display: block;\n  }\n  .selectStyled .selectNative:focus + .selectCustom {\n    display: none;\n  }\n}\n.selectStyled .select {\n  position: relative;\n}\n.selectStyled .selectLabel {\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n  margin-right: 1.5rem;\n}\n.selectStyled .selectWrapper {\n  position: relative;\n  display: inline-block;\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom-trigger {\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  border-radius: 0.4rem;\n}\n.selectStyled .selectNative {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position-x: 100%;\n  background-position-y: 0.8rem;\n  padding: 0rem 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger {\n  border-radius: 0.4rem 0.4rem 0 0;\n}\n.selectStyled .selectCustom-trigger {\n  position: relative;\n  height: 100%;\n  background: #901C1C;\n  color: white;\n  padding: 0 0.8rem;\n  line-height: 3rem;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-trigger::after {\n  content: \"˄\";\n  position: absolute;\n  top: 0;\n  right: 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger::after {\n  content: \"˅\";\n}\n.selectStyled .selectCustom-trigger:hover {\n  background: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-options {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  display: none;\n}\n.selectStyled .selectCustom.isActive .selectCustom-options {\n  display: block;\n}\n.selectStyled .selectCustom-option {\n  position: relative;\n  padding: 0.8rem;\n  padding-left: 2.5rem;\n  background: #901C1C;\n  color: white;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-option:last-of-type {\n  border-radius: 0 0 0.4rem 0.4rem;\n}\n.selectStyled .selectCustom-option.isHover,\n.selectStyled .selectCustom-option:hover {\n  background-color: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-option:not(:last-of-type)::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  border-bottom: 1px solid white;\n}\n.selectStyled .selectCustom-option.isActive::before {\n  content: \"✓\";\n  position: absolute;\n  left: 0.8rem;\n}\n\n.mediasContainer {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  width: 100%;\n  gap: 1rem 6rem;\n  width: 86%;\n  margin: 3.625rem auto 0 auto;\n}\n@media (max-width: 1250px) {\n  .mediasContainer {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .mediasContainer {\n    grid-template-columns: 1fr;\n  }\n}\n\n.mediaCard {\n  width: 100%;\n}\n.mediaCard__imgContainer {\n  display: block;\n  width: 100%;\n  height: 300px;\n  border-radius: 0.3125rem;\n  overflow: hidden;\n  cursor: pointer;\n}\n.mediaCard__imgContainer:hover .mediaCard__media, .mediaCard__imgContainer:focus .mediaCard__media {\n  transform: scale(1.02);\n}\n.mediaCard__media {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.mediaCard__infos {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  line-height: 2;\n  color: #901C1C;\n}\n.mediaCard__title {\n  font-weight: 400;\n  line-height: 1;\n}\n.mediaCard__likes {\n  font-style: normal;\n  margin-left: auto;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #901C1C;\n  transition: color 0.3s ease-out;\n}\n.mediaCard__likes:hover, .mediaCard__likes:focus {\n  color: #D3573C;\n}\n\n.dialog {\n  display: grid;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(196, 196, 196, 0.4);\n  place-items: center;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateY(-2rem);\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.dialog.visible {\n  pointer-events: visible;\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.dialogForm {\n  position: relative;\n  padding: 0 2.1875rem;\n  background: #DB8876;\n  border-radius: 0.3125rem;\n  width: 46%;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.dialogForm__title {\n  font-size: 4rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.dialogForm__label, .dialogForm__input {\n  display: block;\n  font-size: 2.25rem;\n  border-radius: 0.3125rem;\n  width: 100%;\n  outline: 0;\n  border: 0;\n}\n.dialogForm__input:focus:invalid {\n  outline: none;\n}\n.dialogForm__submit {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  display: block;\n  margin: 1.625rem 0 1rem 0;\n}\n.dialogForm__submit:hover, .dialogForm__submit:focus {\n  background: #D3573C;\n  color: black;\n}\n.dialogForm__close {\n  display: grid;\n  position: absolute;\n  top: 2rem;\n  right: 2.1875rem;\n  color: white;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  width: 2rem;\n}\n.dialogForm__close img {\n  width: 100%;\n}\n@media (max-width: 1250px) {\n  .dialogForm__title {\n    font-size: 2rem;\n  }\n  .dialogForm__label, .dialogForm__input {\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n  .dialogForm__close {\n    top: 1rem;\n    width: 1rem;\n  }\n}\n@media (max-width: 700px) {\n  .dialogForm {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n  }\n  .dialogForm__close {\n    top: 2rem;\n    right: 1rem;\n  }\n}\n\n.carousel {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: white;\n  opacity: 0;\n  transform: translate3d(0, -2rem, 0);\n  pointer-events: none;\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.carousel.visible {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  pointer-events: visible;\n}\n.carousel__container {\n  display: grid;\n  height: 90%;\n  grid-template-columns: 1fr 10fr 1fr;\n  grid-template-rows: 1fr 5fr 2rem;\n  grid-template-areas: \". frame close\" \"prev frame next\" \". legend .\";\n}\n.carousel__frame {\n  grid-area: frame;\n  position: relative;\n  list-style: none;\n  place-self: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.carousel__legend {\n  grid-area: legend;\n  place-self: center flex-start;\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.carousel__prev, .carousel__next {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: grid;\n  place-items: center;\n  font-size: 4rem;\n  color: #901C1C;\n  font-weight: 700;\n  text-decoration: none;\n}\n.carousel__prev {\n  grid-area: prev;\n}\n.carousel__prev:hover, .carousel__prev:focus {\n  color: #D3573C;\n}\n.carousel__next {\n  grid-area: next;\n}\n.carousel__next:hover, .carousel__next:focus {\n  color: #D3573C;\n}\n.carousel__close {\n  grid-area: close;\n  display: grid;\n  place-items: center;\n  z-index: 2;\n  background: none;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  width: 3rem;\n  height: 3rem;\n}\n.carousel__close img {\n  height: 2rem;\n}\n.carousel__close:hover img, .carousel__close:focus img {\n  filter: invert(42%) sepia(73%) saturate(690%) hue-rotate(327deg) brightness(88%) contrast(88%);\n}\n.carousel__close:focus {\n  outline: 2px solid black;\n}\n.carousel__item {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.carousel__media {\n  object-fit: cover;\n  width: 100%;\n  max-height: 100%;\n}\n\n@keyframes vanish {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes emerge {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}\nbody {\n  font-family: \"DM Sans\", sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/bases/_bases.scss","webpack://./src/assets/scss/blocs/_header.scss","webpack://./src/assets/scss/utils/_variables.scss","webpack://./src/assets/scss/utils/_mixins.scss","webpack://./src/assets/scss/blocs/_main.scss","webpack://./src/assets/scss/blocs/_photographerCard.scss","webpack://./src/assets/scss/blocs/_photographerIdentity.scss","webpack://./src/assets/scss/blocs/_select.scss","webpack://./src/assets/scss/blocs/_mediaCard.scss","webpack://./src/assets/scss/blocs/_dialog.scss","webpack://./src/assets/scss/blocs/_carousel.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'utils/variables';\r\n@import 'utils/mixins';\r\n@import 'bases/bases';\r\n@import 'blocs/header';\r\n@import 'blocs/main';\r\n@import 'blocs/photographerCard';\r\n\r\n@import 'blocs/mainPhotographer';\r\n@import 'blocs/photographerIdentity';\r\n@import 'blocs/select';\r\n@import 'blocs/mediaCard';\r\n@import 'blocs/dialog';\r\n@import 'blocs/carousel';\r\nbody {\r\n  font-family: 'DM Sans', sans-serif;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.preload {\r\n  transition: none !important;\r\n}\r\nbody {\r\n  font-family: 'DM Sans', sans-serif;\r\n}\r\n.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap; /* added line */\r\n  border: 0;\r\n}\r\n",".header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  width: 86%;\r\n  margin: 0 auto 0 auto;\r\n  gap: 2rem;\r\n  padding: 3rem 0;\r\n  &__logo {\r\n    height: 2.35rem;\r\n    img {\r\n      height: 100%;\r\n    }\r\n  }\r\n  &__logo:focus img,\r\n  &__logo:hover img {\r\n    filter: drop-shadow(2px 2px 0px black);\r\n  }\r\n\r\n  &__hiddenlink {\r\n    position: absolute;\r\n    top: -1000px;\r\n    left: 50%;\r\n    background: $secondary-4;\r\n    color: black;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    padding: 0.3rem 0.5rem;\r\n    border-radius: 0.3125rem;\r\n    &:focus {\r\n      top: 0.5rem;\r\n    }\r\n  }\r\n}\r\n.nav {\r\n  @media (max-width: 1340px) {\r\n    width: 100%;\r\n  }\r\n  &__tagsList {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 1rem 0.3125rem;\r\n  }\r\n  &__tag {\r\n    // margin: 0 0.3125rem 0.3125rem 0;\r\n    a {\r\n      @include tag;\r\n    }\r\n  }\r\n}\r\n","$primary-1:#901C1C;\r\n$primary-2:#D3573C;\r\n\r\n$secondary-1:#525252;\r\n$secondary-2:#FAFAFA;\r\n$secondary-3:#901C1C;\r\n$secondary-4:#DB8876;","@mixin tag {\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 0.6875rem;\r\n  padding: 0.1rem 0.5rem;\r\n  color: $primary-1;\r\n  font-weight: 500;\r\n  transition: color 0.3s, background-color 0.3s;\r\n  &:hover,\r\n  &:focus {\r\n    background: $primary-1;\r\n    color: white;\r\n  }\r\n}\r\n\r\n@mixin btn {\r\n  width: 170px;\r\n  height: 69px;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  border-radius: 0.3125rem;\r\n  background: $primary-1;\r\n  color: white;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  transition: color 0.3s, background-color 0.3s;\r\n  &:hover,\r\n  &:focus {\r\n    background: $primary-2;\r\n    color: black;\r\n  }\r\n}\r\n",".main {\r\n  &__title {\r\n    position: absolute;\r\n    top: calc(4.175rem - 2vw);\r\n    right: 3%;\r\n    font-size: 2.5vw;\r\n    color: $primary-1;\r\n\r\n    @media (max-width: 900px) {\r\n      top: 3.5rem;\r\n      font-size: 0.875rem;\r\n    }\r\n  }\r\n  &__photographers {\r\n    max-width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    place-content: center;\r\n    gap: 3rem;\r\n    margin-bottom: 5rem;\r\n    @media (max-width: 900px) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    @media (max-width: 500px) {\r\n      grid-template-columns: 100%;\r\n    }\r\n  }\r\n}\r\n",".photographerCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  &__link {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    &:hover .photographerCard__title,\r\n    &:focus .photographerCard__title {\r\n      color: $primary-1;\r\n    }\r\n    &:hover .photographerCard__img,\r\n    &:focus .photographerCard__img {\r\n      transform: scale(1.02);\r\n    }\r\n  }\r\n  &__imgContainer {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 12px 0 #00000040;\r\n  }\r\n  &__img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: transform 0.3s ease-out;\r\n  }\r\n  &__title {\r\n    color: $primary-2;\r\n    text-align: center;\r\n    font-size: 2.25rem;\r\n  }\r\n  &__infos {\r\n    text-align: center;\r\n    line-height: 1.5;\r\n  }\r\n  &__slogan {\r\n    color: black;\r\n  }\r\n  &__location {\r\n    color: $primary-1;\r\n  }\r\n  &__tarif {\r\n    color: #757575;\r\n  }\r\n  &__tags {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 1rem 0.3125rem;\r\n    margin: 0.325rem;\r\n  }\r\n  &__tag {\r\n    @include tag;\r\n  }\r\n}\r\n",".photographerIdentity {\r\n  display: flex;\r\n  gap: 1rem;\r\n  background: $secondary-2;\r\n  align-items: flex-start;\r\n  width: 86%;\r\n  margin: auto;\r\n  padding: 4rem 3.125rem 4rem 2rem;\r\n  &__infos {\r\n    max-width: 50%;\r\n  }\r\n  &__title {\r\n    font-size: 4rem;\r\n    line-height: 1;\r\n    color: $primary-2;\r\n  }\r\n  &__text {\r\n    line-height: 2;\r\n  }\r\n  &__location {\r\n    font-size: 1.5rem;\r\n    color: $primary-1;\r\n  }\r\n  &__slogan {\r\n    color: $secondary-1;\r\n  }\r\n  &__tagsList {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 0.9rem;\r\n    gap: 0.625rem 0.3125rem;\r\n  }\r\n  &__lien {\r\n    @include tag;\r\n  }\r\n  &__contact {\r\n    @include btn;\r\n    z-index: 10;\r\n  }\r\n  &__imgContainer {\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    flex-shrink: 0;\r\n    box-shadow: 0 4px 12px 0 #00000040;\r\n  }\r\n  &__img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  &__likesAndPrice {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 2rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 4rem;\r\n    padding: 2rem 1.3125rem;\r\n    background: $secondary-4;\r\n    color: black;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    border-radius: 0.3125rem 0.3125rem 0 0;\r\n  }\r\n  @media (max-width: 960px) {\r\n    &__title {\r\n      font-size: 2.25rem;\r\n    }\r\n    &__location,\r\n    &__slogan,\r\n    &__lien {\r\n      font-size: 0.8125rem;\r\n    }\r\n    &__contact {\r\n      position: fixed;\r\n      left: 50%;\r\n      bottom: 2rem;\r\n      transform: translateX(-50%);\r\n      padding: 0.3125rem 1rem;\r\n      font-size: 1rem;\r\n    }\r\n    &__imgContainer {\r\n      width: 100px;\r\n      height: 100px;\r\n    }\r\n    &__likesAndPrice {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    width: 100%;\r\n    padding: 4rem 1.25rem 4rem 1.25rem;\r\n    background: transparent;\r\n    &__infos {\r\n      max-width: 75%;\r\n    }\r\n    &__imgContainer {\r\n      position: absolute;\r\n      right: 5vw;\r\n    }\r\n  }\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');\r\n\r\n.selectStyled {\r\n  width: 86%;\r\n  margin: 0.5rem auto 0 auto;\r\n  @media (max-width: 800px) {\r\n    display: none;\r\n  }\r\n  // Both native and custom selects must have the same width/height.\r\n  .selectNative,\r\n  .selectCustom {\r\n    position: relative;\r\n    width: 11rem;\r\n    height: 3rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  // Make sure the custom select does not mess with the layout\r\n  .selectCustom {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n  }\r\n\r\n  // This media query detects devices where the primary\r\n  // input mechanism can hover over elements. (e.g. computers with a mouse)\r\n  @media (hover: hover) {\r\n    // Since we are using a mouse, it's safe to show the custom select.\r\n    .selectCustom {\r\n      display: block;\r\n    }\r\n\r\n    // In a computer using keyboard? Then let's hide back the custom select\r\n    // while the native one is focused:\r\n    .selectNative:focus + .selectCustom {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  /* Add the focus states too, They matter, always! */\r\n  // .selectNative:focus {\r\n  //   box-shadow: $primary-2 0 0 0 2px;\r\n  // }\r\n\r\n  //\r\n  // Rest of the styles to create the custom select.\r\n  // Just make sure the native and the custom have a similar \"box\" (the trigger).\r\n  //\r\n\r\n  .select {\r\n    position: relative;\r\n  }\r\n\r\n  .selectLabel {\r\n    font-weight: bold;\r\n    margin-bottom: 0.4rem;\r\n    margin-right: 1.5rem;\r\n  }\r\n\r\n  .selectWrapper {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  .selectNative,\r\n  .selectCustom-trigger {\r\n    background: $primary-1;\r\n    color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    border-radius: 0.4rem;\r\n  }\r\n\r\n  .selectNative {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    background-image: url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\r\n    background-repeat: no-repeat;\r\n    background-position-x: 100%;\r\n    background-position-y: 0.8rem;\r\n    padding: 0rem 0.8rem;\r\n  }\r\n\r\n  .selectCustom.isActive .selectCustom-trigger {\r\n    border-radius: 0.4rem 0.4rem 0 0;\r\n  }\r\n\r\n  .selectCustom-trigger {\r\n    position: relative;\r\n    height: 100%;\r\n    background: $primary-1;\r\n    color: white;\r\n    padding: 0 0.8rem;\r\n    line-height: 3rem;\r\n    cursor: pointer;\r\n    transition: color 0.3s, background-color 0.3s;\r\n  }\r\n\r\n  .selectCustom-trigger::after {\r\n    content: '˄';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0.8rem;\r\n  }\r\n  .selectCustom.isActive .selectCustom-trigger::after {\r\n    content: '˅';\r\n  }\r\n\r\n  .selectCustom-trigger:hover {\r\n    background: $primary-2;\r\n    color: black;\r\n  }\r\n\r\n  .selectCustom-options {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n    display: none;\r\n  }\r\n\r\n  .selectCustom.isActive .selectCustom-options {\r\n    display: block;\r\n  }\r\n\r\n  .selectCustom-option {\r\n    position: relative;\r\n    padding: 0.8rem;\r\n    padding-left: 2.5rem;\r\n    background: $primary-1;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: color 0.3s, background-color 0.3s;\r\n  }\r\n  .selectCustom-option:last-of-type {\r\n    border-radius: 0 0 0.4rem 0.4rem;\r\n  }\r\n\r\n  .selectCustom-option.isHover,\r\n  .selectCustom-option:hover {\r\n    background-color: $primary-2; // contrast AA\r\n    color: black;\r\n  }\r\n\r\n  .selectCustom-option:not(:last-of-type)::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 90%;\r\n    border-bottom: 1px solid white;\r\n  }\r\n\r\n  .selectCustom-option.isActive::before {\r\n    content: '✓';\r\n    position: absolute;\r\n    left: 0.8rem;\r\n  }\r\n}\r\n",".mediasContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  justify-items: center;\r\n  width: 100%;\r\n  gap: 1rem 6rem;\r\n  width: 86%;\r\n  margin: 3.625rem auto 0 auto;\r\n  @media (max-width: 1250px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  @media (max-width: 900px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n.mediaCard {\r\n  width: 100%;\r\n  &__imgContainer {\r\n    display: block;\r\n    width: 100%;\r\n    height: 300px;\r\n    border-radius: 0.3125rem;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    &:hover .mediaCard__media,\r\n    &:focus .mediaCard__media {\r\n      transform: scale(1.02);\r\n    }\r\n  }\r\n  &__media {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: transform 0.3s ease-out;\r\n  }\r\n  &__infos {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    line-height: 2;\r\n    color: $primary-1;\r\n  }\r\n  &__title {\r\n    font-weight: 400;\r\n    line-height: 1;\r\n  }\r\n  &__likes {\r\n    font-style: normal;\r\n    margin-left: auto;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    color: $primary-1;\r\n    transition: color 0.3s ease-out;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n}\r\n",".dialog {\r\n  display: grid;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(196, 196, 196, 0.4);\r\n  place-items: center;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transform: translateY(-2rem);\r\n  z-index: 20;\r\n  transition: transform 0.3s, opacity 0.3s;\r\n  &.visible {\r\n    pointer-events: visible;\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.dialogForm {\r\n  position: relative;\r\n  padding: 0 2.1875rem;\r\n  background: $secondary-4;\r\n  border-radius: 0.3125rem;\r\n  width: 46%;\r\n  max-height: 100%;\r\n  overflow-y: auto;\r\n  &__title {\r\n    font-size: 4rem;\r\n    font-weight: 400;\r\n    margin-bottom: 1rem;\r\n  }\r\n  &__label,\r\n  &__input {\r\n    display: block;\r\n    font-size: 2.25rem;\r\n    border-radius: 0.3125rem;\r\n    width: 100%;\r\n    outline: 0;\r\n    border: 0;\r\n  }\r\n  &__input:invalid {\r\n    // box-shadow: 0 0px 2px 3px red;\r\n  }\r\n\r\n  &__input:focus:invalid {\r\n    outline: none;\r\n  }\r\n  &__submit {\r\n    @include btn;\r\n    display: block;\r\n    margin: 1.625rem 0 1rem 0;\r\n  }\r\n  &__close {\r\n    display: grid;\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2.1875rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n    outline: 0;\r\n    width: 2rem;\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n  @media (max-width: 1250px) {\r\n    &__title {\r\n      font-size: 2rem;\r\n    }\r\n    &__label,\r\n    &__input {\r\n      font-size: 1.5rem;\r\n      line-height: 1.5;\r\n    }\r\n    &__close {\r\n      top: 1rem;\r\n      width: 1rem;\r\n    }\r\n  }\r\n  @media (max-width: 700px) {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n    &__close {\r\n      top: 2rem;\r\n      right: 1rem;\r\n    }\r\n  }\r\n}\r\n",".carousel {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: grid;\r\n  place-items: center;\r\n  background: white;\r\n  opacity: 0;\r\n  transform: translate3d(0, -2rem, 0);\r\n  pointer-events: none;\r\n  z-index: 20;\r\n  transition: transform 0.3s, opacity 0.3s;\r\n  &.visible {\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n    pointer-events: visible;\r\n  }\r\n  &__container {\r\n    display: grid;\r\n    height: 90%;\r\n    grid-template-columns: 1fr 10fr 1fr;\r\n    grid-template-rows: 1fr 5fr 2rem;\r\n    grid-template-areas:\r\n      '. frame close'\r\n      'prev frame next'\r\n      '. legend .';\r\n  }\r\n  &__frame {\r\n    grid-area: frame;\r\n    position: relative;\r\n    list-style: none;\r\n    place-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  &__legend {\r\n    grid-area: legend;\r\n    place-self: center flex-start;\r\n    font-size: 1.5rem;\r\n    color: $primary-1;\r\n  }\r\n  &__prev,\r\n  &__next {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 4rem;\r\n    color: $primary-1;\r\n    font-weight: 700;\r\n\r\n    text-decoration: none;\r\n  }\r\n  &__prev {\r\n    grid-area: prev;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n  &__next {\r\n    grid-area: next;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n  &__close {\r\n    grid-area: close;\r\n    display: grid;\r\n    place-items: center;\r\n    z-index: 2;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    img {\r\n      height: 2rem;\r\n    }\r\n    &:hover img,\r\n    &:focus img {\r\n      filter: invert(42%) sepia(73%) saturate(690%) hue-rotate(327deg)\r\n        brightness(88%) contrast(88%);\r\n    }\r\n    &:focus {\r\n      outline: 2px solid black;\r\n    }\r\n  }\r\n  &__item {\r\n    position: absolute;\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100%;\r\n  }\r\n  &__media {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    max-height: 100%;\r\n  }\r\n}\r\n@keyframes vanish {\r\n  0% {\r\n    opacity: 100%;\r\n  }\r\n  100% {\r\n    opacity: 0%;\r\n  }\r\n}\r\n@keyframes emerge {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images sync \\.(png|jpe?g|svg)$":
/*!*****************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Animals_Majesty.jpg": "./src/assets/images/Animals_Majesty.jpg",
	"./Animals_Rainbow.jpg": "./src/assets/images/Animals_Rainbow.jpg",
	"./Architecture_Connected_Curves.jpg": "./src/assets/images/Architecture_Connected_Curves.jpg",
	"./Architecture_Contrast.jpg": "./src/assets/images/Architecture_Contrast.jpg",
	"./Architecture_Corner_Room.jpg": "./src/assets/images/Architecture_Corner_Room.jpg",
	"./Architecture_Cross_Bar.jpg": "./src/assets/images/Architecture_Cross_Bar.jpg",
	"./Architecture_Dome.jpg": "./src/assets/images/Architecture_Dome.jpg",
	"./Architecture_Horseshoe.jpg": "./src/assets/images/Architecture_Horseshoe.jpg",
	"./Architecture_On_a_hill.jpg": "./src/assets/images/Architecture_On_a_hill.jpg",
	"./Architecture_Water_on_Modern.jpg": "./src/assets/images/Architecture_Water_on_Modern.jpg",
	"./Architecture_White_Light.jpg": "./src/assets/images/Architecture_White_Light.jpg",
	"./Art_Mine.jpg": "./src/assets/images/Art_Mine.jpg",
	"./Art_Purple_light.jpg": "./src/assets/images/Art_Purple_light.jpg",
	"./Art_Triangle_Man.jpg": "./src/assets/images/Art_Triangle_Man.jpg",
	"./EllieRoseWilkens.jpg": "./src/assets/images/EllieRoseWilkens.jpg",
	"./Event_18thAnniversary.jpg": "./src/assets/images/Event_18thAnniversary.jpg",
	"./Event_BenevidesWedding.jpg": "./src/assets/images/Event_BenevidesWedding.jpg",
	"./Event_Emcee.jpg": "./src/assets/images/Event_Emcee.jpg",
	"./Event_KeyboardCheck.jpg": "./src/assets/images/Event_KeyboardCheck.jpg",
	"./Event_PintoWedding.jpg": "./src/assets/images/Event_PintoWedding.jpg",
	"./Event_ProductPitch.jpg": "./src/assets/images/Event_ProductPitch.jpg",
	"./Event_SeasideWedding.jpg": "./src/assets/images/Event_SeasideWedding.jpg",
	"./Event_Sparklers.jpg": "./src/assets/images/Event_Sparklers.jpg",
	"./Event_VentureConference.jpg": "./src/assets/images/Event_VentureConference.jpg",
	"./Event_WeddingGazebo.jpg": "./src/assets/images/Event_WeddingGazebo.jpg",
	"./Fashion_Melody_Red_on_Stripes.jpg": "./src/assets/images/Fashion_Melody_Red_on_Stripes.jpg",
	"./Fashion_Pattern_on_Pattern.jpg": "./src/assets/images/Fashion_Pattern_on_Pattern.jpg",
	"./Fashion_Urban_Jungle.jpg": "./src/assets/images/Fashion_Urban_Jungle.jpg",
	"./Fashion_Wings.jpg": "./src/assets/images/Fashion_Wings.jpg",
	"./Fashion_Yellow_Beach.jpg": "./src/assets/images/Fashion_Yellow_Beach.jpg",
	"./MarcelNikolic.jpg": "./src/assets/images/MarcelNikolic.jpg",
	"./MimiKeel.jpg": "./src/assets/images/MimiKeel.jpg",
	"./NabeelBradford.jpg": "./src/assets/images/NabeelBradford.jpg",
	"./Portrait_AfternoonBreak.jpg": "./src/assets/images/Portrait_AfternoonBreak.jpg",
	"./Portrait_Alexandra.jpg": "./src/assets/images/Portrait_Alexandra.jpg",
	"./Portrait_Background.jpg": "./src/assets/images/Portrait_Background.jpg",
	"./Portrait_Nora.jpg": "./src/assets/images/Portrait_Nora.jpg",
	"./Portrait_Shaw.jpg": "./src/assets/images/Portrait_Shaw.jpg",
	"./Portrait_Sunkissed.jpg": "./src/assets/images/Portrait_Sunkissed.jpg",
	"./Portrait_Wednesday.jpg": "./src/assets/images/Portrait_Wednesday.jpg",
	"./RhodeDubois.jpg": "./src/assets/images/RhodeDubois.jpg",
	"./Sport_2000_with_8.jpg": "./src/assets/images/Sport_2000_with_8.jpg",
	"./Sport_Butterfly.jpg": "./src/assets/images/Sport_Butterfly.jpg",
	"./Sport_Jump.jpg": "./src/assets/images/Sport_Jump.jpg",
	"./Sport_Next_Hold.jpg": "./src/assets/images/Sport_Next_Hold.jpg",
	"./Sport_Race_End.jpg": "./src/assets/images/Sport_Race_End.jpg",
	"./Sport_Sky_Cross.jpg": "./src/assets/images/Sport_Sky_Cross.jpg",
	"./TracyGalindo.jpg": "./src/assets/images/TracyGalindo.jpg",
	"./Travel_Adventure_Door.jpg": "./src/assets/images/Travel_Adventure_Door.jpg",
	"./Travel_Bike_and_Stair.jpg": "./src/assets/images/Travel_Bike_and_Stair.jpg",
	"./Travel_Boat_Wanderer.jpg": "./src/assets/images/Travel_Boat_Wanderer.jpg",
	"./Travel_Bridge_into_Forest.jpg": "./src/assets/images/Travel_Bridge_into_Forest.jpg",
	"./Travel_HillsideColor.jpg": "./src/assets/images/Travel_HillsideColor.jpg",
	"./Travel_Lonesome.jpg": "./src/assets/images/Travel_Lonesome.jpg",
	"./Travel_On_the_Road.jpg": "./src/assets/images/Travel_On_the_Road.jpg",
	"./Travel_OpenMountain.jpg": "./src/assets/images/Travel_OpenMountain.jpg",
	"./Travel_Outdoor_Baths.jpg": "./src/assets/images/Travel_Outdoor_Baths.jpg",
	"./Travel_Road_into_Hill.jpg": "./src/assets/images/Travel_Road_into_Hill.jpg",
	"./Travel_SunsetonCanals.jpg": "./src/assets/images/Travel_SunsetonCanals.jpg",
	"./Travel_Tower.jpg": "./src/assets/images/Travel_Tower.jpg",
	"./close.svg": "./src/assets/images/close.svg",
	"./closeHover.svg": "./src/assets/images/closeHover.svg",
	"./logo.svg": "./src/assets/images/logo.svg",
	"./sport_water_tunnel.jpg": "./src/assets/images/sport_water_tunnel.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync \\.(png|jpe?g|svg)$";

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg> ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>";

/***/ }),

/***/ "./src/assets/images/Animals_Majesty.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Animals_Majesty.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Animals_Majesty.jpg";

/***/ }),

/***/ "./src/assets/images/Animals_Rainbow.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Animals_Rainbow.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Animals_Rainbow.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Connected_Curves.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/Architecture_Connected_Curves.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Connected_Curves.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Contrast.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Architecture_Contrast.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Contrast.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Corner_Room.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/Architecture_Corner_Room.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Corner_Room.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Cross_Bar.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/Architecture_Cross_Bar.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Cross_Bar.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Dome.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/Architecture_Dome.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Dome.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Horseshoe.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/Architecture_Horseshoe.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Horseshoe.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_On_a_hill.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/Architecture_On_a_hill.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_On_a_hill.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_Water_on_Modern.jpg":
/*!************************************************************!*\
  !*** ./src/assets/images/Architecture_Water_on_Modern.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_Water_on_Modern.jpg";

/***/ }),

/***/ "./src/assets/images/Architecture_White_Light.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/Architecture_White_Light.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_White_Light.jpg";

/***/ }),

/***/ "./src/assets/images/Art_Mine.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/Art_Mine.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Art_Mine.jpg";

/***/ }),

/***/ "./src/assets/images/Art_Purple_light.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/Art_Purple_light.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Art_Purple_light.jpg";

/***/ }),

/***/ "./src/assets/images/Art_Triangle_Man.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/Art_Triangle_Man.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Art_Triangle_Man.jpg";

/***/ }),

/***/ "./src/assets/images/EllieRoseWilkens.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/EllieRoseWilkens.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/EllieRoseWilkens.jpg";

/***/ }),

/***/ "./src/assets/images/Event_18thAnniversary.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Event_18thAnniversary.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_18thAnniversary.jpg";

/***/ }),

/***/ "./src/assets/images/Event_BenevidesWedding.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/Event_BenevidesWedding.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_BenevidesWedding.jpg";

/***/ }),

/***/ "./src/assets/images/Event_Emcee.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/Event_Emcee.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_Emcee.jpg";

/***/ }),

/***/ "./src/assets/images/Event_KeyboardCheck.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/Event_KeyboardCheck.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_KeyboardCheck.jpg";

/***/ }),

/***/ "./src/assets/images/Event_PintoWedding.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Event_PintoWedding.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_PintoWedding.jpg";

/***/ }),

/***/ "./src/assets/images/Event_ProductPitch.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Event_ProductPitch.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_ProductPitch.jpg";

/***/ }),

/***/ "./src/assets/images/Event_SeasideWedding.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Event_SeasideWedding.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_SeasideWedding.jpg";

/***/ }),

/***/ "./src/assets/images/Event_Sparklers.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Event_Sparklers.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_Sparklers.jpg";

/***/ }),

/***/ "./src/assets/images/Event_VentureConference.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/Event_VentureConference.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_VentureConference.jpg";

/***/ }),

/***/ "./src/assets/images/Event_WeddingGazebo.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/Event_WeddingGazebo.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Event_WeddingGazebo.jpg";

/***/ }),

/***/ "./src/assets/images/Fashion_Melody_Red_on_Stripes.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/Fashion_Melody_Red_on_Stripes.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Fashion_Melody_Red_on_Stripes.jpg";

/***/ }),

/***/ "./src/assets/images/Fashion_Pattern_on_Pattern.jpg":
/*!**********************************************************!*\
  !*** ./src/assets/images/Fashion_Pattern_on_Pattern.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Fashion_Pattern_on_Pattern.jpg";

/***/ }),

/***/ "./src/assets/images/Fashion_Urban_Jungle.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Fashion_Urban_Jungle.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Fashion_Urban_Jungle.jpg";

/***/ }),

/***/ "./src/assets/images/Fashion_Wings.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/Fashion_Wings.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Fashion_Wings.jpg";

/***/ }),

/***/ "./src/assets/images/Fashion_Yellow_Beach.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Fashion_Yellow_Beach.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Fashion_Yellow_Beach.jpg";

/***/ }),

/***/ "./src/assets/images/MarcelNikolic.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/MarcelNikolic.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/MarcelNikolic.jpg";

/***/ }),

/***/ "./src/assets/images/MimiKeel.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/MimiKeel.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/MimiKeel.jpg";

/***/ }),

/***/ "./src/assets/images/NabeelBradford.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/NabeelBradford.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/NabeelBradford.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_AfternoonBreak.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/Portrait_AfternoonBreak.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_AfternoonBreak.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Alexandra.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Portrait_Alexandra.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Alexandra.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Background.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/Portrait_Background.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Background.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Nora.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/Portrait_Nora.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Nora.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Shaw.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/Portrait_Shaw.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Shaw.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Sunkissed.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Portrait_Sunkissed.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Sunkissed.jpg";

/***/ }),

/***/ "./src/assets/images/Portrait_Wednesday.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Portrait_Wednesday.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Portrait_Wednesday.jpg";

/***/ }),

/***/ "./src/assets/images/RhodeDubois.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/RhodeDubois.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/RhodeDubois.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_2000_with_8.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/Sport_2000_with_8.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_2000_with_8.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_Butterfly.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Sport_Butterfly.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Butterfly.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_Jump.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/Sport_Jump.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Jump.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_Next_Hold.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Sport_Next_Hold.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Next_Hold.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_Race_End.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/Sport_Race_End.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Race_End.jpg";

/***/ }),

/***/ "./src/assets/images/Sport_Sky_Cross.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Sport_Sky_Cross.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Sky_Cross.jpg";

/***/ }),

/***/ "./src/assets/images/TracyGalindo.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/TracyGalindo.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/TracyGalindo.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Adventure_Door.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Travel_Adventure_Door.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Adventure_Door.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Bike_and_Stair.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Travel_Bike_and_Stair.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Bike_and_Stair.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Boat_Wanderer.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Travel_Boat_Wanderer.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Boat_Wanderer.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Bridge_into_Forest.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/Travel_Bridge_into_Forest.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Bridge_into_Forest.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_HillsideColor.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Travel_HillsideColor.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_HillsideColor.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Lonesome.jpg":
/*!***********************************************!*\
  !*** ./src/assets/images/Travel_Lonesome.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Lonesome.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_On_the_Road.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/Travel_On_the_Road.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_On_the_Road.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_OpenMountain.jpg":
/*!***************************************************!*\
  !*** ./src/assets/images/Travel_OpenMountain.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_OpenMountain.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Outdoor_Baths.jpg":
/*!****************************************************!*\
  !*** ./src/assets/images/Travel_Outdoor_Baths.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Outdoor_Baths.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Road_into_Hill.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Travel_Road_into_Hill.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Road_into_Hill.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_SunsetonCanals.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/images/Travel_SunsetonCanals.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_SunsetonCanals.jpg";

/***/ }),

/***/ "./src/assets/images/Travel_Tower.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/Travel_Tower.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Tower.jpg";

/***/ }),

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/close.svg";

/***/ }),

/***/ "./src/assets/images/closeHover.svg":
/*!******************************************!*\
  !*** ./src/assets/images/closeHover.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/closeHover.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/logo.svg";

/***/ }),

/***/ "./src/assets/images/sport_water_tunnel.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/sport_water_tunnel.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/sport_water_tunnel.jpg";

/***/ }),

/***/ "./src/assets/json/FishEyeData.json":
/*!******************************************!*\
  !*** ./src/assets/json/FishEyeData.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sports","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"title":"Fashion Yellow Beach","image":"Fashion_Yellow_Beach.jpg","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55},{"id":8520927,"photographerId":82,"title":"Fashion Urban Jungle","image":"Fashion_Urban_Jungle.jpg","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55},{"id":9025895,"photographerId":82,"title":"Fashion Pattern on a Pattern","image":"Fashion_Pattern_on_Pattern.jpg","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55},{"id":9275938,"photographerId":82,"title":"Wedding Gazebo","image":"Event_WeddingGazebo.jpg","tags":["events"],"likes":69,"date":"2018-02-22","price":55},{"id":2053494,"photographerId":82,"title":"Sparkles","image":"Event_Sparklers.jpg","tags":["events"],"likes":2,"date":"2020-05-25","price":55},{"id":7324238,"photographerId":82,"title":"18th Anniversary","image":"Event_18thAnniversary.jpg","tags":["events"],"likes":33,"date":"2019-06-12","price":55},{"id":8328953,"photographerId":82,"title":"Wooden Horse Sculpture","video":"Art_Wooden_Horse_Sculpture.mp4","tags":["art"],"likes":24,"date":"2011-12-08","price":100},{"id":7502053,"photographerId":82,"title":"Triangle Man","image":"Art_Triangle_Man.jpg","tags":["art"],"likes":88,"date":"2007-05-07","price":55},{"id":8523492,"photographerId":82,"title":"Purple Tunnel","image":"Art_Purple_light.jpg","tags":["art"],"likes":24,"date":"2018-05-05","price":55},{"id":75902334,"photographerId":82,"title":"Art Mine","image":"Art_Mine.jpg","tags":["art"],"likes":75,"date":"2019-11-25","price":55},{"id":73852953,"photographerId":925,"title":"8 Rows","image":"Sport_2000_with_8.jpg","tags":["sport"],"likes":52,"date":"2013-02-30","price":70},{"id":92758372,"photographerId":925,"title":"Fashion Wings","image":"Fashion_Wings.jpg","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70},{"id":32958383,"photographerId":925,"title":"Melody Red on Stripes","image":"Fashion_Melody_Red_on_Stripes.jpg","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70},{"id":928587383,"photographerId":925,"title":"Venture Conference","image":"Event_VentureConference.jpg","tags":["events"],"likes":2,"date":"2019-01-02","price":70},{"id":725639493,"photographerId":925,"title":"Product Pitch","image":"Event_ProductPitch.jpg","tags":["events"],"likes":3,"date":"2019-05-20","price":70},{"id":23394384,"photographerId":925,"title":"Musical Festival Keyboard","image":"Event_KeyboardCheck.jpg","tags":["events"],"likes":52,"date":"2019-07-18","price":70},{"id":87367293,"photographerId":925,"title":"Musical Festival Singer","image":"Event_Emcee.jpg","tags":["events"],"likes":23,"date":"2018-02-22","price":70},{"id":593834784,"photographerId":925,"title":"Animal Majesty","image":"Animals_Majesty.jpg","tags":["animals"],"likes":52,"date":"2017-03-13","price":70},{"id":83958935,"photographerId":925,"title":"Cute Puppy on Sunset","video":"Animals_Puppiness.mp4","tags":["animals"],"likes":52,"date":"2016-06-12","price":70},{"id":394583434,"photographerId":527,"title":"Rock Mountains","video":"Travel_Rock_Mountains.mp4","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":343423425,"photographerId":527,"title":"Outdoor Baths","image":"Travel_Outdoor_Baths.jpg","tags":["travel"],"likes":101,"date":"2017-04-03","price":45},{"id":73434243,"photographerId":527,"title":"Road into the Hill","image":"Travel_Road_into_Hill.jpg","tags":["travel"],"likes":99,"date":"2018-04-30","price":45},{"id":23425523,"photographerId":527,"title":"Bridge into the Forest","image":"Travel_Bridge_into_Forest.jpg","tags":["travel"],"likes":34,"date":"2016-04-05","price":45},{"id":23134513,"photographerId":527,"title":"Boat Wonderer","image":"Travel_Boat_Wanderer.jpg","tags":["travel"],"likes":23,"date":"2017-03-18","price":45},{"id":92352352,"photographerId":527,"title":"Portrait Sunkiss","image":"Portrait_Sunkissed.jpg","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45},{"id":34513453,"photographerId":527,"title":"Shaw Potrait","image":"Portrait_Shaw.jpg","tags":["portait"],"likes":52,"date":"2017-04-21","price":45},{"id":23523533,"photographerId":527,"title":"Alexandra","image":"Portrait_Alexandra.jpg","tags":["portait"],"likes":95,"date":"2018-11-02","price":45},{"id":525834234,"photographerId":527,"title":"Afternoon Break","image":"Portrait_AfternoonBreak.jpg","tags":["portait"],"likes":25,"date":"2019-01-02","price":45},{"id":623534343,"photographerId":243,"title":"Lonesome","image":"Travel_Lonesome.jpg","tags":["travel"],"likes":88,"date":"2019-02-03","price":45},{"id":625025343,"photographerId":243,"title":"Hillside Color","image":"Travel_HillsideColor.jpg","tags":["travel"],"likes":85,"date":"2019-04-03","price":45},{"id":2525345343,"photographerId":243,"title":"Wednesday Potrait","image":"Portrait_Wednesday.jpg","tags":["portait"],"likes":34,"date":"2019-04-07","price":45},{"id":2523434634,"photographerId":243,"title":"Nora Portrait","image":"Portrait_Nora.jpg","tags":["portait"],"likes":63,"date":"2019-04-07","price":45},{"id":398847109,"photographerId":243,"title":"Raw Black Portrait","image":"Portrait_Background.jpg","tags":["portait"],"likes":55,"date":"2019-06-20","price":45},{"id":2534342,"photographerId":243,"title":"Seaside Wedding","image":"Event_SeasideWedding.jpg","tags":["events"],"likes":25,"date":"2019-06-21","price":45},{"id":65235234,"photographerId":243,"title":"Boulder Wedding","image":"Event_PintoWedding.jpg","tags":["events"],"likes":52,"date":"2019-06-25","price":45},{"id":23523434,"photographerId":243,"title":"Benevides Wedding","image":"Event_BenevidesWedding.jpg","tags":["events"],"likes":77,"date":"2019-06-28","price":45},{"id":5234343,"photographerId":243,"title":"Wild Horses in the Mountains","video":"Animals_Wild_Horses_in_the_mountains.mp4","tags":["animals"],"likes":142,"date":"2019-08-23","price":60},{"id":95234343,"photographerId":243,"title":"Rainbow Bird","image":"Animals_Rainbow.jpg","tags":["animals"],"likes":59,"date":"2019-07-02","price":60},{"id":52343416,"photographerId":195,"title":"Japanese Tower, Kyoto","image":"Travel_Tower.jpg","tags":["travel"],"likes":25,"date":"2019-04-03","price":60},{"id":2523434,"photographerId":195,"title":"Senset on Canals, Venice","image":"Travel_SunsetonCanals.jpg","tags":["travel"],"likes":53,"date":"2019-05-06","price":60},{"id":95293534,"photographerId":195,"title":"Mountain and Lake","image":"Travel_OpenMountain.jpg","tags":["travel"],"likes":33,"date":"2019-05-12","price":60},{"id":356234343,"photographerId":195,"title":"City Bike and Stair, Paris","image":"Travel_Bike_and_Stair.jpg","tags":["travel"],"likes":53,"date":"2019-06-20","price":60},{"id":235234343,"photographerId":195,"title":"Adventure Door, India","image":"Travel_Adventure_Door.jpg","tags":["travel"],"likes":63,"date":"2019-06-26","price":60},{"id":6234234343,"photographerId":195,"title":"Contrast, St-Petersburg","image":"Architecture_Contrast.jpg","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60},{"id":6525666253,"photographerId":195,"title":"On a Hill, Tibet","image":"Architecture_On_a_hill.jpg","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60},{"id":98252523433,"photographerId":195,"title":"Leaning Tower, Pisa","image":"Architecture_Dome.jpg","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60},{"id":9259398453,"photographerId":195,"title":"Circle Highways, Buenos Aires","video":"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65},{"id":3523523534,"photographerId":195,"title":"Corner Building and Blue Sky","image":"Architecture_Corner_Room.jpg","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60},{"id":952343423,"photographerId":930,"title":"Tricks in the Air","video":"Sport_Tricks_in_the_air.mp4","tags":["sport"],"likes":150,"date":"2018-02-30","price":70},{"id":235234343,"photographerId":930,"title":"Climber","image":"Sport_Next_Hold.jpg","tags":["sport"],"likes":101,"date":"2018-03-05","price":65},{"id":235343222,"photographerId":930,"title":"Surfer","image":"sport_water_tunnel.jpg","tags":["sport"],"likes":103,"date":"2018-03-10","price":70},{"id":7775342343,"photographerId":930,"title":"Skier","image":"Sport_Sky_Cross.jpg","tags":["sport"],"likes":77,"date":"2018-04-16","price":50},{"id":9253445784,"photographerId":930,"title":"Race End","image":"Sport_Race_End.jpg","tags":["sport"],"likes":88,"date":"2018-04-22","price":65},{"id":22299394,"photographerId":930,"title":"Jump!","image":"Sport_Jump.jpg","tags":["sport"],"likes":95,"date":"2018-04-27","price":70},{"id":3452342633,"photographerId":930,"title":"White Light","image":"Architecture_White_Light.jpg","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75},{"id":939234243,"photographerId":930,"title":"Water on Modern Building","image":"Architecture_Water_on_Modern.jpg","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72},{"id":222959233,"photographerId":930,"title":"Horseshoe","image":"Architecture_Horseshoe.jpg","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71},{"id":965933434,"photographerId":930,"title":"Cross Bar","image":"Architecture_Cross_Bar.jpg","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58},{"id":777723343,"photographerId":930,"title":"Connected Curves","image":"Architecture_Connected_Curves.jpg","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80}]}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _json_FishEyeData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/FishEyeData.json */ "./src/assets/json/FishEyeData.json");
/* harmony import */ var _photographer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photographer */ "./src/assets/js/photographer.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");




(0,_utils__WEBPACK_IMPORTED_MODULE_3__.importAll)(__webpack_require__("./src/assets/images sync \\.(png|jpe?g|svg)$"));
var cardsContainer = document.querySelector('.main__photographers');
var filter = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getUrlValue)('filter');
var photographers = _json_FishEyeData_json__WEBPACK_IMPORTED_MODULE_1__.photographers; // si un filtre est passé dans l'url => filtrer les photographes

if (filter !== null) {
  document.title = 'Fisheye - ' + filter;
  photographers = photographers.filter(function (photographer) {
    return photographer.tags.includes(filter);
  });
  var tags = document.querySelectorAll('.nav__tag');
  var arrTags = Array.prototype.slice.call(tags);
  var currentTag = arrTags.find(function (t) {
    return t.innerHTML.includes(filter);
  });
  currentTag.remove();
}

photographers.forEach(function (el) {
  var phot = new _photographer__WEBPACK_IMPORTED_MODULE_2__.Photographer(el);
  cardsContainer.appendChild(phot.card());
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxNQUFNLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FB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QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBbkMsaURBQVMsQ0FBQ3FDLG1FQUFELENBQVQ7QUFFQSxJQUFNRSxjQUFjLEdBQUd2QixRQUFRLENBQUN3QixhQUFULENBQXVCLHNCQUF2QixDQUF2QjtBQUNBLElBQU1DLE1BQU0sR0FBRy9DLG1EQUFXLENBQUMsUUFBRCxDQUExQjtBQUNBLElBQUlnRCxhQUFhLEdBQUdOLGlFQUFwQixFQUVBOztBQUNBLElBQUlLLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CekIsRUFBQUEsUUFBUSxDQUFDMUIsS0FBVCxHQUFpQixlQUFlbUQsTUFBaEM7QUFDQUMsRUFBQUEsYUFBYSxHQUFHQSxhQUFhLENBQUNELE1BQWQsQ0FBcUIsVUFBQ0UsWUFBRCxFQUFrQjtBQUNyRCxXQUFPQSxZQUFZLENBQUNuRSxJQUFiLENBQWtCb0UsUUFBbEIsQ0FBMkJILE1BQTNCLENBQVA7QUFDRCxHQUZlLENBQWhCO0FBR0EsTUFBTWpFLElBQUksR0FBR3dDLFFBQVEsQ0FBQ21CLGdCQUFULENBQTBCLFdBQTFCLENBQWI7QUFDQSxNQUFNVSxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQmhCLEtBQWhCLENBQXNCaUIsSUFBdEIsQ0FBMkJ4RSxJQUEzQixDQUFoQjtBQUNBLE1BQU15RSxVQUFVLEdBQUdKLE9BQU8sQ0FBQy9CLElBQVIsQ0FBYSxVQUFDb0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ3hCLFNBQUYsQ0FBWWtCLFFBQVosQ0FBcUJILE1BQXJCLENBQVA7QUFBQSxHQUFiLENBQW5CO0FBQ0FRLEVBQUFBLFVBQVUsQ0FBQ0UsTUFBWDtBQUNEOztBQUVEVCxhQUFhLENBQUMxRCxPQUFkLENBQXNCLFVBQUNQLEVBQUQsRUFBUTtBQUM1QixNQUFNMkUsSUFBSSxHQUFHLElBQUkxRix1REFBSixDQUFpQmUsRUFBakIsQ0FBYjtBQUNBOEQsRUFBQUEsY0FBYyxDQUFDeEIsV0FBZixDQUEyQnFDLElBQUksQ0FBQ0MsSUFBTCxFQUEzQjtBQUNELENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvcGhvdG9ncmFwaGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2ExODEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihwbmd8anBlIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29tcGxleEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFBob3RvZ3JhcGhlciB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhLmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucG9ydHJhaXRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5uYW1lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEuY291dHJ5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEuY2l0eVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnRhZ2xpbmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5wcmljZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnRhZ3NcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLmlkID0gZGF0YS5pZFxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXHJcbiAgICB0aGlzLmltYWdlLnNyYyA9IGAuL2Fzc2V0cy9pbWFnZXMvJHtkYXRhLnBvcnRyYWl0fWBcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZVxyXG4gICAgdGhpcy5sb2NhdGlvbiA9IGRhdGEuY2l0eSArICcgJyArIGRhdGEuY291bnRyeVxyXG4gICAgdGhpcy5zbG9nYW4gPSBkYXRhLnRhZ2xpbmVcclxuICAgIHRoaXMucHJpY2UgPSBkYXRhLnByaWNlXHJcbiAgICB0aGlzLnRhZ3MgPSBkYXRhLnRhZ3NcclxuICB9XHJcblxyXG4gIGlkZW50aXR5U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGVsID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgIHR5cGU6ICdzZWN0aW9uJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5JyxcclxuICAgICAgICBwYXJlbnQ6ICdtYWluJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbmZvcycsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9faW5mb3MnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RpdGxlJyxcclxuICAgICAgICB0eXBlOiAnaDInLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX3RpdGxlJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RleHQnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX3RleHQnLFxyXG4gICAgICAgIHBhcmVudDogJ2luZm9zJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgdHlwZTogJ3AnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xvY2F0aW9uJyxcclxuICAgICAgICBwYXJlbnQ6ICd0ZXh0JyxcclxuICAgICAgICBjb250ZW50OiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Nsb2dhbicsXHJcbiAgICAgICAgdHlwZTogJ3AnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX3Nsb2dhbicsXHJcbiAgICAgICAgcGFyZW50OiAndGV4dCcsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5zbG9nYW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGFnc0xpc3QnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX3RhZ3NMaXN0JyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnY29udGFjdCcsXHJcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdCcsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgICAgY29udGVudDogJ0NvbnRhY3Rlei1tb2knLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWcnLFxyXG4gICAgICAgIHR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZycsXHJcbiAgICAgICAgcGFyZW50OiAnaW1nQ29udGFpbmVyJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBzcmM6IHRoaXMuaW1hZ2Uuc3JjLFxyXG4gICAgICAgICAgYWx0OiBgcG9ydHJhaXQgZGUgJHt0aGlzLm5hbWV9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWtlc0FuZFByaWNlJyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWtlc0FuZFByaWNlJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXMnLFxyXG4gICAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWtlcycsXHJcbiAgICAgICAgcGFyZW50OiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2UnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19wcmljZScsXHJcbiAgICAgICAgdHlwZTogJ3NwYW4nLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX3ByaWNlJyxcclxuICAgICAgICBwYXJlbnQ6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZScsXHJcbiAgICAgICAgY29udGVudDogYCR7dGhpcy5wcmljZX3igqwvam91cmAsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhZ0VsID0ge1xyXG4gICAgICAgIG5hbWU6ICd0YWcnLFxyXG4gICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWVuJyxcclxuICAgICAgICBwYXJlbnQ6ICd0YWdzTGlzdCcsXHJcbiAgICAgICAgaW5uZXJodG1sOiBgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+JHt0YWd9IDwvc3Bhbj4gPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+IyR7dGFnfTwvc3Bhbj5gLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGhyZWY6ICdpbmRleC5odG1sP2ZpbHRlcj0nICsgdGFnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgZWwucHVzaCh0YWdFbClcclxuICAgIH0pXHJcbiAgICByZXR1cm4gY3JlYXRlQ29tcGxleEVsZW1lbnQoZWwpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gY2FydGUgcGhvdG9ncmFwaGVcclxuICAgKi9cclxuICBjYXJkKCkge1xyXG4gICAgY29uc3QgZWwgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncm9vdCcsXHJcbiAgICAgICAgdHlwZTogJ2FydGljbGUnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZCcsXHJcbiAgICAgICAgcGFyZW50OiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbGluaycsXHJcbiAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fbGluaycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaHJlZjogYHBob3RvZ3JhcGhlci5odG1sP2lkPSR7dGhpcy5pZH1gLFxyXG4gICAgICAgICAgdGl0bGU6IGBkw6ljb3V2cmV6IGxlIHRyYXZhaWwgZGUgJHt0aGlzLm5hbWV9YCxcclxuICAgICAgICAgIGFyaWFMYWJlbDp0aGlzLm5hbWVcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX19pbWdDb250YWluZXInLFxyXG4gICAgICAgIHBhcmVudDogJ2xpbmsnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ltZycsXHJcbiAgICAgICAgdHlwZTogJ2ltZycsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX19pbWcnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIHNyYzogdGhpcy5pbWFnZS5zcmMsXHJcbiAgICAgICAgICBhbHQ6JydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudDogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGl0cmUnLFxyXG4gICAgICAgIHR5cGU6ICdoMicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX190aXRsZScsXHJcbiAgICAgICAgcGFyZW50OiAnbGluaycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5uYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2luZm9zJyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX2luZm9zJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdsb2NhdGlvbicsXHJcbiAgICAgICAgdHlwZTogJ3AnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fbG9jYXRpb24nLFxyXG4gICAgICAgIHBhcmVudDogJ2luZm9zJyxcclxuICAgICAgICBjb250ZW50OiB0aGlzLmxvY2F0aW9uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Nsb2dhbicsXHJcbiAgICAgICAgdHlwZTogJ3AnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fc2xvZ2FuJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5zbG9nYW4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGFyaWYnLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX3RhcmlmJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5wcmljZSArICfigqwnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RhZ3MnLFxyXG4gICAgICAgIHR5cGU6ICd1bCcsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX190YWdzJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICAgIHRoaXMudGFncy5mb3JFYWNoKCh0YWcpID0+IHtcclxuICAgICAgY29uc3QgdGFnTGkgPSB7XHJcbiAgICAgICAgbmFtZTogdGFnLFxyXG4gICAgICAgIHR5cGU6ICdsaScsXHJcbiAgICAgICAgcGFyZW50OiAndGFncycsXHJcbiAgICAgIH1cclxuICAgICAgZWwucHVzaCh0YWdMaSlcclxuXHJcbiAgICAgIGNvbnN0IHRhZ0EgPSB7XHJcbiAgICAgICAgbmFtZTogdGFnKydsaW5rJyxcclxuICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX190YWcnLFxyXG4gICAgICAgIHBhcmVudDogdGFnLFxyXG4gICAgICAgIGlubmVyaHRtbDogYDxzcGFuIGNsYXNzPVwic3Itb25seVwiPiR7dGFnfSA8L3NwYW4+ICM8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4gJHt0YWd9PC9zcGFuPmAsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaHJlZjogJ2luZGV4Lmh0bWw/ZmlsdGVyPScgKyB0YWcsXHJcbiAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgZWwucHVzaCh0YWdBKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBjcmVhdGVDb21wbGV4RWxlbWVudChlbClcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtLSBub20gZGUgbGEgdmFsZXVyIMOgIHJlY2hlcmNoZXIgZGFucyBsJ3VybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFZhbHVlKG5hbWUpIHtcclxuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG4gIHJldHVybiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChuYW1lKVxyXG59XHJcblxyXG4vKipcclxuICogSW1wb3J0ZSB1bmUgc8OpcmllIGRlIGZpY2hpZXJzIFxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSByIFxyXG4gKiBAcmV0dXJucyB7QXJyYXkuPHN0cmluZz59IGltYWdlcyAtIExpZW5zIHZlcnMgbGVzIGZpY2hpZXJzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICBjb25zdCBpbWFnZXMgPSB7fVxyXG4gIHIua2V5cygpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pXHJcbiAgfSlcclxuICByZXR1cm4gaW1hZ2VzXHJcbn1cclxuLyoqXHJcbiAqIENyw6llIGRlcyDDqWzDqW1lbnRzIEh0bWwgcXVpIHBldXZlbnQgw6p0cmUgbGnDqXMgZW50cmUgZXV4IMOgIHBhcnRpciBkJ3VuIHRhYmxlYXUgZCdvYmpldFxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBhcnIgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJbXS5uYW1lIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJyW10ucGFyZW50IFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJyW10uY2xhc3MgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJbXS50eXBlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhcnJbXS5hdHRyaWJ1dGVzIFxyXG4gKiBAcmV0dXJucyBIdG1sRWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBsZXhFbGVtZW50KGFycikge1xyXG4gIGNvbnN0IG5ld0FyciA9IFtdXHJcbiAgYXJyLmZvckVhY2goKG9iaikgPT4ge1xyXG4gICAgY29uc3QgbmV3T2JqID0ge31cclxuICAgIG5ld09iai5ET01lbGVtZW50ID0gY3JlYXRlRWxlbWVudEZyb21PYmplY3Qob2JqKVxyXG4gICAgbmV3T2JqLm5hbWUgPSBvYmoubmFtZVxyXG4gICAgbmV3T2JqLnBhcmVudCA9IG9iai5wYXJlbnRcclxuICAgIGNvbnN0IHBhcGEgPSBuZXdBcnIuZmluZCgoZWwpID0+IGVsLm5hbWUgPT09IG9iai5wYXJlbnQpXHJcbiAgICBpZiAocGFwYSkge1xyXG4gICAgICBwYXBhLkRPTWVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3T2JqLkRPTWVsZW1lbnQpXHJcbiAgICB9XHJcbiAgICBuZXdBcnIucHVzaChuZXdPYmopXHJcbiAgfSlcclxuICByZXR1cm4gbmV3QXJyLmZpbmQoKGVsKSA9PiBlbC5wYXJlbnQgPT09ICdtYWluJykuRE9NZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW4gw6lsw6ltZW50IEh0bWwgw6AgcGFydGlyIGQndW4gb2JqZXRcclxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5uYW1lIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLnBhcmVudCBcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5jbGFzcyBcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai50eXBlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmouY29udGVudFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLmlubmVyaHRtbFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqLmF0dHJpYnV0ZXMgXHJcbiAqIEByZXR1cm5zIEh0bWxFbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEZyb21PYmplY3Qob2JqKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGVsLmNsYXNzTmFtZSA9IG9iai5jbGFzcyB8fCAnJ1xyXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcyB8fCBbXVxyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XHJcbiAgICBjb25zdCBkYXRhID0gY2FtZWxDYXNlUGFyc2VyKGtleSlcclxuICAgIGVsLnNldEF0dHJpYnV0ZShkYXRhLCB2YWx1ZSlcclxuICB9XHJcbiAgaWYgKG9iai5jb250ZW50KSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouY29udGVudCkpXHJcbiAgaWYob2JqLmlubmVyaHRtbCllbC5pbm5lckhUTUw9b2JqLmlubmVyaHRtbFxyXG4gIHJldHVybiBlbFxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCBlbiBjYW1lbENhc2VcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGNhbWVsQ2FzZVBhcnNlcih0ZXh0KSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gdGV4dC5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKVxyXG4gIGNvbnN0IGZpbmFsUmVzdWx0ID0gcmVzdWx0LmNoYXJBdCgwKSArIHJlc3VsdC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIGZpbmFsUmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MZWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgcGFyZW50IGRhbnMgbGVxdWVsIGNoZXJjaGVyIGxlcyDDqWzDqW1lbnRzIGZvY3VzYWJsZXNcclxuICogQHJldHVybnMge0FycmF5LjxIVE1MZWxlbWVudD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZEZvY3VzYWJsZUVsZW1lbnRzKGVsZW1lbnQpIHtcclxuICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcclxuICAgICAgYVtocmVmXSxcclxuICAgICAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxyXG4gICAgICBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLFxyXG4gICAgICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAgIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAgIFt0YWJpbmRleD1cIjBcIl0sXHJcbiAgICAgIFt0YWJpbmRleD1cIjFcIl0sXHJcbiAgICAgIC5lbWJlci1wb3dlci1zZWxlY3QtdHJpZ2dlclxyXG4gICAgYClcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyBmaWxsPSUyN2JsYWNrJTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyB3aWR0aD0lMjcyNCUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNz48cGF0aCBkPSUyN003IDEwbDUgNSA1LTV6JTI3Lz48cGF0aCBkPSUyN00wIDBoMjR2MjRIMHolMjcgZmlsbD0lMjdub25lJTI3Lz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5wcmVsb2FkIHtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubm9TY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5zci1vbmx5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAvKiBhZGRlZCBsaW5lICovXFxuICBib3JkZXI6IDA7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbn1cXG4uaGVhZGVyX19sb2dvIHtcXG4gIGhlaWdodDogMi4zNXJlbTtcXG59XFxuLmhlYWRlcl9fbG9nbyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX19sb2dvOmZvY3VzIGltZywgLmhlYWRlcl9fbG9nbzpob3ZlciBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDBweCBibGFjayk7XFxufVxcbi5oZWFkZXJfX2hpZGRlbmxpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZDogI0RCODg3NjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbn1cXG4uaGVhZGVyX19oaWRkZW5saW5rOmZvY3VzIHtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTM0MHB4KSB7XFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5uYXZfX3RhZ3NMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbSAwLjMxMjVyZW07XFxufVxcbi5uYXZfX3RhZyBhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjY4NzVyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ubmF2X190YWcgYTpob3ZlciwgLm5hdl9fdGFnIGE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW5fX3RpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg0LjE3NXJlbSAtIDJ2dyk7XFxuICByaWdodDogMyU7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1haW5fX3RpdGxlIHtcXG4gICAgdG9wOiAzLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICB9XFxufVxcbi5tYWluX19waG90b2dyYXBoZXJzIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubWFpbl9fcGhvdG9ncmFwaGVycyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW5fX3Bob3RvZ3JhcGhlcnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICB9XFxufVxcblxcbi5waG90b2dyYXBoZXJDYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbGluazpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUsIC5waG90b2dyYXBoZXJDYXJkX19saW5rOmZvY3VzIC5waG90b2dyYXBoZXJDYXJkX190aXRsZSB7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6aG92ZXIgLnBob3RvZ3JhcGhlckNhcmRfX2ltZywgLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9faW1nQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwICMwMDAwMDA0MDtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190aXRsZSB7XFxuICBjb2xvcjogI0QzNTczQztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2luZm9zIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19zbG9nYW4ge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbG9jYXRpb24ge1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YXJpZiB7XFxuICBjb2xvcjogIzc1NzU3NTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtIDAuMzEyNXJlbTtcXG4gIG1hcmdpbjogMC4zMjVyZW07XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XFxuICBjb2xvcjogIzkwMUMxQztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YWc6aG92ZXIsIC5waG90b2dyYXBoZXJDYXJkX190YWc6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBob3RvZ3JhcGhlcklkZW50aXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNHJlbSAzLjEyNXJlbSA0cmVtIDJyZW07XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW5mb3Mge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogI0QzNTczQztcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X190ZXh0IHtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fc2xvZ2FuIHtcXG4gIGNvbG9yOiAjNTI1MjUyO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RhZ3NMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAwLjlyZW07XFxuICBnYXA6IDAuNjI1cmVtIDAuMzEyNXJlbTtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjY4NzVyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpZW46aG92ZXIsIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbjpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3Qge1xcbiAgd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiA2OXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdDpob3ZlciwgLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNEMzU3M0M7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDRyZW07XFxuICBwYWRkaW5nOiAycmVtIDEuMzEyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNEQjg4NzY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW0gMC4zMTI1cmVtIDAgMDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbiwgLnBob3RvZ3JhcGhlcklkZW50aXR5X19zbG9nYW4sIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMnJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBwYWRkaW5nOiAwLjMxMjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19pbWdDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtIDEuMjVyZW0gNHJlbSAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9faW5mb3Mge1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXZ3O1xcbiAgfVxcbn1cXG5cXG4uc2VsZWN0U3R5bGVkIHtcXG4gIHdpZHRoOiA4NiU7XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcXG4gIC8qIEFkZCB0aGUgZm9jdXMgc3RhdGVzIHRvbywgVGhleSBtYXR0ZXIsIGFsd2F5cyEgKi9cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2VsZWN0U3R5bGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlLFxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTFyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zZWxlY3RTdHlsZWQgLnNlbGVjdE5hdGl2ZTpmb2N1cyArIC5zZWxlY3RDdXN0b20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RMYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlLFxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3ROYXRpdmUge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDByZW0gMC44cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbSAwLjRyZW0gMCAwO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAwLjhyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLLhFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMC44cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiy4VcXFwiO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb246bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjRyZW0gMC40cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzSG92ZXIsXFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzQWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwLjhyZW07XFxufVxcblxcbi5tZWRpYXNDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbSA2cmVtO1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogMy42MjVyZW0gYXV0byAwIGF1dG87XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tZWRpYXNDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5tZWRpYXNDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXFxuLm1lZGlhQ2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyOmhvdmVyIC5tZWRpYUNhcmRfX21lZGlhLCAubWVkaWFDYXJkX19pbWdDb250YWluZXI6Zm9jdXMgLm1lZGlhQ2FyZF9fbWVkaWEge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLm1lZGlhQ2FyZF9fbWVkaWEge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ubWVkaWFDYXJkX19pbmZvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLm1lZGlhQ2FyZF9fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ubWVkaWFDYXJkX19saWtlcyB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ubWVkaWFDYXJkX19saWtlczpob3ZlciwgLm1lZGlhQ2FyZF9fbGlrZXM6Zm9jdXMge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNCk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXG59XFxuLmRpYWxvZy52aXNpYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRpYWxvZ0Zvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAyLjE4NzVyZW07XFxuICBiYWNrZ3JvdW5kOiAjREI4ODc2O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgd2lkdGg6IDQ2JTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uZGlhbG9nRm9ybV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5kaWFsb2dGb3JtX19sYWJlbCwgLmRpYWxvZ0Zvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZGlhbG9nRm9ybV9faW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZGlhbG9nRm9ybV9fc3VibWl0IHtcXG4gIHdpZHRoOiAxNzBweDtcXG4gIGhlaWdodDogNjlweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxLjYyNXJlbSAwIDFyZW0gMDtcXG59XFxuLmRpYWxvZ0Zvcm1fX3N1Ym1pdDpob3ZlciwgLmRpYWxvZ0Zvcm1fX3N1Ym1pdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZGlhbG9nRm9ybV9fY2xvc2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHJpZ2h0OiAyLjE4NzVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmRpYWxvZ0Zvcm1fX2Nsb3NlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgLmRpYWxvZ0Zvcm1fX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLmRpYWxvZ0Zvcm1fX2xhYmVsLCAuZGlhbG9nRm9ybV9faW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIH1cXG4gIC5kaWFsb2dGb3JtX19jbG9zZSB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmRpYWxvZ0Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgLmRpYWxvZ0Zvcm1fX2Nsb3NlIHtcXG4gICAgdG9wOiAycmVtO1xcbiAgICByaWdodDogMXJlbTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJyZW0sIDApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxufVxcbi5jYXJvdXNlbC52aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxufVxcbi5jYXJvdXNlbF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDJyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiBmcmFtZSBjbG9zZVxcXCIgXFxcInByZXYgZnJhbWUgbmV4dFxcXCIgXFxcIi4gbGVnZW5kIC5cXFwiO1xcbn1cXG4uY2Fyb3VzZWxfX2ZyYW1lIHtcXG4gIGdyaWQtYXJlYTogZnJhbWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2Fyb3VzZWxfX2xlZ2VuZCB7XFxuICBncmlkLWFyZWE6IGxlZ2VuZDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLmNhcm91c2VsX19wcmV2LCAuY2Fyb3VzZWxfX25leHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmNhcm91c2VsX19wcmV2IHtcXG4gIGdyaWQtYXJlYTogcHJldjtcXG59XFxuLmNhcm91c2VsX19wcmV2OmhvdmVyLCAuY2Fyb3VzZWxfX3ByZXY6Zm9jdXMge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcbi5jYXJvdXNlbF9fbmV4dCB7XFxuICBncmlkLWFyZWE6IG5leHQ7XFxufVxcbi5jYXJvdXNlbF9fbmV4dDpob3ZlciwgLmNhcm91c2VsX19uZXh0OmZvY3VzIHtcXG4gIGNvbG9yOiAjRDM1NzNDO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlIHtcXG4gIGdyaWQtYXJlYTogY2xvc2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5jYXJvdXNlbF9fY2xvc2U6aG92ZXIgaW1nLCAuY2Fyb3VzZWxfX2Nsb3NlOmZvY3VzIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoNjkwJSkgaHVlLXJvdGF0ZSgzMjdkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4OCUpO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmNhcm91c2VsX19pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2Fyb3VzZWxfX21lZGlhIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHZhbmlzaCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZW1lcmdlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jhc2VzL19iYXNlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYmxvY3MvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdXRpbHMvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYmxvY3MvX21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19waG90b2dyYXBoZXJDYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fcGhvdG9ncmFwaGVySWRlbnRpdHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19tZWRpYUNhcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19kaWFsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19jYXJvdXNlbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBREdGOztBQ0FBO0VBQ0UsMkJBQUE7QURHRjs7QUNEQTtFQUNFLGtDQUFBO0FESUY7O0FDRkE7RUFDRSxnQkFBQTtBREtGOztBQ0ZBO0VBQ0UsZ0JBQUE7QURLRjs7QUNGQTtFQUNFLHFCQUFBO0FES0Y7O0FDRkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsZUFBQTtFQUNyQixTQUFBO0FETUY7O0FFMUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FGNkNGO0FFNUNFO0VBQ0UsZUFBQTtBRjhDSjtBRTdDSTtFQUNFLFlBQUE7QUYrQ047QUU1Q0U7RUFFRSxzQ0FBQTtBRjZDSjtBRTFDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkNqQlM7RURrQlQsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUY0Q0o7QUUzQ0k7RUFDRSxXQUFBO0FGNkNOOztBRXhDRTtFQURGO0lBRUksV0FBQTtFRjRDRjtBQUNGO0FFM0NFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGNkNKO0FFekNJO0VFN0NGLHlC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O0FXNW1CSTtFQUVFLDhGQUFBO0FYNm1CTjtBVzFtQkk7RUFDRSx3QkFBQTtBWDRtQk47QVd6bUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FYMm1CSjtBV3ptQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBWDJtQko7O0FXeG1CQTtFQUNFO0lBQ0UsYUFBQTtFWDJtQkY7RVd6bUJBO0lBQ0UsV0FBQTtFWDJtQkY7QUFDRjtBV3ptQkE7RUFDRTtJQUNFLFdBQUE7RVgybUJGO0VXem1CQTtJQUNFLGFBQUE7RVgybUJGO0FBQ0Y7QUF0dEJBO0VBQ0Usa0NBQUE7QUF3dEJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3V0aWxzL3ZhcmlhYmxlcyc7XFxyXFxuQGltcG9ydCAndXRpbHMvbWl4aW5zJztcXHJcXG5AaW1wb3J0ICdiYXNlcy9iYXNlcyc7XFxyXFxuQGltcG9ydCAnYmxvY3MvaGVhZGVyJztcXHJcXG5AaW1wb3J0ICdibG9jcy9tYWluJztcXHJcXG5AaW1wb3J0ICdibG9jcy9waG90b2dyYXBoZXJDYXJkJztcXHJcXG5cXHJcXG5AaW1wb3J0ICdibG9jcy9tYWluUGhvdG9ncmFwaGVyJztcXHJcXG5AaW1wb3J0ICdibG9jcy9waG90b2dyYXBoZXJJZGVudGl0eSc7XFxyXFxuQGltcG9ydCAnYmxvY3Mvc2VsZWN0JztcXHJcXG5AaW1wb3J0ICdibG9jcy9tZWRpYUNhcmQnO1xcclxcbkBpbXBvcnQgJ2Jsb2NzL2RpYWxvZyc7XFxyXFxuQGltcG9ydCAnYmxvY3MvY2Fyb3VzZWwnO1xcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5wcmVsb2FkIHtcXHJcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4ubm9TY3JvbGwge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zci1vbmx5IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxcHg7XFxyXFxuICBoZWlnaHQ6IDFweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IC0xcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIGFkZGVkIGxpbmUgKi9cXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXCIsXCIuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDg2JTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDIuMzVyZW07XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19sb2dvOmZvY3VzIGltZyxcXHJcXG4gICZfX2xvZ286aG92ZXIgaW1nIHtcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDBweCBibGFjayk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19oaWRkZW5saW5rIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0xMDAwcHg7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS00O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICB0b3A6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ubmF2IHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzQwcHgpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX190YWdzTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbSAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICAmX190YWcge1xcclxcbiAgICAvLyBtYXJnaW46IDAgMC4zMTI1cmVtIDAuMzEyNXJlbSAwO1xcclxcbiAgICBhIHtcXHJcXG4gICAgICBAaW5jbHVkZSB0YWc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIkcHJpbWFyeS0xOiM5MDFDMUM7XFxyXFxuJHByaW1hcnktMjojRDM1NzNDO1xcclxcblxcclxcbiRzZWNvbmRhcnktMTojNTI1MjUyO1xcclxcbiRzZWNvbmRhcnktMjojRkFGQUZBO1xcclxcbiRzZWNvbmRhcnktMzojOTAxQzFDO1xcclxcbiRzZWNvbmRhcnktNDojREI4ODc2O1wiLFwiQG1peGluIHRhZyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcclxcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXHJcXG4gIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICY6aG92ZXIsXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnRuIHtcXHJcXG4gIHdpZHRoOiAxNzBweDtcXHJcXG4gIGhlaWdodDogNjlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS0xO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICY6aG92ZXIsXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5tYWluIHtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IGNhbGMoNC4xNzVyZW0gLSAydncpO1xcclxcbiAgICByaWdodDogMyU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgICB0b3A6IDMuNXJlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19waG90b2dyYXBoZXJzIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIucGhvdG9ncmFwaGVyQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgJjpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUsXFxyXFxuICAgICY6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmhvdmVyIC5waG90b2dyYXBoZXJDYXJkX19pbWcsXFxyXFxuICAgICY6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9faW1nQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxyXFxuICB9XFxyXFxuICAmX19pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9zIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgfVxcclxcbiAgJl9fc2xvZ2FuIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhcmlmIHtcXHJcXG4gICAgY29sb3I6ICM3NTc1NzU7XFxyXFxuICB9XFxyXFxuICAmX190YWdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxcmVtIDAuMzEyNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjMyNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhZyB7XFxyXFxuICAgIEBpbmNsdWRlIHRhZztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIucGhvdG9ncmFwaGVySWRlbnRpdHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktMjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDg2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDRyZW0gMy4xMjVyZW0gNHJlbSAycmVtO1xcclxcbiAgJl9faW5mb3Mge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTI7XFxyXFxuICB9XFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICB9XFxyXFxuICAmX19sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3Nsb2dhbiB7XFxyXFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LTE7XFxyXFxuICB9XFxyXFxuICAmX190YWdzTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC45cmVtO1xcclxcbiAgICBnYXA6IDAuNjI1cmVtIDAuMzEyNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2xpZW4ge1xcclxcbiAgICBAaW5jbHVkZSB0YWc7XFxyXFxuICB9XFxyXFxuICAmX19jb250YWN0IHtcXHJcXG4gICAgQGluY2x1ZGUgYnRuO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gIH1cXHJcXG4gICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxyXFxuICB9XFxyXFxuICAmX19pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICZfX2xpa2VzQW5kUHJpY2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEuMzEyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS00O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW0gMC4zMTI1cmVtIDAgMDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2xvY2F0aW9uLFxcclxcbiAgICAmX19zbG9nYW4sXFxyXFxuICAgICZfX2xpZW4ge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2NvbnRhY3Qge1xcclxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgYm90dG9tOiAycmVtO1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjMxMjVyZW0gMXJlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faW1nQ29udGFpbmVyIHtcXHJcXG4gICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmX19saWtlc0FuZFByaWNlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW0gMS4yNXJlbSA0cmVtIDEuMjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICAmX19pbmZvcyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA3NSU7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faW1nQ29udGFpbmVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDV2dztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4uc2VsZWN0U3R5bGVkIHtcXHJcXG4gIHdpZHRoOiA4NiU7XFxyXFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLy8gQm90aCBuYXRpdmUgYW5kIGN1c3RvbSBzZWxlY3RzIG11c3QgaGF2ZSB0aGUgc2FtZSB3aWR0aC9oZWlnaHQuXFxyXFxuICAuc2VsZWN0TmF0aXZlLFxcclxcbiAgLnNlbGVjdEN1c3RvbSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDExcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyBNYWtlIHN1cmUgdGhlIGN1c3RvbSBzZWxlY3QgZG9lcyBub3QgbWVzcyB3aXRoIHRoZSBsYXlvdXRcXHJcXG4gIC5zZWxlY3RDdXN0b20ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIFRoaXMgbWVkaWEgcXVlcnkgZGV0ZWN0cyBkZXZpY2VzIHdoZXJlIHRoZSBwcmltYXJ5XFxyXFxuICAvLyBpbnB1dCBtZWNoYW5pc20gY2FuIGhvdmVyIG92ZXIgZWxlbWVudHMuIChlLmcuIGNvbXB1dGVycyB3aXRoIGEgbW91c2UpXFxyXFxuICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcclxcbiAgICAvLyBTaW5jZSB3ZSBhcmUgdXNpbmcgYSBtb3VzZSwgaXQncyBzYWZlIHRvIHNob3cgdGhlIGN1c3RvbSBzZWxlY3QuXFxyXFxuICAgIC5zZWxlY3RDdXN0b20ge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8vIEluIGEgY29tcHV0ZXIgdXNpbmcga2V5Ym9hcmQ/IFRoZW4gbGV0J3MgaGlkZSBiYWNrIHRoZSBjdXN0b20gc2VsZWN0XFxyXFxuICAgIC8vIHdoaWxlIHRoZSBuYXRpdmUgb25lIGlzIGZvY3VzZWQ6XFxyXFxuICAgIC5zZWxlY3ROYXRpdmU6Zm9jdXMgKyAuc2VsZWN0Q3VzdG9tIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBBZGQgdGhlIGZvY3VzIHN0YXRlcyB0b28sIFRoZXkgbWF0dGVyLCBhbHdheXMhICovXFxyXFxuICAvLyAuc2VsZWN0TmF0aXZlOmZvY3VzIHtcXHJcXG4gIC8vICAgYm94LXNoYWRvdzogJHByaW1hcnktMiAwIDAgMCAycHg7XFxyXFxuICAvLyB9XFxyXFxuXFxyXFxuICAvL1xcclxcbiAgLy8gUmVzdCBvZiB0aGUgc3R5bGVzIHRvIGNyZWF0ZSB0aGUgY3VzdG9tIHNlbGVjdC5cXHJcXG4gIC8vIEp1c3QgbWFrZSBzdXJlIHRoZSBuYXRpdmUgYW5kIHRoZSBjdXN0b20gaGF2ZSBhIHNpbWlsYXIgXFxcImJveFxcXCIgKHRoZSB0cmlnZ2VyKS5cXHJcXG4gIC8vXFxyXFxuXFxyXFxuICAuc2VsZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdExhYmVsIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0V3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdE5hdGl2ZSxcXHJcXG4gIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0TmF0aXZlIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyBmaWxsPSdibGFjaycgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTcgMTBsNSA1IDUtNXonLz48cGF0aCBkPSdNMCAwaDI0djI0SDB6JyBmaWxsPSdub25lJy8+PC9zdmc+XFxcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwLjhyZW07XFxyXFxuICAgIHBhZGRpbmc6IDByZW0gMC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjRyZW0gMC40cmVtIDAgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS0xO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMC44cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ8uEJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwLjhyZW07XFxyXFxuICB9XFxyXFxuICAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAny4UnO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS1vcHRpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS1vcHRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjRyZW0gMC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS1vcHRpb24uaXNIb3ZlcixcXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktMjsgLy8gY29udHJhc3QgQUFcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS1vcHRpb246bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzQWN0aXZlOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAn4pyTJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwLjhyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLm1lZGlhc0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAxcmVtIDZyZW07XFxyXFxuICB3aWR0aDogODYlO1xcclxcbiAgbWFyZ2luOiAzLjYyNXJlbSBhdXRvIDAgYXV0bztcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lZGlhQ2FyZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICY6aG92ZXIgLm1lZGlhQ2FyZF9fbWVkaWEsXFxyXFxuICAgICY6Zm9jdXMgLm1lZGlhQ2FyZF9fbWVkaWEge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX21lZGlhIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbiAgJl9faW5mb3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcbiAgfVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIH1cXHJcXG4gICZfX2xpa2VzIHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5LTI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuZGlhbG9nIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQpO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxyXFxuICB6LWluZGV4OiAyMDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxyXFxuICAmLnZpc2libGUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9nRm9ybSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAwIDIuMTg3NXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXHJcXG4gIHdpZHRoOiA0NiU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgJl9fbGFiZWwsXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gIH1cXHJcXG4gICZfX2lucHV0OmludmFsaWQge1xcclxcbiAgICAvLyBib3gtc2hhZG93OiAwIDBweCAycHggM3B4IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2lucHV0OmZvY3VzOmludmFsaWQge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcbiAgJl9fc3VibWl0IHtcXHJcXG4gICAgQGluY2x1ZGUgYnRuO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luOiAxLjYyNXJlbSAwIDFyZW0gMDtcXHJcXG4gIH1cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDJyZW07XFxyXFxuICAgIHJpZ2h0OiAyLjE4NzVyZW07XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2xhYmVsLFxcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19jbG9zZSB7XFxyXFxuICAgICAgdG9wOiAxcmVtO1xcclxcbiAgICAgIHdpZHRoOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgJl9fY2xvc2Uge1xcclxcbiAgICAgIHRvcDogMnJlbTtcXHJcXG4gICAgICByaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5jYXJvdXNlbCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0ycmVtLCAwKTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbiAgJi52aXNpYmxlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxyXFxuICB9XFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAycmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICcuIGZyYW1lIGNsb3NlJ1xcclxcbiAgICAgICdwcmV2IGZyYW1lIG5leHQnXFxyXFxuICAgICAgJy4gbGVnZW5kIC4nO1xcclxcbiAgfVxcclxcbiAgJl9fZnJhbWUge1xcclxcbiAgICBncmlkLWFyZWE6IGZyYW1lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gICZfX2xlZ2VuZCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVnZW5kO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgZmxleC1zdGFydDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcbiAgfVxcclxcbiAgJl9fcHJldixcXHJcXG4gICZfX25leHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICZfX3ByZXYge1xcclxcbiAgICBncmlkLWFyZWE6IHByZXY7XFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19uZXh0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuZXh0O1xcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fY2xvc2Uge1xcclxcbiAgICBncmlkLWFyZWE6IGNsb3NlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDNyZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgJjpob3ZlciBpbWcsXFxyXFxuICAgICY6Zm9jdXMgaW1nIHtcXHJcXG4gICAgICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoNjkwJSkgaHVlLXJvdGF0ZSgzMjdkZWcpXFxyXFxuICAgICAgICBicmlnaHRuZXNzKDg4JSkgY29udHJhc3QoODglKTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICZfX21lZGlhIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHZhbmlzaCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZW1lcmdlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMCU7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL0FuaW1hbHNfTWFqZXN0eS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FuaW1hbHNfTWFqZXN0eS5qcGdcIixcblx0XCIuL0FuaW1hbHNfUmFpbmJvdy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FuaW1hbHNfUmFpbmJvdy5qcGdcIixcblx0XCIuL0FyY2hpdGVjdHVyZV9Db25uZWN0ZWRfQ3VydmVzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX0Nvbm5lY3RlZF9DdXJ2ZXMuanBnXCIsXG5cdFwiLi9BcmNoaXRlY3R1cmVfQ29udHJhc3QuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcmNoaXRlY3R1cmVfQ29udHJhc3QuanBnXCIsXG5cdFwiLi9BcmNoaXRlY3R1cmVfQ29ybmVyX1Jvb20uanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcmNoaXRlY3R1cmVfQ29ybmVyX1Jvb20uanBnXCIsXG5cdFwiLi9BcmNoaXRlY3R1cmVfQ3Jvc3NfQmFyLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX0Nyb3NzX0Jhci5qcGdcIixcblx0XCIuL0FyY2hpdGVjdHVyZV9Eb21lLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX0RvbWUuanBnXCIsXG5cdFwiLi9BcmNoaXRlY3R1cmVfSG9yc2VzaG9lLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX0hvcnNlc2hvZS5qcGdcIixcblx0XCIuL0FyY2hpdGVjdHVyZV9Pbl9hX2hpbGwuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcmNoaXRlY3R1cmVfT25fYV9oaWxsLmpwZ1wiLFxuXHRcIi4vQXJjaGl0ZWN0dXJlX1dhdGVyX29uX01vZGVybi5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FyY2hpdGVjdHVyZV9XYXRlcl9vbl9Nb2Rlcm4uanBnXCIsXG5cdFwiLi9BcmNoaXRlY3R1cmVfV2hpdGVfTGlnaHQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcmNoaXRlY3R1cmVfV2hpdGVfTGlnaHQuanBnXCIsXG5cdFwiLi9BcnRfTWluZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FydF9NaW5lLmpwZ1wiLFxuXHRcIi4vQXJ0X1B1cnBsZV9saWdodC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FydF9QdXJwbGVfbGlnaHQuanBnXCIsXG5cdFwiLi9BcnRfVHJpYW5nbGVfTWFuLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJ0X1RyaWFuZ2xlX01hbi5qcGdcIixcblx0XCIuL0VsbGllUm9zZVdpbGtlbnMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FbGxpZVJvc2VXaWxrZW5zLmpwZ1wiLFxuXHRcIi4vRXZlbnRfMTh0aEFubml2ZXJzYXJ5LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRXZlbnRfMTh0aEFubml2ZXJzYXJ5LmpwZ1wiLFxuXHRcIi4vRXZlbnRfQmVuZXZpZGVzV2VkZGluZy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0V2ZW50X0JlbmV2aWRlc1dlZGRpbmcuanBnXCIsXG5cdFwiLi9FdmVudF9FbWNlZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0V2ZW50X0VtY2VlLmpwZ1wiLFxuXHRcIi4vRXZlbnRfS2V5Ym9hcmRDaGVjay5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0V2ZW50X0tleWJvYXJkQ2hlY2suanBnXCIsXG5cdFwiLi9FdmVudF9QaW50b1dlZGRpbmcuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FdmVudF9QaW50b1dlZGRpbmcuanBnXCIsXG5cdFwiLi9FdmVudF9Qcm9kdWN0UGl0Y2guanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FdmVudF9Qcm9kdWN0UGl0Y2guanBnXCIsXG5cdFwiLi9FdmVudF9TZWFzaWRlV2VkZGluZy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0V2ZW50X1NlYXNpZGVXZWRkaW5nLmpwZ1wiLFxuXHRcIi4vRXZlbnRfU3BhcmtsZXJzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRXZlbnRfU3BhcmtsZXJzLmpwZ1wiLFxuXHRcIi4vRXZlbnRfVmVudHVyZUNvbmZlcmVuY2UuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FdmVudF9WZW50dXJlQ29uZmVyZW5jZS5qcGdcIixcblx0XCIuL0V2ZW50X1dlZGRpbmdHYXplYm8uanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9FdmVudF9XZWRkaW5nR2F6ZWJvLmpwZ1wiLFxuXHRcIi4vRmFzaGlvbl9NZWxvZHlfUmVkX29uX1N0cmlwZXMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9GYXNoaW9uX01lbG9keV9SZWRfb25fU3RyaXBlcy5qcGdcIixcblx0XCIuL0Zhc2hpb25fUGF0dGVybl9vbl9QYXR0ZXJuLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvRmFzaGlvbl9QYXR0ZXJuX29uX1BhdHRlcm4uanBnXCIsXG5cdFwiLi9GYXNoaW9uX1VyYmFuX0p1bmdsZS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Zhc2hpb25fVXJiYW5fSnVuZ2xlLmpwZ1wiLFxuXHRcIi4vRmFzaGlvbl9XaW5ncy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Zhc2hpb25fV2luZ3MuanBnXCIsXG5cdFwiLi9GYXNoaW9uX1llbGxvd19CZWFjaC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0Zhc2hpb25fWWVsbG93X0JlYWNoLmpwZ1wiLFxuXHRcIi4vTWFyY2VsTmlrb2xpYy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01hcmNlbE5pa29saWMuanBnXCIsXG5cdFwiLi9NaW1pS2VlbC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL01pbWlLZWVsLmpwZ1wiLFxuXHRcIi4vTmFiZWVsQnJhZGZvcmQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9OYWJlZWxCcmFkZm9yZC5qcGdcIixcblx0XCIuL1BvcnRyYWl0X0FmdGVybm9vbkJyZWFrLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUG9ydHJhaXRfQWZ0ZXJub29uQnJlYWsuanBnXCIsXG5cdFwiLi9Qb3J0cmFpdF9BbGV4YW5kcmEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Qb3J0cmFpdF9BbGV4YW5kcmEuanBnXCIsXG5cdFwiLi9Qb3J0cmFpdF9CYWNrZ3JvdW5kLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvUG9ydHJhaXRfQmFja2dyb3VuZC5qcGdcIixcblx0XCIuL1BvcnRyYWl0X05vcmEuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Qb3J0cmFpdF9Ob3JhLmpwZ1wiLFxuXHRcIi4vUG9ydHJhaXRfU2hhdy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1BvcnRyYWl0X1NoYXcuanBnXCIsXG5cdFwiLi9Qb3J0cmFpdF9TdW5raXNzZWQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Qb3J0cmFpdF9TdW5raXNzZWQuanBnXCIsXG5cdFwiLi9Qb3J0cmFpdF9XZWRuZXNkYXkuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Qb3J0cmFpdF9XZWRuZXNkYXkuanBnXCIsXG5cdFwiLi9SaG9kZUR1Ym9pcy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1Job2RlRHVib2lzLmpwZ1wiLFxuXHRcIi4vU3BvcnRfMjAwMF93aXRoXzguanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TcG9ydF8yMDAwX3dpdGhfOC5qcGdcIixcblx0XCIuL1Nwb3J0X0J1dHRlcmZseS5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1Nwb3J0X0J1dHRlcmZseS5qcGdcIixcblx0XCIuL1Nwb3J0X0p1bXAuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TcG9ydF9KdW1wLmpwZ1wiLFxuXHRcIi4vU3BvcnRfTmV4dF9Ib2xkLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3BvcnRfTmV4dF9Ib2xkLmpwZ1wiLFxuXHRcIi4vU3BvcnRfUmFjZV9FbmQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9TcG9ydF9SYWNlX0VuZC5qcGdcIixcblx0XCIuL1Nwb3J0X1NreV9Dcm9zcy5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1Nwb3J0X1NreV9Dcm9zcy5qcGdcIixcblx0XCIuL1RyYWN5R2FsaW5kby5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RyYWN5R2FsaW5kby5qcGdcIixcblx0XCIuL1RyYXZlbF9BZHZlbnR1cmVfRG9vci5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RyYXZlbF9BZHZlbnR1cmVfRG9vci5qcGdcIixcblx0XCIuL1RyYXZlbF9CaWtlX2FuZF9TdGFpci5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RyYXZlbF9CaWtlX2FuZF9TdGFpci5qcGdcIixcblx0XCIuL1RyYXZlbF9Cb2F0X1dhbmRlcmVyLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVHJhdmVsX0JvYXRfV2FuZGVyZXIuanBnXCIsXG5cdFwiLi9UcmF2ZWxfQnJpZGdlX2ludG9fRm9yZXN0LmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVHJhdmVsX0JyaWRnZV9pbnRvX0ZvcmVzdC5qcGdcIixcblx0XCIuL1RyYXZlbF9IaWxsc2lkZUNvbG9yLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVHJhdmVsX0hpbGxzaWRlQ29sb3IuanBnXCIsXG5cdFwiLi9UcmF2ZWxfTG9uZXNvbWUuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfTG9uZXNvbWUuanBnXCIsXG5cdFwiLi9UcmF2ZWxfT25fdGhlX1JvYWQuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfT25fdGhlX1JvYWQuanBnXCIsXG5cdFwiLi9UcmF2ZWxfT3Blbk1vdW50YWluLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVHJhdmVsX09wZW5Nb3VudGFpbi5qcGdcIixcblx0XCIuL1RyYXZlbF9PdXRkb29yX0JhdGhzLmpwZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVHJhdmVsX091dGRvb3JfQmF0aHMuanBnXCIsXG5cdFwiLi9UcmF2ZWxfUm9hZF9pbnRvX0hpbGwuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfUm9hZF9pbnRvX0hpbGwuanBnXCIsXG5cdFwiLi9UcmF2ZWxfU3Vuc2V0b25DYW5hbHMuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfU3Vuc2V0b25DYW5hbHMuanBnXCIsXG5cdFwiLi9UcmF2ZWxfVG93ZXIuanBnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfVG93ZXIuanBnXCIsXG5cdFwiLi9jbG9zZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vY2xvc2VIb3Zlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nsb3NlSG92ZXIuc3ZnXCIsXG5cdFwiLi9sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIixcblx0XCIuL3Nwb3J0X3dhdGVyX3R1bm5lbC5qcGdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Nwb3J0X3dhdGVyX3R1bm5lbC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIFxcXFwuKHBuZ3xqcGU/Z3xzdmcpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJ1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuLi9qc29uL0Zpc2hFeWVEYXRhLmpzb24nXHJcbmltcG9ydCB7IFBob3RvZ3JhcGhlciB9IGZyb20gJy4vcGhvdG9ncmFwaGVyJ1xyXG5pbXBvcnQgeyBnZXRVcmxWYWx1ZSwgaW1wb3J0QWxsIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy8nLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSlcclxuXHJcbmNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX3Bob3RvZ3JhcGhlcnMnKVxyXG5jb25zdCBmaWx0ZXIgPSBnZXRVcmxWYWx1ZSgnZmlsdGVyJylcclxubGV0IHBob3RvZ3JhcGhlcnMgPSBEYXRhLnBob3RvZ3JhcGhlcnNcclxuXHJcbi8vIHNpIHVuIGZpbHRyZSBlc3QgcGFzc8OpIGRhbnMgbCd1cmwgPT4gZmlsdHJlciBsZXMgcGhvdG9ncmFwaGVzXHJcbmlmIChmaWx0ZXIgIT09IG51bGwpIHtcclxuICBkb2N1bWVudC50aXRsZSA9ICdGaXNoZXllIC0gJyArIGZpbHRlclxyXG4gIHBob3RvZ3JhcGhlcnMgPSBwaG90b2dyYXBoZXJzLmZpbHRlcigocGhvdG9ncmFwaGVyKSA9PiB7XHJcbiAgICByZXR1cm4gcGhvdG9ncmFwaGVyLnRhZ3MuaW5jbHVkZXMoZmlsdGVyKVxyXG4gIH0pXHJcbiAgY29uc3QgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX3RhZycpXHJcbiAgY29uc3QgYXJyVGFncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhZ3MpXHJcbiAgY29uc3QgY3VycmVudFRhZyA9IGFyclRhZ3MuZmluZCgodCkgPT4gdC5pbm5lckhUTUwuaW5jbHVkZXMoZmlsdGVyKSlcclxuICBjdXJyZW50VGFnLnJlbW92ZSgpXHJcbn1cclxuXHJcbnBob3RvZ3JhcGhlcnMuZm9yRWFjaCgoZWwpID0+IHtcclxuICBjb25zdCBwaG90ID0gbmV3IFBob3RvZ3JhcGhlcihlbClcclxuICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaG90LmNhcmQoKSlcclxufSlcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbXBsZXhFbGVtZW50IiwiUGhvdG9ncmFwaGVyIiwiZGF0YSIsImlkIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsInBvcnRyYWl0IiwibmFtZSIsImxvY2F0aW9uIiwiY2l0eSIsImNvdW50cnkiLCJzbG9nYW4iLCJ0YWdsaW5lIiwicHJpY2UiLCJ0YWdzIiwiZWwiLCJ0eXBlIiwiY2xhc3MiLCJwYXJlbnQiLCJjb250ZW50IiwiYXR0cmlidXRlcyIsImFsdCIsImZvckVhY2giLCJ0YWciLCJ0YWdFbCIsImlubmVyaHRtbCIsImhyZWYiLCJwdXNoIiwidGl0bGUiLCJhcmlhTGFiZWwiLCJ0YWdMaSIsInRhZ0EiLCJnZXRVcmxWYWx1ZSIsInBhcnNlZFVybCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsImdldCIsImltcG9ydEFsbCIsInIiLCJpbWFnZXMiLCJrZXlzIiwiaXRlbSIsImluZGV4IiwicmVwbGFjZSIsImFyciIsIm5ld0FyciIsIm9iaiIsIm5ld09iaiIsIkRPTWVsZW1lbnQiLCJjcmVhdGVFbGVtZW50RnJvbU9iamVjdCIsInBhcGEiLCJmaW5kIiwiYXBwZW5kQ2hpbGQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJjYW1lbENhc2VQYXJzZXIiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVUZXh0Tm9kZSIsImlubmVySFRNTCIsInRleHQiLCJyZXN1bHQiLCJmaW5hbFJlc3VsdCIsImNoYXJBdCIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJmaW5kRm9jdXNhYmxlRWxlbWVudHMiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkRhdGEiLCJyZXF1aXJlIiwiY29udGV4dCIsImNhcmRzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZpbHRlciIsInBob3RvZ3JhcGhlcnMiLCJwaG90b2dyYXBoZXIiLCJpbmNsdWRlcyIsImFyclRhZ3MiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJjdXJyZW50VGFnIiwidCIsInJlbW92ZSIsInBob3QiLCJjYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==