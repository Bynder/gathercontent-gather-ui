import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Input } from 'lib';
import { FormContext, statuses } from './Form';

export function FormInput({
  children,
  inputRef,
  ...rest
}: any) {
  const { status } = React.useContext(FormContext);
  const hasFailed = status === statuses.failure;
  const isProcessing = status === statuses.processing;

  return (
    <Input
      invalid={hasFailed}
      disabled={isProcessing}
      inputRef={inputRef}
      {...rest}
    />
  );
}
