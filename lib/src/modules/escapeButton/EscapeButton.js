import React from 'react';
import { ButtonIcon } from 'lib';

export function EscapeButton({ onClick }) {
  return (
    <span className="escape-button">
      <ButtonIcon onClick={onClick} name="cross" />
    </span>
  );
}
