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

// subcomponents
// data models
// type definitions

/**
 * Install component.
 */
var Template =
/*#__PURE__*/
function (_Component) {
  _inherits(Template, _Component);

  function Template(props, state) {
    var _this;

    _classCallCheck(this, Template);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Template).call(this, props));
    _this.state = {
      installed: props.data.installed
    };
    return _this;
  }

  _createClass(Template, [{
    key: "render",
    value: function render() {
      console.log(this.state.installed);
      var title = this.props.data.config ? this.props.data.config.name : "";
      var description = this.props.data.config ? this.props.data.config.description : "";
      if (description === "") description = "No description available ...";
      return _react.default.createElement("div", {
        id: "panel-misc-portlet-r8",
        className: "panel panel-default"
      }, _react.default.createElement("div", {
        className: "panel-heading"
      }, _react.default.createElement("span", {
        className: "elipsis"
      }, _react.default.createElement("strong", null, title, " (", this.props.data.name, ")")), _react.default.createElement("ul", {
        className: "options pull-right relative list-unstyled"
      }, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#",
        className: "dropdown-toggle",
        "data-toggle": "dropdown"
      }, _react.default.createElement("span", {
        className: this.state.installed ? "label label-success" : "label label-danger"
      }, "Status ", _react.default.createElement("span", {
        className: "caret"
      }))), _react.default.createElement("ul", {
        className: "dropdown-menu pull-right",
        role: "menu"
      }, _react.default.createElement("li", null, _react.default.createElement("a", {
        "data-portlet": "color_status_switch",
        "data-action": "path_to_chat.php?status=online",
        "data-method": "GET",
        href: "#label-success"
      }, _react.default.createElement("i", {
        className: "fa fa-dot-circle-o color-green"
      }), " Install")), _react.default.createElement("li", null, _react.default.createElement("a", {
        "data-portlet": "color_status_switch",
        "data-action": "path_to_chat.php?status=busy",
        "data-method": "GET",
        href: "#label-danger"
      }, _react.default.createElement("i", {
        className: "fa fa-dot-circle-o color-red"
      }), " Broken")), _react.default.createElement("li", null, _react.default.createElement("a", {
        "data-portlet": "color_status_switch",
        "data-action": "path_to_chat.php?status=away",
        "data-method": "GET",
        href: "#label-warning"
      }, _react.default.createElement("i", {
        className: "fa fa-dot-circle-o color-yellow"
      }), " Detach")), _react.default.createElement("li", null, _react.default.createElement("a", {
        "data-portlet": "color_status_switch",
        "data-action": "path_to_chat.php?status=offline",
        "data-method": "GET",
        href: "#label-disabled"
      }, _react.default.createElement("i", {
        className: "fa fa-dot-circle-o color-gray"
      }), " Uninstall")))))), _react.default.createElement("div", {
        className: "panel-body"
      }, _react.default.createElement("p", null, description), _react.default.createElement("b", null, "Integrity:"), "\xA0", _react.default.createElement("span", {
        className: this.props.data.integrity.create ? "label label-success" : "label label-danger"
      }, "Create"), "\xA0", _react.default.createElement("span", {
        className: this.props.data.integrity.destroy ? "label label-success" : "label label-danger"
      }, "Destroy"), "\xA0", _react.default.createElement("span", {
        className: this.props.data.integrity.data ? "label label-success" : "label label-danger"
      }, "Initial data"), "\xA0", _react.default.createElement("span", {
        className: this.props.data.integrity.config ? "label label-success" : "label label-danger"
      }, "Admin config")));
    }
  }]);

  return Template;
}(_react.Component);

var _default = Template;
exports.default = _default;