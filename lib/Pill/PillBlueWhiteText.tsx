import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

function PillBlueWhiteText({
  className,
  children,
  ...rest
}: any) {
  return <PillBase
    className={`bg-blue-primary text-white font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
}

PillBlueWhiteText.propTypes = propTypes;

PillBlueWhiteText.defaultProps = defaultProps;

export default PillBlueWhiteText;
