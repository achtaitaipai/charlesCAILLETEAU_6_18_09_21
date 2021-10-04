/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/carousel.js":
/*!***********************************!*\
  !*** ./src/assets/js/carousel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Carousel = /*#__PURE__*/function () {
  /**
   *
   * @param {HTMLelement} element L'élément html animé par la classe
   */
  function Carousel(element) {
    var _this = this;

    _classCallCheck(this, Carousel);

    this.element = element;
    this.prevBtn = this.element.querySelector('.carousel__prev');
    this.nextBtn = this.element.querySelector('.carousel__next');
    this.closeBtn = this.element.querySelector('.carousel__close');
    this.items = this.element.querySelectorAll('.carousel__item');
    this.legend = this.element.querySelector('.carousel__legend');
    this.index = 0;
    this.FocusableElements = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.findFocusableElements)(this.element);
    this.firstChild = this.FocusableElements[0];
    this.lastChild = this.closeBtn;
    this.FocusableElements.forEach(function (el) {
      el.setAttribute('tabindex', -1);
    });
    this.close = this.close.bind(this);
    this.closeBtn.addEventListener('click', function (e) {
      e.preventDefault();

      _this.close();
    });

    for (var index = 0; index < this.items.length; index++) {
      var _element = this.items[index];

      _element.setAttribute('aria-hidden', 'true');

      _element.style.display = 'none';
    }
  }
  /**
   *
   * @param {number} id image à afficher
   */


  _createClass(Carousel, [{
    key: "open",
    value: function open() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      // reset liste des éléments pour qu'ils soient dans l'ordre même s'il y a eu un tri
      this.items = this.element.querySelectorAll('.carousel__item');
      this.index = id; // masquer tous les items du tableau sauf celui à afficher

      for (var index = 0; index < this.items.length; index++) {
        var element = this.items[index];
        element.style.animation = '';

        if (index === this.index) {
          // element.style.transform = 'translate3D(0,0,0)'
          element.style.display = '';
          element.removeAttribute('aria-hidden');
        } else {// element.style.transform = 'translate3D(100%,0,0)'
        }
      } // masquer le header et le main aux lecteurs d'écran


      document.querySelector('main').setAttribute('aria-hidden', 'true');
      document.querySelector('header').setAttribute('aria-hidden', 'true');
      document.body.classList.add('noScroll'); // rendre visible le carousel

      this.element.setAttribute('aria-hidden', 'false');
      this.element.classList.add('visible');
      this.FocusableElements.forEach(function (el) {
        el.setAttribute('tabindex', 0);
      });
      this.legend.textContent = this.items[this.index].getAttribute('data-legend');
      this.element.focus(); // créer les listeners

      this.nextFrame = this.nextFrame.bind(this);
      this.prevFrame = this.prevFrame.bind(this);
      this.keyEvents = this.keyEvents.bind(this);
      this.nextBtn.addEventListener('click', this.nextFrame);
      this.prevBtn.addEventListener('click', this.prevFrame);
      this.element.addEventListener('keydown', this.keyEvents);
    }
    /**
     * Fermer le carousel
     * Rendre les éléments hors-carousel visible
     * cacher le carousel et ses enfants
     * supprimer les listener
     */

  }, {
    key: "close",
    value: function close() {
      document.querySelector('main').setAttribute('aria-hidden', 'false');
      document.querySelector('header').setAttribute('aria-hidden', 'false');
      document.body.classList.remove('noScroll');
      this.element.setAttribute('aria-hidden', 'true');
      this.element.removeEventListener('keydown', this.keyEvents);
      this.nextBtn.removeEventListener('click', this.nextFrame);
      this.prevBtn.removeEventListener('click', this.prevFrame);
      this.element.classList.remove('visible');
      this.FocusableElements.forEach(function (el) {
        el.setAttribute('tabindex', -1);
      });
      this.items = this.element.querySelectorAll('.carousel__item');

      for (var index = 0; index < this.items.length; index++) {
        var element = this.items[index];
        element.setAttribute('aria-hidden', 'true');
        element.style.display = 'none';
        element.style.animation = 'none';
        element.querySelector('.carousel__media').setAttribute('tabindex', -1);
      }

      document.querySelectorAll('.mediaCard__imgContainer')[this.index].focus();
    }
    /**
     *
     * @param {document#event:keydown|document#event:click} e
     */

  }, {
    key: "nextFrame",
    value: function nextFrame(e) {
      e.preventDefault();
      var oldElement = this.items[this.index];
      this.index = (this.index + 1) % this.items.length;
      var newElement = this.items[this.index];
      oldElement.style.animation = '.3s ease-out 0s forwards 1 vanish';
      oldElement.setAttribute('aria-hidden', 'true');
      oldElement.querySelector('.carousel__media').setAttribute('tabindex', -1);
      oldElement.addEventListener('animationend', function () {
        oldElement.style.display = 'none';
      }, {
        once: true
      });
      newElement.style.animation = '.3s ease-in 0s forwards 1 emerge';
      newElement.style.display = '';
      newElement.removeAttribute('aria-hidden');
      this.legend.textContent = newElement.getAttribute('data-legend');
      newElement.querySelector('.carousel__media').setAttribute('tabindex', 1);
      this.lastChild = newElement.querySelector('.carousel__media');
      newElement.querySelector('.carousel__media').focus();
    }
    /**
     * passer à l'image précédente
     * @param {document#event:keydown|document#event:click} e
     */

  }, {
    key: "prevFrame",
    value: function prevFrame(e) {
      e.preventDefault();
      var oldElement = this.items[this.index];
      this.index = this.index > 0 ? this.index - 1 : this.items.length - 1;
      var newElement = this.items[this.index];
      oldElement.style.animation = '.3s ease-in 0s forwards 1 vanish';
      oldElement.setAttribute('aria-hidden', 'true');
      oldElement.addEventListener('animationend', function () {
        oldElement.style.display = 'none';
      }, {
        once: true
      });
      newElement.style.animation = '.3s ease-in 0s forwards 1 emerge';
      newElement.style.display = '';
      this.legend.textContent = newElement.getAttribute('data-legend');
      newElement.removeAttribute('aria-hidden');
      newElement.querySelector('.carousel__media').setAttribute('tabindex', 1);
      this.lastChild = newElement.querySelector('.carousel__media');
      newElement.querySelector('.carousel__media').focus();
    }
    /**
     * gestions des évènements claviers : <- , -> , tab, maj + tab
     * @param {document#event:keydown} e
     */

  }, {
    key: "keyEvents",
    value: function keyEvents(e) {
      switch (e.code) {
        case 'ArrowRight':
          this.nextFrame(e);
          break;

        case 'ArrowLeft':
          this.prevFrame(e);
          break;

        case 'Escape':
          this.close();
          break;

        case 'Tab':
          if (e.shiftKey || e.altKey) {
            if (document.activeElement === this.firstChild) {
              e.preventDefault();
              this.lastChild.focus();
            }
          } else {
            if (document.activeElement === this.lastChild) {
              e.preventDefault();
              this.firstChild.focus();
            }
          }

          break;

        default:
          break;
      }
    }
  }]);

  return Carousel;
}();

/***/ }),

/***/ "./src/assets/js/contactDialog.js":
/*!****************************************!*\
  !*** ./src/assets/js/contactDialog.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactDialog": () => (/* binding */ ContactDialog)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var ContactDialog = /*#__PURE__*/function () {
  function ContactDialog() {
    _classCallCheck(this, ContactDialog);

    this.element = document.querySelector('.dialog');
    this.openBtn = document.querySelector('.photographerIdentity__contact');
    this.closeBtn = document.querySelector('.dialogForm__close');
    this.submitBtn = document.querySelector('.dialogForm__submit');
    this.form = this.element.querySelector('form');
    this.FocusableElements = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.findFocusableElements)(this.element);
    this.firstChild = this.FocusableElements[0];
    this.lastChild = this.closeBtn;
    this.FocusableElements.forEach(function (el) {
      el.setAttribute('tabindex', -1);
    });
    this.open = this.open.bind(this);
    this.openBtn.addEventListener('click', this.open);
  }
  /**
   *Ouvre la fenetre dialog et lance les listeners
   */


  _createClass(ContactDialog, [{
    key: "open",
    value: function open() {
      var _this = this;

      document.querySelector('main').setAttribute('aria-hidden', 'true');
      document.querySelector('header').setAttribute('aria-hidden', 'true');
      document.body.classList.add('noScroll');
      this.element.setAttribute('aria-hidden', 'false');
      this.firstChild.focus();
      this.openBtn.removeEventListener('click', this.open);
      this.element.classList.add('visible');
      this.FocusableElements.forEach(function (el) {
        el.setAttribute('tabindex', 0);
      });
      this.close = this.close.bind(this);
      this.closeBtn.addEventListener('click', function (e) {
        e.preventDefault();

        _this.close();
      });
      this.keyboard = this.keyboard.bind(this);
      this.element.addEventListener('keydown', this.keyboard);
      this.onSubmit = this.onSubmit.bind(this);
      this.submitBtn.addEventListener('click', this.onSubmit);
    }
    /**
     * Ferme la fenetre dialog et supprime les listener
     */

  }, {
    key: "close",
    value: function close() {
      document.querySelector('main').setAttribute('aria-hidden', 'false');
      document.querySelector('header').setAttribute('aria-hidden', 'false');
      document.body.classList.remove('noScroll');
      this.element.setAttribute('aria-hidden', 'true');
      this.closeBtn.removeEventListener('click', this.close);
      this.closeBtn.removeEventListener('keydown', this.keyboard);
      this.submitBtn.removeEventListener('click', this.onSubmit);
      this.element.classList.remove('visible');
      this.open = this.open.bind(this);
      this.openBtn.addEventListener('click', this.open);
      this.FocusableElements.forEach(function (el) {
        el.setAttribute('tabindex', -1);
      });
      this.openBtn.focus();
    }
    /**
     * Gestions des evenements claviers :
     * echap, tab et maj + tab
     * @param {document#event:keydown} e
     */

  }, {
    key: "keyboard",
    value: function keyboard(e) {
      if (e.code === 'Escape') {
        e.preventDefault();
        this.close();
      }

      if (e.code === 'Tab') {
        if (this.lastChild === document.activeElement && !e.shiftKey && !e.altKey) {
          e.preventDefault();
          this.firstChild.focus();
        }

        if ((e.shiftKey || e.altKey) && this.firstChild === document.activeElement) {
          e.preventDefault();
          this.lastChild.focus();
        }
      }
    }
    /**
     * Gestion du formulaire à la soumission
     * @param {document#event:click} e
     */

  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      // e.preventDefault()
      var inputs = this.element.querySelectorAll('.dialogForm__input');

      if (this.form.checkValidity()) {
        var _iterator = _createForOfIteratorHelper(inputs),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var input = _step.value;
            console.log(input.value);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        e.preventDefault();
        this.close();
      }
    }
  }]);

  return ContactDialog;
}();

/***/ }),

/***/ "./src/assets/js/customSelect.js":
/*!***************************************!*\
  !*** ./src/assets/js/customSelect.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/*
source : https://css-tricks.com/striking-a-balance-between-native-and-custom-select-elements/
*/

