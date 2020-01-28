import React from 'react';
import { number, string, func } from 'prop-types';
import cx from 'classnames';
import Pill from '../Pill';
import Icon from '../Icon';
import Button from '../Button';
import TooltipWrapper from '../TooltipWrapper';

const Item = ({ name, onRemove, warning, id }) => {
  const className = cx('h-margin-right-half h-margin-bottom-half', {
    'item-input__item--warning': warning
  });

  return (
    <TooltipWrapper id={`item-input-item-tooltip-${id}`} tooltipText={warning}>
      <Pill className={className}>
        <p className="h-margin-clear h-margin-right-half">{name}</p>
        <Button onClick={onRemove} types={['clear']}>
          <Icon name="cross" />
        </Button>
      </Pill>
    </TooltipWrapper>
  );
};

Item.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
  onRemove: func,
  warning: string
};

Item.defaultProps = {
  onRemove: () => {},
  warning: null
};

export { Item };
