'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _lib = require('react-bootstrap/lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @usage
 *
 * <ButtonWithTooltip
 *  types={['clear', 'collapsed']}
 *  clickHandler={() => {}}
 *  tooltipText="text here"
 * >
 *   ...test goes here
 * </ButtonWithTooltip>
 */
var ButtonWithTooltip = function ButtonWithTooltip(props) {
  var tooltip = _react2.default.createElement(
    _lib.Tooltip,
    { id: Math.random() },
    _react2.default.createElement(
      'div',
      { className: 'tooltip--' + props.tooltipSize },
      props.tooltipText
    )
  );

  return _react2.default.createElement(
    _lib.OverlayTrigger,
    {
      placement: props.tooltipPosition,
      overlay: tooltip
    },
    _react2.default.createElement(
      'span',
      { className: 'button--has-tooltip' },
      _react2.default.createElement(
        _index2.default,
        props,
        props.children,
        _react2.default.createElement(
          'span',
          { className: 'button__helper' },
          '?'
        )
      )
    )
  );
};

ButtonWithTooltip.defaultProps = {
  tooltipPosition: 'bottom'
};

ButtonWithTooltip.propTypes = {
  tooltipText: _react.PropTypes.string,
  tooltipSize: _react.PropTypes.string,
  tooltipPosition: _react.PropTypes.string,
  children: _react.PropTypes.string
};

exports.default = ButtonWithTooltip;