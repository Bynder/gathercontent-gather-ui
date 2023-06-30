import * as React from "react";
import { Input } from "lib";
import { FormContext, statuses } from "./Form";

export function FormInput({ children, inputRef, ...rest }: any) {
  const { status }: any = React.useContext(FormContext);
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
