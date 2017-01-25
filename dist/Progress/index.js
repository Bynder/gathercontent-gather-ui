'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _Unit = require('./Unit');

var _Unit2 = _interopRequireDefault(_Unit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = {
  Bar: _Bar2.default,
  Unit: _Unit2.default
};

exports.default = Progress;