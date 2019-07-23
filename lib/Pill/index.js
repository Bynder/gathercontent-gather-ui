import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ className, children, ...rest }) => {
  return (
    <span className={`pill ${className}`} {...rest}>
      {children}
    </span>
  );
};

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Pill.defaultProps = {
  className: ''
};

export default Pill;
