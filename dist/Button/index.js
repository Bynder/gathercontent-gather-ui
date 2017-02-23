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

/**
 * @usage
 *
 * <Button
 *  types={['clear', 'collapsed']}
 *  clickHandler={() => {}}
 * >
 *   ...test goes here
 * </Button>
 */
var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this.state = {
      disabled: false
    };

    _this.handleOnClick = _this.handleOnClick.bind(_this);
    _this.getTypeClasses = _this.getTypeClasses.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleOnClick',
    value: function handleOnClick() {
      this.setState({ disabled: this.props.disableOnClick });
      this.props.clickHandler();
    }
  }, {
    key: 'getTypeClasses',
    value: function getTypeClasses() {
      return this.props.types.reduce(function (typeClasses, type) {
        return typeClasses + ' button--' + type;
      }, 'button');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'button',
        {
          disabled: disabled || this.state.disabled,
          onClick: this.handleOnClick,
          className: this.getTypeClasses() + ' ' + className
        },
        children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.defaultProps = {
  types: ['primary'],
  disableOnClick: false,
  disabled: false,
  className: ''
};
Button.propTypes = {
  children: _react.PropTypes.string.isRequired,
  clickHandler: _react.PropTypes.func.isRequired,
  types: _react.PropTypes.arrayOf(_react.PropTypes.string),
  disabled: _react.PropTypes.bool,
  disableOnClick: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
exports.default = Button;