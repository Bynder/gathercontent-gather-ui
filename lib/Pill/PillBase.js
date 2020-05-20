import React from 'react';
import { propTypes, defaultProps } from './common';

const PillBase = ({ className, children, ...rest }) => (
  <span
    className={`pill inline-flex items-center py-1 px-3 rounded ${className}`}
    {...rest}
  >
    {children}
  </span>
);

PillBase.propTypes = propTypes;

PillBase.defaultProps = defaultProps;

export default PillBase;
