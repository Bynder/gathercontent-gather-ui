import React from 'react';
import { bool, func } from 'prop-types';
import { ButtonSecondary } from '../ButtonNew/ButtonSecondary/ButtonSecondary';
import Icon from '../Icon';
import { FieldMainColumn } from './FieldMainColumn';

export function FieldRepeatButton({ repeatLimitReached, onClick }) {
  const button = repeatLimitReached ? (
    <ButtonSecondary disabled>Limit reached</ButtonSecondary>
  ) : (
    <ButtonSecondary onClick={onClick}>
      <Icon name="plus" />
      <span className="w-2" />
      Add another
    </ButtonSecondary>
  );

  return <FieldMainColumn>{button}</FieldMainColumn>;
}

FieldRepeatButton.propTypes = {
  repeatLimitReached: bool,
  onClick: func.isRequired
};

FieldRepeatButton.defaultProps = {
  repeatLimitReached: false
};