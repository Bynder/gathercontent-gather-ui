import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillYellow = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-yellow-primary text-neutral-20 font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillYellow.propTypes = propTypes;

PillYellow.defaultProps = defaultProps;

export default PillYellow;
