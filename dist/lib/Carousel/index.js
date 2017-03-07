'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slides = require('./Slides');

var _Slides2 = _interopRequireDefault(_Slides);

var _navigation = require('./composition/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.mapPropsToChild = _this.mapPropsToChild.bind(_this);
    return _this;
  }

  _createClass(Carousel, [{
    key: 'mapPropsToChild',
    value: function mapPropsToChild(child) {
      return _react2.default.cloneElement(child, {
        goNext: this.props.goNext,
        goPrevious: this.props.goPrevious
      });
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      return _react2.default.Children.map(this.props.children, function (child) {
        return _this2.mapPropsToChild(child);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Slides2.default,
        {
          selected: this.props.selected,
          goToSlide: this.props.goToSlide,
          className: 'carousel ' + this.props.className
        },
        this.renderChildren()
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired,
  className: _react.PropTypes.string,
  goNext: _react.PropTypes.func.isRequired,
  goPrevious: _react.PropTypes.func.isRequired,
  goToSlide: _react.PropTypes.func.isRequired,
  selected: _react.PropTypes.number.isRequired
};
Carousel.defaultProps = {
  className: ''
};
exports.default = (0, _navigation2.default)(Carousel);