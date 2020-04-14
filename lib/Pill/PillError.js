import React from 'react';
import { types, defaults } from './pillTypes';
import PillBase from './PillBase';

const PillError = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-red-95 border-2 border-solid border-red-primary text-red-primary inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillError.propTypes = types;
PillError.defaultProps = defaults;

export default PillError;
