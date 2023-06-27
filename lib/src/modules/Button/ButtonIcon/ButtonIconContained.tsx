import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIcon } from 'lib';
import { sizes } from '../common';

function ButtonIconContained({
  className,
  ...rest
}: any) {
  const classNames = `button-icon-contained ${className}`;

  return <ButtonIcon className={classNames} {...rest} />;
}

ButtonIconContained.sizes = sizes;

export { ButtonIconContained };
