import React from 'react';
import PropTypes from 'prop-types';

const StatusIndicator = props => 
  <span>
    <i className="fa fa-circle" style={{ color: props.color }}></i> { props.label }
    { props.children }
  </span>

StatusIndicator.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};

export default StatusIndicator;
