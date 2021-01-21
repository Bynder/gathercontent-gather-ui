import React from 'react';
import { ButtonIcon } from 'lib';

export function CancelButton({ onClick }) {
  return (
    <span className="cancel-button">
      <ButtonIcon onClick={onClick} name="cross" />
    </span>
  );
}
