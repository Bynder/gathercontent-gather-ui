import React from 'react';
import { types, defaults } from './pillTypes';
import PillBase from './PillBase';

const PillDefault = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-neutral-90 text-neutral-2 border-neutral-90 ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillDefault.propTypes = types;

PillDefault.defaultProps = defaults;

export default PillDefault;
