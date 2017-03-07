'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loaderSVG = function loaderSVG(props) {
  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: '32',
      height: '32',
      fill: '#fff'
    }, props),
    _react2.default.createElement('path', {
      opacity: '.25',
      d: 'M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24'
    }),
    _react2.default.createElement(
      'path',
      {
        d: 'M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z'
      },
      _react2.default.createElement('animateTransform', {
        attributeName: 'transform',
        type: 'rotate',
        from: '0 16 16',
        to: '360 16 16',
        dur: '0.8s',
        repeatCount: 'indefinite'
      })
    )
  );
};

var ProgressButton = function (_Component) {
  _inherits(ProgressButton, _Component);

  function ProgressButton(props) {
    _classCallCheck(this, ProgressButton);

    var _this = _possibleConstructorReturn(this, (ProgressButton.__proto__ || Object.getPrototypeOf(ProgressButton)).call(this, props));

    _this.state = {
      showSpinner: false
    };

    _this.clickHandler = _this.clickHandler.bind(_this);
    return _this;
  }

  _createClass(ProgressButton, [{
    key: 'getSpinningState',
    value: function getSpinningState() {
      return _react2.default.createElement(
        'span',
        { className: 'progress-button__wrapper' },
        _react2.default.createElement(
          'span',
          { className: 'is-hidden' },
          this.props.value
        ),
        _react2.default.createElement(
          'span',
          { className: 'progress-button__icon' },
          loaderSVG()
        )
      );
    }
  }, {
    key: 'getNormalState',
    value: function getNormalState() {
      return _react2.default.createElement(
        'span',
        null,
        this.props.value
      );
    }
  }, {
    key: 'showSpinner',
    value: function showSpinner() {
      this.setState({ showSpinner: true });
    }
  }, {
    key: 'hideSpinner',
    value: function hideSpinner() {
      this.setState({ showSpinner: false });
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(e) {
      this.showSpinner();
      this.props.clickHandler(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var content = null;

      if (this.state.showSpinner) {
        content = this.getSpinningState();
      } else {
        content = this.getNormalState();
      }

      return _react2.default.createElement(
        _Button2.default,
        {
          types: [this.props.buttonType],
          clickHandler: this.clickHandler
        },
        content
      );
    }
  }]);

  return ProgressButton;
}(_react.Component);

ProgressButton.defaultProps = {
  buttonType: 'primary'
};
ProgressButton.propTypes = {
  buttonType: _react.PropTypes.string,
  clickHandler: _react.PropTypes.func.isRequired,
  value: _react.PropTypes.string.isRequired
};
exports.default = ProgressButton;