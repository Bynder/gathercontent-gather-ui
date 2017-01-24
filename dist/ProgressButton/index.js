'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSvgInline = require('react-svg-inline');

var _reactSvgInline2 = _interopRequireDefault(_reactSvgInline);

var _loader = require('./../../assets/icons/loader.svg');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressButton = function (_React$Component) {
  _inherits(ProgressButton, _React$Component);

  _createClass(ProgressButton, null, [{
    key: 'getClassName',
    value: function getClassName(type) {
      var defaultClass = 'spinner-button';

      switch (type) {
        case 'primary':
          return defaultClass + ' btn btn--primary';
        case 'secondary':
          return defaultClass + ' btn btn--neutral';
        case 'danger':
          return defaultClass + ' btn btn--warning';
        default:
          return ' btn btn--primary';
      }
    }
  }]);

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
    key: 'getSpinningValue',
    value: function getSpinningValue() {
      return _react2.default.createElement(
        'span',
        { className: 'progress-button__spinner' },
        _react2.default.createElement(
          'span',
          { className: 'hide-button' },
          this.props.value
        ),
        _react2.default.createElement(_reactSvgInline2.default, { className: 'progress-button__spinner-icon', svg: _loader2.default })
      );
    }
  }, {
    key: 'getNormalValue',
    value: function getNormalValue() {
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
      var _props = this.props,
          type = _props.type,
          buttonType = _props.buttonType;

      var classes = ProgressButton.getClassName(type);
      var content = null;

      if (this.state.showSpinner) {
        content = this.getSpinningValue();
      } else {
        content = this.getNormalValue();
      }

      return _react2.default.createElement(
        'button',
        { type: buttonType, onClick: this.clickHandler, className: classes },
        content
      );
    }
  }]);

  return ProgressButton;
}(_react2.default.Component);

ProgressButton.defaultProps = {
  type: 'primary',
  value: '',
  spinnerClasses: 'ajax-spinner',
  alt: 'Working...',
  buttonType: 'submit'
};

ProgressButton.propTypes = {
  value: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  buttonType: _react2.default.PropTypes.string,
  spinnerClasses: _react2.default.PropTypes.string,
  clickHandler: _react2.default.PropTypes.func
};

exports.default = ProgressButton;