var Select = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} element
   * @param {function} onChangeFunction - fonction appelée lorsque la valeur du Select est modifiée
   */
  function Select(element, onChangeFunction) {
    var _this = this;

    _classCallCheck(this, Select);

    this.element = element;
    this.onChangeFunction = onChangeFunction;
    this.elSelectNative = this.element.querySelector('select'); // wrap select in container

    var parent = this.elSelectNative.parentNode;
    var wrapper = document.createElement('div');
    wrapper.className = 'selectWrapper';
    parent.replaceChild(wrapper, this.elSelectNative);
    wrapper.appendChild(this.elSelectNative);
    this.createSelectClone();
    this.customOptsList = Array.from(this.elSelectCustomOpts.children);
    this.optionsCount = this.customOptsList.length;
    this.defaultLabel = this.elSelectCustomBox.getAttribute('data-value');
    this.optionChecked = '';
    this.optionHoveredIndex = -1; // Toggle custom select visibility when clicking the box

    this.elSelectCustomBox.addEventListener('click', function (e) {
      var isClosed = !_this.elSelectCustom.classList.contains('isActive');

      if (isClosed) {
        _this.openSelectCustom();
      } else {
        _this.closeSelectCustom();
      }
    }); // Update selectCustom value when selectNative is changed.

    this.elSelectNative.addEventListener('change', function (e) {
      var value = e.target.value;

      var elRespectiveCustomOption = _this.elSelectCustomOpts.querySelectorAll("[data-value=\"".concat(value, "\"]"))[0];

      _this.updateCustomSelectChecked(value, elRespectiveCustomOption.textContent);

      _this.onChangeFunction(value);
    }); // Update selectCustom value when an option is clicked or hovered

    this.customOptsList.forEach(function (elOption, index) {
      elOption.addEventListener('click', function (e) {
        var value = e.target.getAttribute('data-value'); // Sync native select to have the same value

        _this.elSelectNative.value = value;

        _this.updateCustomSelectChecked(value, e.target.textContent);

        _this.closeSelectCustom();

        _this.onChangeFunction(value);
      });
      elOption.addEventListener('mouseenter', function (e) {
        _this.updateCustomSelectHovered(index);
      });
    });
  }
  /**
   *Création du pseudo-sélect
   */


  _createClass(Select, [{
    key: "createSelectClone",
    value: function createSelectClone() {
      var obj = [{
        name: 'root',
        type: 'div',
        class: 'selectCustom js-selectCustom',
        attributes: {
          ariaHidden: 'true'
        },
        parent: 'main'
      }, {
        type: 'div',
        class: 'selectCustom-trigger',
        content: this.elSelectNative.options[this.elSelectNative.selectedIndex].textContent,
        parent: 'root'
      }, {
        name: 'options',
        type: 'div',
        class: 'selectCustom-options',
        parent: 'root'
      }];
      var options = this.element.querySelector('select').children;

      for (var i = 0; i < options.length; i++) {
        var option = {};
        option.type = 'div';
        option.class = 'selectCustom-option';
        option.parent = 'options';
        option.attributes = {
          dataValue: options[i].value
        };
        option.content = options[i].innerHTML;
        obj.push(option);
      }

      this.element.querySelector('.selectWrapper').appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createComplexElement)(obj));
      this.elSelectCustom = this.element.querySelector('.js-selectCustom');
      this.elSelectCustomBox = this.element.querySelector('.selectCustom-trigger');
      this.elSelectCustomOpts = this.element.querySelector('.selectCustom-options');
    }
    /**
     * Ouvril le pseudo-sélect
     */

  }, {
    key: "openSelectCustom",
    value: function openSelectCustom() {
      var _this2 = this;

      this.elSelectCustom.classList.add('isActive'); // Remove aria-hidden in case this was opened by a user
      // who uses AT (e.g. Screen Reader) and a mouse at the same time.

      this.elSelectCustom.setAttribute('aria-hidden', false);

      if (this.optionChecked) {
        var optionCheckedIndex = this.customOptsList.findIndex(function (el) {
          return el.getAttribute('data-value') === _this2.optionChecked;
        });
        this.updateCustomSelectHovered(optionCheckedIndex);
      } // Add related event listeners


      this.watchClickOutside = this.watchClickOutside.bind(this);
      this.supportKeyboardNavigation = this.supportKeyboardNavigation.bind(this);
      document.addEventListener('click', this.watchClickOutside);
      document.addEventListener('keydown', this.supportKeyboardNavigation);
    }
    /**
     * Fermer le pseudo-sélect
     */

  }, {
    key: "closeSelectCustom",
    value: function closeSelectCustom() {
      this.elSelectCustom.classList.remove('isActive');
      this.elSelectCustom.setAttribute('aria-hidden', true);
      this.updateCustomSelectHovered(-1); // Remove related event listeners

      document.removeEventListener('click', this.watchClickOutside);
      document.removeEventListener('keydown', this.supportKeyboardNavigation);
    }
    /**
     *Gestion des hover dans le pseudo-sélect
     * @param {number} newIndex - index de l'émément survolé par la souris
     */

  }, {
    key: "updateCustomSelectHovered",
    value: function updateCustomSelectHovered(newIndex) {
      var prevOption = this.elSelectCustomOpts.children[this.optionHoveredIndex];
      var option = this.elSelectCustomOpts.children[newIndex];

      if (prevOption) {
        prevOption.classList.remove('isHover');
      }

      if (option) {
        option.classList.add('isHover');
      }

      this.optionHoveredIndex = newIndex;
    }
    /**
     *Gestion de la sélection d'un nouvel élément
     * @param {string} value - valeur de lélément sélectioonnée
     * @param {string} text - nom de l'élément sélectionné
     */

  }, {
    key: "updateCustomSelectChecked",
    value: function updateCustomSelectChecked(value, text) {
      var prevValue = this.optionChecked;
      var elPrevOption = this.elSelectCustomOpts.querySelector("[data-value=\"".concat(prevValue, "\""));
      var elOption = this.elSelectCustomOpts.querySelector("[data-value=\"".concat(value, "\""));

      if (elPrevOption) {
        elPrevOption.classList.remove('isActive');
      }

      if (elOption) {
        elOption.classList.add('isActive');
      }

      this.elSelectCustomBox.textContent = text;
      this.optionChecked = value;
    }
    /**
     * Lorsque l'utilisateur clique en dehors du sélect
     *  @param  {document#event:click} e
     */

  }, {
    key: "watchClickOutside",
    value: function watchClickOutside(e) {
      var didClickedOutside = !this.elSelectCustom.contains(e.target);

      if (didClickedOutside) {
        this.closeSelectCustom();
      }
    }
    /**
     * Gestions des évènements clavier : fleche bas/haut, espace/entrée, échap
     * @param {document#event:keydown} e
     */

  }, {
    key: "supportKeyboardNavigation",
    value: function supportKeyboardNavigation(e) {
      // press down -> go next
      if (e.code === 40 && this.optionHoveredIndex < this.optionsCount - 1) {
        e.preventDefault(); // prevent page scrolling

        this.updateCustomSelectHovered(this.optionHoveredIndex + 1);
      } // press up -> go previous


      if (e.code === 38 && this.optionHoveredIndex > 0) {
        e.preventDefault(); // prevent page scrolling

        this.updateCustomSelectHovered(this.optionHoveredIndex - 1);
      } // press Enter or space -> select the option


      if (e.code === 13 || e.code === 32) {
        e.preventDefault();
        var option = this.elSelectCustomOpts.children[this.optionHoveredIndex];
        var value = option && option.getAttribute('data-value');

        if (value) {
          this.elSelectNative.value = value;
          this.updateCustomSelectChecked(value, option.textContent);
        }

        this.closeSelectCustom();
      } // press ESC -> close selectCustom


      if (e.code === 27) {
        this.closeSelectCustom();
      }
    }
    /**
     *
     * @param {htmlElement} element
     * @param {function} onChangeFunction - fonction appelée lorsque la valeur du Select est modifiée
     * @returns {Select}
     */

  }], [{
    key: "create",
    value: function create(element, onChangeFunction) {
      return new Select(element, onChangeFunction);
    }
  }]);

  return Select;
}();

/***/ }),

/***/ "./src/assets/js/media.js":
/*!********************************!*\
  !*** ./src/assets/js/media.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Media": () => (/* binding */ Media)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Media = /*#__PURE__*/function () {
  /**
   *
   * @param {Object} obj
   * @param {Date} obj.date
   * @param {number} obj.id
   * @param {string=} obj.image - url de l'image
   * @param {string=} obj.video - url de la video
   * @param {number} obj.likes
   * @param {number} obj.photographerId
   * @param {number} obj.price
   * @param {Array.<string>} obj.tags
   * @param {string} obj.title
   * @param {string} obj.alt
   * @param {function} refreshTotalLikes
   */
  function Media(obj, refreshTotalLikes) {
    _classCallCheck(this, Media);

    this.refreshTotalLikes = refreshTotalLikes;
    this.title = obj.title;
    this.alt = obj.title;
    this.src = obj.image || obj.video;
    this.likes = obj.likes;
    this.date = new Date(obj.date);
    if (obj.image) this.media = new Photo(obj);else if (obj.video) this.media = new Video(obj);
    this.cardElement = this.createCard();
    this.carouselItemElement = this.createCarouselItem();
    this.appendElements();
    this.likesEl = this.cardElement.querySelector('.mediaCard__likes');
    this.onLikeClick = this.onLikeClick.bind(this);
    this.likesEl.addEventListener('click', this.onLikeClick);
  }
  /**
   * Lorsque le bouton like est cliqué
   */


  _createClass(Media, [{
    key: "onLikeClick",
    value: function onLikeClick(e) {
      this.likes++;
      this.likesEl.textContent = this.likesEl.textContent.replace(this.likes - 1, this.likes);
      this.refreshTotalLikes(e);
      this.likesEl.removeEventListener('click', this.onLikeClick);
    }
    /**
     * Ajout du média à la liste des medias et au carousel
     */

  }, {
    key: "appendElements",
    value: function appendElements() {
      document.querySelector('.mediasContainer').append(this.cardElement);
      document.querySelector('.carousel__frame').append(this.carouselItemElement);
    }
  }, {
    key: "createCard",
    value:
    /**
     *
     * @returns {Array.<Object>} MediaCardObj
     */
    function createCard() {
      var mediaCardObj = [{
        name: 'root',
        type: 'div',
        class: 'mediaCard',
        parent: 'main'
      }, {
        name: 'imgContainer',
        class: 'mediaCard__imgContainer',
        type: 'a',
        parent: 'root',
        attributes: {
          href: '#',
          title: this.alt + ', afficher en grand.'
        }
      }, {
        name: 'infos',
        class: 'mediaCard__infos',
        type: 'div',
        parent: 'root'
      }, {
        name: 'title',
        class: 'mediaCard__title',
        type: 'h3',
        parent: 'infos',
        content: this.title
      }, {
        name: 'likes',
        class: 'mediaCard__likes',
        type: 'em',
        parent: 'infos',
        content: this.likes + ' ',
        attributes: {
          tabindex: 0,
          ariaLabel: 'likes'
        }
      }, {
        name: 'heart',
        class: 'mediaCard__heart',
        type: 'span',
        parent: 'likes',
        content: '♥'
      }];
      mediaCardObj.push(this.media.mediaCardObj);
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createComplexElement)(mediaCardObj);
    }
    /**
     *
     * @returns {Array.<Object>} carouselItemObj
     */

  }, {
    key: "createCarouselItem",
    value: function createCarouselItem() {
      var carouselItemObj = {
        type: 'li',
        class: 'carousel__item',
        attributes: {
          dataLegend: this.title
        }
      };
      var carouselItem = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementFromObject)(carouselItemObj);
      carouselItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementFromObject)(this.media.carouselItemObj));
      return carouselItem;
    }
  }], [{
    key: "getLikes",
    value: function getLikes(medias) {
      var likes = 0;
      medias.forEach(function (media) {
        likes += media.likes;
      });
      return likes;
    }
    /**
     * Trie les éléments médias
     * @param {('popularity'|'date'|'title')} typeOfSort
     * @param {Array.<Media>} medias
     */

  }, {
    key: "sort",
    value: function sort(typeOfSort, medias) {
      switch (typeOfSort) {
        case 'popularity':
          medias.sort(function (a, b) {
            if (a.likes < b.likes) {
              return 1;
            }

            if (a.likes > b.likes) {
              return -1;
            }

            return 0;
          });
          break;

        case 'date':
          medias.sort(function (a, b) {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
          });
          break;

        case 'title':
          medias.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }

            if (a.title > b.title) {
              return 1;
            }

            return 0;
          });
          break;
      }

      medias.forEach(function (media) {
        media.appendElements();
      });
    }
  }]);

  return Media;
}();

var Photo =
/**
 *
 * @param {Object} obj
 * @param {Date} obj.date
 * @param {number} obj.id
 * @param {string=} obj.image - url de l'image
 * @param {string=} obj.video - url de la video
 * @param {number} obj.likes
 * @param {number} obj.photographerId
 * @param {number} obj.price
 * @param {Array.<string>} obj.tags
 * @param {string} obj.title
 * @param {string} obj.alt
 */
function Photo(obj) {
  _classCallCheck(this, Photo);

  this.mediaCardObj = {
    type: 'img',
    class: 'mediaCard__media',
    parent: 'imgContainer',
    attributes: {
      src: "./assets/images/".concat(obj.image),
      alt: obj.title
    }
  };
  this.carouselItemObj = {
    type: 'img',
    class: 'carousel__media',
    attributes: {
      src: "./assets/images/".concat(obj.image),
      alt: ''
    }
  };
};

var Video =
/**
 *
 * @param {Object} obj
 * @param {Date} obj.date
 * @param {number} obj.id
 * @param {string=} obj.image - url de l'image
 * @param {string=} obj.video - url de la video
 * @param {number} obj.likes
 * @param {number} obj.photographerId
 * @param {number} obj.price
 * @param {Array.<string>} obj.tags
 * @param {string} obj.title
 * @param {string} obj.alt
 */
function Video(obj) {
  _classCallCheck(this, Video);

  this.mediaCardObj = {
    type: 'video',
    class: 'mediaCard__media',
    parent: 'imgContainer',
    attributes: {
      src: "./assets/images/".concat(obj.video)
    }
  };
  this.carouselItemObj = {
    type: 'video',
    class: 'carousel__media',
    attributes: {
      src: "./assets/images/".concat(obj.video),
      controls: true
    }
  };
};

/***/ }),

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

/***/ "./src/assets/images sync \\.(mp4)$":
/*!*******************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(mp4)$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Animals_Puppiness.mp4": "./src/assets/images/Animals_Puppiness.mp4",
	"./Animals_Wild_Horses_in_the_mountains.mp4": "./src/assets/images/Animals_Wild_Horses_in_the_mountains.mp4",
	"./Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4": "./src/assets/images/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4",
	"./Art_Wooden_Horse_Sculpture.mp4": "./src/assets/images/Art_Wooden_Horse_Sculpture.mp4",
	"./Sport_Tricks_in_the_air.mp4": "./src/assets/images/Sport_Tricks_in_the_air.mp4",
	"./Travel_Rock_Mountains.mp4": "./src/assets/images/Travel_Rock_Mountains.mp4"
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
webpackContext.id = "./src/assets/images sync \\.(mp4)$";

/***/ }),

/***/ "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg> ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>";

/***/ }),

/***/ "./src/assets/images/Animals_Puppiness.mp4":
/*!*************************************************!*\
  !*** ./src/assets/images/Animals_Puppiness.mp4 ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Animals_Puppiness.mp4";

/***/ }),

/***/ "./src/assets/images/Animals_Wild_Horses_in_the_mountains.mp4":
/*!********************************************************************!*\
  !*** ./src/assets/images/Animals_Wild_Horses_in_the_mountains.mp4 ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Animals_Wild_Horses_in_the_mountains.mp4";

/***/ }),

/***/ "./src/assets/images/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4":
/*!*****************************************************************************************************!*\
  !*** ./src/assets/images/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4 ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4";

/***/ }),

/***/ "./src/assets/images/Art_Wooden_Horse_Sculpture.mp4":
/*!**********************************************************!*\
  !*** ./src/assets/images/Art_Wooden_Horse_Sculpture.mp4 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Art_Wooden_Horse_Sculpture.mp4";

/***/ }),

/***/ "./src/assets/images/Sport_Tricks_in_the_air.mp4":
/*!*******************************************************!*\
  !*** ./src/assets/images/Sport_Tricks_in_the_air.mp4 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Sport_Tricks_in_the_air.mp4";

/***/ }),

/***/ "./src/assets/images/Travel_Rock_Mountains.mp4":
/*!*****************************************************!*\
  !*** ./src/assets/images/Travel_Rock_Mountains.mp4 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/Travel_Rock_Mountains.mp4";

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
/******/ 			"photographers": 0
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
/*!****************************************!*\
  !*** ./src/assets/js/photographers.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _json_FishEyeData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/FishEyeData.json */ "./src/assets/json/FishEyeData.json");
/* harmony import */ var _customSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customSelect */ "./src/assets/js/customSelect.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./src/assets/js/carousel.js");
/* harmony import */ var _photographer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photographer */ "./src/assets/js/photographer.js");
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media */ "./src/assets/js/media.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/assets/js/utils.js");
/* harmony import */ var _contactDialog_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactDialog.js */ "./src/assets/js/contactDialog.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








 // importer les images

(0,_utils__WEBPACK_IMPORTED_MODULE_6__.importAll)(__webpack_require__("./src/assets/images sync \\.(mp4)$"));
/* Déclaration des variables
 */

var Id = parseInt((0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlValue)('id'));
if (isNaN(Id)) window.location.href = 'index.html'; // récupérer l'objet photographe correspondant à l'id passé dans l'url

var photographerData = _json_FishEyeData_json__WEBPACK_IMPORTED_MODULE_1__.photographers.find(function (el) {
  return el.id === Id;
}); // créé un nouveau photographe ainsi que son élément 'identity' puis l'insérer

