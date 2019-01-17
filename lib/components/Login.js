"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this));

    _this.handleSubmit = function (event) {
      event.preventDefault();

      window._auth.login(_this.state.user, function () {
        _this.setState({
          message: ""
        });

        _this.props.history.push("/");
      }, function (message) {
        _this.setState({
          message: message
        });
      });
    };

    _this.handleChange = function (event) {
      var target = event.target;

      if (target instanceof HTMLInputElement) {
        var field = target.id;
        var value = target.type === 'checkbox' ? target.checked : target.value; // update

        _this.setState(function (prev_state) {
          prev_state.user[field] = value;
          return prev_state;
        });
      }
    };

    _this.state = {
      user: {
        username: "",
        password: "",
        remember: true
      },
      message: ""
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "padding-15"
      }, _react.default.createElement("div", {
        className: "login-box"
      }, _react.default.createElement("form", {
        className: "sky-form boxed",
        onSubmit: this.handleSubmit
      }, _react.default.createElement("header", null, _react.default.createElement("i", {
        className: "fa fa-users"
      }), " Prijava"), _react.default.createElement("fieldset", null, _react.default.createElement("section", null, _react.default.createElement("label", {
        className: "label"
      }, "Uporabni\u0161ko ime"), _react.default.createElement("label", {
        className: "input"
      }, _react.default.createElement("i", {
        className: "icon-append fa fa-user"
      }), _react.default.createElement("input", {
        type: "text",
        id: "username",
        value: this.state.user.username,
        onChange: this.handleChange
      }), _react.default.createElement("span", {
        className: "tooltip tooltip-top-right"
      }, "Vpi\u0161i uporabni\u0161ko ime"))), _react.default.createElement("section", null, _react.default.createElement("label", {
        className: "label"
      }, "Geslo"), _react.default.createElement("label", {
        className: "input"
      }, _react.default.createElement("i", {
        className: "icon-append fa fa-lock"
      }), _react.default.createElement("input", {
        type: "password",
        id: "password",
        value: this.state.user.password,
        onChange: this.handleChange
      }), _react.default.createElement("b", {
        className: "tooltip tooltip-top-right"
      }, "Vpi\u0161i geslo")), _react.default.createElement("label", {
        className: "checkbox"
      }, _react.default.createElement("input", {
        type: "checkbox",
        id: "remember",
        checked: this.state.user.remember,
        onChange: this.handleChange
      }), _react.default.createElement("i", null), "Permanentna prijava"))), _react.default.createElement("footer", null, _react.default.createElement("button", {
        type: "submit",
        className: "btn btn-primary pull-right"
      }, "Prijava"), _react.default.createElement("div", {
        className: "forgot-password pull-left"
      })))));
    }
  }]);

  return Login;
}(_react.Component);

var _default = Login;
exports.default = _default;