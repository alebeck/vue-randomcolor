"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
* vue-randomcolor
* 
* Author: Alexander Becker
*/
var randomColor = require('randomcolor');

var _default = {
  install: function install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $randomColor: {
        get: function get() {
          return randomColor;
        }
      }
    });
  }
};
exports.default = _default;