var photographer = new _photographer__WEBPACK_IMPORTED_MODULE_4__.Photographer(photographerData);
var main = document.querySelector('.mainPhotographer'); // récupérer les objet medias qui correspondent à l'id passé dans l'url

var mediaData = _json_FishEyeData_json__WEBPACK_IMPORTED_MODULE_1__.media.filter(function (el) {
  return el.photographerId === parseInt((0,_utils__WEBPACK_IMPORTED_MODULE_6__.getUrlValue)('id'));
});
main.insertBefore(photographer.identitySection(), document.querySelector('.medias'));
document.title = 'Fisheye - ' + photographer.name; // eslint-disable-next-line no-unused-vars

var dialog = new _contactDialog_js__WEBPACK_IMPORTED_MODULE_7__.ContactDialog(); // au chargement activé les animations
// https://css-tricks.com/transitions-only-after-page-load/

window.addEventListener('load', function () {
  var anims = document.getElementsByClassName('preload');

  while (anims.length > 0) {
    anims[0].classList.remove('preload');
  }
});
var medias = [];
mediaData.forEach(function (data) {
  var media = new _media__WEBPACK_IMPORTED_MODULE_5__.Media(data, function (e) {
    e.preventDefault();
    document.querySelector('.photographerIdentity__likes').textContent = "".concat(_media__WEBPACK_IMPORTED_MODULE_5__.Media.getLikes(medias), " \u2665");
  });
  medias.push(media);
});
_media__WEBPACK_IMPORTED_MODULE_5__.Media.sort('popularity', medias); // au clique sur une mediaCard => ouvrir le carousel à l'image correspondante

var _loop = function _loop(i) {
  var mediaCard = medias[i].cardElement;
  var mediaCardLink = mediaCard.querySelector('a');
  mediaCardLink.addEventListener('click', function (e) {
    e.preventDefault();

    var index = _toConsumableArray(mediaCard.parentElement.children).indexOf(mediaCard);

    carousel.open(index);
  });
};

for (var i = 0; i < medias.length; i++) {
  _loop(i);
} // création du sélect customisé


