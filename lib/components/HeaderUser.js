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

// subcomponents
// data models

/**
 * User menu in the header.
 */
var HeaderUser =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderUser, _Component);

  function HeaderUser() {
    var _this;

    _classCallCheck(this, HeaderUser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderUser).call(this));
    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(HeaderUser, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var user = JSON.parse(localStorage.getItem("user"));

      if (user != null) {
        this.setState({
          name: user["name"]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("nav", null, _react.default.createElement("ul", {
        className: "nav pull-right"
      }, _react.default.createElement("li", {
        className: "dropdown pull-left"
      }, _react.default.createElement(_reactRouterDom.Link, {
        to: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown",
        "data-hover": "dropdown",
        "data-close-others": "true"
      }, _react.default.createElement("img", {
        className: "user-avatar",
        alt: "",
        src: "assets/images/noavatar.jpg",
        height: "34"
      }), _react.default.createElement("span", {
        className: "user-name"
      }, _react.default.createElement("span", {
        className: "hidden-xs"
      }, this.state.name, " ", _react.default.createElement("i", {
        className: "fa fa-angle-down"
      })))), _react.default.createElement("ul", {
        className: "dropdown-menu hold-on-click"
      }, _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/settings",
        className: "test"
      }, _react.default.createElement("i", {
        className: "fa fa-cogs"
      }), " Settings")), _react.default.createElement("li", {
        className: "divider"
      }), _react.default.createElement("li", null, _react.default.createElement(_reactRouterDom.Link, {
        to: "/logout"
      }, _react.default.createElement("i", {
        className: "fa fa-power-off"
      }), " Log Out"))))));
    }
  }]);

  return HeaderUser;
}(_react.Component);

var _default = HeaderUser;
exports.default = _default;