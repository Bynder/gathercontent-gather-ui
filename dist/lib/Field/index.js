'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(props) {
  var actions = props.actions.map(function (action) {
    return _react2.default.createElement(
      'button',
      { onClick: action.clickHandler },
      action.text
    );
  });

  var validation = props.validations.map(function (action) {
    var cssClass = action.hasFailed ? 'has-failed' : '';

    return _react2.default.createElement(
      'span',
      { className: cssClass },
      action.text
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'field' },
    _react2.default.createElement(
      'div',
      { className: 'grid' },
      _react2.default.createElement(
        'div',
        { className: 'grid__cell grid__cell--1-3' },
        _react2.default.createElement(
          'div',
          { className: 'field__label' },
          props.label
        ),
        _react2.default.createElement(
          'div',
          { className: 'field__actions' },
          actions
        ),
        _react2.default.createElement(
          'div',
          { className: 'field__validation' },
          validation
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'grid__cell grid__cell--2-3' },
        _react2.default.createElement(
          'div',
          { className: 'field__content' },
          props.children
        ),
        _react2.default.createElement(
          'div',
          { className: 'field__guidelines' },
          props.guidelines
        )
      )
    )
  );
};

exports.default = Field;