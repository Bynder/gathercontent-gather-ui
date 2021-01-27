import React from 'react';
import { ButtonIcon } from 'lib';

export function CloseButton({ onClick }) {
  return (
    <span className="close-button">
      <ButtonIcon onClick={onClick} name="cross" />
    </span>
  );
}
