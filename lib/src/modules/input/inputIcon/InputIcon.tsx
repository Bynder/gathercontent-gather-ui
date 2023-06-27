import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Icon } from 'lib';
import { Input } from '../Input';

export function InputIcon({
  children,
  className = '',
  iconName,
  ...rest
}: any) {
  return (
    <span className={`input-icon ${className}`}>
      <Icon name={iconName} />
      <Input {...rest} />
    </span>
  );
}
