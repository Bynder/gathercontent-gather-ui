import React from 'react';
import { types, defaults } from './pillTypes';

const PillBase = ({ className, children, ...rest }) => (
  <span
    className={`pill inline-flex items-center py-quarter px-half rounded ${className}`}
    {...rest}
  >
    {children}
  </span>
);

PillBase.propTypes = types;

PillBase.defaultProps = defaults;

export default PillBase;
