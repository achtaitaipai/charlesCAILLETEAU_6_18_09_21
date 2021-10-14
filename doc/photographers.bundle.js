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
      this.items[this.index].querySelector('.carousel__media').focus(); // créer les listeners

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
    this.onLike = this.onLike.bind(this);
    this.likesEl.addEventListener('click', this.onLike);
    this.onLikeKey = this.onLikeKey.bind(this);
    this.likesEl.addEventListener('keydown', this.onLikeKey);
  }
  /**
   * Lorsque le bouton like est cliqué
   */


  _createClass(Media, [{
    key: "onLikeKey",
    value: function onLikeKey(e) {
      if (e.code === 'Enter') this.onLike(e);
    }
  }, {
    key: "onLike",
    value: function onLike(e) {
      this.likes++;
      this.likesEl.textContent = this.likesEl.textContent.replace(this.likes - 1, this.likes);
      this.refreshTotalLikes(e);
      this.likesEl.removeEventListener('click', this.onLike);
      this.likesEl.removeEventListener('keydown', this.onLikeKey);
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
        type: 'article',
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

      if (this.media.altText) {
        var alt = this.media.altText;
        carouselItem.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementFromObject)(alt));
      }

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
      alt: obj.altText
    }
  };
  this.carouselItemObj = {
    type: 'img',
    class: 'carousel__media',
    attributes: {
      src: "./assets/images/".concat(obj.image),
      alt: obj.altText
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
  this.altText = {
    type: 'span',
    class: 'sr-only',
    content: obj.altText
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
/* harmony export */   "getUrlValues": () => (/* binding */ getUrlValues),
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
function getUrlValues(name) {
  var parsedUrl = new URL(window.location.href);
  var retour = parsedUrl.searchParams.get(name) ? parsedUrl.searchParams.get(name).split(',') : null;
  return retour;
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
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.preload {\n  transition: none !important;\n}\n\nbody {\n  font-family: \"DM Sans\", sans-serif;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n.error {\n  text-align: center;\n  color: #901C1C;\n}\n\n.header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 86%;\n  margin: 0 auto 0 auto;\n  gap: 2rem;\n  padding: 3rem 0;\n}\n.header__logo {\n  height: 2.35rem;\n}\n.header__logo img {\n  height: 100%;\n}\n.header__logo:focus img, .header__logo:hover img {\n  filter: drop-shadow(2px 2px 0px black);\n}\n.header__hiddenlink {\n  position: absolute;\n  top: -1000px;\n  left: 50%;\n  background: #DB8876;\n  color: black;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.3125rem;\n}\n.header__hiddenlink:focus {\n  top: 0.5rem;\n}\n\n@media (max-width: 1340px) {\n  .nav {\n    width: 100%;\n  }\n}\n.nav__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem 0.3125rem;\n}\n.nav__tag a {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.nav__tag a:hover, .nav__tag a:focus, .nav__tag a.active {\n  background: #901C1C;\n  color: white;\n}\n\n.main__title {\n  position: absolute;\n  top: calc(4.175rem - 2vw);\n  right: 3%;\n  font-size: 2.5vw;\n  color: #901C1C;\n}\n@media (max-width: 900px) {\n  .main__title {\n    top: 3.5rem;\n    font-size: 0.875rem;\n  }\n}\n.main__photographers {\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-content: center;\n  gap: 3rem;\n  margin-bottom: 5rem;\n}\n@media (max-width: 900px) {\n  .main__photographers {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .main__photographers {\n    grid-template-columns: 100%;\n  }\n}\n\n.photographerCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link:hover .photographerCard__title, .photographerCard__link:focus .photographerCard__title {\n  color: #901C1C;\n}\n.photographerCard__link:hover .photographerCard__img, .photographerCard__link:focus .photographerCard__img {\n  transform: scale(1.02);\n}\n.photographerCard__imgContainer {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerCard__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.photographerCard__title {\n  color: #D3573C;\n  text-align: center;\n  font-size: 2.25rem;\n}\n.photographerCard__infos {\n  text-align: center;\n  line-height: 1.5;\n}\n.photographerCard__slogan {\n  color: black;\n}\n.photographerCard__location {\n  color: #901C1C;\n}\n.photographerCard__tarif {\n  color: #757575;\n}\n.photographerCard__tags {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem 0.3125rem;\n  margin: 0.325rem;\n}\n.photographerCard__tag {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerCard__tag:hover, .photographerCard__tag:focus, .photographerCard__tag.active {\n  background: #901C1C;\n  color: white;\n}\n\n.photographerIdentity {\n  display: flex;\n  gap: 1rem;\n  background: #FAFAFA;\n  align-items: flex-start;\n  width: 86%;\n  margin: auto;\n  padding: 4rem 3.125rem 4rem 2rem;\n}\n.photographerIdentity__infos {\n  max-width: 50%;\n}\n.photographerIdentity__title {\n  font-size: 4rem;\n  line-height: 1;\n  color: #D3573C;\n}\n.photographerIdentity__text {\n  line-height: 2;\n}\n.photographerIdentity__location {\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.photographerIdentity__slogan {\n  color: #525252;\n}\n.photographerIdentity__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.9rem;\n  gap: 0.625rem 0.3125rem;\n}\n.photographerIdentity__lien {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerIdentity__lien:hover, .photographerIdentity__lien:focus, .photographerIdentity__lien.active {\n  background: #901C1C;\n  color: white;\n}\n.photographerIdentity__contact {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  z-index: 10;\n}\n.photographerIdentity__contact:hover, .photographerIdentity__contact:focus {\n  background: #D3573C;\n  color: black;\n}\n.photographerIdentity__imgContainer {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerIdentity__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.photographerIdentity__likesAndPrice {\n  position: fixed;\n  bottom: 0;\n  right: 2rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 4rem;\n  padding: 2rem 1.3125rem;\n  background: #DB8876;\n  color: black;\n  font-size: 1.5rem;\n  font-weight: 500;\n  border-radius: 0.3125rem 0.3125rem 0 0;\n  z-index: 10;\n}\n@media (max-width: 960px) {\n  .photographerIdentity__title {\n    font-size: 2.25rem;\n  }\n  .photographerIdentity__location, .photographerIdentity__slogan, .photographerIdentity__lien {\n    font-size: 0.8125rem;\n  }\n  .photographerIdentity__contact {\n    position: fixed;\n    left: 50%;\n    bottom: 2rem;\n    transform: translateX(-50%);\n    padding: 0.3125rem 1rem;\n    font-size: 1rem;\n  }\n  .photographerIdentity__imgContainer {\n    width: 100px;\n    height: 100px;\n  }\n  .photographerIdentity__likesAndPrice {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .photographerIdentity {\n    width: 100%;\n    padding: 4rem 1.25rem 4rem 1.25rem;\n    background: transparent;\n  }\n  .photographerIdentity__infos {\n    max-width: 75%;\n  }\n  .photographerIdentity__imgContainer {\n    position: absolute;\n    right: 5vw;\n  }\n}\n\n.selectStyled {\n  width: 86%;\n  margin: 0.5rem auto 0 auto;\n  /* Add the focus states too, They matter, always! */\n}\n@media (max-width: 800px) {\n  .selectStyled {\n    display: none;\n  }\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom {\n  position: relative;\n  width: 11rem;\n  height: 3rem;\n  font-weight: 700;\n}\n.selectStyled .selectCustom {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n@media (hover: hover) {\n  .selectStyled .selectCustom {\n    display: block;\n  }\n  .selectStyled .selectNative:focus + .selectCustom {\n    display: none;\n  }\n}\n.selectStyled .select {\n  position: relative;\n}\n.selectStyled .selectLabel {\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n  margin-right: 1.5rem;\n}\n.selectStyled .selectWrapper {\n  position: relative;\n  display: inline-block;\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom-trigger {\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  border-radius: 0.4rem;\n}\n.selectStyled .selectNative {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position-x: 100%;\n  background-position-y: 0.8rem;\n  padding: 0rem 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger {\n  border-radius: 0.4rem 0.4rem 0 0;\n}\n.selectStyled .selectCustom-trigger {\n  position: relative;\n  height: 100%;\n  background: #901C1C;\n  color: white;\n  padding: 0 0.8rem;\n  line-height: 3rem;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-trigger::after {\n  content: \"˄\";\n  position: absolute;\n  top: 0;\n  right: 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger::after {\n  content: \"˅\";\n}\n.selectStyled .selectCustom-trigger:hover {\n  background: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-options {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  display: none;\n}\n.selectStyled .selectCustom.isActive .selectCustom-options {\n  display: block;\n}\n.selectStyled .selectCustom-option {\n  position: relative;\n  padding: 0.8rem;\n  padding-left: 2.5rem;\n  background: #901C1C;\n  color: white;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-option:last-of-type {\n  border-radius: 0 0 0.4rem 0.4rem;\n}\n.selectStyled .selectCustom-option.isHover,\n.selectStyled .selectCustom-option:hover {\n  background-color: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-option:not(:last-of-type)::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  border-bottom: 1px solid white;\n}\n.selectStyled .selectCustom-option.isActive::before {\n  content: \"✓\";\n  position: absolute;\n  left: 0.8rem;\n}\n\n.mediasContainer {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  width: 100%;\n  gap: 1rem 6rem;\n  width: 86%;\n  margin: 3.625rem auto 0 auto;\n}\n@media (max-width: 1250px) {\n  .mediasContainer {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .mediasContainer {\n    grid-template-columns: 1fr;\n  }\n}\n\n.mediaCard {\n  width: 100%;\n}\n.mediaCard__imgContainer {\n  display: block;\n  width: 100%;\n  height: 300px;\n  border-radius: 0.3125rem;\n  overflow: hidden;\n  cursor: pointer;\n}\n.mediaCard__imgContainer:hover .mediaCard__media, .mediaCard__imgContainer:focus .mediaCard__media {\n  transform: scale(1.02);\n}\n.mediaCard__media {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.mediaCard__infos {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  line-height: 2;\n  color: #901C1C;\n}\n.mediaCard__title {\n  font-weight: 400;\n  line-height: 1;\n}\n.mediaCard__likes {\n  font-style: normal;\n  margin-left: auto;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #901C1C;\n  transition: color 0.3s ease-out;\n}\n.mediaCard__likes:hover, .mediaCard__likes:focus {\n  color: #D3573C;\n}\n\n.dialog {\n  display: grid;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(196, 196, 196, 0.4);\n  place-items: center;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateY(-2rem);\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.dialog.visible {\n  pointer-events: visible;\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.dialogForm {\n  position: relative;\n  padding: 0 2.1875rem;\n  background: #DB8876;\n  border-radius: 0.3125rem;\n  width: 46%;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.dialogForm__title {\n  font-size: 4rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.dialogForm__label, .dialogForm__input {\n  display: block;\n  font-size: 2.25rem;\n  border-radius: 0.3125rem;\n  width: 100%;\n  outline: 0;\n  border: 0;\n}\n.dialogForm__input:focus:invalid {\n  outline: none;\n}\n.dialogForm__submit {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  display: block;\n  margin: 1.625rem 0 1rem 0;\n}\n.dialogForm__submit:hover, .dialogForm__submit:focus {\n  background: #D3573C;\n  color: black;\n}\n.dialogForm__close {\n  display: grid;\n  position: absolute;\n  top: 2rem;\n  right: 2.1875rem;\n  color: white;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  width: 2rem;\n}\n.dialogForm__close img {\n  width: 100%;\n}\n@media (max-width: 1250px) {\n  .dialogForm__title {\n    font-size: 2rem;\n  }\n  .dialogForm__label, .dialogForm__input {\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n  .dialogForm__close {\n    top: 1rem;\n    width: 1rem;\n  }\n}\n@media (max-width: 700px) {\n  .dialogForm {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n  }\n  .dialogForm__close {\n    top: 2rem;\n    right: 1rem;\n  }\n}\n\n.carousel {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: white;\n  opacity: 0;\n  transform: translate3d(0, -2rem, 0);\n  pointer-events: none;\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.carousel.visible {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  pointer-events: visible;\n}\n.carousel__container {\n  display: grid;\n  height: 90%;\n  grid-template-columns: 1fr 10fr 1fr;\n  grid-template-rows: 1fr 5fr 2rem;\n  grid-template-areas: \". frame close\" \"prev frame next\" \". legend .\";\n}\n.carousel__frame {\n  grid-area: frame;\n  position: relative;\n  list-style: none;\n  place-self: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.carousel__legend {\n  grid-area: legend;\n  place-self: center flex-start;\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.carousel__prev, .carousel__next {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: grid;\n  place-items: center;\n  font-size: 4rem;\n  color: #901C1C;\n  font-weight: 700;\n  text-decoration: none;\n}\n.carousel__prev {\n  grid-area: prev;\n}\n.carousel__prev:hover, .carousel__prev:focus {\n  color: #D3573C;\n}\n.carousel__next {\n  grid-area: next;\n}\n.carousel__next:hover, .carousel__next:focus {\n  color: #D3573C;\n}\n.carousel__close {\n  grid-area: close;\n  display: grid;\n  place-items: center;\n  z-index: 2;\n  background: none;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  width: 3rem;\n  height: 3rem;\n}\n.carousel__close img {\n  height: 2rem;\n}\n.carousel__close:hover img, .carousel__close:focus img {\n  filter: invert(42%) sepia(73%) saturate(690%) hue-rotate(327deg) brightness(88%) contrast(88%);\n}\n.carousel__close:focus {\n  outline: 2px solid black;\n}\n.carousel__item {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.carousel__media {\n  object-fit: cover;\n  width: 100%;\n  max-height: 100%;\n}\n\n@keyframes vanish {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes emerge {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/assets/scss/style.scss","webpack://./src/assets/scss/bases/_bases.scss","webpack://./src/assets/scss/utils/_variables.scss","webpack://./src/assets/scss/blocs/_header.scss","webpack://./src/assets/scss/utils/_mixins.scss","webpack://./src/assets/scss/blocs/_main.scss","webpack://./src/assets/scss/blocs/_photographerCard.scss","webpack://./src/assets/scss/blocs/_photographerIdentity.scss","webpack://./src/assets/scss/blocs/_select.scss","webpack://./src/assets/scss/blocs/_mediaCard.scss","webpack://./src/assets/scss/blocs/_dialog.scss","webpack://./src/assets/scss/blocs/_carousel.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap\");\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.preload {\n  transition: none !important;\n}\n\nbody {\n  font-family: \"DM Sans\", sans-serif;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  /* added line */\n  border: 0;\n}\n\n.error {\n  text-align: center;\n  color: #901C1C;\n}\n\n.header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 86%;\n  margin: 0 auto 0 auto;\n  gap: 2rem;\n  padding: 3rem 0;\n}\n.header__logo {\n  height: 2.35rem;\n}\n.header__logo img {\n  height: 100%;\n}\n.header__logo:focus img, .header__logo:hover img {\n  filter: drop-shadow(2px 2px 0px black);\n}\n.header__hiddenlink {\n  position: absolute;\n  top: -1000px;\n  left: 50%;\n  background: #DB8876;\n  color: black;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.3rem 0.5rem;\n  border-radius: 0.3125rem;\n}\n.header__hiddenlink:focus {\n  top: 0.5rem;\n}\n\n@media (max-width: 1340px) {\n  .nav {\n    width: 100%;\n  }\n}\n.nav__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem 0.3125rem;\n}\n.nav__tag a {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.nav__tag a:hover, .nav__tag a:focus, .nav__tag a.active {\n  background: #901C1C;\n  color: white;\n}\n\n.main__title {\n  position: absolute;\n  top: calc(4.175rem - 2vw);\n  right: 3%;\n  font-size: 2.5vw;\n  color: #901C1C;\n}\n@media (max-width: 900px) {\n  .main__title {\n    top: 3.5rem;\n    font-size: 0.875rem;\n  }\n}\n.main__photographers {\n  max-width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  place-content: center;\n  gap: 3rem;\n  margin-bottom: 5rem;\n}\n@media (max-width: 900px) {\n  .main__photographers {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .main__photographers {\n    grid-template-columns: 100%;\n  }\n}\n\n.photographerCard {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.photographerCard__link:hover .photographerCard__title, .photographerCard__link:focus .photographerCard__title {\n  color: #901C1C;\n}\n.photographerCard__link:hover .photographerCard__img, .photographerCard__link:focus .photographerCard__img {\n  transform: scale(1.02);\n}\n.photographerCard__imgContainer {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerCard__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.photographerCard__title {\n  color: #D3573C;\n  text-align: center;\n  font-size: 2.25rem;\n}\n.photographerCard__infos {\n  text-align: center;\n  line-height: 1.5;\n}\n.photographerCard__slogan {\n  color: black;\n}\n.photographerCard__location {\n  color: #901C1C;\n}\n.photographerCard__tarif {\n  color: #757575;\n}\n.photographerCard__tags {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 1rem 0.3125rem;\n  margin: 0.325rem;\n}\n.photographerCard__tag {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerCard__tag:hover, .photographerCard__tag:focus, .photographerCard__tag.active {\n  background: #901C1C;\n  color: white;\n}\n\n.photographerIdentity {\n  display: flex;\n  gap: 1rem;\n  background: #FAFAFA;\n  align-items: flex-start;\n  width: 86%;\n  margin: auto;\n  padding: 4rem 3.125rem 4rem 2rem;\n}\n.photographerIdentity__infos {\n  max-width: 50%;\n}\n.photographerIdentity__title {\n  font-size: 4rem;\n  line-height: 1;\n  color: #D3573C;\n}\n.photographerIdentity__text {\n  line-height: 2;\n}\n.photographerIdentity__location {\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.photographerIdentity__slogan {\n  color: #525252;\n}\n.photographerIdentity__tagsList {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 0.9rem;\n  gap: 0.625rem 0.3125rem;\n}\n.photographerIdentity__lien {\n  border: 1px solid #c4c4c4;\n  border-radius: 0.6875rem;\n  padding: 0.1rem 0.5rem;\n  color: #901C1C;\n  font-weight: 500;\n  transition: color 0.3s, background-color 0.3s;\n}\n.photographerIdentity__lien:hover, .photographerIdentity__lien:focus, .photographerIdentity__lien.active {\n  background: #901C1C;\n  color: white;\n}\n.photographerIdentity__contact {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  z-index: 10;\n}\n.photographerIdentity__contact:hover, .photographerIdentity__contact:focus {\n  background: #D3573C;\n  color: black;\n}\n.photographerIdentity__imgContainer {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  border-radius: 50%;\n  overflow: hidden;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px 0 #00000040;\n}\n.photographerIdentity__img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n.photographerIdentity__likesAndPrice {\n  position: fixed;\n  bottom: 0;\n  right: 2rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 4rem;\n  padding: 2rem 1.3125rem;\n  background: #DB8876;\n  color: black;\n  font-size: 1.5rem;\n  font-weight: 500;\n  border-radius: 0.3125rem 0.3125rem 0 0;\n  z-index: 10;\n}\n@media (max-width: 960px) {\n  .photographerIdentity__title {\n    font-size: 2.25rem;\n  }\n  .photographerIdentity__location, .photographerIdentity__slogan, .photographerIdentity__lien {\n    font-size: 0.8125rem;\n  }\n  .photographerIdentity__contact {\n    position: fixed;\n    left: 50%;\n    bottom: 2rem;\n    transform: translateX(-50%);\n    padding: 0.3125rem 1rem;\n    font-size: 1rem;\n  }\n  .photographerIdentity__imgContainer {\n    width: 100px;\n    height: 100px;\n  }\n  .photographerIdentity__likesAndPrice {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .photographerIdentity {\n    width: 100%;\n    padding: 4rem 1.25rem 4rem 1.25rem;\n    background: transparent;\n  }\n  .photographerIdentity__infos {\n    max-width: 75%;\n  }\n  .photographerIdentity__imgContainer {\n    position: absolute;\n    right: 5vw;\n  }\n}\n\n.selectStyled {\n  width: 86%;\n  margin: 0.5rem auto 0 auto;\n  /* Add the focus states too, They matter, always! */\n}\n@media (max-width: 800px) {\n  .selectStyled {\n    display: none;\n  }\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom {\n  position: relative;\n  width: 11rem;\n  height: 3rem;\n  font-weight: 700;\n}\n.selectStyled .selectCustom {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n@media (hover: hover) {\n  .selectStyled .selectCustom {\n    display: block;\n  }\n  .selectStyled .selectNative:focus + .selectCustom {\n    display: none;\n  }\n}\n.selectStyled .select {\n  position: relative;\n}\n.selectStyled .selectLabel {\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n  margin-right: 1.5rem;\n}\n.selectStyled .selectWrapper {\n  position: relative;\n  display: inline-block;\n}\n.selectStyled .selectNative,\n.selectStyled .selectCustom-trigger {\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  border-radius: 0.4rem;\n}\n.selectStyled .selectNative {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\n  background-repeat: no-repeat;\n  background-position-x: 100%;\n  background-position-y: 0.8rem;\n  padding: 0rem 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger {\n  border-radius: 0.4rem 0.4rem 0 0;\n}\n.selectStyled .selectCustom-trigger {\n  position: relative;\n  height: 100%;\n  background: #901C1C;\n  color: white;\n  padding: 0 0.8rem;\n  line-height: 3rem;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-trigger::after {\n  content: \"˄\";\n  position: absolute;\n  top: 0;\n  right: 0.8rem;\n}\n.selectStyled .selectCustom.isActive .selectCustom-trigger::after {\n  content: \"˅\";\n}\n.selectStyled .selectCustom-trigger:hover {\n  background: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-options {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  display: none;\n}\n.selectStyled .selectCustom.isActive .selectCustom-options {\n  display: block;\n}\n.selectStyled .selectCustom-option {\n  position: relative;\n  padding: 0.8rem;\n  padding-left: 2.5rem;\n  background: #901C1C;\n  color: white;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n}\n.selectStyled .selectCustom-option:last-of-type {\n  border-radius: 0 0 0.4rem 0.4rem;\n}\n.selectStyled .selectCustom-option.isHover,\n.selectStyled .selectCustom-option:hover {\n  background-color: #D3573C;\n  color: black;\n}\n.selectStyled .selectCustom-option:not(:last-of-type)::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 90%;\n  border-bottom: 1px solid white;\n}\n.selectStyled .selectCustom-option.isActive::before {\n  content: \"✓\";\n  position: absolute;\n  left: 0.8rem;\n}\n\n.mediasContainer {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  justify-items: center;\n  width: 100%;\n  gap: 1rem 6rem;\n  width: 86%;\n  margin: 3.625rem auto 0 auto;\n}\n@media (max-width: 1250px) {\n  .mediasContainer {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 900px) {\n  .mediasContainer {\n    grid-template-columns: 1fr;\n  }\n}\n\n.mediaCard {\n  width: 100%;\n}\n.mediaCard__imgContainer {\n  display: block;\n  width: 100%;\n  height: 300px;\n  border-radius: 0.3125rem;\n  overflow: hidden;\n  cursor: pointer;\n}\n.mediaCard__imgContainer:hover .mediaCard__media, .mediaCard__imgContainer:focus .mediaCard__media {\n  transform: scale(1.02);\n}\n.mediaCard__media {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.3s ease-out;\n}\n.mediaCard__infos {\n  display: flex;\n  align-items: center;\n  font-size: 1.5rem;\n  line-height: 2;\n  color: #901C1C;\n}\n.mediaCard__title {\n  font-weight: 400;\n  line-height: 1;\n}\n.mediaCard__likes {\n  font-style: normal;\n  margin-left: auto;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #901C1C;\n  transition: color 0.3s ease-out;\n}\n.mediaCard__likes:hover, .mediaCard__likes:focus {\n  color: #D3573C;\n}\n\n.dialog {\n  display: grid;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(196, 196, 196, 0.4);\n  place-items: center;\n  pointer-events: none;\n  opacity: 0;\n  transform: translateY(-2rem);\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.dialog.visible {\n  pointer-events: visible;\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.dialogForm {\n  position: relative;\n  padding: 0 2.1875rem;\n  background: #DB8876;\n  border-radius: 0.3125rem;\n  width: 46%;\n  max-height: 100%;\n  overflow-y: auto;\n}\n.dialogForm__title {\n  font-size: 4rem;\n  font-weight: 400;\n  margin-bottom: 1rem;\n}\n.dialogForm__label, .dialogForm__input {\n  display: block;\n  font-size: 2.25rem;\n  border-radius: 0.3125rem;\n  width: 100%;\n  outline: 0;\n  border: 0;\n}\n.dialogForm__input:focus:invalid {\n  outline: none;\n}\n.dialogForm__submit {\n  width: 170px;\n  height: 69px;\n  font-size: 1rem;\n  font-weight: 700;\n  border-radius: 0.3125rem;\n  background: #901C1C;\n  color: white;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  transition: color 0.3s, background-color 0.3s;\n  display: block;\n  margin: 1.625rem 0 1rem 0;\n}\n.dialogForm__submit:hover, .dialogForm__submit:focus {\n  background: #D3573C;\n  color: black;\n}\n.dialogForm__close {\n  display: grid;\n  position: absolute;\n  top: 2rem;\n  right: 2.1875rem;\n  color: white;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  width: 2rem;\n}\n.dialogForm__close img {\n  width: 100%;\n}\n@media (max-width: 1250px) {\n  .dialogForm__title {\n    font-size: 2rem;\n  }\n  .dialogForm__label, .dialogForm__input {\n    font-size: 1.5rem;\n    line-height: 1.5;\n  }\n  .dialogForm__close {\n    top: 1rem;\n    width: 1rem;\n  }\n}\n@media (max-width: 700px) {\n  .dialogForm {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n  }\n  .dialogForm__close {\n    top: 2rem;\n    right: 1rem;\n  }\n}\n\n.carousel {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n  background: white;\n  opacity: 0;\n  transform: translate3d(0, -2rem, 0);\n  pointer-events: none;\n  z-index: 20;\n  transition: transform 0.3s, opacity 0.3s;\n}\n.carousel.visible {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n  pointer-events: visible;\n}\n.carousel__container {\n  display: grid;\n  height: 90%;\n  grid-template-columns: 1fr 10fr 1fr;\n  grid-template-rows: 1fr 5fr 2rem;\n  grid-template-areas: \". frame close\" \"prev frame next\" \". legend .\";\n}\n.carousel__frame {\n  grid-area: frame;\n  position: relative;\n  list-style: none;\n  place-self: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.carousel__legend {\n  grid-area: legend;\n  place-self: center flex-start;\n  font-size: 1.5rem;\n  color: #901C1C;\n}\n.carousel__prev, .carousel__next {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  display: grid;\n  place-items: center;\n  font-size: 4rem;\n  color: #901C1C;\n  font-weight: 700;\n  text-decoration: none;\n}\n.carousel__prev {\n  grid-area: prev;\n}\n.carousel__prev:hover, .carousel__prev:focus {\n  color: #D3573C;\n}\n.carousel__next {\n  grid-area: next;\n}\n.carousel__next:hover, .carousel__next:focus {\n  color: #D3573C;\n}\n.carousel__close {\n  grid-area: close;\n  display: grid;\n  place-items: center;\n  z-index: 2;\n  background: none;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  width: 3rem;\n  height: 3rem;\n}\n.carousel__close img {\n  height: 2rem;\n}\n.carousel__close:hover img, .carousel__close:focus img {\n  filter: invert(42%) sepia(73%) saturate(690%) hue-rotate(327deg) brightness(88%) contrast(88%);\n}\n.carousel__close:focus {\n  outline: 2px solid black;\n}\n.carousel__item {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  height: 100%;\n}\n.carousel__media {\n  object-fit: cover;\n  width: 100%;\n  max-height: 100%;\n}\n\n@keyframes vanish {\n  0% {\n    opacity: 100%;\n  }\n  100% {\n    opacity: 0%;\n  }\n}\n@keyframes emerge {\n  0% {\n    opacity: 0%;\n  }\n  100% {\n    opacity: 100%;\n  }\n}","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');\r\n*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.preload {\r\n  transition: none !important;\r\n}\r\nbody {\r\n  font-family: 'DM Sans', sans-serif;\r\n}\r\n.noScroll {\r\n  overflow: hidden;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  white-space: nowrap; /* added line */\r\n  border: 0;\r\n}\r\n\r\n.error {\r\n  text-align: center;\r\n  color: $primary-1;\r\n}\r\n","$primary-1:#901C1C;\r\n$primary-2:#D3573C;\r\n\r\n$secondary-1:#525252;\r\n$secondary-2:#FAFAFA;\r\n$secondary-3:#901C1C;\r\n$secondary-4:#DB8876;",".header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  width: 86%;\r\n  margin: 0 auto 0 auto;\r\n  gap: 2rem;\r\n  padding: 3rem 0;\r\n  &__logo {\r\n    height: 2.35rem;\r\n    img {\r\n      height: 100%;\r\n    }\r\n  }\r\n  &__logo:focus img,\r\n  &__logo:hover img {\r\n    filter: drop-shadow(2px 2px 0px black);\r\n  }\r\n\r\n  &__hiddenlink {\r\n    position: absolute;\r\n    top: -1000px;\r\n    left: 50%;\r\n    background: $secondary-4;\r\n    color: black;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    padding: 0.3rem 0.5rem;\r\n    border-radius: 0.3125rem;\r\n    &:focus {\r\n      top: 0.5rem;\r\n    }\r\n  }\r\n}\r\n.nav {\r\n  @media (max-width: 1340px) {\r\n    width: 100%;\r\n  }\r\n  &__tagsList {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 1rem 0.3125rem;\r\n  }\r\n  &__tag {\r\n    // margin: 0 0.3125rem 0.3125rem 0;\r\n    a {\r\n      @include tag;\r\n    }\r\n  }\r\n}\r\n","@mixin tag {\r\n  border: 1px solid #c4c4c4;\r\n  border-radius: 0.6875rem;\r\n  padding: 0.1rem 0.5rem;\r\n  color: $primary-1;\r\n  font-weight: 500;\r\n  transition: color 0.3s, background-color 0.3s;\r\n  &:hover,\r\n  &:focus,\r\n  &.active {\r\n    background: $primary-1;\r\n    color: white;\r\n  }\r\n}\r\n\r\n@mixin btn {\r\n  width: 170px;\r\n  height: 69px;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  border-radius: 0.3125rem;\r\n  background: $primary-1;\r\n  color: white;\r\n  border: 0;\r\n  outline: 0;\r\n  cursor: pointer;\r\n  transition: color 0.3s, background-color 0.3s;\r\n  &:hover,\r\n  &:focus {\r\n    background: $primary-2;\r\n    color: black;\r\n  }\r\n}\r\n",".main {\r\n  &__title {\r\n    position: absolute;\r\n    top: calc(4.175rem - 2vw);\r\n    right: 3%;\r\n    font-size: 2.5vw;\r\n    color: $primary-1;\r\n\r\n    @media (max-width: 900px) {\r\n      top: 3.5rem;\r\n      font-size: 0.875rem;\r\n    }\r\n  }\r\n  &__photographers {\r\n    max-width: 100%;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    place-content: center;\r\n    gap: 3rem;\r\n    margin-bottom: 5rem;\r\n    @media (max-width: 900px) {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n    @media (max-width: 500px) {\r\n      grid-template-columns: 100%;\r\n    }\r\n  }\r\n}\r\n",".photographerCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  &__link {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    &:hover .photographerCard__title,\r\n    &:focus .photographerCard__title {\r\n      color: $primary-1;\r\n    }\r\n    &:hover .photographerCard__img,\r\n    &:focus .photographerCard__img {\r\n      transform: scale(1.02);\r\n    }\r\n  }\r\n  &__imgContainer {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 12px 0 #00000040;\r\n  }\r\n  &__img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: transform 0.3s ease-out;\r\n  }\r\n  &__title {\r\n    color: $primary-2;\r\n    text-align: center;\r\n    font-size: 2.25rem;\r\n  }\r\n  &__infos {\r\n    text-align: center;\r\n    line-height: 1.5;\r\n  }\r\n  &__slogan {\r\n    color: black;\r\n  }\r\n  &__location {\r\n    color: $primary-1;\r\n  }\r\n  &__tarif {\r\n    color: #757575;\r\n  }\r\n  &__tags {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 1rem 0.3125rem;\r\n    margin: 0.325rem;\r\n  }\r\n  &__tag {\r\n    @include tag;\r\n  }\r\n}\r\n",".photographerIdentity {\r\n  display: flex;\r\n  gap: 1rem;\r\n  background: $secondary-2;\r\n  align-items: flex-start;\r\n  width: 86%;\r\n  margin: auto;\r\n  padding: 4rem 3.125rem 4rem 2rem;\r\n  &__infos {\r\n    max-width: 50%;\r\n  }\r\n  &__title {\r\n    font-size: 4rem;\r\n    line-height: 1;\r\n    color: $primary-2;\r\n  }\r\n  &__text {\r\n    line-height: 2;\r\n  }\r\n  &__location {\r\n    font-size: 1.5rem;\r\n    color: $primary-1;\r\n  }\r\n  &__slogan {\r\n    color: $secondary-1;\r\n  }\r\n  &__tagsList {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 0.9rem;\r\n    gap: 0.625rem 0.3125rem;\r\n  }\r\n  &__lien {\r\n    @include tag;\r\n  }\r\n  &__contact {\r\n    @include btn;\r\n    z-index: 10;\r\n  }\r\n  &__imgContainer {\r\n    width: 200px;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    flex-shrink: 0;\r\n    box-shadow: 0 4px 12px 0 #00000040;\r\n  }\r\n  &__img {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  &__likesAndPrice {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 2rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 4rem;\r\n    padding: 2rem 1.3125rem;\r\n    background: $secondary-4;\r\n    color: black;\r\n    font-size: 1.5rem;\r\n    font-weight: 500;\r\n    border-radius: 0.3125rem 0.3125rem 0 0;\r\n    z-index: 10;\r\n  }\r\n  @media (max-width: 960px) {\r\n    &__title {\r\n      font-size: 2.25rem;\r\n    }\r\n    &__location,\r\n    &__slogan,\r\n    &__lien {\r\n      font-size: 0.8125rem;\r\n    }\r\n    &__contact {\r\n      position: fixed;\r\n      left: 50%;\r\n      bottom: 2rem;\r\n      transform: translateX(-50%);\r\n      padding: 0.3125rem 1rem;\r\n      font-size: 1rem;\r\n    }\r\n    &__imgContainer {\r\n      width: 100px;\r\n      height: 100px;\r\n    }\r\n    &__likesAndPrice {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 600px) {\r\n    width: 100%;\r\n    padding: 4rem 1.25rem 4rem 1.25rem;\r\n    background: transparent;\r\n    &__infos {\r\n      max-width: 75%;\r\n    }\r\n    &__imgContainer {\r\n      position: absolute;\r\n      right: 5vw;\r\n    }\r\n  }\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');\r\n\r\n.selectStyled {\r\n  width: 86%;\r\n  margin: 0.5rem auto 0 auto;\r\n  @media (max-width: 800px) {\r\n    display: none;\r\n  }\r\n  // Both native and custom selects must have the same width/height.\r\n  .selectNative,\r\n  .selectCustom {\r\n    position: relative;\r\n    width: 11rem;\r\n    height: 3rem;\r\n    font-weight: 700;\r\n  }\r\n\r\n  // Make sure the custom select does not mess with the layout\r\n  .selectCustom {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n  }\r\n\r\n  // This media query detects devices where the primary\r\n  // input mechanism can hover over elements. (e.g. computers with a mouse)\r\n  @media (hover: hover) {\r\n    // Since we are using a mouse, it's safe to show the custom select.\r\n    .selectCustom {\r\n      display: block;\r\n    }\r\n\r\n    // In a computer using keyboard? Then let's hide back the custom select\r\n    // while the native one is focused:\r\n    .selectNative:focus + .selectCustom {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  /* Add the focus states too, They matter, always! */\r\n  // .selectNative:focus {\r\n  //   box-shadow: $primary-2 0 0 0 2px;\r\n  // }\r\n\r\n  //\r\n  // Rest of the styles to create the custom select.\r\n  // Just make sure the native and the custom have a similar \"box\" (the trigger).\r\n  //\r\n\r\n  .select {\r\n    position: relative;\r\n  }\r\n\r\n  .selectLabel {\r\n    font-weight: bold;\r\n    margin-bottom: 0.4rem;\r\n    margin-right: 1.5rem;\r\n  }\r\n\r\n  .selectWrapper {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n\r\n  .selectNative,\r\n  .selectCustom-trigger {\r\n    background: $primary-1;\r\n    color: white;\r\n    border: 0;\r\n    outline: 0;\r\n    border-radius: 0.4rem;\r\n  }\r\n\r\n  .selectNative {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    background-image: url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");\r\n    background-repeat: no-repeat;\r\n    background-position-x: 100%;\r\n    background-position-y: 0.8rem;\r\n    padding: 0rem 0.8rem;\r\n  }\r\n\r\n  .selectCustom.isActive .selectCustom-trigger {\r\n    border-radius: 0.4rem 0.4rem 0 0;\r\n  }\r\n\r\n  .selectCustom-trigger {\r\n    position: relative;\r\n    height: 100%;\r\n    background: $primary-1;\r\n    color: white;\r\n    padding: 0 0.8rem;\r\n    line-height: 3rem;\r\n    cursor: pointer;\r\n    transition: color 0.3s, background-color 0.3s;\r\n  }\r\n\r\n  .selectCustom-trigger::after {\r\n    content: '˄';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0.8rem;\r\n  }\r\n  .selectCustom.isActive .selectCustom-trigger::after {\r\n    content: '˅';\r\n  }\r\n\r\n  .selectCustom-trigger:hover {\r\n    background: $primary-2;\r\n    color: black;\r\n  }\r\n\r\n  .selectCustom-options {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n    display: none;\r\n  }\r\n\r\n  .selectCustom.isActive .selectCustom-options {\r\n    display: block;\r\n  }\r\n\r\n  .selectCustom-option {\r\n    position: relative;\r\n    padding: 0.8rem;\r\n    padding-left: 2.5rem;\r\n    background: $primary-1;\r\n    color: white;\r\n    cursor: pointer;\r\n    transition: color 0.3s, background-color 0.3s;\r\n  }\r\n  .selectCustom-option:last-of-type {\r\n    border-radius: 0 0 0.4rem 0.4rem;\r\n  }\r\n\r\n  .selectCustom-option.isHover,\r\n  .selectCustom-option:hover {\r\n    background-color: $primary-2; // contrast AA\r\n    color: black;\r\n  }\r\n\r\n  .selectCustom-option:not(:last-of-type)::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 90%;\r\n    border-bottom: 1px solid white;\r\n  }\r\n\r\n  .selectCustom-option.isActive::before {\r\n    content: '✓';\r\n    position: absolute;\r\n    left: 0.8rem;\r\n  }\r\n}\r\n",".mediasContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  justify-items: center;\r\n  width: 100%;\r\n  gap: 1rem 6rem;\r\n  width: 86%;\r\n  margin: 3.625rem auto 0 auto;\r\n  @media (max-width: 1250px) {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  @media (max-width: 900px) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n.mediaCard {\r\n  width: 100%;\r\n  &__imgContainer {\r\n    display: block;\r\n    width: 100%;\r\n    height: 300px;\r\n    border-radius: 0.3125rem;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    &:hover .mediaCard__media,\r\n    &:focus .mediaCard__media {\r\n      transform: scale(1.02);\r\n    }\r\n  }\r\n  &__media {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: transform 0.3s ease-out;\r\n  }\r\n  &__infos {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    line-height: 2;\r\n    color: $primary-1;\r\n  }\r\n  &__title {\r\n    font-weight: 400;\r\n    line-height: 1;\r\n  }\r\n  &__likes {\r\n    font-style: normal;\r\n    margin-left: auto;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    color: $primary-1;\r\n    transition: color 0.3s ease-out;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n}\r\n",".dialog {\r\n  display: grid;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(196, 196, 196, 0.4);\r\n  place-items: center;\r\n  pointer-events: none;\r\n  opacity: 0;\r\n  transform: translateY(-2rem);\r\n  z-index: 20;\r\n  transition: transform 0.3s, opacity 0.3s;\r\n  &.visible {\r\n    pointer-events: visible;\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.dialogForm {\r\n  position: relative;\r\n  padding: 0 2.1875rem;\r\n  background: $secondary-4;\r\n  border-radius: 0.3125rem;\r\n  width: 46%;\r\n  max-height: 100%;\r\n  overflow-y: auto;\r\n  &__title {\r\n    font-size: 4rem;\r\n    font-weight: 400;\r\n    margin-bottom: 1rem;\r\n  }\r\n  &__label,\r\n  &__input {\r\n    display: block;\r\n    font-size: 2.25rem;\r\n    border-radius: 0.3125rem;\r\n    width: 100%;\r\n    outline: 0;\r\n    border: 0;\r\n  }\r\n  &__input:invalid {\r\n    // box-shadow: 0 0px 2px 3px red;\r\n  }\r\n\r\n  &__input:focus:invalid {\r\n    outline: none;\r\n  }\r\n  &__submit {\r\n    @include btn;\r\n    display: block;\r\n    margin: 1.625rem 0 1rem 0;\r\n  }\r\n  &__close {\r\n    display: grid;\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 2.1875rem;\r\n    color: white;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: 0;\r\n    outline: 0;\r\n    width: 2rem;\r\n    img {\r\n      width: 100%;\r\n    }\r\n  }\r\n  @media (max-width: 1250px) {\r\n    &__title {\r\n      font-size: 2rem;\r\n    }\r\n    &__label,\r\n    &__input {\r\n      font-size: 1.5rem;\r\n      line-height: 1.5;\r\n    }\r\n    &__close {\r\n      top: 1rem;\r\n      width: 1rem;\r\n    }\r\n  }\r\n  @media (max-width: 700px) {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n    &__close {\r\n      top: 2rem;\r\n      right: 1rem;\r\n    }\r\n  }\r\n}\r\n",".carousel {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: grid;\r\n  place-items: center;\r\n  background: white;\r\n  opacity: 0;\r\n  transform: translate3d(0, -2rem, 0);\r\n  pointer-events: none;\r\n  z-index: 20;\r\n  transition: transform 0.3s, opacity 0.3s;\r\n  &.visible {\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n    pointer-events: visible;\r\n  }\r\n  &__container {\r\n    display: grid;\r\n    height: 90%;\r\n    grid-template-columns: 1fr 10fr 1fr;\r\n    grid-template-rows: 1fr 5fr 2rem;\r\n    grid-template-areas:\r\n      '. frame close'\r\n      'prev frame next'\r\n      '. legend .';\r\n  }\r\n  &__frame {\r\n    grid-area: frame;\r\n    position: relative;\r\n    list-style: none;\r\n    place-self: center;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n  &__legend {\r\n    grid-area: legend;\r\n    place-self: center flex-start;\r\n    font-size: 1.5rem;\r\n    color: $primary-1;\r\n  }\r\n  &__prev,\r\n  &__next {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    display: grid;\r\n    place-items: center;\r\n    font-size: 4rem;\r\n    color: $primary-1;\r\n    font-weight: 700;\r\n\r\n    text-decoration: none;\r\n  }\r\n  &__prev {\r\n    grid-area: prev;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n  &__next {\r\n    grid-area: next;\r\n    &:hover,\r\n    &:focus {\r\n      color: $primary-2;\r\n    }\r\n  }\r\n  &__close {\r\n    grid-area: close;\r\n    display: grid;\r\n    place-items: center;\r\n    z-index: 2;\r\n    background: none;\r\n    border: 0;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    width: 3rem;\r\n    height: 3rem;\r\n    img {\r\n      height: 2rem;\r\n    }\r\n    &:hover img,\r\n    &:focus img {\r\n      filter: invert(42%) sepia(73%) saturate(690%) hue-rotate(327deg)\r\n        brightness(88%) contrast(88%);\r\n    }\r\n    &:focus {\r\n      outline: 2px solid black;\r\n    }\r\n  }\r\n  &__item {\r\n    position: absolute;\r\n    display: grid;\r\n    place-items: center;\r\n    height: 100%;\r\n  }\r\n  &__media {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    max-height: 100%;\r\n  }\r\n}\r\n@keyframes vanish {\r\n  0% {\r\n    opacity: 100%;\r\n  }\r\n  100% {\r\n    opacity: 0%;\r\n  }\r\n}\r\n@keyframes emerge {\r\n  0% {\r\n    opacity: 0%;\r\n  }\r\n  100% {\r\n    opacity: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
module.exports = JSON.parse('{"photographers":[{"name":"Mimi Keel","id":243,"city":"London","country":"UK","tags":["portrait","events","travel","animals"],"tagline":"Voir le beau dans le quotidien","price":400,"portrait":"MimiKeel.jpg"},{"name":"Ellie-Rose Wilkens","id":930,"city":"Paris","country":"France","tags":["sports","architecture"],"tagline":"Capturer des compositions complexes","price":250,"portrait":"EllieRoseWilkens.jpg"},{"name":"Tracy Galindo","id":82,"city":"Montreal","country":"Canada","tags":["art","fashion","events"],"tagline":"Photographe freelance","price":500,"portrait":"TracyGalindo.jpg"},{"name":"Nabeel Bradford","id":527,"city":"Mexico City","country":"Mexico","tags":["travel","portrait"],"tagline":"Toujours aller de l\'avant","price":350,"portrait":"NabeelBradford.jpg"},{"name":"Rhode Dubois","id":925,"city":"Barcelona","country":"Spain","tags":["sport","fashion","events","animals"],"tagline":"Je crée des souvenirs","price":275,"portrait":"RhodeDubois.jpg"},{"name":"Marcel Nikolic","id":195,"city":"Berlin","country":"Germany","tags":["travel","architecture"],"tagline":"Toujours à la recherche de LA photo","price":300,"portrait":"MarcelNikolic.jpg"}],"media":[{"id":342550,"photographerId":82,"title":"Fashion Yellow Beach","image":"Fashion_Yellow_Beach.jpg","tags":["fashion"],"likes":62,"date":"2011-12-08","price":55,"altText":"Femme vêtue d\'un survêtement jaune et se tenant devant un terrain de basket"},{"id":8520927,"photographerId":82,"title":"Fashion Urban Jungle","image":"Fashion_Urban_Jungle.jpg","tags":["fashion"],"likes":11,"date":"2011-11-06","price":55,"altText":"Femme accroupie au milieu d\'une route sur un pont. Son pantalon et son débardeur sont recouverts d\'un motif rappelant la jungle"},{"id":9025895,"photographerId":82,"title":"Fashion Pattern on a Pattern","image":"Fashion_Pattern_on_Pattern.jpg","tags":["fashion"],"likes":72,"date":"2013-08-12","price":55,"altText":"Femme en plan américain portant une robe à rayures verticales : jaunes oranges blanches et noires. Le mur derrière elle est constitué de dalle grise et blanche alternées"},{"id":9275938,"photographerId":82,"title":"Wedding Gazebo","image":"Event_WeddingGazebo.jpg","tags":["events"],"likes":69,"date":"2018-02-22","price":55,"altText":"Au centre de l\'image se tient un belvédère préparé pour un mariage : les colonnes sont fleuries. La photographie est prise sur le chemin qui mêne au belvédère."},{"id":2053494,"photographerId":82,"title":"Sparkles","image":"Event_Sparklers.jpg","tags":["events"],"likes":2,"date":"2020-05-25","price":55,"altText":"Les mariés sont de dos, il fait nuit une femme s\'approche avec une bougie magique à la main et un grand sourire"},{"id":7324238,"photographerId":82,"title":"18th Anniversary","image":"Event_18thAnniversary.jpg","tags":["events"],"likes":33,"date":"2019-06-12","price":55,"altText":"Au premier plan une table prête à être occupée et en arrière plan un plafond tamisé recouvert de deux ballons en forme de 18."},{"id":8328953,"photographerId":82,"title":"Wooden Horse Sculpture","video":"Art_Wooden_Horse_Sculpture.mp4","tags":["art"],"likes":24,"date":"2011-12-08","price":100,"altText":"La caméra tourne légèrement autour d\'un cheval sculpté en différentes essences de bois. "},{"id":7502053,"photographerId":82,"title":"Triangle Man","image":"Art_Triangle_Man.jpg","tags":["art"],"likes":88,"date":"2007-05-07","price":55,"altText":"Fresque murale à fond bleu : un homme a la tête tourné vers le ciel et au cou très long est recouvert par un triangle équilatéral blanc"},{"id":8523492,"photographerId":82,"title":"Purple Tunnel","image":"Art_Purple_light.jpg","tags":["art"],"likes":24,"date":"2018-05-05","price":55,"altText":"Couloir urbain carrelé et sale éclairé par une lumière violette et dont les murs sont recouvert de graffitis"},{"id":75902334,"photographerId":82,"title":"Art Mine","image":"Art_Mine.jpg","tags":["art"],"likes":75,"date":"2019-11-25","price":55,"altText":"Fresque murale, des têtes d\'oiseaux très cartoonesque tantôt bleues tantôt rouges recouvrent le mur."},{"id":73852953,"photographerId":925,"title":"8 Rows","image":"Sport_2000_with_8.jpg","tags":["sport"],"likes":52,"date":"2013-02-30","price":70,"altText":"Vue en plongée de cinq personnes assises et alignées avec chacune une rame dans la main."},{"id":92758372,"photographerId":925,"title":"Fashion Wings","image":"Fashion_Wings.jpg","tags":["fashion"],"likes":58,"date":"2018-07-17","price":70,"altText":"Une femme noire vêtue d\'une robe bleue est penchée vers la droite comme emportée par le vent. Derrière elle un homme blanc est penché dans la directions opposée. Les deux ont les yeux fermés."},{"id":32958383,"photographerId":925,"title":"Melody Red on Stripes","image":"Fashion_Melody_Red_on_Stripes.jpg","tags":["fashion"],"likes":11,"date":"2019-08-12","price":70,"altText":"Une femme vêtue d\'une longue robe rouge descend des escaliers."},{"id":928587383,"photographerId":925,"title":"Venture Conference","image":"Event_VentureConference.jpg","tags":["events"],"likes":2,"date":"2019-01-02","price":70,"altText":"Quatre personnes autour d\'une table écoute une femme se tenant plus loin et montrant des post-it"},{"id":725639493,"photographerId":925,"title":"Product Pitch","image":"Event_ProductPitch.jpg","tags":["events"],"likes":3,"date":"2019-05-20","price":70,"altText":"Un homme devant un grand écran de télévision s\'adresse à une dizaine de personnes assises et attentives."},{"id":23394384,"photographerId":925,"title":"Musical Festival Keyboard","image":"Event_KeyboardCheck.jpg","tags":["events"],"likes":52,"date":"2019-07-18","price":70,"altText":"Noir et blanc, une femme vue en contreplongée joue d\'un piano électronique."},{"id":87367293,"photographerId":925,"title":"Musical Festival Singer","image":"Event_Emcee.jpg","tags":["events"],"likes":23,"date":"2018-02-22","price":70,"altText":"Une femme souriante vue en contreplongée tient un micro devant sa bouche."},{"id":593834784,"photographerId":925,"title":"Animal Majesty","image":"Animals_Majesty.jpg","tags":["animals"],"likes":52,"date":"2017-03-13","price":70,"altText":"Un cerf vu de trois quarts fixe l\'objectif. Derrière lui une forêt laisse apparaître un lever de soleil"},{"id":83958935,"photographerId":925,"title":"Cute Puppy on Sunset","video":"Animals_Puppiness.mp4","tags":["animals"],"likes":52,"date":"2016-06-12","price":70,"altText":"Un chiot joue avec sa laisse. Il se tient sur une plage devant un coucher de soleil."},{"id":394583434,"photographerId":527,"title":"Rock Mountains","video":"Travel_Rock_Mountains.mp4","tags":["travel"],"likes":23,"date":"2017-03-18","price":45,"altText":"Traveling avant sur une chaîne de montagne vue du ciel. La face droite et recouverte de végétation tandis que la partie gauche ne laisse apparaître que la roche."},{"id":343423425,"photographerId":527,"title":"Outdoor Baths","image":"Travel_Outdoor_Baths.jpg","tags":["travel"],"likes":101,"date":"2017-04-03","price":45,"altText":"Une cinquantaine de personnes se baignent dans un grand étang dont s\'échappe de la fumée"},{"id":73434243,"photographerId":527,"title":"Road into the Hill","image":"Travel_Road_into_Hill.jpg","tags":["travel"],"likes":99,"date":"2018-04-30","price":45,"altText":"Route sinueuse au milieu de collines aux couleurs de l\'automne."},{"id":23425523,"photographerId":527,"title":"Bridge into the Forest","image":"Travel_Bridge_into_Forest.jpg","tags":["travel"],"likes":34,"date":"2016-04-05","price":45,"altText":"Vue d\'un pont donnant sur une forêt aux grands arbres."},{"id":23134513,"photographerId":527,"title":"Boat Wonderer","image":"Travel_Boat_Wanderer.jpg","tags":["travel"],"likes":23,"date":"2017-03-18","price":45,"altText":"Avant d\'un bateau. Sur les rives se tiennent de grands arbres. Au loin on peut voir des montagnes."},{"id":92352352,"photographerId":527,"title":"Portrait Sunkiss","image":"Portrait_Sunkissed.jpg","tags":["portrait"],"likes":66,"date":"2018-05-24","price":45,"altText":"Portrait d\'une jeune femme rousse au visage recouvert de tâches de rousseurs."},{"id":34513453,"photographerId":527,"title":"Shaw Potrait","image":"Portrait_Shaw.jpg","tags":["portait"],"likes":52,"date":"2017-04-21","price":45,"altText":"Portrait noir et blanc d\'un jeune homme sur fond noir. Son visage de trois quarts se détache du fond."},{"id":23523533,"photographerId":527,"title":"Alexandra","image":"Portrait_Alexandra.jpg","tags":["portait"],"likes":95,"date":"2018-11-02","price":45,"altText":"Portrait noir et blanc d\'une femme en gros plan."},{"id":525834234,"photographerId":527,"title":"Afternoon Break","image":"Portrait_AfternoonBreak.jpg","tags":["portait"],"likes":25,"date":"2019-01-02","price":45,"altText":"Portrait noir et blanc d\'un homme tenant une cigarette."},{"id":623534343,"photographerId":243,"title":"Lonesome","image":"Travel_Lonesome.jpg","tags":["travel"],"likes":88,"date":"2019-02-03","price":45,"altText":"Paysage montagneux et brumeux au loin une personne se tient debout."},{"id":625025343,"photographerId":243,"title":"Hillside Color","image":"Travel_HillsideColor.jpg","tags":["travel"],"likes":85,"date":"2019-04-03","price":45,"altText":"Ville en bord de côtes avec de nombreux bâtiments dépareillés et aglutinés."},{"id":2525345343,"photographerId":243,"title":"Wednesday Potrait","image":"Portrait_Wednesday.jpg","tags":["portait"],"likes":34,"date":"2019-04-07","price":45,"altText":"Portrait en noir et blanc d\'une enfant faisant une grimace."},{"id":2523434634,"photographerId":243,"title":"Nora Portrait","image":"Portrait_Nora.jpg","tags":["portait"],"likes":63,"date":"2019-04-07","price":45,"altText":"Portrait d\'une jeune fille portant des lunettes."},{"id":398847109,"photographerId":243,"title":"Raw Black Portrait","image":"Portrait_Background.jpg","tags":["portait"],"likes":55,"date":"2019-06-20","price":45,"altText":"Portrait noir et blanc d\'une femme dont les cheveux et le corps se confondent avec le fond noir."},{"id":2534342,"photographerId":243,"title":"Seaside Wedding","image":"Event_SeasideWedding.jpg","tags":["events"],"likes":25,"date":"2019-06-21","price":45,"altText":"Table prête à recevoir des convives sur des bords de plage."},{"id":65235234,"photographerId":243,"title":"Boulder Wedding","image":"Event_PintoWedding.jpg","tags":["events"],"likes":52,"date":"2019-06-25","price":45,"altText":"Deux mariés se tiennent par la taille front contre front au milieu d\'un paysage rocheux."},{"id":23523434,"photographerId":243,"title":"Benevides Wedding","image":"Event_BenevidesWedding.jpg","tags":["events"],"likes":77,"date":"2019-06-28","price":45,"altText":"Deux mariés souriant, l\'homme tient la femme par la taille."},{"id":5234343,"photographerId":243,"title":"Wild Horses in the Mountains","video":"Animals_Wild_Horses_in_the_mountains.mp4","tags":["animals"],"likes":142,"date":"2019-08-23","price":60,"altText":"Un troupeau de chevaux avancent dans la montagne. Un homme montant un cheval ferme la marche."},{"id":95234343,"photographerId":243,"title":"Rainbow Bird","image":"Animals_Rainbow.jpg","tags":["animals"],"likes":59,"date":"2019-07-02","price":60,"altText":"Rollier à longs brins"},{"id":52343416,"photographerId":195,"title":"Japanese Tower, Kyoto","image":"Travel_Tower.jpg","tags":["travel"],"likes":25,"date":"2019-04-03","price":60,"altText":"Rue japonaise bordée de maisons traditionnelles  au bout de laquelle une grande tour"},{"id":2523434,"photographerId":195,"title":"Senset on Canals, Venice","image":"Travel_SunsetonCanals.jpg","tags":["travel"],"likes":53,"date":"2019-05-06","price":60,"altText":"Canal de Venise bordé par des bâtiments. Des pirogues et autres bateaux naviquent"},{"id":95293534,"photographerId":195,"title":"Mountain and Lake","image":"Travel_OpenMountain.jpg","tags":["travel"],"likes":33,"date":"2019-05-12","price":60,"altText":"Photo prise depuis une étendue d\'eau les rives recouvertes de grands arbres se rejoignent devant de grandes montagnes. Les arbres se reflètent d\'ans l\'eau."},{"id":356234343,"photographerId":195,"title":"City Bike and Stair, Paris","image":"Travel_Bike_and_Stair.jpg","tags":["travel"],"likes":53,"date":"2019-06-20","price":60,"altText":"Un vélo repose sur une rambarde d\'escalier, au second plan un lampadaire typique parisien. La rue est pavée et en arrière plan se tient un grand bâtiment, dont les terrasses sont fleuries."},{"id":235234343,"photographerId":195,"title":"Adventure Door, India","image":"Travel_Adventure_Door.jpg","tags":["travel"],"likes":63,"date":"2019-06-26","price":60,"altText":"Photo prise depuis l\'intérieur d\'un temple, les murs sont recouverts de bas-reliefs. Au centre de l\'image un porte laissant apercevoir une ville et ses arbres."},{"id":6234234343,"photographerId":195,"title":"Contrast, St-Petersburg","image":"Architecture_Contrast.jpg","tags":["architecture"],"likes":52,"date":"2019-06-30","price":60,"altText":"Contre-plongée sur la Nouvelle Synagogue de Berlin. On peut y voir trois coupoles ornées."},{"id":6525666253,"photographerId":195,"title":"On a Hill, Tibet","image":"Architecture_On_a_hill.jpg","tags":["architecture"],"likes":63,"date":"2019-07-20","price":60,"altText":"Une colline recouverte de bâtiments blancs et au toit bordé de rouge. En arrière plan une grande chaîne de montagnes."},{"id":98252523433,"photographerId":195,"title":"Leaning Tower, Pisa","image":"Architecture_Dome.jpg","tags":["architecture"],"likes":88,"date":"2020-01-05","price":60,"altText":"Contre-plongée sur la tour de Pise penchant légèrement sur la droite. Une lumière orangée éclaire la partie droite de la tour."},{"id":9259398453,"photographerId":195,"title":"Circle Highways, Buenos Aires","video":"Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4","tags":["architecture"],"likes":57,"date":"2020-01-20","price":65,"altText":"Vue aérienne sur de grandes routes. Certaines sont sur-élevées et l\'ensemble des routes forment un cercle coupés par des lignes verticales. La caméra effectue ensuite un panoramique de bas en haut."},{"id":3523523534,"photographerId":195,"title":"Corner Building and Blue Sky","image":"Architecture_Corner_Room.jpg","tags":["architecture"],"likes":54,"date":"2020-05-05","price":60,"altText":"Légère contre-plongée sur l\'angle d\'un bâtiment rouge et blanc, le toit est bleu foncé presque noir et le ciel est d\'un bleu très clair."},{"id":952343423,"photographerId":930,"title":"Tricks in the Air","video":"Sport_Tricks_in_the_air.mp4","tags":["sport"],"likes":150,"date":"2018-02-30","price":70,"altText":"Une femme dans un gymnase se tient par une main à une corde et effectue des rotations avec le reste de son corps."},{"id":235234343,"photographerId":930,"title":"Climber","image":"Sport_Next_Hold.jpg","tags":["sport"],"likes":101,"date":"2018-03-05","price":65,"altText":"Plongée sur une femme escaladant un rocher qui déborde hors du cadre."},{"id":235343222,"photographerId":930,"title":"Surfer","image":"sport_water_tunnel.jpg","tags":["sport"],"likes":103,"date":"2018-03-10","price":70,"altText":"Un surfer vue de face avance vers l\'appareil et est entouré par une vague qui donne l\'impression d\'un tunnel d\'eau."},{"id":7775342343,"photographerId":930,"title":"Skier","image":"Sport_Sky_Cross.jpg","tags":["sport"],"likes":77,"date":"2018-04-16","price":50,"altText":"Contre-plongée sur un skieur en plein saut, en arrière-plan un ciel entièrement bleu. L\'angle de l\'image laisse imaginé qu\'il est très haut."},{"id":9253445784,"photographerId":930,"title":"Race End","image":"Sport_Race_End.jpg","tags":["sport"],"likes":88,"date":"2018-04-22","price":65,"altText":"Cinq femmes en pleine course dans un stade, quatre d\'entre elles ne touchent pas le sol et sont presque dans la même position. "},{"id":22299394,"photographerId":930,"title":"Jump!","image":"Sport_Jump.jpg","tags":["sport"],"likes":95,"date":"2018-04-27","price":70,"altText":"Un skateur torse nu est en plein milieu d\'un saut. derrière lui un bowl de skate-park et la plage."},{"id":3452342633,"photographerId":930,"title":"White Light","image":"Architecture_White_Light.jpg","tags":["architecture"],"likes":52,"date":"2018-05-03","price":75,"altText":"Contre plongée sur un dôme vu de l\'intérieur, Le bâtiment est entièrement blanc."},{"id":939234243,"photographerId":930,"title":"Water on Modern Building","image":"Architecture_Water_on_Modern.jpg","tags":["architecture"],"likes":55,"date":"2018-05-10","price":72,"altText":"Un bâtiment aux formes très organiques se tient derrière une étendue d\'eau. Il semble lui-même être une vague."},{"id":222959233,"photographerId":930,"title":"Horseshoe","image":"Architecture_Horseshoe.jpg","tags":["architecture"],"likes":85,"date":"2018-05-15","price":71,"altText":"Contre plongée en noir et blanc sur un bâtiment qui dessine un fer à cheval dans le ciel."},{"id":965933434,"photographerId":930,"title":"Cross Bar","image":"Architecture_Cross_Bar.jpg","tags":["architecture"],"likes":66,"date":"2018-05-20","price":58,"altText":"Contre-plongée entre deux bâtiments orangés qui se reflètent l\'un l\'autre. L\'espace laissé entre les deux dessine une croix."},{"id":777723343,"photographerId":930,"title":"Connected Curves","image":"Architecture_Connected_Curves.jpg","tags":["architecture"],"likes":79,"date":"2018-05-21","price":80,"altText":"un bâtiment aux formes courbes devant le ciel."}]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcscUJBQXFCLFFBQVEsa0JBQWtCLEtBQUssVUFBVSxvQkFBb0IsS0FBSyxHQUFHLE9BQU8sNHBCQUE0cEIsUUFBUSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLEtBQUssVUFBVSxPQUFPLE9B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K0UsQ0FBQyxFQUFwQyxFQUF3QztBQUFBLFFBQS9CQSxDQUErQjtBQVF2QyxFQUVEOzs7QUFDQXhDLHdEQUFBLENBQWNqQyxRQUFRLENBQUN4QixhQUFULENBQXVCLGVBQXZCLENBQWQsRUFBdUQsVUFBQ3VELEtBQUQ7QUFBQSxTQUNyRDBELDhDQUFBLENBQVcxRCxLQUFYLEVBQWtCeUYsTUFBbEIsQ0FEcUQ7QUFBQSxDQUF2RDtBQUlBeEgsUUFBUSxDQUFDeEIsYUFBVCxDQUNFLDhCQURGLEVBRUU0QixXQUZGLGFBRW1CcUYsa0RBQUEsQ0FBZStCLE1BQWYsQ0FGbkI7QUFJQSxJQUFNMkUsUUFBUSxHQUFHLElBQUk5TiwrQ0FBSixDQUFhMkIsUUFBUSxDQUFDeEIsYUFBVCxDQUF1QixXQUF2QixDQUFiLENBQWpCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvY29udGFjdERpYWxvZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL2N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL21lZGlhLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvcGhvdG9ncmFwaGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzP2ExODEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2ltYWdlc3xzeW5jfG5vbnJlY3Vyc2l2ZXwvLihtcDQpJCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvYXNzZXRzL2pzL3Bob3RvZ3JhcGhlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZEZvY3VzYWJsZUVsZW1lbnRzIH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbCB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxlbGVtZW50fSBlbGVtZW50IEwnw6lsw6ltZW50IGh0bWwgYW5pbcOpIHBhciBsYSBjbGFzc2VcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICB0aGlzLnByZXZCdG4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19wcmV2JylcclxuICAgIHRoaXMubmV4dEJ0biA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX25leHQnKVxyXG4gICAgdGhpcy5jbG9zZUJ0biA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX2Nsb3NlJylcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcclxuICAgIHRoaXMubGVnZW5kID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbGVnZW5kJylcclxuICAgIHRoaXMuaW5kZXggPSAwXHJcbiAgICB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzID0gZmluZEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMuZWxlbWVudClcclxuICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuRm9jdXNhYmxlRWxlbWVudHNbMF1cclxuICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jbG9zZUJ0blxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcylcclxuICAgIHRoaXMuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9KVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLml0ZW1zW2luZGV4XVxyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgaW1hZ2Ugw6AgYWZmaWNoZXJcclxuICAgKi9cclxuICBvcGVuKGlkID0gMCkge1xyXG4gICAgLy8gcmVzZXQgbGlzdGUgZGVzIMOpbMOpbWVudHMgcG91ciBxdSdpbHMgc29pZW50IGRhbnMgbCdvcmRyZSBtw6ptZSBzJ2lsIHkgYSBldSB1biB0cmlcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcclxuICAgIHRoaXMuaW5kZXggPSBpZFxyXG5cclxuICAgIC8vIG1hc3F1ZXIgdG91cyBsZXMgaXRlbXMgZHUgdGFibGVhdSBzYXVmIGNlbHVpIMOgIGFmZmljaGVyXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuaXRlbXNbaW5kZXhdXHJcbiAgICAgIGVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJydcclxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmluZGV4KSB7XHJcbiAgICAgICAgLy8gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM0QoMCwwLDApJ1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzRCgxMDAlLDAsMCknXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtYXNxdWVyIGxlIGhlYWRlciBldCBsZSBtYWluIGF1eCBsZWN0ZXVycyBkJ8OpY3JhblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub1Njcm9sbCcpXHJcblxyXG4gICAgLy8gcmVuZHJlIHZpc2libGUgbGUgY2Fyb3VzZWxcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcclxuICAgIHRoaXMuRm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApXHJcbiAgICB9KVxyXG4gICAgdGhpcy5sZWdlbmQudGV4dENvbnRlbnQgPSB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1sZWdlbmQnKVxyXG4gICAgdGhpcy5pdGVtc1t0aGlzLmluZGV4XS5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuZm9jdXMoKVxyXG5cclxuICAgIC8vIGNyw6llciBsZXMgbGlzdGVuZXJzXHJcbiAgICB0aGlzLm5leHRGcmFtZSA9IHRoaXMubmV4dEZyYW1lLmJpbmQodGhpcylcclxuICAgIHRoaXMucHJldkZyYW1lID0gdGhpcy5wcmV2RnJhbWUuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5rZXlFdmVudHMgPSB0aGlzLmtleUV2ZW50cy5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHRGcmFtZSlcclxuICAgIHRoaXMucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldkZyYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUV2ZW50cylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlcm1lciBsZSBjYXJvdXNlbFxyXG4gICAqIFJlbmRyZSBsZXMgw6lsw6ltZW50cyBob3JzLWNhcm91c2VsIHZpc2libGVcclxuICAgKiBjYWNoZXIgbGUgY2Fyb3VzZWwgZXQgc2VzIGVuZmFudHNcclxuICAgKiBzdXBwcmltZXIgbGVzIGxpc3RlbmVyXHJcbiAgICovXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKVxyXG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5RXZlbnRzKVxyXG4gICAgdGhpcy5uZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5uZXh0RnJhbWUpXHJcbiAgICB0aGlzLnByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXZGcmFtZSlcclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJylcclxuICAgIHRoaXMuRm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKVxyXG4gICAgfSlcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX19pdGVtJylcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5pdGVtc1tpbmRleF1cclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgZWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnbm9uZSdcclxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyJylbdGhpcy5pbmRleF0uZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2RvY3VtZW50I2V2ZW50OmtleWRvd258ZG9jdW1lbnQjZXZlbnQ6Y2xpY2t9IGVcclxuICAgKi9cclxuICBuZXh0RnJhbWUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvbGRFbGVtZW50ID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XVxyXG4gICAgdGhpcy5pbmRleCA9ICh0aGlzLmluZGV4ICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuaXRlbXNbdGhpcy5pbmRleF1cclxuICAgIG9sZEVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJy4zcyBlYXNlLW91dCAwcyBmb3J3YXJkcyAxIHZhbmlzaCdcclxuICAgIG9sZEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcclxuICAgIG9sZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19tZWRpYScpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSlcclxuICAgIG9sZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBvbGRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgfSxcclxuICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgIClcclxuICAgIG5ld0VsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJy4zcyBlYXNlLWluIDBzIGZvcndhcmRzIDEgZW1lcmdlJ1xyXG4gICAgbmV3RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgIG5ld0VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpXHJcbiAgICB0aGlzLmxlZ2VuZC50ZXh0Q29udGVudCA9IG5ld0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxlZ2VuZCcpXHJcbiAgICBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbWVkaWEnKS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMSlcclxuICAgIHRoaXMubGFzdENoaWxkID0gbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJylcclxuICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19tZWRpYScpLmZvY3VzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHBhc3NlciDDoCBsJ2ltYWdlIHByw6ljw6lkZW50ZVxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6a2V5ZG93bnxkb2N1bWVudCNldmVudDpjbGlja30gZVxyXG4gICAqL1xyXG4gIHByZXZGcmFtZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG9sZEVsZW1lbnQgPSB0aGlzLml0ZW1zW3RoaXMuaW5kZXhdXHJcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCA+IDAgPyB0aGlzLmluZGV4IC0gMSA6IHRoaXMuaXRlbXMubGVuZ3RoIC0gMVxyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuaXRlbXNbdGhpcy5pbmRleF1cclxuICAgIG9sZEVsZW1lbnQuc3R5bGUuYW5pbWF0aW9uID0gJy4zcyBlYXNlLWluIDBzIGZvcndhcmRzIDEgdmFuaXNoJ1xyXG4gICAgb2xkRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgb2xkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnYW5pbWF0aW9uZW5kJyxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIG9sZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKVxyXG4gICAgbmV3RWxlbWVudC5zdHlsZS5hbmltYXRpb24gPSAnLjNzIGVhc2UtaW4gMHMgZm9yd2FyZHMgMSBlbWVyZ2UnXHJcbiAgICBuZXdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xyXG4gICAgdGhpcy5sZWdlbmQudGV4dENvbnRlbnQgPSBuZXdFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sZWdlbmQnKVxyXG4gICAgbmV3RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcclxuICAgIG5ld0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX19tZWRpYScpLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAxKVxyXG4gICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fbWVkaWEnKVxyXG4gICAgbmV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfX21lZGlhJykuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2VzdGlvbnMgZGVzIMOpdsOobmVtZW50cyBjbGF2aWVycyA6IDwtICwgLT4gLCB0YWIsIG1haiArIHRhYlxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6a2V5ZG93bn0gZVxyXG4gICAqL1xyXG4gIGtleUV2ZW50cyhlKSB7XHJcbiAgICBzd2l0Y2ggKGUuY29kZSkge1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLm5leHRGcmFtZShlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5wcmV2RnJhbWUoZSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgIHRoaXMuY2xvc2UoKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkgfHwgZS5hbHRLZXkpIHtcclxuICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLmZvY3VzKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQuZm9jdXMoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVha1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRGb2N1c2FibGVFbGVtZW50cyB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdERpYWxvZyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nJylcclxuICAgIHRoaXMub3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdCcpXHJcbiAgICB0aGlzLmNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ0Zvcm1fX2Nsb3NlJylcclxuICAgIHRoaXMuc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ0Zvcm1fX3N1Ym1pdCcpXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXHJcbiAgICB0aGlzLkZvY3VzYWJsZUVsZW1lbnRzID0gZmluZEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMuZWxlbWVudClcclxuICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuRm9jdXNhYmxlRWxlbWVudHNbMF1cclxuICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jbG9zZUJ0blxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4pXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKk91dnJlIGxhIGZlbmV0cmUgZGlhbG9nIGV0IGxhbmNlIGxlcyBsaXN0ZW5lcnNcclxuICAgKi9cclxuICBvcGVuKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub1Njcm9sbCcpXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXHJcbiAgICB0aGlzLmZpcnN0Q2hpbGQuZm9jdXMoKVxyXG4gICAgdGhpcy5vcGVuQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuKVxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxyXG4gICAgdGhpcy5Gb2N1c2FibGVFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB0aGlzLmNsb3NlKClcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5rZXlib2FyZCA9IHRoaXMua2V5Ym9hcmQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWJvYXJkKVxyXG5cclxuICAgIHRoaXMub25TdWJtaXQgPSB0aGlzLm9uU3VibWl0LmJpbmQodGhpcylcclxuICAgIHRoaXMuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblN1Ym1pdClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlcm1lIGxhIGZlbmV0cmUgZGlhbG9nIGV0IHN1cHByaW1lIGxlcyBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGNsb3NlKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vU2Nyb2xsJylcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgdGhpcy5jbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXHJcbiAgICB0aGlzLmNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWJvYXJkKVxyXG4gICAgdGhpcy5zdWJtaXRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU3VibWl0KVxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxyXG4gICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcylcclxuICAgIHRoaXMub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3BlbilcclxuICAgIHRoaXMuRm9jdXNhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKVxyXG4gICAgfSlcclxuICAgIHRoaXMub3BlbkJ0bi5mb2N1cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXN0aW9ucyBkZXMgZXZlbmVtZW50cyBjbGF2aWVycyA6XHJcbiAgICogZWNoYXAsIHRhYiBldCBtYWogKyB0YWJcclxuICAgKiBAcGFyYW0ge2RvY3VtZW50I2V2ZW50OmtleWRvd259IGVcclxuICAgKi9cclxuICBrZXlib2FyZChlKSB7XHJcbiAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgICBpZiAoZS5jb2RlID09PSAnVGFiJykge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcclxuICAgICAgICAhZS5zaGlmdEtleSAmJlxyXG4gICAgICAgICFlLmFsdEtleVxyXG4gICAgICApIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQuZm9jdXMoKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICAoZS5zaGlmdEtleSB8fCBlLmFsdEtleSkgJiZcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcclxuICAgICAgKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQuZm9jdXMoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXN0aW9uIGR1IGZvcm11bGFpcmUgw6AgbGEgc291bWlzc2lvblxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6Y2xpY2t9IGVcclxuICAgKi9cclxuICBvblN1Ym1pdChlKSB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlhbG9nRm9ybV9faW5wdXQnKVxyXG4gICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dHMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcclxuICAgICAgfVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgdGhpcy5jbG9zZSgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBsZXhFbGVtZW50IH0gZnJvbSAnLi91dGlscydcclxuLypcclxuc291cmNlIDogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zdHJpa2luZy1hLWJhbGFuY2UtYmV0d2Vlbi1uYXRpdmUtYW5kLWN1c3RvbS1zZWxlY3QtZWxlbWVudHMvXHJcbiovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNoYW5nZUZ1bmN0aW9uIC0gZm9uY3Rpb24gYXBwZWzDqWUgbG9yc3F1ZSBsYSB2YWxldXIgZHUgU2VsZWN0IGVzdCBtb2RpZmnDqWVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvbkNoYW5nZUZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICB0aGlzLm9uQ2hhbmdlRnVuY3Rpb24gPSBvbkNoYW5nZUZ1bmN0aW9uXHJcbiAgICB0aGlzLmVsU2VsZWN0TmF0aXZlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpXHJcblxyXG4gICAgLy8gd3JhcCBzZWxlY3QgaW4gY29udGFpbmVyXHJcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsU2VsZWN0TmF0aXZlLnBhcmVudE5vZGVcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnc2VsZWN0V3JhcHBlcidcclxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQod3JhcHBlciwgdGhpcy5lbFNlbGVjdE5hdGl2ZSlcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbFNlbGVjdE5hdGl2ZSlcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVNlbGVjdENsb25lKClcclxuXHJcbiAgICB0aGlzLmN1c3RvbU9wdHNMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmVsU2VsZWN0Q3VzdG9tT3B0cy5jaGlsZHJlbilcclxuICAgIHRoaXMub3B0aW9uc0NvdW50ID0gdGhpcy5jdXN0b21PcHRzTGlzdC5sZW5ndGhcclxuICAgIHRoaXMuZGVmYXVsdExhYmVsID0gdGhpcy5lbFNlbGVjdEN1c3RvbUJveC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG4gICAgdGhpcy5vcHRpb25DaGVja2VkID0gJydcclxuICAgIHRoaXMub3B0aW9uSG92ZXJlZEluZGV4ID0gLTFcclxuICAgIC8vIFRvZ2dsZSBjdXN0b20gc2VsZWN0IHZpc2liaWxpdHkgd2hlbiBjbGlja2luZyB0aGUgYm94XHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgY29uc3QgaXNDbG9zZWQgPSAhdGhpcy5lbFNlbGVjdEN1c3RvbS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzQWN0aXZlJylcclxuXHJcbiAgICAgIGlmIChpc0Nsb3NlZCkge1xyXG4gICAgICAgIHRoaXMub3BlblNlbGVjdEN1c3RvbSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZVNlbGVjdEN1c3RvbSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gVXBkYXRlIHNlbGVjdEN1c3RvbSB2YWx1ZSB3aGVuIHNlbGVjdE5hdGl2ZSBpcyBjaGFuZ2VkLlxyXG4gICAgdGhpcy5lbFNlbGVjdE5hdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIGNvbnN0IGVsUmVzcGVjdGl2ZUN1c3RvbU9wdGlvbiA9IHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICAgYFtkYXRhLXZhbHVlPVwiJHt2YWx1ZX1cIl1gXHJcbiAgICAgIClbMF1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0Q2hlY2tlZChcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBlbFJlc3BlY3RpdmVDdXN0b21PcHRpb24udGV4dENvbnRlbnRcclxuICAgICAgKVxyXG4gICAgICB0aGlzLm9uQ2hhbmdlRnVuY3Rpb24odmFsdWUpXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIFVwZGF0ZSBzZWxlY3RDdXN0b20gdmFsdWUgd2hlbiBhbiBvcHRpb24gaXMgY2xpY2tlZCBvciBob3ZlcmVkXHJcbiAgICB0aGlzLmN1c3RvbU9wdHNMaXN0LmZvckVhY2goKGVsT3B0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICBlbE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG5cclxuICAgICAgICAvLyBTeW5jIG5hdGl2ZSBzZWxlY3QgdG8gaGF2ZSB0aGUgc2FtZSB2YWx1ZVxyXG4gICAgICAgIHRoaXMuZWxTZWxlY3ROYXRpdmUudmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0Q2hlY2tlZCh2YWx1ZSwgZS50YXJnZXQudGV4dENvbnRlbnQpXHJcbiAgICAgICAgdGhpcy5jbG9zZVNlbGVjdEN1c3RvbSgpXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bmN0aW9uKHZhbHVlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZWxPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RIb3ZlcmVkKGluZGV4KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqQ3LDqWF0aW9uIGR1IHBzZXVkby1zw6lsZWN0XHJcbiAgICovXHJcbiAgY3JlYXRlU2VsZWN0Q2xvbmUoKSB7XHJcbiAgICBjb25zdCBvYmogPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncm9vdCcsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdzZWxlY3RDdXN0b20ganMtc2VsZWN0Q3VzdG9tJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBhcmlhSGlkZGVuOiAndHJ1ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJlbnQ6ICdtYWluJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAnc2VsZWN0Q3VzdG9tLXRyaWdnZXInLFxyXG4gICAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgICB0aGlzLmVsU2VsZWN0TmF0aXZlLm9wdGlvbnNbdGhpcy5lbFNlbGVjdE5hdGl2ZS5zZWxlY3RlZEluZGV4XVxyXG4gICAgICAgICAgICAudGV4dENvbnRlbnQsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnb3B0aW9ucycsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdzZWxlY3RDdXN0b20tb3B0aW9ucycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLmNoaWxkcmVuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0ge31cclxuICAgICAgb3B0aW9uLnR5cGUgPSAnZGl2J1xyXG4gICAgICBvcHRpb24uY2xhc3MgPSAnc2VsZWN0Q3VzdG9tLW9wdGlvbidcclxuICAgICAgb3B0aW9uLnBhcmVudCA9ICdvcHRpb25zJ1xyXG4gICAgICBvcHRpb24uYXR0cmlidXRlcyA9IHsgZGF0YVZhbHVlOiBvcHRpb25zW2ldLnZhbHVlIH1cclxuICAgICAgb3B0aW9uLmNvbnRlbnQgPSBvcHRpb25zW2ldLmlubmVySFRNTFxyXG4gICAgICBvYmoucHVzaChvcHRpb24pXHJcbiAgICB9XHJcbiAgICB0aGlzLmVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RXcmFwcGVyJylcclxuICAgICAgLmFwcGVuZENoaWxkKGNyZWF0ZUNvbXBsZXhFbGVtZW50KG9iaikpXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3RDdXN0b20nKVxyXG4gICAgdGhpcy5lbFNlbGVjdEN1c3RvbUJveCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Q3VzdG9tLXRyaWdnZXInKVxyXG4gICAgdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy5zZWxlY3RDdXN0b20tb3B0aW9ucydcclxuICAgIClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE91dnJpbCBsZSBwc2V1ZG8tc8OpbGVjdFxyXG4gICAqL1xyXG4gIG9wZW5TZWxlY3RDdXN0b20oKSB7XHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tLmNsYXNzTGlzdC5hZGQoJ2lzQWN0aXZlJylcclxuICAgIC8vIFJlbW92ZSBhcmlhLWhpZGRlbiBpbiBjYXNlIHRoaXMgd2FzIG9wZW5lZCBieSBhIHVzZXJcclxuICAgIC8vIHdobyB1c2VzIEFUIChlLmcuIFNjcmVlbiBSZWFkZXIpIGFuZCBhIG1vdXNlIGF0IHRoZSBzYW1lIHRpbWUuXHJcbiAgICB0aGlzLmVsU2VsZWN0Q3VzdG9tLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSlcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25DaGVja2VkKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkNoZWNrZWRJbmRleCA9IHRoaXMuY3VzdG9tT3B0c0xpc3QuZmluZEluZGV4KFxyXG4gICAgICAgIChlbCkgPT4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykgPT09IHRoaXMub3B0aW9uQ2hlY2tlZFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0SG92ZXJlZChvcHRpb25DaGVja2VkSW5kZXgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHJlbGF0ZWQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLndhdGNoQ2xpY2tPdXRzaWRlID0gdGhpcy53YXRjaENsaWNrT3V0c2lkZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24gPSB0aGlzLnN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24uYmluZCh0aGlzKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLndhdGNoQ2xpY2tPdXRzaWRlKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc3VwcG9ydEtleWJvYXJkTmF2aWdhdGlvbilcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlcm1lciBsZSBwc2V1ZG8tc8OpbGVjdFxyXG4gICAqL1xyXG4gIGNsb3NlU2VsZWN0Q3VzdG9tKCkge1xyXG4gICAgdGhpcy5lbFNlbGVjdEN1c3RvbS5jbGFzc0xpc3QucmVtb3ZlKCdpc0FjdGl2ZScpXHJcblxyXG4gICAgdGhpcy5lbFNlbGVjdEN1c3RvbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdEhvdmVyZWQoLTEpXHJcblxyXG4gICAgLy8gUmVtb3ZlIHJlbGF0ZWQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMud2F0Y2hDbGlja091dHNpZGUpXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zdXBwb3J0S2V5Ym9hcmROYXZpZ2F0aW9uKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpHZXN0aW9uIGRlcyBob3ZlciBkYW5zIGxlIHBzZXVkby1zw6lsZWN0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld0luZGV4IC0gaW5kZXggZGUgbCfDqW3DqW1lbnQgc3Vydm9sw6kgcGFyIGxhIHNvdXJpc1xyXG4gICAqL1xyXG4gIHVwZGF0ZUN1c3RvbVNlbGVjdEhvdmVyZWQobmV3SW5kZXgpIHtcclxuICAgIGNvbnN0IHByZXZPcHRpb24gPSB0aGlzLmVsU2VsZWN0Q3VzdG9tT3B0cy5jaGlsZHJlblt0aGlzLm9wdGlvbkhvdmVyZWRJbmRleF1cclxuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLmNoaWxkcmVuW25ld0luZGV4XVxyXG5cclxuICAgIGlmIChwcmV2T3B0aW9uKSB7XHJcbiAgICAgIHByZXZPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXNIb3ZlcicpXHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdpc0hvdmVyJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9wdGlvbkhvdmVyZWRJbmRleCA9IG5ld0luZGV4XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKkdlc3Rpb24gZGUgbGEgc8OpbGVjdGlvbiBkJ3VuIG5vdXZlbCDDqWzDqW1lbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB2YWxldXIgZGUgbMOpbMOpbWVudCBzw6lsZWN0aW9vbm7DqWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIG5vbSBkZSBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpXHJcbiAgICovXHJcbiAgdXBkYXRlQ3VzdG9tU2VsZWN0Q2hlY2tlZCh2YWx1ZSwgdGV4dCkge1xyXG4gICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5vcHRpb25DaGVja2VkXHJcblxyXG4gICAgY29uc3QgZWxQcmV2T3B0aW9uID0gdGhpcy5lbFNlbGVjdEN1c3RvbU9wdHMucXVlcnlTZWxlY3RvcihcclxuICAgICAgYFtkYXRhLXZhbHVlPVwiJHtwcmV2VmFsdWV9XCJgXHJcbiAgICApXHJcbiAgICBjb25zdCBlbE9wdGlvbiA9IHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGBbZGF0YS12YWx1ZT1cIiR7dmFsdWV9XCJgXHJcbiAgICApXHJcblxyXG4gICAgaWYgKGVsUHJldk9wdGlvbikge1xyXG4gICAgICBlbFByZXZPcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbE9wdGlvbikge1xyXG4gICAgICBlbE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdpc0FjdGl2ZScpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbFNlbGVjdEN1c3RvbUJveC50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIHRoaXMub3B0aW9uQ2hlY2tlZCA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb3JzcXVlIGwndXRpbGlzYXRldXIgY2xpcXVlIGVuIGRlaG9ycyBkdSBzw6lsZWN0XHJcbiAgICogIEBwYXJhbSAge2RvY3VtZW50I2V2ZW50OmNsaWNrfSBlXHJcbiAgICovXHJcbiAgd2F0Y2hDbGlja091dHNpZGUoZSkge1xyXG4gICAgY29uc3QgZGlkQ2xpY2tlZE91dHNpZGUgPSAhdGhpcy5lbFNlbGVjdEN1c3RvbS5jb250YWlucyhlLnRhcmdldClcclxuICAgIGlmIChkaWRDbGlja2VkT3V0c2lkZSkge1xyXG4gICAgICB0aGlzLmNsb3NlU2VsZWN0Q3VzdG9tKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlc3Rpb25zIGRlcyDDqXbDqG5lbWVudHMgY2xhdmllciA6IGZsZWNoZSBiYXMvaGF1dCwgZXNwYWNlL2VudHLDqWUsIMOpY2hhcFxyXG4gICAqIEBwYXJhbSB7ZG9jdW1lbnQjZXZlbnQ6a2V5ZG93bn0gZVxyXG4gICAqL1xyXG4gIHN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24oZSkge1xyXG4gICAgLy8gcHJlc3MgZG93biAtPiBnbyBuZXh0XHJcbiAgICBpZiAoZS5jb2RlID09PSA0MCAmJiB0aGlzLm9wdGlvbkhvdmVyZWRJbmRleCA8IHRoaXMub3B0aW9uc0NvdW50IC0gMSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCkgLy8gcHJldmVudCBwYWdlIHNjcm9sbGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdEhvdmVyZWQodGhpcy5vcHRpb25Ib3ZlcmVkSW5kZXggKyAxKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZXNzIHVwIC0+IGdvIHByZXZpb3VzXHJcbiAgICBpZiAoZS5jb2RlID09PSAzOCAmJiB0aGlzLm9wdGlvbkhvdmVyZWRJbmRleCA+IDApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpIC8vIHByZXZlbnQgcGFnZSBzY3JvbGxpbmdcclxuICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3RIb3ZlcmVkKHRoaXMub3B0aW9uSG92ZXJlZEluZGV4IC0gMSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcmVzcyBFbnRlciBvciBzcGFjZSAtPiBzZWxlY3QgdGhlIG9wdGlvblxyXG4gICAgaWYgKGUuY29kZSA9PT0gMTMgfHwgZS5jb2RlID09PSAzMikge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZWxTZWxlY3RDdXN0b21PcHRzLmNoaWxkcmVuW3RoaXMub3B0aW9uSG92ZXJlZEluZGV4XVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbiAmJiBvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcclxuXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZWxTZWxlY3ROYXRpdmUudmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0Q2hlY2tlZCh2YWx1ZSwgb3B0aW9uLnRleHRDb250ZW50KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2xvc2VTZWxlY3RDdXN0b20oKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHByZXNzIEVTQyAtPiBjbG9zZSBzZWxlY3RDdXN0b21cclxuICAgIGlmIChlLmNvZGUgPT09IDI3KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VTZWxlY3RDdXN0b20oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2h0bWxFbGVtZW50fSBlbGVtZW50XHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25DaGFuZ2VGdW5jdGlvbiAtIGZvbmN0aW9uIGFwcGVsw6llIGxvcnNxdWUgbGEgdmFsZXVyIGR1IFNlbGVjdCBlc3QgbW9kaWZpw6llXHJcbiAgICogQHJldHVybnMge1NlbGVjdH1cclxuICAgKi9cclxuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnQsIG9uQ2hhbmdlRnVuY3Rpb24pIHtcclxuICAgIHJldHVybiBuZXcgU2VsZWN0KGVsZW1lbnQsIG9uQ2hhbmdlRnVuY3Rpb24pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBsZXhFbGVtZW50LCBjcmVhdGVFbGVtZW50RnJvbU9iamVjdCB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgTWVkaWEge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gb2JqLmRhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmouaW1hZ2UgLSB1cmwgZGUgbCdpbWFnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb2JqLnZpZGVvIC0gdXJsIGRlIGxhIHZpZGVvXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5saWtlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucGhvdG9ncmFwaGVySWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnByaWNlXHJcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gb2JqLnRhZ3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLnRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5hbHRcclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSByZWZyZXNoVG90YWxMaWtlc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9iaiwgcmVmcmVzaFRvdGFsTGlrZXMpIHtcclxuICAgIHRoaXMucmVmcmVzaFRvdGFsTGlrZXMgPSByZWZyZXNoVG90YWxMaWtlc1xyXG4gICAgdGhpcy50aXRsZSA9IG9iai50aXRsZVxyXG4gICAgdGhpcy5hbHQgPSBvYmoudGl0bGVcclxuICAgIHRoaXMuc3JjID0gb2JqLmltYWdlIHx8IG9iai52aWRlb1xyXG4gICAgdGhpcy5saWtlcyA9IG9iai5saWtlc1xyXG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUob2JqLmRhdGUpXHJcbiAgICBpZiAob2JqLmltYWdlKSB0aGlzLm1lZGlhID0gbmV3IFBob3RvKG9iailcclxuICAgIGVsc2UgaWYgKG9iai52aWRlbykgdGhpcy5tZWRpYSA9IG5ldyBWaWRlbyhvYmopXHJcbiAgICB0aGlzLmNhcmRFbGVtZW50ID0gdGhpcy5jcmVhdGVDYXJkKClcclxuICAgIHRoaXMuY2Fyb3VzZWxJdGVtRWxlbWVudCA9IHRoaXMuY3JlYXRlQ2Fyb3VzZWxJdGVtKClcclxuICAgIHRoaXMuYXBwZW5kRWxlbWVudHMoKVxyXG5cclxuICAgIHRoaXMubGlrZXNFbCA9IHRoaXMuY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lZGlhQ2FyZF9fbGlrZXMnKVxyXG4gICAgdGhpcy5vbkxpa2UgPSB0aGlzLm9uTGlrZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmxpa2VzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlrZSlcclxuICAgIHRoaXMub25MaWtlS2V5ID0gdGhpcy5vbkxpa2VLZXkuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5saWtlc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uTGlrZUtleSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvcnNxdWUgbGUgYm91dG9uIGxpa2UgZXN0IGNsaXF1w6lcclxuICAgKi9cclxuICBvbkxpa2VLZXkoZSkge1xyXG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykgdGhpcy5vbkxpa2UoZSlcclxuICB9XHJcblxyXG4gIG9uTGlrZShlKSB7XHJcbiAgICB0aGlzLmxpa2VzKytcclxuICAgIHRoaXMubGlrZXNFbC50ZXh0Q29udGVudCA9IHRoaXMubGlrZXNFbC50ZXh0Q29udGVudC5yZXBsYWNlKFxyXG4gICAgICB0aGlzLmxpa2VzIC0gMSxcclxuICAgICAgdGhpcy5saWtlc1xyXG4gICAgKVxyXG4gICAgdGhpcy5yZWZyZXNoVG90YWxMaWtlcyhlKVxyXG4gICAgdGhpcy5saWtlc0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpa2UpXHJcbiAgICB0aGlzLmxpa2VzRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25MaWtlS2V5KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWpvdXQgZHUgbcOpZGlhIMOgIGxhIGxpc3RlIGRlcyBtZWRpYXMgZXQgYXUgY2Fyb3VzZWxcclxuICAgKi9cclxuICBhcHBlbmRFbGVtZW50cygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpYXNDb250YWluZXInKS5hcHBlbmQodGhpcy5jYXJkRWxlbWVudClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9fZnJhbWUnKS5hcHBlbmQodGhpcy5jYXJvdXNlbEl0ZW1FbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldExpa2VzKG1lZGlhcykge1xyXG4gICAgbGV0IGxpa2VzID0gMFxyXG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XHJcbiAgICAgIGxpa2VzICs9IG1lZGlhLmxpa2VzXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGxpa2VzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmllIGxlcyDDqWzDqW1lbnRzIG3DqWRpYXNcclxuICAgKiBAcGFyYW0geygncG9wdWxhcml0eSd8J2RhdGUnfCd0aXRsZScpfSB0eXBlT2ZTb3J0XHJcbiAgICogQHBhcmFtIHtBcnJheS48TWVkaWE+fSBtZWRpYXNcclxuICAgKi9cclxuICBzdGF0aWMgc29ydCh0eXBlT2ZTb3J0LCBtZWRpYXMpIHtcclxuICAgIHN3aXRjaCAodHlwZU9mU29ydCkge1xyXG4gICAgICBjYXNlICdwb3B1bGFyaXR5JzpcclxuICAgICAgICBtZWRpYXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgaWYgKGEubGlrZXMgPCBiLmxpa2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYS5saWtlcyA+IGIubGlrZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgbWVkaWFzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAxXHJcbiAgICAgICAgICBpZiAoYS5kYXRlID4gYi5kYXRlKSByZXR1cm4gLTFcclxuICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICd0aXRsZSc6XHJcbiAgICAgICAgbWVkaWFzLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgIGlmIChhLnRpdGxlIDwgYi50aXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTFcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhLnRpdGxlID4gYi50aXRsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICBtZWRpYXMuZm9yRWFjaCgobWVkaWEpID0+IHtcclxuICAgICAgbWVkaWEuYXBwZW5kRWxlbWVudHMoKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge0FycmF5LjxPYmplY3Q+fSBNZWRpYUNhcmRPYmpcclxuICAgKi9cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgY29uc3QgbWVkaWFDYXJkT2JqID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgIHR5cGU6ICdhcnRpY2xlJyxcclxuICAgICAgICBjbGFzczogJ21lZGlhQ2FyZCcsXHJcbiAgICAgICAgcGFyZW50OiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW1nQ29udGFpbmVyJyxcclxuICAgICAgICBjbGFzczogJ21lZGlhQ2FyZF9faW1nQ29udGFpbmVyJyxcclxuICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgaHJlZjogJyMnLFxyXG4gICAgICAgICAgdGl0bGU6IHRoaXMuYWx0ICsgJywgYWZmaWNoZXIgZW4gZ3JhbmQuJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2luZm9zJyxcclxuICAgICAgICBjbGFzczogJ21lZGlhQ2FyZF9faW5mb3MnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RpdGxlJyxcclxuICAgICAgICBjbGFzczogJ21lZGlhQ2FyZF9fdGl0bGUnLFxyXG4gICAgICAgIHR5cGU6ICdoMycsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbGlrZXMnLFxyXG4gICAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX19saWtlcycsXHJcbiAgICAgICAgdHlwZTogJ2VtJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5saWtlcyArICcgJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICB0YWJpbmRleDogMCxcclxuICAgICAgICAgIGFyaWFMYWJlbDogJ2xpa2VzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hlYXJ0JyxcclxuICAgICAgICBjbGFzczogJ21lZGlhQ2FyZF9faGVhcnQnLFxyXG4gICAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgICBwYXJlbnQ6ICdsaWtlcycsXHJcbiAgICAgICAgY29udGVudDogJ+KZpScsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICBtZWRpYUNhcmRPYmoucHVzaCh0aGlzLm1lZGlhLm1lZGlhQ2FyZE9iailcclxuICAgIHJldHVybiBjcmVhdGVDb21wbGV4RWxlbWVudChtZWRpYUNhcmRPYmopXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtBcnJheS48T2JqZWN0Pn0gY2Fyb3VzZWxJdGVtT2JqXHJcbiAgICovXHJcbiAgY3JlYXRlQ2Fyb3VzZWxJdGVtKCkge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxJdGVtT2JqID0ge1xyXG4gICAgICB0eXBlOiAnbGknLFxyXG4gICAgICBjbGFzczogJ2Nhcm91c2VsX19pdGVtJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIGRhdGFMZWdlbmQ6IHRoaXMudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICBjb25zdCBjYXJvdXNlbEl0ZW0gPSBjcmVhdGVFbGVtZW50RnJvbU9iamVjdChjYXJvdXNlbEl0ZW1PYmopXHJcbiAgICBjYXJvdXNlbEl0ZW0uYXBwZW5kKGNyZWF0ZUVsZW1lbnRGcm9tT2JqZWN0KHRoaXMubWVkaWEuY2Fyb3VzZWxJdGVtT2JqKSlcclxuXHJcbiAgICBpZiAodGhpcy5tZWRpYS5hbHRUZXh0KSB7XHJcbiAgICAgIGNvbnN0IGFsdCA9IHRoaXMubWVkaWEuYWx0VGV4dFxyXG5cclxuICAgICAgY2Fyb3VzZWxJdGVtLmFwcGVuZChjcmVhdGVFbGVtZW50RnJvbU9iamVjdChhbHQpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNhcm91c2VsSXRlbVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUGhvdG8ge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gICAqIEBwYXJhbSB7RGF0ZX0gb2JqLmRhdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmouaW1hZ2UgLSB1cmwgZGUgbCdpbWFnZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb2JqLnZpZGVvIC0gdXJsIGRlIGxhIHZpZGVvXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5saWtlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucGhvdG9ncmFwaGVySWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnByaWNlXHJcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gb2JqLnRhZ3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLnRpdGxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5hbHRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvYmopIHtcclxuICAgIHRoaXMubWVkaWFDYXJkT2JqID0ge1xyXG4gICAgICB0eXBlOiAnaW1nJyxcclxuICAgICAgY2xhc3M6ICdtZWRpYUNhcmRfX21lZGlhJyxcclxuICAgICAgcGFyZW50OiAnaW1nQ29udGFpbmVyJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHNyYzogYC4vYXNzZXRzL2ltYWdlcy8ke29iai5pbWFnZX1gLFxyXG4gICAgICAgIGFsdDogb2JqLmFsdFRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgICB0aGlzLmNhcm91c2VsSXRlbU9iaiA9IHtcclxuICAgICAgdHlwZTogJ2ltZycsXHJcbiAgICAgIGNsYXNzOiAnY2Fyb3VzZWxfX21lZGlhJyxcclxuICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgIHNyYzogYC4vYXNzZXRzL2ltYWdlcy8ke29iai5pbWFnZX1gLFxyXG4gICAgICAgIGFsdDogb2JqLmFsdFRleHQsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBWaWRlbyB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAgICogQHBhcmFtIHtEYXRlfSBvYmouZGF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaWRcclxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9iai5pbWFnZSAtIHVybCBkZSBsJ2ltYWdlXHJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvYmoudmlkZW8gLSB1cmwgZGUgbGEgdmlkZW9cclxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmxpa2VzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5waG90b2dyYXBoZXJJZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoucHJpY2VcclxuICAgKiBAcGFyYW0ge0FycmF5LjxzdHJpbmc+fSBvYmoudGFnc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoudGl0bGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLmFsdFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9iaikge1xyXG4gICAgdGhpcy5tZWRpYUNhcmRPYmogPSB7XHJcbiAgICAgIHR5cGU6ICd2aWRlbycsXHJcbiAgICAgIGNsYXNzOiAnbWVkaWFDYXJkX19tZWRpYScsXHJcbiAgICAgIHBhcmVudDogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBzcmM6IGAuL2Fzc2V0cy9pbWFnZXMvJHtvYmoudmlkZW99YCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIHRoaXMuY2Fyb3VzZWxJdGVtT2JqID0ge1xyXG4gICAgICB0eXBlOiAndmlkZW8nLFxyXG4gICAgICBjbGFzczogJ2Nhcm91c2VsX19tZWRpYScsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBzcmM6IGAuL2Fzc2V0cy9pbWFnZXMvJHtvYmoudmlkZW99YCxcclxuICAgICAgICBjb250cm9sczogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFsdFRleHQgPSB7XHJcbiAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgY2xhc3M6ICdzci1vbmx5JyxcclxuICAgICAgY29udGVudDogb2JqLmFsdFRleHQsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbXBsZXhFbGVtZW50IH0gZnJvbSAnLi91dGlscydcclxuXHJcbmV4cG9ydCBjbGFzcyBQaG90b2dyYXBoZXIge1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGF0YS5pZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLnBvcnRyYWl0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEubmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmNvdXRyeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmNpdHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS50YWdsaW5lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEucHJpY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS50YWdzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWRcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBgLi9hc3NldHMvaW1hZ2VzLyR7ZGF0YS5wb3J0cmFpdH1gXHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWVcclxuICAgIHRoaXMubG9jYXRpb24gPSBkYXRhLmNpdHkgKyAnICcgKyBkYXRhLmNvdW50cnlcclxuICAgIHRoaXMuc2xvZ2FuID0gZGF0YS50YWdsaW5lXHJcbiAgICB0aGlzLnByaWNlID0gZGF0YS5wcmljZVxyXG4gICAgdGhpcy50YWdzID0gZGF0YS50YWdzXHJcbiAgfVxyXG5cclxuICBpZGVudGl0eVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBlbCA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdyb290JyxcclxuICAgICAgICB0eXBlOiAnc2VjdGlvbicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eScsXHJcbiAgICAgICAgcGFyZW50OiAnbWFpbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW5mb3MnLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2luZm9zJyxcclxuICAgICAgICBwYXJlbnQ6ICdyb290JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0aXRsZScsXHJcbiAgICAgICAgdHlwZTogJ2gyJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190aXRsZScsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0ZXh0JyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190ZXh0JyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbicsXHJcbiAgICAgICAgcGFyZW50OiAndGV4dCcsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5sb2NhdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzbG9nYW4nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19zbG9nYW4nLFxyXG4gICAgICAgIHBhcmVudDogJ3RleHQnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xvZ2FuLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RhZ3NMaXN0JyxcclxuICAgICAgICB0eXBlOiAnZGl2JyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X190YWdzTGlzdCcsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2NvbnRhY3QnLFxyXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3QnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdDb250YWN0ZXotbW9pJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWdDb250YWluZXInLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaW1nJyxcclxuICAgICAgICB0eXBlOiAnaW1nJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19pbWcnLFxyXG4gICAgICAgIHBhcmVudDogJ2ltZ0NvbnRhaW5lcicsXHJcbiAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgc3JjOiB0aGlzLmltYWdlLnNyYyxcclxuICAgICAgICAgIGFsdDogYHBvcnRyYWl0IGRlICR7dGhpcy5uYW1lfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZScsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZScsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzJyxcclxuICAgICAgICB0eXBlOiAnc3BhbicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXMnLFxyXG4gICAgICAgIHBhcmVudDogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19saWtlc0FuZFByaWNlJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fcHJpY2UnLFxyXG4gICAgICAgIHR5cGU6ICdzcGFuJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlcklkZW50aXR5X19wcmljZScsXHJcbiAgICAgICAgcGFyZW50OiAncGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2UnLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAke3RoaXMucHJpY2V94oKsL2pvdXJgLFxyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gICAgdGhpcy50YWdzLmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICBjb25zdCB0YWdFbCA9IHtcclxuICAgICAgICBuYW1lOiAndGFnJyxcclxuICAgICAgICB0eXBlOiAnYScsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJJZGVudGl0eV9fbGllbicsXHJcbiAgICAgICAgcGFyZW50OiAndGFnc0xpc3QnLFxyXG4gICAgICAgIGlubmVyaHRtbDogYDxzcGFuIGNsYXNzPVwic3Itb25seVwiPiR7dGFnfSA8L3NwYW4+IDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiMke3RhZ308L3NwYW4+YCxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBocmVmOiAnaW5kZXguaHRtbD9maWx0ZXI9JyArIHRhZyxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnRWwpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGNyZWF0ZUNvbXBsZXhFbGVtZW50KGVsKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IGNhcnRlIHBob3RvZ3JhcGhlXHJcbiAgICovXHJcbiAgY2FyZCgpIHtcclxuICAgIGNvbnN0IGVsID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Jvb3QnLFxyXG4gICAgICAgIHR5cGU6ICdhcnRpY2xlJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmQnLFxyXG4gICAgICAgIHBhcmVudDogJ21haW4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2xpbmsnLFxyXG4gICAgICAgIHR5cGU6ICdhJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX2xpbmsnLFxyXG4gICAgICAgIHBhcmVudDogJ3Jvb3QnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGhyZWY6IGBwaG90b2dyYXBoZXIuaHRtbD9pZD0ke3RoaXMuaWR9YCxcclxuICAgICAgICAgIHRpdGxlOiBgZMOpY291dnJleiBsZSB0cmF2YWlsIGRlICR7dGhpcy5uYW1lfWAsXHJcbiAgICAgICAgICBhcmlhTGFiZWw6dGhpcy5uYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWdDb250YWluZXInLFxyXG4gICAgICAgIHR5cGU6ICdkaXYnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9faW1nQ29udGFpbmVyJyxcclxuICAgICAgICBwYXJlbnQ6ICdsaW5rJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbWcnLFxyXG4gICAgICAgIHR5cGU6ICdpbWcnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9faW1nJyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBzcmM6IHRoaXMuaW1hZ2Uuc3JjLFxyXG4gICAgICAgICAgYWx0OicnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJlbnQ6ICdpbWdDb250YWluZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RpdHJlJyxcclxuICAgICAgICB0eXBlOiAnaDInLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUnLFxyXG4gICAgICAgIHBhcmVudDogJ2xpbmsnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubmFtZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpbmZvcycsXHJcbiAgICAgICAgdHlwZTogJ2RpdicsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX19pbmZvcycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbG9jYXRpb24nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX2xvY2F0aW9uJyxcclxuICAgICAgICBwYXJlbnQ6ICdpbmZvcycsXHJcbiAgICAgICAgY29udGVudDogdGhpcy5sb2NhdGlvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzbG9nYW4nLFxyXG4gICAgICAgIHR5cGU6ICdwJyxcclxuICAgICAgICBjbGFzczogJ3Bob3RvZ3JhcGhlckNhcmRfX3Nsb2dhbicsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMuc2xvZ2FuLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RhcmlmJyxcclxuICAgICAgICB0eXBlOiAncCcsXHJcbiAgICAgICAgY2xhc3M6ICdwaG90b2dyYXBoZXJDYXJkX190YXJpZicsXHJcbiAgICAgICAgcGFyZW50OiAnaW5mb3MnLFxyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucHJpY2UgKyAn4oKsJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0YWdzJyxcclxuICAgICAgICB0eXBlOiAndWwnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGFncycsXHJcbiAgICAgICAgcGFyZW50OiAncm9vdCcsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhZ0xpID0ge1xyXG4gICAgICAgIG5hbWU6IHRhZyxcclxuICAgICAgICB0eXBlOiAnbGknLFxyXG4gICAgICAgIHBhcmVudDogJ3RhZ3MnLFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnTGkpXHJcblxyXG4gICAgICBjb25zdCB0YWdBID0ge1xyXG4gICAgICAgIG5hbWU6IHRhZysnbGluaycsXHJcbiAgICAgICAgdHlwZTogJ2EnLFxyXG4gICAgICAgIGNsYXNzOiAncGhvdG9ncmFwaGVyQ2FyZF9fdGFnJyxcclxuICAgICAgICBwYXJlbnQ6IHRhZyxcclxuICAgICAgICBpbm5lcmh0bWw6IGA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4ke3RhZ30gPC9zcGFuPiAjPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+ICR7dGFnfTwvc3Bhbj5gLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIGhyZWY6ICdpbmRleC5odG1sP2ZpbHRlcj0nICsgdGFnLFxyXG4gICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIGVsLnB1c2godGFnQSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gY3JlYXRlQ29tcGxleEVsZW1lbnQoZWwpXHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtLSBub20gZGUgbGEgdmFsZXVyIMOgIHJlY2hlcmNoZXIgZGFucyBsJ3VybFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFZhbHVlKG5hbWUpIHtcclxuICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxyXG4gIHJldHVybiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChuYW1lKVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmxWYWx1ZXMobmFtZSkge1xyXG4gIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcbiAgY29uc3QgcmV0b3VyID0gcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQobmFtZSlcclxuICAgID8gcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQobmFtZSkuc3BsaXQoJywnKVxyXG4gICAgOiBudWxsXHJcbiAgcmV0dXJuIHJldG91clxyXG59XHJcblxyXG4vKipcclxuICogSW1wb3J0ZSB1bmUgc8OpcmllIGRlIGZpY2hpZXJzXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHJcclxuICogQHJldHVybnMge0FycmF5LjxzdHJpbmc+fSBpbWFnZXMgLSBMaWVucyB2ZXJzIGxlcyBmaWNoaWVyc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0ge31cclxuICByLmtleXMoKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaW1hZ2VzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKVxyXG4gIH0pXHJcbiAgcmV0dXJuIGltYWdlc1xyXG59XHJcbi8qKlxyXG4gKiBDcsOpZSBkZXMgw6lsw6ltZW50cyBIdG1sIHF1aSBwZXV2ZW50IMOqdHJlIGxpw6lzIGVudHJlIGV1eCDDoCBwYXJ0aXIgZCd1biB0YWJsZWF1IGQnb2JqZXRcclxuICogQHBhcmFtIHtPYmplY3RbXX0gYXJyXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJbXS5uYW1lXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJbXS5wYXJlbnRcclxuICogQHBhcmFtIHtTdHJpbmd9IGFycltdLmNsYXNzXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcnJbXS50eXBlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBhcnJbXS5hdHRyaWJ1dGVzXHJcbiAqIEByZXR1cm5zIEh0bWxFbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcGxleEVsZW1lbnQoYXJyKSB7XHJcbiAgY29uc3QgbmV3QXJyID0gW11cclxuICBhcnIuZm9yRWFjaCgob2JqKSA9PiB7XHJcbiAgICBjb25zdCBuZXdPYmogPSB7fVxyXG4gICAgbmV3T2JqLkRPTWVsZW1lbnQgPSBjcmVhdGVFbGVtZW50RnJvbU9iamVjdChvYmopXHJcbiAgICBuZXdPYmoubmFtZSA9IG9iai5uYW1lXHJcbiAgICBuZXdPYmoucGFyZW50ID0gb2JqLnBhcmVudFxyXG4gICAgY29uc3QgcGFwYSA9IG5ld0Fyci5maW5kKChlbCkgPT4gZWwubmFtZSA9PT0gb2JqLnBhcmVudClcclxuICAgIGlmIChwYXBhKSB7XHJcbiAgICAgIHBhcGEuRE9NZWxlbWVudC5hcHBlbmRDaGlsZChuZXdPYmouRE9NZWxlbWVudClcclxuICAgIH1cclxuICAgIG5ld0Fyci5wdXNoKG5ld09iailcclxuICB9KVxyXG4gIHJldHVybiBuZXdBcnIuZmluZCgoZWwpID0+IGVsLnBhcmVudCA9PT0gJ21haW4nKS5ET01lbGVtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biDDqWzDqW1lbnQgSHRtbCDDoCBwYXJ0aXIgZCd1biBvYmpldFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmoubmFtZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLnBhcmVudFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLmNsYXNzXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmoudHlwZVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gb2JqLmNvbnRlbnRcclxuICogQHBhcmFtIHtTdHJpbmd9IG9iai5pbm5lcmh0bWxcclxuICogQHBhcmFtIHtPYmplY3R9IG9iai5hdHRyaWJ1dGVzXHJcbiAqIEByZXR1cm5zIEh0bWxFbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEZyb21PYmplY3Qob2JqKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50eXBlKSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGVsLmNsYXNzTmFtZSA9IG9iai5jbGFzcyB8fCAnJ1xyXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcyB8fCBbXVxyXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XHJcbiAgICBjb25zdCBkYXRhID0gY2FtZWxDYXNlUGFyc2VyKGtleSlcclxuICAgIGVsLnNldEF0dHJpYnV0ZShkYXRhLCB2YWx1ZSlcclxuICB9XHJcbiAgaWYgKG9iai5jb250ZW50KSBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvYmouY29udGVudCkpXHJcbiAgaWYgKG9iai5pbm5lcmh0bWwpIGVsLmlubmVySFRNTCA9IG9iai5pbm5lcmh0bWxcclxuICByZXR1cm4gZWxcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCBlbiBjYW1lbENhc2VcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmZ1bmN0aW9uIGNhbWVsQ2FzZVBhcnNlcih0ZXh0KSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gdGV4dC5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKVxyXG4gIGNvbnN0IGZpbmFsUmVzdWx0ID0gcmVzdWx0LmNoYXJBdCgwKSArIHJlc3VsdC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpXHJcbiAgcmV0dXJuIGZpbmFsUmVzdWx0XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxlbGVtZW50fSBlbGVtZW50IC0gZWxlbWVudCBwYXJlbnQgZGFucyBsZXF1ZWwgY2hlcmNoZXIgbGVzIMOpbMOpbWVudHMgZm9jdXNhYmxlc1xyXG4gKiBAcmV0dXJucyB7QXJyYXkuPEhUTUxlbGVtZW50Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRm9jdXNhYmxlRWxlbWVudHMoZWxlbWVudCkge1xyXG4gIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxyXG4gICAgICBhW2hyZWZdLFxyXG4gICAgICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAgIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXHJcbiAgICAgIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcclxuICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcclxuICAgICAgW3RhYmluZGV4PVwiMFwiXSxcclxuICAgICAgW3RhYmluZGV4PVwiMVwiXSxcclxuICAgICAgLmVtYmVyLXBvd2VyLXNlbGVjdC10cmlnZ2VyXHJcbiAgICBgKVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIGZpbGw9JTI3YmxhY2slMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IHdpZHRoPSUyNzI0JTI3IHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3PjxwYXRoIGQ9JTI3TTcgMTBsNSA1IDUtNXolMjcvPjxwYXRoIGQ9JTI3TTAgMGgyNHYyNEgweiUyNyBmaWxsPSUyN25vbmUlMjcvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4qLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnByZWxvYWQge1xcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5ub1Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnNyLW9ubHkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIC8qIGFkZGVkIGxpbmUgKi9cXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG59XFxuLmhlYWRlcl9fbG9nbyB7XFxuICBoZWlnaHQ6IDIuMzVyZW07XFxufVxcbi5oZWFkZXJfX2xvZ28gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmhlYWRlcl9fbG9nbzpmb2N1cyBpbWcsIC5oZWFkZXJfX2xvZ286aG92ZXIgaW1nIHtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAwcHggYmxhY2spO1xcbn1cXG4uaGVhZGVyX19oaWRkZW5saW5rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEwMDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICNEQjg4NzY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG59XFxuLmhlYWRlcl9faGlkZGVubGluazpmb2N1cyB7XFxuICB0b3A6IDAuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcbiAgLm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4ubmF2X190YWdzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW0gMC4zMTI1cmVtO1xcbn1cXG4ubmF2X190YWcgYSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLm5hdl9fdGFnIGE6aG92ZXIsIC5uYXZfX3RhZyBhOmZvY3VzLCAubmF2X190YWcgYS5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW5fX3RpdGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg0LjE3NXJlbSAtIDJ2dyk7XFxuICByaWdodDogMyU7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1haW5fX3RpdGxlIHtcXG4gICAgdG9wOiAzLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICB9XFxufVxcbi5tYWluX19waG90b2dyYXBoZXJzIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubWFpbl9fcGhvdG9ncmFwaGVycyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1haW5fX3Bob3RvZ3JhcGhlcnMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxuICB9XFxufVxcblxcbi5waG90b2dyYXBoZXJDYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xpbmsge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbGluazpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUsIC5waG90b2dyYXBoZXJDYXJkX19saW5rOmZvY3VzIC5waG90b2dyYXBoZXJDYXJkX190aXRsZSB7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6aG92ZXIgLnBob3RvZ3JhcGhlckNhcmRfX2ltZywgLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9faW1nQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwICMwMDAwMDA0MDtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190aXRsZSB7XFxuICBjb2xvcjogI0QzNTczQztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX2luZm9zIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19zbG9nYW4ge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbG9jYXRpb24ge1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YXJpZiB7XFxuICBjb2xvcjogIzc1NzU3NTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RhZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxcmVtIDAuMzEyNXJlbTtcXG4gIG1hcmdpbjogMC4zMjVyZW07XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjg3NXJlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XFxuICBjb2xvcjogIzkwMUMxQztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX190YWc6aG92ZXIsIC5waG90b2dyYXBoZXJDYXJkX190YWc6Zm9jdXMsIC5waG90b2dyYXBoZXJDYXJkX190YWcuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waG90b2dyYXBoZXJJZGVudGl0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDRyZW0gMy4xMjVyZW0gNHJlbSAycmVtO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2luZm9zIHtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fdGV4dCB7XFxuICBsaW5lLWhlaWdodDogMjtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3Nsb2dhbiB7XFxuICBjb2xvcjogIzUyNTI1MjtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X190YWdzTGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMC45cmVtO1xcbiAgZ2FwOiAwLjYyNXJlbSAwLjMxMjVyZW07XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuOmhvdmVyLCAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpZW46Zm9jdXMsIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0IHtcXG4gIHdpZHRoOiAxNzBweDtcXG4gIGhlaWdodDogNjlweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3Q6aG92ZXIsIC5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgIzAwMDAwMDQwO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiA0cmVtO1xcbiAgcGFkZGluZzogMnJlbSAxLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjREI4ODc2O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtIDAuMzEyNXJlbSAwIDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19sb2NhdGlvbiwgLnBob3RvZ3JhcGhlcklkZW50aXR5X19zbG9nYW4sIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIGJvdHRvbTogMnJlbTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBwYWRkaW5nOiAwLjMxMjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19pbWdDb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzQW5kUHJpY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtIDEuMjVyZW0gNHJlbSAxLjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9faW5mb3Mge1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogNXZ3O1xcbiAgfVxcbn1cXG5cXG4uc2VsZWN0U3R5bGVkIHtcXG4gIHdpZHRoOiA4NiU7XFxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcXG4gIC8qIEFkZCB0aGUgZm9jdXMgc3RhdGVzIHRvbywgVGhleSBtYXR0ZXIsIGFsd2F5cyEgKi9cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAuc2VsZWN0U3R5bGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlLFxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTFyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5zZWxlY3RTdHlsZWQgLnNlbGVjdE5hdGl2ZTpmb2N1cyArIC5zZWxlY3RDdXN0b20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RMYWJlbCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlLFxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3ROYXRpdmUge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAuOHJlbTtcXG4gIHBhZGRpbmc6IDByZW0gMC44cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbSAwLjRyZW0gMCAwO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAwLjhyZW07XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLLhFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMC44cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiy4VcXFwiO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjhyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb246bGFzdC1vZi10eXBlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjRyZW0gMC40cmVtO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzSG92ZXIsXFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogOTAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzQWN0aXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwLjhyZW07XFxufVxcblxcbi5tZWRpYXNDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMXJlbSA2cmVtO1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogMy42MjVyZW0gYXV0byAwIGF1dG87XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXG4gIC5tZWRpYXNDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5tZWRpYXNDb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG59XFxuXFxuLm1lZGlhQ2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lZGlhQ2FyZF9faW1nQ29udGFpbmVyOmhvdmVyIC5tZWRpYUNhcmRfX21lZGlhLCAubWVkaWFDYXJkX19pbWdDb250YWluZXI6Zm9jdXMgLm1lZGlhQ2FyZF9fbWVkaWEge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG59XFxuLm1lZGlhQ2FyZF9fbWVkaWEge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ubWVkaWFDYXJkX19pbmZvcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLm1lZGlhQ2FyZF9fdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ubWVkaWFDYXJkX19saWtlcyB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xcbn1cXG4ubWVkaWFDYXJkX19saWtlczpob3ZlciwgLm1lZGlhQ2FyZF9fbGlrZXM6Zm9jdXMge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNCk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXG59XFxuLmRpYWxvZy52aXNpYmxlIHtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRpYWxvZ0Zvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMCAyLjE4NzVyZW07XFxuICBiYWNrZ3JvdW5kOiAjREI4ODc2O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgd2lkdGg6IDQ2JTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uZGlhbG9nRm9ybV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5kaWFsb2dGb3JtX19sYWJlbCwgLmRpYWxvZ0Zvcm1fX2lucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZGlhbG9nRm9ybV9faW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZGlhbG9nRm9ybV9fc3VibWl0IHtcXG4gIHdpZHRoOiAxNzBweDtcXG4gIGhlaWdodDogNjlweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxLjYyNXJlbSAwIDFyZW0gMDtcXG59XFxuLmRpYWxvZ0Zvcm1fX3N1Ym1pdDpob3ZlciwgLmRpYWxvZ0Zvcm1fX3N1Ym1pdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjRDM1NzNDO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uZGlhbG9nRm9ybV9fY2xvc2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnJlbTtcXG4gIHJpZ2h0OiAyLjE4NzVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMnJlbTtcXG59XFxuLmRpYWxvZ0Zvcm1fX2Nsb3NlIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgLmRpYWxvZ0Zvcm1fX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLmRpYWxvZ0Zvcm1fX2xhYmVsLCAuZGlhbG9nRm9ybV9faW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIH1cXG4gIC5kaWFsb2dGb3JtX19jbG9zZSB7XFxuICAgIHRvcDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmRpYWxvZ0Zvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgfVxcbiAgLmRpYWxvZ0Zvcm1fX2Nsb3NlIHtcXG4gICAgdG9wOiAycmVtO1xcbiAgICByaWdodDogMXJlbTtcXG4gIH1cXG59XFxuXFxuLmNhcm91c2VsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTJyZW0sIDApO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB6LWluZGV4OiAyMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XFxufVxcbi5jYXJvdXNlbC52aXNpYmxlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxufVxcbi5jYXJvdXNlbF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDJyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiBmcmFtZSBjbG9zZVxcXCIgXFxcInByZXYgZnJhbWUgbmV4dFxcXCIgXFxcIi4gbGVnZW5kIC5cXFwiO1xcbn1cXG4uY2Fyb3VzZWxfX2ZyYW1lIHtcXG4gIGdyaWQtYXJlYTogZnJhbWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2Fyb3VzZWxfX2xlZ2VuZCB7XFxuICBncmlkLWFyZWE6IGxlZ2VuZDtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlciBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLmNhcm91c2VsX19wcmV2LCAuY2Fyb3VzZWxfX25leHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmNhcm91c2VsX19wcmV2IHtcXG4gIGdyaWQtYXJlYTogcHJldjtcXG59XFxuLmNhcm91c2VsX19wcmV2OmhvdmVyLCAuY2Fyb3VzZWxfX3ByZXY6Zm9jdXMge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcbi5jYXJvdXNlbF9fbmV4dCB7XFxuICBncmlkLWFyZWE6IG5leHQ7XFxufVxcbi5jYXJvdXNlbF9fbmV4dDpob3ZlciwgLmNhcm91c2VsX19uZXh0OmZvY3VzIHtcXG4gIGNvbG9yOiAjRDM1NzNDO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlIHtcXG4gIGdyaWQtYXJlYTogY2xvc2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlIGltZyB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5jYXJvdXNlbF9fY2xvc2U6aG92ZXIgaW1nLCAuY2Fyb3VzZWxfX2Nsb3NlOmZvY3VzIGltZyB7XFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDczJSkgc2F0dXJhdGUoNjkwJSkgaHVlLXJvdGF0ZSgzMjdkZWcpIGJyaWdodG5lc3MoODglKSBjb250cmFzdCg4OCUpO1xcbn1cXG4uY2Fyb3VzZWxfX2Nsb3NlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLmNhcm91c2VsX19pdGVtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2Fyb3VzZWxfX21lZGlhIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHZhbmlzaCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZW1lcmdlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9iYXNlcy9fYmFzZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3V0aWxzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3V0aWxzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL2Jsb2NzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fcGhvdG9ncmFwaGVyQ2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvYmxvY3MvX3Bob3RvZ3JhcGhlcklkZW50aXR5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fc2VsZWN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fbWVkaWFDYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fZGlhbG9nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9ibG9jcy9fY2Fyb3VzZWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNDaEI7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QURHRjs7QUNBQTtFQUNFLDJCQUFBO0FER0Y7O0FDREE7RUFDRSxrQ0FBQTtBRElGOztBQ0ZBO0VBQ0UsZ0JBQUE7QURLRjs7QUNGQTtFQUNFLGdCQUFBO0FES0Y7O0FDRkE7RUFDRSxxQkFBQTtBREtGOztBQ0ZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQXFCLGVBQUE7RUFDckIsU0FBQTtBRE1GOztBQ0hBO0VBQ0Usa0JBQUE7RUFDQSxjQ3pDUztBRitDWDs7QUcvQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUhrREY7QUdqREU7RUFDRSxlQUFBO0FIbURKO0FHbERJO0VBQ0UsWUFBQTtBSG9ETjtBR2pERTtFQUVFLHNDQUFBO0FIa0RKO0FHL0NFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CRGpCUztFQ2tCVCxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBSGlESjtBR2hESTtFQUNFLFdBQUE7QUhrRE47O0FHN0NFO0VBREY7SUFFSSxXQUFBO0VIaURGO0FBQ0Y7QUdoREU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUhrREo7QUc5Q0k7RUM3Q0YseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0ZKUztFRUtULGdCQUFBO0VBQ0EsNkNBQUE7QUo4RkY7QUk3RkU7RUFHRSxtQkZWTztFRVdQLFlBQUE7QUo2Rko7O0FLdkdF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QSxZQUFBO0FYaW5CSjtBVy9tQkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBWGluQko7O0FXOW1CQTtFQUNFO0lBQ0UsYUFBQTtFWGluQkY7RVcvbUJBO0lBQ0UsV0FBQTtFWGluQkY7QUFDRjtBVy9tQkE7RUFDRTtJQUNFLFdBQUE7RVhpbkJGO0VXL21CQTtJQUNFLGFBQUE7RVhpbkJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rU2Fuczp3Z2h0QDQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ucHJlbG9hZCB7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5vU2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uc3Itb25seSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLyogYWRkZWQgbGluZSAqL1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbn1cXG4uaGVhZGVyX19sb2dvIHtcXG4gIGhlaWdodDogMi4zNXJlbTtcXG59XFxuLmhlYWRlcl9fbG9nbyBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uaGVhZGVyX19sb2dvOmZvY3VzIGltZywgLmhlYWRlcl9fbG9nbzpob3ZlciBpbWcge1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDBweCBibGFjayk7XFxufVxcbi5oZWFkZXJfX2hpZGRlbmxpbmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTAwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgYmFja2dyb3VuZDogI0RCODg3NjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zMTI1cmVtO1xcbn1cXG4uaGVhZGVyX19oaWRkZW5saW5rOmZvY3VzIHtcXG4gIHRvcDogMC41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTM0MHB4KSB7XFxuICAubmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbi5uYXZfX3RhZ3NMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbSAwLjMxMjVyZW07XFxufVxcbi5uYXZfX3RhZyBhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjY4NzVyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ubmF2X190YWcgYTpob3ZlciwgLm5hdl9fdGFnIGE6Zm9jdXMsIC5uYXZfX3RhZyBhLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbl9fdGl0bGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDQuMTc1cmVtIC0gMnZ3KTtcXG4gIHJpZ2h0OiAzJTtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubWFpbl9fdGl0bGUge1xcbiAgICB0b3A6IDMuNXJlbTtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIH1cXG59XFxuLm1haW5fX3Bob3RvZ3JhcGhlcnMge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5tYWluX19waG90b2dyYXBoZXJzIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAubWFpbl9fcGhvdG9ncmFwaGVycyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnBob3RvZ3JhcGhlckNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbGluayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19saW5rOmhvdmVyIC5waG90b2dyYXBoZXJDYXJkX190aXRsZSwgLnBob3RvZ3JhcGhlckNhcmRfX2xpbms6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fbGluazpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9faW1nLCAucGhvdG9ncmFwaGVyQ2FyZF9fbGluazpmb2N1cyAucGhvdG9ncmFwaGVyQ2FyZF9faW1nIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19pbWdDb250YWluZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgIzAwMDAwMDQwO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9faW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiAjRDM1NzNDO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9faW5mb3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3Nsb2dhbiB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5waG90b2dyYXBoZXJDYXJkX19sb2NhdGlvbiB7XFxuICBjb2xvcjogIzkwMUMxQztcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RhcmlmIHtcXG4gIGNvbG9yOiAjNzU3NTc1O1xcbn1cXG4ucGhvdG9ncmFwaGVyQ2FyZF9fdGFncyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFyZW0gMC4zMTI1cmVtO1xcbiAgbWFyZ2luOiAwLjMyNXJlbTtcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RhZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xcbiAgYm9yZGVyLXJhZGl1czogMC42ODc1cmVtO1xcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnBob3RvZ3JhcGhlckNhcmRfX3RhZzpob3ZlciwgLnBob3RvZ3JhcGhlckNhcmRfX3RhZzpmb2N1cywgLnBob3RvZ3JhcGhlckNhcmRfX3RhZy5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBob3RvZ3JhcGhlcklkZW50aXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogNHJlbSAzLjEyNXJlbSA0cmVtIDJyZW07XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW5mb3Mge1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogI0QzNTczQztcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X190ZXh0IHtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xvY2F0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fc2xvZ2FuIHtcXG4gIGNvbG9yOiAjNTI1MjUyO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX3RhZ3NMaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiAwLjlyZW07XFxuICBnYXA6IDAuNjI1cmVtIDAuMzEyNXJlbTtcXG59XFxuLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjY4NzVyZW07XFxuICBwYWRkaW5nOiAwLjFyZW0gMC41cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpZW46aG92ZXIsIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGllbjpmb2N1cywgLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjOTAxQzFDO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3Qge1xcbiAgd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiA2OXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fY29udGFjdDpob3ZlciwgLnBob3RvZ3JhcGhlcklkZW50aXR5X19jb250YWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNEMzU3M0M7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbGV4LXNocmluazogMDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9faW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5waG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDRyZW07XFxuICBwYWRkaW5nOiAycmVtIDEuMzEyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICNEQjg4NzY7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW0gMC4zMTI1cmVtIDAgMDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xvY2F0aW9uLCAucGhvdG9ncmFwaGVySWRlbnRpdHlfX3Nsb2dhbiwgLnBob3RvZ3JhcGhlcklkZW50aXR5X19saWVuIHtcXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2NvbnRhY3Qge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm90dG9tOiAycmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHBhZGRpbmc6IDAuMzEyNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAucGhvdG9ncmFwaGVySWRlbnRpdHlfX2ltZ0NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG4gIC5waG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXNBbmRQcmljZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW0gMS4yNXJlbSA0cmVtIDEuMjVyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19pbmZvcyB7XFxuICAgIG1heC13aWR0aDogNzUlO1xcbiAgfVxcbiAgLnBob3RvZ3JhcGhlcklkZW50aXR5X19pbWdDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiA1dnc7XFxuICB9XFxufVxcblxcbi5zZWxlY3RTdHlsZWQge1xcbiAgd2lkdGg6IDg2JTtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMCBhdXRvO1xcbiAgLyogQWRkIHRoZSBmb2N1cyBzdGF0ZXMgdG9vLCBUaGV5IG1hdHRlciwgYWx3YXlzISAqL1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC5zZWxlY3RTdHlsZWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3ROYXRpdmUsXFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMXJlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIC5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLnNlbGVjdFN0eWxlZCAuc2VsZWN0TmF0aXZlOmZvY3VzICsgLnNlbGVjdEN1c3RvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdExhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdFdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3ROYXRpdmUsXFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdE5hdGl2ZSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgZmlsbD0nYmxhY2snIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J003IDEwbDUgNSA1LTV6Jy8+PHBhdGggZD0nTTAgMGgyNHYyNEgweicgZmlsbD0nbm9uZScvPjwvc3ZnPlxcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMC44cmVtO1xcbiAgcGFkZGluZzogMHJlbSAwLjhyZW07XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtIDAuNHJlbSAwIDA7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDAuOHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIsuEXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwLjhyZW07XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLLhVxcXCI7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNEMzU3M0M7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuOHJlbTtcXG4gIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgYmFja2dyb3VuZDogIzkwMUMxQztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLnNlbGVjdFN0eWxlZCAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpsYXN0LW9mLXR5cGUge1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNHJlbSAwLjRyZW07XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb24uaXNIb3ZlcixcXG4uc2VsZWN0U3R5bGVkIC5zZWxlY3RDdXN0b20tb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEMzU3M0M7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb246bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiA5MCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5zZWxlY3RTdHlsZWQgLnNlbGVjdEN1c3RvbS1vcHRpb24uaXNBY3RpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDAuOHJlbTtcXG59XFxuXFxuLm1lZGlhc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxcmVtIDZyZW07XFxuICB3aWR0aDogODYlO1xcbiAgbWFyZ2luOiAzLjYyNXJlbSBhdXRvIDAgYXV0bztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTBweCkge1xcbiAgLm1lZGlhc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm1lZGlhc0NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cXG4ubWVkaWFDYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWVkaWFDYXJkX19pbWdDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVkaWFDYXJkX19pbWdDb250YWluZXI6aG92ZXIgLm1lZGlhQ2FyZF9fbWVkaWEsIC5tZWRpYUNhcmRfX2ltZ0NvbnRhaW5lcjpmb2N1cyAubWVkaWFDYXJkX19tZWRpYSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG4ubWVkaWFDYXJkX19tZWRpYSB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5tZWRpYUNhcmRfX2luZm9zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4ubWVkaWFDYXJkX190aXRsZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5tZWRpYUNhcmRfX2xpa2VzIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogIzkwMUMxQztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XFxufVxcbi5tZWRpYUNhcmRfX2xpa2VzOmhvdmVyLCAubWVkaWFDYXJkX19saWtlczpmb2N1cyB7XFxuICBjb2xvcjogI0QzNTczQztcXG59XFxuXFxuLmRpYWxvZyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40KTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcbiAgei1pbmRleDogMjA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xcbn1cXG4uZGlhbG9nLnZpc2libGUge1xcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGlhbG9nRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwIDIuMTg3NXJlbTtcXG4gIGJhY2tncm91bmQ6ICNEQjg4NzY7XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICB3aWR0aDogNDYlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5kaWFsb2dGb3JtX190aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmRpYWxvZ0Zvcm1fX2xhYmVsLCAuZGlhbG9nRm9ybV9faW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5kaWFsb2dGb3JtX19pbnB1dDpmb2N1czppbnZhbGlkIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kaWFsb2dGb3JtX19zdWJtaXQge1xcbiAgd2lkdGg6IDE3MHB4O1xcbiAgaGVpZ2h0OiA2OXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXG4gIGJhY2tncm91bmQ6ICM5MDFDMUM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEuNjI1cmVtIDAgMXJlbSAwO1xcbn1cXG4uZGlhbG9nRm9ybV9fc3VibWl0OmhvdmVyLCAuZGlhbG9nRm9ybV9fc3VibWl0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNEMzU3M0M7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5kaWFsb2dGb3JtX19jbG9zZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycmVtO1xcbiAgcmlnaHQ6IDIuMTg3NXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG4uZGlhbG9nRm9ybV9fY2xvc2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxuICAuZGlhbG9nRm9ybV9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAuZGlhbG9nRm9ybV9fbGFiZWwsIC5kaWFsb2dGb3JtX19pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgfVxcbiAgLmRpYWxvZ0Zvcm1fX2Nsb3NlIHtcXG4gICAgdG9wOiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuZGlhbG9nRm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAuZGlhbG9nRm9ybV9fY2xvc2Uge1xcbiAgICB0b3A6IDJyZW07XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgfVxcbn1cXG5cXG4uY2Fyb3VzZWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMnJlbSwgMCk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXG59XFxuLmNhcm91c2VsLnZpc2libGUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogdmlzaWJsZTtcXG59XFxuLmNhcm91c2VsX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogOTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIGZyYW1lIGNsb3NlXFxcIiBcXFwicHJldiBmcmFtZSBuZXh0XFxcIiBcXFwiLiBsZWdlbmQgLlxcXCI7XFxufVxcbi5jYXJvdXNlbF9fZnJhbWUge1xcbiAgZ3JpZC1hcmVhOiBmcmFtZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jYXJvdXNlbF9fbGVnZW5kIHtcXG4gIGdyaWQtYXJlYTogbGVnZW5kO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyIGZsZXgtc3RhcnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjOTAxQzFDO1xcbn1cXG4uY2Fyb3VzZWxfX3ByZXYsIC5jYXJvdXNlbF9fbmV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICM5MDFDMUM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uY2Fyb3VzZWxfX3ByZXYge1xcbiAgZ3JpZC1hcmVhOiBwcmV2O1xcbn1cXG4uY2Fyb3VzZWxfX3ByZXY6aG92ZXIsIC5jYXJvdXNlbF9fcHJldjpmb2N1cyB7XFxuICBjb2xvcjogI0QzNTczQztcXG59XFxuLmNhcm91c2VsX19uZXh0IHtcXG4gIGdyaWQtYXJlYTogbmV4dDtcXG59XFxuLmNhcm91c2VsX19uZXh0OmhvdmVyLCAuY2Fyb3VzZWxfX25leHQ6Zm9jdXMge1xcbiAgY29sb3I6ICNEMzU3M0M7XFxufVxcbi5jYXJvdXNlbF9fY2xvc2Uge1xcbiAgZ3JpZC1hcmVhOiBjbG9zZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcbi5jYXJvdXNlbF9fY2xvc2UgaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmNhcm91c2VsX19jbG9zZTpob3ZlciBpbWcsIC5jYXJvdXNlbF9fY2xvc2U6Zm9jdXMgaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQyJSkgc2VwaWEoNzMlKSBzYXR1cmF0ZSg2OTAlKSBodWUtcm90YXRlKDMyN2RlZykgYnJpZ2h0bmVzcyg4OCUpIGNvbnRyYXN0KDg4JSk7XFxufVxcbi5jYXJvdXNlbF9fY2xvc2U6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uY2Fyb3VzZWxfX2l0ZW0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJvdXNlbF9fbWVkaWEge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgdmFuaXNoIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBlbWVyZ2Uge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK1NhbnM6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG4qLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZWxvYWQge1xcclxcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5ub1Njcm9sbCB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNyLW9ubHkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogLTFweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogYWRkZWQgbGluZSAqL1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxufVxcclxcblwiLFwiJHByaW1hcnktMTojOTAxQzFDO1xcclxcbiRwcmltYXJ5LTI6I0QzNTczQztcXHJcXG5cXHJcXG4kc2Vjb25kYXJ5LTE6IzUyNTI1MjtcXHJcXG4kc2Vjb25kYXJ5LTI6I0ZBRkFGQTtcXHJcXG4kc2Vjb25kYXJ5LTM6IzkwMUMxQztcXHJcXG4kc2Vjb25kYXJ5LTQ6I0RCODg3NjtcIixcIi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODYlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgcGFkZGluZzogM3JlbSAwO1xcclxcbiAgJl9fbG9nbyB7XFxyXFxuICAgIGhlaWdodDogMi4zNXJlbTtcXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2xvZ286Zm9jdXMgaW1nLFxcclxcbiAgJl9fbG9nbzpob3ZlciBpbWcge1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMHB4IGJsYWNrKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2hpZGRlbmxpbmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTEwMDBweDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LTQ7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIHRvcDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5uYXYge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzNDBweCkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhZ3NMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtIDAuMzEyNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhZyB7XFxyXFxuICAgIC8vIG1hcmdpbjogMCAwLjMxMjVyZW0gMC4zMTI1cmVtIDA7XFxyXFxuICAgIGEge1xcclxcbiAgICAgIEBpbmNsdWRlIHRhZztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBtaXhpbiB0YWcge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjg3NXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XFxyXFxuICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICAmOmhvdmVyLFxcclxcbiAgJjpmb2N1cyxcXHJcXG4gICYuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnRuIHtcXHJcXG4gIHdpZHRoOiAxNzBweDtcXHJcXG4gIGhlaWdodDogNjlweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS0xO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MsIGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG4gICY6aG92ZXIsXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5tYWluIHtcXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IGNhbGMoNC4xNzVyZW0gLSAydncpO1xcclxcbiAgICByaWdodDogMyU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41dnc7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgICB0b3A6IDMuNXJlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19waG90b2dyYXBoZXJzIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIucGhvdG9ncmFwaGVyQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgJjpob3ZlciAucGhvdG9ncmFwaGVyQ2FyZF9fdGl0bGUsXFxyXFxuICAgICY6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX3RpdGxlIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gICAgfVxcclxcbiAgICAmOmhvdmVyIC5waG90b2dyYXBoZXJDYXJkX19pbWcsXFxyXFxuICAgICY6Zm9jdXMgLnBob3RvZ3JhcGhlckNhcmRfX2ltZyB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9faW1nQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxyXFxuICB9XFxyXFxuICAmX19pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICB9XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9zIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgfVxcclxcbiAgJl9fc2xvZ2FuIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgJl9fbG9jYXRpb24ge1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhcmlmIHtcXHJcXG4gICAgY29sb3I6ICM3NTc1NzU7XFxyXFxuICB9XFxyXFxuICAmX190YWdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAxcmVtIDAuMzEyNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAwLjMyNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX3RhZyB7XFxyXFxuICAgIEBpbmNsdWRlIHRhZztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIucGhvdG9ncmFwaGVySWRlbnRpdHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktMjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDg2JTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDRyZW0gMy4xMjVyZW0gNHJlbSAycmVtO1xcclxcbiAgJl9faW5mb3Mge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gIH1cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTI7XFxyXFxuICB9XFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICB9XFxyXFxuICAmX19sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3Nsb2dhbiB7XFxyXFxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LTE7XFxyXFxuICB9XFxyXFxuICAmX190YWdzTGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC45cmVtO1xcclxcbiAgICBnYXA6IDAuNjI1cmVtIDAuMzEyNXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2xpZW4ge1xcclxcbiAgICBAaW5jbHVkZSB0YWc7XFxyXFxuICB9XFxyXFxuICAmX19jb250YWN0IHtcXHJcXG4gICAgQGluY2x1ZGUgYnRuO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gIH1cXHJcXG4gICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZmxleC1zaHJpbms6IDA7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCAjMDAwMDAwNDA7XFxyXFxuICB9XFxyXFxuICAmX19pbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICZfX2xpa2VzQW5kUHJpY2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEuMzEyNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeS00O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW0gMC4zMTI1cmVtIDAgMDtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19sb2NhdGlvbixcXHJcXG4gICAgJl9fc2xvZ2FuLFxcclxcbiAgICAmX19saWVuIHtcXHJcXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19jb250YWN0IHtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgIGJvdHRvbTogMnJlbTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgICAgcGFkZGluZzogMC4zMTI1cmVtIDFyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fbGlrZXNBbmRQcmljZSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtIDEuMjVyZW0gNHJlbSAxLjI1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgJl9faW5mb3Mge1xcclxcbiAgICAgIG1heC13aWR0aDogNzUlO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiA1dnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLnNlbGVjdFN0eWxlZCB7XFxyXFxuICB3aWR0aDogODYlO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC8vIEJvdGggbmF0aXZlIGFuZCBjdXN0b20gc2VsZWN0cyBtdXN0IGhhdmUgdGhlIHNhbWUgd2lkdGgvaGVpZ2h0LlxcclxcbiAgLnNlbGVjdE5hdGl2ZSxcXHJcXG4gIC5zZWxlY3RDdXN0b20ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gTWFrZSBzdXJlIHRoZSBjdXN0b20gc2VsZWN0IGRvZXMgbm90IG1lc3Mgd2l0aCB0aGUgbGF5b3V0XFxyXFxuICAuc2VsZWN0Q3VzdG9tIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyBUaGlzIG1lZGlhIHF1ZXJ5IGRldGVjdHMgZGV2aWNlcyB3aGVyZSB0aGUgcHJpbWFyeVxcclxcbiAgLy8gaW5wdXQgbWVjaGFuaXNtIGNhbiBob3ZlciBvdmVyIGVsZW1lbnRzLiAoZS5nLiBjb21wdXRlcnMgd2l0aCBhIG1vdXNlKVxcclxcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgLy8gU2luY2Ugd2UgYXJlIHVzaW5nIGEgbW91c2UsIGl0J3Mgc2FmZSB0byBzaG93IHRoZSBjdXN0b20gc2VsZWN0LlxcclxcbiAgICAuc2VsZWN0Q3VzdG9tIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvLyBJbiBhIGNvbXB1dGVyIHVzaW5nIGtleWJvYXJkPyBUaGVuIGxldCdzIGhpZGUgYmFjayB0aGUgY3VzdG9tIHNlbGVjdFxcclxcbiAgICAvLyB3aGlsZSB0aGUgbmF0aXZlIG9uZSBpcyBmb2N1c2VkOlxcclxcbiAgICAuc2VsZWN0TmF0aXZlOmZvY3VzICsgLnNlbGVjdEN1c3RvbSB7XFxyXFxuICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLyogQWRkIHRoZSBmb2N1cyBzdGF0ZXMgdG9vLCBUaGV5IG1hdHRlciwgYWx3YXlzISAqL1xcclxcbiAgLy8gLnNlbGVjdE5hdGl2ZTpmb2N1cyB7XFxyXFxuICAvLyAgIGJveC1zaGFkb3c6ICRwcmltYXJ5LTIgMCAwIDAgMnB4O1xcclxcbiAgLy8gfVxcclxcblxcclxcbiAgLy9cXHJcXG4gIC8vIFJlc3Qgb2YgdGhlIHN0eWxlcyB0byBjcmVhdGUgdGhlIGN1c3RvbSBzZWxlY3QuXFxyXFxuICAvLyBKdXN0IG1ha2Ugc3VyZSB0aGUgbmF0aXZlIGFuZCB0aGUgY3VzdG9tIGhhdmUgYSBzaW1pbGFyIFxcXCJib3hcXFwiICh0aGUgdHJpZ2dlcikuXFxyXFxuICAvL1xcclxcblxcclxcbiAgLnNlbGVjdCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RMYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdFdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3ROYXRpdmUsXFxyXFxuICAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS0xO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdE5hdGl2ZSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgZmlsbD0nYmxhY2snIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgd2lkdGg9JzI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J003IDEwbDUgNSA1LTV6Jy8+PHBhdGggZD0nTTAgMGgyNHYyNEgweicgZmlsbD0nbm9uZScvPjwvc3ZnPlxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMC44cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwcmVtIDAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20uaXNBY3RpdmUgLnNlbGVjdEN1c3RvbS10cmlnZ2VyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtIDAuNHJlbSAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLXRyaWdnZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAwIDAuOHJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS10cmlnZ2VyOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICfLhCc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMC44cmVtO1xcclxcbiAgfVxcclxcbiAgLnNlbGVjdEN1c3RvbS5pc0FjdGl2ZSAuc2VsZWN0Q3VzdG9tLXRyaWdnZXI6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ8uFJztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tdHJpZ2dlcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLmlzQWN0aXZlIC5zZWxlY3RDdXN0b20tb3B0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlbGVjdEN1c3RvbS1vcHRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LTE7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxuICB9XFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMC40cmVtIDAuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uLmlzSG92ZXIsXFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LTI7IC8vIGNvbnRyYXN0IEFBXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWxlY3RDdXN0b20tb3B0aW9uOm5vdCg6bGFzdC1vZi10eXBlKTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VsZWN0Q3VzdG9tLW9wdGlvbi5pc0FjdGl2ZTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ+Kckyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMC44cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi5tZWRpYXNDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMXJlbSA2cmVtO1xcclxcbiAgd2lkdGg6IDg2JTtcXHJcXG4gIG1hcmdpbjogMy42MjVyZW0gYXV0byAwIGF1dG87XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogMTI1MHB4KSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWRpYUNhcmQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICAmX19pbWdDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzEyNXJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAmOmhvdmVyIC5tZWRpYUNhcmRfX21lZGlhLFxcclxcbiAgICAmOmZvY3VzIC5tZWRpYUNhcmRfX21lZGlhIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19tZWRpYSB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gICZfX2luZm9zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB9XFxyXFxuICAmX19saWtlcyB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgY29sb3I6ICRwcmltYXJ5LTE7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1vdXQ7XFxyXFxuICAgICY6aG92ZXIsXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS0yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLmRpYWxvZyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40KTtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJyZW0pO1xcclxcbiAgei1pbmRleDogMjA7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjNzO1xcclxcbiAgJi52aXNpYmxlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ0Zvcm0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAyLjE4NzVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LTQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICB3aWR0aDogNDYlO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gICZfX2xhYmVsLFxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjMxMjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuICAmX19pbnB1dDppbnZhbGlkIHtcXHJcXG4gICAgLy8gYm94LXNoYWRvdzogMCAwcHggMnB4IDNweCByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pbnB1dDpmb2N1czppbnZhbGlkIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gICZfX3N1Ym1pdCB7XFxyXFxuICAgIEBpbmNsdWRlIGJ0bjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMS42MjVyZW0gMCAxcmVtIDA7XFxyXFxuICB9XFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAycmVtO1xcclxcbiAgICByaWdodDogMi4xODc1cmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19sYWJlbCxcXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fY2xvc2Uge1xcclxcbiAgICAgIHRvcDogMXJlbTtcXHJcXG4gICAgICB3aWR0aDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgICZfX2Nsb3NlIHtcXHJcXG4gICAgICB0b3A6IDJyZW07XFxyXFxuICAgICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIuY2Fyb3VzZWwge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMnJlbSwgMCk7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIHotaW5kZXg6IDIwO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG4gICYudmlzaWJsZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcclxcbiAgfVxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMnJlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAnLiBmcmFtZSBjbG9zZSdcXHJcXG4gICAgICAncHJldiBmcmFtZSBuZXh0J1xcclxcbiAgICAgICcuIGxlZ2VuZCAuJztcXHJcXG4gIH1cXHJcXG4gICZfX2ZyYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmcmFtZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB9XFxyXFxuICAmX19sZWdlbmQge1xcclxcbiAgICBncmlkLWFyZWE6IGxlZ2VuZDtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogJHByaW1hcnktMTtcXHJcXG4gIH1cXHJcXG4gICZfX3ByZXYsXFxyXFxuICAmX19uZXh0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIGNvbG9yOiAkcHJpbWFyeS0xO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICAmX19wcmV2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmV2O1xcclxcbiAgICAmOmhvdmVyLFxcclxcbiAgICAmOmZvY3VzIHtcXHJcXG4gICAgICBjb2xvcjogJHByaW1hcnktMjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbmV4dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmV4dDtcXHJcXG4gICAgJjpob3ZlcixcXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgY29sb3I6ICRwcmltYXJ5LTI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2Nsb3NlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjbG9zZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgICY6aG92ZXIgaW1nLFxcclxcbiAgICAmOmZvY3VzIGltZyB7XFxyXFxuICAgICAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg3MyUpIHNhdHVyYXRlKDY5MCUpIGh1ZS1yb3RhdGUoMzI3ZGVnKVxcclxcbiAgICAgICAgYnJpZ2h0bmVzcyg4OCUpIGNvbnRyYXN0KDg4JSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX19tZWRpYSB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQGtleWZyYW1lcyB2YW5pc2gge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGVtZXJnZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmltYWxzX1B1cHBpbmVzcy5tcDRcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0FuaW1hbHNfUHVwcGluZXNzLm1wNFwiLFxuXHRcIi4vQW5pbWFsc19XaWxkX0hvcnNlc19pbl90aGVfbW91bnRhaW5zLm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQW5pbWFsc19XaWxkX0hvcnNlc19pbl90aGVfbW91bnRhaW5zLm1wNFwiLFxuXHRcIi4vQXJjaGl0ZWN0dXJlX2NvdmVycl9jaXJjbGVfZW1wdHlfaGlnaHdheV9pbl9idWVub3NfYWlyZXNfNTg3NzQwOTg1NjM3Lm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvQXJjaGl0ZWN0dXJlX2NvdmVycl9jaXJjbGVfZW1wdHlfaGlnaHdheV9pbl9idWVub3NfYWlyZXNfNTg3NzQwOTg1NjM3Lm1wNFwiLFxuXHRcIi4vQXJ0X1dvb2Rlbl9Ib3JzZV9TY3VscHR1cmUubXA0XCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9BcnRfV29vZGVuX0hvcnNlX1NjdWxwdHVyZS5tcDRcIixcblx0XCIuL1Nwb3J0X1RyaWNrc19pbl90aGVfYWlyLm1wNFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvU3BvcnRfVHJpY2tzX2luX3RoZV9haXIubXA0XCIsXG5cdFwiLi9UcmF2ZWxfUm9ja19Nb3VudGFpbnMubXA0XCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UcmF2ZWxfUm9ja19Nb3VudGFpbnMubXA0XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBcXFxcLihtcDQpJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGhvdG9ncmFwaGVyc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL2pzb24vRmlzaEV5ZURhdGEuanNvbidcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9jdXN0b21TZWxlY3QnXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnLi9jYXJvdXNlbCdcclxuaW1wb3J0IHsgUGhvdG9ncmFwaGVyIH0gZnJvbSAnLi9waG90b2dyYXBoZXInXHJcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYSdcclxuaW1wb3J0IHsgZ2V0VXJsVmFsdWUsIGltcG9ydEFsbCB9IGZyb20gJy4vdXRpbHMnXHJcbmltcG9ydCB7IENvbnRhY3REaWFsb2cgfSBmcm9tICcuL2NvbnRhY3REaWFsb2cuanMnXHJcblxyXG4vLyBpbXBvcnRlciBsZXMgaW1hZ2VzXHJcbmltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy8nLCBmYWxzZSwgL1xcLihtcDQpJC8pKVxyXG4vKiBEw6ljbGFyYXRpb24gZGVzIHZhcmlhYmxlc1xyXG4gKi9cclxuY29uc3QgSWQgPSBwYXJzZUludChnZXRVcmxWYWx1ZSgnaWQnKSlcclxuaWYgKGlzTmFOKElkKSkgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCdcclxuLy8gcsOpY3Vww6lyZXIgbCdvYmpldCBwaG90b2dyYXBoZSBjb3JyZXNwb25kYW50IMOgIGwnaWQgcGFzc8OpIGRhbnMgbCd1cmxcclxuY29uc3QgcGhvdG9ncmFwaGVyRGF0YSA9IERhdGEucGhvdG9ncmFwaGVycy5maW5kKChlbCkgPT4gZWwuaWQgPT09IElkKVxyXG4vLyBjcsOpw6kgdW4gbm91dmVhdSBwaG90b2dyYXBoZSBhaW5zaSBxdWUgc29uIMOpbMOpbWVudCAnaWRlbnRpdHknIHB1aXMgbCdpbnPDqXJlclxyXG5jb25zdCBwaG90b2dyYXBoZXIgPSBuZXcgUGhvdG9ncmFwaGVyKHBob3RvZ3JhcGhlckRhdGEpXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblBob3RvZ3JhcGhlcicpXHJcblxyXG4vLyByw6ljdXDDqXJlciBsZXMgb2JqZXQgbWVkaWFzIHF1aSBjb3JyZXNwb25kZW50IMOgIGwnaWQgcGFzc8OpIGRhbnMgbCd1cmxcclxuY29uc3QgbWVkaWFEYXRhID0gRGF0YS5tZWRpYS5maWx0ZXIoXHJcbiAgKGVsKSA9PiBlbC5waG90b2dyYXBoZXJJZCA9PT0gcGFyc2VJbnQoZ2V0VXJsVmFsdWUoJ2lkJykpXHJcbilcclxubWFpbi5pbnNlcnRCZWZvcmUoXHJcbiAgcGhvdG9ncmFwaGVyLmlkZW50aXR5U2VjdGlvbigpLFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWRpYXMnKVxyXG4pXHJcblxyXG5kb2N1bWVudC50aXRsZSA9ICdGaXNoZXllIC0gJyArIHBob3RvZ3JhcGhlci5uYW1lXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5jb25zdCBkaWFsb2cgPSBuZXcgQ29udGFjdERpYWxvZygpXHJcbi8vIGF1IGNoYXJnZW1lbnQgYWN0aXbDqSBsZXMgYW5pbWF0aW9uc1xyXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RyYW5zaXRpb25zLW9ubHktYWZ0ZXItcGFnZS1sb2FkL1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICBjb25zdCBhbmltcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZWxvYWQnKVxyXG4gIHdoaWxlIChhbmltcy5sZW5ndGggPiAwKSB7XHJcbiAgICBhbmltc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdwcmVsb2FkJylcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBtZWRpYXMgPSBbXVxyXG5tZWRpYURhdGEuZm9yRWFjaCgoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IG1lZGlhID0gbmV3IE1lZGlhKGRhdGEsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcucGhvdG9ncmFwaGVySWRlbnRpdHlfX2xpa2VzJ1xyXG4gICAgKS50ZXh0Q29udGVudCA9IGAke01lZGlhLmdldExpa2VzKG1lZGlhcyl9IOKZpWBcclxuICB9KVxyXG4gIG1lZGlhcy5wdXNoKG1lZGlhKVxyXG59KVxyXG5NZWRpYS5zb3J0KCdwb3B1bGFyaXR5JywgbWVkaWFzKVxyXG4vLyBhdSBjbGlxdWUgc3VyIHVuZSBtZWRpYUNhcmQgPT4gb3V2cmlyIGxlIGNhcm91c2VsIMOgIGwnaW1hZ2UgY29ycmVzcG9uZGFudGVcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZWRpYXMubGVuZ3RoOyBpKyspIHtcclxuICBjb25zdCBtZWRpYUNhcmQgPSBtZWRpYXNbaV0uY2FyZEVsZW1lbnRcclxuICBjb25zdCBtZWRpYUNhcmRMaW5rID0gbWVkaWFDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxyXG4gIG1lZGlhQ2FyZExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBpbmRleCA9IFsuLi5tZWRpYUNhcmQucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uaW5kZXhPZihtZWRpYUNhcmQpXHJcbiAgICBjYXJvdXNlbC5vcGVuKGluZGV4KVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIGNyw6lhdGlvbiBkdSBzw6lsZWN0IGN1c3RvbWlzw6lcclxuU2VsZWN0LmNyZWF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0U3R5bGVkJyksICh2YWx1ZSkgPT5cclxuICBNZWRpYS5zb3J0KHZhbHVlLCBtZWRpYXMpXHJcbilcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgJy5waG90b2dyYXBoZXJJZGVudGl0eV9fbGlrZXMnXHJcbikudGV4dENvbnRlbnQgPSBgJHtNZWRpYS5nZXRMaWtlcyhtZWRpYXMpfSDimaVgXHJcblxyXG5jb25zdCBjYXJvdXNlbCA9IG5ldyBDYXJvdXNlbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKSlcclxuIl0sIm5hbWVzIjpbImZpbmRGb2N1c2FibGVFbGVtZW50cyIsIkNhcm91c2VsIiwiZWxlbWVudCIsInByZXZCdG4iLCJxdWVyeVNlbGVjdG9yIiwibmV4dEJ0biIsImNsb3NlQnRuIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVnZW5kIiwiaW5kZXgiLCJGb2N1c2FibGVFbGVtZW50cyIsImZpcnN0Q2hpbGQiLCJsYXN0Q2hpbGQiLCJmb3JFYWNoIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJjbG9zZSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiaWQiLCJhbmltYXRpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImdldEF0dHJpYnV0ZSIsImZvY3VzIiwibmV4dEZyYW1lIiwicHJldkZyYW1lIiwia2V5RXZlbnRzIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9sZEVsZW1lbnQiLCJuZXdFbGVtZW50Iiwib25jZSIsImNvZGUiLCJzaGlmdEtleSIsImFsdEtleSIsImFjdGl2ZUVsZW1lbnQiLCJDb250YWN0RGlhbG9nIiwib3BlbkJ0biIsInN1Ym1pdEJ0biIsImZvcm0iLCJvcGVuIiwia2V5Ym9hcmQiLCJvblN1Ym1pdCIsImlucHV0cyIsImNoZWNrVmFsaWRpdHkiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImNyZWF0ZUNvbXBsZXhFbGVtZW50IiwiU2VsZWN0Iiwib25DaGFuZ2VGdW5jdGlvbiIsImVsU2VsZWN0TmF0aXZlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVTZWxlY3RDbG9uZSIsImN1c3RvbU9wdHNMaXN0IiwiQXJyYXkiLCJmcm9tIiwiZWxTZWxlY3RDdXN0b21PcHRzIiwiY2hpbGRyZW4iLCJvcHRpb25zQ291bnQiLCJkZWZhdWx0TGFiZWwiLCJlbFNlbGVjdEN1c3RvbUJveCIsIm9wdGlvbkNoZWNrZWQiLCJvcHRpb25Ib3ZlcmVkSW5kZXgiLCJpc0Nsb3NlZCIsImVsU2VsZWN0Q3VzdG9tIiwiY29udGFpbnMiLCJvcGVuU2VsZWN0Q3VzdG9tIiwiY2xvc2VTZWxlY3RDdXN0b20iLCJ0YXJnZXQiLCJlbFJlc3BlY3RpdmVDdXN0b21PcHRpb24iLCJ1cGRhdGVDdXN0b21TZWxlY3RDaGVja2VkIiwiZWxPcHRpb24iLCJ1cGRhdGVDdXN0b21TZWxlY3RIb3ZlcmVkIiwib2JqIiwibmFtZSIsInR5cGUiLCJjbGFzcyIsImF0dHJpYnV0ZXMiLCJhcmlhSGlkZGVuIiwiY29udGVudCIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiaSIsIm9wdGlvbiIsImRhdGFWYWx1ZSIsImlubmVySFRNTCIsInB1c2giLCJvcHRpb25DaGVja2VkSW5kZXgiLCJmaW5kSW5kZXgiLCJ3YXRjaENsaWNrT3V0c2lkZSIsInN1cHBvcnRLZXlib2FyZE5hdmlnYXRpb24iLCJuZXdJbmRleCIsInByZXZPcHRpb24iLCJ0ZXh0IiwicHJldlZhbHVlIiwiZWxQcmV2T3B0aW9uIiwiZGlkQ2xpY2tlZE91dHNpZGUiLCJjcmVhdGVFbGVtZW50RnJvbU9iamVjdCIsIk1lZGlhIiwicmVmcmVzaFRvdGFsTGlrZXMiLCJ0aXRsZSIsImFsdCIsInNyYyIsImltYWdlIiwidmlkZW8iLCJsaWtlcyIsImRhdGUiLCJEYXRlIiwibWVkaWEiLCJQaG90byIsIlZpZGVvIiwiY2FyZEVsZW1lbnQiLCJjcmVhdGVDYXJkIiwiY2Fyb3VzZWxJdGVtRWxlbWVudCIsImNyZWF0ZUNhcm91c2VsSXRlbSIsImFwcGVuZEVsZW1lbnRzIiwibGlrZXNFbCIsIm9uTGlrZSIsIm9uTGlrZUtleSIsInJlcGxhY2UiLCJhcHBlbmQiLCJtZWRpYUNhcmRPYmoiLCJocmVmIiwidGFiaW5kZXgiLCJhcmlhTGFiZWwiLCJjYXJvdXNlbEl0ZW1PYmoiLCJkYXRhTGVnZW5kIiwiY2Fyb3VzZWxJdGVtIiwiYWx0VGV4dCIsIm1lZGlhcyIsInR5cGVPZlNvcnQiLCJzb3J0IiwiYSIsImIiLCJjb250cm9scyIsIlBob3RvZ3JhcGhlciIsImRhdGEiLCJJbWFnZSIsInBvcnRyYWl0IiwibG9jYXRpb24iLCJjaXR5IiwiY291bnRyeSIsInNsb2dhbiIsInRhZ2xpbmUiLCJwcmljZSIsInRhZ3MiLCJ0YWciLCJ0YWdFbCIsImlubmVyaHRtbCIsInRhZ0xpIiwidGFnQSIsImdldFVybFZhbHVlIiwicGFyc2VkVXJsIiwiVVJMIiwid2luZG93Iiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZ2V0VXJsVmFsdWVzIiwicmV0b3VyIiwic3BsaXQiLCJpbXBvcnRBbGwiLCJyIiwiaW1hZ2VzIiwia2V5cyIsIml0ZW0iLCJhcnIiLCJuZXdBcnIiLCJuZXdPYmoiLCJET01lbGVtZW50IiwicGFwYSIsImZpbmQiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwiY2FtZWxDYXNlUGFyc2VyIiwiY3JlYXRlVGV4dE5vZGUiLCJyZXN1bHQiLCJmaW5hbFJlc3VsdCIsImNoYXJBdCIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJEYXRhIiwicmVxdWlyZSIsImNvbnRleHQiLCJJZCIsInBhcnNlSW50IiwiaXNOYU4iLCJwaG90b2dyYXBoZXJEYXRhIiwicGhvdG9ncmFwaGVycyIsInBob3RvZ3JhcGhlciIsIm1haW4iLCJtZWRpYURhdGEiLCJmaWx0ZXIiLCJwaG90b2dyYXBoZXJJZCIsImluc2VydEJlZm9yZSIsImlkZW50aXR5U2VjdGlvbiIsImRpYWxvZyIsImFuaW1zIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImdldExpa2VzIiwibWVkaWFDYXJkIiwibWVkaWFDYXJkTGluayIsInBhcmVudEVsZW1lbnQiLCJpbmRleE9mIiwiY2Fyb3VzZWwiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9