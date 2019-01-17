"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RutkaUtils =
/*#__PURE__*/
function () {
  function RutkaUtils() {
    _classCallCheck(this, RutkaUtils);
  }

  _createClass(RutkaUtils, null, [{
    key: "moduleId",
    value: function moduleId(props) {
      return props.match.params.id;
    }
  }, {
    key: "getRecordI",
    value: function getRecordI(json, name, value) {
      for (var i = 0; i < json.length; i++) {
        if (json[i][name] === value) {
          return i;
        }
      }

      return -1;
    }
  }, {
    key: "moduleTitle",
    value: function moduleTitle(config, name) {
      var title = name;

      for (var i = 0; i < config.length; i++) {
        var el = config[i];

        if (el.name === name) {
          if ("config" in el) {
            title = el.config.name;
          }
        }
      }

      ;
      return title;
    }
  }, {
    key: "moduleConfig",
    value: function moduleConfig(config, name) {
      var i = this.getRecordI(config, "name", name);

      if (i !== -1) {
        return config[i].config;
      }

      return null;
    }
  }]);

  return RutkaUtils;
}();

var _default = RutkaUtils;
exports.default = _default;