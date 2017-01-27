'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slides = require('./Slides');

var _Slides2 = _interopRequireDefault(_Slides);

var _navigation = require('./composition/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel = function Carousel(props) {
  return _react2.default.createElement(
    _Slides2.default,
    {
      showIndicators: true,
      selected: props.selected,
      goToSlide: props.goToSlide,
      className: 'gc-carousel ' + props.className
    },
    props.children
  );
};

exports.default = (0, _navigation2.default)(Carousel);