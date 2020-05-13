import React from 'react';
import { string } from 'prop-types';
import { types, defaults } from './pillTypes';
import PillDefault from './PillDefault';
import PillError from './PillError';
import PillNew from './PillNew';

const Pill = ({ type, children, ...rest }) => {
  const getPill = () => {
    switch (type) {
      case 'error':
        return PillError;
      case 'new':
        return PillNew;
      case 'default':
        return PillDefault;
      default:
        return null;
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
