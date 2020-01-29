import React from 'react';
import { string, func } from 'prop-types';
import cx from 'classnames';
import Pill from '../Pill';
import Icon from '../Icon';
import Button from '../Button';
import TooltipWrapper from '../TooltipWrapper';

const DeleteablePill = ({ name, onRemove, warning, id }) => {
  const className = cx('h-margin-right-half h-margin-bottom-half', {
    'pill-input__pill--warning': warning
  });

  return (
    <TooltipWrapper id={`pill-input-pill-tooltip-${id}`} tooltipText={warning}>
      <Pill className={className}>
        <p className="h-margin-clear h-margin-right-half">{name}</p>
        <Button onClick={onRemove} types={['clear']}>
          <Icon name="cross" />
        </Button>
      </Pill>
    </TooltipWrapper>
  );
};

DeleteablePill.propTypes = {
  name: string.isRequired,
  id: string.isRequired,
  onRemove: func,
  warning: string
};

DeleteablePill.defaultProps = {
  onRemove: () => {},
  warning: null
};

export { DeleteablePill };
