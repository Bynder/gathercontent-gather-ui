import React from 'react';
import { oneOf } from 'prop-types';
import { propTypes, defaultProps, types, sizes } from './common';
import PillDefault from './PillDefault';
import PillRed from './PillRed';
import PillGreen from './PillGreen';

const Pill = ({ type, children, ...rest }) => {
  const getPill = () => {
    switch (type) {
      case types.red:
        return PillRed;
      case types.green:
        return PillGreen;
      default:
        return PillDefault;
    }
  };
  const PillType = getPill();

  return <PillType {...rest}>{children}</PillType>;
};

Pill.propTypes = {
  ...propTypes,
  type: oneOf(Object.keys(types))
};

Pill.defaultProps = {
  ...defaultProps,
  type: types.default
};

Pill.types = types;

Pill.sizes = sizes;

export default Pill;
