"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Backend object to communicate with REST API.
 */
var Backend =
/*#__PURE__*/
function () {
  function Backend(endpoint) {
    _classCallCheck(this, Backend);

    this.endpoint = endpoint;
  }
  /**
   * Return request string.
   *
   * @param {string} type
   * @param {string} functionStr
   * @param {json} parameters
   */


  _createClass(Backend, [{
    key: "request",
    value: function request(type, functionStr, parameters) {
      console.log(this.endpoint);
      var url = this.endpoint + "/" + functionStr;
      var paramStr = "";

      for (var param in parameters) {
        if (paramStr.length !== 0) paramStr += "&";
        paramStr += param + "=" + parameters[param];
      }

      if (paramStr.length === 0) return url;
      return url + "?" + paramStr;
    }
    /**
     * Login user with user/password.
     *
     * @param {LoginUserObj} user Username, password and permanent login info.
     */

  }, {
    key: "login",
    value: function login(user, done, fail) {
      var url = this.request("GET", "login", {
        user: user.username,
        password: user.password
      });

      _axios.default.get(url).then(function (res) {
        // check if user was authenticated
        var data = res.data;

        if ("status" in data) {
          console.log("Login failed!");
          fail();
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          console.log("Login OK!");
          done();
        }
      });
    }
    /**
     * Get modules data.
     *
     * @param {function} done
     * @param {function} fail
     */

  }, {
    key: "getModules",
    value: function getModules(done, fail) {
      var url = this.request("GET", "modules");

      _axios.default.get(url).then(function (res) {
        console.log(res.data);
        done(res.data);
      });
    }
    /**
     * Test call to proxied API server, which is available in the /api/* URL.
     *
     * @param {function} done
     * @param {function} fail
     */

  }, {
    key: "getTest",
    value: function getTest(done, fail) {
      var url = "/api/index.html";

      _axios.default.get(url).then(function (res) {
        done(res.data);
      });
    }
  }]);

  return Backend;
}();

var _default = Backend;
exports.default = _default;