import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIcon } from 'lib';

export function CloseButton({
  onClick
}: any) {
  return <ButtonIcon onClick={onClick} name="cross" className="close-button" />;
}
