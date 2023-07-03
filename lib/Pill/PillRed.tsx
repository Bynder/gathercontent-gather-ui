import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillRed = ({
  className,
  children,
  ...rest
}: any) => (
  <PillBase
    className={`bg-red-95 border-2 border-solid border-red-primary text-red-primary inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillRed.propTypes = propTypes;
PillRed.defaultProps = defaultProps;

export default PillRed;
