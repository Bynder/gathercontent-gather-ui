import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillPurple = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-purple-90 text-purple-primary font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillPurple.propTypes = propTypes;

PillPurple.defaultProps = defaultProps;

export default PillPurple;
