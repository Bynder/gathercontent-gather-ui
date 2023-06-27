import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillGreen = ({
  className,
  children,
  ...rest
}: any) => (
  <PillBase
    className={`bg-green-90 text-green-primary font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillGreen.propTypes = propTypes;

PillGreen.defaultProps = defaultProps;

export default PillGreen;
