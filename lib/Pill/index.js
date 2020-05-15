import React from 'react';
import { string } from 'prop-types';
import { types, defaults } from './pillTypes';
import PillDefault from './PillDefault';
import PillRed from './PillRed';
import PillGreen from './PillGreen';

const Pill = ({ type, children, ...rest }) => {
  const getPill = () => {
    switch (type) {
      case 'red':
        return PillRed;
      case 'green':
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

export default Pill;
