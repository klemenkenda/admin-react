"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Auth = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, [{
    key: "login",
    value: function login(user, done, fail) {
      window._backend.login(user, done, fail);
    }
  }, {
    key: "isAuth",
    value: function isAuth() {
      if (localStorage.getItem("user")) return true;
      return false;
    }
  }, {
    key: "noAuthNeeded",
    value: function noAuthNeeded(path) {
      var allowed = ['/login'];
      if (allowed.includes(path)) return true;
      return false;
    }
  }]);

  return Auth;
}();

exports.Auth = Auth;
var _default = Auth;
exports.default = _default;