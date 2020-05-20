import React from 'react';
import { types, defaults } from './common';

const PillBase = ({ className, children, ...rest }) => (
  <span
    className={`pill inline-flex items-center py-1 px-3 rounded ${className}`}
    {...rest}
  >
    {children}
  </span>
);

PillBase.propTypes = types;

PillBase.defaultProps = defaults;

export default PillBase;
