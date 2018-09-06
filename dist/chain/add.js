'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var noop = function noop(result) {
  return result;
};

exports.default = function (methods) {
  return function (fns) {
    return function (fn) {
      var validator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      fns.push([fn, validator]);
      return methods;
    };
  };
};