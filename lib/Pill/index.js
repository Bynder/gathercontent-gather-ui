import React from 'react';
import { string } from 'prop-types';
import { types, defaults } from './pillTypes';
import PillDefault from './PillDefault';
import PillRed from './PillRed';
import PillGreen from './PillGreen';

const Pill = ({ type, children, ...rest }) => {
  const getPill = () => {
    switch (type) {
      case Pill.types.red:
        return PillRed;
      case Pill.types.green:
        return PillGreen;
      default:
        return PillDefault;
    }
  };
  const PillType = getPill();

  return <PillType {...rest}>{children}</PillType>;
};

Pill.propTypes = {
  ...types,
  type: string
};

Pill.defaultProps = {
  ...defaults,
  type: 'default'
};

Pill.types = {
  default: 'default',
  red: 'red',
  green: 'green'
};

export default Pill;
