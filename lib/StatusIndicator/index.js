import React from 'react';
import PropTypes from 'prop-types';

const StatusIndicator = props =>
  <span className="status-indicator">
    <span
      className="status-indicator__circle"
      style={{ backgroundColor: props.color }}
    />
    <span className="status-indicator__label">{ props.label }</span>
    <span className="status-indicator__children">{ props.children }</span>
  </span>

StatusIndicator.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default StatusIndicator;
