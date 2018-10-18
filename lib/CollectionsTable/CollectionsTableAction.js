import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CollectionsTableAction = props => (
  <Button
    className="collections-table__action"
    types={['icon-only']}
    clickHandler={props.onClick}
  >
    {props.children}
  </Button>
);

CollectionsTableAction.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CollectionsTableAction;
