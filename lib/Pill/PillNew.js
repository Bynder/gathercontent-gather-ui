import React from 'react';
import { types, defaults } from './pillTypes';
import PillBase from './PillBase';

const PillNew = ({ className, children, ...rest }) => (
  <PillBase
    className={`bg-green-90 text-green-primary font-semi-bold ${className}`}
    {...rest}
  >
    {children}
  </PillBase>
);

PillNew.propTypes = types;

PillNew.defaultProps = defaults;

export default PillNew;
