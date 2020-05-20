import React from 'react';
import { bool } from 'prop-types';
import { ButtonSecondary } from '../ButtonNew/ButtonSecondary/ButtonSecondary';
import Icon from '../Icon';

export function FieldRepeatButton({ repeatLimitReached }) {
  if (repeatLimitReached) {
    return <ButtonSecondary disabled>Limit reached</ButtonSecondary>;
  }

  return (
    <ButtonSecondary>
      <Icon name="plus" />
      <span className="w-2" />
      Add another
    </ButtonSecondary>
  );
}

FieldRepeatButton.propTypes = {
  repeatLimitReached: bool
};

FieldRepeatButton.defaultProps = {
  repeatLimitReached: false
};
