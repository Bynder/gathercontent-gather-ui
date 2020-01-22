import React from 'react';
import { string, func } from 'prop-types';
import Pill from '../Pill';
import Icon from '../Icon';
import Button from '../Button';

const Item = ({ name, onRemove }) => {
  return (
    <Pill>
      {name}
      <Button onClick={onRemove}>
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
