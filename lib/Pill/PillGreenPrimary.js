import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillGreenPrimary = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-green-primary text-white font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillGreenPrimary.propTypes = propTypes;

PillGreenPrimary.defaultProps = defaultProps;

export default PillGreenPrimary;
