import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillBlueWhiteText = ({
  className,
  children,
  ...rest
}: any) => (
  <PillBase
    className={`bg-blue-primary text-white font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillBlueWhiteText.propTypes = propTypes;

PillBlueWhiteText.defaultProps = defaultProps;

export default PillBlueWhiteText;
