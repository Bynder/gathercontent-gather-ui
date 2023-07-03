import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

function PillYellow({
  className,
  children,
  ...rest
}: any) {
  return <PillBase
    className={`bg-yellow-primary text-neutral-20 font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
}

PillYellow.propTypes = propTypes;

PillYellow.defaultProps = defaultProps;

export default PillYellow;
