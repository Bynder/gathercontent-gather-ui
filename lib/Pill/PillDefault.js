import React from 'react';
import { propTypes, defaultProps } from './common';
import PillBase from './PillBase';

const PillDefault = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-neutral-90 text-neutral-2 border-neutral-90 ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillDefault.propTypes = propTypes;

PillDefault.defaultProps = defaultProps;

export default PillDefault;
