'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  _createClass(Button, null, [{
    key: 'getClassName',
    value: function getClassName(type) {
      switch (type) {
        case 'primary':
          return 'btn btn--primary';
        case 'secondary':
          return 'btn btn--secondary';
        case 'danger':
          return 'btn btn--warning';
        case 'link':
          return 'btn btn--link';
        case 'clear':
          return 'btn btn--clear';
        case 'clear-and-collapsed':
          return 'btn btn--clear btn--collapsed';
        case 'neutral':
        default:
          return 'btn btn-default--light';
      }
    }
  }]);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.state = {
      disabled: false
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      this.setState({ disabled: this.props.disableOnClick });
      this.props.clickHandler();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          type = _props.type,
          className = _props.className,
          disable = _props.disable;

      var classes = [Button.getClassName(type), className].join(' ').trim();

      return _react2.default.createElement(
        'button',
        { disabled: disable || this.state.disabled, onClick: this.handleOnClick, className: classes },
        value
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.defaultProps = {
  type: 'primary',
  enabled: true,
  value: '',
  disableOnClick: false
};

Button.propTypes = {
  value: _react.PropTypes.string,
  className: _react.PropTypes.string,
  type: _react.PropTypes.string,
  clickHandler: _react.PropTypes.func,
  disable: _react.PropTypes.bool,
  disableOnClick: _react.PropTypes.bool
};

exports.default = Button;