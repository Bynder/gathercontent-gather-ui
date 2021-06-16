import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillGreenWhiteText = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-green-primary text-white font-semi-bold inherit-color-icon ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillGreenWhiteText.propTypes = propTypes;

PillGreenWhiteText.defaultProps = defaultProps;

export default PillGreenWhiteText;
