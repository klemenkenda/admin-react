"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Title = _interopRequireDefault(require("./Title"));

var _Fields = _interopRequireDefault(require("./Fields"));

var _Utils = _interopRequireDefault(require("../lib/Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * Install component.
 */
var Add =
/*#__PURE__*/
function (_Component) {
  _inherits(Add, _Component);

  function Add() {
    _classCallCheck(this, Add);

    return _possibleConstructorReturn(this, _getPrototypeOf(Add).apply(this, arguments));
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      var module = _Utils.default.moduleId(this.props);

      var title = _Utils.default.moduleTitle(this.props.config, module);

      var config = _Utils.default.moduleConfig(this.props.config, module); // extract fields


      var fields = [];

      if (config != null) {
        fields = config.config[0].fields;
      }

      var links = [{
        name: "Dashboard",
        url: "/"
      }, {
        name: title,
        url: "/view/" + module
      }, {
        name: "Add"
      }];
      var title_name = "Add Record - " + title;
      return _react.default.createElement("div", null, _react.default.createElement(_Title.default, {
        name: title_name,
        links: JSON.stringify(links)
      }), _react.default.createElement("form", {
        className: "validate",
        action: "php/contact.php",
        method: "post",
        encType: "multipart/form-data",
        "data-success": "Sent! Thank you!",
        "data-toastr-position": "top-right"
      }, _react.default.createElement("div", {
        id: "content",
        className: "padding-20"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-md-9 col-sm-12"
      }, _react.default.createElement(_Fields.default, {
        fields: fields
      })), _react.default.createElement("div", {
        className: "col-md-3 col-sm-12"
      }, _react.default.createElement("div", {
        className: "panel panel-default"
      }, _react.default.createElement("div", {
        className: "panel-body"
      }, _react.default.createElement("input", {
        type: "submit",
        className: "btn btn-3d btn-dirtygreen btn-block",
        value: "Submit"
      }), _react.default.createElement("input", {
        type: "submit",
        className: "btn btn-3d btn-purple btn-block",
        value: "Submit & edit"
      }), _react.default.createElement("input", {
        type: "submit",
        className: "btn btn-3d btn-red btn-block",
        value: "Discard"
      }))))))));
    }
  }]);

  return Add;
}(_react.Component);

var _default = Add;
exports.default = _default;