"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckToggle = function (_Component) {
  _inherits(CheckToggle, _Component);

  function CheckToggle(props) {
    _classCallCheck(this, CheckToggle);

    var _this = _possibleConstructorReturn(this, (CheckToggle.__proto__ || Object.getPrototypeOf(CheckToggle)).call(this, props));

    _this.onClickHandler = _this.onClickHandler.bind(_this);

    _this.state = {
      checked: props.checked
    };
    return _this;
  }

  _createClass(CheckToggle, [{
    key: "onClickHandler",
    value: function onClickHandler() {
      this.props.clickHandler();
      this.setState({ checked: !this.state.checked });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          labelLeft = _props.labelLeft,
          labelRight = _props.labelRight;


      return _react2.default.createElement(
        "div",
        { className: "toggle-wrapper toggle-wrapper--pricing" },
        _react2.default.createElement(
          "p",
          { className: "toggle-wrapper__label toggle-wrapper__label--on" },
          labelLeft
        ),
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement("input", {
            onChange: this.onClickHandler,
            checked: this.state.checked,
            type: "checkbox",
            id: "quick-view",
            className: "toggle-switch toggle-switch--inline ajax-quick-view"
          }),
          _react2.default.createElement("label", { className: "toggle-switch__label toggle-switch--pricing", htmlFor: "quick-view" })
        ),
        _react2.default.createElement(
          "p",
          { className: "toggle-wrapper__label" },
          labelRight,
          _react2.default.createElement(
            "small",
            { className: "toggle-wrapper__annual" },
            "(2 months free)"
          )
        )
      );
    }
  }]);

  return CheckToggle;
}(_react.Component);

CheckToggle.propTypes = {
  checked: _react.PropTypes.bool,
  clickHandler: _react.PropTypes.func,
  labelLeft: _react.PropTypes.string,
  labelRight: _react.PropTypes.string
};

CheckToggle.defaultProps = {
  labelLeft: null,
  labelRight: null,
  clickHandler: null,
  checked: false
};

exports.default = CheckToggle;