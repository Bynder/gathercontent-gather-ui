import React from 'react';
import { ButtonIcon } from 'lib';

export function CloseButton({ onClick }) {
  return <ButtonIcon onClick={onClick} name="cross" className="close-button" />;
}
