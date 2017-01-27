'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Title = require('./Heading/Title');

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = {
  Column: _Column2.default,
  Heading: _Heading2.default,
  HeadingTitle: _Title2.default
};

exports.default = Table;