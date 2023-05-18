import * as React from 'react';
import { Input } from 'lib';
import { FormContext, statuses } from './Form';

export const FormInput = React.forwardRef(function FormInput(
  { children, ...rest },
  ref
) {
  const { status } = React.useContext(FormContext);
  const hasFailed = status === statuses.failure;
  const isProcessing = status === statuses.processing;

  return (
    <Input invalid={hasFailed} disabled={isProcessing} {...rest} ref={ref} />
  );
});