_customSelect__WEBPACK_IMPORTED_MODULE_2__.Select.create(document.querySelector('.selectStyled'), function (value) {
  return _media__WEBPACK_IMPORTED_MODULE_5__.Media.sort(value, medias);
});
document.querySelector('.photographerIdentity__likes').textContent = "".concat(_media__WEBPACK_IMPORTED_MODULE_5__.Media.getLikes(medias), " \u2665");
var carousel = new _carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel(document.querySelector('.carousel'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLHlDQUF5QyxHQUFHLE9BQU8sNHBCQUE0cEIsUUFBUSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxRQUFRLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUss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QSxDQUFXMUQsS0FBWCxFQUFrQnVGLE1BQWxCLENBRHFEO0FBQUEsQ0FBdkQ7QUFJQXRILFFBQVEsQ0FBQ3hCLGFBQVQsQ0FDRSw4QkFERixFQUVFNEIsV0FGRixhQUVtQnFGLGtEQUFBLENBQWU2QixNQUFmLENBRm5CO0FBSUEsSUFBTXdFLFFBQVEsR0FBRyxJQUFJek4sK0NBQUosQ0FBYTJCLFFBQVEsQ0FBQ3hCLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYixDQUFqQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9qcy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL2NvbnRhY3REaWFsb2cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9qcy9jdXN0b21TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9qcy9tZWRpYS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL3Bob3RvZ3JhcGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcz9hMTgxIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9pbWFnZXN8c3luY3xub25yZWN1cnNpdmV8Ly4obXA0KSQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9qcy9waG90b2dyYXBoZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbmRGb2N1c2FibGVFbGVtZW50cyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWwge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtIVE1MZWxlbWVudH0gZWxlbWVudCBMJ8OpbMOpbWVudCBodG1sIGFuaW3DqSBwYXIgbGEgY2xhc3NlXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgdGhpcy5wcmV2QnRuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fcHJldicpXHJcbiAgICB0aGlzLm5leHRCdG4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19uZXh0JylcclxuICAgIHRoaXMuY2xvc2VCdG4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19jbG9zZScpXHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpXHJcbiAgICB0aGlzLmxlZ2VuZCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2xlZ2VuZCcpXHJcbiAgICB0aGlzLmluZGV4ID0gMFxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cyA9IGZpbmRGb2N1c2FibGVFbGVtZW50cyh0aGlzLmVsZW1lbnQpXHJcbiAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzWzBdXHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2xvc2VCdG5cclxuICAgIHRoaXMuRm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgfSlcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5pdGVtc1tpbmRleF1cclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIGltYWdlIMOgIGFmZmljaGVyXHJcbiAgICovXHJcbiAgb3BlbihpZCA9IDApIHtcclxuICAgIC8vIHJlc2V0IGxpc3RlIGRlcyDDqWzDqW1lbnRzIHBvdXIgcXUnaWxzIHNvaWVudCBkYW5zIGwnb3JkcmUgbcOqbWUgcydpbCB5IGEgZXUgdW4gdHJpXHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9faXRlbScpXHJcbiAgICB0aGlzLmluZGV4ID0gaWRcclxuXHJcbiAgICAvLyBtYXNxdWVyIHRvdXMgbGVzIGl0ZW1zIGR1IHRhYmxlYXUgc2F1ZiBjZWx1aSDDoCBhZmZpY2hlclxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLml0ZW1zW2luZGV4XVxyXG4gICAgICBlbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9ICcnXHJcbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5pbmRleCkge1xyXG4gICAgICAgIC8vIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNEKDAsMCwwKSdcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM0QoMTAwJSwwLDApJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWFzcXVlciBsZSBoZWFkZXIgZXQgbGUgbWFpbiBhdXggbGVjdGV1cnMgZCfDqWNyYW5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9TY3JvbGwnKVxyXG5cclxuICAgIC8vIHJlbmRyZSB2aXNpYmxlIGxlIGNhcm91c2VsXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcbiAgICB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKVxyXG4gICAgfSlcclxuICAgIHRoaXMubGVnZW5kLnRleHRDb250ZW50ID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVnZW5kJylcclxuICAgIHRoaXMuZWxlbWVudC5mb2N1cygpXHJcblxyXG4gICAgLy8gY3LDqWVyIGxlcyBsaXN0ZW5lcnNcclxuICAgIHRoaXMubmV4dEZyYW1lID0gdGhpcy5uZXh0RnJhbWUuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5wcmV2RnJhbWUgPSB0aGlzLnByZXZGcmFtZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmtleUV2ZW50cyA9IHRoaXMua2V5RXZlbnRzLmJpbmQodGhpcylcclxuICAgIHRoaXMubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dEZyYW1lKVxyXG4gICAgdGhpcy5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2RnJhbWUpXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVybWVyIGxlIGNhcm91c2VsXHJcbiAgICogUmVuZHJlIGxlcyDDqWzDqW1lbnRzIGhvcnMtY2Fyb3VzZWwgdmlzaWJsZVxyXG4gICAqIGNhY2hlciBsZSBjYXJvdXNlbCBldCBzZXMgZW5mYW50c1xyXG4gICAqIHN1cHByaW1lciBsZXMgbGlzdGVuZXJcclxuICAgKi9cclxuICBjbG9zZSgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub1Njcm9sbCcpXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlFdmVudHMpXHJcbiAgICB0aGlzLm5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRGcmFtZSlcclxuICAgIHRoaXMucHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldkZyYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfX2l0ZW0nKVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLml0ZW1zW2luZGV4XVxyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICBlbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9ICdub25lJ1xyXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbWVkaWEnKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVkaWFDYXJkX19pbWdDb250YWluZXInKVt0aGlzLmluZGV4XS5mb2N1cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6a2V5ZG93bnxkb2N1bWVudCNldmVudDpjbGlja30gZVxyXG4gICAqL1xyXG4gIG5leHRGcmFtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG9sZEVsZW1lbnQgPSB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdXHJcbiAgICB0aGlzLmluZGV4ID0gKHRoaXMuaW5kZXggKyAxKSAlIHRoaXMuaXRlbXMubGVuZ3RoXHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XVxyXG4gICAgb2xkRWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnLjNzIGVhc2Utb3V0IDBzIGZvcndhcmRzIDEgdmFuaXNoJ1xyXG4gICAgb2xkRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgb2xkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKVxyXG4gICAgb2xkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnYW5pbWF0aW9uZW5kJyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIG9sZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKVxyXG4gICAgbmV3RWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnLjNzIGVhc2UtaW4gMHMgZm9yd2FyZHMgMSBlbWVyZ2UnXHJcbiAgICBuZXdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgbmV3RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcclxuICAgIHRoaXMubGVnZW5kLnRleHRDb250ZW50ID0gbmV3RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGVnZW5kJylcclxuICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19tZWRpYScpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAxKVxyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbWVkaWEnKVxyXG4gICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcGFzc2VyIMOgIGwnaW1hZ2UgcHLDqWPDqWRlbnRlXHJcbiAgICogQHBhcmFtIHtkb2N1bWVudCNldmVudDprZXlkb3dufGRvY3VtZW50I2V2ZW50OmNsaWNrfSBlXHJcbiAgICovXHJcbiAgcHJldkZyYW1lKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2xkRWxlbWVudCA9IHRoaXMuaXRlbXNbdGhpcy5pbmRleF1cclxuICAgIHRoaXMuaW5kZXggPSB0aGlzLmluZGV4ID4gMCA/IHRoaXMuaW5kZXggLSAxIDogdGhpcy5pdGVtcy5sZW5ndGggLSAxXHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XVxyXG4gICAgb2xkRWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnLjNzIGVhc2UtaW4gMHMgZm9yd2FyZHMgMSB2YW5pc2gnXHJcbiAgICBvbGRFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICBvbGRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdhbmltYXRpb25lbmQnLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgb2xkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApXHJcbiAgICBuZXdFbGVtZW50LnN0eWxlLmFuaW1hdGlvbiA9ICcuM3MgZWFzZS1pbiAwcyBmb3J3YXJkcyAxIGVtZXJnZSdcclxuICAgIG5ld0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICB0aGlzLmxlZ2VuZC50ZXh0Q29udGVudCA9IG5ld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxlZ2VuZCcpXHJcbiAgICBuZXdFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxyXG4gICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDEpXHJcbiAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19tZWRpYScpXHJcbiAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbWVkaWEnKS5mb2N1cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXN0aW9ucyBkZXMgw6l2w6huZW1lbnRzIGNsYXZpZXJzIDogPC0gLCAtPiAsIHRhYiwgbWFqICsgdGFiXHJcbiAgICogQHBhcmFtIHtkb2N1bWVudCNldmVudDprZXlkb3dufSBlXHJcbiAgICovXHJcbiAga2V5RXZlbnRzKGUpIHtcclxuICAgIHN3aXRjaCAoZS5jb2RlKSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgIHRoaXMubmV4dEZyYW1lKGUpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICB0aGlzLnByZXZGcmFtZShlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnVGFiJzpcclxuICAgICAgICBpZiAoZS5zaGlmdEtleSB8fCBlLmFsdEtleSkge1xyXG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQuZm9jdXMoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5sYXN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZC5mb2N1cygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluZEZvY3VzYWJsZUVsZW1lbnRzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0RGlhbG9nIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2cnKVxyXG4gICAgdGhpcy5vcGVuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0JylcclxuICAgIHRoaXMuY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nRm9ybV9fY2xvc2UnKVxyXG4gICAgdGhpcy5zdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nRm9ybV9fc3VibWl0JylcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJylcclxuICAgIHRoaXMuRm9jdXNhYmxlRWxlbWVudHMgPSBmaW5kRm9jdXNhYmxlRWxlbWVudHModGhpcy5lbGVtZW50KVxyXG4gICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5Gb2N1c2FibGVFbGVtZW50c1swXVxyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNsb3NlQnRuXHJcbiAgICB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSlcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcylcclxuICAgIHRoaXMub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqT3V2cmUgbGEgZmVuZXRyZSBkaWFsb2cgZXQgbGFuY2UgbGVzIGxpc3RlbmVyc1xyXG4gICAqL1xyXG4gIG9wZW4oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vU2Nyb2xsJylcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgIHRoaXMuZmlyc3RDaGlsZC5mb2N1cygpXHJcbiAgICB0aGlzLm9wZW5CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4pXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcbiAgICB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmtleWJvYXJkID0gdGhpcy5rZXlib2FyZC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Ym9hcmQpXHJcblxyXG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU3VibWl0KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVybWUgbGEgZmVuZXRyZSBkaWFsb2cgZXQgc3VwcHJpbWUgbGVzIGxpc3RlbmVyXHJcbiAgICovXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKVxyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICB0aGlzLmNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZSlcclxuICAgIHRoaXMuY2xvc2VCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Ym9hcmQpXHJcbiAgICB0aGlzLnN1Ym1pdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TdWJtaXQpXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXHJcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5vcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuKVxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXHJcbiAgICB9KVxyXG4gICAgdGhpcy5vcGVuQnRuLmZvY3VzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlc3Rpb25zIGRlcyBldmVuZW1lbnRzIGNsYXZpZXJzIDpcclxuICAgKiBlY2hhcCwgdGFiIGV0IG1haiArIHRhYlxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6a2V5ZG93bn0gZVxyXG4gICAqL1xyXG4gIGtleWJvYXJkKGUpIHtcclxuICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLmNsb3NlKClcclxuICAgIH1cclxuICAgIGlmIChlLmNvZGUgPT09ICdUYWInKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICFlLnNoaWZ0S2V5ICYmXHJcbiAgICAgICAgIWUuYWx0S2V5XHJcbiAgICAgICkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZC5mb2N1cygpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIChlLnNoaWZ0S2V5IHx8IGUuYWx0S2V5KSAmJlxyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG4gICAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZC5mb2N1cygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlc3Rpb24gZHUgZm9ybXVsYWlyZSDDoCBsYSBzb3VtaXNzaW9uXHJcbiAgICogQHBhcmFtIHtkb2N1bWVudCNldmVudDpjbGlja30gZVxyXG4gICAqL1xyXG4gIG9uU3VibWl0KGUpIHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaWFsb2dGb3JtX19pbnB1dCcpXHJcbiAgICBpZiAodGhpcy5mb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICBmb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxyXG4gICAgICB9XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLmNsb3NlKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcGxleEVsZW1lbnQgfSBmcm9tICcuL3V0aWxzJ1xyXG4vKlxyXG5zb3VyY2UgOiBodHRwczovL2Nzcy10cmlja3MuY29tL3N0cmlraW5nLWEtYmFsYW5jZS1iZXR3ZWVuLW5hdGl2ZS1hbmQtY3VzdG9tLXNlbGVjdC1lbGVtZW50cy9cclxuKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdCB7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2hhbmdlRnVuY3Rpb24gLSBmb25jdGlvbiBhcHBlbMOpZSBsb3JzcXVlIGxhIHZhbGV1ciBkdSBTZWxlY3QgZXN0IG1vZGlmacOpZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9uQ2hhbmdlRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgIHRoaXMub25DaGFuZ2VGdW5jdGlvbiA9IG9uQ2hhbmdlRnVuY3Rpb25cclxuICAgIHRoaXMuZWxTZWxlY3ROYXRpdmUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcclxuXHJcbiAgICAvLyB3cmFwIHNlbGVjdCBpbiBjb250YWluZXJcclxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZWxTZWxlY3ROYXRpdmUucGFyZW50Tm9kZVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdzZWxlY3RXcmFwcGVyJ1xyXG4gICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCB0aGlzLmVsU2VsZWN0TmF0aXZlKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsU2VsZWN0TmF0aXZlKVxyXG5cclxuICAgIHRoaXMuY3JlYXRlU2VsZWN0Q2xvbmUoKVxyXG5cclxuICAgIHRoaXMuY3VzdG9tT3B0c0xpc3QgPSBBcnJheS5mcm9tKHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLmNoaWxkcmVuKVxyXG4gICAgdGhpcy5vcHRpb25zQ291bnQgPSB0aGlzLmN1c3RvbU9wdHNMaXN0Lmxlbmd0aFxyXG4gICAgdGhpcy5kZWZhdWx0TGFiZWwgPSB0aGlzLmVsU2VsZWN0Q3VzdG9tQm94LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpXHJcbiAgICB0aGlzLm9wdGlvbkNoZWNrZWQgPSAnJ1xyXG4gICAgdGhpcy5vcHRpb25Ib3ZlcmVkSW5kZXggPSAtMVxyXG4gICAgLy8gVG9nZ2xlIGN1c3RvbSBzZWxlY3QgdmlzaWJpbGl0eSB3aGVuIGNsaWNraW5nIHRoZSBib3hcclxuICAgIHRoaXMuZWxTZWxlY3RDdXN0b21Cb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBpc0Nsb3NlZCA9ICF0aGlzLmVsU2VsZWN0Q3VzdG9tLmNsYXNzTGlzdC5jb250YWlucygnaXNBY3RpdmUnKVxyXG5cclxuICAgICAgaWYgKGlzQ2xvc2VkKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuU2VsZWN0Q3VzdG9tKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNsb3NlU2VsZWN0Q3VzdG9tKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBVcGRhdGUgc2VsZWN0Q3VzdG9tIHZhbHVlIHdoZW4gc2VsZWN0TmF0aXZlIGlzIGNoYW5nZWQuXHJcbiAgICB0aGlzLmVsU2VsZWN0TmF0aXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgY29uc3QgZWxSZXNwZWN0aXZlQ3VzdG9tT3B0aW9uID0gdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBgW2RhdGEtdmFsdWU9XCIke3ZhbHVlfVwiXWBcclxuICAgICAgKVswXVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGVsUmVzcGVjdGl2ZUN1c3RvbU9wdGlvbi50ZXh0Q29udGVudFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMub25DaGFuZ2VGdW5jdGlvbih2YWx1ZSlcclxuICAgIH0pXHJcblxyXG4gICAgLy8gVXBkYXRlIHNlbGVjdEN1c3RvbSB2YWx1ZSB3aGVuIGFuIG9wdGlvbiBpcyBjbGlja2VkIG9yIGhvdmVyZWRcclxuICAgIHRoaXMuY3VzdG9tT3B0c0xpc3QuZm9yRWFjaCgoZWxPcHRpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgIGVsT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpXHJcblxyXG4gICAgICAgIC8vIFN5bmMgbmF0aXZlIHNlbGVjdCB0byBoYXZlIHRoZSBzYW1lIHZhbHVlXHJcbiAgICAgICAgdGhpcy5lbFNlbGVjdE5hdGl2ZS52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkKHZhbHVlLCBlLnRhcmdldC50ZXh0Q29udGVudClcclxuICAgICAgICB0aGlzLmNsb3NlU2VsZWN0Q3VzdG9tKClcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVuY3Rpb24odmFsdWUpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBlbE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGUpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdEhvdmVyZWQoaW5kZXgpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpDcsOpYXRpb24gZHUgcHNldWRvLXPDqWxlY3RcclxuICAgKi9cclxuICBjcmVhdGVTZWxlY3RDbG9uZSgpIHtcclxuICAgIGNvbnN0IG9iaiA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdyb290JyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3NlbGVjdEN1c3RvbSBqcy1zZWxlY3RDdXN0b20nLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGFyaWFIaWRkZW46ICd0cnVlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdzZWxlY3RDdXN0b20tdHJpZ2dlcicsXHJcbiAgICAgICAgY29udGVudDpcclxuICAgICAgICAgIHRoaXMuZWxTZWxlY3ROYXRpdmUub3B0aW9uc1t0aGlzLmVsU2VsZWN0TmF0aXZlLnNlbGVjdGVkSW5kZXhdXHJcbiAgICAgICAgICAgIC50ZXh0Q29udGVudCxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdvcHRpb25zJyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3NlbGVjdEN1c3RvbS1vcHRpb25zJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuY2hpbGRyZW5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSB7fVxyXG4gICAgICBvcHRpb24udHlwZSA9ICdkaXYnXHJcbiAgICAgIG9wdGlvbi5jbGFzcyA9ICdzZWxlY3RDdXN0b20tb3B0aW9uJ1xyXG4gICAgICBvcHRpb24ucGFyZW50ID0gJ29wdGlvbnMnXHJcbiAgICAgIG9wdGlvbi5hdHRyaWJ1dGVzID0geyBkYXRhVmFsdWU6IG9wdGlvbnNbaV0udmFsdWUgfVxyXG4gICAgICBvcHRpb24uY29udGVudCA9IG9wdGlvbnNbaV0uaW5uZXJIVE1MXHJcbiAgICAgIG9iai5wdXNoKG9wdGlvbilcclxuICAgIH1cclxuICAgIHRoaXMuZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLnNlbGVjdFdyYXBwZXInKVxyXG4gICAgICAuYXBwZW5kQ2hpbGQoY3JlYXRlQ29tcGxleEVsZW1lbnQob2JqKSlcclxuICAgIHRoaXMuZWxTZWxlY3RDdXN0b20gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlbGVjdEN1c3RvbScpXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tQm94ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RDdXN0b20tdHJpZ2dlcicpXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tT3B0cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnNlbGVjdEN1c3RvbS1vcHRpb25zJ1xyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3V2cmlsIGxlIHBzZXVkby1zw6lsZWN0XHJcbiAgICovXHJcbiAgb3BlblNlbGVjdEN1c3RvbSgpIHtcclxuICAgIHRoaXMuZWxTZWxlY3RDdXN0b20uY2xhc3NMaXN0LmFkZCgnaXNBY3RpdmUnKVxyXG4gICAgLy8gUmVtb3ZlIGFyaWEtaGlkZGVuIGluIGNhc2UgdGhpcyB3YXMgb3BlbmVkIGJ5IGEgdXNlclxyXG4gICAgLy8gd2hvIHVzZXMgQVQgKGUuZy4gU2NyZWVuIFJlYWRlcikgYW5kIGEgbW91c2UgYXQgdGhlIHNhbWUgdGltZS5cclxuICAgIHRoaXMuZWxTZWxlY3RDdXN0b20uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKVxyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbkNoZWNrZWQpIHtcclxuICAgICAgY29uc3Qgb3B0aW9uQ2hlY2tlZEluZGV4ID0gdGhpcy5jdXN0b21PcHRzTGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgKGVsKSA9PiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSA9PT0gdGhpcy5vcHRpb25DaGVja2VkXHJcbiAgICAgIClcclxuICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RIb3ZlcmVkKG9wdGlvbkNoZWNrZWRJbmRleClcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcmVsYXRlZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMud2F0Y2hDbGlja091dHNpZGUgPSB0aGlzLndhdGNoQ2xpY2tPdXRzaWRlLmJpbmQodGhpcylcclxuICAgIHRoaXMuc3VwcG9ydEtleWJvYXJkTmF2aWdhdGlvbiA9IHRoaXMuc3VwcG9ydEtleWJvYXJkTmF2aWdhdGlvbi5iaW5kKHRoaXMpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud2F0Y2hDbGlja091dHNpZGUpXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdXBwb3J0S2V5Ym9hcmROYXZpZ2F0aW9uKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVybWVyIGxlIHBzZXVkby1zw6lsZWN0XHJcbiAgICovXHJcbiAgY2xvc2VTZWxlY3RDdXN0b20oKSB7XHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2lzQWN0aXZlJylcclxuXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cclxuICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0SG92ZXJlZCgtMSlcclxuXHJcbiAgICAvLyBSZW1vdmUgcmVsYXRlZCBldmVudCBsaXN0ZW5lcnNcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy53YXRjaENsaWNrT3V0c2lkZSlcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKkdlc3Rpb24gZGVzIGhvdmVyIGRhbnMgbGUgcHNldWRvLXPDqWxlY3RcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3SW5kZXggLSBpbmRleCBkZSBsJ8OpbcOpbWVudCBzdXJ2b2zDqSBwYXIgbGEgc291cmlzXHJcbiAgICovXHJcbiAgdXBkYXRlQ3VzdG9tU2VsZWN0SG92ZXJlZChuZXdJbmRleCkge1xyXG4gICAgY29uc3QgcHJldk9wdGlvbiA9IHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLmNoaWxkcmVuW3RoaXMub3B0aW9uSG92ZXJlZEluZGV4XVxyXG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMuY2hpbGRyZW5bbmV3SW5kZXhdXHJcblxyXG4gICAgaWYgKHByZXZPcHRpb24pIHtcclxuICAgICAgcHJldk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc0hvdmVyJylcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24pIHtcclxuICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzSG92ZXInKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3B0aW9uSG92ZXJlZEluZGV4ID0gbmV3SW5kZXhcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqR2VzdGlvbiBkZSBsYSBzw6lsZWN0aW9uIGQndW4gbm91dmVsIMOpbMOpbWVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHZhbGV1ciBkZSBsw6lsw6ltZW50IHPDqWxlY3Rpb29ubsOpZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gbm9tIGRlIGwnw6lsw6ltZW50IHPDqWxlY3Rpb25uw6lcclxuICAgKi9cclxuICB1cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkKHZhbHVlLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLm9wdGlvbkNoZWNrZWRcclxuXHJcbiAgICBjb25zdCBlbFByZXZPcHRpb24gPSB0aGlzLmVsU2VsZWN0Q3VzdG9tT3B0cy5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgW2RhdGEtdmFsdWU9XCIke3ByZXZWYWx1ZX1cImBcclxuICAgIClcclxuICAgIGNvbnN0IGVsT3B0aW9uID0gdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMucXVlcnlTZWxlY3RvcihcclxuICAgICAgYFtkYXRhLXZhbHVlPVwiJHt2YWx1ZX1cImBcclxuICAgIClcclxuXHJcbiAgICBpZiAoZWxQcmV2T3B0aW9uKSB7XHJcbiAgICAgIGVsUHJldk9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpc0FjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsT3B0aW9uKSB7XHJcbiAgICAgIGVsT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzQWN0aXZlJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tQm94LnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgdGhpcy5vcHRpb25DaGVja2VkID0gdmFsdWVcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvcnNxdWUgbCd1dGlsaXNhdGV1ciBjbGlxdWUgZW4gZGVob3JzIGR1IHPDqWxlY3RcclxuICAgKiAgQHBhcmFtICB7ZG9jdW1lbnQjZXZlbnQ6Y2xpY2t9IGVcclxuICAgKi9cclxuICB3YXRjaENsaWNrT3V0c2lkZShlKSB7XHJcbiAgICBjb25zdCBkaWRDbGlja2VkT3V0c2lkZSA9ICF0aGlzLmVsU2VsZWN0Q3VzdG9tLmNvbnRhaW5zKGUudGFyZ2V0KVxyXG4gICAgaWYgKGRpZENsaWNrZWRPdXRzaWRlKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VTZWxlY3RDdXN0b20oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VzdGlvbnMgZGVzIMOpdsOobmVtZW50cyBjbGF2aWVyIDogZmxlY2hlIGJhcy9oYXV0LCBlc3BhY2UvZW50csOpZSwgw6ljaGFwXHJcbiAgICogQHBhcmFtIHtkb2N1bWVudCNldmVudDprZXlkb3dufSBlXHJcbiAgICovXHJcbiAgc3VwcG9ydEtleWJvYXJkTmF2aWdhdGlvbihlKSB7XHJcbiAgICAvLyBwcmVzcyBkb3duIC0+IGdvIG5leHRcclxuICAgIGlmIChlLmNvZGUgPT09IDQwICYmIHRoaXMub3B0aW9uSG92ZXJlZEluZGV4IDwgdGhpcy5vcHRpb25zQ291bnQgLSAxKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBwcmV2ZW50IHBhZ2Ugc2Nyb2xsaW5nXHJcbiAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0SG92ZXJlZCh0aGlzLm9wdGlvbkhvdmVyZWRJbmRleCArIDEpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJlc3MgdXAgLT4gZ28gcHJldmlvdXNcclxuICAgIGlmIChlLmNvZGUgPT09IDM4ICYmIHRoaXMub3B0aW9uSG92ZXJlZEluZGV4ID4gMCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCkgLy8gcHJldmVudCBwYWdlIHNjcm9sbGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdEhvdmVyZWQodGhpcy5vcHRpb25Ib3ZlcmVkSW5kZXggLSAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZXNzIEVudGVyIG9yIHNwYWNlIC0+IHNlbGVjdCB0aGUgb3B0aW9uXHJcbiAgICBpZiAoZS5jb2RlID09PSAxMyB8fCBlLmNvZGUgPT09IDMyKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMuY2hpbGRyZW5bdGhpcy5vcHRpb25Ib3ZlcmVkSW5kZXhdXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uICYmIG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG5cclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lbFNlbGVjdE5hdGl2ZS52YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkKHZhbHVlLCBvcHRpb24udGV4dENvbnRlbnQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbG9zZVNlbGVjdEN1c3RvbSgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJlc3MgRVNDIC0+IGNsb3NlIHNlbGVjdEN1c3RvbVxyXG4gICAgaWYgKGUuY29kZSA9PT0gMjcpIHtcclxuICAgICAgdGhpcy5jbG9zZVNlbGVjdEN1c3RvbSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7aHRtbEVsZW1lbnR9IGVsZW1lbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNoYW5nZUZ1bmN0aW9uIC0gZm9uY3Rpb24gYXBwZWzDqWUgbG9yc3F1ZSBsYSB2YWxldXIgZHUgU2VsZWN0IGVzdCBtb2RpZmnDqWVcclxuICAgKiBAcmV0dXJucyB7U2VsZWN0fVxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudCwgb25DaGFuZ2VGdW5jdGlvbikge1xyXG4gICAgcmV0dXJuIG5ldyBTZWxlY3QoZWxlbWVudCwgb25DaGFuZ2VGdW5jdGlvbilcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29tcGxleEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnRGcm9tT2JqZWN0IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpYSB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAgICogQHBhcmFtIHtEYXRlfSBvYmouZGF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaWRcclxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9iai5pbWFnZSAtIHVybCBkZSBsJ2ltYWdlXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmoudmlkZW8gLSB1cmwgZGUgbGEgdmlkZW9cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmxpa2VzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5waG90b2dyYXBoZXJJZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucHJpY2VcclxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBvYmoudGFnc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoudGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLmFsdFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlZnJlc2hUb3RhbExpa2VzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob2JqLCByZWZyZXNoVG90YWxMaWtlcykge1xyXG4gICAgdGhpcy5yZWZyZXNoVG90YWxMaWtlcyA9IHJlZnJlc2hUb3RhbExpa2VzXHJcbiAgICB0aGlzLnRpdGxlID0gb2JqLnRpdGxlXHJcbiAgICB0aGlzLmFsdCA9IG9iai50aXRsZVxyXG4gICAgdGhpcy5zcmMgPSBvYmouaW1hZ2UgfHwgb2JqLnZpZGVvXHJcbiAgICB0aGlzLmxpa2VzID0gb2JqLmxpa2VzXHJcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShvYmouZGF0ZSlcclxuICAgIGlmIChvYmouaW1hZ2UpIHRoaXMubWVkaWEgPSBuZXcgUGhvdG8ob2JqKVxyXG4gICAgZWxzZSBpZiAob2JqLnZpZGVvKSB0aGlzLm1lZGlhID0gbmV3IFZpZGVvKG9iailcclxuICAgIHRoaXMuY2FyZEVsZW1lbnQgPSB0aGlzLmNyZWF0ZUNhcmQoKVxyXG4gICAgdGhpcy5jYXJvdXNlbEl0ZW1FbGVtZW50ID0gdGhpcy5jcmVhdGVDYXJvdXNlbEl0ZW0oKVxyXG4gICAgdGhpcy5hcHBlbmRFbGVtZW50cygpXHJcblxyXG4gICAgdGhpcy5saWtlc0VsID0gdGhpcy5jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWVkaWFDYXJkX19saWtlcycpXHJcbiAgICB0aGlzLm9uTGlrZUNsaWNrID0gdGhpcy5vbkxpa2VDbGljay5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmxpa2VzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlrZUNsaWNrKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9yc3F1ZSBsZSBib3V0b24gbGlrZSBlc3QgY2xpcXXDqVxyXG4gICAqL1xyXG4gIG9uTGlrZUNsaWNrKGUpIHtcclxuICAgIHRoaXMubGlrZXMrK1xyXG4gICAgdGhpcy5saWtlc0VsLnRleHRDb250ZW50ID0gdGhpcy5saWtlc0VsLnRleHRDb250ZW50LnJlcGxhY2UoXHJcbiAgICAgIHRoaXMubGlrZXMgLSAxLFxyXG4gICAgICB0aGlzLmxpa2VzXHJcbiAgICApXHJcbiAgICB0aGlzLnJlZnJlc2hUb3RhbExpa2VzKGUpXHJcbiAgICB0aGlzLmxpa2VzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlrZUNsaWNrKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWpvdXQgZHUgbcOpZGlhIMOgIGxhIGxpc3RlIGRlcyBtZWRpYXMgZXQgYXUgY2Fyb3VzZWxcclxuICAgKi9cclxuICBhcHBlbmRFbGVtZW50cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpYXNDb250YWluZXInKS5hcHBlbmQodGhpcy5jYXJkRWxlbWVudClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fZnJhbWUnKS5hcHBlbmQodGhpcy5jYXJvdXNlbEl0ZW1FbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExpa2VzKG1lZGlhcykge1xyXG4gICAgbGV0IGxpa2VzID0gMFxyXG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XHJcbiAgICAgIGxpa2VzICs9IG1lZGlhLmxpa2VzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxpa2VzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllIGxlcyDDqWzDqW1lbnRzIG3DqWRpYXNcclxuICAgKiBAcGFyYW0geygncG9wdWxhcml0eSd8J2RhdGUnfCd0aXRsZScpfSB0eXBlT2ZTb3J0XHJcbiAgICogQHBhcmFtIHtBcnJheS48TWVkaWE+fSBtZWRpYXNcclxuICAgKi9cclxuICBzdGF0aWMgc29ydCh0eXBlT2ZTb3J0LCBtZWRpYXMpIHtcclxuICAgIHN3aXRjaCAodHlwZU9mU29ydCkge1xyXG4gICAgICBjYXNlICdwb3B1bGFyaXR5JzpcclxuICAgICAgICBtZWRpYXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgaWYgKGEubGlrZXMgPCBiLmxpa2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYS5saWtlcyA+IGIubGlrZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgbWVkaWFzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAxXHJcbiAgICAgICAgICBpZiAoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gLTFcclxuICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICd0aXRsZSc6XHJcbiAgICAgICAgbWVkaWFzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGlmIChhLnRpdGxlIDwgYi50aXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhLnRpdGxlID4gYi50aXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBtZWRpYXMuZm9yRWFjaCgobWVkaWEpID0+IHtcclxuICAgICAgbWVkaWEuYXBwZW5kRWxlbWVudHMoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0FycmF5LjxPYmplY3Q+fSBNZWRpYUNhcmRPYmpcclxuICAgKi9cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgbWVkaWFDYXJkT2JqID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkJyxcclxuICAgICAgICBwYXJlbnQ6ICdtYWluJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWdDb250YWluZXInLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX19pbWdDb250YWluZXInLFxyXG4gICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBocmVmOiAnIycsXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy5hbHQgKyAnLCBhZmZpY2hlciBlbiBncmFuZC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW5mb3MnLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX19pbmZvcycsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGl0bGUnLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX190aXRsZScsXHJcbiAgICAgICAgdHlwZTogJ2gzJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdsaWtlcycsXHJcbiAgICAgICAgY2xhc3M6ICdtZWRpYUNhcmRfX2xpa2VzJyxcclxuICAgICAgICB0eXBlOiAnZW0nLFxyXG4gICAgICAgIHBhcmVudDogJ2luZm9zJyxcclxuICAgICAgICBjb250ZW50OiB0aGlzLmxpa2VzICsgJyAnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIHRhYmluZGV4OiAwLFxyXG4gICAgICAgICAgYXJpYUxhYmVsOiAnbGlrZXMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaGVhcnQnLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX19oZWFydCcsXHJcbiAgICAgICAgdHlwZTogJ3NwYW4nLFxyXG4gICAgICAgIHBhcmVudDogJ2xpa2VzJyxcclxuICAgICAgICBjb250ZW50OiAn4pmlJyxcclxuICAgICAgfSxcclxuICAgIF1cclxuICAgIG1lZGlhQ2FyZE9iai5wdXNoKHRoaXMubWVkaWEubWVkaWFDYXJkT2JqKVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNvbXBsZXhFbGVtZW50KG1lZGlhQ2FyZE9iailcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0FycmF5LjxPYmplY3Q+fSBjYXJvdXNlbEl0ZW1PYmpcclxuICAgKi9cclxuICBjcmVhdGVDYXJvdXNlbEl0ZW0oKSB7XHJcbiAgICBjb25zdCBjYXJvdXNlbEl0ZW1PYmogPSB7XHJcbiAgICAgIHR5cGU6ICdsaScsXHJcbiAgICAgIGNsYXNzOiAnY2Fyb3VzZWxfX2l0ZW0nLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGF0YUxlZ2VuZDogdGhpcy50aXRsZSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIGNvbnN0IGNhcm91c2VsSXRlbSA9IGNyZWF0ZUVsZW1lbnRGcm9tT2JqZWN0KGNhcm91c2VsSXRlbU9iailcclxuICAgIGNhcm91c2VsSXRlbS5hcHBlbmQoY3JlYXRlRWxlbWVudEZyb21PYmplY3QodGhpcy5tZWRpYS5jYXJvdXNlbEl0ZW1PYmopKVxyXG4gICAgcmV0dXJuIGNhcm91c2VsSXRlbVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGhvdG8ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gb2JqLmRhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmouaW1hZ2UgLSB1cmwgZGUgbCdpbWFnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb2JqLnZpZGVvIC0gdXJsIGRlIGxhIHZpZGVvXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5saWtlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucGhvdG9ncmFwaGVySWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnByaWNlXHJcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gb2JqLnRhZ3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLnRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5hbHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHRoaXMubWVkaWFDYXJkT2JqID0ge1xyXG4gICAgICB0eXBlOiAnaW1nJyxcclxuICAgICAgY2xhc3M6ICdtZWRpYUNhcmRfX21lZGlhJyxcclxuICAgICAgcGFyZW50OiAnaW1nQ29udGFpbmVyJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHNyYzogYC4vYXNzZXRzL2ltYWdlcy8ke29iai5pbWFnZX1gLFxyXG4gICAgICAgIGFsdDogb2JqLnRpdGxlLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICAgdGhpcy5jYXJvdXNlbEl0ZW1PYmogPSB7XHJcbiAgICAgIHR5cGU6ICdpbWcnLFxyXG4gICAgICBjbGFzczogJ2Nhcm91c2VsX19tZWRpYScsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBzcmM6IGAuL2Fzc2V0cy9pbWFnZXMvJHtvYmouaW1hZ2V9YCxcclxuICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVmlkZW8ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gb2JqLmRhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmouaW1hZ2UgLSB1cmwgZGUgbCdpbWFnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb2JqLnZpZGVvIC0gdXJsIGRlIGxhIHZpZGVvXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5saWtlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucGhvdG9ncmFwaGVySWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnByaWNlXHJcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gb2JqLnRhZ3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLnRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5hbHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHRoaXMubWVkaWFDYXJkT2JqID0ge1xyXG4gICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICBjbGFzczogJ21lZGlhQ2FyZF9fbWVkaWEnLFxyXG4gICAgICBwYXJlbnQ6ICdpbWdDb250YWluZXInLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgc3JjOiBgLi9hc3NldHMvaW1hZ2VzLyR7b2JqLnZpZGVvfWAsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsSXRlbU9iaiA9IHtcclxuICAgICAgdHlwZTogJ3ZpZGVvJyxcclxuICAgICAgY2xhc3M6ICdjYXJvdXNlbF9fbWVkaWEnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgc3JjOiBgLi9hc3NldHMvaW1hZ2VzLyR7b2JqLnZpZGVvfWAsXHJcbiAgICAgICAgY29udHJvbHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBsZXhFbGVtZW50IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBQaG90b2dyYXBoZXIge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5pZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnBvcnRyYWl0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEubmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmNvdXRyeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmNpdHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS50YWdsaW5lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS50YWdzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWRcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBgLi9hc3NldHMvaW1hZ2VzLyR7ZGF0YS5wb3J0cmFpdH1gXHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWVcclxuICAgIHRoaXMubG9jYXRpb24gPSBkYXRhLmNpdHkgKyAnICcgKyBkYXRhLmNvdW50cnlcclxuICAgIHRoaXMuc2xvZ2FuID0gZGF0YS50YWdsaW5lXHJcbiAgICB0aGlzLnByaWNlID0gZGF0YS5wcmljZVxyXG4gICAgdGhpcy50YWdzID0gZGF0YS50YWdzXHJcbiAgfVxyXG5cclxuICBpZGVudGl0eVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBlbCA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdyb290JyxcclxuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eScsXHJcbiAgICAgICAgcGFyZW50OiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW5mb3MnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2luZm9zJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgdHlwZTogJ2gyJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190aXRsZScsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0ZXh0JyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190ZXh0JyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbicsXHJcbiAgICAgICAgcGFyZW50OiAndGV4dCcsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5sb2NhdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzbG9nYW4nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19zbG9nYW4nLFxyXG4gICAgICAgIHBhcmVudDogJ3RleHQnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xvZ2FuLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RhZ3NMaXN0JyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190YWdzTGlzdCcsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3QnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdDb250YWN0ZXotbW9pJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWdDb250YWluZXInLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW1nJyxcclxuICAgICAgICB0eXBlOiAnaW1nJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19pbWcnLFxyXG4gICAgICAgIHBhcmVudDogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgc3JjOiB0aGlzLmltYWdlLnNyYyxcclxuICAgICAgICAgIGFsdDogYHBvcnRyYWl0IGRlICR7dGhpcy5uYW1lfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZScsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZScsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzJyxcclxuICAgICAgICB0eXBlOiAnc3BhbicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXMnLFxyXG4gICAgICAgIHBhcmVudDogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWtlc0FuZFByaWNlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fcHJpY2UnLFxyXG4gICAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19wcmljZScsXHJcbiAgICAgICAgcGFyZW50OiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2UnLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke3RoaXMucHJpY2V94oKsL2pvdXJgLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gICAgdGhpcy50YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICBjb25zdCB0YWdFbCA9IHtcclxuICAgICAgICBuYW1lOiAndGFnJyxcclxuICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGllbicsXHJcbiAgICAgICAgcGFyZW50OiAndGFnc0xpc3QnLFxyXG4gICAgICAgIGlubmVyaHRtbDogYDxzcGFuIGNsYXNzPVwic3Itb25seVwiPiR7dGFnfSA8L3NwYW4+IDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiMke3RhZ308L3NwYW4+YCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBocmVmOiAnaW5kZXguaHRtbD9maWx0ZXI9JyArIHRhZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnRWwpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNvbXBsZXhFbGVtZW50KGVsKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGNhcnRlIHBob3RvZ3JhcGhlXHJcbiAgICovXHJcbiAgY2FyZCgpIHtcclxuICAgIGNvbnN0IGVsID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgIHR5cGU6ICdhcnRpY2xlJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmQnLFxyXG4gICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2xpbmsnLFxyXG4gICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX2xpbmsnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGhyZWY6IGBwaG90b2dyYXBoZXIuaHRtbD9pZD0ke3RoaXMuaWR9YCxcclxuICAgICAgICAgIHRpdGxlOiBgZMOpY291dnJleiBsZSB0cmF2YWlsIGRlICR7dGhpcy5uYW1lfWAsXHJcbiAgICAgICAgICBhcmlhTGFiZWw6dGhpcy5uYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWdDb250YWluZXInLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9faW1nQ29udGFpbmVyJyxcclxuICAgICAgICBwYXJlbnQ6ICdsaW5rJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWcnLFxyXG4gICAgICAgIHR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9faW1nJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBzcmM6IHRoaXMuaW1hZ2Uuc3JjLFxyXG4gICAgICAgICAgYWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJlbnQ6ICdpbWdDb250YWluZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RpdHJlJyxcclxuICAgICAgICB0eXBlOiAnaDInLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUnLFxyXG4gICAgICAgIHBhcmVudDogJ2xpbmsnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbmZvcycsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX19pbmZvcycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX2xvY2F0aW9uJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5sb2NhdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzbG9nYW4nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX3Nsb2dhbicsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xvZ2FuLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RhcmlmJyxcclxuICAgICAgICB0eXBlOiAncCcsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX190YXJpZicsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucHJpY2UgKyAn4oKsJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0YWdzJyxcclxuICAgICAgICB0eXBlOiAndWwnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGFncycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhZ0xpID0ge1xyXG4gICAgICAgIG5hbWU6IHRhZyxcclxuICAgICAgICB0eXBlOiAnbGknLFxyXG4gICAgICAgIHBhcmVudDogJ3RhZ3MnLFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnTGkpXHJcblxyXG4gICAgICBjb25zdCB0YWdBID0ge1xyXG4gICAgICAgIG5hbWU6IHRhZysnbGluaycsXHJcbiAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGFnJyxcclxuICAgICAgICBwYXJlbnQ6IHRhZyxcclxuICAgICAgICBpbm5lcmh0bWw6IGA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4ke3RhZ30gPC9zcGFuPiAjPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+ICR7dGFnfTwvc3Bhbj5gLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGhyZWY6ICdpbmRleC5odG1sP2ZpbHRlcj0nICsgdGFnLFxyXG4gICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnQSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gY3JlYXRlQ29tcGxleEVsZW1lbnQoZWwpXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLS0gbm9tIGRlIGxhIHZhbGV1ciDDoCByZWNoZXJjaGVyIGRhbnMgbCd1cmxcclxuICogQHJldHVybnMge3N0cmluZ30gdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxWYWx1ZShuYW1lKSB7XHJcbiAgY29uc3QgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICByZXR1cm4gcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQobmFtZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEltcG9ydGUgdW5lIHPDqXJpZSBkZSBmaWNoaWVycyBcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gciBcclxuICogQHJldHVybnMge0FycmF5LjxzdHJpbmc+fSBpbWFnZXMgLSBMaWVucyB2ZXJzIGxlcyBmaWNoaWVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0ge31cclxuICByLmtleXMoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKVxyXG4gIH0pXHJcbiAgcmV0dXJuIGltYWdlc1xyXG59XHJcbi8qKlxyXG4gKiBDcsOpZSBkZXMgw6lsw6ltZW50cyBIdG1sIHF1aSBwZXV2ZW50IMOqdHJlIGxpw6lzIGVudHJlIGV1eCDDoCBwYXJ0aXIgZCd1biB0YWJsZWF1IGQnb2JqZXRcclxuICogQHBhcmFtIHtPYmplY3RbXX0gYXJyIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJyW10ubmFtZSBcclxuICogQHBhcmFtIHtTdHJpbmd9IGFycltdLnBhcmVudCBcclxuICogQHBhcmFtIHtTdHJpbmd9IGFycltdLmNsYXNzIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJyW10udHlwZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gYXJyW10uYXR0cmlidXRlcyBcclxuICogQHJldHVybnMgSHRtbEVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wbGV4RWxlbWVudChhcnIpIHtcclxuICBjb25zdCBuZXdBcnIgPSBbXVxyXG4gIGFyci5mb3JFYWNoKChvYmopID0+IHtcclxuICAgIGNvbnN0IG5ld09iaiA9IHt9XHJcbiAgICBuZXdPYmouRE9NZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnRGcm9tT2JqZWN0KG9iailcclxuICAgIG5ld09iai5uYW1lID0gb2JqLm5hbWVcclxuICAgIG5ld09iai5wYXJlbnQgPSBvYmoucGFyZW50XHJcbiAgICBjb25zdCBwYXBhID0gbmV3QXJyLmZpbmQoKGVsKSA9PiBlbC5uYW1lID09PSBvYmoucGFyZW50KVxyXG4gICAgaWYgKHBhcGEpIHtcclxuICAgICAgcGFwYS5ET01lbGVtZW50LmFwcGVuZENoaWxkKG5ld09iai5ET01lbGVtZW50KVxyXG4gICAgfVxyXG4gICAgbmV3QXJyLnB1c2gobmV3T2JqKVxyXG4gIH0pXHJcbiAgcmV0dXJuIG5ld0Fyci5maW5kKChlbCkgPT4gZWwucGFyZW50ID09PSAnbWFpbicpLkRPTWVsZW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuIMOpbMOpbWVudCBIdG1sIMOgIHBhcnRpciBkJ3VuIG9iamV0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmoubmFtZSBcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5wYXJlbnQgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmouY2xhc3MgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmoudHlwZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLmNvbnRlbnRcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5pbm5lcmh0bWxcclxuICogQHBhcmFtIHtPYmplY3R9IG9iai5hdHRyaWJ1dGVzIFxyXG4gKiBAcmV0dXJucyBIdG1sRWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRGcm9tT2JqZWN0KG9iaikge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvYmoudHlwZSkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBlbC5jbGFzc05hbWUgPSBvYmouY2xhc3MgfHwgJydcclxuICBjb25zdCBhdHRyaWJ1dGVzID0gb2JqLmF0dHJpYnV0ZXMgfHwgW11cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGNhbWVsQ2FzZVBhcnNlcihrZXkpXHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoZGF0YSwgdmFsdWUpXHJcbiAgfVxyXG4gIGlmIChvYmouY29udGVudCkgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUob2JqLmNvbnRlbnQpKVxyXG4gIGlmKG9iai5pbm5lcmh0bWwpZWwuaW5uZXJIVE1MPW9iai5pbm5lcmh0bWxcclxuICByZXR1cm4gZWxcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRleHQgZW4gY2FtZWxDYXNlXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBjYW1lbENhc2VQYXJzZXIodGV4dCkge1xyXG4gIGNvbnN0IHJlc3VsdCA9IHRleHQucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJylcclxuICBjb25zdCBmaW5hbFJlc3VsdCA9IHJlc3VsdC5jaGFyQXQoMCkgKyByZXN1bHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxyXG4gIHJldHVybiBmaW5hbFJlc3VsdFxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTGVsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHBhcmVudCBkYW5zIGxlcXVlbCBjaGVyY2hlciBsZXMgw6lsw6ltZW50cyBmb2N1c2FibGVzXHJcbiAqIEByZXR1cm5zIHtBcnJheS48SFRNTGVsZW1lbnQ+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGb2N1c2FibGVFbGVtZW50cyhlbGVtZW50KSB7XHJcbiAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgXHJcbiAgICAgIGFbaHJlZl0sXHJcbiAgICAgIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcclxuICAgICAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcclxuICAgICAgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLFxyXG4gICAgICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxyXG4gICAgICBbdGFiaW5kZXg9XCIwXCJdLFxyXG4gICAgICBbdGFiaW5kZXg9XCIxXCJdLFxyXG4gICAgICAuZW1iZXItcG93ZXItc2VsZWN0LXRyaWdnZXJcclxuICAgIGApXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgZmlsbD0lMjdibGFjayUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgd2lkdGg9JTI3MjQlMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjc+PHBhdGggZD0lMjdNNyAxMGw1IDUgNS01eiUyNy8+PHBhdGggZD0lMjdNMCAwaDI0djI0SDB6JTI3IGZpbGw9JTI3bm9uZSUyNy8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucHJlbG9hZCB7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5vU2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG59XFxuLmhlYWRlcl9fbG9nbyB7XFxuICBoZWlnaHQ6IDIuMzVyZW07XFxufVxcbi5oZWFkZXJfX2xvZ28gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlcl9fbG9nbzpmb2N1cyBpbWcsIC5oZWFkZXJfX2xvZ286aG92ZXIgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAwcHggYmxhY2spO1xcbn1cXG4uaGVhZGVyX19oaWRkZW5saW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNEQjg4NzY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG59XFxuLmhlYWRlcl9faGlkZGVubGluazpmb2N1cyB7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcbiAgLm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4ubmF2X190YWdzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW0gMC4zMTI1cmVtO1xcbn1cXG4ubmF2X190YWcgYSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLm5hdl9fdGFnIGE6aG92ZXIsIC5uYXZfX3RhZyBhOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluX190aXRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNC4xNzVyZW0gLSAydncpO1xcbiAgcmlnaHQ6IDMlO1xcbiAgZm9udC1zaXplOiAyLjV2dztcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5tYWluX190aXRsZSB7XFxuICAgIHRvcDogMy41cmVtO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgfVxcbn1cXG4ubWFpbl9fcGhvdG9ncmFwaGVycyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1haW5fX3Bob3RvZ3JhcGhlcnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5tYWluX19waG90b2dyYXBoZXJzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucGhvdG9ncmFwaGVyQ2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19saW5rIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6aG92ZXIgLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlLCAucGhvdG9ncmFwaGVyQ2FyZF9fbGluazpmb2N1cyAucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19saW5rOmhvdmVyIC5waG90b2dyYXBoZXJDYXJkX19pbWcsIC5waG90b2dyYXBoZXJDYXJkX19saW5rOmZvY3VzIC5waG90b2dyYXBoZXJDYXJkX19pbWcge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2ltZ0NvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19pbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19pbmZvcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fc2xvZ2FuIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xvY2F0aW9uIHtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fdGFyaWYge1xcbiAgY29sb3I6ICM3NTc1NzU7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YWdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMXJlbSAwLjMxMjVyZW07XFxuICBtYXJnaW46IDAuMzI1cmVtO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fdGFnIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjY4NzVyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fdGFnOmhvdmVyLCAucGhvdG9ncmFwaGVyQ2FyZF9fdGFnOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waG90b2dyYXBoZXJJZGVudGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDRyZW0gMy4xMjVyZW0gNHJlbSAycmVtO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2luZm9zIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fdGV4dCB7XFxuICBsaW5lLWhlaWdodDogMjtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3Nsb2dhbiB7XFxuICBjb2xvcjogIzUyNTI1MjtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X190YWdzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMC45cmVtO1xcbiAgZ2FwOiAwLjYyNXJlbSAwLjMxMjVyZW07XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuOmhvdmVyLCAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpZW46Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0IHtcXG4gIHdpZHRoOiAxNzBweDtcXG4gIGhlaWdodDogNjlweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3Q6aG92ZXIsIC5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgIzAwMDAwMDQwO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcGFkZGluZzogMnJlbSAxLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjREI4ODc2O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtIDAuMzEyNXJlbSAwIDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbG9jYXRpb24sIC5waG90b2dyYXBoZXJJZGVudGl0eV9fc2xvZ2FuLCAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpZW4ge1xcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3R0b206IDJyZW07XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgcGFkZGluZzogMC4zMTI1cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWtlc0FuZFByaWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbSAxLjI1cmVtIDRyZW0gMS4yNXJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2luZm9zIHtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDV2dztcXG4gIH1cXG59XFxuXFxuLnNlbGVjdFN0eWxlZCB7XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XFxuICAvKiBBZGQgdGhlIGZvY3VzIHN0YXRlcyB0b28sIFRoZXkgbWF0dGVyLCBhbHdheXMhICovXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgLnNlbGVjdFN0eWxlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdE5hdGl2ZSxcXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDExcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuc2VsZWN0U3R5bGVkIC5zZWxlY3ROYXRpdmU6Zm9jdXMgKyAuc2VsZWN0Q3VzdG9tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0V3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdE5hdGl2ZSxcXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwLjhyZW07XFxuICBwYWRkaW5nOiAwcmVtIDAuOHJlbTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW0gMC40cmVtIDAgMDtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMC44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiy4RcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDAuOHJlbTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsuFXFxcIjtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0QzNTczQztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLW9wdGlvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC44cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uOmxhc3Qtb2YtdHlwZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMC40cmVtIDAuNHJlbTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbi5pc0hvdmVyLFxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzNTczQztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbi5pc0FjdGl2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMC44cmVtO1xcbn1cXG5cXG4ubWVkaWFzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDFyZW0gNnJlbTtcXG4gIHdpZHRoOiA4NiU7XFxuICBtYXJnaW46IDMuNjI1cmVtIGF1dG8gMCBhdXRvO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAubWVkaWFzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubWVkaWFzQ29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblxcbi5tZWRpYUNhcmQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZWRpYUNhcmRfX2ltZ0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZWRpYUNhcmRfX2ltZ0NvbnRhaW5lcjpob3ZlciAubWVkaWFDYXJkX19tZWRpYSwgLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyOmZvY3VzIC5tZWRpYUNhcmRfX21lZGlhIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcbi5tZWRpYUNhcmRfX21lZGlhIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXG59XFxuLm1lZGlhQ2FyZF9faW5mb3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5tZWRpYUNhcmRfX3RpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLm1lZGlhQ2FyZF9fbGlrZXMge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLW91dDtcXG59XFxuLm1lZGlhQ2FyZF9fbGlrZXM6aG92ZXIsIC5tZWRpYUNhcmRfX2xpa2VzOmZvY3VzIHtcXG4gIGNvbG9yOiAjRDM1NzNDO1xcbn1cXG5cXG4uZGlhbG9nIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjQpO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XFxuICB6LWluZGV4OiAyMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxufVxcbi5kaWFsb2cudmlzaWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5kaWFsb2dGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAgMi4xODc1cmVtO1xcbiAgYmFja2dyb3VuZDogI0RCODg3NjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIHdpZHRoOiA0NiU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmRpYWxvZ0Zvcm1fX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uZGlhbG9nRm9ybV9fbGFiZWwsIC5kaWFsb2dGb3JtX19pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmRpYWxvZ0Zvcm1fX2lucHV0OmZvY3VzOmludmFsaWQge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmRpYWxvZ0Zvcm1fX3N1Ym1pdCB7XFxuICB3aWR0aDogMTcwcHg7XFxuICBoZWlnaHQ6IDY5cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMS42MjVyZW0gMCAxcmVtIDA7XFxufVxcbi5kaWFsb2dGb3JtX19zdWJtaXQ6aG92ZXIsIC5kaWFsb2dGb3JtX19zdWJtaXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI0QzNTczQztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmRpYWxvZ0Zvcm1fX2Nsb3NlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJyZW07XFxuICByaWdodDogMi4xODc1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcbi5kaWFsb2dGb3JtX19jbG9zZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5kaWFsb2dGb3JtX190aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5kaWFsb2dGb3JtX19sYWJlbCwgLmRpYWxvZ0Zvcm1fX2lucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB9XFxuICAuZGlhbG9nRm9ybV9fY2xvc2Uge1xcbiAgICB0b3A6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXG4gIC5kaWFsb2dGb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIC5kaWFsb2dGb3JtX19jbG9zZSB7XFxuICAgIHRvcDogMnJlbTtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICB9XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0ycmVtLCAwKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgei1pbmRleDogMjA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xcbn1cXG4uY2Fyb3VzZWwudmlzaWJsZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcbn1cXG4uY2Fyb3VzZWxfX2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gZnJhbWUgY2xvc2VcXFwiIFxcXCJwcmV2IGZyYW1lIG5leHRcXFwiIFxcXCIuIGxlZ2VuZCAuXFxcIjtcXG59XFxuLmNhcm91c2VsX19mcmFtZSB7XFxuICBncmlkLWFyZWE6IGZyYW1lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNhcm91c2VsX19sZWdlbmQge1xcbiAgZ3JpZC1hcmVhOiBsZWdlbmQ7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXIgZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5jYXJvdXNlbF9fcHJldiwgLmNhcm91c2VsX19uZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogIzkwMUMxQztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5jYXJvdXNlbF9fcHJldiB7XFxuICBncmlkLWFyZWE6IHByZXY7XFxufVxcbi5jYXJvdXNlbF9fcHJldjpob3ZlciwgLmNhcm91c2VsX19wcmV2OmZvY3VzIHtcXG4gIGNvbG9yOiAjRDM1NzNDO1xcbn1cXG4uY2Fyb3VzZWxfX25leHQge1xcbiAgZ3JpZC1hcmVhOiBuZXh0O1xcbn1cXG4uY2Fyb3VzZWxfX25leHQ6aG92ZXIsIC5jYXJvdXNlbF9fbmV4dDpmb2N1cyB7XFxuICBjb2xvcjogI0QzNTczQztcXG59XFxuLmNhcm91c2VsX19jbG9zZSB7XFxuICBncmlkLWFyZWE6IGNsb3NlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuLmNhcm91c2VsX19jbG9zZSBpbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlOmhvdmVyIGltZywgLmNhcm91c2VsX19jbG9zZTpmb2N1cyBpbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDY5MCUpIGh1ZS1yb3RhdGUoMzI3ZGVnKSBicmlnaHRuZXNzKDg4JSkgY29udHJhc3QoODglKTtcXG59XFxuLmNhcm91c2VsX19jbG9zZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5jYXJvdXNlbF9faXRlbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNhcm91c2VsX19tZWRpYSB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuQGtleWZyYW1lcyB2YW5pc2gge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGVtZXJnZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9iYXNlcy9fYmFzZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fcGhvdG9ncmFwaGVyQ2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYmxvY3MvX3Bob3RvZ3JhcGhlcklkZW50aXR5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fbWVkaWFDYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fZGlhbG9nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fY2Fyb3VzZWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7OztFQUdFLFNBQUE7RUFDQSxV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O0FBdHRCQTtFQUNFLGtDQUFBO0FBd3RCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd1dGlscy92YXJpYWJsZXMnO1xcclxcbkBpbXBvcnQgJ3V0aWxzL21peGlucyc7XFxyXFxuQGltcG9ydCAnYmFzZXMvYmFzZXMnO1xcclxcbkBpbXBvcnQgJ2Jsb2NzL2hlYWRlcic7XFxyXFxuQGltcG9ydCAnYmxvY3MvbWFpbic7XFxyXFxuQGltcG9ydCAnYmxvY3MvcGhvdG9ncmFwaGVyQ2FyZCc7XFxyXFxuXFxyXFxuQGltcG9ydCAnYmxvY3MvbWFpblBob3RvZ3JhcGhlcic7XFxyXFxuQGltcG9ydCAnYmxvY3MvcGhvdG9ncmFwaGVySWRlbnRpdHknO1xcclxcbkBpbXBvcnQgJ2Jsb2NzL3NlbGVjdCc7XFxyXFxuQGltcG9ydCAnYmxvY3MvbWVkaWFDYXJkJztcXHJcXG5AaW1wb3J0ICdibG9jcy9kaWFsb2cnO1xcclxcbkBpbXBvcnQgJ2Jsb2NzL2Nhcm91c2VsJztcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlbG9hZCB7XFxyXFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLm5vU2Nyb2xsIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Itb25seSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBhZGRlZCBsaW5lICovXFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblwiLFwiLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4NiU7XFxyXFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAzcmVtIDA7XFxyXFxuICAmX19sb2dvIHtcXHJcXG4gICAgaGVpZ2h0OiAyLjM1cmVtO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbG9nbzpmb2N1cyBpbWcsXFxyXFxuICAmX19sb2dvOmhvdmVyIGltZyB7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAwcHggYmxhY2spO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faGlkZGVubGluayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtMTAwMHB4O1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktNDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgdG9wOiAwLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLm5hdiB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTM0MHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgJl9fdGFnc0xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW0gMC4zMTI1cmVtO1xcclxcbiAgfVxcclxcbiAgJl9fdGFnIHtcXHJcXG4gICAgLy8gbWFyZ2luOiAwIDAuMzEyNXJlbSAwLjMxMjVyZW0gMDtcXHJcXG4gICAgYSB7XFxyXFxuICAgICAgQGluY2x1ZGUgdGFnO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiJHByaW1hcnktMTojOTAxQzFDO1xcclxcbiRwcmltYXJ5LTI6I0QzNTczQztcXHJcXG5cXHJcXG4kc2Vjb25kYXJ5LTE6IzUyNTI1MjtcXHJcXG4kc2Vjb25kYXJ5LTI6I0ZBRkFGQTtcXHJcXG4kc2Vjb25kYXJ5LTM6IzkwMUMxQztcXHJcXG4kc2Vjb25kYXJ5LTQ6I0RCODg3NjtcIixcIkBtaXhpbiB0YWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjg3NXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XFxyXFxuICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAmOmhvdmVyLFxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ0biB7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICBoZWlnaHQ6IDY5cHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcclxcbiAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAmOmhvdmVyLFxcclxcbiAgJjpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIubWFpbiB7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBjYWxjKDQuMTc1cmVtIC0gMnZ3KTtcXHJcXG4gICAgcmlnaHQ6IDMlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgICAgdG9wOiAzLjVyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fcGhvdG9ncmFwaGVycyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLnBob3RvZ3JhcGhlckNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICY6aG92ZXIgLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlLFxcclxcbiAgICAmOmZvY3VzIC5waG90b2dyYXBoZXJDYXJkX190aXRsZSB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9faW1nLFxcclxcbiAgICAmOmZvY3VzIC5waG90b2dyYXBoZXJDYXJkX19pbWcge1xcclxcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgIzAwMDAwMDQwO1xcclxcbiAgfVxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxyXFxuICB9XFxyXFxuICAmX19pbmZvcyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIH1cXHJcXG4gICZfX3Nsb2dhbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG4gICZfX2xvY2F0aW9uIHtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICB9XFxyXFxuICAmX190YXJpZiB7XFxyXFxuICAgIGNvbG9yOiAjNzU3NTc1O1xcclxcbiAgfVxcclxcbiAgJl9fdGFncyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogMXJlbSAwLjMxMjVyZW07XFxyXFxuICAgIG1hcmdpbjogMC4zMjVyZW07XFxyXFxuICB9XFxyXFxuICAmX190YWcge1xcclxcbiAgICBAaW5jbHVkZSB0YWc7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLnBob3RvZ3JhcGhlcklkZW50aXR5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LTI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHdpZHRoOiA4NiU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiA0cmVtIDMuMTI1cmVtIDRyZW0gMnJlbTtcXHJcXG4gICZfX2luZm9zIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICB9XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgfVxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgfVxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICB9XFxyXFxuICAmX19zbG9nYW4ge1xcclxcbiAgICBjb2xvcjogJHNlY29uZGFyeS0xO1xcclxcbiAgfVxcclxcbiAgJl9fdGFnc0xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuOXJlbTtcXHJcXG4gICAgZ2FwOiAwLjYyNXJlbSAwLjMxMjVyZW07XFxyXFxuICB9XFxyXFxuICAmX19saWVuIHtcXHJcXG4gICAgQGluY2x1ZGUgdGFnO1xcclxcbiAgfVxcclxcbiAgJl9fY29udGFjdCB7XFxyXFxuICAgIEBpbmNsdWRlIGJ0bjtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICB9XFxyXFxuICAmX19pbWdDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgIzAwMDAwMDQwO1xcclxcbiAgfVxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX19saWtlc0FuZFByaWNlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogNHJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAxLjMxMjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktNDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtIDAuMzEyNXJlbSAwIDA7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19sb2NhdGlvbixcXHJcXG4gICAgJl9fc2xvZ2FuLFxcclxcbiAgICAmX19saWVuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19jb250YWN0IHtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIGJvdHRvbTogMnJlbTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgICAgcGFkZGluZzogMC4zMTI1cmVtIDFyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fbGlrZXNBbmRQcmljZSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtIDEuMjVyZW0gNHJlbSAxLjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgJl9faW5mb3Mge1xcclxcbiAgICAgIG1heC13aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1dnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLnNlbGVjdFN0eWxlZCB7XFxyXFxuICB3aWR0aDogODYlO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC8vIEJvdGggbmF0aXZlIGFuZCBjdXN0b20gc2VsZWN0cyBtdXN0IGhhdmUgdGhlIHNhbWUgd2lkdGgvaGVpZ2h0LlxcclxcbiAgLnNlbGVjdE5hdGl2ZSxcXHJcXG4gIC5zZWxlY3RDdXN0b20ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gTWFrZSBzdXJlIHRoZSBjdXN0b20gc2VsZWN0IGRvZXMgbm90IG1lc3Mgd2l0aCB0aGUgbGF5b3V0XFxyXFxuICAuc2VsZWN0Q3VzdG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyBUaGlzIG1lZGlhIHF1ZXJ5IGRldGVjdHMgZGV2aWNlcyB3aGVyZSB0aGUgcHJpbWFyeVxcclxcbiAgLy8gaW5wdXQgbWVjaGFuaXNtIGNhbiBob3ZlciBvdmVyIGVsZW1lbnRzLiAoZS5nLiBjb21wdXRlcnMgd2l0aCBhIG1vdXNlKVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgLy8gU2luY2Ugd2UgYXJlIHVzaW5nIGEgbW91c2UsIGl0J3Mgc2FmZSB0byBzaG93IHRoZSBjdXN0b20gc2VsZWN0LlxcclxcbiAgICAuc2VsZWN0Q3VzdG9tIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBJbiBhIGNvbXB1dGVyIHVzaW5nIGtleWJvYXJkPyBUaGVuIGxldCdzIGhpZGUgYmFjayB0aGUgY3VzdG9tIHNlbGVjdFxcclxcbiAgICAvLyB3aGlsZSB0aGUgbmF0aXZlIG9uZSBpcyBmb2N1c2VkOlxcclxcbiAgICAuc2VsZWN0TmF0aXZlOmZvY3VzICsgLnNlbGVjdEN1c3RvbSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLyogQWRkIHRoZSBmb2N1cyBzdGF0ZXMgdG9vLCBUaGV5IG1hdHRlciwgYWx3YXlzISAqL1xcclxcbiAgLy8gLnNlbGVjdE5hdGl2ZTpmb2N1cyB7XFxyXFxuICAvLyAgIGJveC1zaGFkb3c6ICRwcmltYXJ5LTIgMCAwIDAgMnB4O1xcclxcbiAgLy8gfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJlc3Qgb2YgdGhlIHN0eWxlcyB0byBjcmVhdGUgdGhlIGN1c3RvbSBzZWxlY3QuXFxyXFxuICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGUgbmF0aXZlIGFuZCB0aGUgY3VzdG9tIGhhdmUgYSBzaW1pbGFyIFxcXCJib3hcXFwiICh0aGUgdHJpZ2dlcikuXFxyXFxuICAvL1xcclxcblxcclxcbiAgLnNlbGVjdCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RMYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdFdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3ROYXRpdmUsXFxyXFxuICAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS0xO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdE5hdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgZmlsbD0nYmxhY2snIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J003IDEwbDUgNSA1LTV6Jy8+PHBhdGggZD0nTTAgMGgyNHYyNEgweicgZmlsbD0nbm9uZScvPjwvc3ZnPlxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtIDAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtIDAuNHJlbSAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICfLhCc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMC44cmVtO1xcclxcbiAgfVxcclxcbiAgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ8uFJztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS1vcHRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICB9XFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMC40cmVtIDAuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzSG92ZXIsXFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LTI7IC8vIGNvbnRyYXN0IEFBXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbi5pc0FjdGl2ZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ+Kckyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5tZWRpYXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMXJlbSA2cmVtO1xcclxcbiAgd2lkdGg6IDg2JTtcXHJcXG4gIG1hcmdpbjogMy42MjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWRpYUNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAmX19pbWdDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmOmhvdmVyIC5tZWRpYUNhcmRfX21lZGlhLFxcclxcbiAgICAmOmZvY3VzIC5tZWRpYUNhcmRfX21lZGlhIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19tZWRpYSB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB9XFxyXFxuICAmX19saWtlcyB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLmRpYWxvZyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40KTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbiAgJi52aXNpYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ0Zvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAyLjE4NzVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICB3aWR0aDogNDYlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2xhYmVsLFxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuICAmX19pbnB1dDppbnZhbGlkIHtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogMCAwcHggMnB4IDNweCByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dDpmb2N1czppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICZfX3N1Ym1pdCB7XFxyXFxuICAgIEBpbmNsdWRlIGJ0bjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMS42MjVyZW0gMCAxcmVtIDA7XFxyXFxuICB9XFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAycmVtO1xcclxcbiAgICByaWdodDogMi4xODc1cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19sYWJlbCxcXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fY2xvc2Uge1xcclxcbiAgICAgIHRvcDogMXJlbTtcXHJcXG4gICAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICZfX2Nsb3NlIHtcXHJcXG4gICAgICB0b3A6IDJyZW07XFxyXFxuICAgICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuY2Fyb3VzZWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMnJlbSwgMCk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG4gICYudmlzaWJsZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcclxcbiAgfVxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMnJlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAnLiBmcmFtZSBjbG9zZSdcXHJcXG4gICAgICAncHJldiBmcmFtZSBuZXh0J1xcclxcbiAgICAgICcuIGxlZ2VuZCAuJztcXHJcXG4gIH1cXHJcXG4gICZfX2ZyYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmcmFtZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICAmX19sZWdlbmQge1xcclxcbiAgICBncmlkLWFyZWE6IGxlZ2VuZDtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3ByZXYsXFxyXFxuICAmX19uZXh0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAmX19wcmV2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmV2O1xcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbmV4dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmV4dDtcXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5LTI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjbG9zZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIgaW1nLFxcclxcbiAgICAmOmZvY3VzIGltZyB7XFxyXFxuICAgICAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDY5MCUpIGh1ZS1yb3RhdGUoMzI3ZGVnKVxcclxcbiAgICAgICAgYnJpZ2h0bmVzcyg4OCUpIGNvbnRyYXN0KDg4JSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX19tZWRpYSB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyB2YW5pc2gge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGVtZXJnZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmltYWxzX1B1cHBpbmVzcy5tcDRcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FuaW1hbHNfUHVwcGluZXNzLm1wNFwiLFxuXHRcIi4vQW5pbWFsc19XaWxkX0hvcnNlc19pbl90aGVfbW91bnRhaW5zLm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQW5pbWFsc19XaWxkX0hvcnNlc19pbl90aGVfbW91bnRhaW5zLm1wNFwiLFxuXHRcIi4vQXJjaGl0ZWN0dXJlX2NvdmVycl9jaXJjbGVfZW1wdHlfaGlnaHdheV9pbl9idWVub3NfYWlyZXNfNTg3NzQwOTg1NjM3Lm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX2NvdmVycl9jaXJjbGVfZW1wdHlfaGlnaHdheV9pbl9idWVub3NfYWlyZXNfNTg3NzQwOTg1NjM3Lm1wNFwiLFxuXHRcIi4vQXJ0X1dvb2Rlbl9Ib3JzZV9TY3VscHR1cmUubXA0XCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcnRfV29vZGVuX0hvcnNlX1NjdWxwdHVyZS5tcDRcIixcblx0XCIuL1Nwb3J0X1RyaWNrc19pbl90aGVfYWlyLm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3BvcnRfVHJpY2tzX2luX3RoZV9haXIubXA0XCIsXG5cdFwiLi9UcmF2ZWxfUm9ja19Nb3VudGFpbnMubXA0XCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfUm9ja19Nb3VudGFpbnMubXA0XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBcXFxcLihtcDQpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGhvdG9ncmFwaGVyc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL2pzb24vRmlzaEV5ZURhdGEuanNvbidcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9jdXN0b21TZWxlY3QnXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCdcclxuaW1wb3J0IHsgUGhvdG9ncmFwaGVyIH0gZnJvbSAnLi9waG90b2dyYXBoZXInXHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYSdcclxuaW1wb3J0IHsgZ2V0VXJsVmFsdWUsIGltcG9ydEFsbCB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IENvbnRhY3REaWFsb2cgfSBmcm9tICcuL2NvbnRhY3REaWFsb2cuanMnXHJcblxyXG4vLyBpbXBvcnRlciBsZXMgaW1hZ2VzXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy8nLCBmYWxzZSwgL1xcLihtcDQpJC8pKVxyXG4vKiBEw6ljbGFyYXRpb24gZGVzIHZhcmlhYmxlc1xyXG4gKi9cclxuY29uc3QgSWQgPSBwYXJzZUludChnZXRVcmxWYWx1ZSgnaWQnKSlcclxuaWYgKGlzTmFOKElkKSkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCdcclxuLy8gcsOpY3Vww6lyZXIgbCdvYmpldCBwaG90b2dyYXBoZSBjb3JyZXNwb25kYW50IMOgIGwnaWQgcGFzc8OpIGRhbnMgbCd1cmxcclxuY29uc3QgcGhvdG9ncmFwaGVyRGF0YSA9IERhdGEucGhvdG9ncmFwaGVycy5maW5kKChlbCkgPT4gZWwuaWQgPT09IElkKVxyXG4vLyBjcsOpw6kgdW4gbm91dmVhdSBwaG90b2dyYXBoZSBhaW5zaSBxdWUgc29uIMOpbMOpbWVudCAnaWRlbnRpdHknIHB1aXMgbCdpbnPDqXJlclxyXG5jb25zdCBwaG90b2dyYXBoZXIgPSBuZXcgUGhvdG9ncmFwaGVyKHBob3RvZ3JhcGhlckRhdGEpXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblBob3RvZ3JhcGhlcicpXHJcblxyXG4vLyByw6ljdXDDqXJlciBsZXMgb2JqZXQgbWVkaWFzIHF1aSBjb3JyZXNwb25kZW50IMOgIGwnaWQgcGFzc8OpIGRhbnMgbCd1cmxcclxuY29uc3QgbWVkaWFEYXRhID0gRGF0YS5tZWRpYS5maWx0ZXIoXHJcbiAgKGVsKSA9PiBlbC5waG90b2dyYXBoZXJJZCA9PT0gcGFyc2VJbnQoZ2V0VXJsVmFsdWUoJ2lkJykpXHJcbilcclxubWFpbi5pbnNlcnRCZWZvcmUoXHJcbiAgcGhvdG9ncmFwaGVyLmlkZW50aXR5U2VjdGlvbigpLFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpYXMnKVxyXG4pXHJcblxyXG5kb2N1bWVudC50aXRsZSA9ICdGaXNoZXllIC0gJyArIHBob3RvZ3JhcGhlci5uYW1lXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBkaWFsb2cgPSBuZXcgQ29udGFjdERpYWxvZygpXHJcbi8vIGF1IGNoYXJnZW1lbnQgYWN0aXbDqSBsZXMgYW5pbWF0aW9uc1xyXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RyYW5zaXRpb25zLW9ubHktYWZ0ZXItcGFnZS1sb2FkL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBjb25zdCBhbmltcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZWxvYWQnKVxyXG4gIHdoaWxlIChhbmltcy5sZW5ndGggPiAwKSB7XHJcbiAgICBhbmltc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJylcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBtZWRpYXMgPSBbXVxyXG5tZWRpYURhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKGRhdGEsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzJ1xyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke01lZGlhLmdldExpa2VzKG1lZGlhcyl9IOKZpWBcclxuICB9KVxyXG4gIG1lZGlhcy5wdXNoKG1lZGlhKVxyXG59KVxyXG5NZWRpYS5zb3J0KCdwb3B1bGFyaXR5JywgbWVkaWFzKVxyXG4vLyBhdSBjbGlxdWUgc3VyIHVuZSBtZWRpYUNhcmQgPT4gb3V2cmlyIGxlIGNhcm91c2VsIMOgIGwnaW1hZ2UgY29ycmVzcG9uZGFudGVcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYXMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBtZWRpYUNhcmQgPSBtZWRpYXNbaV0uY2FyZEVsZW1lbnRcclxuICBjb25zdCBtZWRpYUNhcmRMaW5rID0gbWVkaWFDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxyXG4gIG1lZGlhQ2FyZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBpbmRleCA9IFsuLi5tZWRpYUNhcmQucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uaW5kZXhPZihtZWRpYUNhcmQpXHJcbiAgICBjYXJvdXNlbC5vcGVuKGluZGV4KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIGNyw6lhdGlvbiBkdSBzw6lsZWN0IGN1c3RvbWlzw6lcclxuU2VsZWN0LmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0U3R5bGVkJyksICh2YWx1ZSkgPT5cclxuICBNZWRpYS5zb3J0KHZhbHVlLCBtZWRpYXMpXHJcbilcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy5waG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXMnXHJcbikudGV4dENvbnRlbnQgPSBgJHtNZWRpYS5nZXRMaWtlcyhtZWRpYXMpfSDimaVgXHJcblxyXG5jb25zdCBjYXJvdXNlbCA9IG5ldyBDYXJvdXNlbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKSlcclxuIl0sIm5hbWVzIjpbImZpbmRGb2N1c2FibGVFbGVtZW50cyIsIkNhcm91c2VsIiwiZWxlbWVudCIsInByZXZCdG4iLCJxdWVyeVNlbGVjdG9yIiwibmV4dEJ0biIsImNsb3NlQnRuIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVnZW5kIiwiaW5kZXgiLCJGb2N1c2FibGVFbGVtZW50cyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJmb3JFYWNoIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJjbG9zZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiLCJhbmltYXRpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImdldEF0dHJpYnV0ZSIsImZvY3VzIiwibmV4dEZyYW1lIiwicHJldkZyYW1lIiwia2V5RXZlbnRzIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9sZEVsZW1lbnQiLCJuZXdFbGVtZW50Iiwib25jZSIsImNvZGUiLCJzaGlmdEtleSIsImFsdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJDb250YWN0RGlhbG9nIiwib3BlbkJ0biIsInN1Ym1pdEJ0biIsImZvcm0iLCJvcGVuIiwia2V5Ym9hcmQiLCJvblN1Ym1pdCIsImlucHV0cyIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImNyZWF0ZUNvbXBsZXhFbGVtZW50IiwiU2VsZWN0Iiwib25DaGFuZ2VGdW5jdGlvbiIsImVsU2VsZWN0TmF0aXZlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVTZWxlY3RDbG9uZSIsImN1c3RvbU9wdHNMaXN0IiwiQXJyYXkiLCJmcm9tIiwiZWxTZWxlY3RDdXN0b21PcHRzIiwiY2hpbGRyZW4iLCJvcHRpb25zQ291bnQiLCJkZWZhdWx0TGFiZWwiLCJlbFNlbGVjdEN1c3RvbUJveCIsIm9wdGlvbkNoZWNrZWQiLCJvcHRpb25Ib3ZlcmVkSW5kZXgiLCJpc0Nsb3NlZCIsImVsU2VsZWN0Q3VzdG9tIiwiY29udGFpbnMiLCJvcGVuU2VsZWN0Q3VzdG9tIiwiY2xvc2VTZWxlY3RDdXN0b20iLCJ0YXJnZXQiLCJlbFJlc3BlY3RpdmVDdXN0b21PcHRpb24iLCJ1cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkIiwiZWxPcHRpb24iLCJ1cGRhdGVDdXN0b21TZWxlY3RIb3ZlcmVkIiwib2JqIiwibmFtZSIsInR5cGUiLCJjbGFzcyIsImF0dHJpYnV0ZXMiLCJhcmlhSGlkZGVuIiwiY29udGVudCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiaSIsIm9wdGlvbiIsImRhdGFWYWx1ZSIsImlubmVySFRNTCIsInB1c2giLCJvcHRpb25DaGVja2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJ3YXRjaENsaWNrT3V0c2lkZSIsInN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24iLCJuZXdJbmRleCIsInByZXZPcHRpb24iLCJ0ZXh0IiwicHJldlZhbHVlIiwiZWxQcmV2T3B0aW9uIiwiZGlkQ2xpY2tlZE91dHNpZGUiLCJjcmVhdGVFbGVtZW50RnJvbU9iamVjdCIsIk1lZGlhIiwicmVmcmVzaFRvdGFsTGlrZXMiLCJ0aXRsZSIsImFsdCIsInNyYyIsImltYWdlIiwidmlkZW8iLCJsaWtlcyIsImRhdGUiLCJEYXRlIiwibWVkaWEiLCJQaG90byIsIlZpZGVvIiwiY2FyZEVsZW1lbnQiLCJjcmVhdGVDYXJkIiwiY2Fyb3VzZWxJdGVtRWxlbWVudCIsImNyZWF0ZUNhcm91c2VsSXRlbSIsImFwcGVuZEVsZW1lbnRzIiwibGlrZXNFbCIsIm9uTGlrZUNsaWNrIiwicmVwbGFjZSIsImFwcGVuZCIsIm1lZGlhQ2FyZE9iaiIsImhyZWYiLCJ0YWJpbmRleCIsImFyaWFMYWJlbCIsImNhcm91c2VsSXRlbU9iaiIsImRhdGFMZWdlbmQiLCJjYXJvdXNlbEl0ZW0iLCJtZWRpYXMiLCJ0eXBlT2ZTb3J0Iiwic29ydCIsImEiLCJiIiwiY29udHJvbHMiLCJQaG90b2dyYXBoZXIiLCJkYXRhIiwiSW1hZ2UiLCJwb3J0cmFpdCIsImxvY2F0aW9uIiwiY2l0eSIsImNvdW50cnkiLCJzbG9nYW4iLCJ0YWdsaW5lIiwicHJpY2UiLCJ0YWdzIiwidGFnIiwidGFnRWwiLCJpbm5lcmh0bWwiLCJ0YWdMaSIsInRhZ0EiLCJnZXRVcmxWYWx1ZSIsInBhcnNlZFVybCIsIlVSTCIsIndpbmRvdyIsInNlYXJjaFBhcmFtcyIsImdldCIsImltcG9ydEFsbCIsInIiLCJpbWFnZXMiLCJrZXlzIiwiaXRlbSIsImFyciIsIm5ld0FyciIsIm5ld09iaiIsIkRPTWVsZW1lbnQiLCJwYXBhIiwiZmluZCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJjYW1lbENhc2VQYXJzZXIiLCJjcmVhdGVUZXh0Tm9kZSIsInJlc3VsdCIsImZpbmFsUmVzdWx0IiwiY2hhckF0Iiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsIkRhdGEiLCJyZXF1aXJlIiwiY29udGV4dCIsIklkIiwicGFyc2VJbnQiLCJpc05hTiIsInBob3RvZ3JhcGhlckRhdGEiLCJwaG90b2dyYXBoZXJzIiwicGhvdG9ncmFwaGVyIiwibWFpbiIsIm1lZGlhRGF0YSIsImZpbHRlciIsInBob3RvZ3JhcGhlcklkIiwiaW5zZXJ0QmVmb3JlIiwiaWRlbnRpdHlTZWN0aW9uIiwiZGlhbG9nIiwiYW5pbXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZ2V0TGlrZXMiLCJtZWRpYUNhcmQiLCJtZWRpYUNhcmRMaW5rIiwicGFyZW50RWxlbWVudCIsImluZGV4T2YiLCJjYXJvdXNlbCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=