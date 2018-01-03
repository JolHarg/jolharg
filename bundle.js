(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; };

var _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; };

var _construct = _typeof(Reflect) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); };

var _cache = typeof Map === "function" && new Map();

function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writeable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }

var ElementAbstract =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(ElementAbstract, _HTMLElement);

  function ElementAbstract() {
    _classCallCheck(this, ElementAbstract);

    return _possibleConstructorReturn(this, (ElementAbstract.__proto__ || Object.getPrototypeOf(ElementAbstract)).apply(this, arguments));
  }

  _createClass(ElementAbstract, [{
    key: "afterAll",
    value: function () {
      var _afterAll = _asyncToGenerator(function* () {// console.log(`Do stuff here`)
      });

      return function afterAll() {
        return _afterAll.apply(this, arguments);
      };
    }()
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(function* () {
        try {
          var html = yield (yield fetch("".concat(this.dir, "/index.html"))).text(),
              extcss = yield (yield fetch("/node_modules/bootstrap/dist/css/bootstrap.css")).text(); //extcss = await (await fetch(`${this.dir}/external.css`)).text();

          var template = "".concat(html, "<style>").concat(extcss, "</style>");

          if (this.hascss) {
            var css = yield (yield fetch("".concat(this.dir, "/index.css"))).text();
            template += "<style>".concat(css, "</style>");
          }

          this.attachShadow({
            mode: 'open'
          });
          this.shadowRoot.innerHTML = template;
          var _arr = ["src", "href"];

          for (var _i = 0; _i < _arr.length; _i++) {
            var strAttr = _arr[_i];

            if (this.hasAttribute(strAttr)) {
              var elem = this.shadowRoot.querySelector("[".concat(strAttr, "]")),
                  strValue = this.getAttribute(strAttr);

              if (elem) {
                elem.setAttribute(strAttr, strValue);
              }
            }
          }

          yield this.afterAll();
        } catch (err) {
          console.error(err);
        }
      });

      return function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      };
    }()
  }, {
    key: "dir",
    get: function get() {
      throw new Error("Define dir");
    }
  }, {
    key: "hascss",
    get: function get() {
      return false;
    }
  }]);

  return ElementAbstract;
}(_wrapNativeSuper(HTMLElement));

exports.default = ElementAbstract;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(App, _ElementAbstract);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/app";
    }
  }]);

  return App;
}(_elementAbstract.default);

exports.default = App;
},{"../../element-abstract.js":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumb =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(Breadcrumb, _ElementAbstract);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/breadcrumb";
    }
  }]);

  return Breadcrumb;
}(_elementAbstract.default);

exports.default = Breadcrumb;
},{"../../element-abstract.js":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardImg =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(CardImg, _ElementAbstract);

  function CardImg() {
    _classCallCheck(this, CardImg);

    return _possibleConstructorReturn(this, (CardImg.__proto__ || Object.getPrototypeOf(CardImg)).apply(this, arguments));
  }

  _createClass(CardImg, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card/img";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return CardImg;
}(_elementAbstract.default);

exports.default = CardImg;
},{"../../../element-abstract.js":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(Card, _ElementAbstract);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return Card;
}(_elementAbstract.default);

exports.default = Card;
},{"../../element-abstract.js":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardLink =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(CardLink, _ElementAbstract);

  function CardLink() {
    _classCallCheck(this, CardLink);

    return _possibleConstructorReturn(this, (CardLink.__proto__ || Object.getPrototypeOf(CardLink)).apply(this, arguments));
  }

  _createClass(CardLink, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card/link";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return CardLink;
}(_elementAbstract.default);

exports.default = CardLink;
},{"../../../element-abstract.js":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardSummary =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(CardSummary, _ElementAbstract);

  function CardSummary() {
    _classCallCheck(this, CardSummary);

    return _possibleConstructorReturn(this, (CardSummary.__proto__ || Object.getPrototypeOf(CardSummary)).apply(this, arguments));
  }

  _createClass(CardSummary, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card/summary";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return CardSummary;
}(_elementAbstract.default);

exports.default = CardSummary;
},{"../../../element-abstract.js":1}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardText =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(CardText, _ElementAbstract);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card/text";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return CardText;
}(_elementAbstract.default);

