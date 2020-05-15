import React from 'react';
import { string, func } from 'prop-types';
import Pill from '../Pill';
import Icon from '../Icon';
import Button from '../Button';
import TooltipWrapper from '../TooltipWrapper';

const DeleteablePill = ({ name, onRemove, warning, id }) => {
  const pillType = warning ? Pill.types.red : Pill.types.default;
  return (
    <TooltipWrapper id={`pill-input-pill-tooltip-${id}`} tooltipText={warning}>
      <Pill className="mr-1 mb-1" type={pillType}>
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
