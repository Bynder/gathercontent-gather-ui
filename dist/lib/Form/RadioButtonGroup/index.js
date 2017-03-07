"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonGroup = function RadioButtonGroup(props) {
  return _react2.default.createElement(
    "div",
    { className: "o-media-obj o-media-obj--radio" },
    _react2.default.createElement("input", {
      onChange: props.onChange,
      id: props.id,
      type: "radio",
      name: props.name
    }),
    _react2.default.createElement(
      "label",
      { htmlFor: props.id, className: "o-media-obj__info" },
      _react2.default.createElement(
        "span",
        { className: "o-media-obj__title" },
        props.title
      ),
      _react2.default.createElement(
        "span",
        { className: "o-media-obj__subtitle" },
        props.subtitle
      )
    )
  );
};

RadioButtonGroup.defaultProps = {
  subtitle: ''
};

RadioButtonGroup.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  name: _react2.default.PropTypes.string.isRequired,
  id: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  subtitle: _react2.default.PropTypes.string
};

exports.default = RadioButtonGroup;