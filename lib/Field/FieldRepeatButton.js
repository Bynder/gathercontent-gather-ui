import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { ButtonSecondary } from '../ButtonNew/ButtonSecondary/ButtonSecondary';
import Icon from '../Icon';
import { FieldMainColumn } from './FieldMainColumn';

export function FieldRepeatButton({ repeatLimitReached, onClick }) {
  const [loading, setLoading] = useState(false);

  const onClickLoader = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    onClick(() => setLoading(false));
  };

  const button = repeatLimitReached ? (
    <ButtonSecondary disabled>Limit reached</ButtonSecondary>
  ) : (
    <ButtonSecondary onClick={onClickLoader} loading={loading}>
      {!loading && <Icon name="plus" className="mr-2" />}
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
