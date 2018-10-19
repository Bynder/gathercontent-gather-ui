import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { defaultProps, propTypes } from './';

const CollectionsTableAction = ({ onClick, className, types, children }) => (
  <Button
    className={`collections-table__action ${className}`}
    types={types}
    clickHandler={onClick}
  >
    {children}
  </Button>
);

CollectionsTableAction.propTypes = {
  ...propTypes,
  types: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
};

CollectionsTableAction.defaultProps = {
  ...defaultProps,
  types: ['icon-only']
};

export default CollectionsTableAction;
