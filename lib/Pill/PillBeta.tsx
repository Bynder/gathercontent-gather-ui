import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

export function PillBeta({ className, children, ...rest }) {
  return (
    <PillBase
      className={`bg-purple-60 text-white font-semi-bold inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillBeta.propTypes = propTypes;

PillBeta.defaultProps = defaultProps;
