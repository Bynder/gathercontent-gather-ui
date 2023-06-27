import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonTertiary } from 'lib';

export function FormCancelButton({
  children,
  className = '',
  ...rest
}: any) {
  return (
    <ButtonTertiary className={`form-cancel-button ${className}`} {...rest}>
      {children}
    </ButtonTertiary>
  );
}

FormCancelButton.defaultProps = {
  children: 'Cancel'
};
