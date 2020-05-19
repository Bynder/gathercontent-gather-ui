import React from 'react';
import { types, defaults } from './pillTypes';
import PillBase from './PillBase';

const PillGreen = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-green-90 text-green-primary font-semi-bold ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillGreen.propTypes = types;

PillGreen.defaultProps = defaults;

export default PillGreen;
