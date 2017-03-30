'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _ = require('../');

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
    _reactBootstrap.Tooltip,
    { id: Math.random() },
    _react2.default.createElement(
      'div',
      { className: 'tooltip--' + props.tooltipSize },
      props.tooltipText
    )
  );

  return _react2.default.createElement(
    _reactBootstrap.OverlayTrigger,
    {
      placement: props.tooltipPosition,
      overlay: tooltip
    },
    _react2.default.createElement(
      'span',
      { className: 'button--has-tooltip' },
      _react2.default.createElement(
        _.Button,
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
  tooltipPosition: 'bottom',
  tooltipSize: ''
};

ButtonWithTooltip.propTypes = {
  tooltipText: _react.PropTypes.string.isRequired,
  tooltipSize: _react.PropTypes.string,
  tooltipPosition: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired
};

exports.default = ButtonWithTooltip;