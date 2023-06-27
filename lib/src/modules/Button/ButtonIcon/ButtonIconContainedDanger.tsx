import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonIconDanger } from 'lib';
import { sizes } from '../common';

export function ButtonIconContainedDanger({
  className,
  ...rest
}: any) {
  const classNames = `button-icon-contained-danger ${className}`;

  return <ButtonIconDanger className={classNames} {...rest} />;
}

ButtonIconContainedDanger.sizes = sizes;