exports.default = CardText;
},{"../../../element-abstract.js":1}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardTitle =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(CardTitle, _ElementAbstract);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/card/title";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return CardTitle;
}(_elementAbstract.default);

exports.default = CardTitle;
},{"../../../element-abstract.js":1}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(Header, _ElementAbstract);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/header";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return Header;
}(_elementAbstract.default);

exports.default = Header;
},{"../../element-abstract.js":1}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderLink =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(HeaderLink, _ElementAbstract);

  function HeaderLink() {
    _classCallCheck(this, HeaderLink);

    return _possibleConstructorReturn(this, (HeaderLink.__proto__ || Object.getPrototypeOf(HeaderLink)).apply(this, arguments));
  }

  _createClass(HeaderLink, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/header/link";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return HeaderLink;
}(_elementAbstract.default);

exports.default = HeaderLink;
},{"../../../element-abstract.js":1}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageContact =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(PageContact, _ElementAbstract);

  function PageContact() {
    _classCallCheck(this, PageContact);

    return _possibleConstructorReturn(this, (PageContact.__proto__ || Object.getPrototypeOf(PageContact)).apply(this, arguments));
  }

  _createClass(PageContact, [{
    key: "afterAll",
    value: function () {
      var _afterAll = _asyncToGenerator(function* () {});

      return function afterAll() {
        return _afterAll.apply(this, arguments);
      };
    }()
  }, {
    key: "dir",
    get: function get() {
      return "/js/components/jh/page/contact";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return PageContact;
}(_elementAbstract.default);

exports.default = PageContact;
},{"../../../element-abstract.js":1}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getGithubRepos = _interopRequireDefault(require("../../../../lib/service/get-github-repos.js"));

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageFs =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(PageFs, _ElementAbstract);

  function PageFs() {
    _classCallCheck(this, PageFs);

    return _possibleConstructorReturn(this, (PageFs.__proto__ || Object.getPrototypeOf(PageFs)).apply(this, arguments));
  }

  _createClass(PageFs, [{
    key: "afterAll",
    value: function () {
      var _afterAll = _asyncToGenerator(function* () {
        var html = (yield Promise.all(["jolharg", "danwdart"].map(
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* (user) {
            return yield (0, _getGithubRepos.default)(user);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()))).map(function (result) {
          return result.map(function (item) {
            return "\n                    <jh-card class=\"col-md-4\">\n                        <jh-card-img src=\"".concat(item.picture, "\"></jh-card-img>\n                        <jh-card-title>").concat(item.name).concat(item.stars).concat(item.fork, "</jh-card-title>\n                        <jh-card-text>").concat(item.description).concat(item.licence, "</jh-card-text>\n                        <jh-card-link href=\"").concat(item.url, "\"></jh-card-link>\n                    </jh-card>");
          }).join("");
        }).join("");
        this.shadowRoot.getElementById("inside").innerHTML = html;
      });

      return function afterAll() {
        return _afterAll.apply(this, arguments);
      };
    }()
  }, {
    key: "dir",
    get: function get() {
      return "/js/components/jh/page/fs";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return PageFs;
}(_elementAbstract.default);

exports.default = PageFs;
},{"../../../../lib/service/get-github-repos.js":22,"../../../element-abstract.js":1}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(Page, _ElementAbstract);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/page";
    }
  }]);

  return Page;
}(_elementAbstract.default);

exports.default = Page;
},{"../../element-abstract.js":1}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagePortfolio =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(PagePortfolio, _ElementAbstract);

  function PagePortfolio() {
    _classCallCheck(this, PagePortfolio);

    return _possibleConstructorReturn(this, (PagePortfolio.__proto__ || Object.getPrototypeOf(PagePortfolio)).apply(this, arguments));
  }

  _createClass(PagePortfolio, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/page/portfolio";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return PagePortfolio;
}(_elementAbstract.default);

