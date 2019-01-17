"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Install = _interopRequireDefault(require("./Install"));

var _Menu = _interopRequireDefault(require("./Menu"));

var _HeaderTop = _interopRequireDefault(require("./HeaderTop"));

var _Add = _interopRequireDefault(require("./Add"));

var _Dashboard = _interopRequireDefault(require("./Dashboard"));

var _Logout = _interopRequireDefault(require("./Logout"));

var _Backend = _interopRequireDefault(require("../lib/Backend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// type definitions
// backend and authorization class instantiation to global variables
window._backend = new _Backend.default("http://192.168.99.100/api");
/**
 * Main app container.
 */

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      config: []
    };
    return _this;
  }
  /**
   * Load configuration.
   */


  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window._backend.getModules(function (data) {
        _this2.setState({
          config: data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement("div", {
        id: "wrapper"
      }, _react.default.createElement(_Menu.default, {
        config: this.state.config
      }), _react.default.createElement(_HeaderTop.default, {
        config: this.state.config
      }), _react.default.createElement("section", {
        id: "middle"
      }, [_react.default.createElement(_reactRouterDom.Route, {
        path: "/",
        exact: true,
        component: _Dashboard.default,
        key: "1"
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/logout",
        exact: true,
        component: _Logout.default,
        key: "3"
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/install",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Install.default, _extends({}, props, {
            config: _this3.state.config
          }));
        },
        key: "4"
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/add/:id",
        exact: true,
        render: function render(props) {
          return _react.default.createElement(_Add.default, _extends({}, props, {
            config: _this3.state.config
          }));
        },
        key: "5"
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/list/:id",
        exact: true,
        component: _Add.default,
        key: "6"
      })]));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;