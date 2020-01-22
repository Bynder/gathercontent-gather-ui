import React from 'react';
import { string, func } from 'prop-types';
import Pill from '../Pill';
import Icon from '../Icon';
import Button from '../Button';

const Item = ({ name, onRemove }) => {
  return (
    <Pill className="h-margin-right-half h-margin-half">
      <p className="h-margin-clear h-margin-right-half">{name}</p>
      <Button onClick={onRemove} types={['clear']}>
        <Icon name="cross" />
      </Button>
    </Pill>
  );
};

Item.propTypes = {
  name: string.isRequired,
  onRemove: func
};

Item.defaultProps = {
  onRemove: () => {}
};

export { Item };
