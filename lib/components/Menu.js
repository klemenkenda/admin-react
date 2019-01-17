"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      window._aside();
    }
  }, {
    key: "render",
    value: function render() {
      // transverse through config
      var modules = this.props.config.map(function (el, i) {
        var title = el.name;

        if ("config" in el) {
          title = el.config.name;
        }

        var link_list = "/list/" + el.name;
        var link_add = "/add/" + el.name;
        return _react.default.createElement("li", {
          key: i
        }, _react.default.createElement(_reactRouterDom.Link, {
          to: "#"
        }, _react.default.createElement("i", {
          className: "fa fa-menu-arrow pull-right"
        }), _react.default.createElement("i", {
          className: "main-icon fa fa-book"
        }), " ", _react.default.createElement("span", null, title)), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
          to: link_list
        }, "List")), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
          to: link_add
        }, "Add"))));
      });
      return _react.default.createElement("aside", {
        id: "aside"
      }, _react.default.createElement("nav", {
        id: "sideNav"
      }, _react.default.createElement("ul", {
        className: "nav nav-list"
      }, _react.default.createElement("li", {
        className: "active"
      }, _react.default.createElement(_reactRouterDom.Link, {
        className: "dashboard",
        to: "/"
      }, _react.default.createElement("i", {
        className: "main-icon fa fa-dashboard"
      }), " ", _react.default.createElement("span", null, "Dashboard"))), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "#"
      }, _react.default.createElement("i", {
        className: "fa fa-menu-arrow pull-right"
      }), _react.default.createElement("i", {
        className: "main-icon fa fa-book"
      }), " ", _react.default.createElement("span", null, "Pages")), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "page-invoice.html"
      }, "Invoice")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "page-login.html"
      }, "Login")))), modules), _react.default.createElement("h3", null, "MORE"), _react.default.createElement("ul", {
        className: "nav nav-list"
      }, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/install"
      }, _react.default.createElement("i", {
        className: "main-icon fa fa-gears"
      }), " ", _react.default.createElement("span", null, "Install"))), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/settings"
      }, _react.default.createElement("i", {
        className: "main-icon fa fa-code"
      }), " ", _react.default.createElement("span", null, "Settings"))))), _react.default.createElement("span", {
        id: "asidebg"
      }));
    }
  }]);

  return Menu;
}(_react.Component);

var _default = Menu;
exports.default = _default;