import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

function PillGreenWhiteText({
  className,
  children,
  ...rest
}: any) {
  return <PillBase
    className={`bg-green-primary text-white font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
}

PillGreenWhiteText.propTypes = propTypes;

PillGreenWhiteText.defaultProps = defaultProps;

export default PillGreenWhiteText;