exports.default = PagePortfolio;
},{"../../../element-abstract.js":1}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageTechs =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(PageTechs, _ElementAbstract);

  function PageTechs() {
    _classCallCheck(this, PageTechs);

    return _possibleConstructorReturn(this, (PageTechs.__proto__ || Object.getPrototypeOf(PageTechs)).apply(this, arguments));
  }

  _createClass(PageTechs, [{
    key: "dir",
    get: function get() {
      return "/js/components/jh/page/techs";
    }
  }]);

  return PageTechs;
}(_elementAbstract.default);

exports.default = PageTechs;
},{"../../../element-abstract.js":1}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _elementAbstract = _interopRequireDefault(require("../../element-abstract.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pages =
/*#__PURE__*/
function (_ElementAbstract) {
  _inherits(Pages, _ElementAbstract);

  function Pages() {
    _classCallCheck(this, Pages);

    return _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).apply(this, arguments));
  }

  _createClass(Pages, [{
    key: "hashchange",
    value: function hashchange() {
      this.shadowRoot.querySelectorAll("jh-page").forEach(function (page) {
        return page.removeAttribute("data-active");
      });
      var strHash = window.location.hash || "#portfolio",
          currentHashElem = this.shadowRoot.querySelector(strHash);

      if (currentHashElem) {
        currentHashElem.setAttribute("data-active", true);
      }
    }
  }, {
    key: "afterAll",
    value: function () {
      var _afterAll = _asyncToGenerator(function* () {
        addEventListener("hashchange", this.hashchange.bind(this));
        this.hashchange();
      });

      return function afterAll() {
        return _afterAll.apply(this, arguments);
      };
    }()
  }, {
    key: "dir",
    get: function get() {
      return "/js/components/jh/pages";
    }
  }, {
    key: "hascss",
    get: function get() {
      return true;
    }
  }]);

  return Pages;
}(_elementAbstract.default);

exports.default = Pages;
},{"../../element-abstract.js":1}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.github = void 0;
var github = {
  access_token: "cebf8486b9c5711acb0be66daac0b67f49ddc7b3"
};
exports.github = github;
},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./components/jh/app/index.js"));

var _index2 = _interopRequireDefault(require("./components/jh/breadcrumb/index.js"));

var _index3 = _interopRequireDefault(require("./components/jh/card/index.js"));

var _index4 = _interopRequireDefault(require("./components/jh/card/img/index.js"));

var _index5 = _interopRequireDefault(require("./components/jh/card/link/index.js"));

var _index6 = _interopRequireDefault(require("./components/jh/card/summary/index.js"));

var _index7 = _interopRequireDefault(require("./components/jh/card/text/index.js"));

var _index8 = _interopRequireDefault(require("./components/jh/card/title/index.js"));

var _index9 = _interopRequireDefault(require("./components/jh/header/index.js"));

var _index10 = _interopRequireDefault(require("./components/jh/header/link/index.js"));

var _index11 = _interopRequireDefault(require("./components/jh/page/index.js"));

var _index12 = _interopRequireDefault(require("./components/jh/page/contact/index.js"));

var _index13 = _interopRequireDefault(require("./components/jh/page/fs/index.js"));

var _index14 = _interopRequireDefault(require("./components/jh/page/portfolio/index.js"));

var _index15 = _interopRequireDefault(require("./components/jh/page/techs/index.js"));

