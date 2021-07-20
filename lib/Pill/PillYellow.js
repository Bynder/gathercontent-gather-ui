import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillYellow = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-green-90 text-yellow-primary font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillYellow.propTypes = propTypes;

PillYellow.defaultProps = defaultProps;

export default PillYellow;