var _index16 = _interopRequireDefault(require("./components/jh/pages/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var modules = [['jh-app', _index.default], ['jh-breadcrumb', _index2.default], ['jh-card', _index3.default], ['jh-card-img', _index4.default], ['jh-card-link', _index5.default], ['jh-card-summary', _index6.default], ['jh-card-text', _index7.default], ['jh-card-title', _index8.default], ['jh-header', _index9.default], ['jh-header-link', _index10.default], ['jh-page', _index11.default], ['jh-page-contact', _index12.default], ['jh-page-fs', _index13.default], ['jh-page-portfolio', _index14.default], ['jh-page-techs', _index15.default], ['jh-pages', _index16.default]];
modules.map(function (opts) {
  var _customElements;

  return (_customElements = customElements).define.apply(_customElements, _toConsumableArray(opts));
});

var _default =
/*#__PURE__*/
_asyncToGenerator(function* () {
  return Promise.all(modules.map(function (opts) {
    return customElements.whenDefined(opts[0]);
  }));
});

exports.default = _default;
},{"./components/jh/app/index.js":2,"./components/jh/breadcrumb/index.js":3,"./components/jh/card/img/index.js":4,"./components/jh/card/index.js":5,"./components/jh/card/link/index.js":6,"./components/jh/card/summary/index.js":7,"./components/jh/card/text/index.js":8,"./components/jh/card/title/index.js":9,"./components/jh/header/index.js":10,"./components/jh/header/link/index.js":11,"./components/jh/page/contact/index.js":12,"./components/jh/page/fs/index.js":13,"./components/jh/page/index.js":14,"./components/jh/page/portfolio/index.js":15,"./components/jh/page/techs/index.js":16,"./components/jh/pages/index.js":17}],20:[function(require,module,exports){
"use strict";

var _defineElements = _interopRequireDefault(require("./defineElements.js"));

var _client = _interopRequireDefault(require("./serviceworker/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

_asyncToGenerator(function* () {
  yield (0, _client.default)();
  yield (0, _defineElements.default)();
})();
},{"./defineElements.js":19,"./serviceworker/client.js":23}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchjson = fetchjson;
exports.fetchtext = fetchtext;

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function fetchjson(_x) {
  return _fetchjson.apply(this, arguments);
}

function _fetchjson() {
  _fetchjson = _asyncToGenerator(function* (strURL) {
    var response = yield fetch(strURL);
    return yield response.json();
  });
  return _fetchjson.apply(this, arguments);
}

function fetchtext(_x2) {
  return _fetchtext.apply(this, arguments);
}

function _fetchtext() {
  _fetchtext = _asyncToGenerator(function* (strURL) {
    var response = yield fetch(strURL);
    return yield response.text();
  });
  return _fetchtext.apply(this, arguments);
}
},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../../config.js");

var _ajax = require("./ajax.js");

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var qs = "per_page=100&sort=pushed&type=owner&direction=desc&access_token=".concat(_config.github.access_token);

var _default =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (user) {
    var arrResponse = yield (0, _ajax.fetchjson)("https://api.github.com/users/".concat(user, "/repos?").concat(qs));

    if (arrResponse.message) {
      throw new Error(arrResponse.message);
    }

    return arrResponse.map(function (item) {
      return {
        picture: item.owner.avatar_url,
        name: item.name,
        stars: item.stargazers_count ? " (".concat(item.stargazers_count, "&starf;)") : "",
        fork: item.fork ? " (fork)" : "",
        description: item.description ? item.description : "(no description)",
        licence: item.license && "Other" !== item.license.name ? "<br/><a href=\"https://spdx.org/licenses/".concat(item.license.spdx_id, ".html\" target=\"_blank\">").concat(item.license.spdx_id, "</a>") : "",
        url: item.clone_url
      };
    });
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;
},{"../../config.js":18,"./ajax.js":21}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var _default =
/*#__PURE__*/
_asyncToGenerator(function* () {
  if (!'serviceWorker' in navigator) {
    return;
  }

  try {
    var registration = yield navigator.serviceWorker.register('/worker.js', {
      scope: '/'
    }); //console.debug(`Registration succeeded. Scope is ${registration.scope}`);

    if (!navigator.serviceWorker.controller) {
      window.location.reload();
    }
  } catch (err) {
    console.error(err);
  }
});

exports.default = _default;
},{}]},{},[20]);
